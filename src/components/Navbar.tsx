import React, { useState, useEffect } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { useCartStore } from '../store/useCartStore';
import { COMPANY_INFO } from '../data/company';

export default function Navbar() {
  const { getTotalItems, toggleCart } = useCartStore();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const totalItems = getTotalItems();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 15);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Inicio', path: '/' },
    { name: 'Nosotros', path: '/nosotros' },
    { name: 'Servicios', path: '/servicios' },
    { name: 'Productos', path: '/productos' },
    { name: 'Contacto', path: '/contacto' },
  ];

  return (
    <header
style={{
  backgroundColor: scrolled ? 'rgba(11, 27, 54, 0.65)' : 'rgba(11, 27, 54, 0.85)',
  boxShadow: scrolled ? '0 10px 30px -10px rgba(0, 0, 0, 0.3)' : 'none',
  backdropFilter: 'blur(12px)',
  WebkitBackdropFilter: 'blur(12px)', /* Para Safari */
  transition: 'background-color 0.4s ease, box-shadow 0.4s ease'
}}
      className="fixed top-0 left-0 w-full z-50 transition-all duration-300 border-b border-slate-800"
    >
      <div className="h-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        
        {/* Brand Logo - Clear without enclosing box */}
        <Link to="/" className="flex items-center gap-3 group">
          <img 
            src="/logo/logosoteco.webp" 
            alt="SOLTECOM - Soluciones Tecnológicas y Comerciales LD SAS" 
            className="h-12 w-auto object-contain transition-transform duration-300 group-hover:scale-105"
            style={{
              filter: 'drop-shadow(0 2px 6px rgba(0,0,0,0.8)) drop-shadow(0 0 12px rgba(255,255,255,0.4))'
            }}
          />
        </Link>

        {/* Desktop Navigation - Always crisp and readable */}
        <nav className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <NavLink
              key={link.path}
              to={link.path}
              className={({ isActive }) =>
                `text-sm font-semibold transition-colors duration-200 py-1.5 ${
                  isActive
                    ? 'text-emerald-400 border-b-2 border-emerald-400 drop-shadow'
                    : 'text-slate-200 hover:text-white'
                }`
              }
            >
              {link.name}
            </NavLink>
          ))}
        </nav>

        {/* Actions (Cart & Cotizar CTA) */}
        <div className="flex items-center gap-3">
          <button
            onClick={toggleCart}
            aria-label="Abrir cotizador"
            className="relative p-2.5 rounded-xl bg-slate-800/80 text-white hover:bg-slate-700 transition-colors duration-200 border border-slate-700 shadow-sm"
          >
            <span className="material-symbols-outlined text-2xl">shopping_bag</span>
            {totalItems > 0 && (
              <span className="absolute -top-1 -right-1 px-1.5 py-0.5 min-w-[20px] h-5 rounded-full bg-emerald-500 text-white text-xs font-bold flex items-center justify-center shadow">
                {totalItems}
              </span>
            )}
          </button>

          <Link
            to="/contacto"
            className="hidden sm:inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white text-sm font-semibold transition-[background-color,box-shadow] duration-200 shadow-lg hover:shadow-emerald-600/30 group"
          >
            <span className="material-symbols-outlined text-lg group-hover:scale-110 transition-transform">
              send_and_archive
            </span>
            <span>Solicitar cotización</span>
          </Link>

          {/* Mobile hamburger menu toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 rounded-xl bg-slate-800 text-white hover:bg-slate-700 border border-slate-700"
          >
            <span className="material-symbols-outlined text-2xl">
              {mobileMenuOpen ? 'close' : 'menu'}
            </span>
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div 
          style={{ backgroundColor: '#070f1a' }}
          className="lg:hidden border-t border-slate-800 px-4 pt-3 pb-6 space-y-1 shadow-2xl"
        >
          {navLinks.map((link) => (
            <NavLink
              key={link.path}
              to={link.path}
              onClick={() => setMobileMenuOpen(false)}
              className={({ isActive }) =>
                `block px-3 py-2.5 rounded-lg text-base font-medium ${
                  isActive
                    ? 'bg-emerald-950/60 text-emerald-400 font-bold border-l-4 border-emerald-400'
                    : 'text-slate-200 hover:bg-slate-800 hover:text-white'
                }`
              }
            >
              {link.name}
            </NavLink>
          ))}
          <div className="pt-4 flex flex-col gap-2">
            <Link
              to="/contacto"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-semibold shadow"
            >
              <span className="material-symbols-outlined text-lg">send_and_archive</span>
              <span>Solicitar cotización</span>
            </Link>
            <a
              href={COMPANY_INFO.whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="text-center text-xs text-emerald-400 py-1"
            >
              WhatsApp: {COMPANY_INFO.whatsappFull}
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
