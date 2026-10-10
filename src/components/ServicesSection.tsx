import React from 'react';
import { m as motion } from 'framer-motion';
import MorphSlider from './animations/MorphSlider';
import DomeGallery from './DomeGallery';
import Grainient from './animations/Grainient';
import BlurText from './animations/BlurText';



const SLIDER_ITEMS = [
  { image: '/servicios/c1.jpeg', caption: 'Instalación de Cámaras de Alta Definición' },
  { image: '/servicios/c2.jpeg', caption: 'Cableado Estructurado y Organización' },
  { image: '/servicios/c3.jpeg', caption: 'Monitoreo Remoto y Control Total' },
  { image: '/servicios/c4.jpeg', caption: 'Seguridad Industrial y Residencial' },
  { image: '/servicios/c5.jpeg', caption: 'Implementación de Sistemas de Red' },
  { image: '/servicios/c6.jpeg', caption: 'Soporte y Mantenimiento Técnico' }
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
    <section className="relative w-full bg-white py-16 lg:py-24 overflow-clip" id="servicios">
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

      <div className="relative z-10 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto mb-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex flex-col md:flex-row md:items-center justify-between gap-6"
        >
          <div className="flex flex-col gap-2 max-w-2xl">

            <div className="w-full flex items-center justify-start my-2">
              <BlurText
                text="Nuestros Servicios & Soluciones Técnicas"
                delay={30}
                animateBy="letters"
                direction="bottom"
                className="font-lora font-bold text-3xl sm:text-4xl md:text-5xl text-surface-dark drop-shadow-sm [&>span:nth-child(n+22)]:text-primary"
              />
            </div>
            <p className="font-inter text-sm sm:text-base text-gray-600 mt-1">
              Explore nuestros servicios, deslice para ver nuestros proyectos destacados y use la burbuja interactiva 3D para navegar.
            </p>
          </div>
          <div className="inline-flex items-center gap-2.5 px-6 py-3 rounded-full bg-white shadow-md border border-gray-100 self-start md:self-auto mt-1 md:mt-0">
            <span className="material-symbols-outlined text-primary text-2xl">verified</span>
            <span className="text-sm font-bold text-gray-800">Marcas Oficiales Homologadas</span>
          </div>
        </motion.div>
      </div>

      {/* Dome Gallery Foreground */}
      <div className="relative z-10 w-full h-[500px] sm:h-[600px] lg:h-[700px] mb-24">
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

      <div className="relative z-10 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto mb-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >

          <div className="w-full flex items-center justify-center">
            <BlurText
              text="Galería de Proyectos"
              delay={30}
              animateBy="letters"
              direction="bottom"
              className="font-lora font-bold text-3xl sm:text-4xl text-surface-dark drop-shadow-sm [&>span:nth-child(n+12)]:text-primary"
            />
          </div>
        </motion.div>
      </div>

      {/* Morph Slider Component */}
      <div className="relative z-10 w-full max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 mb-20">
        <div className="w-full h-full aspect-video min-h-[300px] sm:min-h-[400px] rounded-2xl overflow-hidden shadow-[0_20px_60px_-15px_rgba(0,0,0,0.5)]">
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
            radius={0}
            showCaptions
            showControls
            showIndicators
          />
        </div>
      </div>



      {/* Organic Content Videos */}
      <div className="relative z-10 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto mt-24 mb-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-3xl mx-auto mb-12"
        >
       
          <div className="w-full flex items-center justify-center">
            <BlurText
              text="Nuestra Experiencia en Acción"
              delay={30}
              animateBy="letters"
              direction="bottom"
              className="font-lora font-bold text-3xl sm:text-4xl text-surface-dark drop-shadow-sm [&>span:nth-child(n+24)]:text-primary"
            />
          </div>
          <p className="font-inter text-sm sm:text-base text-gray-600 mt-4">
            Resultados reales, instalaciones limpias y profesionales que garantizan tu seguridad al máximo nivel.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {['1video.mp4', '2video.mp4', '3video.mp4', '4video.mp4'].map((vid, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="relative rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-shadow aspect-[9/16] bg-gray-900 group"
            >
              <video
                src={`/servicios/${vid}`}
                className="w-full h-full object-cover opacity-90 group-hover:opacity-100 transition-opacity"
                autoPlay
                muted
                loop
                playsInline
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent pointer-events-none" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
