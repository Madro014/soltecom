import zipfile
import xml.etree.ElementTree as ET
import openpyxl
import os
import io
import re
import json
import time
from concurrent.futures import ThreadPoolExecutor
from PIL import Image, ImageOps, ImageFilter

XLSX_PATH = r"C:\Users\Lenovo\Downloads\Catálogo Soltecom Septiembre 2026.xlsx"
OUTPUT_IMG_DIR = r"D:\l\public\productos\catalogo"
OUTPUT_JSON_PATH = r"D:\l\src\data\catalog_products.json"
OUTPUT_TS_PATH = r"D:\l\src\data\products.ts"

os.makedirs(OUTPUT_IMG_DIR, exist_ok=True)

NS = {
    'xdr': 'http://schemas.openxmlformats.org/drawingml/2006/spreadsheetDrawing',
    'a': 'http://schemas.openxmlformats.org/drawingml/2006/main',
    'r': 'http://schemas.openxmlformats.org/officeDocument/2006/relationships'
}

def clean_process_image(raw_bytes, target_size=400):
    im = Image.open(io.BytesIO(raw_bytes))
    w, h = im.size
    
    # 1. If image already has native clean transparency (PNG)
    has_native_alpha = (im.mode in ('RGBA', 'LA')) or ('transparency' in im.info)
    if has_native_alpha:
        im_rgba = im.convert("RGBA")
        # Check if alpha channel actually has transparent pixels
        alpha = im_rgba.split()[-1]
        min_a, max_a = alpha.getextrema()
        if min_a < 240:
            # PERFECT NATIVE TRANSPARENT PNG!
            # Resize proportionally without exceeding native quality
            scale = min((target_size * 0.88) / w, (target_size * 0.88) / h)
            if scale > 1.5:
                scale = 1.5 # don't blow up small images
            nw = max(1, int(w * scale))
            nh = max(1, int(h * scale))
            resized = im_rgba.resize((nw, nh), Image.Resampling.LANCZOS)
            
            # Subtle sharpening for crispness
            resized = resized.filter(ImageFilter.UnsharpMask(radius=1.0, percent=100, threshold=1))
            
            canvas = Image.new("RGBA", (target_size, target_size), (0, 0, 0, 0))
            paste_x = (target_size - nw) // 2
            paste_y = (target_size - nh) // 2
            canvas.paste(resized, (paste_x, paste_y), resized)
            return canvas

    # 2. Image is RGB / JPEG on white/light background
    # Use smooth anti-aliased feathering (NO jagged floodfill)
    im_rgb = im.convert("RGB")
    scale = min((target_size * 0.88) / w, (target_size * 0.88) / h)
    if scale > 1.5:
        scale = 1.5
    nw = max(1, int(w * scale))
    nh = max(1, int(h * scale))
    resized = im_rgb.resize((nw, nh), Image.Resampling.LANCZOS)
    
    # Subtle sharpening
    resized = resized.filter(ImageFilter.UnsharpMask(radius=1.2, percent=110, threshold=2))
    
    # Check if corners are near white
    corners = [(0, 0), (nw - 1, 0), (0, nh - 1), (nw - 1, nh - 1)]
    px = resized.load()
    is_white_bg = any(px[x, y][0] > 220 and px[x, y][1] > 220 and px[x, y][2] > 220 for x, y in corners)
    
    if is_white_bg:
        diff = ImageOps.invert(resized)
        gray = diff.convert("L")
        # Soft, smooth ramp: 0-10 -> transparent, 10-40 -> smooth feather, >40 -> solid opaque
        lut = [0 if i < 10 else (int(255 * (i - 10) / 32) if i < 42 else 255) for i in range(256)]
        alpha_mask = gray.point(lut)
        
        resized_rgba = resized.convert("RGBA")
        resized_rgba.putalpha(alpha_mask)
        
        canvas = Image.new("RGBA", (target_size, target_size), (0, 0, 0, 0))
        paste_x = (target_size - nw) // 2
        paste_y = (target_size - nh) // 2
        canvas.paste(resized_rgba, (paste_x, paste_y), resized_rgba)
        return canvas
    else:
        # Non-white background, keep clean RGB centered
        canvas = Image.new("RGB", (target_size, target_size), (255, 255, 255))
        paste_x = (target_size - nw) // 2
        paste_y = (target_size - nh) // 2
        canvas.paste(resized, (paste_x, paste_y))
        return canvas

def process_worker(args):
    raw_bytes, target_path = args
    try:
        res = clean_process_image(raw_bytes, target_size=400)
        res.save(target_path, "WEBP", quality=95)
        return True
    except Exception as e:
        print(f"Error {target_path}: {e}")
        return False

# Open workbook & zip
print("Opening workbook...")
wb = openpyxl.load_workbook(XLSX_PATH, data_only=True)
z = zipfile.ZipFile(XLSX_PATH, 'r')
file_list = z.namelist()

sheet_to_drawing = {}
for i, name in enumerate(wb.sheetnames, 1):
    rel_file = f"xl/worksheets/_rels/sheet{i}.xml.rels"
    if rel_file in file_list:
        root = ET.fromstring(z.read(rel_file))
        for r in root:
            if 'drawing' in r.attrib.get('Type', ''):
                t = r.attrib.get('Target')
                clean = os.path.normpath(os.path.join('xl/worksheets', t)).replace('\\', '/')
                sheet_to_drawing[name] = clean

SHEET_CONFIG = {
    'Ctrl Acceso Autónomo-Accesorios': {'brand': 'ZKTeco', 'category': 'accesorios-acceso', 'limit': 30, 'prefix': 'acc-aut'},
    'Control de Acceso ZKTECO': {'brand': 'ZKTeco', 'category': 'acceso', 'limit': 30, 'prefix': 'zk-acc'},
    'Licencias ZKTECO': {'brand': 'ZKTeco', 'category': 'acceso', 'limit': 15, 'prefix': 'zk-lic'},
    'Motores Automatización GAREN': {'brand': 'GAREN', 'category': 'apertura-garen', 'limit': 30, 'prefix': 'gar'},
    'Motores Puertas Vehiculares PPA': {'brand': 'PPA', 'category': 'apertura-ppa', 'limit': 30, 'prefix': 'ppa'},
    'Cámaras,NVR´s IP Tiandy': {'brand': 'Tiandy', 'category': 'cctv', 'limit': 30, 'prefix': 'tdy'},
    'Cámaras Wifi IMOU': {'brand': 'IMOU', 'category': 'cctv', 'limit': 30, 'prefix': 'imou'},
    'Alarmas, Citofonia Intelbras': {'brand': 'Intelbras', 'category': 'alarmas', 'limit': 30, 'prefix': 'itb'},
    'Hikvisión-Turbo DVR´s,Cámaras': {'brand': 'Hikvision', 'category': 'cctv', 'limit': 30, 'prefix': 'hik-turbo'},
    'Hikvisión-NVR´s,Cámaras IP': {'brand': 'Hikvision', 'category': 'cctv', 'limit': 30, 'prefix': 'hik-ip'},
    'Hikvisión-Acceso-Video Porteri ': {'brand': 'Hikvision', 'category': 'citofonia', 'limit': 30, 'prefix': 'hik-cit'},
    'Hikvisión-Cableado-Transmisión': {'brand': 'Hikvision', 'category': 'redes', 'limit': 30, 'prefix': 'hik-red'},
    'Cercos Eléctricos HAGROY': {'brand': 'HAGROY', 'category': 'alarmas', 'limit': 20, 'prefix': 'hagroy'}
}

def find_sheet_key(s_name):
    clean_s = s_name.lower().replace('á','a').replace('é','e').replace('í','i').replace('ó','o').replace('ú','u').replace('´','').replace("'", "")
    for k in SHEET_CONFIG:
        clean_k = k.lower().replace('á','a').replace('é','e').replace('í','i').replace('ó','o').replace('ú','u').replace('´','').replace("'", "").strip()
        if clean_k in clean_s or clean_s in clean_k:
            return k
    return None

all_products = []
images_queue = []

for s_name in wb.sheetnames:
    conf_key = find_sheet_key(s_name)
    if not conf_key:
        continue
    
    cfg = SHEET_CONFIG[conf_key]
    drawing_file = sheet_to_drawing.get(s_name)
    
    row_to_media = {}
    if drawing_file and drawing_file in file_list:
        d_dir, d_name = os.path.split(drawing_file)
        d_rel_file = f"{d_dir}/_rels/{d_name}.rels"
        img_map = {}
        if d_rel_file in file_list:
            d_rels = ET.fromstring(z.read(d_rel_file))
            for r in d_rels:
                if 'image' in r.attrib.get('Type', ''):
                    t = r.attrib.get('Target')
                    clean = os.path.normpath(os.path.join(d_dir, t)).replace('\\', '/')
                    img_map[r.attrib.get('Id')] = clean
                    
        d_root = ET.fromstring(z.read(drawing_file))
        anchors = d_root.findall('.//xdr:twoCellAnchor', NS) + d_root.findall('.//xdr:oneCellAnchor', NS)
        
        row_candidates = {}
        for anc in anchors:
            from_tag = anc.find('xdr:from', NS)
            if from_tag is not None:
                r_el = from_tag.find('xdr:row', NS)
                c_el = from_tag.find('xdr:col', NS)
                if r_el is not None and c_el is not None:
                    r_idx = int(r_el.text) + 1
                    c_idx = int(c_el.text)
                    
                    if c_idx in [0, 1]:
                        blip = anc.find('.//a:blip', NS)
                        if blip is not None:
                            embed_id = blip.attrib.get('{http://schemas.openxmlformats.org/officeDocument/2006/relationships}embed')
                            m_path = img_map.get(embed_id)
                            if m_path and m_path in z.namelist():
                                try:
                                    im_check = Image.open(io.BytesIO(z.read(m_path)))
                                    w_c, h_c = im_check.size
                                    aspect = w_c / max(1, h_c)
                                    if aspect > 3.0 or aspect < 0.3 or h_c < 25 or w_c < 25:
                                        score = 5
                                    else:
                                        score = min(w_c, h_c) * (1.5 if c_idx == 1 else 1.0)
                                        
                                    if r_idx not in row_candidates or score > row_candidates[r_idx]['score']:
                                        row_candidates[r_idx] = {'path': m_path, 'score': score}
                                except Exception:
                                    pass
                                    
        for r_idx, c_info in row_candidates.items():
            row_to_media[r_idx] = c_info['path']
                            
    ws = wb[s_name]
    valid_in_sheet = []
    
    for r in range(4, ws.max_row + 1):
        ref_val = ws.cell(r, 3).value
        desc_val = ws.cell(r, 4).value
        price_val = ws.cell(r, 5).value
        
        if not ref_val or not desc_val or price_val is None:
            continue
            
        ref_str = str(ref_val).strip()
        desc_str = str(desc_val).strip()
        
        if ref_str.lower() in ['referencia', 'ref', 'modelo'] or str(price_val).strip().lower() == 'precio':
            continue
            
        try:
            numeric_price = float(price_val)
            if numeric_price <= 0:
                continue
        except (ValueError, TypeError):
            continue
            
        final_price = int(round(numeric_price))
        if final_price > 1000:
            final_price = int(round(final_price / 100.0) * 100)
            
        media_path = row_to_media.get(r)
        
        valid_in_sheet.append({
            'row': r,
            'ref': ref_str,
            'desc': desc_str,
            'price': final_price,
            'media_path': media_path
        })
        
    sorted_candidates = sorted(valid_in_sheet, key=lambda x: (not x['media_path']))
    selected = sorted_candidates[:cfg['limit']]
    
    last_known_img = None
    
    for idx, item in enumerate(selected):
        clean_ref = re.sub(r'[^a-zA-Z0-9_-]', '-', item['ref']).strip('-')
        prod_id = f"{cfg['prefix']}-{clean_ref}".lower()
        
        existing_ids = {p['id'] for p in all_products}
        if prod_id in existing_ids:
            prod_id = f"{prod_id}-{item['row']}"
            
        img_filename = f"{prod_id}.webp"
        img_disk_path = os.path.join(OUTPUT_IMG_DIR, img_filename)
        img_web_path = f"/productos/catalogo/{img_filename}"
        
        media_file = item['media_path']
        if media_file and media_file in file_list:
            raw_bytes = z.read(media_file)
            images_queue.append((raw_bytes, img_disk_path))
            last_known_img = img_web_path
        elif last_known_img:
            img_web_path = last_known_img
        else:
            img_web_path = "/logo/logosoteco.webp"
            
        brand = cfg['brand']
        category = cfg['category']
        
        if 'citofon' in item['desc'].lower() or 'intercom' in item['desc'].lower() or 'porter' in item['desc'].lower():
            category = 'citofonia'
        elif 'switch' in item['desc'].lower() or 'cable' in item['desc'].lower() or 'ups' in item['desc'].lower():
            category = 'redes'
        elif 'incendio' in item['desc'].lower():
            category = 'incendio'
            
        sentences = [s.strip() for s in re.split(r'[,.;]\s*', item['desc']) if len(s.strip()) > 3]
        features = sentences[:3] if len(sentences) >= 3 else [item['desc'][:80]]
        
        tags = []
        desc_lower = item['desc'].lower()
        if 'ip66' in desc_lower or 'ip67' in desc_lower or 'exterior' in desc_lower:
            tags.append('Exterior IP66/IP67')
        if 'wifi' in desc_lower:
            tags.append('WiFi')
        if 'biometr' in desc_lower or 'huella' in desc_lower or 'facial' in desc_lower:
            tags.append('Biométrico')
        if '4k' in desc_lower:
            tags.append('4K Ultra HD')
        elif 'full hd' in desc_lower or '1080p' in desc_lower or '2mp' in desc_lower:
            tags.append('Full HD 1080p')
        if 'poe' in desc_lower:
            tags.append('PoE')
        if not tags:
            tags.append('Profesional')
            
        short_desc = item['desc'][:140] + ('...' if len(item['desc']) > 140 else '')
        
        product_obj = {
            'id': prod_id,
            'sku': item['ref'],
            'name': f"{brand} {item['ref']}",
            'brand': brand,
            'category': category,
            'shortDesc': short_desc,
            'description': item['desc'],
            'price': item['price'],
            'wholesalePrice': int(round(item['price'] * 0.9)),
            'stock': 25,
            'image': img_web_path,
            'tags': tags,
            'specs': {
                'Referencia': item['ref'],
                'Marca': brand,
                'Garantía': '1 a 2 Años Oficial'
            },
            'features': features,
            'warranty': '1 a 2 Años de Garantía Oficial'
        }
        all_products.append(product_obj)

print(f"Total products compiled: {len(all_products)}")
print(f"Images to process with anti-aliased clean pipeline: {len(images_queue)}")

with ThreadPoolExecutor(max_workers=8) as executor:
    results = list(executor.map(process_worker, images_queue))
print(f"Processed {sum(1 for r in results if r)} images successfully!")

with open(OUTPUT_JSON_PATH, 'w', encoding='utf-8') as f:
    json.dump(all_products, f, ensure_ascii=False, indent=2)

ts_code = f"""import {{ Product }} from '../types';

export const PRODUCTS: Product[] = {json.dumps(all_products, ensure_ascii=False, indent=2)};
"""

with open(OUTPUT_TS_PATH, 'w', encoding='utf-8') as f:
    f.write(ts_code)

print("Catalog regenerated with clean HD images!")
