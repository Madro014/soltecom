import React from 'react';
import ScrollExpand from '../components/animations/ScrollExpand';
import ParticleText from '../components/animations/ParticleText';
import ScrollStack, { ScrollStackItem } from '../components/animations/ScrollStack';
import Grainient from '../components/animations/Grainient';

export default function Nosotros() {
  return (
    <div className="w-full bg-white min-h-screen">
      <ScrollExpand
        src="/banners/BanerNosotros.png"
        title={
          <div className="flex items-center justify-center gap-2 sm:gap-2.5 max-w-full px-2 sm:px-4 select-none drop-shadow-[0_2px_12px_rgba(0,0,0,0.85)]">
            <span className="font-montserrat font-black text-xl sm:text-3xl md:text-4xl lg:text-[2.6rem] text-white tracking-tight">
              Sobre
            </span>
            <span className="font-montserrat font-black text-xl sm:text-3xl md:text-4xl lg:text-[2.6rem] text-[#22c55e] tracking-tight">
              SOLTECOM
            </span>
          </div>
        }
        scrollHint={<span className="text-gray-500 font-semibold tracking-wide">Haz scroll hacia abajo</span>}
        useWindowScroll
        mediaZoom={1.15}
        overlayScrim={0.2}
      >
        <h2 className="text-3xl md:text-5xl font-black font-montserrat text-white mb-4 drop-shadow-[0_2px_12px_rgba(0,0,0,0.85)]">
          La Diferencia <span className="text-[#22c55e]">SOLTECOM</span>
        </h2>
        <p className="text-white max-w-2xl mx-auto text-sm md:text-lg font-bold leading-relaxed drop-shadow-[0_1px_8px_rgba(0,0,0,0.8)]">
          Soluciones Tecnológicas y Comerciales LD SAS. Más de 15 años integrando sistemas de seguridad perimetral, infraestructura de telecomunicaciones y analítica para empresas en Colombia.
        </p>
      </ScrollExpand>

      {/* 2. Sección: Presentación Corporativa con fondo Grainient */}
      <section className="relative w-full py-20 lg:py-28 overflow-clip bg-slate-900">
        {/* Animated Grainient Background */}
        <div className="absolute inset-0 w-full h-full pointer-events-none opacity-45 overflow-hidden">
          <Grainient
            color1="#008744"
            color2="#ffffff"
            color3="#14325b"
            timeSpeed={0.8}
            colorBalance={0.0}
            warpStrength={1.0}
            warpFrequency={5.0}
            warpSpeed={2.5}
            warpAmplitude={50.0}
            blendAngle={0.0}
            blendSoftness={0.05}
            rotationAmount={500.0}
            noiseScale={2.0}
            grainAmount={0.08}
            grainScale={2.0}
            grainAnimated={true}
            contrast={1.5}
            gamma={1.0}
            saturation={1.0}
            centerX={0.0}
            centerY={0.0}
            zoom={0.9}
          />
        </div>

        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Particle Text Header */}
          <div className="w-full h-36 sm:h-44 md:h-52 relative flex items-center justify-center">
            <ParticleText
              text="PRESENTACIÓN CORPORATIVA"
              particleSize={2.4}
              density={3.2}
              color="#2563eb"
              highlightColor="#1d4ed8"
              scatter={160}
              gatherDuration={1500}
              stagger={380}
              pointerRepel={45}
              repelRadius={120}
              idleDrift={0.6}
              trigger="inView"
              fontSize="clamp(1.35rem, 4.5vw, 3.4rem)"
              fontWeight={900}
              fontFamily="Montserrat, sans-serif"
              glow={true}
            />
          </div>

          {/* Línea divisoria en gradiente verde a azul */}
          <div className="w-32 h-1.5 bg-gradient-to-r from-primary to-secondary-dark rounded-full mx-auto mb-12 shadow-sm" />

          {/* Contenido Corporativo interactivo en tarjetas apilables (ScrollStack) */}
          <ScrollStack
            itemDistance={90}
            itemStackDistance={24}
          >
            {/* Tarjeta 1 */}
            <ScrollStackItem key="pilar-01-soluciones" itemClassName="bg-white border border-slate-200/90 shadow-[0_15px_40px_rgba(0,135,68,0.08)] flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between gap-4 mb-4">
                  <span className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-emerald-50 text-primary border border-emerald-100">
                    <span className="w-2 h-2 rounded-full bg-primary" />
                    Pilar 01 • Soluciones Integrales
                  </span>
                  <span className="text-3xl font-black text-slate-200 font-montserrat select-none">
                    01
                  </span>
                </div>
                <h3 className="font-montserrat font-bold text-xl sm:text-2xl text-surface-dark mb-3">
                  Diseño, Suministro & Implementación
                </h3>
                <p className="text-gray-700 font-inter text-base sm:text-lg lg:text-xl leading-relaxed">
                  Somos una empresa colombiana especializada en{' '}
                  <strong className="text-primary font-bold">
                    el diseño, suministro e implementación
                  </strong>{' '}
                  de soluciones integrales en seguridad electrónica y tecnología aplicada.
                </p>
              </div>
              <div className="pt-4 border-t border-slate-100 flex items-center gap-2 text-xs font-semibold text-slate-400">
                <span className="material-symbols-outlined text-base text-primary">verified</span>
                <span>Ingeniería certificada y cobertura a nivel nacional</span>
              </div>
            </ScrollStackItem>

            {/* Tarjeta 2 */}
            <ScrollStackItem key="pilar-02-sectores" itemClassName="bg-white border border-slate-200/90 shadow-[0_15px_40px_rgba(15,32,56,0.08)] flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between gap-4 mb-4">
                  <span className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-blue-50 text-secondary-light border border-blue-100">
                    <span className="w-2 h-2 rounded-full bg-secondary-light" />
                    Pilar 02 • Cobertura Multidisciplinaria
                  </span>
                  <span className="text-3xl font-black text-slate-200 font-montserrat select-none">
                    02
                  </span>
                </div>
                <h3 className="font-montserrat font-bold text-xl sm:text-2xl text-surface-dark mb-3">
                  Sectores Público y Privado
                </h3>
                <p className="text-gray-700 font-inter text-base sm:text-lg lg:text-xl leading-relaxed">
                  Nuestra operación está orientada a atender los sectores público y privado, ofreciendo servicios en sistemas de circuito cerrado de televisión (CCTV), control de acceso peatonal y vehicular, automatización, video citofonía, alarmas y redes de comunicación.
                </p>
              </div>
              <div className="pt-4 border-t border-slate-100 flex items-center gap-2 text-xs font-semibold text-slate-400">
                <span className="material-symbols-outlined text-base text-secondary-light">domain</span>
                <span>CCTV • Control de Acceso • Citofonía • Redes y Alarmas</span>
              </div>
            </ScrollStackItem>

            {/* Tarjeta 3 */}
            <ScrollStackItem key="pilar-03-respaldo" itemClassName="bg-white border border-slate-200/90 shadow-[0_15px_40px_rgba(0,135,68,0.08)] flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between gap-4 mb-4">
                  <span className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-emerald-50 text-primary border border-emerald-100">
                    <span className="w-2 h-2 rounded-full bg-primary" />
                    Pilar 03 • Respaldo Tecnológico
                  </span>
                  <span className="text-3xl font-black text-slate-200 font-montserrat select-none">
                    03
                  </span>
                </div>
                <h3 className="font-montserrat font-bold text-xl sm:text-2xl text-surface-dark mb-3">
                  Calidad y Continuidad Operativa
                </h3>
                <p className="text-gray-700 font-inter text-base sm:text-lg lg:text-xl leading-relaxed">
                  Contamos con aliados tecnológicos y equipos de alta calidad que cumplen con estándares del mercado, garantizando{' '}
                  <strong className="text-primary font-bold">
                    confiabilidad, escalabilidad y continuidad operativa
                  </strong>.
                </p>
              </div>
              <div className="pt-4 border-t border-slate-100 flex items-center gap-2 text-xs font-semibold text-slate-400">
                <span className="material-symbols-outlined text-base text-primary">security</span>
                <span>Garantía de equipos homologados y soporte continuo</span>
              </div>
            </ScrollStackItem>
          </ScrollStack>

        </div>
      </section>
    </div>
  );
}
