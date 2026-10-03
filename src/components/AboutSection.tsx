import React from 'react';
import { m as motion } from 'framer-motion';
import { COMPANY_INFO } from '../data/company';
import StarBorder from './animations/StarBorder';
import SplitText from './animations/SplitText';
import Magnet from './animations/Magnet';
import TiltCard from './animations/TiltCard';

export default function AboutSection() {
  return (
    <section className="w-full bg-white py-20 lg:py-32" id="nosotros">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Presentation */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center mb-24">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="lg:col-span-5 relative"
          >
            <StarBorder color="#00C19C" speed="8s" className="w-full">
              <div className="relative rounded-[18px] overflow-hidden">
                <img 
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuD5htaMdDRUn_Qs5QFVY3nzy99WQbhSeKGgQLsP3CCyHXq3tCQu1sob8S4SCHyovMHxOGlXI5hFT9uhSAEecBjDrd3gPR41m1lrJsod6iMFS_TDNaqR_jsSk1A964Fbal29UtTNEKZR3gddNQ5IZyEdMPCo52NMZJNQAWUoXVPv6omYBsN0uBANvGPMWxcnRXWkIpwC3-hvyDGi8KM0UVNeFnDQ875x08xn4E6vJdJ7iPu_-MUqkK5Img" 
                  alt="Infraestructura y Data Center SOLTECOM" 
                  className="w-full h-[500px] object-cover hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-secondary-darker/95 via-secondary-darker/20 to-transparent" />
                <div className="absolute bottom-6 left-6 right-6 p-5 rounded-xl bg-white/95 backdrop-blur-xl shadow-2xl border border-gray-100">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-xl bg-primary text-white flex items-center justify-center shrink-0 shadow-lg shadow-primary/30">
                      <span className="material-symbols-outlined text-2xl">verified</span>
                    </div>
                    <div>
                      <h4 className="font-montserrat font-bold text-base text-surface-dark">{COMPANY_INFO.legalName}</h4>
                      <p className="text-sm text-gray-600">{COMPANY_INFO.address}, {COMPANY_INFO.city}</p>
                    </div>
                  </div>
                </div>
              </div>
            </StarBorder>

            {/* Overlapping Badge */}
            <motion.div 
              initial={{ scale: 0, rotate: -10 }}
              whileInView={{ scale: 1, rotate: 0 }}
              transition={{ delay: 0.5, type: "spring", stiffness: 200, damping: 15 }}
              className="hidden sm:flex absolute -top-6 -right-6 px-5 py-4 rounded-2xl bg-secondary-darker text-white shadow-2xl items-center gap-3 border border-white/10"
            >
              <div className="bg-primary/20 p-2 rounded-lg text-primary-fixed">
                <span className="material-symbols-outlined text-2xl">handshake</span>
              </div>
              <div className="flex flex-col">
                <span className="text-[10px] uppercase font-bold tracking-widest text-gray-400">Compromiso</span>
                <span className="font-montserrat font-bold text-sm text-white">Garantía Real</span>
              </div>
            </motion.div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="lg:col-span-7 flex flex-col gap-6"
          >
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 text-primary text-xs font-bold font-montserrat uppercase tracking-widest self-start border border-primary/20">
              <span>Presentación Corporativa</span>
            </div>
            
            <h2 className="font-montserrat font-bold text-3xl sm:text-4xl lg:text-5xl text-surface-dark leading-tight flex flex-wrap gap-x-3">
              <SplitText text={COMPANY_INFO.name} delay={0.05} className="text-primary" />
              <span className="text-gray-300">—</span>
              <SplitText text={COMPANY_INFO.slogan} delay={0.02} />
            </h2>
            
            <p className="font-inter text-base sm:text-lg text-gray-600 leading-relaxed">
              {COMPANY_INFO.presentation}
            </p>

            {/* 5 Pillars from PDF */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
              {COMPANY_INFO.pillars.map((pil, idx) => (
                <motion.div 
                  key={pil.title} 
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 + (idx * 0.1) }}
                  className="p-5 rounded-2xl bg-surface-low border border-gray-100 flex flex-col gap-2 shadow-sm hover:shadow-md transition-shadow group"
                >
                  <span className="font-montserrat font-bold text-sm text-surface-dark flex items-center gap-3">
                    <span className="w-8 h-8 rounded-lg bg-primary/10 text-primary flex items-center justify-center group-hover:bg-primary group-hover:text-white transition-colors">
                      <span className="material-symbols-outlined text-[18px]">verified_user</span>
                    </span>
                    <span>{pil.title}</span>
                  </span>
                  <p className="text-xs text-gray-600 leading-relaxed">{pil.desc}</p>
                </motion.div>
              ))}
            </div>

            {/* Official brands supported */}
            <div className="pt-8 flex flex-wrap items-center gap-4 sm:gap-6 border-t border-gray-100 mt-4">
              <span className="text-xs uppercase font-bold text-gray-400 w-full sm:w-auto mb-2 sm:mb-0">Marcas Homologadas:</span>
              {['TIANDY', 'ZKTECO', 'INTELBRAS', 'PPA', 'GAREN', 'AKUVOX', 'RUIJIE'].map((brand) => (
                <Magnet key={brand} padding={50}>
                  <span className="px-4 py-2 rounded-lg bg-surface-low border border-gray-100 font-montserrat font-bold text-sm tracking-wider text-gray-700 cursor-pointer hover:bg-primary hover:text-white hover:border-primary transition-colors shadow-sm">
                    {brand}
                  </span>
                </Magnet>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Sectores de Aplicación */}
        <div className="bg-surface-low rounded-3xl p-8 sm:p-12 border border-gray-100 mb-16 relative overflow-hidden">
          <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-primary via-transparent to-transparent" />
          
          <div className="text-center max-w-2xl mx-auto mb-12 relative z-10">
            <span className="text-xs font-bold text-primary uppercase tracking-widest font-montserrat">
              Ámbitos de Implementación
            </span>
            <h3 className="font-montserrat font-bold text-3xl sm:text-4xl text-surface-dark mt-2">
              <SplitText text="Sectores & Aplicaciones" delay={0.05} />
            </h3>
            <p className="font-inter text-sm sm:text-base text-gray-600 mt-4 leading-relaxed">
              Adaptamos cada solución a los requerimientos normativos y operativos de cada sector.
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 relative z-10" style={{ perspective: 1000 }}>
            {COMPANY_INFO.applications.map((app, i) => (
              <motion.div
                key={app.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: i * 0.05 }}
              >
                <TiltCard className="h-full bg-white group cursor-default overflow-hidden border-gray-200/60 shadow-lg hover:shadow-xl transition-shadow">
                  <div className="flex flex-col items-center text-center gap-4 relative z-10">
                    <div className="w-16 h-16 rounded-2xl bg-primary/10 text-primary flex items-center justify-center shrink-0 group-hover:bg-primary group-hover:text-white transition-[background-color,color,transform] duration-300 transform group-hover:-translate-y-2">
                      <span className="material-symbols-outlined text-3xl">{app.icon}</span>
                    </div>
                    <span className="font-montserrat font-semibold text-sm text-gray-800">
                      {app.name}
                    </span>
                  </div>
                </TiltCard>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Ventajas Competitivas Oficiales */}
        <div>
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs font-bold text-primary uppercase tracking-widest font-montserrat">
              Por qué elegirnos
            </span>
            <h3 className="font-montserrat font-bold text-3xl sm:text-4xl text-surface-dark mt-2">
              <SplitText text="Ventajas Competitivas SOLTECOM" delay={0.05} />
            </h3>
            <p className="font-inter text-sm sm:text-base text-gray-600 mt-4 leading-relaxed">
              En Soltecom nos diferenciamos por ofrecer soluciones integrales en seguridad electrónica respaldadas por tecnología, experiencia y atención personalizada.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {COMPANY_INFO.competitiveAdvantages.map((adv, i) => (
              <motion.div
                key={adv.title}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="relative"
              >
                <div className="absolute inset-0 bg-primary/5 rounded-3xl transform translate-x-2 translate-y-2" />
                <div className="relative p-8 rounded-3xl bg-white border border-gray-100 shadow-xl flex flex-col gap-4 h-full hover:-translate-y-2 transition-transform duration-300">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                    <span className="material-symbols-outlined text-primary text-2xl">workspace_premium</span>
                  </div>
                  <h4 className="font-montserrat font-bold text-base text-surface-dark">
                    {adv.title}
                  </h4>
                  <p className="text-sm text-gray-600 leading-relaxed font-inter">
                    {adv.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Closing Highlight */}
        <div className="text-center max-w-4xl mx-auto pt-24 pb-12">
          <StarBorder color="#00C19C" speed="5s" className="w-full">
            <div className="p-8 sm:p-12">
              <h3 className="font-montserrat font-bold text-2xl sm:text-3xl text-surface-dark mb-6">
                La Diferencia SOLTECOM
              </h3>
              <p className="font-inter text-gray-600 text-base sm:text-xl leading-relaxed">
                No solo vendemos equipos; diseñamos infraestructuras tecnológicas robustas con garantía real y soporte técnico especializado, asegurando que tu inversión esté siempre protegida.
              </p>
            </div>
          </StarBorder>
        </div>

      </div>
    </section>
  );
}
