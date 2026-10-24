"""Align catalog brand and public technical labels with the supplied workbook."""

import json
import re
import shutil
import unicodedata
from pathlib import Path


ROOT = Path(__file__).resolve().parents[1]
CATALOG = ROOT / "src/data/catalog_products.json"
PRODUCTS_TS = ROOT / "src/data/products.ts"


def slug(value):
    ascii_value = unicodedata.normalize("NFKD", value).encode("ascii", "ignore").decode()
    return re.sub(r"[^a-z0-9]+", "-", ascii_value.lower()).strip("-")


def main():
    products = json.loads(CATALOG.read_text(encoding="utf-8"))
    corrected_brand = 0
    for product in products:
        if product["id"].startswith("acc-aut-"):
            product["brand"] = "SOLTECOM"
            product["name"] = f"SOLTECOM {product['sku']}"
            old_image = ROOT / "public" / product["image"].lstrip("/")
            filename = f"{slug(product['name'])}.webp"
            new_image = ROOT / "public/productos/catalogo" / filename
            if old_image != new_image and old_image.exists():
                if new_image.exists():
                    filename = f"{slug(product['name'])}-{slug(product['id'])}.webp"
                    new_image = new_image.with_name(filename)
                shutil.move(old_image, new_image)
            product["image"] = f"/productos/catalogo/{filename}"
            corrected_brand += 1

        description = product["description"]
        lower = description.lower()
        product["specs"] = {"Referencia": product["sku"], "Marca": product["brand"]}

        # Only show classifications stated in this product's source description.
        tags = []
        for pattern, label in (
            (r"\bIP6[5-9]\b", None),
            (r"\bWi[ -]?Fi\b", "WiFi"),
            (r"\bPoE\b", "PoE"),
            (r"\b4K\b", "4K"),
            (r"\b1080p\b", "1080p"),
        ):
            match = re.search(pattern, description, re.IGNORECASE)
            if match:
                tags.append(match.group(0).upper() if label is None else label)
        product["tags"] = tags

        warranty = re.search(r"garant[ií]a\s*(?:de\s*)?(\d+\s*(?:año|años|mes|meses))", lower)
        product["warranty"] = f"Garantía de {warranty.group(1)}" if warranty else ""

    CATALOG.write_text(json.dumps(products, ensure_ascii=False, indent=2) + "\n", encoding="utf-8")
    PRODUCTS_TS.write_text(
        "import { Product } from '../types';\n\nexport const PRODUCTS: Product[] = "
        + json.dumps(products, ensure_ascii=False, indent=2) + ";\n",
        encoding="utf-8",
    )
    print(f"Updated {len(products)} products; separated {corrected_brand} SOLTECOM products")


if __name__ == "__main__":
    main()
