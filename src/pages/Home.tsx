import React from 'react';
import { Link } from 'react-router-dom';
import Hero from '../components/Hero';
import ServicesSection from '../components/ServicesSection';
import ProductCard from '../components/ProductCard';
import { PRODUCTS } from '../data/products';

export default function Home() {
  const featuredProducts = PRODUCTS.slice(0, 4);

  return (
    <div className="flex flex-col w-full">
      {/* 1. Hero Section */}
      <Hero />

      {/* 2. Services Section */}
      <ServicesSection />

      {/* 3. Featured Products Preview */}
      <section className="w-full bg-surface-low py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-10">
            <div>
              <span className="font-montserrat text-xs font-bold uppercase tracking-wider text-primary">
                Equipamiento B2B Destacado
              </span>
              <h2 className="font-montserrat font-bold text-2xl sm:text-3xl text-surface-dark mt-1">
                Catálogo de Equipos Seleccionados
              </h2>
            </div>
            <Link
              to="/productos"
              className="inline-flex items-center gap-1.5 text-primary hover:text-primary-dark font-montserrat font-semibold text-sm transition-colors"
            >
              <span>Ver todos los productos ({PRODUCTS.length})</span>
              <span className="material-symbols-outlined text-lg">arrow_forward</span>
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>

      {/* 4. Direct B2B Consultation Banner */}
      <section className="w-full bg-secondary-darker py-16 text-white relative overflow-hidden">
        <div className="absolute -right-20 -bottom-20 w-80 h-80 rounded-full bg-primary/20 blur-3xl pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="flex items-center gap-4">
            <div className="w-14 h-14 rounded-2xl bg-primary text-white flex items-center justify-center shrink-0 shadow-lg">
              <span className="material-symbols-outlined text-3xl">handshake</span>
            </div>
            <div>
              <h3 className="font-montserrat font-bold text-xl sm:text-2xl text-white">
                ¿Requiere Implementación Llave en Mano?
              </h3>
              <p className="text-sm text-gray-300 mt-1 max-w-xl">
                Estructuramos pliegos de licitación, visitas de diagnóstico en sitio y suministro con mano de obra certificada.
              </p>
            </div>
          </div>
          <Link
            to="/contacto"
            className="w-full sm:w-auto px-8 py-4 rounded-xl bg-primary hover:bg-primary-light text-white font-montserrat font-bold text-sm text-center shadow-xl transition-colors duration-200 shrink-0"
          >
            Solicitar Visita Técnica Gratuita
          </Link>
        </div>
      </section>
    </div>
  );
}
