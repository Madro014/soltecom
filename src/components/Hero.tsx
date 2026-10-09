import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { m as motion } from 'framer-motion';
import { COMPANY_INFO } from '../data/company';

export default function Hero() {
  const [hoveredMetric, setHoveredMetric] = useState<number | null>(null);

  return (
    <section className="relative w-full min-h-screen flex flex-col bg-[#030914] overflow-hidden text-white">
      {/* Background Image */}
      <div className="absolute inset-0 pointer-events-none">
        <img 
          src="/banners/banner2.webp" 
          alt="Instalaciones SOLTECOM" 
          className="w-full h-full object-cover object-bottom filter brightness-[0.95] contrast-[1.05]"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/30 to-transparent" />
        <div className="absolute top-0 inset-x-0 h-24 bg-gradient-to-b from-black/60 to-transparent" />
      </div>

      <div className="relative z-10 flex-1 flex flex-col justify-between max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-28 sm:pb-32 lg:pt-28 lg:pb-36 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* Text Column */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7 flex flex-col items-start gap-5"
          >
  

            {/* Main Headline with Fuerte Font */}
            <h1 className="font-fuerte text-3xl sm:text-4xl lg:text-5xl text-white leading-[1.15] tracking-tight">
              Soluciones tecnológicas <br className="hidden sm:inline" />
              <span className="text-emerald-400">y seguridad electrónica</span> <br />
              para empresas y hogares
            </h1>

            {/* Subtitle */}
            <p className="font-inter text-sm sm:text-base text-gray-300/90 max-w-xl leading-relaxed">
              Somos una empresa colombiana especializada en el diseño, suministro e implementación de soluciones integrales en seguridad electrónica y tecnología aplicada.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-3.5 pt-1 w-full sm:w-auto">
              <Link 
                to="/productos"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-white text-slate-900 hover:bg-gray-100 font-montserrat font-bold text-sm shadow-md transition-[transform,background-color] duration-200 hover:-translate-y-0.5"
              >
                <span className="material-symbols-outlined text-lg">storefront</span>
                <span>Ver catálogo de productos</span>
                <span className="material-symbols-outlined text-base">arrow_forward</span>
              </Link>
              <Link 
                to="/contacto"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-white/5 hover:bg-white/10 text-white border border-white/20 hover:border-white/40 font-montserrat font-semibold text-sm backdrop-blur-md transition-colors duration-200"
              >
                <span className="material-symbols-outlined text-lg">engineering</span>
                <span>Solicitar asesoría técnica</span>
                <span className="material-symbols-outlined text-base">arrow_forward</span>
              </Link>
            </div>

            {/* Credentials / Location Badges */}
            <div className="flex flex-col gap-2 pt-2 text-gray-300 text-xs font-medium">
              <div className="flex items-center gap-2">
                <span className="material-symbols-outlined text-emerald-400 text-base">verified</span>
                <span>{COMPANY_INFO.legalName}</span>
                <span className="text-gray-500">•</span>
              </div>
              <div className="flex items-center gap-2 text-gray-400">
                <span className="material-symbols-outlined text-emerald-400 text-base">location_on</span>
                <span>{COMPANY_INFO.address}, {COMPANY_INFO.city}</span>
              </div>
            </div>
          </motion.div>

          {/* Telemetry Visual / Neon Glow Frame Preview */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="lg:col-span-5 flex flex-col gap-4"
          >
            {/* Minimalist Image Banner */}
            <div className="relative rounded-[2rem] overflow-hidden shadow-[0_20px_60px_rgba(0,135,68,0.18)] border border-slate-100 group w-full">
              <img 
                src="/banners/banner.webp" 
                alt="Soluciones de Seguridad y Tecnología SOLTECOM" 
                className="w-full aspect-[4/3] sm:aspect-video lg:aspect-[4/3] object-cover object-center group-hover:scale-[1.03] transition-transform duration-700 ease-out"
              />
              {/* Subtle overlay to enhance image depth */}
              <div className="absolute inset-0 bg-gradient-to-tr from-black/10 via-transparent to-black/5 pointer-events-none" />
            </div>
          </motion.div>
        </div>

        {/* Hero Metrics Bar with Magnification & Sibling Blur */}
        <div 
          onMouseLeave={() => setHoveredMetric(null)}
          className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4"
        >
          {[
            {
              icon: 'verified_user',
              value: '100%',
              label: 'Garantía Certificada de Fábrica',
            },
            {
              icon: 'support_agent',
              value: '24/7',
              label: 'Supervisión & Monitoreo Remoto',
            },
            {
              icon: 'hub',
              value: '+8 Líneas',
              label: 'Especialidades Integradas en un Proveedor',
            },
            {
              icon: 'public',
              value: 'Nacional',
              label: 'Cobertura e Instalación en Colombia',
            },
          ].map((metric, idx) => {
            const isHovered = hoveredMetric === idx;
            const isOtherHovered = hoveredMetric !== null && !isHovered;

            return (
              <div
                key={metric.value}
                role="button"
                tabIndex={0}
                aria-pressed={isHovered}
                onMouseEnter={() => setHoveredMetric(idx)}
                onClick={() => setHoveredMetric(isHovered ? null : idx)}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    setHoveredMetric(isHovered ? null : idx);
                  }
                }}
                className={`flex items-center gap-3.5 p-4 rounded-2xl bg-white/5 border backdrop-blur-md transition-all duration-300 ease-out cursor-pointer select-none ${
                  isHovered
                    ? 'scale-105 z-20 border-white/40 bg-white/10 shadow-lg'
                    : isOtherHovered
                    ? 'blur-[2px] opacity-50 scale-95 border-white/5'
                    : 'border-white/10 hover:border-white/20'
                }`}
              >
                <div className={`w-12 h-12 rounded-xl flex items-center justify-center shrink-0 transition-colors ${
                  isHovered
                    ? 'bg-white text-slate-900 shadow-md'
                    : 'bg-white/10 text-white border border-white/20'
                }`}>
                  <span className="material-symbols-outlined text-2xl">{metric.icon}</span>
                </div>
                <div className="flex flex-col">
                  <span className="font-montserrat font-bold text-xl text-white">
                    {metric.value}
                  </span>
                  <span className="text-xs text-gray-300 font-medium leading-tight mt-0.5">
                    {metric.label}
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
