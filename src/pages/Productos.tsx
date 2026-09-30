import React, { useState, useMemo } from 'react';
import ProductCard from '../components/ProductCard';
import { PRODUCTS } from '../data/products';
import { Product } from '../types';
import Grainient from '../components/animations/Grainient';

type CategoryFilter = 'all' | Product['category'];

const CATEGORIES: { id: CategoryFilter; name: string }[] = [
  { id: 'all', name: 'Todos los equipos' },
  { id: 'cctv', name: 'Sistemas de Videovigilancia (CCTV IP - Tiandy)' },
  { id: 'acceso', name: 'Control de Acceso Peatonal y Vehicular (ZKTeco)' },
  { id: 'alarmas', name: 'Alarmas residenciales y perimetrales (Intelbras)' },
  { id: 'incendio', name: 'Detección y Alarma de Incendio (Intelbras)' },
  { id: 'apertura-ppa', name: 'Apertura Vehicular (PPA)' },
  { id: 'apertura-garen', name: 'Apertura Vehicular (GAREN)' },
  { id: 'citofonia', name: 'Video Citofonía (Akuvox / Hikvision)' },
  { id: 'accesorios-acceso', name: 'Hardware para Control de Acceso' },
  { id: 'redes', name: 'Equipos de Conectividad para Redes' },
  { id: 'computo', name: 'Accesorios para Computadores' },
];

export default function Productos() {
  const [selectedCategory, setSelectedCategory] = useState<CategoryFilter>('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [sortBy, setSortBy] = useState<'featured' | 'price-asc' | 'price-desc'>('featured');

  const filteredProducts = useMemo(() => {
    return PRODUCTS.filter((item) => {
      const matchesCategory = selectedCategory === 'all' || item.category === selectedCategory;
      const matchesSearch =
        item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.brand.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.sku.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.shortDesc.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesCategory && matchesSearch;
    }).sort((a, b) => {
      const priceA = a.wholesalePrice || a.price;
      const priceB = b.wholesalePrice || b.price;
      if (sortBy === 'price-asc') return priceA - priceB;
      if (sortBy === 'price-desc') return priceB - priceA;
      return 0;
    });
  }, [selectedCategory, searchQuery, sortBy]);

  return (
    <div className="flex flex-col w-full bg-surface-low min-h-screen">
      {/* Header Banner */}
      <section className="bg-secondary-darker pt-28 pb-12 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
            <div>
              <span className="text-primary-fixed uppercase tracking-widest text-xs font-bold font-montserrat">
                Equipamiento B2B & Mayoreo
              </span>
              <h1 className="font-montserrat font-bold text-2xl sm:text-3xl lg:text-4xl text-white mt-1">
                Catálogo de Seguridad & Conectividad
              </h1>
              <p className="text-sm text-gray-300 mt-1 max-w-xl">
                Consulte especificaciones oficiales, precios por volumen y agregue a su orden de cotización directa.
              </p>
            </div>
            <div className="flex items-center gap-2 bg-white/10 px-4 py-2 rounded-xl backdrop-blur-sm self-start md:self-auto">
              <span className="material-symbols-outlined text-primary-fixed text-xl">inventory</span>
              <span className="text-xs font-semibold text-white">
                {PRODUCTS.length} Referencias Homologadas
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Main Filter & Search Area */}
      <section className="relative w-full py-8 flex-1 overflow-hidden">
        {/* Animated Grainient Background */}
        <div className="absolute inset-0 w-full h-full pointer-events-none opacity-25">
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

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          {/* Controls Bar */}
        <div className="bg-white rounded-2xl p-4 shadow-sm border border-gray-100 flex flex-col md:flex-row items-center justify-between gap-4 mb-8">
          
          {/* Search Input */}
          <div className="relative w-full md:w-80">
            <span className="material-symbols-outlined absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-400 text-xl">
              search
            </span>
            <input
              type="text"
              aria-label="Buscar productos por modelo, marca o SKU"
              placeholder="Buscar por modelo, marca o SKU..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-surface-low border border-gray-200 text-sm text-surface-dark focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-[border-color,box-shadow] duration-200"
            />
            {searchQuery && (
              <button
                type="button"
                onClick={() => setSearchQuery('')}
                aria-label="Limpiar búsqueda"
                className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
              >
                <span className="material-symbols-outlined text-lg">close</span>
              </button>
            )}
          </div>

          {/* Sort Selector */}
          <div className="flex items-center gap-2 w-full md:w-auto justify-end">
            <label htmlFor="sort-select" className="text-xs font-semibold text-gray-500 whitespace-nowrap">
              Ordenar por:
            </label>
            <select
              id="sort-select"
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value as any)}
              className="py-2 px-3 rounded-xl bg-surface-low border border-gray-200 text-xs font-medium text-surface-dark focus:outline-none focus:ring-2 focus:ring-primary"
            >
              <option value="featured">Destacados</option>
              <option value="price-asc">Precio: Menor a Mayor</option>
              <option value="price-desc">Precio: Mayor a Menor</option>
            </select>
          </div>
        </div>

        {/* Category Filter Tabs Bar */}
        <div className="relative mb-6">
          <div className="flex items-center justify-between mb-3 px-1">
            <span className="text-xs font-bold text-gray-500 uppercase tracking-wider font-montserrat flex items-center gap-1.5">
              <span className="material-symbols-outlined text-base text-primary">category</span>
              Filtrar por Categoría ({CATEGORIES.length - 1} líneas disponibles):
            </span>
            <div className="hidden sm:flex items-center gap-1">
              <button
                type="button"
                onClick={() => {
                  const el = document.getElementById('categories-scroll-container');
                  if (el) el.scrollBy({ left: -260, behavior: 'smooth' });
                }}
                className="w-8 h-8 rounded-full bg-white border border-gray-200 text-gray-600 hover:text-primary hover:border-primary shadow-sm flex items-center justify-center transition-colors duration-200"
                title="Desplazar a la izquierda"
                aria-label="Desplazar a la izquierda"
              >
                <span className="material-symbols-outlined text-lg">chevron_left</span>
              </button>
              <button
                type="button"
                onClick={() => {
                  const el = document.getElementById('categories-scroll-container');
                  if (el) el.scrollBy({ left: 260, behavior: 'smooth' });
                }}
                className="w-8 h-8 rounded-full bg-white border border-gray-200 text-gray-600 hover:text-primary hover:border-primary shadow-sm flex items-center justify-center transition-colors duration-200"
                title="Desplazar a la derecha"
                aria-label="Desplazar a la derecha"
              >
                <span className="material-symbols-outlined text-lg">chevron_right</span>
              </button>
            </div>
          </div>

          <div
            id="categories-scroll-container"
            className="flex items-center gap-2 overflow-x-auto pb-3 pt-1 scroll-smooth custom-category-scrollbar"
          >
            {CATEGORIES.map((cat) => {
              const isSelected = selectedCategory === cat.id;
              const count = cat.id === 'all' 
                ? PRODUCTS.length 
                : PRODUCTS.filter((p) => p.category === cat.id).length;

              return (
                <button
                  key={cat.id}
                  onClick={(e) => {
                    setSelectedCategory(cat.id);
                    e.currentTarget.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'center' });
                  }}
                  className={`inline-flex items-center gap-2 px-4 py-2.5 rounded-xl font-montserrat text-xs font-semibold whitespace-nowrap transition-all shrink-0 cursor-pointer ${
                    isSelected
                      ? 'bg-primary text-white shadow-md shadow-primary/20 scale-[1.02]'
                      : 'bg-white text-gray-700 hover:bg-gray-50 hover:text-primary border border-gray-200/80 shadow-sm'
                  }`}
                >
                  <span>{cat.name}</span>
                  <span
                    className={`px-2 py-0.5 rounded-full text-[10px] font-bold ${
                      isSelected
                        ? 'bg-white/25 text-white'
                        : 'bg-gray-100 text-gray-600'
                    }`}
                  >
                    {count}
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Products Grid */}
        {filteredProducts.length === 0 ? (
          <div className="bg-white rounded-2xl p-12 text-center border border-gray-100 shadow-sm flex flex-col items-center justify-center">
            <span className="material-symbols-outlined text-6xl text-gray-300 mb-3">search_off</span>
            <h3 className="font-montserrat font-bold text-lg text-surface-dark">
              No se encontraron productos
            </h3>
            <p className="text-sm text-gray-500 mt-1 max-w-md">
              No hay coincidencias para tu búsqueda "{searchQuery}". Intenta con otro término o restablece los filtros.
            </p>
            <button
              onClick={() => {
                setSearchQuery('');
                setSelectedCategory('all');
              }}
              className="mt-4 px-4 py-2 bg-primary text-white text-xs font-semibold rounded-xl hover:bg-primary-dark transition-colors"
            >
              Restablecer filtros
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {filteredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        )}
        </div>
      </section>
    </div>
  );
}
