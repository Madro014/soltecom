import React, { useState, useRef, useEffect, useCallback } from 'react';
import { m as motion } from 'framer-motion';
import MorphSlider from './animations/MorphSlider';
import DomeGallery from './DomeGallery';
import Grainient from './animations/Grainient';
import BlurText from './animations/BlurText';

const SLIDER_ITEMS = [
  { image: '/servicios/1.webp', caption: 'Montaje de Placas y Soportería Estructurada' },
  { image: '/servicios/2.webp', caption: 'Control de Acceso Biométrico y Teclado' },
  { image: '/servicios/3.webp', caption: 'Canalización y Acabados Estéticos Limpios' },
  { image: '/servicios/4.webp', caption: 'Implementación Profesional en Campo' },
  { image: '/servicios/c1.webp', caption: 'Instalación de Cámaras de Alta Definición' },
  { image: '/servicios/c2.webp', caption: 'Cableado Estructurado y Organización' },
  { image: '/servicios/c3.webp', caption: 'Monitoreo Remoto y Control Total' },
  { image: '/servicios/c4.webp', caption: 'Seguridad Industrial y Residencial' },
  { image: '/servicios/c5.webp', caption: 'Implementación de Sistemas de Red' },
  { image: '/servicios/c6.webp', caption: 'Soporte y Mantenimiento Técnico' }
];

const EXPERIENCE_VIDEOS = [
  { vid: '1video.mp4', title: 'Montaje de Acceso y Estructura', tag: '01' },
  { vid: '2video.mp4', title: 'CCTV y Videovigilancia', tag: '02' },
  { vid: '3video.mp4', title: 'Control Peatonal y Electromecánico', tag: '03' },
  { vid: '4video.mp4', title: 'Cableado y Conectividad', tag: '04' },
  { vid: '5video.mp4', title: 'Pruebas Operativas de Seguridad', tag: '05' },
];

const VideoCard = ({
  vid,
  title,
  tag,
  idx,
  isActive
}: {
  vid: string;
  title: string;
  tag: string;
  idx: number;
  isActive: boolean;
}) => {
  const [isPlaying, setIsPlaying] = useState(true);
  const [isMuted, setIsMuted] = useState(true);
  const videoRef = useRef<HTMLVideoElement>(null);

  const togglePlay = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play().catch(() => {});
      }
      setIsPlaying(!isPlaying);
    }
  };

  const toggleMute = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (videoRef.current) {
      videoRef.current.muted = !isMuted;
      setIsMuted(!isMuted);
    }
  };

  return (
    <div
      className={`relative rounded-2xl overflow-hidden shadow-md hover:shadow-2xl transition-[box-shadow,border-color,transform] duration-300 aspect-[9/15] sm:aspect-[9/16] bg-gray-900 group cursor-pointer select-none w-[74vw] max-w-[275px] sm:w-[280px] md:w-[290px] lg:w-[295px] max-h-[460px] sm:max-h-none shrink-0 border ${
        isActive
          ? 'border-primary ring-2 ring-primary/40 shadow-primary/20 shadow-xl'
          : 'border-gray-200/80 hover:border-gray-300'
      }`}
      onClick={togglePlay}
    >
      <video
        ref={videoRef}
        src={`/servicios/${vid}`}
        className="w-full h-full object-cover opacity-90 group-hover:opacity-100 transition-opacity"
        autoPlay
        muted={isMuted}
        loop
        playsInline
        preload="metadata"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/30 pointer-events-none" />

      {/* Top Header: Tag and Audio Mute Control */}
      <div className="absolute top-3 inset-x-3 flex items-center justify-between z-10">
        <span className="text-[10px] font-bold tracking-wider font-montserrat uppercase px-2.5 py-1 rounded-full bg-black/45 backdrop-blur-md text-white border border-white/15">
          {tag}
        </span>
        <button
          type="button"
          onClick={toggleMute}
          aria-label={isMuted ? "Activar audio" : "Silenciar audio"}
          className="w-7 h-7 rounded-full bg-black/45 backdrop-blur-md text-white border border-white/15 flex items-center justify-center hover:bg-black/70 transition-colors"
        >
          <span className="material-symbols-outlined text-sm">
            {isMuted ? "volume_off" : "volume_up"}
          </span>
        </button>
      </div>

      {/* Center Play/Pause Icon */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none transition-all duration-300">
        <div className={`w-14 h-14 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center border border-white/30 transition-all ${
          isPlaying ? 'opacity-0 scale-90 group-hover:opacity-100 group-hover:scale-100' : 'opacity-100 scale-100 bg-black/40'
        }`}>
          <span className="material-symbols-outlined text-white text-3xl drop-shadow-md">
            {isPlaying ? 'pause' : 'play_arrow'}
          </span>
        </div>
      </div>

      {/* Bottom Title Label */}
      <div className="absolute bottom-3.5 inset-x-3.5 pointer-events-none z-10">
        <p className="text-white text-xs sm:text-sm font-semibold font-montserrat drop-shadow-sm line-clamp-1">
          {title}
        </p>
      </div>
    </div>
  );
};

const ExperienceVideoCarousel = () => {
  const SET_SIZE = EXPERIENCE_VIDEOS.length; // 5
  const TOTAL_SETS = 5;
  const INITIAL_INDEX = SET_SIZE * 2; // Start in middle set (index 10)

  // 5 full sets of the videos for an ultra-smooth infinite wrapping experience
  const loopedVideos = React.useMemo(() => {
    const list = [];
    for (let setIdx = 0; setIdx < TOTAL_SETS; setIdx++) {
      for (let vidIdx = 0; vidIdx < SET_SIZE; vidIdx++) {
        list.push({
          ...EXPERIENCE_VIDEOS[vidIdx],
          uniqueKey: `set-${setIdx}-vid-${vidIdx}-${EXPERIENCE_VIDEOS[vidIdx].vid}`,
          origIndex: vidIdx,
        });
      }
    }
    return list;
  }, [SET_SIZE]);

  const [currentIndex, setCurrentIndex] = useState(INITIAL_INDEX);
  const [isTransitioning, setIsTransitioning] = useState(true);
  const [isHovered, setIsHovered] = useState(false);
  const [isAutoPlayActive, setIsAutoPlayActive] = useState(true);
  const [stepWidth, setStepWidth] = useState(312); // card width (295px) + gap (16px)
  const [containerWidth, setContainerWidth] = useState(0);

  const containerRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const firstCardRef = useRef<HTMLDivElement>(null);
  const touchStartX = useRef<number | null>(null);
  const touchDeltaX = useRef<number>(0);

  // Measure card width, actual gap, and container width for pixel-perfect responsiveness
  const updateDimensions = useCallback(() => {
    if (!firstCardRef.current || !trackRef.current || !containerRef.current) return;
    const cardEl = firstCardRef.current;
    const cardW = cardEl.offsetWidth;
    const contW = containerRef.current.offsetWidth;
    const cards = trackRef.current.children;
    let gap = 16;
    if (cards.length > 1) {
      const nextCard = cards[1] as HTMLElement;
      const measuredGap = nextCard.offsetLeft - (cardEl.offsetLeft + cardW);
      if (measuredGap > 0) gap = measuredGap;
    }
    if (cardW > 0) {
      setStepWidth(cardW + gap);
    }
    if (contW > 0) {
      setContainerWidth(contW);
    }
  }, []);

  useEffect(() => {
    updateDimensions();
    const handleResize = () => updateDimensions();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [updateDimensions]);

  // Derived real index (0..4) for dot pagination
  const activeRealIndex = ((currentIndex % SET_SIZE) + SET_SIZE) % SET_SIZE;

  const goToNext = useCallback(() => {
    setIsTransitioning(true);
    setCurrentIndex((prev) => prev + 1);
  }, []);

  const goToPrev = useCallback(() => {
    setIsTransitioning(true);
    setCurrentIndex((prev) => prev - 1);
  }, []);

  const goToDot = useCallback(
    (targetDot: number) => {
      setIsTransitioning(true);
      const currentReal = ((currentIndex % SET_SIZE) + SET_SIZE) % SET_SIZE;
      const diff = targetDot - currentReal;
      setCurrentIndex((prev) => prev + diff);
    },
    [currentIndex, SET_SIZE]
  );

  // Seamless infinite repositioning on transition end
  const handleTransitionEnd = useCallback(() => {
    // If navigated too far forward (beyond set 3)
    if (currentIndex >= SET_SIZE * 3) {
      setIsTransitioning(false);
      const normalized = ((currentIndex % SET_SIZE) + SET_SIZE) % SET_SIZE;
      setCurrentIndex(INITIAL_INDEX + normalized);
    }
    // If navigated too far backward (before set 2)
    else if (currentIndex < SET_SIZE) {
      setIsTransitioning(false);
      const normalized = ((currentIndex % SET_SIZE) + SET_SIZE) % SET_SIZE;
      setCurrentIndex(INITIAL_INDEX + normalized);
    }
  }, [currentIndex, INITIAL_INDEX, SET_SIZE]);

  // When transition is disabled for seamless reset, restore it on next frame
  useEffect(() => {
    if (!isTransitioning) {
      const raf = requestAnimationFrame(() => {
        requestAnimationFrame(() => {
          setIsTransitioning(true);
        });
      });
      return () => cancelAnimationFrame(raf);
    }
  }, [isTransitioning]);

  // Autoplay timer: advances to next video every 3.5 seconds
  // Pauses automatically when user hovers or toggles pause
  useEffect(() => {
    if (!isAutoPlayActive || isHovered) return;
    const timer = setInterval(() => {
      goToNext();
    }, 3500);

    return () => clearInterval(timer);
  }, [isAutoPlayActive, isHovered, goToNext]);

  // Touch and Swipe navigation handlers
  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
    touchDeltaX.current = 0;
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    if (touchStartX.current === null) return;
    touchDeltaX.current = e.touches[0].clientX - touchStartX.current;
  };

  const handleTouchEnd = () => {
    if (touchStartX.current === null) return;
    if (touchDeltaX.current < -45) {
      goToNext();
    } else if (touchDeltaX.current > 45) {
      goToPrev();
    }
    touchStartX.current = null;
    touchDeltaX.current = 0;
  };

  // Center active card on mobile/tablet screens for a clean, unclipped display with subtle peeks on both sides
  const isMobileOrTablet = typeof window !== 'undefined' ? window.innerWidth < 1024 : false;
  const currentCardW = firstCardRef.current?.offsetWidth || 275;
  const centerOffset = isMobileOrTablet && containerWidth > 0
    ? Math.max(0, (containerWidth - currentCardW) / 2)
    : 0;

  const translateX = -(currentIndex * stepWidth) + centerOffset;

  return (
    <div
      className="relative w-full select-none"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Viewport Mask with subtle edge fade */}
      <div
        ref={containerRef}
        style={{
          WebkitMaskImage: 'linear-gradient(to right, transparent, black 16px, black calc(100% - 16px), transparent)',
          maskImage: 'linear-gradient(to right, transparent, black 16px, black calc(100% - 16px), transparent)',
        }}
        className="w-full overflow-hidden py-3 px-1"
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
      >
        {/* Animated Infinite Track */}
        <div
          ref={trackRef}
          onTransitionEnd={handleTransitionEnd}
          style={{
            transform: `translate3d(${translateX}px, 0, 0)`,
            transition: isTransitioning
              ? 'transform 600ms cubic-bezier(0.2, 0.9, 0.3, 1)'
              : 'none',
            willChange: 'transform',
          }}
          className="flex items-center gap-4"
        >
          {loopedVideos.map((item, idx) => (
            <div
              key={item.uniqueKey}
              ref={idx === 0 ? firstCardRef : undefined}
              className="shrink-0"
            >
              <VideoCard
                vid={item.vid}
                title={item.title}
                tag={item.tag}
                idx={item.origIndex}
                isActive={activeRealIndex === item.origIndex}
              />
            </div>
          ))}
        </div>
      </div>

      {/* Navigation & Controls Bar */}
      <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mt-8 px-2">
        {/* Status Hint */}
        <div className="text-xs text-gray-500 font-medium flex items-center gap-2 order-2 sm:order-1">
          <span
            className={`w-2 h-2 rounded-full ${
              isHovered
                ? 'bg-amber-400 animate-pulse'
                : isAutoPlayActive
                ? 'bg-primary animate-ping'
                : 'bg-gray-400'
            }`}
          />
          <span>
            {isHovered
              ? 'En pausa (cursor sobre el video)'
              : !isAutoPlayActive
              ? 'Avance automático pausado'
              : 'Recorrido automático infinito activo'}
          </span>
        </div>

        {/* Center: Controls & Subtle Dots */}
        <div className="flex items-center gap-3 order-1 sm:order-2">
          {/* Pause / Play Toggle Button */}
          <button
            type="button"
            onClick={() => setIsAutoPlayActive(!isAutoPlayActive)}
            className="w-9 h-9 rounded-full bg-white hover:bg-gray-50 text-gray-700 shadow-sm border border-gray-200 flex items-center justify-center transition-all hover:scale-105 active:scale-95 cursor-pointer focus:outline-none focus:ring-2 focus:ring-primary/40"
            title={isAutoPlayActive ? 'Pausar recorrido automático' : 'Reanudar recorrido automático'}
            aria-label={isAutoPlayActive ? 'Pausar recorrido automático' : 'Reanudar recorrido automático'}
          >
            <span className="material-symbols-outlined text-lg">
              {isAutoPlayActive ? 'pause' : 'play_arrow'}
            </span>
          </button>

          {/* Previous Arrow Button */}
          <button
            type="button"
            onClick={goToPrev}
            className="w-9 h-9 rounded-full bg-white hover:bg-gray-50 text-gray-700 shadow-sm border border-gray-200 flex items-center justify-center transition-all hover:scale-105 hover:text-primary active:scale-95 cursor-pointer focus:outline-none focus:ring-2 focus:ring-primary/40"
            title="Video anterior"
            aria-label="Video anterior"
          >
            <span className="material-symbols-outlined text-lg">chevron_left</span>
          </button>

          {/* Subtle Dots (5 bolitas que corren en automático hacia la derecha) */}
          <div
            className="flex items-center gap-2.5 px-3.5 py-2 rounded-full bg-gray-100/90 border border-gray-200/80 shadow-inner"
            role="tablist"
            aria-label="Indicador de videos"
          >
            {EXPERIENCE_VIDEOS.map((v, i) => {
              const isActive = activeRealIndex === i;
              return (
                <button
                  key={v.vid}
                  type="button"
                  role="tab"
                  aria-selected={isActive}
                  onClick={() => goToDot(i)}
                  aria-label={`Ir al video ${i + 1}: ${v.title}`}
                  className={`relative transition-all duration-300 rounded-full cursor-pointer focus:outline-none ${
                    isActive
                      ? 'w-3.5 h-3.5 bg-primary ring-4 ring-primary/25 scale-110 shadow-sm'
                      : 'w-2.5 h-2.5 border-2 border-gray-400/80 bg-transparent hover:border-primary hover:scale-110'
                  }`}
                />
              );
            })}
          </div>

          {/* Next Arrow Button */}
          <button
            type="button"
            onClick={goToNext}
            className="w-9 h-9 rounded-full bg-white hover:bg-gray-50 text-gray-700 shadow-sm border border-gray-200 flex items-center justify-center transition-all hover:scale-105 hover:text-primary active:scale-95 cursor-pointer focus:outline-none focus:ring-2 focus:ring-primary/40"
            title="Siguiente video"
            aria-label="Siguiente video"
          >
            <span className="material-symbols-outlined text-lg">chevron_right</span>
          </button>
        </div>
      </div>
    </div>
  );
};

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
          <div className="flex flex-col gap-2 max-w-3xl">

            <div className="w-full flex items-center justify-start my-2">
              <BlurText
                text="Nuestros Servicios & Soluciones Técnicas"
                delay={30}
                animateBy="letters"
                direction="bottom"
                highlightStartIndex={21}
                highlightClassName="text-primary"
                className="font-lora font-bold text-3xl sm:text-4xl md:text-5xl text-surface-dark drop-shadow-sm"
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
              highlightStartIndex={11}
              highlightClassName="text-primary"
              className="font-lora font-bold text-3xl sm:text-4xl text-surface-dark drop-shadow-sm"
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
      <div className="relative z-10 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto mt-20 sm:mt-24 mb-24 sm:mb-14 pb-10 sm:pb-0">
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
              highlightStartIndex={23}
              highlightClassName="text-primary"
              className="font-lora font-bold text-3xl sm:text-4xl text-surface-dark drop-shadow-sm"
            />
          </div>
          <p className="font-inter text-sm sm:text-base text-gray-600 mt-4">
            Resultados reales, instalaciones limpias y profesionales que garantizan tu seguridad al máximo nivel.
          </p>
        </motion.div>

        <ExperienceVideoCarousel />
      </div>
    </section>
  );
}
