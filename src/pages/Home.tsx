import React from 'react';
import { Link } from 'react-router-dom';
import Hero from '../components/Hero';
import ServicesSection from '../components/ServicesSection';
import ProductCard from '../components/ProductCard';
import MetricsMagnification from '../components/animations/MetricsMagnification';
import ContinuousProductCarousel from '../components/animations/ContinuousProductCarousel';
import BlurText from '../components/animations/BlurText';
import { PRODUCTS } from '../data/products';

export default function Home() {
  const featuredProducts = PRODUCTS.slice(0, 4);

  return (
    <div className="flex flex-col w-full">
      {/* 1. Hero Section */}
      <Hero />

      {/* 2. Services Section */}
      <ServicesSection />

      {/* 3. Cifras & Métricas Magnification Section */}
      <section className="w-full bg-surface-low border-y border-gray-100/80">
        <MetricsMagnification />
      </section>

      {/* 4. Featured Products Preview */}
      <section className="w-full bg-white py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-10">
            <div className="w-full flex items-center justify-start">
              <BlurText
                text="Catálogo de Equipos Seleccionados"
                delay={30}
                animateBy="letters"
                direction="bottom"
                className="font-lora font-bold text-2xl sm:text-3xl text-surface-dark drop-shadow-sm [&>span:nth-child(n+21)]:text-primary"
              />
            </div>
            <Link
              to="/productos"
              className="inline-flex items-center gap-1.5 text-primary hover:text-primary-dark font-montserrat font-semibold text-sm transition-colors"
            >
              <span>Ver todos los productos ({PRODUCTS.length})</span>
              <span className="material-symbols-outlined text-lg">arrow_forward</span>
            </Link>
          </div>

{/* react-doctor-disable-next-line react-doctor/no-giant-component */}
          <ContinuousProductCarousel products={PRODUCTS} speed={PRODUCTS.length * 4.5} />
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
