import React from 'react';
import { Link } from 'react-router-dom';
import { COMPANY_INFO } from '../data/company';

export default function Footer() {
  return (
    <footer 
      style={{ 
        backgroundColor: '#060f1b',
        borderTop: '1px solid rgba(255, 255, 255, 0.08)'
      }} 
      className="w-full text-white"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 pb-8">
        {/* Main Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 lg:gap-12 mb-10">
          
          {/* Col 1: Identidad & Resumen (5 cols) */}
          <div className="lg:col-span-5 flex flex-col gap-3">
            <Link to="/" className="inline-block self-start">
              <img 
                src="/logo/logosoteco.webp" 
                alt="SOLTECOM" 
                className="h-10 w-auto object-contain transition-transform hover:scale-105"
                style={{ filter: 'drop-shadow(0 2px 8px rgba(0,0,0,0.8))' }}
              />
            </Link>
            
            <p className="text-xs font-semibold text-emerald-400 font-montserrat tracking-wide">
              {COMPANY_INFO.legalName}
            </p>
            
            <p className="text-xs text-slate-300/80 leading-relaxed max-w-sm font-inter">
              Soluciones integrales en seguridad electrónica, CCTV IP, control de acceso, automatización y telecomunicaciones con ingeniería certificada en Colombia.
            </p>

            {/* Redes Sociales Oficiales */}
            <div className="flex items-center gap-3 pt-2">
              {/* WhatsApp */}
              <a
                href={COMPANY_INFO.whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp SOLTECOM"
                className="w-8 h-8 rounded-lg bg-emerald-500/10 hover:bg-emerald-500 text-emerald-400 hover:text-white flex items-center justify-center transition-colors border border-emerald-500/25"
                title="WhatsApp: +57 320 294 9267"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.301-.15-1.777-.877-2.052-.977-.275-.101-.475-.15-.675.15-.2.3-.775.976-.95 1.176-.176.2-.351.226-.652.076-.301-.15-1.272-.469-2.424-1.496-.897-.799-1.503-1.787-1.678-2.088-.176-.301-.019-.464.132-.614.135-.135.301-.351.451-.526.151-.176.201-.301.301-.501.1-.2.05-.376-.025-.526-.075-.15-.675-1.628-.925-2.23-.244-.588-.493-.508-.675-.518-.175-.01-.375-.01-.575-.01s-.525.075-.8.375c-.275.3-1.05 1.027-1.05 2.504 0 1.477 1.076 2.905 1.226 3.106.15.2 2.118 3.235 5.132 4.538.717.31 1.278.495 1.714.634.721.23 1.377.198 1.896.12.578-.088 1.777-.726 2.027-1.428.25-.702.25-1.303.175-1.428-.075-.126-.275-.2-.576-.351m-5.467 7.618h-.002c-1.805 0-3.575-.487-5.12-1.408l-.367-.218-3.805 1 1.017-3.712-.239-.381c-1.01-1.611-1.545-3.486-1.545-5.407 0-5.597 4.555-10.152 10.156-10.152 2.712 0 5.261 1.057 7.177 2.975 1.916 1.918 2.971 4.469 2.971 7.181 0 5.599-4.556 10.153-10.157 10.153m0-22c-6.524 0-11.833 5.308-11.833 11.833 0 2.085.543 4.12 1.574 5.908l-1.671 6.104 6.246-1.638c1.724.94 3.666 1.435 5.684 1.435h.005c6.523 0 11.832-5.309 11.832-11.834 0-3.161-1.231-6.133-3.468-8.37-2.237-2.238-5.209-3.47-8.369-3.47z"/>
                </svg>
              </a>

              {/* Facebook */}
              <a
                href={COMPANY_INFO.social.facebookUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook SOLTECOM"
                className="w-8 h-8 rounded-lg bg-blue-600/10 hover:bg-blue-600 text-blue-400 hover:text-white flex items-center justify-center transition-colors border border-blue-500/25"
                title="Facebook: Soltecomld SAS"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
              </a>

              {/* Instagram */}
              <a
                href={COMPANY_INFO.social.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram SOLTECOM"
                className="w-8 h-8 rounded-lg bg-pink-600/10 hover:bg-pink-600 text-pink-400 hover:text-white flex items-center justify-center transition-colors border border-pink-500/25"
                title="Instagram: @soltecomld"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Col 2: Soluciones (2 cols) */}
          <div className="lg:col-span-3 flex flex-col gap-2.5">
            <h3 className="font-montserrat font-bold text-xs uppercase tracking-wider text-white border-b border-slate-800 pb-2">
              Soluciones Principales
            </h3>
            <ul className="flex flex-col gap-2 text-xs text-slate-300/90 font-inter">
              <li><Link to="/servicios" className="hover:text-emerald-400 transition-colors">Videovigilancia CCTV IP</Link></li>
              <li><Link to="/servicios" className="hover:text-emerald-400 transition-colors">Control de Acceso Biométrico</Link></li>
              <li><Link to="/servicios" className="hover:text-emerald-400 transition-colors">Automatización de Portones</Link></li>
              <li><Link to="/servicios" className="hover:text-emerald-400 transition-colors">Alarmas Monitoreadas</Link></li>
              <li><Link to="/servicios" className="hover:text-emerald-400 transition-colors">Video Portería y Citofonía</Link></li>
              <li><Link to="/servicios" className="hover:text-emerald-400 transition-colors">Redes & Conectividad</Link></li>
            </ul>
          </div>

          {/* Col 3: Enlaces Rápidos (2 cols) */}
          <div className="lg:col-span-2 flex flex-col gap-2.5">
            <h3 className="font-montserrat font-bold text-xs uppercase tracking-wider text-white border-b border-slate-800 pb-2">
              Navegación
            </h3>
            <ul className="flex flex-col gap-2 text-xs text-slate-300/90 font-inter">
              <li><Link to="/" className="hover:text-emerald-400 transition-colors">Inicio</Link></li>
              <li><Link to="/productos" className="hover:text-emerald-400 transition-colors">Catálogo de Equipos</Link></li>
              <li><Link to="/servicios" className="hover:text-emerald-400 transition-colors">Servicios</Link></li>
              <li><Link to="/nosotros" className="hover:text-emerald-400 transition-colors">Sobre Nosotros</Link></li>
              <li><Link to="/contacto" className="hover:text-emerald-400 transition-colors">Contacto & Cotización</Link></li>
            </ul>
          </div>

          {/* Col 4: Contacto Directo (2 cols) */}
          <div className="lg:col-span-2 flex flex-col gap-2.5">
            <h3 className="font-montserrat font-bold text-xs uppercase tracking-wider text-white border-b border-slate-800 pb-2">
              Contacto
            </h3>
            <div className="flex flex-col gap-2 text-xs text-slate-300/90 font-inter">
              <a 
                href={COMPANY_INFO.whatsappLink} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="flex items-center gap-1.5 hover:text-emerald-400 transition-colors"
              >
                <span className="material-symbols-outlined text-emerald-400 text-sm">chat</span>
                <span className="font-semibold text-white">{COMPANY_INFO.whatsappFull}</span>
              </a>
              <a 
                href={`mailto:${COMPANY_INFO.email}`} 
                className="flex items-center gap-1.5 hover:text-white transition-colors"
              >
                <span className="material-symbols-outlined text-emerald-400 text-sm">mail</span>
                <span className="truncate">{COMPANY_INFO.email}</span>
              </a>
              <div className="flex items-start gap-1.5 text-slate-400">
                <span className="material-symbols-outlined text-emerald-400 text-sm shrink-0 mt-0.5">location_on</span>
                <span>{COMPANY_INFO.address}, {COMPANY_INFO.city}</span>
              </div>
            </div>
          </div>

        </div>

        {/* Barra inferior simplificada y limpia */}
        <div className="border-t border-slate-800/80 pt-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-slate-400 font-inter">
          <p>
            © {new Date().getFullYear()} {COMPANY_INFO.legalName}
          </p>
          <div className="flex items-center gap-3 text-[11px]">
            <a 
              href="/pdfs/terminos-y-condiciones.pdf" 
              target="_blank" 
              rel="noopener noreferrer"
              className="hover:text-emerald-400 transition-colors"
            >
              Términos de Uso
            </a>
            <span className="text-slate-600">•</span>
            <a 
              href="/pdfs/politica-tratamiento-datos.pdf" 
              target="_blank" 
              rel="noopener noreferrer"
              className="hover:text-emerald-400 transition-colors"
            >
              Habeas Data
            </a>
            <span className="text-slate-600">•</span>
            <span className="text-slate-500">Bogotá D.C.</span>
          </div>
        </div>
      </div>
    </footer>
  );
}