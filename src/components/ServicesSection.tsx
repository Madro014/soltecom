import React from 'react';
import { Link } from 'react-router-dom';
import { m as motion } from 'framer-motion';
import DomeGallery from './DomeGallery';
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

/* Images from different service categories for the 3D dome */
const DOME_IMAGES = [
  { 
    src: '/icons/icon_1.svg', alt: 'CCTV',
    title: 'Sistemas de Videovigilancia (CCTV)',
    desc: 'Implementamos soluciones de monitoreo con cámaras de alta definición, acceso remoto y grabación continua, que permiten supervisar en tiempo real y mantener evidencia segura de cada evento.',
    color: '#008744'
  },
  { 
    src: '/icons/icon_2.svg', alt: 'Control de Acceso',
    title: 'Control de Acceso',
    desc: 'Desarrollamos sistemas inteligentes para la gestión de ingreso de personas y vehículos mediante tecnologías biométricas, tarjetas y lectores electrónicos, asegurando trazabilidad y control total.',
    color: '#003366'
  },
  { 
    src: '/icons/icon_3.svg', alt: 'Citofonía',
    title: 'Video Portería y Citofonía',
    desc: 'Instalamos sistemas de comunicación avanzada que permiten identificar, validar y autorizar accesos de forma segura en residencias, conjuntos y empresas.',
    color: '#008744'
  },
  { 
    src: '/icons/icon_4.svg', alt: 'Alarmas',
    title: 'Sistemas de Alarmas',
    desc: 'Ofrecemos soluciones de detección de intrusión con sensores especializados, alertas inmediatas y opciones de monitoreo, reduciendo riesgos y aumentando la capacidad de respuesta.',
    color: '#003366'
  },
  { 
    src: '/icons/icon_5.svg', alt: 'Incendio',
    title: 'Sistemas de Detección y Alarma Contra Incendio',
    desc: 'Implementamos sistemas que permiten la detección temprana de humo o calor, protegiendo vidas, activos e infraestructura ante situaciones de emergencia.',
    color: '#008744'
  },
  { 
    src: '/icons/icon_6.svg', alt: 'Automatización',
    title: 'Automatización de Accesos Vehiculares',
    desc: 'Suministramos e instalamos motores y sistemas automatizados para portones y accesos vehiculares, optimizando la movilidad, seguridad y control en entradas y salidas.',
    color: '#003366'
  },
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
              Explore nuestros servicios, con borbuja interactiva 3D — arrastre y dele clik para navegar.
            </p>
          </div>
          <div className="inline-flex items-center gap-2.5 px-6 py-3 rounded-full bg-white shadow-md border border-gray-100 self-start md:self-auto mt-1 md:mt-0">
            <span className="material-symbols-outlined text-primary text-2xl">verified</span>
            <span className="text-sm font-bold text-gray-800">Marcas Oficiales Homologadas</span>
          </div>
        </motion.div>
      </div>

      {/* Dome Gallery Foreground */}
      <div className="relative z-10 w-full h-[500px] sm:h-[600px] lg:h-[700px]">
        <DomeGallery
          images={DOME_IMAGES}
          fit={0.8}
          minRadius={600}
          maxVerticalRotationDeg={0}
          segments={34}
          dragDampening={2}
          grayscale={false}
          overlayBlurColor="transparent"
          imageBorderRadius="16px"
          openedImageBorderRadius="20px"
          openedImageWidth="800px"
          openedImageHeight="320px"
        />
      </div>
    </section>
  );
}
