import { Product } from '../types';

export const PRODUCTS: Product[] = [
  // ==========================================
  // PÁGINA 5: SISTEMAS DE CCTV IP (MARCA TIANDY)
  // ==========================================
  {
    id: 'TIANDY-BULLET-4K',
    sku: 'TD-TC-C38MS-4K',
    name: 'Cámara Bullet IP Tiandy 4K UHD con Super Starlight',
    brand: 'Tiandy',
    category: 'cctv',
    shortDesc: 'Ideales para exteriores, gran alcance IR y alta resistencia IP67. Visión nocturna a todo color.',
    description: 'Cámara Bullet IP Tiandy de ultra alta definición 4K (8MP). Cuenta con tecnología Super Starlight para imágenes nítidas en color con iluminación mínima, compresión eficiente S+265/H.265+ que ahorra hasta un 80% de ancho de banda y analítica inteligente (detección de rostro, cruce de línea, intrusión y placas). Acceso remoto desde PC y smartphones vía App EasyLive Plus.',
    price: 620000,
    wholesalePrice: 530000,
    stock: 90,
    image: '/productos/Sistemas de Videovigilancia (CCTV IP - Tiandy)/caamaras bullet.png',
    tags: ['4K UHD', 'Super Starlight', 'IP67/IK10', 'Bullet'],
    specs: {
      'Resolución': '8MP 4K UHD (3840 × 2160)',
      'Tecnología Nocturna': 'Super Starlight a todo color',
      'Protección': 'IP67 intemperie y sellado contra polvo',
      'Compresión': 'S+265 / H.265+ / H.264',
      'App Móvil': 'EasyLive Plus (iOS / Android)'
    },
    features: [
      'Visión nocturna a color sin luces invasivas',
      'Analítica de video: detección de rostros, cruce de línea e intrusión',
      'Ahorra hasta un 80% de almacenamiento y ancho de banda'
    ],
    warranty: '2 Años de Garantía Oficial Tiandy'
  },
  {
    id: 'TIANDY-DOMO-STARLIGHT',
    sku: 'TD-TC-C34MS-DOMO',
    name: 'Cámara Domo IP Tiandy 4MP Super Starlight Antivandálica',
    brand: 'Tiandy',
    category: 'cctv',
    shortDesc: 'Diseño discreto y elegante para interiores y exteriores. Carcasa antivandálica IK10.',
    description: 'Cámara Domo IP con diseño sobrio y moderno para oficinas, retail y conjuntos residenciales. Equipada con sensor Super Starlight para visión continua en color, algoritmo inteligente de detección humana y resistencia IK10 ante golpes o vandalismo.',
    price: 460000,
    wholesalePrice: 395000,
    stock: 120,
    image: '/productos/Sistemas de Videovigilancia (CCTV IP - Tiandy)/camaras domo.png',
    tags: ['4MP Starlight', 'IK10 Antivandalismo', 'Domo'],
    specs: {
      'Resolución': '4 Megapíxeles Real (2560 × 1440)',
      'Resistencia': 'IK10 antivandálica y protección IP67',
      'Visión Nocturna': 'Starlight color continuo',
      'Conexión': 'PoE Estándar (802.3af)'
    },
    features: [
      'Carcasa metálica ultra resistente a impactos',
      'Filtro de falsas alarmas por movimiento de vegetación',
      'Monitoreo centralizado compatible con VMS'
    ],
    warranty: '2 Años de Garantía Oficial Tiandy'
  },
  {
    id: 'TIANDY-PTZ-SPEEDDOME',
    sku: 'TD-TC-H334S-PTZ',
    name: 'Cámara PTZ Tiandy Domo Motorizado 25X Zoom Óptico',
    brand: 'Tiandy',
    category: 'cctv',
    shortDesc: 'Monitoreo de grandes áreas con movimiento panorámico 360°, inclinación y zoom óptico.',
    description: 'Cámara PTZ de alta precisión para vigilancia perimetral de amplias extensiones en industrias, bodegas, parqueaderos y vías de condominios. Movimiento continuo 360°, auto-tracking inteligente para seguimiento de personas y vehículos, y zoom óptico 25X.',
    price: 2450000,
    wholesalePrice: 2150000,
    stock: 25,
    image: '/productos/Sistemas de Videovigilancia (CCTV IP - Tiandy)/camaras ptz.png',
    tags: ['PTZ 360°', 'Zoom 25X', 'Auto-Tracking'],
    specs: {
      'Zoom': '25X Zoom Óptico motorizado',
      'Rango IR': 'Hasta 150 metros en oscuridad absoluta',
      'Giro': 'Pan 360° sin fin, Tilt -15° a 90°',
      'Auto-Tracking': 'Seguimiento automatizado por IA'
    },
    features: [
      'Patrullaje preprogramado con hasta 256 presets',
      'Detección perimetral inteligente para áreas críticas'
    ],
    warranty: '2 Años de Garantía Oficial'
  },
  {
    id: 'TIANDY-NVR-16CH',
    sku: 'TD-NVR-TC-R3216',
    name: 'Grabador NVR Tiandy 16 Canales 4K con IA',
    brand: 'Tiandy',
    category: 'cctv',
    shortDesc: 'Grabadores IP de alto rendimiento, compatibles con múltiples cámaras y funciones inteligentes.',
    description: 'NVR para 16 cámaras IP 4K de alta estabilidad y grabación ininterrumpida. Búsqueda inteligente por rostro y placas, soporte para 2 discos duros de alta capacidad y redundancia de datos. Monitoreo unificado en tiempo real con App EasyLive Plus.',
    price: 1150000,
    wholesalePrice: 980000,
    stock: 40,
    image: '/productos/Sistemas de Videovigilancia (CCTV IP - Tiandy)/NVR tiandy.png',
    tags: ['16 Canales', '4K UHD', 'Búsqueda IA'],
    specs: {
      'Capacidad': '16 Canales de video IP hasta 8MP (4K)',
      'Almacenamiento': '2 Bahías SATA hasta 20TB total',
      'Salidas': 'HDMI 4K + VGA simultáneo',
      'Ancho de banda': '160 Mbps entrante'
    },
    features: [
      'Búsqueda inteligente por eventos y analítica',
      'Exportación rápida a memoria USB o red'
    ],
    warranty: '2 Años de Garantía'
  },
  {
    id: 'CCTV-ACC-SOPORTE',
    sku: 'STC-BRA-JUNCTION',
    name: 'Soporte y Caja de Conexión Estanca para CCTV',
    brand: 'Tiandy / SOLTECOM',
    category: 'cctv',
    shortDesc: 'Soportes, cajas de conexión y accesorios certificados para una instalación segura.',
    description: 'Caja de paso estanca de aluminio reforzado IP66 con prensaestopas. Protege conectores RJ45 y fuentes de alimentación contra el agua, la intemperie y la corrosión.',
    price: 45000,
    wholesalePrice: 35000,
    stock: 300,
    image: '/productos/Sistemas de Videovigilancia (CCTV IP - Tiandy)/AccesoriosT.png',
    tags: ['Caja Estanca', 'Aluminio IP66', 'Instalación'],
    specs: {
      'Material': 'Aluminio fundido anticorrosión',
      'Protección': 'IP66 para intemperie',
      'Compatibilidad': 'Cámaras domo y bullet'
    },
    features: [
      'Organización oculta y limpia del cableado estructurado',
      'Facilita mantenimientos y cambios sin desmontar tubos'
    ],
    warranty: '1 Año de Garantía'
  },

  // ==========================================
  // PÁGINA 6 & 11: CONTROL DE ACCESO (MARCA ZKTECO)
  // ==========================================
  {
    id: 'ZK-TERMINAL-FACIAL',
    sku: 'ZK-SPEEDFACE-V5L',
    name: 'Terminal de Acceso Facial ZKTeco con Reconocimiento en Movimiento',
    brand: 'ZKTeco',
    category: 'acceso',
    shortDesc: 'Reconocimiento facial rápido y preciso sin contacto, aumentando la seguridad y comodidad.',
    description: 'Terminal biométrico con tecnología Visible Light Facial Recognition de ZKTeco. Reconoce el rostro en menos de 0.3 segundos incluso con el usuario caminando, evitando filas en accesos peatonales de empresas y conjuntos.',
    price: 1350000,
    wholesalePrice: 1180000,
    stock: 60,
    image: '/productos/Control de Acceso Peatonal y Vehicular (ZKTeco)/terminales de acceso.png',
    tags: ['Reconocimiento Facial', 'ZKTeco', 'Anti-Fraude'],
    specs: {
      'Capacidad': '6.000 Rostros / 10.000 Huellas / 10.000 Tarjetas',
      'Pantalla': '5 Pulgadas Touch IPS',
      'Velocidad': '< 0.3 segundos de verificación',
      'Conexión': 'TCP/IP, Wi-Fi, RS485'
    },
    features: [
      'Algoritmo anti-falsificación contra fotos, videos y máscaras 3D',
      'Compatible con software ZKBioAccess IVS'
    ],
    warranty: '1 Año Oficial ZKTeco'
  },
  {
    id: 'ZK-LECTOR-HUELLA',
    sku: 'ZK-INBIO-PRO',
    name: 'Lector Biométrico de Huella Dactilar y Tarjeta ZKTeco',
    brand: 'ZKTeco',
    category: 'acceso',
    shortDesc: 'Tecnología biométrica confiable que garantiza la identidad de cada usuario y evita suplantaciones.',
    description: 'Lector biométrico para control de acceso en puertas de oficinas, servidores y accesos peatonales. Compatible con tarjetas RFID de alta frecuencia y conexión Wiegand a paneles controladores.',
    price: 280000,
    wholesalePrice: 235000,
    stock: 140,
    image: '/productos/Control de Acceso Peatonal y Vehicular (ZKTeco)/lectores biométricos.png',
    tags: ['Huella Dactilar', 'RFID Mifare', 'Wiegand'],
    specs: {
      'Sensor': 'Sensor óptico SilkID de alta precisión',
      'Salida': 'Wiegand 26/34 bits',
      'Resistencia': 'Carcasa IP65 apta para intemperie techada'
    },
    features: [
      'Lectura precisa en dedos secos, húmedos o rugosos',
      'Indicador sonoro y LED multicolor de autorización'
    ],
    warranty: '1 Año de Garantía'
  },
  {
    id: 'ZK-TORNIQUETE-TRIPODE',
    sku: 'ZK-TS2000-PRO',
    name: 'Torniquete Peatonal Trípode ZKTeco en Acero Inoxidable',
    brand: 'ZKTeco',
    category: 'acceso',
    shortDesc: 'Torniquetes: trípode, brazo abatible, alas de cristal y más. Flujo seguro bidireccional.',
    description: 'Mecanismo de control de paso peatonal bidireccional fabricado en acero inoxidable SUS304 para uso de tráfico pesado. Cuenta con función de brazo abatible automático ante emergencias o corte eléctrico.',
    price: 3950000,
    wholesalePrice: 3500000,
    stock: 18,
    image: '/productos/Control de Acceso Peatonal y Vehicular (ZKTeco)/Torniquetes.png',
    tags: ['Trípode SUS304', 'Brazo Abatible', 'Alto Flujo'],
    specs: {
      'Flujo': '30 a 35 personas por minuto',
      'Chasis': 'Acero inoxidable SUS304 pulido',
      'Seguridad': 'Caída de brazo por señal de emergencia'
    },
    features: [
      'Espacio integrado para lectores faciales o de huella ZKTeco',
      'Señalización LED de paso permitido o denegado'
    ],
    warranty: '2 Años de Garantía Oficial'
  },
  {
    id: 'ZK-CERRADURA-ELECTRONICA',
    sku: 'ZK-GL300-GLASS',
    name: 'Cerradura Electrónica Inteligente para Puertas de Vidrio y Metal',
    brand: 'ZKTeco',
    category: 'acceso',
    shortDesc: 'Control seguro para puertas de vidrio templado, madera y metal sin perforaciones complejas.',
    description: 'Cerradura digital de sobreponer para puertas de cristal en oficinas y comercios. Desbloqueo mediante huella dactilar, tarjeta RFID Mifare, contraseña numérica o control remoto.',
    price: 520000,
    wholesalePrice: 440000,
    stock: 50,
    image: '/productos/Control de Acceso Peatonal y Vehicular (ZKTeco)/cerradura electrónicas.png',
    tags: ['Vidrio Templado', 'Sin Perforar', 'Digital'],
    specs: {
      'Puertas': 'Vidrio de 10mm a 12mm de espesor',
      'Métodos': 'Huella, Tarjeta, Contraseña, Control',
      'Alimentación': '4 Baterías AA con puerto de emergencia USB'
    },
    features: [
      'Instalación fácil sin necesidad de perforar el vidrio',
      'Timbre de llamada integrado y bloqueo automático'
    ],
    warranty: '1 Año de Garantía'
  },
  {
    id: 'ZK-BARRERA-VEHICULAR',
    sku: 'ZK-BG1000-SERIES',
    name: 'Barrera Vehicular Automática ZKTeco de Alta Velocidad',
    brand: 'ZKTeco',
    category: 'acceso',
    shortDesc: 'Automatización de accesos con brazo de alta velocidad (1.5s - 3s) para alto tráfico.',
    description: 'Barrera electromecánica para control vehicular en parqueaderos, centros comerciales y condominios. Diseñada para operar sin pausas en horas pico con brazo telescópico y luz LED de advertencia.',
    price: 3600000,
    wholesalePrice: 3200000,
    stock: 15,
    image: '/productos/Control de Acceso Peatonal y Vehicular (ZKTeco)/barreras vehiculares.png',
    tags: ['Barrera 1.5s', 'Vehicular', 'Parqueaderos'],
    specs: {
      'Tiempo Apertura': '1.5 segundos a 3 segundos graduable',
      'Longitud Brazo': 'Hasta 4.5 metros recto o articulado',
      'Motor': 'DC Brushless de libre mantenimiento'
    },
    features: [
      'Reversión automática al detectar vehículo u obstáculo',
      'Integración con radares, lazos inductivos y antenas UHF'
    ],
    warranty: '2 Años de Garantía'
  },
  {
    id: 'ZK-CAMARA-LPR',
    sku: 'ZK-LPR-CARSPOT',
    name: 'Cámara Reconocimiento de Placas (LPR) ZKTeco con OCR',
    brand: 'ZKTeco',
    category: 'acceso',
    shortDesc: 'Control vehicular inteligente que permite la identificación automática de placas y gestión de listas.',
    description: 'Cámara especializada para control de acceso vehicular mediante lectura automática de placas de Colombia con un 98% de precisión. Gestión de listas blancas (residentes) y negras (restringidos) directamente en el hardware.',
    price: 1850000,
    wholesalePrice: 1600000,
    stock: 22,
    image: '/productos/Control de Acceso Peatonal y Vehicular (ZKTeco)/reconocimiento de placas (LPR).png',
    tags: ['LPR OCR', 'Placas Colombia', 'ZKTeco'],
    specs: {
      'Precisión OCR': '> 98% en placas nacionales',
      'Lente': 'Varifocal motorizado 2.8-12mm',
      'Salida': 'Relé directo para apertura de talanquera'
    },
    features: [
      'Apertura automática de la barrera sin bajar la ventanilla',
      'Registro fotográfico de cada vehículo con fecha y hora'
    ],
    warranty: '2 Años de Garantía'
  },
  {
    id: 'ZK-ANTENA-UHF',
    sku: 'ZK-UHF1-10E',
    name: 'Controlador y Antena UHF ZKTeco Largo Alcance (12 Metros)',
    brand: 'ZKTeco',
    category: 'acceso',
    shortDesc: 'Controladores y UHF: gestión de accesos con TAGs para larga distancia y manos libres.',
    description: 'Lector RFID UHF de largo alcance (hasta 12 metros) para parabrisas de vehículos. Permite ingreso fluido sin detener el automóvil en peajes privados y conjuntos residenciales.',
    price: 920000,
    wholesalePrice: 790000,
    stock: 45,
    image: '/productos/Control de Acceso Peatonal y Vehicular (ZKTeco)/controladores y UHF.png',
    tags: ['UHF 12m', 'TAG Vehicular', 'Wiegand'],
    specs: {
      'Alcance de Lectura': 'Hasta 12 metros según TAG vehicular',
      'Frecuencia': '902-928 MHz (Regulación colombiana)',
      'Protección': 'IP66 para intemperie extrema'
    },
    features: [
      'Lectura simultánea de múltiples vehículos',
      'Compatible con TAGs adhesivos para parabrisas'
    ],
    warranty: '1 Año de Garantía'
  },
  {
    id: 'ACC-PUERTAS-PEATONALES',
    sku: 'STC-DOOR-ACC',
    name: 'Accesorios para Puertas Peatonales',
    brand: 'SOLTECOM',
    category: 'accesorios-acceso',
    shortDesc: 'Cerraduras eléctricas de sobreponer y embutir. Chapas magnéticas. Bisagras y pivotes de alta resistencia.',
    description: 'Instalación en puertas de madera, metal y vidrio. Seguridad y durabilidad en cada acceso.',
    price: 150000,
    wholesalePrice: 120000,
    stock: 100,
    image: '/productos/Hardware para Control de Acceso/accesorios_puertas.png',
    tags: ['Cerraduras', 'Bisagras', 'Puertas Peatonales'],
    specs: {
      'Compatibilidad': 'Madera, metal y vidrio',
      'Material': 'Acero y aluminio de alta resistencia',
      'Aplicación': 'Acceso Peatonal'
    },
    features: [
      'Seguridad y durabilidad en cada acceso',
      'Fácil instalación y mantenimiento'
    ],
    warranty: '1 Año de Garantía'
  },
  {
    id: 'ACC-ELECTROIMAN-KIT',
    sku: 'STC-MAG-600',
    name: 'Electroimanes',
    brand: 'SOLTECOM',
    category: 'accesorios-acceso',
    shortDesc: 'Fuerzas de sujeción desde 180 kg hasta 600 kg. Consumo eficiente y bajo mantenimiento.',
    description: 'Para puertas de madera, metal y vidrio. Uso en interiores y exteriores. Sujeción segura y confiable para todo tipo de puertas.',
    price: 185000,
    wholesalePrice: 155000,
    stock: 220,
    image: '/productos/Hardware para Control de Acceso/electroimanes.png',
    tags: ['Electroimán', 'Sujeción Segura'],
    specs: {
      'Fuerza': 'Desde 180 kg hasta 600 kg',
      'Uso': 'Interiores y exteriores',
      'Compatibilidad': 'Madera, metal y vidrio'
    },
    features: [
      'Consumo eficiente y bajo mantenimiento',
      'Sujeción segura y confiable'
    ],
    warranty: '1 Año de Garantía'
  },
  {
    id: 'ACC-TECLADO-AUTONOMO',
    sku: 'STC-KEY-TOUCH',
    name: 'Teclados Autónomos',
    brand: 'ZKTeco / SOLTECOM',
    category: 'accesorios-acceso',
    shortDesc: 'Control de acceso con código PIN. Capacidad de hasta 1000 usuarios.',
    description: 'Control de acceso con código PIN. Salida Wiegand 26/34 y relé integrado. Diseño resistente y moderno. Control inteligente sin necesidad de software.',
    price: 120000,
    wholesalePrice: 95000,
    stock: 180,
    image: '/productos/Hardware para Control de Acceso/teclados_autonomos.png',
    tags: ['Teclado PIN', '1000 Usuarios', 'Autónomo'],
    specs: {
      'Usuarios': 'Hasta 1000 usuarios',
      'Salida': 'Wiegand 26/34 y relé integrado',
      'Diseño': 'Resistente y moderno'
    },
    features: [
      'Control inteligente sin necesidad de software',
      'Fácil configuración de pines'
    ],
    warranty: '1 Año de Garantía'
  },
  {
    id: 'ACC-SOPORTES-ELECTROIMANES',
    sku: 'STC-BRACKET-MAG',
    name: 'Soportes de Instalación para Electroimanes',
    brand: 'SOLTECOM',
    category: 'accesorios-acceso',
    shortDesc: 'Soportes tipo L, ZL, U y en L invertida. Fabricados en aluminio de alta resistencia.',
    description: 'Compatibles con diferentes tipos de puertas. Instalación fácil y segura. Instalación profesional y adaptación perfecta.',
    price: 45000,
    wholesalePrice: 35000,
    stock: 300,
    image: '/productos/Hardware para Control de Acceso/soportes_electroimanes.png',
    tags: ['Soportes', 'L ZL U', 'Aluminio'],
    specs: {
      'Tipos': 'L, ZL, U y L invertida',
      'Material': 'Aluminio de alta resistencia',
      'Uso': 'Instalación de electroimanes'
    },
    features: [
      'Instalación fácil y segura',
      'Instalación profesional y adaptación perfecta'
    ],
    warranty: '1 Año de Garantía'
  },
  {
    id: 'ACC-BOTON-NO-TOUCH',
    sku: 'STC-EXIT-NOTOUCH',
    name: 'Botones de Salida',
    brand: 'SOLTECOM',
    category: 'accesorios-acceso',
    shortDesc: 'Botones de contacto y sin contacto. Diseños estéticos con iluminación LED.',
    description: 'Para control de acceso peatonal y vehicular. Fácil instalación y alta durabilidad. Salidas seguras y prácticas para cualquier entorno.',
    price: 65000,
    wholesalePrice: 48000,
    stock: 350,
    image: '/productos/Hardware para Control de Acceso/botones_salida.png',
    tags: ['Botón de Salida', 'LED', 'Sin contacto'],
    specs: {
      'Tipos': 'Contacto y sin contacto',
      'Iluminación': 'LED',
      'Uso': 'Peatonal y vehicular'
    },
    features: [
      'Fácil instalación y alta durabilidad',
      'Salidas seguras y prácticas'
    ],
    warranty: '1 Año de Garantía'
  },
  {
    id: 'ACC-BRAZO-HIDRAULICO',
    sku: 'STC-DOOR-CLOSER',
    name: 'Brazos Hidráulicos Cierra Puertas',
    brand: 'SOLTECOM Industrial',
    category: 'accesorios-acceso',
    shortDesc: 'Control de cierre automático y silencioso. Fuerza ajustable según el peso de la puerta.',
    description: 'Alta resistencia y larga vida útil. Ideales para puertas de madera, metal y vidrio. Comodidad, seguridad y control de acceso.',
    price: 130000,
    wholesalePrice: 105000,
    stock: 160,
    image: '/productos/Hardware para Control de Acceso/brazos_hidraulicos.png',
    tags: ['Cierra Puertas', 'Hidráulico', 'Fuerza Ajustable'],
    specs: {
      'Fuerza': 'Ajustable según el peso',
      'Compatibilidad': 'Madera, metal y vidrio',
      'Control': 'Automático y silencioso'
    },
    features: [
      'Alta resistencia y larga vida útil',
      'Comodidad, seguridad y control'
    ],
    warranty: '1 Año de Garantía'
  },
  {
    id: 'ACC-TARJETAS-PROXIMIDAD',
    sku: 'STC-RFID-CARDS',
    name: 'Tarjetas de Proximidad',
    brand: 'HID / ZKTeco / SOLTECOM',
    category: 'accesorios-acceso',
    shortDesc: 'Tecnología EM 125 kHz y MIFARE 13.56 MHz. Formatos ISO estándar. Impresión personalizada.',
    description: 'Alta compatibilidad con lectores de acceso. Identificación rápida, segura y sin contacto. Formatos ISO estándar para fácil manejo.',
    price: 50000,
    wholesalePrice: 35000,
    stock: 500,
    image: '/productos/Hardware para Control de Acceso/tarjetas_proximidad.png',
    tags: ['Tarjetas', '125kHz', '13.56MHz'],
    specs: {
      'Tecnología': 'EM 125 kHz y MIFARE 13.56 MHz',
      'Formato': 'ISO estándar',
      'Personalización': 'Impresión disponible'
    },
    features: [
      'Alta compatibilidad con lectores',
      'Identificación rápida y segura'
    ],
    warranty: 'Garantía de funcionamiento'
  },
  {
    id: 'ACC-LLAVEROS-PROXIMIDAD',
    sku: 'STC-RFID-KEYFOBS',
    name: 'Llaveros de Proximidad',
    brand: 'HID / ZKTeco / SOLTECOM',
    category: 'accesorios-acceso',
    shortDesc: 'Tecnología EM 125 kHz y MIFARE 13.56 MHz. Diseño resistente y portátil.',
    description: 'Ideal para control de acceso peatonal y vehicular. Diversos colores y presentaciones. Acceso práctico y confiable en todo momento.',
    price: 45000,
    wholesalePrice: 30000,
    stock: 600,
    image: '/productos/Hardware para Control de Acceso/llaveros_proximidad.png',
    tags: ['Llaveros', 'Portátil', 'RFID'],
    specs: {
      'Tecnología': 'EM 125 kHz y MIFARE 13.56 MHz',
      'Diseño': 'Resistente y portátil',
      'Opciones': 'Diversos colores'
    },
    features: [
      'Ideal para acceso peatonal y vehicular',
      'Acceso práctico y confiable'
    ],
    warranty: 'Garantía de funcionamiento'
  },

  // ==========================================
  // ALARMAS RESIDENCIALES Y PERIMETRALES (INTELBRAS) - 5 PRODUCTOS
  // 1. Centrales de Alarma (AMT 8000 / AMT 4010)
  // 2. Sensores (Infrarrojos, magnéticos y de impacto)
  // 3. Perimetrales (Barreras infrarrojas activas y cercas eléctricas)
  // 4. Teclados y Accesorios (Teclados, controles remotos y sirenas)
  // 5. App AMT Remoto (Controla tu sistema en tiempo real)
  // ==========================================

  // 1. Centrales de Alarma
  {
    id: 'ALM-INTELBRAS-AMT4010',
    sku: 'INT-AMT-8000-4010',
    name: 'Centrales de Alarma Intelbras (AMT 8000 / AMT 4010)',
    brand: 'Intelbras',
    category: 'alarmas',
    shortDesc: 'AMT 8000 / AMT 4010. Control y monitoreo completo del sistema.',
    description: 'Centrales de alarma monitoreadas de alta tecnología para hogares, conjuntos y empresas. Conectividad IP, Wi-Fi, Ethernet y 4G LTE para supervisión total y reportes inmediatos a receptores y aplicación móvil.',
    price: 750000,
    wholesalePrice: 630000,
    stock: 65,
    image: '/productos/Alarmas residenciales y perimetrales (Intelbras)/centrales de alarma.png',
    tags: ['AMT 8000', 'AMT 4010', 'Central Monitoreada', 'Intelbras'],
    specs: {
      'Modelos': 'AMT 8000 inalámbrica / AMT 4010 SMART híbrida',
      'Zonas': 'Hasta 64 zonas cableadas e inalámbricas',
      'Conectividad': 'Ethernet + GPRS/4G LTE + Wi-Fi',
      'Control': 'App AMT Remoto y teclado LCD táctil'
    },
    features: [
      'Monitoreo 24/7 y reporte instantáneo ante cualquier evento',
      'Armado y desarmado por particiones independientes'
    ],
    warranty: '2 Años de Garantía Intelbras'
  },

  // 2. Sensores
  {
    id: 'ALM-SENSOR-PET-INTELBRAS',
    sku: 'INT-SENSORES-SERIES',
    name: 'Sensores de Detección Intelbras (Infrarrojos, Magnéticos y de Impacto)',
    brand: 'Intelbras',
    category: 'alarmas',
    shortDesc: 'Infrarrojos, magnéticos y de impacto con alta inmunidad a falsas alarmas.',
    description: 'Línea completa de sensores de intrusión cableados e inalámbricos. Sensores infrarrojos pasivos con función PET inteligente (hasta 20 kg y 35 kg), contactos magnéticos para puertas/ventanas y sensores de rotura e impacto.',
    price: 85000,
    wholesalePrice: 68000,
    stock: 240,
    image: '/productos/Alarmas residenciales y perimetrales (Intelbras)/Sensores.png',
    tags: ['Sensores Infrarrojos', 'Magnéticos', 'Inmunidad Falsas Alarmas'],
    specs: {
      'Tecnologías': 'PIR Infrarrojo Pasivo, Magnético Reed Switch, Impacto',
      'Alcance PIR': '12 metros con ángulo de cobertura de 90°',
      'Inmunidad': 'Mascotas de hasta 20 kg (Función Pet)'
    },
    features: [
      'Procesamiento digital de señal que elimina falsos disparos',
      'Diseño estilizado y tamper antisabotaje integrado'
    ],
    warranty: '1 Año de Garantía Oficial'
  },

  // 3. Perimetrales
  {
    id: 'ALM-BARRERA-PERIMETRAL',
    sku: 'INT-IVA-SERIES-PERIM',
    name: 'Perimetrales (Barreras Infrarrojas Activas y Cercas Eléctricas)',
    brand: 'Intelbras',
    category: 'alarmas',
    shortDesc: 'Barreras infrarrojas activas y cercas eléctricas.',
    description: 'Sistemas de protección perimetral exterior de alta seguridad. Sensores fotoeléctricos de haz doble y multi-haz para muros y perímetros de 30 a 110 metros, e integración con electrificadores de alta potencia para cercas perimetrales.',
    price: 240000,
    wholesalePrice: 195000,
    stock: 70,
    image: '/productos/Alarmas residenciales y perimetrales (Intelbras)/Perimetrales.png',
    tags: ['Barreras Activas', 'Cercas Eléctricas', 'Perimetral Exterior'],
    specs: {
      'Alcance Exterior': 'Desde 30m hasta 110m según modelo (haz doble)',
      'Protección': 'IP65 hermético contra intemperie, lluvia y radiación solar',
      'Compatibilidad': 'Centrales de alarma y electrificadores perimetrales'
    },
    features: [
      'Alineación óptica precisa con voltímetro integrado',
      'Detección anticipada antes de que el intruso ingrese al predio'
    ],
    warranty: '1 Año de Garantía'
  },

  // 4. Teclados y Accesorios
  {
    id: 'ALM-TECLADOS-ACCESORIOS',
    sku: 'INT-XAT-XAC-ACC',
    name: 'Teclados y Accesorios (Teclados, Controles Remotos y Sirenas)',
    brand: 'Intelbras',
    category: 'alarmas',
    shortDesc: 'Teclados, controles remotos y sirenas de alta potencia.',
    description: 'Dispositivos de control y notificación acústico-visual para alarmas Intelbras. Incluye teclados LCD y táctiles para programación y armado rápido, controles remotos inalámbricos anticopia y sirenas piezoeléctricas de alto decibel.',
    price: 135000,
    wholesalePrice: 110000,
    stock: 120,
    image: '/productos/Alarmas residenciales y perimetrales (Intelbras)/Reclados y Accesorios.png',
    tags: ['Teclados LCD', 'Controles Remotos', 'Sirenas Alta Potencia'],
    specs: {
      'Dispositivos': 'Teclados LCD/Touch XAT, Controles XAC 4000, Sirenas 120dB',
      'Frecuencia': '433.92 MHz con modulación FSK/OOK anticopia',
      'Alimentación': '12V DC para periféricos y baterías de litio de larga duración'
    },
    features: [
      'Pulsador de pánico y emergencia médica directo en controles y teclados',
      'Sirenas con señal acústica potente y luz estroboscópica disuasiva'
    ],
    warranty: '1 Año de Garantía Oficial'
  },

  // 5. App AMT Remoto
  {
    id: 'ALM-APP-AMT-REMOTO',
    sku: 'INT-AMT-REMOTO-APP',
    name: 'App AMT Remoto (Plataforma y Gestión en Tiempo Real)',
    brand: 'Intelbras',
    category: 'alarmas',
    shortDesc: 'Controla tu sistema desde cualquier lugar en tiempo real.',
    description: 'Solución integral de conectividad remota para el ecosistema de alarmas Intelbras. Permite armar y desarmar zonas, recibir notificaciones push instantáneas de intrusión, verificar el estado de la batería y supervisar cada sensor en vivo desde cualquier smartphone.',
    price: 150000,
    wholesalePrice: 120000,
    stock: 999,
    image: '/productos/Alarmas residenciales y perimetrales (Intelbras)/APP AMT Remoto.png',
    tags: ['AMT Remoto', 'App Móvil', 'Monitoreo en Tiempo Real'],
    specs: {
      'Compatibilidad': 'Android e iOS',
      'Comunicación': 'Nube Cloud Intelbras segura vía Wi-Fi, Ethernet o 4G',
      'Funciones': 'Armado/desarmado, anulación de zonas, historial de eventos y botón de pánico'
    },
    features: [
      'Notificaciones push inmediatas en el celular ante disparo o corte eléctrico',
      'Gestión de múltiples instalaciones y clientes desde una sola cuenta'
    ],
    warranty: 'Soporte Continuo SOLTECOM'
  },
  {
    id: 'INC-CENTRAL-INTELBRAS',
    sku: 'INT-CIC-08L-NORM',
    name: 'Central de Incendio Direccionable/Convencional Intelbras',
    brand: 'Intelbras',
    category: 'incendio',
    shortDesc: 'Centrales con monitoreo inteligente de zonas, certificadas según normas NTC y NFPA.',
    description: 'Central de alarma contra incendio que permite supervisar zonas y ubicar con exactitud emergencias para una evacuación rápida. Cumple con normativas vigentes exigidas por el cuerpo de bomberos.',
    price: 890000,
    wholesalePrice: 760000,
    stock: 35,
    image: '/productos/Detección y Alarma de Incendio (Intelbras)/centrales de incendio.png',
    tags: ['Normativa NFPA', 'NTC Colombia', 'Incendio'],
    specs: {
      'Capacidad': 'Monitoreo de hasta 20 detectores por circuito',
      'Baterías': 'Respaldo autónomo ante cortes de luz',
      'Salida': 'Alimentación de sirenas y estrobos 24V'
    },
    features: [
      'Gabinete metálico con cerradura de seguridad',
      'Supervisión continua contra corto o corte de línea'
    ],
    warranty: '2 Años de Garantía Oficial'
  },
  {
    id: 'INC-DETECTOR-HUMO',
    sku: 'INT-DFA-520',
    name: 'Detector Óptico de Humo y Térmico Intelbras de Alta Precisión',
    brand: 'Intelbras',
    category: 'incendio',
    shortDesc: 'Sensores ópticos de humo, térmicos y multicriterio que identifican incendios en sus primeras etapas.',
    description: 'Sensor fotoeléctrico direccionable/convencional para detección temprana de partículas de combustión y calor. Base desmontable para fácil mantenimiento.',
    price: 68000,
    wholesalePrice: 52000,
    stock: 350,
    image: '/productos/Detección y Alarma de Incendio (Intelbras)/detectores.png',
    tags: ['Fotoeléctrico', 'Detección Humo', 'NFPA 72'],
    specs: {
      'Área de Cobertura': 'Hasta 81 m²',
      'Tecnología': 'Cámara fotoeléctrica infrarroja',
      'LED': 'Indicador visual 360° de estado y alarma'
    },
    features: [
      'Detección inmediata de fuego sin llama y humo denso',
      'Rejilla protectora contra ingreso de insectos'
    ],
    warranty: '2 Años de Garantía'
  },
  {
    id: 'INC-ESTACION-MANUAL',
    sku: 'INT-EMA-500',
    name: 'Estación Manual de Incendio de Simple / Doble Acción con Llave',
    brand: 'Intelbras',
    category: 'incendio',
    shortDesc: 'Activación manual de alarma en caso de emergencia. Plástica de alta durabilidad.',
    description: 'Pulsador de emergencia tipo palanca para alertar a los ocupantes del edificio. Incluye llave de rearme y leyenda clara en español.',
    price: 75000,
    wholesalePrice: 58000,
    stock: 200,
    image: '/productos/Detección y Alarma de Incendio (Intelbras)/estaciones manuales.png',
    tags: ['Estación Manual', 'Palanca', 'Bomberos'],
    specs: {
      'Material': 'Termoplástico ABS rojo de alto impacto',
      'Acción': 'Tirar palanca (Pull Down)',
      'Rearme': 'Con llave de control'
    },
    features: [
      'Cumple norma NFPA para fácil accionamiento',
      'Contactos secos para activación de sirenas y puertas'
    ],
    warranty: '1 Año de Garantía'
  },
  {
    id: 'INC-SIRENA-ESTROBO',
    sku: 'INT-SAV-500',
    name: 'Sirena con Luz Estroboscópica para Incendio de Alta Intensidad',
    brand: 'Intelbras',
    category: 'incendio',
    shortDesc: 'Sirenas y estrobos: alarmas sonoras y visuales que garantizan alerta inmediata en todo el entorno.',
    description: 'Dispositivo audiovisual con tono potente y destellos estroboscópicos de xenón/LED para advertir tanto a personas con visibilidad normal como a personas con limitaciones auditivas.',
    price: 95000,
    wholesalePrice: 76000,
    stock: 180,
    image: '/productos/Detección y Alarma de Incendio (Intelbras)/sirenas y estrobos.png',
    tags: ['Sirena 100dB', 'Estrobo Flash', 'Incendio'],
    specs: {
      'Potencia Sonora': '> 100 dB a 3 metros',
      'Destellos': '1 destello por segundo',
      'Voltaje': '24V DC estandarizado'
    },
    features: [
      'Alerta simultánea acústica y luminosa',
      'Fácil montaje en pared o techo'
    ],
    warranty: '1 Año de Garantía'
  },
  {
    id: 'INC-MODULOS-ACCESORIOS',
    sku: 'INT-MIO-400-RELAY',
    name: 'Módulos y Accesorios para Detección de Incendio (Módulos de Control y Relés)',
    brand: 'Intelbras',
    category: 'incendio',
    shortDesc: 'Módulos de control, relés y accesorios para integración completa con puertas, ascensores y HVAC.',
    description: 'Módulo inteligente direccionable de entrada y salida con contactos de relé seco. Permite integrar el sistema de incendio con sistemas externos para presurización de escaleras, corte de aire acondicionado, liberación de puertas de emergencia y retorno de ascensores.',
    price: 115000,
    wholesalePrice: 92000,
    stock: 120,
    image: '/productos/Detección y Alarma de Incendio (Intelbras)/módulos y accesorios.png',
    tags: ['Módulo de Control', 'Relé Integración', 'NFPA 72'],
    specs: {
      'Tipo': 'Módulo de entrada/salida direccionable supervisado',
      'Contactos': 'Relé Form C (NO/NC) 30V DC @ 2A',
      'Supervisión': 'Monitoreo continuo de bucle de comunicación'
    },
    features: [
      'Liberación automática de puertas de emergencia en caso de conflagración',
      'Activación de compuertas cortafuego y corte de extractores'
    ],
    warranty: '2 Años de Garantía Oficial Intelbras'
  },

  // ==========================================
  // PÁGINA 8: APERTURA VEHICULAR (MARCA PPA)
  // ==========================================
  {
    id: 'PPA-CORREDIZO-JETFLEX',
    sku: 'PPA-DZ-STARK-800',
    name: 'Motores para portones corredizos',
    brand: 'PPA',
    category: 'apertura-ppa',
    shortDesc: 'Ideales para portones residenciales, condominios e industrias. Apertura ultrarrápida en 4 segundos.',
    description: 'Motor de portón corredizo con tecnología Inverter JetFlex de PPA. Su alta velocidad de apertura previene encerronas y robos. Dispone de sistema antiaplastamiento, desaceleración suave y caja metálica para resistencia al clima.',
    price: 1350000,
    wholesalePrice: 1150000,
    stock: 50,
    image: '/productos/Apertura vehicular (PPA)/motores para portones corredizos.png',
    tags: ['JetFlex 4 seg', 'Inverter PPA', 'Corredizo'],
    specs: {
      'Velocidad': '3 metros en 4 segundos',
      'Capacidad': 'Portones de hasta 800 kg',
      'Ciclos': 'Uso continuo (60 ciclos/hora)',
      'Central': 'Triflex Inverter con receptor integrado'
    },
    features: [
      'Fin de carrera magnético y parada suave sin golpes',
      'Desbloqueo manual con llave de seguridad'
    ],
    warranty: '1 Año Oficial PPA'
  },
  {
    id: 'PPA-BATIENTE-PIVUS',
    sku: 'PPA-PIVUS-DOUBLE',
    name: 'Motores para Portones Batientes',
    brand: 'PPA',
    category: 'apertura-ppa',
    shortDesc: 'Soluciones prácticas y seguras para portones batientes residenciales e industriales.',
    description: 'Brazos electromecánicos de carrera reforzada para portones de 1 o 2 hojas batientes. Movimiento firme contra ráfagas de viento y desaceleración electrónica en ambos extremos.',
    price: 1680000,
    wholesalePrice: 1450000,
    stock: 30,
    image: '/productos/Apertura vehicular (PPA)/motores para portones batientes.png',
    tags: ['Batiente 2 Hojas', 'PPA Brasil', 'Fuerza'],
    specs: {
      'Hojas': 'Para 1 o 2 hojas hasta 2.5m cada una',
      'Uso': 'Residencial y condominios',
      'Cierre': 'Automático programable'
    },
    features: [
      'Robusta estructura en aluminio y tornillo sin fin de bronce',
      'Incluye 2 controles remotos y módulo de comando'
    ],
    warranty: '1 Año Oficial PPA'
  },
  {
    id: 'PPA-BARRERA-BARRIER',
    sku: 'PPA-BARRIER-AUTO',
    name: 'Barrera Automática PPA Vehicular con Brazo',
    brand: 'PPA',
    category: 'apertura-ppa',
    shortDesc: 'Control eficiente de accesos vehiculares en áreas privadas y corporativas.',
    description: 'Talanquera vehicular PPA diseñada para parqueaderos de condominios y empresas. Fabricada en chapa tratada anticorrosiva con equilibrio por resorte ajustable.',
    price: 2950000,
    wholesalePrice: 2600000,
    stock: 20,
    image: '/productos/Apertura vehicular (PPA)/barreras automaticas.png',
    tags: ['Barrera PPA', 'Vehicular', 'Parqueaderos'],
    specs: {
      'Brazo': 'Telescópico de 3m a 4m de aluminio',
      'Tiempo de Apertura': '2.5 segundos',
      'Ciclos/Día': 'Hasta 1.000 ciclos'
    },
    features: [
      'Gabinete resistente a lluvias y polvo',
      'Receptor de radio para mandos a distancia'
    ],
    warranty: '1 Año de Garantía'
  },
  {
    id: 'PPA-ACCESORIOS-CONTROLES',
    sku: 'PPA-ZAP-REMOTE-KIT',
    name: 'Accesorios y Controles Remotos PPA (Controles ZAP, Fotoceldas y Botoneras)',
    brand: 'PPA',
    category: 'apertura-ppa',
    shortDesc: 'Controles remotos, fotoceldas, botoneras, luces y más accesorios compatibles.',
    description: 'Kit de accesorios originales PPA para automatización de accesos vehiculares. Incluye transmisores de radiofrecuencia ZAP de código rodante anticlonación (Rolling Code 433.92 MHz), sensores fotoeléctricos infrarrojos antiaplastamiento y pulsadores cableados.',
    price: 85000,
    wholesalePrice: 65000,
    stock: 200,
    image: '/productos/Apertura vehicular (PPA)/accesorios y controles.png',
    tags: ['Controles ZAP', 'Rolling Code', 'Fotoceldas PPA'],
    specs: {
      'Frecuencia': '433.92 MHz Rolling Code (Anticlonación)',
      'Canales': '2 botones independientes para múltiples portones',
      'Alcance': 'Hasta 50 metros en campo abierto',
      'Compatibilidad': 'Centrales PPA Triflex, Agility, Pop y Universales'
    },
    features: [
      'Carcasa reforzada ergonómica con clip para visera de automóvil',
      'Batería de larga duración de 12V 23A incluida'
    ],
    warranty: '1 Año de Garantía Oficial PPA'
  },
  {
    id: 'PPA-CENTRAL-COMANDO',
    sku: 'PPA-TRIFLEX-BOARD',
    name: 'Central de Comando Digital Inverter PPA Triflex Facility',
    brand: 'PPA',
    category: 'apertura-ppa',
    shortDesc: 'Tecnología avanzada con múltiples funciones y fácil programación para motores.',
    description: 'Tarjeta electrónica de control con microcontrolador de 32 bits y variador de frecuencia. Ajuste digital de velocidad, rampa de desaceleración y cierre automático.',
    price: 320000,
    wholesalePrice: 260000,
    stock: 80,
    image: '/productos/Apertura vehicular (PPA)/centrales de comando.png',
    tags: ['Triflex Inverter', 'Tarjeta Repuesto', 'PPA'],
    specs: {
      'Memoria': 'Hasta 100 controles remotos integrados',
      'Frecuencia': '433.92 MHz Rolling Code',
      'Voltaje': 'Bivolt 127V / 220V automático'
    },
    features: [
      'Entradas para fotocelda, botonera y módulo luz de garaje',
      'Programación sencilla mediante dip switches o display'
    ],
    warranty: '1 Año de Garantía'
  },

  // ==========================================
  // PÁGINA 9: APERTURA VEHICULAR (MARCA GAREN COLOMBIA)
  // ==========================================
  {
    id: 'GAREN-CORREDERA-INVERTER',
    sku: 'GAR-KDZ-TS-INVERTER',
    name: 'Motor Portón Corredizo Garen TSI Inverter Alto Rendimiento',
    brand: 'Garen Colombia',
    category: 'apertura-garen',
    shortDesc: 'Apertura y cierre suave y silencioso con tecnología Inverter y desbloqueo manual.',
    description: 'En SOLTECOM representamos la marca GAREN, líder con más de 40 años de innovación. Motor con tecnología Inverter que brinda mayor rendimiento y menor consumo de energía, apto para portones residenciales, comerciales e industriales.',
    price: 1280000,
    wholesalePrice: 1090000,
    stock: 45,
    image: '/productos/Apertura Vehicular (GAREN)/Motores para puertas correderasG.png',
    tags: ['Garen TSI', 'Inverter', 'Silencioso'],
    specs: {
      'Capacidad': 'Portones de hasta 600 kg',
      'Tecnología': 'TSI Inverter de velocidad ajustable',
      'Chasis': 'Aluminio fundido con protección UV'
    },
    features: [
      'Mayor durabilidad con protección contra lluvia y polvo',
      'Desbloqueo manual en caso de falla eléctrica'
    ],
    warranty: '1 Año Oficial Garen'
  },
  {
    id: 'GAREN-BATIENTE-PIVOT',
    sku: 'GAR-PIVUS-SUPER',
    name: 'Brazos para Puertas Batientes Garen (1 o 2 Hojas)',
    brand: 'Garen Colombia',
    category: 'apertura-garen',
    shortDesc: 'Fuerza y precisión en cada movimiento. Funciona en condiciones exigentes.',
    description: 'Solución práctica y robusta para portones batientes. Compatible con brazos articulados o lineales para instalación rápida y segura.',
    price: 1550000,
    wholesalePrice: 1340000,
    stock: 25,
    image: '/productos/Apertura Vehicular (GAREN)/Motores para puertas batientesG.png',
    tags: ['Garen Batiente', 'Alta Durabilidad', 'Brasil'],
    specs: {
      'Hojas': 'Puertas batientes de 1 o 2 hojas',
      'Perfil': 'Aluminio industrial reforzado',
      'Control': 'Central electrónica microcontrolada'
    },
    features: [
      'Apertura hacia el interior o exterior',
      'Desaceleración para evitar ruidos de impacto'
    ],
    warranty: '1 Año Oficial Garen'
  },
  {
    id: 'GAREN-FOTOCELDAS-PROX',
    sku: 'GAR-ACC-TX-FOTO',
    name: 'Accesorios y Controles Garen (Controles Remotos, Fotoceldas y Botoneras)',
    brand: 'Garen Colombia',
    category: 'apertura-garen',
    shortDesc: 'Controles remotos, fotoceldas, botoneras, luces y más accesorios compatibles.',
    description: 'Accesorios originales GAREN para control de accesos vehiculares. Incluye transmisores TX New de 433 MHz con tecnología SAW anticlonación, fotoceldas de seguridad antiaplastamiento y módulos de comando.',
    price: 85000,
    wholesalePrice: 65000,
    stock: 150,
    image: '/productos/Apertura Vehicular (GAREN)/Accersorios y controlesG.png',
    tags: ['Controles TX', 'Fotoceldas Garen', 'Seguridad'],
    specs: {
      'Frecuencia': '433.92 MHz Code Learning / Rolling Code',
      'Canales': '3 teclas independientes para múltiples motores',
      'Fotocelda': 'Alcance hasta 15 metros infrarrojo activo'
    },
    features: [
      'Reversión inmediata del portón al detectar peatón o auto',
      'Diseño compacto y ergonómico de alta durabilidad'
    ],
    warranty: '1 Año de Garantía Oficial Garen'
  },
  {
    id: 'GAREN-CENTRAL-COMANDO',
    sku: 'GAR-WAVE-INVERTER',
    name: 'Centrales de Comando Garen (Central Electrónica Microcontrolada)',
    brand: 'Garen Colombia',
    category: 'apertura-garen',
    shortDesc: 'Tecnología avanzada con múltiples funciones y fácil programación.',
    description: 'Central electrónica de comando original Garen para motores de corredera y batientes. Sistema microcontrolado con frenado electrónico suave, embrague digital antiaplastamiento y memoria para múltiples transmisores.',
    price: 290000,
    wholesalePrice: 235000,
    stock: 70,
    image: '/productos/Apertura Vehicular (GAREN)/Contrales de comandoG.png',
    tags: ['Central Electrónica', 'Garen Wave', 'Frenado Digital'],
    specs: {
      'Compatibilidad': 'Motores monofásicos e Inverter Garen',
      'Memoria': 'Hasta 250 botones de controles remotos',
      'Alimentación': 'Bivolt 127V / 220V seleccionable'
    },
    features: [
      'Ajuste digital de rampa de desaceleración y fuerza',
      'Conector dedicado para fotocelda y botonera externa'
    ],
    warranty: '1 Año de Garantía Oficial Garen'
  },

  // ==========================================
  // PÁGINA 10: VIDEO CITOFONÍA (MARCAS AKUVOX Y HIKVISION)
  // 1. Porteros Video IP
  // 2. Monitores Interiores
  // 3. Teléfonos IP
  // 4. App Móvil (SmartPlus / Hik-Connect)
  // 5. Estaciones Maestras IP
  // 6. Control de Acceso Facial y Tarjeta
  // 7. Integración con CCTV
  // ==========================================

  // 1. Porteros Video IP
  {
    id: 'CITO-AKUVOX-PORTERO',
    sku: 'AK-R20A-SIP',
    name: 'Porteros Video IP (Frente de Calle Akuvox SIP Antivandálico)',
    brand: 'Akuvox / Hikvision',
    category: 'citofonia',
    shortDesc: 'Video en alta definición, comunicación bidireccional y acceso remoto desde smartphone con SmartPlus.',
    description: 'Portero IP de aluminio para frentes de casas, edificios y oficinas. Cuenta con cámara HD gran angular, lector de tarjetas RFID, protocolo SIP abierto e integración inteligente con telefonía y CCTV.',
    price: 880000,
    wholesalePrice: 760000,
    stock: 55,
    image: '/productos/Video Citofonía (Akuvox  Hikvision)/Porteros video IP.png',
    tags: ['Portero Video IP', 'Akuvox SIP', 'Llamada al Móvil'],
    specs: {
      'Cámara': '2MP CMOS con visión nocturna infrarroja',
      'Protocolo': 'SIP 2.0 estándar abierto',
      'Protección': 'IP65 exterior antivandálico',
      'Alimentación': 'PoE 802.3af directo'
    },
    features: [
      'Responde la puerta desde cualquier lugar con la App SmartPlus',
      'Apertura remota de electroimán o cantonera'
    ],
    warranty: '2 Años Oficial Akuvox'
  },

  // 2. Monitores Interiores
  {
    id: 'CITO-MONITOR-AKUVOX',
    sku: 'AK-IT82A-TOUCH',
    name: 'Monitores Interiores (Monitor Táctil Akuvox 7" Android / Linux)',
    brand: 'Akuvox / Hikvision',
    category: 'citofonia',
    shortDesc: 'Diseño moderno y elegante, pantalla táctil intuitiva, audio bidireccional e intercomunicación.',
    description: 'Monitor interior de 7 pulgadas para apartamentos y salas de reuniones. Permite ver al visitante en tiempo real, hablar con él, abrir la puerta y visualizar cámaras del CCTV.',
    price: 650000,
    wholesalePrice: 560000,
    stock: 70,
    image: '/productos/Video Citofonía (Akuvox  Hikvision)/Monitores Interiores.png',
    tags: ['Monitor 7" Touch', 'Akuvox SIP', 'Intercomunicación'],
    specs: {
      'Pantalla': '7" IPS Táctil Capacitiva (1024 × 600)',
      'Conexión': 'PoE o 12V DC + Wi-Fi',
      'Audio': 'Doble altavoz con cancelación de eco'
    },
    features: [
      'Intercomunicación interna entre departamentos y recepción',
      'Almacena fotos de visitantes no contestados'
    ],
    warranty: '2 Años Oficial Akuvox'
  },

  // 3. Teléfonos IP
  {
    id: 'CITO-TELEFONO-IP',
    sku: 'AK-R15P-IPPHONE',
    name: 'Teléfonos IP (Teléfono IP Akuvox para Recepción y Portería)',
    brand: 'Akuvox / Grandstream',
    category: 'citofonia',
    shortDesc: 'Teléfonos IP para comunicación clara y rápida entre portería, apartamentos y administración.',
    description: 'Estación de escritorio IP SIP para conserjes y recepcionistas. Permite recibir llamadas de los frentes de calle, autorizar visitantes y comunicarse con los departamentos.',
    price: 340000,
    wholesalePrice: 280000,
    stock: 45,
    image: '/productos/Video Citofonía (Akuvox  Hikvision)/Teléfono IP.png',
    tags: ['Teléfono IP', 'Portería SIP', 'Conserjería'],
    specs: {
      'Protocolo': 'SIP con 2 líneas registrables',
      'Pantalla': 'Pantalla gráfica retroiluminada',
      'Audio': 'Voz HD en auricular y altavoz'
    },
    features: [
      'Botonera para marcación rápida de apartamentos',
      'Botón dedicado de apertura remota de puerta'
    ],
    warranty: '1 Año de Garantía'
  },

  // 4. App Móvil (SmartPlus / Hik-Connect)
  {
    id: 'CITO-APP-MOVIL-LICENSE',
    sku: 'AK-SMARTPLUS-APP',
    name: 'App Móvil (Plataforma en la Nube SmartPlus & Hik-Connect)',
    brand: 'Akuvox / Hikvision',
    category: 'citofonia',
    shortDesc: 'Recepción de videollamadas en smartphones, apertura remota de puertas y llaves virtuales temporales.',
    description: 'Servicio en la nube y licencias de gestión para video citofonía inteligente. Permite a los residentes responder llamadas desde cualquier lugar del mundo mediante su smartphone, emitir códigos QR para visitas y autorizar aperturas con un solo toque.',
    price: 180000,
    wholesalePrice: 145000,
    stock: 999,
    image: '/productos/Video Citofonía (Akuvox  Hikvision)/App Móvil.png',
    tags: ['SmartPlus Cloud', 'Hik-Connect', 'App Móvil'],
    specs: {
      'Compatibilidad': 'iOS y Android',
      'Funciones': 'Videollamada SIP, Llaves QR temporales, Notificaciones Push',
      'Cifrado': 'Cifrado de datos TLS/SRTP seguro'
    },
    features: [
      'Sin requerir cableado complejo dentro de cada apartamento',
      'Historial de llamadas y fotos de visitantes con marca de tiempo'
    ],
    warranty: 'Soporte Continuo SOLTECOM'
  },

  // 5. Estaciones Maestras IP
  {
    id: 'CITO-ESTACION-MAESTRA',
    sku: 'AK-E12-MASTER-ST',
    name: 'Estaciones Maestras IP (Consola de Guardia y Conserjería con Pantalla y Cámara)',
    brand: 'Akuvox / Hikvision',
    category: 'citofonia',
    shortDesc: 'Consola maestra para centrales de guardia, supervisión de accesos e interfonía comunitaria.',
    description: 'Estación de portería central con pantalla táctil de alta definición, cámara integrada para videollamada bidireccional con el residente y botones de acceso rápido para control de alarmas y aperturas de portones vehiculares y peatonales.',
    price: 1450000,
    wholesalePrice: 1250000,
    stock: 25,
    image: '/productos/Video Citofonía (Akuvox  Hikvision)/Estaciones Maestras IP.png',
    tags: ['Estación Maestra', 'Conserjería Central', 'Touch & Cám'],
    specs: {
      'Pantalla': '10.1 Pulgadas IPS Táctil con Cámara HD',
      'Audio': 'Manos libres y auricular privado con cancelación acústica',
      'Red': 'Doble puerto Gigabit PoE+'
    },
    features: [
      'Monitoreo simultáneo de múltiples frentes de calle y cámaras',
      'Desvío de llamadas y gestión de emergencias comunitarias'
    ],
    warranty: '2 Años de Garantía Oficial'
  },

  // 6. Control de Acceso Facial y Tarjeta
  {
    id: 'CITO-HIKVISION-FACIAL',
    sku: 'HK-KD9203-E6',
    name: 'Control de Acceso Facial y Tarjeta (Placa de Calle IP Modular Facial)',
    brand: 'Hikvision / Akuvox',
    category: 'citofonia',
    shortDesc: 'Acceso por tarjeta, PIN y reconocimiento facial. Administración centralizada en Hik-Connect.',
    description: 'Frente de calle modular para conjuntos residenciales con cientos de apartamentos. Integra pantalla a color, teclado numérico, cámara doble lente para biometría facial y lector Mifare.',
    price: 1850000,
    wholesalePrice: 1600000,
    stock: 25,
    image: '/productos/Video Citofonía (Akuvox  Hikvision)/Contol de Acceso Facial y Tarjeta.png',
    tags: ['Hikvision IP', 'Facial Edificios', 'Hik-Connect'],
    specs: {
      'Capacidad': 'Hasta 5.000 rostros y 25.000 tarjetas',
      'Protección': 'IP65 e IK07 para exteriores',
      'Integración': 'Hik-Connect y software iVMS-4200'
    },
    features: [
      'Acceso por reconocimiento facial de residentes',
      'Llamada directa al smartphone de cada propietario'
    ],
    warranty: '2 Años Oficial Hikvision'
  },

  // 7. Integración con CCTV
  {
    id: 'CITO-INTEGRACION-CCTV',
    sku: 'CITO-CCTV-LINK-GATEWAY',
    name: 'Integración con CCTV (Pasarela y Módulo de Video Stream ONVIF / RTSP)',
    brand: 'Akuvox / Tiandy / Hikvision',
    category: 'citofonia',
    shortDesc: 'Vinculación de cámaras de videovigilancia y video portería en una sola plataforma y monitor.',
    description: 'Solución de convergencia que permite ver cámaras del sistema de CCTV directamente en las pantallas de los monitores de apartamento y teléfonos IP de recepción. Al recibir una llamada de la portería, el monitor puede desplegar tomas adicionales de cámaras perimetrales para máxima verificación visual.',
    price: 590000,
    wholesalePrice: 490000,
    stock: 60,
    image: '/productos/Video Citofonía (Akuvox  Hikvision)/Integración con CCTV.png',
    tags: ['Integración CCTV', 'ONVIF / RTSP', 'Seguridad Unificada'],
    specs: {
      'Protocolos': 'ONVIF Profile S/G/T, RTSP, SIP 2.0',
      'Compatibilidad': 'Cámaras Tiandy, Hikvision, Dahua y NVRs',
      'Resolución de Stream': 'Hasta 4K UHD'
    },
    features: [
      'Visualiza quién llama desde múltiples ángulos de cámara simultáneamente',
      'Grabación de cada llamada de citofonía dentro del NVR de videovigilancia'
    ],
    warranty: '2 Años de Garantía Oficial'
  },

  // ==========================================
  // PÁGINA 12: CONECTIVIDAD PARA REDES
  // ==========================================
  {
    id: 'NET-AP-WIFI',
    sku: 'NET-WIFI-001',
    name: 'Puntos de Acceso Wi-Fi',
    brand: 'SOLTECOM',
    category: 'redes',
    shortDesc: 'Cobertura inalámbrica de alto rendimiento para usuarios y dispositivos en interiores y exteriores.',
    description: 'Soluciones de conectividad inalámbrica avanzadas, ideales para hogar, comercio y empresas. Alta capacidad de usuarios concurrentes.',
    price: 490000,
    wholesalePrice: 410000,
    stock: 85,
    image: '/productos/Equipos de Conectividad para Redes/puntos_acceso.png',
    tags: ['Wi-Fi', 'Interiores', 'Exteriores'],
    specs: {
      'Cobertura': 'Alto rendimiento',
      'Ubicación': 'Interiores y exteriores',
      'Capacidad': 'Alta densidad de usuarios'
    },
    features: [
      'Cobertura inalámbrica estable y rápida',
      'Gestión centralizada'
    ],
    warranty: '2 Años de Garantía'
  },
  {
    id: 'NET-SWITCHES',
    sku: 'NET-SW-002',
    name: 'Switches Administrables',
    brand: 'SOLTECOM',
    category: 'redes',
    shortDesc: 'Conmutación inteligente para redes eficientes, seguras y escalables.',
    description: 'Equipos de distribución de datos y alimentación PoE para redes locales corporativas y videovigilancia.',
    price: 1350000,
    wholesalePrice: 1160000,
    stock: 45,
    image: '/productos/Equipos de Conectividad para Redes/switches_administrables.png',
    tags: ['Switches', 'Administrables', 'Eficiencia'],
    specs: {
      'Tipo': 'Conmutación inteligente',
      'Escalabilidad': 'Alta',
      'Seguridad': 'Integrada'
    },
    features: [
      'Redes eficientes y escalables',
      'Fácil configuración y monitoreo'
    ],
    warranty: '2 Años de Garantía'
  },
  {
    id: 'NET-ROUTERS',
    sku: 'NET-RT-003',
    name: 'Routers y Gateways',
    brand: 'SOLTECOM',
    category: 'redes',
    shortDesc: 'Conectividad estable y segura para acceso a internet y gestión de redes.',
    description: 'Enrutadores empresariales y puertas de enlace para control total del ancho de banda y conexiones estables.',
    price: 680000,
    wholesalePrice: 580000,
    stock: 50,
    image: '/productos/Equipos de Conectividad para Redes/routers_gateways.png',
    tags: ['Routers', 'Gateways', 'Estabilidad'],
    specs: {
      'Conectividad': 'Estable y segura',
      'Acceso': 'Internet y LAN',
      'Gestión': 'Avanzada'
    },
    features: [
      'Conectividad ininterrumpida',
      'Balanceo de carga y control de red'
    ],
    warranty: '2 Años de Garantía'
  },
  {
    id: 'NET-FIREWALLS',
    sku: 'NET-FW-004',
    name: 'Seguridad de Red (Firewalls)',
    brand: 'SOLTECOM',
    category: 'redes',
    shortDesc: 'Protección avanzada para garantizar la seguridad de la información y el control de accesos.',
    description: 'Sistemas de seguridad perimetral para proteger la infraestructura IT contra ciberataques, filtraciones y accesos no autorizados.',
    price: 1850000,
    wholesalePrice: 1550000,
    stock: 25,
    image: '/productos/Equipos de Conectividad para Redes/seguridad_red.png',
    tags: ['Firewall', 'Ciberseguridad', 'Protección'],
    specs: {
      'Protección': 'Avanzada',
      'Control': 'De accesos y tráfico',
      'Seguridad': 'Cifrado de grado corporativo'
    },
    features: [
      'Garantiza la seguridad de la información',
      'Prevención de intrusiones'
    ],
    warranty: '3 Años de Garantía'
  },
  {
    id: 'NET-DISTRIBUCION',
    sku: 'NET-DIST-005',
    name: 'Equipos de Distribución',
    brand: 'SOLTECOM',
    category: 'redes',
    shortDesc: 'Soluciones para distribución de red cableada e inalámbrica en cualquier entorno.',
    description: 'Hardware especializado para la distribución eficiente de internet y datos a lo largo de instalaciones medianas y grandes.',
    price: 320000,
    wholesalePrice: 280000,
    stock: 120,
    image: '/productos/Equipos de Conectividad para Redes/equipos_distribucion.png',
    tags: ['Distribución', 'Cableado', 'Redes'],
    specs: {
      'Soluciones': 'Cableadas e inalámbricas',
      'Entorno': 'Cualquier entorno de instalación',
      'Capacidad': 'Alta disponibilidad'
    },
    features: [
      'Cobertura sin interrupciones',
      'Arquitectura de red profesional'
    ],
    warranty: '2 Años de Garantía'
  },
  {
    id: 'NET-ACCESORIOS',
    sku: 'NET-ACC-006',
    name: 'Accesorios y Cableado',
    brand: 'SOLTECOM',
    category: 'redes',
    shortDesc: 'Cables, conectores y accesorios certificados para instalaciones profesionales.',
    description: 'Todo lo necesario para infraestructuras físicas: bobinas UTP, patch cords, conectores RJ45, organizadores y herramientas certificadas.',
    price: 430000,
    wholesalePrice: 360000,
    stock: 130,
    image: '/productos/Equipos de Conectividad para Redes/accesorios_cableado.png',
    tags: ['Cableado', 'Conectores', 'Accesorios'],
    specs: {
      'Productos': 'Cables, conectores, accesorios',
      'Certificación': 'Estándares profesionales',
      'Material': 'Alta pureza y durabilidad'
    },
    features: [
      'Instalaciones profesionales 100% confiables',
      'Máxima transmisión de datos'
    ],
    warranty: '1 Año de Garantía'
  },

  // ==========================================
  // PÁGINA 13: LOS 12 ACCESORIOS PARA COMPUTADORES EXACTOS
  // 1. Teclados
  // 2. Mouses
  // 3. Audífonos y Micrófonos
  // 4. Webcams
  // 5. Almohadillas (Mouse Pad)
  // 6. Memorias USB
  // 7. Hubs y Docking Stations
  // 8. Cables
  // 9. Cargadores y Adaptadores
  // 10. Enfriadores para Portátil (Bases Refrigerantes)
  // 11. Mochilas y Maletines
  // 12. Soportes y Bases para Portátil
  // ==========================================

  // 1. Teclados (PDF Pág 13)
  {
    id: 'COM-TECLADO-LOGI',
    sku: 'LOG-K120-USB',
    name: 'Teclado USB Ergonómico Resistente a Salpicaduras',
    brand: 'Logitech / HP / Dell / Genius',
    category: 'computo',
    shortDesc: 'Diseños ergonómicos y resistentes. Conexión USB y wireless. Teclas silenciosas de alta respuesta.',
    description: 'Teclado profesional con cable USB diseñado para trabajo continuo en oficinas, puestos de monitoreo y estaciones de CCTV. Perfil plano con teclas resistentes a más de 10 millones de pulsaciones y canal de drenaje para líquidos.',
    price: 55000,
    wholesalePrice: 42000,
    stock: 250,
    image: '/productos/Accesesorios para Computadores/teclados.png',
    tags: ['Teclados', 'Ergonómico', 'Silencioso'],
    specs: {
      'Conexión': 'USB Plug and Play',
      'Distribución': 'Español Latinoamericano (con Ñ)',
      'Compatibilidad': 'Windows, Linux, macOS, NVRs'
    },
    features: [
      'Patas inclinables ajustables y robustas',
      'Teclas silenciosas que reducen el ruido de digitación'
    ],
    warranty: '1 Año de Garantía Oficial'
  },

  // 2. Mouses (PDF Pág 13)
  {
    id: 'COM-MOUSE-OPTICO',
    sku: 'LOG-M170-WRLS',
    name: 'Mouse Óptico Inalámbrico de Alta Precisión con DPI Ajustable',
    brand: 'Logitech / HP / Dell / Genius',
    category: 'computo',
    shortDesc: 'Ópticos y láser de alta precisión. Conexión USB y wireless. Diseños ergonómicos para mayor comodidad.',
    description: 'Mouse inalámbrico de 2.4 GHz con seguimiento óptico suave de hasta 1000 DPI. Diseño ambidiestro que se adapta cómodamente a la mano para largas jornadas de trabajo.',
    price: 48000,
    wholesalePrice: 36000,
    stock: 300,
    image: '/productos/Accesesorios para Computadores/mouses.png',
    tags: ['Mouses', 'Inalámbrico', 'Alta Precisión'],
    specs: {
      'Sensor': 'Óptico 1000 / 1600 DPI',
      'Batería': 'Hasta 12 meses con 1 pila AA',
      'Alcance': '10 metros inalámbrico'
    },
    features: [
      'Receptor nano USB compacto',
      'Rueda de desplazamiento precisa línea por línea'
    ],
    warranty: '1 Año de Garantía'
  },

  // 3. Audífonos y Micrófonos (PDF Pág 13)
  {
    id: 'COM-HEADSET-CALLCENTER',
    sku: 'LOG-H390-USB',
    name: 'Audífonos con Micrófono con Cancelación de Ruido (USB / Plug 3.5mm)',
    brand: 'Logitech / JBL / HP / X-Tech',
    category: 'computo',
    shortDesc: 'Sonido nítido y envolvente. Micrófono con cancelación de ruido. Ideales para trabajo y estudio.',
    description: 'Diadema con conexión USB y plug 3.5mm con audio digital mejorado. El micrófono con cancelación de ruido minimiza el ruido de fondo para llamadas corporativas ultraclaras.',
    price: 135000,
    wholesalePrice: 105000,
    stock: 120,
    image: '/productos/Accesesorios para Computadores/audifonos y microfonos.png',
    tags: ['Audífonos', 'Cancelación Ruido', 'Voz Nítida'],
    specs: {
      'Conexión': 'USB-A y conector 3.5mm',
      'Micrófono': 'Giratorio con reducción de ruido ambiental',
      'Control': 'Controles de volumen y silenciador en el cable'
    },
    features: [
      'Almohadillas de cuero sintético acolchadas',
      'Diadema ajustable y ultraligera'
    ],
    warranty: '1 Año de Garantía'
  },

  // 4. Webcams (PDF Pág 13)
  {
    id: 'COM-WEBCAM-FHD',
    sku: 'LOG-C920-HD',
    name: 'Cámara Web Full HD 1080p con Micrófono Integrado y Corrección de Luz',
    brand: 'Logitech / HP / Dell / A4Tech',
    category: 'computo',
    shortDesc: 'Video en alta definición (HD y Full HD). Micrófono integrado, enfoque automático y corrección de luz.',
    description: 'Cámara web con lente de cristal Full HD 1080p a 30fps. Ajuste automático a condiciones de baja iluminación y micrófonos duales estéreo para reuniones de trabajo.',
    price: 260000,
    wholesalePrice: 215000,
    stock: 75,
    image: '/productos/Accesesorios para Computadores/webcams.png',
    tags: ['Webcams', 'Full HD 1080p', 'Autofocus'],
    specs: {
      'Resolución': 'Full HD 1080p / 720p HD',
      'Micrófono': 'Doble estéreo omnidireccional',
      'Conexión': 'USB Plug & Play'
    },
    features: [
      'Corrección automática de luz RightLight',
      'Clip universal para portátiles y monitores LCD'
    ],
    warranty: '1 Año Oficial'
  },

  // 5. Almohadillas (Mouse Pad) (PDF Pág 13)
  {
    id: 'COM-MOUSEPAD-PRO',
    sku: 'PAD-SPEED-XL',
    name: 'Almohadilla Mouse Pad Ergonómico con Base Antideslizante',
    brand: 'Logitech / X-Tech / Targus / Genius',
    category: 'computo',
    shortDesc: 'Superficie suave para mayor precisión. Base antideslizante. Diferentes tamaños y diseños.',
    description: 'Mouse pad con superficie de tela microtexturizada de baja fricción para deslizamiento ágil y base de goma antideslizante que previene movimientos involuntarios.',
    price: 25000,
    wholesalePrice: 18000,
    stock: 400,
    image: '/productos/Accesesorios para Computadores/almohadillas (mouse pad).png',
    tags: ['Mouse Pad', 'Antideslizante', 'Precisión'],
    specs: {
      'Material': 'Superficie de tela tejida y base de caucho natural',
      'Dimensiones': '250 x 210 x 2 mm (y versión extendida)',
      'Bordes': 'Costura reforzada antideshilachado'
    },
    features: [
      'Optimizado para todo tipo de sensores ópticos y láser',
      'Resistente a salpicaduras de agua y fácil de limpiar'
    ],
    warranty: 'Garantía de calidad'
  },

  // 6. Memorias USB (PDF Pág 13)
  {
    id: 'COM-MEMORIA-USB-SANDISK',
    sku: 'SD-CZ50-64GB',
    name: 'Memoria USB 3.0 / 3.1 de Alta Velocidad (64GB / 128GB)',
    brand: 'SanDisk / Kingston / HP / ADATA',
    category: 'computo',
    shortDesc: 'Amplia capacidad de almacenamiento. Conexión USB 2.0 / 3.0 / 3.1. Transferencia rápida y segura.',
    description: 'Memoria USB ultracompacta para respaldo de video de NVR, copias de seguridad de sistemas de control de acceso y almacenamiento seguro de documentos corporativos.',
    price: 45000,
    wholesalePrice: 34000,
    stock: 350,
    image: '/productos/Accesesorios para Computadores/memorias USB.png',
    tags: ['Memorias USB', 'USB 3.0', 'Alta Capacidad'],
    specs: {
      'Capacidad': '64 GB / 128 GB disponibles',
      'Interfaz': 'USB 3.1 Gen 1 retrocompatible con 2.0',
      'Velocidad': 'Hasta 130 MB/s de lectura'
    },
    features: [
      'Carcasa protectora retráctil o con tapa',
      'Software de cifrado y protección con contraseña'
    ],
    warranty: '5 Años de Garantía'
  },

  // 7. Hubs y Docking Stations (PDF Pág 13)
  {
    id: 'COM-HUB-DOCKING-UGREEN',
    sku: 'UGR-DOCK-MULTIHUB',
    name: 'Hub y Docking Station USB-C Multipuerto (HDMI, USB 3.0, Ethernet)',
    brand: 'UGREEN / HP / TP-Link / StarTech.com',
    category: 'computo',
    shortDesc: 'Expande puertos USB, HDMI, Ethernet y más. Transferencia de datos de alta velocidad en aluminio.',
    description: 'Estación de acoplamiento USB-C compacta para portátiles corporativos. Convierte un solo puerto USB-C en múltiples conexiones simultáneas: salida de pantalla HDMI 4K, 3 puertos USB 3.0 y puerto de red Gigabit RJ45.',
    price: 155000,
    wholesalePrice: 122000,
    stock: 130,
    image: '/productos/Accesesorios para Computadores/hubs y docking stations.png',
    tags: ['Hubs & Docks', 'USB-C 4K', 'Gigabit'],
    specs: {
      'Salida Video': 'HDMI 4K UHD @ 60Hz',
      'Puertos USB': '3 puertos USB 3.0 (5 Gbps)',
      'Red': 'Gigabit Ethernet RJ45 1000 Mbps'
    },
    features: [
      'Chasis de aluminio aeroespacial para óptima disipación térmica',
      'Compatibilidad universal con Windows, Mac, iPad y Linux'
    ],
    warranty: '1 Año de Garantía'
  },

  // 8. Cables (PDF Pág 13)
  {
    id: 'COM-CABLES-CERTIFICADOS',
    sku: 'CAB-HDMI-ETH-SET',
    name: 'Cables de Alta Velocidad (HDMI 4K, DisplayPort, USB y Ethernet Patchcord)',
    brand: 'UGREEN / Cablexpert / Tripp-Lite / Belkin',
    category: 'computo',
    shortDesc: 'Cables USB, HDMI, DisplayPort, Ethernet y más. Alta velocidad, máxima durabilidad y variedad de longitudes.',
    description: 'Línea de cables apantallados de alto rendimiento para interconexión de pantallas, equipos de cómputo y servidores. Conectores chapados en oro para cero pérdidas de señal.',
    price: 35000,
    wholesalePrice: 24000,
    stock: 500,
    image: '/productos/Accesesorios para Computadores/cables.png',
    tags: ['Cables', 'HDMI 4K', 'Patchcord'],
    specs: {
      'Formatos': 'HDMI 2.0/2.1, DisplayPort 1.4, USB-C a USB-A, Cat6',
      'Longitudes': '1m, 1.8m, 3m, 5m y 10m',
      'Conectores': 'Chapados en oro de 24K'
    },
    features: [
      'Triple apantallamiento contra interferencias electromagnéticas (EMI)',
      'Recubrimiento trenzado de nailon de alta resistencia a tirones'
    ],
    warranty: '1 Año de Garantía'
  },

  // 9. Cargadores y Adaptadores (PDF Pág 13)
  {
    id: 'COM-CARGADOR-PORTATIL',
    sku: 'PWR-ADAPT-UNIV',
    name: 'Cargadores Originales y Compatibles para Portátiles (65W / 90W / USB-C)',
    brand: 'Dell / HP / Lenovo / ASUS',
    category: 'computo',
    shortDesc: 'Cargadores originales y compatibles. Protección contra sobrecarga y cortocircuito. Eficiencia energética.',
    description: 'Adaptadores de corriente certificados para todas las marcas y modelos de portátiles corporativos. Incluye protección contra sobretensiones transitorias y regulación de voltaje estable.',
    price: 85000,
    wholesalePrice: 65000,
    stock: 160,
    image: '/productos/Accesesorios para Computadores/cargadores y adaptadores.png',
    tags: ['Cargadores', '65W / 90W', 'Protección'],
    specs: {
      'Potencias': '45W, 65W, 90W y USB-C Power Delivery',
      'Puntas': 'Punta azul HP, punta cuadrada Lenovo, tipo C y barril Dell',
      'Protecciones': 'OVP (Sobretensión), OCP (Sobrecorriente), SCP (Cortocircuito)'
    },
    features: [
      'Certificación RETIE y CE para seguridad eléctrica en Colombia',
      'Cable de alimentación reforzado resistente al desgaste'
    ],
    warranty: '1 Año de Garantía'
  },

  // 10. Enfriadores para Portátil (PDF Pág 13)
  {
    id: 'COM-BASE-REFRIGERANTE',
    sku: 'COOL-PAD-DUAL',
    name: 'Base Refrigerante para Portátil con Doble Ventilador Silencioso y LED',
    brand: 'Cooler Master / Trust / X-Tech / Thermaltake',
    category: 'computo',
    shortDesc: 'Mejora la ventilación y el rendimiento. Diseños ergonómicos y silenciosos con altura ajustable.',
    description: 'Base de enfriamiento con malla metálica y ventiladores de alta velocidad para disipar el calor de computadores portátiles durante largas jornadas laborales, evitando el thermal throttling.',
    price: 68000,
    wholesalePrice: 52000,
    stock: 110,
    image: '/productos/Accesesorios para Computadores/enfriadores para portátil.png',
    tags: ['Bases Enfriadoras', 'Doble Fan', 'Silencioso'],
    specs: {
      'Ventiladores': '2 ventiladores ultra silenciosos con iluminación LED azul',
      'Compatibilidad': 'Portátiles de 12 a 17 pulgadas',
      'Inclinación': '4 niveles ergonómicos'
    },
    features: [
      'Alimentación por puerto USB con conector pasante adicional',
      'Tope antideslizante para sostener el computador seguro'
    ],
    warranty: '1 Año de Garantía'
  },

  // 11. Mochilas y Maletines (PDF Pág 13)
  {
    id: 'COM-MOCHILA-TARGUS-PRO',
    sku: 'TAR-BACKPACK-156',
    name: 'Mochila Morral Ejecutivo Antirrobo para Portátil de 15.6"',
    brand: 'Targus / HP / Lenovo / X-Tech',
    category: 'computo',
    shortDesc: 'Protección y estilo para tu equipo. Compartimentos acolchados y materiales resistentes al agua.',
    description: 'Maletín morral corporativo con compartimento acolchado para amortiguar golpes y caídas de laptops de hasta 15.6 pulgadas. Fabricado en poliéster repelente al agua con bolsillos organizadores.',
    price: 145000,
    wholesalePrice: 115000,
    stock: 85,
    image: '/productos/Accesesorios para Computadores/mochilas y maletines.png',
    tags: ['Mochilas', 'Acolchado 15.6"', 'Impermeable'],
    specs: {
      'Capacidad': 'Portátiles de hasta 15.6 pulgadas y tablets',
      'Material': 'Poliéster 600D repelente al agua',
      'Bolsillos': 'Bolsillo secreto antirrobo y organizadores'
    },
    features: [
      'Espaldar y correas acolchadas con tela transpirable antitranspirante',
      'Banda trasera para anclar a maletas de viaje'
    ],
    warranty: '1 Año de Garantía Oficial'
  },

  // 12. Soportes y Bases para Portátil (PDF Pág 13)
  {
    id: 'COM-SOPORTE-ALU-STAND',
    sku: 'STC-STAND-PRO-ALU',
    name: 'Soporte Plegable de Aluminio con Ajuste de Altura para Portátil',
    brand: 'UGREEN / X-Tech / Nexstand / Targus',
    category: 'computo',
    shortDesc: 'Mejora la postura y reduce la fatiga. Altura y ángulo ajustables. Diseños plegables y resistentes.',
    description: 'Soporte ergonómico plegable fabricado 100% en aleación de aluminio. Eleva la pantalla a la altura de los ojos previniendo dolores cervicales y de espalda, al tiempo que mejora la disipación térmica del equipo.',
    price: 75000,
    wholesalePrice: 56000,
    stock: 150,
    image: '/productos/Accesesorios para Computadores/soportes y bases para portatil.png',
    tags: ['Soportes', 'Aluminio 100%', 'Plegable'],
    specs: {
      'Ajuste': '6 niveles de inclinación ergonómica (15° a 45°)',
      'Material': 'Aleación de aluminio reforzada con corte CNC',
      'Compatibilidad': 'Laptops de 10 a 17.3 pulgadas y tablets'
    },
    features: [
      'Almohadillas de goma siliconada antideslizante que protegen el chasis',
      'Incluye funda de viaje protectora de tela'
    ],
    warranty: '1 Año de Garantía'
  }
];
