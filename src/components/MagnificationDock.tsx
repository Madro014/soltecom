import React, { useRef, useState, useEffect, useCallback } from 'react';
import { Link, useLocation } from 'react-router-dom';
import {
  m as motion,
  useMotionValue,
  useTransform,
  useSpring,
  AnimatePresence,
  MotionValue,
} from 'framer-motion';
import { useCartStore } from '../store/useCartStore';
import { useUIStore } from '../store/useUIStore';
import { COMPANY_INFO } from '../data/company';

interface DockItemProps {
  mouseX: MotionValue<number>;
  icon: string;
  label: string;
  to?: string;
  onClick?: () => void;
  badge?: number;
  isExternal?: boolean;
  accent?: string;
  isActive?: boolean;
  isMobile?: boolean;
}

function DockItem({
  mouseX,
  icon,
  label,
  to,
  onClick,
  badge,
  isExternal,
  accent,
  isActive,
  isMobile,
}: DockItemProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = useState(false);

  const distance = useTransform(mouseX, (val: number) => {
    if (isMobile) return Infinity;
    const bounds = ref.current?.getBoundingClientRect() ?? { x: 0, width: 0 };
    return val - bounds.x - bounds.width / 2;
  });

  // Desktop: Base size 38px, smoothly magnifies up to 58px when under cursor
  const sizeSync = useTransform(distance, [-110, 0, 110], [38, 58, 38]);
  const size = useSpring(sizeSync, { mass: 0.1, stiffness: 190, damping: 14 });

  // Desktop: Icon font size scale
  const iconScaleSync = useTransform(distance, [-110, 0, 110], [1, 1.35, 1]);
  const iconScale = useSpring(iconScaleSync, { mass: 0.1, stiffness: 190, damping: 14 });

  const content = isMobile ? (
    <motion.div
      whileTap={{ scale: 0.88 }}
      className={`relative w-[38px] h-[38px] rounded-xl flex items-center justify-center cursor-pointer transition-colors border select-none shrink-0 ${
        isActive
          ? 'bg-primary text-white border-primary/50 shadow-md shadow-primary/30'
          : 'bg-white/10 active:bg-white/20 text-gray-200 active:text-white border-white/15'
      } ${accent ? accent : ''}`}
    >
      <span className="material-symbols-outlined text-[20px]">
        {icon}
      </span>

      {badge !== undefined && badge > 0 && (
        <span className="absolute -top-1 -right-1 min-w-[16px] h-[16px] px-0.5 rounded-full bg-emerald-500 text-white text-[9px] font-extrabold flex items-center justify-center shadow-lg border border-slate-900 animate-pulse">
          {badge}
        </span>
      )}

      {isActive && (
        <span className="absolute -bottom-1 w-1.5 h-1.5 rounded-full bg-emerald-400 shadow-[0_0_6px_#34d399]" />
      )}
    </motion.div>
  ) : (
    <motion.div
      ref={ref}
      style={{ width: size, height: size }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className={`relative rounded-xl sm:rounded-2xl flex items-center justify-center cursor-pointer transition-colors border shadow-md select-none group shrink-0 ${
        isActive
          ? 'bg-primary text-white border-primary/50 shadow-primary/30 shadow-lg'
          : 'bg-white/10 hover:bg-white/20 text-gray-200 hover:text-white border-white/15'
      } ${accent ? accent : ''}`}
    >
      {/* Tooltip */}
      <AnimatePresence>
        {isHovered && (
          <motion.div
            initial={{ opacity: 0, y: 6, scale: 0.9 }}
            animate={{ opacity: 1, y: -8, scale: 1 }}
            exit={{ opacity: 0, y: 4, scale: 0.9 }}
            transition={{ duration: 0.12 }}
            className="absolute -top-8 px-2.5 py-0.5 rounded-lg bg-slate-950/95 text-white text-[10px] font-semibold font-montserrat whitespace-nowrap shadow-xl border border-white/15 pointer-events-none backdrop-blur-md flex items-center gap-1 z-50"
          >
            <span>{label}</span>
            {badge !== undefined && badge > 0 && (
              <span className="bg-primary px-1.5 py-0.2 rounded-full text-[9px] font-bold">
                {badge}
              </span>
            )}
          </motion.div>
        )}
      </AnimatePresence>

      {/* Icon with Spring Scale */}
      <motion.span
        style={{ scale: iconScale }}
        className="material-symbols-outlined text-lg sm:text-xl transition-transform"
      >
        {icon}
      </motion.span>

      {/* Badge (e.g., cart count) */}
      {badge !== undefined && badge > 0 && (
        <span className="absolute -top-1 -right-1 min-w-[16px] h-[16px] px-0.5 rounded-full bg-emerald-500 text-white text-[9px] font-extrabold flex items-center justify-center shadow-lg border border-slate-900 animate-pulse">
          {badge}
        </span>
      )}

      {/* Active Dot Indicator */}
      {isActive && (
        <span className="absolute -bottom-1 w-1 h-1 rounded-full bg-emerald-400 shadow-[0_0_6px_#34d399]" />
      )}
    </motion.div>
  );

  if (isExternal && to) {
    return (
      <a
        href={to}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={label}
        className="block"
      >
        {content}
      </a>
    );
  }

  if (to) {
    return (
      <Link to={to} aria-label={label} className="block">
        {content}
      </Link>
    );
  }

  return (
    <button type="button" onClick={onClick} aria-label={label} className="block bg-transparent border-0 p-0">
      {content}
    </button>
  );
}

export default function MagnificationDock() {
  const mouseX = useMotionValue(Infinity);
  const location = useLocation();
  const { openCart, getTotalItems } = useCartStore();
  const isTechnicalGuideOpen = useUIStore((state) => state.isTechnicalGuideOpen);
  const totalCartItems = getTotalItems();

  const [isMobile, setIsMobile] = useState(false);
  const [isScrolledDown, setIsScrolledDown] = useState(false);
  const [isHoveredBottom, setIsHoveredBottom] = useState(false);
  const [isFooterVisible, setIsFooterVisible] = useState(false);
  const [isIdle, setIsIdle] = useState(false);
  const [isDockHovered, setIsDockHovered] = useState(false);
  const idleTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    const checkIsMobile = () => {
      const isTouch = window.matchMedia('(pointer: coarse)').matches;
      const isSmall = window.innerWidth < 768;
      setIsMobile(isSmall || isTouch);
    };
    checkIsMobile();
    window.addEventListener('resize', checkIsMobile);
    return () => window.removeEventListener('resize', checkIsMobile);
  }, []);

  // Inactivity timer: Disappears if user is still for 3 seconds
  const resetIdleTimer = useCallback(() => {
    setIsIdle(false);
    if (idleTimerRef.current) {
      clearTimeout(idleTimerRef.current);
    }
    idleTimerRef.current = setTimeout(() => {
      setIsIdle(true);
    }, 3000);
  }, []);

  useEffect(() => {
    resetIdleTimer();

    const handleActivity = () => {
      resetIdleTimer();
    };

    window.addEventListener('mousemove', handleActivity, { passive: true });
    window.addEventListener('scroll', handleActivity, { passive: true });
    window.addEventListener('keydown', handleActivity, { passive: true });
    window.addEventListener('touchstart', handleActivity, { passive: true });

    return () => {
      if (idleTimerRef.current) clearTimeout(idleTimerRef.current);
      window.removeEventListener('mousemove', handleActivity);
      window.removeEventListener('scroll', handleActivity);
      window.removeEventListener('keydown', handleActivity);
      window.removeEventListener('touchstart', handleActivity);
    };
  }, [resetIdleTimer]);

  // Auto-hide intelligent on ALL pages (Home, Nosotros, Servicios, Productos, Contacto, DetalleProducto)
  useEffect(() => {
    const handleScroll = () => {
      // Reveal dock when scrolled down > 120px on ANY page, hide when at the top
      setIsScrolledDown(window.scrollY > 120);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, [location.pathname]);

  // Observer for footer: when user reaches the footer, hide the dock completely
  useEffect(() => {
    const footerEl = document.querySelector('footer');
    if (!footerEl) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsFooterVisible(entry.isIntersecting);
      },
      {
        root: null,
        // Trigger as soon as the footer enters the viewport
        threshold: 0.02,
      }
    );

    observer.observe(footerEl);
    return () => observer.disconnect();
  }, [location.pathname]);

  // If user moves mouse near bottom screen edge on ANY page (only active for desktop with mouse)
  useEffect(() => {
    if (isMobile) return;
    const handleMouseMove = (e: MouseEvent) => {
      const nearBottom = e.clientY >= window.innerHeight - 75;
      setIsHoveredBottom(nearBottom);
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [isMobile]);

  // Visible ONLY if:
  // 1. Scrolled down OR hovered at the bottom
  // 2. Footer is NOT in view
  // 3. User is NOT idle (has moved within last 3s) OR is directly hovering the dock
  // 4. Modal de Guía Técnica no está abierto
  const isVisible = (isScrolledDown || isHoveredBottom) && !isFooterVisible && (!isIdle || isDockHovered) && !isTechnicalGuideOpen;

  return (
    <>
      {/* Sensor hover zone at the bottom of the screen (disabled when in footer, modal open or on mobile touch) */}
      {!isFooterVisible && !isTechnicalGuideOpen && !isMobile && (
        <div 
          className="fixed bottom-0 inset-x-0 h-16 z-30 pointer-events-auto"
          onMouseEnter={() => {
            setIsHoveredBottom(true);
            resetIdleTimer();
          }}
          onMouseLeave={(e) => {
            if (e.clientY < window.innerHeight - 75) {
              setIsHoveredBottom(false);
            }
          }}
        />
      )}

      <div className="fixed bottom-3 sm:bottom-5 inset-x-0 flex justify-center z-40 pointer-events-none px-2 mb-[env(safe-area-inset-bottom,0px)]">
        <motion.nav
          initial={{ y: 80, opacity: 0 }}
          animate={{
            y: isVisible ? 0 : 80,
            opacity: isVisible ? 1 : 0,
          }}
          transition={{ type: "spring", stiffness: 260, damping: 25 }}
          style={{ pointerEvents: isVisible ? 'auto' : 'none' }}
          onMouseEnter={() => {
            if (!isMobile) {
              setIsDockHovered(true);
              setIsHoveredBottom(true);
            }
            setIsIdle(false);
            if (idleTimerRef.current) clearTimeout(idleTimerRef.current);
          }}
          onMouseLeave={() => {
            setIsDockHovered(false);
            setIsHoveredBottom(false);
            mouseX.set(Infinity);
            resetIdleTimer();
          }}
          onMouseMove={(e) => {
            if (!isMobile) {
              mouseX.set(e.pageX);
            }
            resetIdleTimer();
          }}
          onTouchStart={() => {
            mouseX.set(Infinity);
            resetIdleTimer();
          }}
          aria-label="Menú interactivo de navegación"
          className="flex items-center sm:items-end gap-1.5 sm:gap-2 px-2 sm:px-3 py-1.5 sm:py-2 rounded-2xl sm:rounded-full bg-slate-950/90 backdrop-blur-2xl border border-white/20 shadow-[0_10px_35px_rgba(0,0,0,0.5)] max-w-full"
        >
        {/* 1. Inicio */}
        <DockItem
          mouseX={mouseX}
          icon="home"
          label="Inicio"
          to="/"
          isActive={location.pathname === '/'}
          isMobile={isMobile}
        />

        {/* 2. Catálogo */}
        <DockItem
          mouseX={mouseX}
          icon="storefront"
          label="Catálogo B2B"
          to="/productos"
          isActive={location.pathname.startsWith('/productos')}
          isMobile={isMobile}
        />

        {/* 3. Servicios */}
        <DockItem
          mouseX={mouseX}
          icon="engineering"
          label="Servicios"
          to="/servicios"
          isActive={location.pathname === '/servicios'}
          isMobile={isMobile}
        />

        {/* 4. Nosotros */}
        <DockItem
          mouseX={mouseX}
          icon="corporate_fare"
          label="Sobre Nosotros"
          to="/nosotros"
          isActive={location.pathname === '/nosotros'}
          isMobile={isMobile}
        />

        {/* Separador sutil */}
        <div className="w-[1px] h-4 sm:h-5 bg-white/20 self-center mx-0.5 shrink-0" />

        {/* 5. Cotización / Carrito */}
        <DockItem
          mouseX={mouseX}
          icon="shopping_cart"
          label={`Cotización (${totalCartItems})`}
          onClick={openCart}
          badge={totalCartItems}
          isMobile={isMobile}
        />

        {/* 6. Contacto */}
        <DockItem
          mouseX={mouseX}
          icon="support_agent"
          label="Contacto Directo"
          to="/contacto"
          isActive={location.pathname === '/contacto'}
          isMobile={isMobile}
        />

        {/* 7. WhatsApp Asesor */}
        <DockItem
          mouseX={mouseX}
          icon="chat"
          label="Asesor en WhatsApp"
          to={COMPANY_INFO.whatsappLink}
          isExternal
          accent="hover:border-emerald-500/50 hover:bg-emerald-600/20 text-emerald-400"
          isMobile={isMobile}
        />
      </motion.nav>
    </div>
  </>
  );
}
