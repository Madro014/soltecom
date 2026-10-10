import React from 'react';
import { m as motion } from 'framer-motion';
import MorphSlider from './animations/MorphSlider';
import Grainient from './animations/Grainient';

interface ServiceItem {
  icon: string;
  badge: string;
  title: string;
  desc: string;
  points: string[];
  span?: string;
  extraMeta?: string;
}

const SERVICES: ServiceItem[] = [
  {
    icon: 'videocam',
    badge: 'Tiandy 4K Starlight',
    title: 'Sistemas de Videovigilancia (CCTV IP)',
    desc: 'Implementamos soluciones de monitoreo con cámaras de alta definición, acceso remoto y grabación continua que permiten supervisar en tiempo real y mantener evidencia segura de cada evento.',
    points: [
      'Cámaras Bullet, Domo y PTZ con visión nocturna a color Super Starlight',
      'Inteligencia Artificial: detección de rostros, cruce de línea e intrusión',
      'Compresión eficiente H.265+ (ahorro de hasta 80% de ancho de banda y disco)',
      'Visualización remota multiplataforma con la App EasyLive Plus'
    ]
  },
  {
    icon: 'badge',
    badge: 'ZKTeco Biometría',
    title: 'Control de Acceso Peatonal & Vehicular',
    desc: 'Desarrollamos sistemas inteligentes para la gestión de ingreso de personas y vehículos mediante tecnologías biométricas, tarjetas y lectores electrónicos, asegurando trazabilidad y control total.',
    points: [
      'Reconocimiento facial sin contacto, huella dactilar y tarjetas de proximidad RFID',
      'Torniquetes trípode, flap barriers y electroimanes de alta retención',
      'Apertura móvil mediante Bluetooth o App y cerraduras electrónicas',
      'Reconocimiento de placas vehiculares (LPR) con listas blancas y negras'
    ]
  },
  {
    icon: 'phone_in_talk',
    badge: 'Akuvox SIP & Hikvision',
    title: 'Video Portería y Citofonía',
    desc: 'Instalamos sistemas de comunicación avanzada que permiten identificar, validar y autorizar accesos de forma segura en residencias, conjuntos y empresas.',
    points: [
      'Video en alta definición con comunicación bidireccional y cancelación de eco',
      'Acceso remoto desde móvil: responde la puerta desde tu smartphone con App SmartPlus',
      'Frentes de calle de aleación de zinc antivandálicos con pantalla táctil',
      'Integración con cámaras CCTV IP y monitores interiores de 7 y 10 pulgadas'
    ]
  },
  {
    icon: 'notifications_active',
    badge: 'Intelbras Protección',
    title: 'Sistemas de Alarmas Monitoreadas',
    desc: 'Ofrecemos soluciones de detección de intrusión con sensores especializados, alertas inmediatas y opciones de monitoreo, reduciendo riesgos y aumentando la capacidad de respuesta.',
    points: [
      'Comunicación avanzada: Wi-Fi, Ethernet, GPRS y 4G LTE',
      'Sensores de movimiento con tecnología PET (inmunes a falsas alarmas)',
      'Protección perimetral con barreras infrarrojas activas y cercas eléctricas',
      'Control total desde el móvil a través de la App AMT Remoto'
    ]
  },
  {
    icon: 'local_fire_department',
    badge: 'Normativa NTC & NFPA',
    title: 'Sistemas de Detección & Alarma Contra Incendio',
    desc: 'Implementamos sistemas que permiten la detección temprana de humo o calor, protegiendo vidas, activos e infraestructura ante situaciones de emergencia.',
    points: [
      'Sensores ópticos de humo, térmicos y multicriterio de respuesta temprana',
      'Centrales de incendio convencionales y direccionables con reporte exacto',
      'Sirenas estroboscópicas sonoras y estaciones manuales de palanca',
      'Cumplimiento de normas NTC, NFPA y requerimientos del cuerpo de bomberos'
    ]
  },
  {
    icon: 'garage_home',
    badge: 'PPA & Garen Inverter',
    title: 'Automatización de Accesos Vehiculares',
    desc: 'Suministramos e instalamos motores y sistemas automatizados para portones y accesos vehiculares, optimizando la movilidad, seguridad y control en entradas y salidas.',
    points: [
      'Motores corredizos con tecnología Inverter JetFlex (apertura rápida de 4 segundos)',
      'Motores batientes de 1 o 2 hojas para uso continuo industrial y residencial',
      'Barreras vehiculares de alto tránsito para parqueaderos y peajes',
      'Sistemas antiaplastamiento con fotoceldas y telemandos de largo alcance'
    ]
  },
  {
    icon: 'hub',
    badge: 'Ruijie, TP-Link, Ubiquiti',
    title: 'Equipos de Conectividad para Redes',
    desc: 'Ofrecemos soluciones de conectividad de alto desempeño para garantizar redes estables, seguras y escalables en entornos industriales, empresariales y residenciales.',
    span: 'lg:col-span-2 xl:col-span-2',
    extraMeta: 'Wi-Fi 6 • VLAN • QoS • Ruijie Cloud',
    points: [
      'Puntos de acceso Wi-Fi 5 y 6 de alta densidad para interiores y exteriores',
      'Switches administrables PoE inteligentes capa 2 y 3 con enlaces ópticos SFP',
      'Routers, gateways y firewalls con seguridad perimetral avanzada y VPN',
      'Cableado estructurado Cat 6/6A 100% cobre certificado y fibra óptica'
    ]
  }
];

const SLIDER_ITEMS = [
  { image: '/servicios/venta-de-camaras-de-seguridad.jpg', caption: 'Sistemas de Videovigilancia y CCTV' },
  { image: '/servicios/venta-de-camaras-de-seguridad-en-bogota.jpg', caption: 'Equipos de Control de Acceso' },
  { image: '/servicios/instalacion-de-camaras-de-seguridad.jpg', caption: 'Sistemas de Alarmas y Citofonía' },
  { image: '/servicios/instalacion-de-camaras-de-seguridad-bogota.jpg', caption: 'Automatización de Accesos Vehiculares' }
];

export default function ServicesSection() {
  return (
    <section className="relative w-full bg-white py-16 lg:py-24 overflow-hidden" id="servicios">
      {/* Animated Grainient Background */}
      <div className="absolute inset-0 w-full h-full pointer-events-none opacity-45">
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

      <div className="relative z-10 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto mb-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex flex-col md:flex-row md:items-start justify-between gap-4"
        >
          <div className="flex flex-col gap-1 max-w-2xl">
            <span className="font-montserrat text-xs font-bold uppercase tracking-wider text-primary">
              Portafolio Integral SOLTECOM
            </span>
            <h2 className="font-montserrat font-bold text-2xl sm:text-3xl lg:text-4xl text-surface-dark">
              Nuestros Servicios & Soluciones Técnicas
            </h2>
            <p className="font-inter text-sm sm:text-base text-gray-600 mt-1">
              Explore nuestros servicios y deslice para ver nuestros proyectos destacados.
            </p>
          </div>
          <div className="inline-flex items-center gap-2.5 px-6 py-3 rounded-full bg-white shadow-md border border-gray-100 self-start md:self-auto mt-1 md:mt-0">
            <span className="material-symbols-outlined text-primary text-2xl">verified</span>
            <span className="text-sm font-bold text-gray-800">Marcas Oficiales Homologadas</span>
          </div>
        </motion.div>
      </div>

      {/* Morph Slider Component */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-20 h-[400px] sm:h-[500px]">
        <MorphSlider
          items={SLIDER_ITEMS}
          transition="melt"
          intensity={0.55}
          aberration={0.35}
          drift={0.4}
          autoplay={false}
          overlayColor="#05060a"
          duration={1.1}
          ease="power2.inOut"
          scale={2.4}
          autoplayDelay={4}
          loop
          radius={16}
          showCaptions
          showControls
          showIndicators
        />
      </div>

      {/* Services Grid */}
      <div className="relative z-10 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {SERVICES.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`bg-white rounded-2xl shadow-sm hover:shadow-md border border-gray-100/50 p-6 transition-all duration-300 group ${service.span || ''}`}
            >
              <div className="flex items-start justify-between mb-4">
                <div className="p-3 bg-primary/10 rounded-xl group-hover:bg-primary transition-colors duration-300">
                  <span className="material-symbols-outlined text-primary group-hover:text-white transition-colors text-3xl">
                    {service.icon}
                  </span>
                </div>
                <span className="inline-flex items-center rounded-full bg-blue-50 px-2.5 py-0.5 text-xs font-semibold text-blue-700 ring-1 ring-inset ring-blue-700/10">
                  {service.badge}
                </span>
              </div>
              <h3 className="font-montserrat font-bold text-lg text-gray-900 mb-2">{service.title}</h3>
              <p className="font-inter text-sm text-gray-600 mb-4 line-clamp-3">{service.desc}</p>
              
              <ul className="space-y-2 mt-4">
                {service.points.map((point, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <span className="material-symbols-outlined text-primary text-sm shrink-0 mt-0.5">check_circle</span>
                    <span className="font-inter text-sm text-gray-600">{point}</span>
                  </li>
                ))}
              </ul>

              {service.extraMeta && (
                <div className="mt-6 pt-4 border-t border-gray-100">
                  <span className="font-inter text-xs font-semibold text-gray-500 uppercase tracking-wider">
                    {service.extraMeta}
                  </span>
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
