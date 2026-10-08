import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { m as motion, AnimatePresence } from 'framer-motion';
import { Product } from '../types';
import { useCartStore } from '../store/useCartStore';
import { useUIStore } from '../store/useUIStore';
import { COMPANY_INFO } from '../data/company';

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  const { addItem } = useCartStore();
  const location = useLocation();
  const setTechnicalGuideOpen = useUIStore((state) => state.setTechnicalGuideOpen);
  const [isGuideOpen, setIsGuideOpen] = useState(false);

  useEffect(() => {
    if (isGuideOpen) {
      setTechnicalGuideOpen(true);
      document.body.style.overflow = 'hidden';
      const handleKeyDown = (e: KeyboardEvent) => {
        if (e.key === 'Escape') setIsGuideOpen(false);
      };
      window.addEventListener('keydown', handleKeyDown);
      return () => {
        setTechnicalGuideOpen(false);
        document.body.style.overflow = '';
        window.removeEventListener('keydown', handleKeyDown);
      };
    } else {
      setTechnicalGuideOpen(false);
    }
  }, [isGuideOpen, setTechnicalGuideOpen]);

  useEffect(() => {
    return () => {
      setTechnicalGuideOpen(false);
    };
  }, [setTechnicalGuideOpen]);

  const handleSaveScroll = () => {
    sessionStorage.setItem('soltecom_catalog_scroll_y', String(window.scrollY));
  };

  const formatCOP = (val: number) => {
    return '$' + val.toLocaleString('es-CO') + ' COP';
  };

  const linkTarget = {
    pathname: `/productos/${product.id}`,
  };
  const linkState = {
    from: location.pathname + location.search,
  };

  const whatsappInquiryUrl = `https://wa.me/${COMPANY_INFO.whatsapp}?text=${encodeURIComponent(
    `Hola SOLTECOM, requiero asesoría técnica para el equipo:\n- Modelo: ${product.name}\n- Marca: ${product.brand}\n- SKU: ${product.sku}`
  )}`;

  return (
    <>
      <motion.div
        initial={{ opacity: 0, y: 15 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.3 }}
        whileHover={{ y: -5 }}
        className="group rounded-2xl bg-white p-4 shadow-sm hover:shadow-xl transition-shadow duration-300 flex flex-col justify-between border border-gray-100 relative"
      >
        <div className="flex flex-col">
          {/* Product Image & Quick Guide trigger */}
          <div className="relative w-full aspect-[4/3] rounded-xl bg-white overflow-hidden mb-3 flex items-center justify-center border border-gray-100/70 p-3">
            <Link 
              to={linkTarget} 
              state={linkState} 
              onClick={handleSaveScroll}
              className="w-full h-full flex items-center justify-center"
            >
              <motion.img 
                layoutId={`product-card-image-${product.id}`}
                src={product.image} 
                alt={product.name} 
                loading="lazy" 
                decoding="async" 
                className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-300"
              />
            </Link>

            <span className="absolute top-2 left-2 px-2 py-0.5 rounded-full bg-primary text-white text-[11px] font-semibold shadow pointer-events-none">
              En Stock
            </span>
            {product.tags?.[0] && (
              <span className="absolute top-2 right-2 px-2 py-0.5 rounded-full bg-surface-high text-surface-dark text-[11px] font-bold shadow pointer-events-none">
                {product.tags[0]}
              </span>
            )}

            {/* Shared Element Guide Trigger Pill */}
            <button
              type="button"
              onClick={(e) => {
                e.preventDefault();
                e.stopPropagation();
                setIsGuideOpen(true);
              }}
              className="absolute bottom-2 right-2 px-2.5 py-1 rounded-lg bg-slate-900/80 hover:bg-slate-900 text-white text-[10px] font-semibold flex items-center gap-1 backdrop-blur-md shadow-md transition-transform duration-200 hover:scale-105 z-10"
              title="Abrir guía técnica interactiva"
            >
              <span className="material-symbols-outlined text-xs text-primary">menu_book</span>
              <span>Guía Técnica</span>
            </button>
          </div>

          {/* Brand & Title */}
          <motion.span 
            layoutId={`product-card-brand-${product.id}`}
            className="text-[11px] font-bold text-primary uppercase tracking-wide"
          >
            {product.brand}
          </motion.span>
          <Link 
            to={linkTarget} 
            state={linkState} 
            onClick={handleSaveScroll}
          >
            <motion.h3 
              layoutId={`product-card-title-${product.id}`}
              className="font-montserrat font-semibold text-sm sm:text-base text-surface-dark mt-1 line-clamp-2 hover:text-primary transition-colors"
            >
              {product.name}
            </motion.h3>
          </Link>
          <p className="text-xs text-gray-500 mt-1 line-clamp-2">
            {product.shortDesc}
          </p>

          {/* Quick Specs Snippet */}
          <div className="mt-3 pt-2 border-t border-gray-50 space-y-1 text-xs text-gray-600">
            {Object.entries(product.specs).slice(0, 2).map(([key, val]) => (
              <div key={key} className="flex justify-between">
                <span className="text-gray-400">{key}:</span>
                <span className="font-medium text-gray-800 text-right">{val}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Pricing & CTA */}
        <div className="pt-4 mt-3 border-t border-gray-100 flex flex-col gap-2">
          <div className="flex items-baseline justify-between">
            <span className="text-[11px] text-gray-400 font-medium">Precio B2B</span>
            <span className="font-montserrat font-bold text-base text-surface-dark">
              {formatCOP(product.price)}
            </span>
          </div>

          <div className="grid grid-cols-2 gap-2">
            <button
              type="button"
              onClick={() => setIsGuideOpen(true)}
              className="py-2 px-2 rounded-xl bg-gray-100 hover:bg-gray-200 text-gray-700 text-xs font-semibold text-center transition-colors flex items-center justify-center gap-1"
            >
              <span className="material-symbols-outlined text-sm text-primary">visibility</span>
              <span>Guía Técnica</span>
            </button>
            <button
              onClick={() => addItem(product, 1)}
              className="py-2 px-2 rounded-xl bg-primary hover:bg-primary-light text-white text-xs font-semibold transition-colors flex items-center justify-center gap-1 shadow-sm"
            >
              <span className="material-symbols-outlined text-sm">add_shopping_cart</span>
              <span>Añadir</span>
            </button>
          </div>
        </div>
      </motion.div>

      {/* Shared Element Guide Modal */}
      <AnimatePresence>
        {isGuideOpen && (
          <div className="fixed inset-0 z-[70] flex items-center justify-center p-3 sm:p-5 overflow-hidden">
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.25 }}
              onClick={() => setIsGuideOpen(false)}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') setIsGuideOpen(false);
              }}
              tabIndex={0}
              role="button"
              aria-label="Cerrar modal de guía técnica"
              className="fixed inset-0 bg-slate-950/80 backdrop-blur-md cursor-pointer"
            />

            {/* Modal Dialog with Shared Element Expansion */}
            <motion.div
              layoutId={`guide-card-${product.id}`}
              role="dialog"
              aria-modal="true"
              aria-labelledby={`guide-title-${product.id}`}
              initial={{ opacity: 0, scale: 0.95, y: 15 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 15 }}
              transition={{ type: "spring", damping: 26, stiffness: 290 }}
              className="relative w-full max-w-xl bg-white rounded-2xl sm:rounded-3xl shadow-2xl border border-gray-100 overflow-hidden z-10 flex flex-col max-h-[82vh] my-auto"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Header Bar */}
              <div className="flex items-center justify-between px-4 py-3 sm:px-5 sm:py-3.5 border-b border-gray-100 bg-surface-low/70 shrink-0">
                <div className="flex items-center gap-2">
                  <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-lg bg-primary/10 text-primary flex items-center justify-center">
                    <span className="material-symbols-outlined text-base">verified</span>
                  </div>
                  <div>
                    <motion.span 
                      layoutId={`product-card-brand-${product.id}`}
                      className="text-[11px] font-bold text-primary uppercase tracking-wider block"
                    >
                      {product.brand} • Ficha Técnica Oficial
                    </motion.span>
                    <span className="text-[10px] text-gray-500 font-mono">SKU: {product.sku}</span>
                  </div>
                </div>

                <button
                  type="button"
                  onClick={() => setIsGuideOpen(false)}
                  className="w-8 h-8 rounded-full bg-gray-100 hover:bg-gray-200 text-gray-600 flex items-center justify-center transition-colors"
                  aria-label="Cerrar guía"
                >
                  <span className="material-symbols-outlined text-base">close</span>
                </button>
              </div>

              {/* Body Content */}
              <div className="p-4 sm:p-5 overflow-y-auto space-y-4 sm:space-y-5">
                <div className="grid grid-cols-1 sm:grid-cols-12 gap-4 items-center">
                  {/* Shared Element Image */}
                  <div className="sm:col-span-5 bg-surface-low rounded-xl p-3 flex items-center justify-center h-32 sm:h-40 border border-gray-100">
                    <motion.img
                      layoutId={`product-card-image-${product.id}`}
                      src={product.image}
                      alt={product.name}
                      className="max-h-full max-w-full object-contain"
                    />
                  </div>

                  {/* Title & Quick Pricing */}
                  <div className="sm:col-span-7 flex flex-col gap-1.5">
                    <motion.h3 
                      layoutId={`product-card-title-${product.id}`}
                      className="font-montserrat font-bold text-sm sm:text-base text-surface-dark leading-snug"
                    >
                      {product.name}
                    </motion.h3>
                    <p className="text-[11px] sm:text-xs text-gray-600 leading-relaxed line-clamp-3">
                      {product.shortDesc}
                    </p>
                    
                    <div className="flex items-baseline gap-2 pt-1">
                      <span className="text-[11px] text-gray-400 font-medium">Precio B2B:</span>
                      <span className="font-montserrat font-bold text-lg text-primary">
                        {formatCOP(product.price)}
                      </span>
                    </div>

                    <div className="flex items-center gap-1.5 text-[11px] text-emerald-600 font-medium">
                      <span className="material-symbols-outlined text-xs">verified_user</span>
                      <span>1 Año de Garantía Directa SOLTECOM</span>
                    </div>
                  </div>
                </div>

                {/* Technical Matrix Table */}
                <div className="border border-gray-100 rounded-xl p-3 bg-surface-low/30 space-y-2">
                  <h4 className="font-montserrat font-bold text-[11px] uppercase tracking-wider text-gray-700 flex items-center gap-1.5">
                    <span className="material-symbols-outlined text-primary text-sm">tune</span>
                    <span>Especificaciones Técnicas Certificadas</span>
                  </h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-1.5 text-[11px]">
                    {Object.entries(product.specs).map(([key, val]) => (
                      <div key={key} className="py-1.5 px-2.5 rounded-lg bg-white border border-gray-100 flex justify-between items-center">
                        <span className="text-gray-500 font-medium">{key}:</span>
                        <span className="text-gray-900 font-semibold text-right">{val}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Engineering Recommendation Box */}
                <div className="border border-primary/20 bg-primary/5 rounded-xl p-3 space-y-1.5">
                  <h4 className="font-montserrat font-bold text-[11px] uppercase tracking-wider text-primary flex items-center gap-1.5">
                    <span className="material-symbols-outlined text-sm">engineering</span>
                    <span>Guía de Conexión & Montaje SOLTECOM</span>
                  </h4>
                  <ul className="text-[11px] text-gray-700 space-y-1 list-disc list-inside">
                    <li>Alimentación recomendada: Switch PoE estándar IEEE 802.3af/at o adaptador 12VDC certificado.</li>
                    <li>Cableado óptimo: Cable UTP Categoría 6 100% Cobre para garantizar ancho de banda e inmunidad al ruido.</li>
                    <li>Soporte de integración con sistemas de grabación NVR y visualización remota en tiempo real.</li>
                  </ul>
                </div>
              </div>

              {/* Footer CTA */}
              <div className="p-3 sm:p-4 border-t border-gray-100 bg-white flex flex-col sm:flex-row items-center justify-between gap-2 shrink-0">
                <Link
                  to={linkTarget}
                  state={linkState}
                  onClick={() => {
                    handleSaveScroll();
                    setIsGuideOpen(false);
                  }}
                  className="w-full sm:w-auto text-center px-3.5 py-2 rounded-xl border border-gray-200 text-gray-700 hover:text-primary hover:border-primary text-xs font-semibold font-montserrat transition-colors"
                >
                  Ver Ficha Completa
                </Link>

                <div className="flex items-center gap-2 w-full sm:w-auto">
                  <a
                    href={whatsappInquiryUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 sm:flex-none inline-flex items-center justify-center gap-1.5 px-3.5 py-2 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-bold font-montserrat transition-colors shadow-sm"
                  >
                    <span className="material-symbols-outlined text-sm">chat</span>
                    <span>Consultar Asesor</span>
                  </a>

                  <button
                    type="button"
                    onClick={() => {
                      addItem(product, 1);
                      setIsGuideOpen(false);
                    }}
                    className="flex-1 sm:flex-none inline-flex items-center justify-center gap-1.5 px-3.5 py-2 rounded-xl bg-primary hover:bg-primary-light text-white text-xs font-bold font-montserrat transition-colors shadow-sm"
                  >
                    <span className="material-symbols-outlined text-sm">add_shopping_cart</span>
                    <span>Añadir al Carrito</span>
                  </button>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
}
