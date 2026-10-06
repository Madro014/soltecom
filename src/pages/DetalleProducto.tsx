import React, { useState } from 'react';
import { useParams, Link, useNavigate, useLocation } from 'react-router-dom';
import { PRODUCTS } from '../data/products';
import { useCartStore } from '../store/useCartStore';

export default function DetalleProducto() {
  const { id } = useParams<{ id: string }>();
  const product = PRODUCTS.find((p) => p.id === id) || PRODUCTS[0];
  const navigate = useNavigate();
  const location = useLocation();

  const handleBackToCatalog = (e?: React.MouseEvent) => {
    if (e) e.preventDefault();
    if (location.state?.from) {
      navigate(location.state.from);
    } else if (window.history.length > 1) {
      navigate(-1);
    } else {
      navigate('/productos');
    }
  };

  const [toastMessage, setToastMessage] = useState<string | null>(null);
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

  const showNotification = (msg: string) => {
    setToastMessage(msg);
    setTimeout(() => setToastMessage(null), 3000);
  };

  return (
    <div className="flex flex-col w-full bg-surface-low min-h-screen">
      {/* Toast Notification */}
      {toastMessage && (
        <div className="fixed bottom-6 right-6 z-50 bg-secondary-darker text-white px-5 py-3 rounded-xl shadow-2xl flex items-center gap-3 border border-primary/30 animate-fade-in">
          <span className="material-symbols-outlined text-primary-fixed">task_alt</span>
          <span className="text-sm font-semibold">{toastMessage}</span>
        </div>
      )}

      {/* Breadcrumb Bar */}
      <section className="bg-white border-b border-gray-100 py-3 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <nav className="flex items-center gap-2 text-xs text-gray-500 font-medium">
            <Link to="/" className="hover:text-primary transition-colors flex items-center gap-1">
              <span className="material-symbols-outlined text-sm">home</span>
              <span>Inicio</span>
            </Link>
            <span>/</span>
            <button 
              type="button" 
              onClick={handleBackToCatalog} 
              className="hover:text-primary transition-colors cursor-pointer text-xs text-gray-500 font-medium"
            >
              Catálogo B2B
            </button>
            <span>/</span>
            <span className="text-gray-800 font-semibold truncate max-w-xs sm:max-w-none">
              {product.sku}
            </span>
          </nav>

          <button
            type="button"
            onClick={handleBackToCatalog}
            className="inline-flex items-center gap-1 text-xs font-semibold text-secondary hover:text-secondary-dark transition-colors cursor-pointer"
          >
            <span className="material-symbols-outlined text-sm">arrow_back</span>
            <span>Volver al Catálogo</span>
          </button>
        </div>
      </section>

      {/* Main Product Hero */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          <ProductGallery product={product} onOpenModal={() => setIsModalOpen(true)} />
          <ProductPurchaseCard product={product} onNotify={showNotification} />
        </div>

        {/* Detailed Engineering Specifications Tabs */}
        <TechnicalTabs specs={product.specs} features={product.features} />

        {/* Technical Downloads Center */}
        <TechnicalDownloads />
      </div>

      {/* Full-Screen Zoom Lightbox Modal */}
      <ProductImageModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        name={product.name}
        image={product.image}
      />
    </div>
  );
}

function ProductGallery({
  product,
  onOpenModal,
}: {
  product: (typeof PRODUCTS)[0];
  onOpenModal: () => void;
}) {
  const [isZooming, setIsZooming] = useState<boolean>(false);
  const [zoomPos, setZoomPos] = useState<{ x: number; y: number }>({ x: 50, y: 50 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const { left, top, width, height } = e.currentTarget.getBoundingClientRect();
    const x = Math.max(0, Math.min(100, ((e.clientX - left) / width) * 100));
    const y = Math.max(0, Math.min(100, ((e.clientY - top) / height) * 100));
    setZoomPos({ x, y });
  };

  return (
    <div className="lg:col-span-7 flex flex-col gap-4">
      {/* Main Visual Box */}
      <div className="bg-white rounded-2xl p-4 shadow-sm border border-gray-100 relative overflow-hidden">
        {/* Badges */}
        <div className="absolute top-6 left-6 z-10 flex flex-wrap gap-2 pointer-events-none">
          {product.tags.map((tag, idx) => (
            <span
              key={tag}
              className={`px-3 py-1 rounded-full text-xs font-bold shadow-sm ${
                idx === 0
                  ? 'bg-secondary-dark text-white'
                  : 'bg-primary text-white'
              }`}
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Expand Fullscreen / Modal Button */}
        <button
          type="button"
          onClick={onOpenModal}
          className="absolute top-6 right-6 z-10 w-10 h-10 rounded-xl bg-white/90 hover:bg-white text-gray-700 hover:text-primary shadow-md border border-gray-200/80 flex items-center justify-center transition-colors duration-200 cursor-pointer backdrop-blur-sm group"
          title="Ampliar imagen completa (Lupa)"
          aria-label="Ampliar imagen"
        >
          <span className="material-symbols-outlined text-xl group-hover:scale-110 transition-transform">zoom_in</span>
        </button>

        {/* Main Image with Interactive E-Commerce Zoom Lens */}
        <div 
          className="relative w-full aspect-[4/3] rounded-xl bg-surface-low/50 overflow-hidden flex items-center justify-center border border-gray-100 p-4 cursor-crosshair select-none"
          role="button"
          tabIndex={0}
          aria-label="Ver imagen ampliada"
          onMouseEnter={() => setIsZooming(true)}
          onMouseLeave={() => setIsZooming(false)}
          onMouseMove={handleMouseMove}
          onClick={onOpenModal}
          onKeyDown={(e) => {
            if (e.key === 'Enter' || e.key === ' ') {
              e.preventDefault();
              onOpenModal();
            }
          }}
        >
          {/* Product Image with smooth GPU-accelerated Zoom */}
          <img
            src={product.image}
            alt={product.name}
            className={`w-full h-full object-contain pointer-events-none transition-transform duration-100 will-change-transform ${
              isZooming ? 'scale-[2.4]' : 'scale-100'
            }`}
            style={{
              transformOrigin: isZooming ? `${zoomPos.x}% ${zoomPos.y}%` : 'center center'
            }}
          />

          {/* Interactive helper badge */}
          <div className="absolute bottom-3 right-3 px-2.5 py-1 rounded-lg bg-black/60 backdrop-blur-md text-white text-[11px] font-medium flex items-center gap-1.5 pointer-events-none opacity-80 group-hover:opacity-100 transition-opacity">
            <span className="material-symbols-outlined text-sm">search</span>
            <span>{isZooming ? 'Explorando detalles' : 'Pasa el cursor para lupa / Clic para pantalla completa'}</span>
          </div>
        </div>

        {/* Hardware tag watermark */}
        <div className="mt-3 flex items-center justify-between text-xs text-gray-500 px-1">
          <span className="flex items-center gap-1">
            <span className="material-symbols-outlined text-primary text-base">precision_manufacturing</span>
            <span>Equipo Homologado Oficial</span>
          </span>
          <span className="font-mono font-semibold text-primary">{product.sku}</span>
        </div>
      </div>

      {/* Physical Certifications */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-2">
        <div className="p-3 bg-white rounded-xl border border-gray-100 shadow-sm flex items-center gap-3">
          <div className="w-9 h-9 rounded-lg bg-surface-low text-secondary flex items-center justify-center">
            <span className="material-symbols-outlined text-xl">shield</span>
          </div>
          <div>
            <p className="font-montserrat font-bold text-xs text-gray-800">IK10</p>
            <p className="text-[10px] text-gray-500">Antivandálico 20J</p>
          </div>
        </div>
        <div className="p-3 bg-white rounded-xl border border-gray-100 shadow-sm flex items-center gap-3">
          <div className="w-9 h-9 rounded-lg bg-surface-low text-secondary flex items-center justify-center">
            <span className="material-symbols-outlined text-xl">water_drop</span>
          </div>
          <div>
            <p className="font-montserrat font-bold text-xs text-gray-800">IP67</p>
            <p className="text-[10px] text-gray-500">Hermético Intemperie</p>
          </div>
        </div>
        <div className="p-3 bg-white rounded-xl border border-gray-100 shadow-sm flex items-center gap-3">
          <div className="w-9 h-9 rounded-lg bg-surface-low text-primary flex items-center justify-center">
            <span className="material-symbols-outlined text-xl">volume_up</span>
          </div>
          <div>
            <p className="font-montserrat font-bold text-xs text-gray-800">Audio Bi-Dir</p>
            <p className="text-[10px] text-gray-500">Sirena + Micrófono</p>
          </div>
        </div>
        <div className="p-3 bg-white rounded-xl border border-gray-100 shadow-sm flex items-center gap-3">
          <div className="w-9 h-9 rounded-lg bg-surface-low text-primary flex items-center justify-center">
            <span className="material-symbols-outlined text-xl">flash_on</span>
          </div>
          <div>
            <p className="font-montserrat font-bold text-xs text-gray-800">Estrobo LED</p>
            <p className="text-[10px] text-gray-500">Alerta Disuasoria</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function ProductPurchaseCard({
  product,
  onNotify,
}: {
  product: (typeof PRODUCTS)[0];
  onNotify: (msg: string) => void;
}) {
  const { addItem } = useCartStore();
  const [quantity, setQuantity] = useState<number>(1);

  // Dynamic pricing calculation based on B2B volume
  const getUnitPrice = (qty: number) => {
    const base = product.price;
    if (qty >= 10) return Math.round(base * 0.85); // 15% adicional para obra
    if (qty >= 3) return Math.round(base * 0.92); // 8% adicional para 3+
    return base;
  };

  const unitPrice = getUnitPrice(quantity);
  const subtotal = unitPrice * quantity;
  const formatCOP = (num: number) => '$' + num.toLocaleString('es-CO') + ' COP';

  const handleAddToCart = () => {
    addItem(product, quantity);
    onNotify(`${quantity}x ${product.name} agregado a la cotización.`);
  };

  const handleWhatsAppInquiry = () => {
    const phone = '573108894215';
    const message = encodeURIComponent(
      `Hola SOLTECOM Ingeniería, requiero cotización formal para ${quantity} unidad(es) de ${product.name} (SKU: ${product.sku}) a tarifa B2B.`
    );
    window.open(`https://wa.me/${phone}?text=${message}`, '_blank');
  };

  return (
    <div className="lg:col-span-5 flex flex-col gap-4">
      <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 flex flex-col gap-5">
        {/* Product header */}
        <div>
          <span className="text-[11px] font-bold uppercase tracking-wider text-secondary">
            {product.brand} • SOLTECOM DISTRIBUIDOR OFICIAL
          </span>
          <h1 className="font-montserrat font-bold text-xl sm:text-2xl text-surface-dark mt-1 leading-snug">
            {product.name}
          </h1>
          <p className="text-xs text-gray-500 mt-2 leading-relaxed">
            {product.description}
          </p>
        </div>

        {/* Stock info */}
        <div className="flex items-center gap-2 p-3 rounded-xl bg-surface-low border border-gray-100">
          <span className="w-2.5 h-2.5 rounded-full bg-primary animate-pulse" />
          <span className="text-xs font-semibold text-gray-800">
            En Stock: {product.stock} unidades
          </span>
          <span className="text-xs text-gray-500">• Bodega Central (Despacho 24h)</span>
        </div>

        {/* Price Tier Scale */}
        <div className="flex flex-col gap-2">
          <span className="text-xs font-bold uppercase tracking-wider text-gray-500">
            Escala de Precios B2B por Volumen:
          </span>
          <div className="grid grid-cols-3 gap-2 text-center">
            <button 
              type="button"
              onClick={() => setQuantity(1)}
              className={`p-2 rounded-xl border transition-all cursor-pointer ${
                quantity < 3 ? 'border-primary bg-primary/5 text-primary' : 'border-gray-200 bg-gray-50'
              }`}
            >
              <span className="text-[11px] block font-medium">1 a 2 unid.</span>
              <span className="font-montserrat font-bold text-sm block">
                {formatCOP(product.price)}
              </span>
              <span className="text-[10px] text-gray-500">Precio Base</span>
            </button>

            <button 
              type="button"
              onClick={() => setQuantity(3)}
              className={`p-2 rounded-xl border transition-all cursor-pointer ${
                quantity >= 3 && quantity < 10 ? 'border-primary bg-primary/5 text-primary' : 'border-gray-200 bg-gray-50'
              }`}
            >
              <span className="text-[11px] block font-bold text-secondary">3 a 9 unid. (-8%)</span>
              <span className="font-montserrat font-bold text-sm block">
                {formatCOP(Math.round(product.price * 0.92))}
              </span>
              <span className="text-[10px] text-secondary font-medium">Mayorista</span>
            </button>

            <button 
              type="button"
              onClick={() => setQuantity(10)}
              className={`p-2 rounded-xl border transition-all cursor-pointer ${
                quantity >= 10 ? 'border-primary bg-primary/5 text-primary' : 'border-gray-200 bg-gray-50'
              }`}
            >
              <span className="text-[11px] block font-bold text-primary">10+ unid. (-15%)</span>
              <span className="font-montserrat font-bold text-sm block">
                {formatCOP(Math.round(product.price * 0.85))}
              </span>
              <span className="text-[10px] text-primary font-bold">Obra / Integrador</span>
            </button>
          </div>
        </div>

        {/* Quantity Selector & Interactive Total */}
        <div className="p-4 rounded-xl bg-surface-low border border-gray-100 flex flex-col gap-3">
          <div className="flex items-center justify-between">
            <label htmlFor="b2b-qty-input" className="text-xs font-semibold text-gray-700">Cantidad requerida:</label>
            <div className="flex items-center bg-white rounded-lg border border-gray-200 shadow-sm">
              <button
                type="button"
                aria-label="Restar cantidad"
                onClick={() => setQuantity(Math.max(1, quantity - 1))}
                className="w-9 h-9 flex items-center justify-center font-bold text-gray-600 hover:bg-gray-100 rounded-l"
              >
                -
              </button>
              <input
                id="b2b-qty-input"
                type="number"
                min={1}
                max={product.stock}
                value={quantity}
                onChange={(e) => setQuantity(Math.max(1, parseInt(e.target.value) || 1))}
                className="w-12 text-center text-sm font-bold text-surface-dark bg-transparent focus:outline-none"
              />
              <button
                type="button"
                aria-label="Sumar cantidad"
                onClick={() => setQuantity(Math.min(product.stock, quantity + 1))}
                className="w-9 h-9 flex items-center justify-center font-bold text-gray-600 hover:bg-gray-100 rounded-r"
              >
                +
              </button>
            </div>
          </div>

          <div className="pt-2 flex items-baseline justify-between border-t border-gray-200">
            <span className="text-xs text-gray-500">Subtotal Estimado:</span>
            <div className="text-right">
              <span className="font-montserrat font-bold text-xl text-primary block">
                {formatCOP(subtotal)}
              </span>
              <span className="text-[11px] text-gray-400">+ IVA 19% facturación legal</span>
            </div>
          </div>
        </div>

        {/* Primary Action Buttons */}
        <div className="flex flex-col gap-2 pt-1">
          <button
            type="button"
            onClick={handleAddToCart}
            className="w-full py-3 px-4 rounded-xl bg-primary hover:bg-primary-dark text-white font-montserrat font-semibold text-sm transition-colors duration-200 shadow-md flex items-center justify-center gap-2"
          >
            <span className="material-symbols-outlined text-lg">shopping_cart_checkout</span>
            <span>Añadir a la cotización B2B</span>
          </button>

          <button
            type="button"
            onClick={handleWhatsAppInquiry}
            className="w-full py-3 px-4 rounded-xl bg-secondary hover:bg-secondary-dark text-white font-montserrat font-semibold text-sm transition-colors duration-200 shadow-md flex items-center justify-center gap-2"
          >
            <span className="material-symbols-outlined text-lg">chat</span>
            <span>Cotizar por WhatsApp con Asesor</span>
          </button>
        </div>

        {/* Guarantee text */}
        <div className="flex flex-col gap-2 pt-2 border-t border-gray-100 text-xs text-gray-600">
          <div className="flex items-start gap-2">
            <span className="material-symbols-outlined text-primary text-lg shrink-0">verified</span>
            <p><strong>Garantía Oficial:</strong> {product.warranty}</p>
          </div>
          <div className="flex items-start gap-2">
            <span className="material-symbols-outlined text-secondary text-lg shrink-0">engineering</span>
            <p><strong>Soporte Nivel 2:</strong> Asistencia remota de ingenieros SOLTECOM para comisionamiento.</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function TechnicalTabs({
  specs,
  features,
}: {
  specs: Record<string, string>;
  features: string[];
}) {
  const [activeTab, setActiveTab] = useState<'optica' | 'ai' | 'conectividad' | 'ambiente'>('optica');

  return (
    <div className="mt-12 bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
      <div className="border-b border-gray-200 pb-4 mb-6">
        <span className="text-[11px] font-bold uppercase tracking-wider text-primary">
          Documentación & Matriz de Ingeniería
        </span>
        <h2 className="font-montserrat font-bold text-xl sm:text-2xl text-surface-dark mt-1">
          Especificaciones Técnicas Certificadas
        </h2>
      </div>

      {/* Tab Navigation */}
      <div className="flex items-center gap-2 overflow-x-auto pb-3 mb-6 no-scrollbar">
        <button
          type="button"
          onClick={() => setActiveTab('optica')}
          className={`px-4 py-2.5 rounded-xl font-montserrat text-xs font-semibold whitespace-nowrap transition-all flex items-center gap-2 ${
            activeTab === 'optica' ? 'bg-secondary-dark text-white shadow-sm' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
          }`}
        >
          <span className="material-symbols-outlined text-base">camera</span>
          <span>1. Óptica y Sensor</span>
        </button>
        <button
          type="button"
          onClick={() => setActiveTab('ai')}
          className={`px-4 py-2.5 rounded-xl font-montserrat text-xs font-semibold whitespace-nowrap transition-all flex items-center gap-2 ${
            activeTab === 'ai' ? 'bg-secondary-dark text-white shadow-sm' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
          }`}
        >
          <span className="material-symbols-outlined text-base">psychology</span>
          <span>2. Analíticas AI & AcuSense</span>
        </button>
        <button
          type="button"
          onClick={() => setActiveTab('conectividad')}
          className={`px-4 py-2.5 rounded-xl font-montserrat text-xs font-semibold whitespace-nowrap transition-all flex items-center gap-2 ${
            activeTab === 'conectividad' ? 'bg-secondary-dark text-white shadow-sm' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
          }`}
        >
          <span className="material-symbols-outlined text-base">settings_ethernet</span>
          <span>3. Conectividad, Puertos y Red</span>
        </button>
        <button
          type="button"
          onClick={() => setActiveTab('ambiente')}
          className={`px-4 py-2.5 rounded-xl font-montserrat text-xs font-semibold whitespace-nowrap transition-all flex items-center gap-2 ${
            activeTab === 'ambiente' ? 'bg-secondary-dark text-white shadow-sm' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
          }`}
        >
          <span className="material-symbols-outlined text-base">hardware</span>
          <span>4. Chasis y Ambiente</span>
        </button>
      </div>

      {/* Tab 1: Optics */}
      {activeTab === 'optica' && (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-3">
            <h3 className="font-montserrat font-bold text-sm text-gray-900 flex items-center gap-2">
              <span className="material-symbols-outlined text-primary text-lg">lens</span>
              <span>Subsistema Óptico y Sensor</span>
            </h3>
            <dl className="space-y-2 text-xs">
              {Object.entries(specs).map(([key, value]) => (
                <div key={key} className="p-2.5 rounded-lg bg-surface-low flex justify-between">
                  <dt className="text-gray-500 font-medium">{key}:</dt>
                  <dd className="text-gray-900 font-semibold text-right">{value}</dd>
                </div>
              ))}
            </dl>
          </div>

          <div className="space-y-3">
            <h3 className="font-montserrat font-bold text-sm text-gray-900 flex items-center gap-2">
              <span className="material-symbols-outlined text-secondary text-lg">hdr_on</span>
              <span>Rango Dinámico y Visión Nocturna</span>
            </h3>
            <div className="p-4 rounded-xl bg-surface-low space-y-2 text-xs text-gray-700">
              <p><strong>WDR Real 120 dB:</strong> Captura imágenes nítidas en entornos con contrastes lumínicos extremos.</p>
              <p><strong>EXIR 2.0 Infrarrojo:</strong> Tecnología de dispersión uniforme que elimina zonas quemadas centrales.</p>
              <p><strong>Reducción de Ruido 3D DNR:</strong> Mantiene la claridad forense aún en absoluta penumbra (0 Lux).</p>
            </div>
          </div>
        </div>
      )}

      {/* Tab 2: AI */}
      {activeTab === 'ai' && (
        <div className="space-y-4">
          <h3 className="font-montserrat font-bold text-sm text-gray-900 flex items-center gap-2">
            <span className="material-symbols-outlined text-primary text-lg">neurology</span>
            <span>Deep Learning & Detección Proactiva</span>
          </h3>
          <p className="text-xs text-gray-600 leading-relaxed">
            Algoritmos entrenados para filtrar hasta el 98% de falsas alarmas (hojas, lluvia, insectos) y alertar únicamente cuando hay presencia humana o vehicular en áreas restringidas.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
            {features.map((feat) => (
              <div key={feat} className="p-3 bg-surface-low rounded-xl flex items-center gap-2.5 text-xs text-gray-800">
                <span className="material-symbols-outlined text-primary text-lg">check_circle</span>
                <span>{feat}</span>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Tab 3: Connectivity */}
      {activeTab === 'conectividad' && (
        <div className="space-y-3">
          <h3 className="font-montserrat font-bold text-sm text-gray-900 flex items-center gap-2">
            <span className="material-symbols-outlined text-secondary text-lg">lan</span>
            <span>Transmisión & Ciberseguridad</span>
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
            <div className="p-3 bg-surface-low rounded-xl space-y-1">
              <p className="font-bold text-gray-900">Alimentación Eléctrica</p>
              <p className="text-gray-600">PoE (802.3af, Clase 3) / 12 VDC ± 25% (Consumo máx 9.5W)</p>
            </div>
            <div className="p-3 bg-surface-low rounded-xl space-y-1">
              <p className="font-bold text-gray-900">Compatibilidad VMS</p>
              <p className="text-gray-600">ONVIF (Profile S, Profile G, Profile T), ISAPI, SDK Hikvision</p>
            </div>
            <div className="p-3 bg-surface-low rounded-xl space-y-1">
              <p className="font-bold text-gray-900">Códecs de Compresión</p>
              <p className="text-gray-600">H.265+ / H.265 / H.264+ / H.264 con ahorro del 75% de ancho de banda</p>
            </div>
            <div className="p-3 bg-surface-low rounded-xl space-y-1">
              <p className="font-bold text-gray-900">Criptografía</p>
              <p className="text-gray-600">HTTPS, TLS 1.3, IEEE 802.1X, Autenticación Digest</p>
            </div>
          </div>
        </div>
      )}

      {/* Tab 4: Environment */}
      {activeTab === 'ambiente' && (
        <div className="space-y-3">
          <h3 className="font-montserrat font-bold text-sm text-gray-900 flex items-center gap-2">
            <span className="material-symbols-outlined text-secondary text-lg">architecture</span>
            <span>Construcción y Condiciones Ambientales</span>
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
            <div className="p-3 bg-surface-low rounded-xl space-y-1">
              <p className="font-bold text-gray-900">Rango de Temperatura</p>
              <p className="text-gray-600">-30 °C a 60 °C (-22 °F a 140 °F)</p>
            </div>
            <div className="p-3 bg-surface-low rounded-xl space-y-1">
              <p className="font-bold text-gray-900">Humedad Tolerada</p>
              <p className="text-gray-600">Hasta 95% o menor (sin condensación de vapor)</p>
            </div>
            <div className="p-3 bg-surface-low rounded-xl space-y-1">
              <p className="font-bold text-gray-900">Chasis Metálico</p>
              <p className="text-gray-600">Aleación de aluminio ADC12 con pintura electrostática anticorrosiva</p>
            </div>
            <div className="p-3 bg-surface-low rounded-xl space-y-1">
              <p className="font-bold text-gray-900">Supresor de Picos</p>
              <p className="text-gray-600">Protección contra transitorios TVS 2000V contra rayos</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

function TechnicalDownloads() {
  return (
    <div className="mt-8 bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-6 border-b border-gray-100 pb-4">
        <div>
          <span className="text-[11px] font-bold uppercase tracking-wider text-primary">
            Archivos Oficiales
          </span>
          <h2 className="font-montserrat font-bold text-lg text-surface-dark">
            Centro de Descargas Técnicas
          </h2>
        </div>
        <span className="text-xs text-gray-500 flex items-center gap-1">
          <span className="material-symbols-outlined text-primary text-base">verified</span>
          <span>SHA-256 Verificado</span>
        </span>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <div className="p-4 rounded-xl bg-surface-low border border-gray-100 flex flex-col justify-between">
          <div className="flex items-start justify-between">
            <span className="material-symbols-outlined text-red-500 text-3xl">picture_as_pdf</span>
            <span className="text-[10px] font-bold px-2 py-0.5 rounded bg-gray-200 text-gray-700">2.4 MB</span>
          </div>
          <div className="mt-3">
            <h4 className="font-montserrat font-bold text-xs text-gray-900">Data Sheet Oficial</h4>
            <p className="text-[11px] text-gray-500 mt-0.5">Ficha técnica en español para licitaciones públicas.</p>
          </div>
          <a href="#" className="mt-3 inline-flex items-center gap-1 text-primary text-xs font-semibold hover:underline">
            <span>Descargar PDF</span>
            <span className="material-symbols-outlined text-sm">download</span>
          </a>
        </div>

        <div className="p-4 rounded-xl bg-surface-low border border-gray-100 flex flex-col justify-between">
          <div className="flex items-start justify-between">
            <span className="material-symbols-outlined text-red-500 text-3xl">menu_book</span>
            <span className="text-[10px] font-bold px-2 py-0.5 rounded bg-gray-200 text-gray-700">4.1 MB</span>
          </div>
          <div className="mt-3">
            <h4 className="font-montserrat font-bold text-xs text-gray-900">Manual de Instalación</h4>
            <p className="text-[11px] text-gray-500 mt-0.5">Guía de conexionado y montaje en intemperie.</p>
          </div>
          <a href="#" className="mt-3 inline-flex items-center gap-1 text-primary text-xs font-semibold hover:underline">
            <span>Descargar PDF</span>
            <span className="material-symbols-outlined text-sm">download</span>
          </a>
        </div>

        <div className="p-4 rounded-xl bg-surface-low border border-gray-100 flex flex-col justify-between">
          <div className="flex items-start justify-between">
            <span className="material-symbols-outlined text-secondary text-3xl">architecture</span>
            <span className="text-[10px] font-bold px-2 py-0.5 rounded bg-gray-200 text-gray-700">1.8 MB</span>
          </div>
          <div className="mt-3">
            <h4 className="font-montserrat font-bold text-xs text-gray-900">Planos CAD / DWG</h4>
            <p className="text-[11px] text-gray-500 mt-0.5">Bloques para AutoCAD y Revit con cotas exactas.</p>
          </div>
          <a href="#" className="mt-3 inline-flex items-center gap-1 text-primary text-xs font-semibold hover:underline">
            <span>Descargar DWG</span>
            <span className="material-symbols-outlined text-sm">download</span>
          </a>
        </div>

        <div className="p-4 rounded-xl bg-surface-low border border-gray-100 flex flex-col justify-between">
          <div className="flex items-start justify-between">
            <span className="material-symbols-outlined text-primary text-3xl">verified_user</span>
            <span className="text-[10px] font-bold px-2 py-0.5 rounded bg-gray-200 text-gray-700">890 KB</span>
          </div>
          <div className="mt-3">
            <h4 className="font-montserrat font-bold text-xs text-gray-900">Certificación RETIE / CE</h4>
            <p className="text-[11px] text-gray-500 mt-0.5">Conformidad eléctrica legal para radicación en Colombia.</p>
          </div>
          <a href="#" className="mt-3 inline-flex items-center gap-1 text-primary text-xs font-semibold hover:underline">
            <span>Descargar PDF</span>
            <span className="material-symbols-outlined text-sm">download</span>
          </a>
        </div>
      </div>
    </div>
  );
}

function ProductImageModal({
  isOpen,
  onClose,
  name,
  image,
}: {
  isOpen: boolean;
  onClose: () => void;
  name: string;
  image: string;
}) {
  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex flex-col items-center justify-center p-4 sm:p-6 animate-fade-in"
      onClick={onClose}
    >
      {/* Top Bar */}
      <div
        className="w-full max-w-6xl flex items-center justify-between text-white pb-4 px-2"
        onClick={(e) => e.stopPropagation()}
      >
        <div>
          <span className="text-primary-fixed uppercase tracking-wider text-xs font-bold font-montserrat">
            Visualizador de Alta Definición SOLTECOM
          </span>
          <h3 className="font-montserrat font-bold text-base sm:text-lg text-white truncate max-w-lg">
            {name}
          </h3>
        </div>
        <button
          type="button"
          onClick={onClose}
          className="p-2.5 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors duration-200 cursor-pointer flex items-center justify-center"
          title="Cerrar (Esc)"
          aria-label="Cerrar modal"
        >
          <span className="material-symbols-outlined text-2xl">close</span>
        </button>
      </div>

      {/* Modal Image Stage */}
      <div
        className="relative w-full max-w-5xl h-[75vh] sm:h-[80vh] bg-white/5 rounded-2xl border border-white/10 flex items-center justify-center p-4 overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        <img
          src={image}
          alt={name}
          className="max-w-full max-h-full object-contain drop-shadow-2xl transition-transform duration-300 hover:scale-105 select-none"
        />
      </div>
    </div>
  );
}
