import React, { Suspense, lazy } from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { LazyMotion, domMax } from 'framer-motion';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import CartDrawer from './components/CartDrawer';
import MagnificationDock from './components/MagnificationDock';

// Lazy loading route components for faster initial page loads and performance
const Home = lazy(() => import('./pages/Home'));
const Nosotros = lazy(() => import('./pages/Nosotros'));
const Servicios = lazy(() => import('./pages/Servicios'));
const Productos = lazy(() => import('./pages/Productos'));
const DetalleProducto = lazy(() => import('./pages/DetalleProducto'));
const Contacto = lazy(() => import('./pages/Contacto'));

function PageLoader() {
  return (
    <div className="w-full min-h-[60vh] flex items-center justify-center">
      <div className="flex flex-col items-center gap-3">
        <div className="w-10 h-10 border-3 border-emerald-500/20 border-t-emerald-500 rounded-full animate-spin" />
        <span className="text-xs font-semibold text-slate-400 uppercase tracking-widest font-montserrat">
          Cargando...
        </span>
      </div>
    </div>
  );
}

export default function App() {
  return (
    <LazyMotion features={domMax}>
      <BrowserRouter>
        <div className="min-h-screen flex flex-col bg-surface">
          <Navbar />
          <main className="flex-grow pt-0">
            <Suspense fallback={<PageLoader />}>
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/nosotros" element={<Nosotros />} />
                <Route path="/servicios" element={<Servicios />} />
                <Route path="/productos" element={<Productos />} />
                <Route path="/productos/:id" element={<DetalleProducto />} />
                <Route path="/contacto" element={<Contacto />} />
                <Route path="*" element={<Navigate to="/" replace />} />
              </Routes>
            </Suspense>
          </main>
          <Footer />
          <CartDrawer />
          <MagnificationDock />
        </div>
      </BrowserRouter>
    </LazyMotion>
  );
}
