"""Add every missing September 2026 catalog row without changing existing products.

Images are extracted from the workbook drawing at the same row as the product.
Run from the repository root with the bundled Python runtime.
"""

import io
import json
import os
import re
import unicodedata
import zipfile
import xml.etree.ElementTree as ET
from collections import Counter, defaultdict
from pathlib import Path

import openpyxl
from PIL import Image


ROOT = Path(__file__).resolve().parents[1]
SOURCE = Path(r"C:\Users\Lenovo\Downloads\Catálogo Soltecom Septiembre 2026.xlsx")
CATALOG = ROOT / "src/data/catalog_products.json"
PRODUCTS_TS = ROOT / "src/data/products.ts"
IMAGE_DIR = ROOT / "public/productos/catalogo"

# Order follows the workbook tabs. The category and brand choices match the
# site's existing catalog, so this update adds rows without recategorizing it.
CONFIG = [
    ("acc-aut", "SOLTECOM", "accesorios-acceso"),
    ("zk-acc", "ZKTeco", "acceso"),
    ("zk-lic", "ZKTeco", "acceso"),
    ("gar", "GAREN", "apertura-garen"),
    ("ppa", "PPA", "apertura-ppa"),
    ("tdy", "Tiandy", "cctv"),
    ("imou", "IMOU", "cctv"),
    ("itb", "Intelbras", "alarmas"),
    ("hik-turbo", "Hikvision", "cctv"),
    ("hik-ip", "Hikvision", "cctv"),
    ("hik-cit", "Hikvision", "citofonia"),
    ("hik-red", "Hikvision", "redes"),
    ("hagroy", "HAGROY", "alarmas"),
]

NS = {
    "xdr": "http://schemas.openxmlformats.org/drawingml/2006/spreadsheetDrawing",
    "a": "http://schemas.openxmlformats.org/drawingml/2006/main",
    "r": "http://schemas.openxmlformats.org/officeDocument/2006/relationships",
}


def slug(value):
    ascii_value = unicodedata.normalize("NFKD", value).encode("ascii", "ignore").decode()
    return re.sub(r"[^a-z0-9]+", "-", ascii_value.lower()).strip("-")


def media_by_row(archive, sheet_number):
    """Resolve pictures anchored in image column B to their workbook bytes."""
    rel_path = f"xl/worksheets/_rels/sheet{sheet_number}.xml.rels"
    if rel_path not in archive.namelist():
        return {}
    rels = ET.fromstring(archive.read(rel_path))
    drawing_target = next((r.get("Target") for r in rels if r.get("Type", "").endswith("/drawing")), None)
    if not drawing_target:
        return {}
    drawing_path = os.path.normpath(os.path.join("xl/worksheets", drawing_target)).replace("\\", "/")
    if drawing_path not in archive.namelist():
        return {}
    drawing_dir, drawing_name = os.path.split(drawing_path)
    image_rels_path = f"{drawing_dir}/_rels/{drawing_name}.rels"
    if image_rels_path not in archive.namelist():
        return {}
    image_rels = ET.fromstring(archive.read(image_rels_path))
    image_paths = {
        r.get("Id"): os.path.normpath(os.path.join(drawing_dir, r.get("Target", ""))).replace("\\", "/")
        for r in image_rels if r.get("Type", "").endswith("/image")
    }
    drawing = ET.fromstring(archive.read(drawing_path))
    selected = {}
    for anchor in drawing:
        if not anchor.tag.endswith(("oneCellAnchor", "twoCellAnchor")):
            continue
        start = anchor.find("xdr:from", NS)
        blip = anchor.find(".//a:blip", NS)
        if start is None or blip is None:
            continue
        row_tag, col_tag = start.find("xdr:row", NS), start.find("xdr:col", NS)
        if row_tag is None or col_tag is None or int(col_tag.text) not in (0, 1):
            continue
        row = int(row_tag.text) + 1
        media = image_paths.get(blip.get(f"{{{NS['r']}}}embed"))
        if media not in archive.namelist():
            continue
        try:
            with Image.open(io.BytesIO(archive.read(media))) as image:
                width, height = image.size
            if width < 25 or height < 25 or width / height > 3 or height / width > 3:
                continue
            score = min(width, height) * (1.5 if int(col_tag.text) == 1 else 1)
            if row not in selected or score > selected[row][0]:
                selected[row] = (score, media)
        except Exception:
            continue
    return {row: media for row, (_, media) in selected.items()}


def category_for(base, description):
    text = description.lower()
    if any(word in text for word in ("citofon", "intercom", "porter")):
        return "citofonia"
    if any(word in text for word in ("switch", "cable", "ups")):
        return "redes"
    if "incendio" in text:
        return "incendio"
    return base


def make_product(prefix, brand, category, row, ref, description, price, image_path, used_ids):
    product_id = f"{prefix}-{re.sub(r'[^a-zA-Z0-9_-]', '-', ref).strip('-')}".lower()
    if product_id in used_ids:
        product_id = f"{product_id}-{row}"
    used_ids.add(product_id)
    text = description.lower()
    tags = []
    if any(word in text for word in ("ip66", "ip67", "exterior")):
        tags.append("Exterior IP66/IP67")
    if "wifi" in text or "wi-fi" in text:
        tags.append("WiFi")
    if any(word in text for word in ("biometr", "huella", "facial")):
        tags.append("Biométrico")
    if "4k" in text:
        tags.append("4K Ultra HD")
    elif any(word in text for word in ("full hd", "1080p", "2mp")):
        tags.append("Full HD 1080p")
    if "poe" in text:
        tags.append("PoE")
    if not tags:
        tags.append("Profesional")
    features = [part.strip() for part in re.split(r"[,.;]\s*", description) if len(part.strip()) > 3][:3]
    if not features:
        features = [description[:80]]
    return {
        "id": product_id,
        "sku": ref,
        "name": f"{brand} {ref}",
        "brand": brand,
        "category": category_for(category, description),
        "shortDesc": description[:140] + ("..." if len(description) > 140 else ""),
        "description": description,
        "price": price,
        "wholesalePrice": int(round(price * .92)),
        "stock": 25,
        "image": image_path,
        "tags": tags,
        "specs": {"Referencia": ref, "Marca": brand, "Garantía": "1 a 2 Años Oficial"},
        "features": features,
        "warranty": "1 a 2 Años de Garantía Oficial",
    }


def main():
    existing = json.loads(CATALOG.read_text(encoding="utf-8"))
    workbook = openpyxl.load_workbook(SOURCE, read_only=True, data_only=True)
    assert len(workbook.worksheets) == len(CONFIG), "Workbook tabs changed; review category mapping"
    used_ids = {p["id"] for p in existing}
    existing_keys = Counter()
    for product in existing:
        prefix = product["id"].rsplit("-", 1)[0]
        for configured_prefix, _, _ in CONFIG:
            if product["id"].startswith(configured_prefix + "-"):
                existing_keys[(configured_prefix, product["sku"].strip())] += 1
                break
    seen_keys = defaultdict(int)
    new_products = []
    image_count = 0
    no_image = []
    IMAGE_DIR.mkdir(parents=True, exist_ok=True)
    with zipfile.ZipFile(SOURCE) as archive:
        for sheet_number, (sheet, (prefix, brand, category)) in enumerate(zip(workbook.worksheets, CONFIG), 1):
            images = media_by_row(archive, sheet_number)
            for row in range(4, sheet.max_row + 1):
                ref_value = sheet.cell(row, 3).value
                description_value = sheet.cell(row, 4).value
                price_value = sheet.cell(row, 5).value
                if not ref_value or not description_value or not isinstance(price_value, (int, float)) or price_value <= 0:
                    continue
                ref, description = str(ref_value).strip(), str(description_value).strip()
                if ref.lower() in ("referencia", "ref", "modelo"):
                    continue
                key = (prefix, ref)
                seen_keys[key] += 1
                if seen_keys[key] <= existing_keys[key]:
                    continue
                price = int(round(float(price_value)))
                if price > 1000:
                    price = int(round(price / 100) * 100)
                product_name = f"{brand} {ref}"
                filename = f"{slug(product_name)}.webp"
                destination = IMAGE_DIR / filename
                if destination.exists() or any(p["image"].endswith("/" + filename) for p in new_products):
                    filename = f"{slug(product_name)}-fila-{row}.webp"
                    destination = IMAGE_DIR / filename
                media = images.get(row)
                if media:
                    try:
                        with Image.open(io.BytesIO(archive.read(media))) as image:
                            image.convert("RGBA" if "A" in image.getbands() else "RGB").save(destination, "WEBP", quality=92)
                        image_path = f"/productos/catalogo/{filename}"
                        image_count += 1
                    except Exception:
                        media = None
                if not media:
                    raise ValueError(
                        f"Falta imagen para {ref} en {sheet.title}, fila {row}. "
                        "Agrega una foto del producto antes de publicarlo."
                    )
                new_products.append(make_product(prefix, brand, category, row, ref, description, price, image_path, used_ids))
    products = existing + new_products
    CATALOG.write_text(json.dumps(products, ensure_ascii=False, indent=2) + "\n", encoding="utf-8")
    PRODUCTS_TS.write_text("import { Product } from '../types';\n\nexport const PRODUCTS: Product[] = " + json.dumps(products, ensure_ascii=False, indent=2) + ";\n", encoding="utf-8")
    print(json.dumps({"existing": len(existing), "added": len(new_products), "total": len(products), "images_extracted": image_count, "without_workbook_image": no_image}, ensure_ascii=False))


if __name__ == "__main__":
    main()
