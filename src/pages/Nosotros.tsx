import React from 'react';
import ScrollExpand from '../components/animations/ScrollExpand';
import BlurText from '../components/animations/BlurText';
import ScrollStack, { ScrollStackItem } from '../components/animations/ScrollStack';
import Grainient from '../components/animations/Grainient';
import Lanyard from '../components/animations/Lanyard';

export default function Nosotros() {
  return (
    <div className="w-full bg-white min-h-screen">
      <ScrollExpand
        src="/banners/BanerNosotros.webp"
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
            timeSpeed={0.4}
            colorBalance={0.0}
            warpStrength={0.6}
            warpFrequency={4.0}
            warpSpeed={1.2}
            warpAmplitude={40.0}
            blendAngle={0.0}
            blendSoftness={0.05}
            rotationAmount={300.0}
            noiseScale={2.0}
            grainAmount={0.06}
            grainScale={2.0}
            grainAnimated={false}
            contrast={1.4}
            gamma={1.0}
            saturation={1.0}
            centerX={0.0}
            centerY={0.0}
            zoom={0.9}
          />
        </div>

        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Blur Text Header */}
          <div className="w-full flex items-center justify-center my-6 md:my-10">
            <BlurText
              text="PRESENTACIÓN CORPORATIVA"
              delay={50}
              animateBy="letters"
              direction="bottom"
              className="font-lora font-bold text-3xl sm:text-4xl md:text-5xl text-white drop-shadow-md text-center [&>span:nth-child(n+14)]:text-[#22c55e]"
            />
          </div>

  

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

      {/* Lanyard - Gerente Comercial */}
      <section className="relative w-full py-16 md:py-24 bg-[#030914] overflow-hidden flex flex-col items-center">
        {/* Spotlight background effect */}
        <div className="absolute inset-0 w-full h-full pointer-events-none">
          <div className="absolute top-[-10%] left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-emerald-500/20 rounded-full blur-[120px]"></div>
          <div className="absolute top-[30%] left-1/2 -translate-x-1/2 w-[400px] h-[400px] bg-white/5 rounded-full blur-[100px]"></div>
        </div>

        <h2 className="relative z-10 text-3xl md:text-5xl font-black font-montserrat mb-6 text-center drop-shadow-lg tracking-tight">
          <span className="text-white">Gerente </span>
          <span className="text-[#22c55e]">Comercial</span>
        </h2>
        
        <div style={{ width: '100%', height: '600px' }} className="relative z-10 max-w-4xl mx-auto flex justify-center">
          <Lanyard 
            frontImage="/icons/GerenteComercial.webp" 
            backImage="/icons/GerenteComercial.webp"
            imageFit="cover"
            cardColor="#ffffff"
            orientation="portrait"
            finish="glossy"
            cornerRadius={0.3}
            size={0.65}
            anchor="center"
            strapLength={0.5}
            strapColor="#008744"
            strapWidth={0.65}
            metal="silver"
            gravity={1}
            damping={0.5}
            elasticity={0.5}
            breeze={0.5}
            interactive
            intro
          />
        </div>
      </section>
    </div>
  );
}
