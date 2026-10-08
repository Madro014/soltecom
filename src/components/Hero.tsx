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
            {/* Pill Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#0a1c2e]/80 border border-emerald-500/30 backdrop-blur-md shadow-sm">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse shadow-[0_0_8px_#34d399]" />
              <span className="font-montserrat text-[11px] font-semibold text-emerald-400 uppercase tracking-widest">
                TECNOLOGÍA • SEGURIDAD • CONFIANZA
              </span>
            </div>

            {/* Main Headline with Emerald Glow Gradient */}
            <h1 className="font-montserrat font-extrabold text-3xl sm:text-4xl lg:text-5xl text-white leading-[1.15] tracking-tight">
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
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-gradient-to-r from-emerald-500 to-emerald-600 hover:from-emerald-400 hover:to-emerald-500 text-white font-montserrat font-bold text-sm shadow-[0_0_20px_rgba(16,185,129,0.35)] transition-[transform,box-shadow] duration-200 hover:-translate-y-0.5"
              >
                <span className="material-symbols-outlined text-lg">storefront</span>
                <span>Ver catálogo de productos</span>
                <span className="material-symbols-outlined text-base">arrow_forward</span>
              </Link>
              <Link 
                to="/contacto"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-[#0b1b2d]/80 hover:bg-[#122842] text-white border border-white/10 hover:border-emerald-500/40 font-montserrat font-semibold text-sm backdrop-blur-md transition-colors duration-200"
              >
                <span className="material-symbols-outlined text-lg text-gray-300">engineering</span>
                <span>Solicitar asesoría técnica</span>
                <span className="material-symbols-outlined text-base text-gray-400">arrow_forward</span>
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
            {/* Outer card with neon cyan/emerald border glow */}
            <div className="relative rounded-2xl bg-[#091524]/90 border border-cyan-500/40 backdrop-blur-2xl p-4 sm:p-5 shadow-[0_0_35px_rgba(6,182,212,0.22)] overflow-hidden">
              
              {/* Header */}
              <div className="flex items-center justify-between pb-3 border-b border-cyan-500/20">
                <div className="flex items-center gap-2">
                  <span className="material-symbols-outlined text-emerald-400 text-lg">terminal</span>
                  <span className="font-montserrat font-bold text-sm text-white tracking-wide">SOLTECOM Live Core™</span>
                </div>
                <div className="flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-emerald-500/10 border border-emerald-500/30">
                  <span className="material-symbols-outlined text-emerald-400 text-xs">wifi_tethering</span>
                  <span className="text-emerald-400 text-[10px] font-bold tracking-wider uppercase">
                    TELEMETRÍA ACTIVA
                  </span>
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping ml-0.5" />
                </div>
              </div>

              {/* Banner Inside with Neon Frame */}
              <div className="relative h-56 sm:h-64 rounded-xl overflow-hidden my-3.5 border border-cyan-500/30 shadow-inner group">
                <img 
                  src="/banners/banner.webp" 
                  alt="Soluciones de Seguridad y Tecnología SOLTECOM" 
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#06101e]/95 via-transparent to-transparent" />
                
                {/* Telemetry bottom badge */}
                <div className="absolute bottom-2.5 left-3 right-3 flex items-center justify-between text-white text-[11px] font-mono">
                  <div className="flex items-center gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse shadow-[0_0_6px_#34d399]" />
                    <span className="tracking-wider text-gray-200 font-semibold">CCTV 4K TIANDY: 1,480 FPS OK</span>
                  </div>
                  <div className="flex items-center gap-1 text-emerald-400 font-bold">
                    <span className="text-gray-400">|</span>
                    <span>LATENCIA: 12ms</span>
                  </div>
                </div>
              </div>

              {/* Sub-cards */}
              <div className="grid grid-cols-2 gap-2.5">
                <div className="p-3 rounded-xl bg-[#0c1c2e]/90 border border-cyan-500/20 flex flex-col justify-between">
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] text-gray-400 uppercase tracking-wider font-semibold">TORNIQUETES BIOMETRÍA</span>
                  </div>
                  <div className="flex items-baseline justify-between mt-1">
                    <span className="font-montserrat font-bold text-lg text-white">99.98%</span>
                    <span className="material-symbols-outlined text-emerald-400 text-lg">fingerprint</span>
                  </div>
                  <div className="flex items-center justify-between mt-0.5">
                    <span className="text-[11px] text-emerald-400 font-medium">ZKTeco BioAccess</span>
                    <span className="material-symbols-outlined text-emerald-400 text-sm">trending_up</span>
                  </div>
                </div>

                <div className="p-3 rounded-xl bg-[#0c1c2e]/90 border border-cyan-500/20 flex flex-col justify-between">
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] text-gray-400 uppercase tracking-wider font-semibold">PORTÓN INVERTER</span>
                  </div>
                  <div className="flex items-baseline justify-between mt-1">
                    <span className="font-montserrat font-bold text-lg text-white">4s JetFlex</span>
                    <span className="material-symbols-outlined text-emerald-400 text-lg">lock</span>
                  </div>
                  <div className="flex items-center justify-between mt-0.5">
                    <span className="text-[11px] text-emerald-400 font-medium">PPA / Garen Inverter</span>
                  </div>
                </div>
              </div>
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
              textColor: 'text-white',
            },
            {
              icon: 'support_agent',
              value: '24/7',
              label: 'Supervisión & Monitoreo Remoto',
              textColor: 'text-white',
            },
            {
              icon: 'hub',
              value: '+8 Líneas',
              label: 'Especialidades Integradas en un Proveedor',
              textColor: 'text-emerald-400',
            },
            {
              icon: 'public',
              value: 'Nacional',
              label: 'Cobertura e Instalación en Colombia',
              textColor: 'text-emerald-400',
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
                className={`flex items-center gap-3.5 p-4 rounded-2xl bg-[#0a1829]/80 border backdrop-blur-xl transition-all duration-300 ease-out cursor-pointer select-none ${
                  isHovered
                    ? 'scale-105 z-20 border-emerald-400 shadow-[0_0_25px_rgba(16,185,129,0.35)] bg-[#0d223a]'
                    : isOtherHovered
                    ? 'blur-[3px] opacity-40 scale-95 border-cyan-500/10'
                    : 'border-cyan-500/30 hover:border-emerald-400/50 shadow-[0_0_15px_rgba(6,182,212,0.1)]'
                }`}
              >
                <div className={`w-12 h-12 rounded-xl flex items-center justify-center shrink-0 transition-colors ${
                  isHovered
                    ? 'bg-emerald-500/20 border border-emerald-400 text-emerald-300 shadow-[0_0_15px_rgba(16,185,129,0.4)]'
                    : 'bg-emerald-500/10 border border-emerald-400/40 text-emerald-400 shadow-[0_0_10px_rgba(16,185,129,0.2)]'
                }`}>
                  <span className="material-symbols-outlined text-2xl">{metric.icon}</span>
                </div>
                <div className="flex flex-col">
                  <span className={`font-montserrat font-bold text-xl transition-colors ${metric.textColor}`}>
                    {metric.value}
                  </span>
                  <span className="text-xs text-gray-300 font-medium">
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
