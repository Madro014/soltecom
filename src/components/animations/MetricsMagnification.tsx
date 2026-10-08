import React, { useState } from 'react';
import { m as motion } from 'framer-motion';

interface MetricItem {
  number: string;
  unit?: string;
  label: string;
  sublabel: string;
  icon: string;
  accentColor?: string;
}

const DEFAULT_METRICS: MetricItem[] = [
  {
    number: '+15',
    unit: 'Años',
    label: 'Trayectoria & Experiencia',
    sublabel: 'Liderando proyectos de seguridad y telecomunicaciones en Colombia.',
    icon: 'military_tech',
  },
  {
    number: '+500',
    unit: 'Proyectos',
    label: 'Instalaciones Ejecutadas',
    sublabel: 'Soluciones integrales para industria, comercio y copropiedades.',
    icon: 'domain_verification',
  },
  {
    number: '99.98%',
    label: 'Fiabilidad Operativa',
    sublabel: 'Continuidad de transmisión y analíticas de inteligencia artificial.',
    icon: 'health_and_safety',
  },
  {
    number: '100%',
    label: 'Marcas Homologadas',
    sublabel: 'Equipos originales con garantía legal y certificación de fábrica.',
    icon: 'verified',
  },
  {
    number: '24/7',
    label: 'Soporte e Intervención',
    sublabel: 'Monitoreo preventivo y atención técnica especializada.',
    icon: 'support_agent',
  },
];

export default function MetricsMagnification({
  metrics = DEFAULT_METRICS,
  title = "Cifras de Respaldo & Solvencia Técnica",
  subtitle = "Pase el cursor sobre cualquier métrica para enfocar y magnificar sus datos clave.",
}: {
  metrics?: MetricItem[];
  title?: string;
  subtitle?: string;
}) {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <div className="w-full py-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto mb-10">
        <span className="font-montserrat text-xs font-bold uppercase tracking-wider text-primary">
          Efecto Magnification • Métricas de Confianza
        </span>
        <h3 className="font-montserrat font-bold text-2xl sm:text-3xl text-surface-dark mt-1">
          {title}
        </h3>
        {subtitle && (
          <p className="font-inter text-xs sm:text-sm text-gray-500 mt-2">
            {subtitle}
          </p>
        )}
      </div>

      {/* Grid of Metrics with Proximity Blur Magnification */}
      <div
        onMouseLeave={() => setHoveredIndex(null)}
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4"
      >
        {metrics.map((item, idx) => {
          const isFocused = hoveredIndex === idx;
          const isDefocused = hoveredIndex !== null && !isFocused;

          return (
            <motion.div
              key={item.label}
              role="button"
              tabIndex={0}
              aria-pressed={isFocused}
              onMouseEnter={() => setHoveredIndex(idx)}
              onClick={() => setHoveredIndex(isFocused ? null : idx)}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  e.preventDefault();
                  setHoveredIndex(isFocused ? null : idx);
                }
              }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.08 }}
              className={`relative rounded-3xl p-6 bg-white border cursor-pointer select-none transition-all duration-300 ease-out flex flex-col justify-between overflow-hidden ${
                isFocused
                  ? 'scale-110 z-20 shadow-2xl border-primary ring-4 ring-primary/15 bg-white'
                  : isDefocused
                  ? 'filter blur-[4px] opacity-35 scale-95 border-gray-100'
                  : 'border-gray-200/80 shadow-sm hover:border-gray-300'
              }`}
            >
              {/* Subtle background glow for focused item */}
              {isFocused && (
                <div className="absolute -top-12 -right-12 w-28 h-28 bg-primary/20 rounded-full blur-2xl pointer-events-none" />
              )}

              {/* Top icon and badge */}
              <div className="flex items-center justify-between mb-4">
                <div
                  className={`w-11 h-11 rounded-2xl flex items-center justify-center transition-colors ${
                    isFocused
                      ? 'bg-primary text-white shadow-lg shadow-primary/30'
                      : 'bg-surface-low text-primary border border-gray-100'
                  }`}
                >
                  <span className="material-symbols-outlined text-2xl">{item.icon}</span>
                </div>
                {isFocused && (
                  <span className="px-2 py-0.5 rounded-full bg-primary/10 text-primary text-[10px] font-bold font-montserrat uppercase tracking-wider animate-pulse">
                    Enfocado
                  </span>
                )}
              </div>

              {/* Numbers */}
              <div>
                <div className="flex items-baseline gap-1.5">
                  <span className="font-montserrat font-extrabold text-3xl sm:text-4xl text-surface-dark tracking-tight">
                    {item.number}
                  </span>
                  {item.unit && (
                    <span className="font-montserrat font-bold text-sm text-primary">
                      {item.unit}
                    </span>
                  )}
                </div>

                <h4 className="font-montserrat font-bold text-xs sm:text-sm text-surface-dark mt-2 leading-snug">
                  {item.label}
                </h4>
                <p className="text-[11px] text-gray-500 mt-1 line-clamp-2 leading-relaxed">
                  {item.sublabel}
                </p>
              </div>

              {/* Bottom decorative bar */}
              <div className="mt-4 pt-3 border-t border-gray-100">
                <div
                  className={`h-1 rounded-full transition-all duration-300 ${
                    isFocused ? 'bg-primary w-full' : 'bg-gray-200 w-8'
                  }`}
                />
              </div>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}
