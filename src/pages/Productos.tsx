import React, { useState, useMemo, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import ProductCard from '../components/ProductCard';
import { PRODUCTS } from '../data/products';
import { Product } from '../types';
import Grainient from '../components/animations/Grainient';

type CategoryFilter = 'all' | Product['category'];

const CATEGORIES: { id: CategoryFilter; name: string }[] = [
  { id: 'all', name: 'Todas las Categorías' },
  { id: 'cctv', name: 'Videovigilancia (CCTV IP & Turbo HD)' },
  { id: 'acceso', name: 'Control de Acceso & Biometría' },
  { id: 'apertura-garen', name: 'Motores & Automatización (GAREN)' },
  { id: 'apertura-ppa', name: 'Motores Puertas Vehiculares (PPA)' },
  { id: 'citofonia', name: 'Video Portería & Citofonía' },
  { id: 'alarmas', name: 'Alarmas & Seguridad Perimetral' },
  { id: 'redes', name: 'Switches, Redes & Transmisión' },
  { id: 'accesorios-acceso', name: 'Hardware & Accesorios de Acceso' },
  { id: 'incendio', name: 'Detección & Alarma de Incendio' },
];

const BRANDS: { id: string; name: string; logo?: string }[] = [
  { id: 'all', name: 'Todas las Marcas' },
  { id: 'Hikvision', name: 'Hikvision', logo: '/logo/hikvision-logo.webp' },
  { id: 'ZKTeco', name: 'ZKTeco', logo: '/logo/ZKTeco.webp' },
  { id: 'Tiandy', name: 'Tiandy', logo: '/logo/Tiandy.webp' },
  { id: 'IMOU', name: 'IMOU', logo: '/logo/Imou.webp' },
  { id: 'Intelbras', name: 'Intelbras', logo: '/logo/intelbras.webp' },
  { id: 'GAREN', name: 'GAREN', logo: '/logo/Garen.webp' },
  { id: 'PPA', name: 'PPA', logo: '/logo/PPA.webp' },
  { id: 'HAGROY', name: 'HAGROY', logo: '/logo/Hagroy.webp' },
];

export default function Productos() {
  const [searchParams, setSearchParams] = useSearchParams();

  // Read URL search params
  const paramBrand = searchParams.get('marca') || searchParams.get('brand') || 'all';
  const validBrand = useMemo(() => {
    const match = BRANDS.find((b) => b.id.toLowerCase() === paramBrand.toLowerCase());
    return match ? match.id : 'all';
  }, [paramBrand]);

  const paramCategory = (searchParams.get('categoria') || searchParams.get('category') || 'all') as CategoryFilter;
  const validCategory = useMemo(() => {
    return CATEGORIES.some((c) => c.id === paramCategory) ? paramCategory : 'all';
  }, [paramCategory]);

  const paramQuery = searchParams.get('q') || searchParams.get('buscar') || '';
  const paramSort = (searchParams.get('orden') || searchParams.get('sort') || 'featured') as 'featured' | 'price-asc' | 'price-desc';
  const validSort = (paramSort === 'price-asc' || paramSort === 'price-desc') ? paramSort : 'featured';
  const paramPage = parseInt(searchParams.get('pagina') || searchParams.get('page') || '1', 10);
  const validPage = isNaN(paramPage) || paramPage < 1 ? 1 : paramPage;

  const [selectedCategory, setSelectedCategory] = useState<CategoryFilter>(validCategory);
  const [selectedBrand, setSelectedBrand] = useState(validBrand);
  const [searchQuery, setSearchQuery] = useState(paramQuery);
  const [sortBy, setSortBy] = useState<'featured' | 'price-asc' | 'price-desc'>(validSort);
  const [currentPage, setCurrentPage] = useState(validPage);
  const itemsPerPage = 16;

  // Keep state in sync with URL changes (browser back/forward)
  useEffect(() => {
    setSelectedBrand(validBrand);
    setSelectedCategory(validCategory);
    setSearchQuery(paramQuery);
    setSortBy(validSort);
    setCurrentPage(validPage);
  }, [validBrand, validCategory, paramQuery, validSort, validPage]);

  // Restore scroll position after returning from product detail
  useEffect(() => {
    const savedScrollY = sessionStorage.getItem('soltecom_catalog_scroll_y');
    if (savedScrollY) {
      const y = parseInt(savedScrollY, 10);
      if (!isNaN(y) && y > 0) {
        const timeout = setTimeout(() => {
          window.scrollTo({ top: y, behavior: 'instant' });
        }, 30);
        return () => clearTimeout(timeout);
      }
    }
  }, []);

  const updateURLParams = (updates: {
    brand?: string;
    category?: CategoryFilter;
    q?: string;
    sort?: 'featured' | 'price-asc' | 'price-desc';
    page?: number;
  }) => {
    const nextBrand = updates.brand !== undefined ? updates.brand : selectedBrand;
    const nextCategory = updates.category !== undefined ? updates.category : selectedCategory;
    const nextQ = updates.q !== undefined ? updates.q : searchQuery;
    const nextSort = updates.sort !== undefined ? updates.sort : sortBy;
    const nextPage = updates.page !== undefined ? updates.page : currentPage;

    const params = new URLSearchParams();
    if (nextBrand !== 'all') params.set('marca', nextBrand);
    if (nextCategory !== 'all') params.set('categoria', nextCategory);
    if (nextQ.trim()) params.set('q', nextQ.trim());
    if (nextSort !== 'featured') params.set('orden', nextSort);
    if (nextPage > 1) params.set('pagina', String(nextPage));

    setSearchParams(params, { replace: true });
  };

  const handleBrandChange = (brandId: string) => {
    setSelectedBrand(brandId);
    setCurrentPage(1);
    updateURLParams({ brand: brandId, page: 1 });
  };

  const handleCategoryChange = (catId: CategoryFilter) => {
    setSelectedCategory(catId);
    setCurrentPage(1);
    updateURLParams({ category: catId, page: 1 });
  };

  const handleSearchChange = (query: string) => {
    setSearchQuery(query);
    setCurrentPage(1);
    updateURLParams({ q: query, page: 1 });
  };

  const handleSortChange = (newSort: 'featured' | 'price-asc' | 'price-desc') => {
    setSortBy(newSort);
    setCurrentPage(1);
    updateURLParams({ sort: newSort, page: 1 });
  };

  const handleResetFilters = () => {
    setSelectedBrand('all');
    setSelectedCategory('all');
    setSearchQuery('');
    setSortBy('featured');
    setCurrentPage(1);
    setSearchParams(new URLSearchParams(), { replace: true });
    sessionStorage.removeItem('soltecom_catalog_scroll_y');
  };

  // Filter and sort products
  const filteredProducts = useMemo(() => {
    return PRODUCTS.filter((item) => {
      const matchesCategory = selectedCategory === 'all' || item.category === selectedCategory;
      const matchesBrand = selectedBrand === 'all' || item.brand.toLowerCase() === selectedBrand.toLowerCase();
      const q = searchQuery.toLowerCase().trim();
      const matchesSearch =
        !q ||
        item.name.toLowerCase().includes(q) ||
        item.brand.toLowerCase().includes(q) ||
        item.sku.toLowerCase().includes(q) ||
        item.shortDesc.toLowerCase().includes(q);
      return matchesCategory && matchesBrand && matchesSearch;
    }).sort((a, b) => {
      const priceA = a.wholesalePrice || a.price;
      const priceB = b.wholesalePrice || b.price;
      if (sortBy === 'price-asc') return priceA - priceB;
      if (sortBy === 'price-desc') return priceB - priceA;
      
      // Featured: Show flagship equipment (CCTV, Motors, Access Control, Citofonía) first
      const isAccA = a.category === 'accesorios-acceso' || a.id.includes('lic');
      const isAccB = b.category === 'accesorios-acceso' || b.id.includes('lic');
      if (isAccA && !isAccB) return 1;
      if (!isAccA && isAccB) return -1;
      return 0;
    });
  }, [selectedCategory, selectedBrand, searchQuery, sortBy]);

  // Pagination calculations
  const totalPages = Math.ceil(filteredProducts.length / itemsPerPage) || 1;
  const startIndex = (currentPage - 1) * itemsPerPage;
  const paginatedProducts = useMemo(() => {
    return filteredProducts.slice(startIndex, startIndex + itemsPerPage);
  }, [filteredProducts, startIndex, itemsPerPage]);

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
    updateURLParams({ page });
    const gridEl = document.getElementById('products-grid-anchor');
    if (gridEl) {
      gridEl.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <div className="flex flex-col w-full bg-surface-low min-h-screen">
      {/* Header Banner */}
      <ProductHeaderBanner totalCount={PRODUCTS.length} />

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

        <div id="products-grid-anchor" className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          {/* Controls Bar: Search & Sort */}
          <div className="bg-white rounded-2xl p-4 shadow-sm border border-gray-100 flex flex-col md:flex-row items-center justify-between gap-4 mb-6">
            
            {/* Search Input */}
            <div className="relative w-full md:w-80">
              <span className="material-symbols-outlined absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-400 text-xl">
                search
              </span>
              <input
                type="text"
                aria-label="Buscar productos por modelo, marca o SKU"
                placeholder="Buscar por modelo, marca o referencia..."
                value={searchQuery}
                onChange={(e) => handleSearchChange(e.target.value)}
                className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-surface-low border border-gray-200 text-sm text-surface-dark focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-[border-color,box-shadow] duration-200"
              />
              {searchQuery && (
                <button
                  type="button"
                  onClick={() => handleSearchChange('')}
                  aria-label="Limpiar búsqueda"
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
                >
                  <span className="material-symbols-outlined text-lg">close</span>
                </button>
              )}
            </div>

            {/* Results count & Sort Selector */}
            <div className="flex items-center justify-between md:justify-end gap-4 w-full md:w-auto">
              <span className="text-xs text-gray-500 font-medium hidden sm:inline">
                Mostrando <strong className="text-gray-800">{filteredProducts.length === 0 ? 0 : startIndex + 1} - {Math.min(startIndex + itemsPerPage, filteredProducts.length)}</strong> de <strong className="text-primary">{filteredProducts.length}</strong>
              </span>

              <div className="flex items-center gap-2">
                <label htmlFor="sort-select" className="text-xs font-semibold text-gray-500 whitespace-nowrap">
                  Ordenar:
                </label>
                <select
                  id="sort-select"
                  value={sortBy}
                  onChange={(e) => handleSortChange(e.target.value as any)}
                  className="py-2 px-3 rounded-xl bg-surface-low border border-gray-200 text-xs font-medium text-surface-dark focus:outline-none focus:ring-2 focus:ring-primary"
                >
                  <option value="featured">Destacados</option>
                  <option value="price-asc">Precio: Menor a Mayor</option>
                  <option value="price-desc">Precio: Mayor a Menor</option>
                </select>
              </div>
            </div>
          </div>

          {/* Brand & Category Filters */}
          <ProductFilterControls
            selectedBrand={selectedBrand}
            setSelectedBrand={handleBrandChange}
            selectedCategory={selectedCategory}
            setSelectedCategory={handleCategoryChange}
          />

          {/* Active Filters Clear Bar if filtered */}
          {(selectedCategory !== 'all' || selectedBrand !== 'all' || searchQuery) && (
            <div className="flex items-center gap-2 mb-4 bg-primary/5 border border-primary/20 rounded-xl px-4 py-2 text-xs text-gray-700">
              <span className="font-semibold text-primary">Filtros activos:</span>
              {selectedBrand !== 'all' && (
                <span className="bg-white px-2 py-0.5 rounded-md border border-gray-200 flex items-center gap-1 font-medium">
                  Marca: {selectedBrand}
                  <button type="button" aria-label="Quitar filtro de marca" onClick={() => handleBrandChange('all')} className="hover:text-red-500 font-bold ml-1">×</button>
                </span>
              )}
              {selectedCategory !== 'all' && (
                <span className="bg-white px-2 py-0.5 rounded-md border border-gray-200 flex items-center gap-1 font-medium">
                  Categoría: {CATEGORIES.find(c => c.id === selectedCategory)?.name}
                  <button type="button" aria-label="Quitar filtro de categoría" onClick={() => handleCategoryChange('all')} className="hover:text-red-500 font-bold ml-1">×</button>
                </span>
              )}
              {searchQuery && (
                <span className="bg-white px-2 py-0.5 rounded-md border border-gray-200 flex items-center gap-1 font-medium">
                  "{searchQuery}"
                  <button type="button" aria-label="Limpiar búsqueda" onClick={() => handleSearchChange('')} className="hover:text-red-500 font-bold ml-1">×</button>
                </span>
              )}
              <button
                onClick={handleResetFilters}
                className="ml-auto text-primary font-bold hover:underline"
              >
                Limpiar todo
              </button>
            </div>
          )}

          {/* Products Grid */}
          {filteredProducts.length === 0 ? (
            <div className="bg-white rounded-2xl p-12 text-center border border-gray-100 shadow-sm flex flex-col items-center justify-center">
              <span className="material-symbols-outlined text-6xl text-gray-300 mb-3">search_off</span>
              <h3 className="font-montserrat font-bold text-lg text-surface-dark">
                No se encontraron productos
              </h3>
              <p className="text-sm text-gray-500 mt-1 max-w-md">
                No hay coincidencias para los filtros seleccionados. Intente con otra marca o categoría.
              </p>
              <button
                onClick={handleResetFilters}
                className="mt-4 px-4 py-2 bg-primary text-white text-xs font-semibold rounded-xl hover:bg-primary-dark transition-colors"
              >
                Restablecer filtros
              </button>
            </div>
          ) : (
            <>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {paginatedProducts.map((product) => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </div>

              {/* Pagination Bar */}
              <ProductPagination
                currentPage={currentPage}
                totalPages={totalPages}
                totalItems={filteredProducts.length}
                onPageChange={handlePageChange}
              />
            </>
          )}
        </div>
      </section>
    </div>
  );
}

function ProductHeaderBanner({ totalCount }: { totalCount: number }) {
  return (
    <section className="bg-secondary-darker pt-28 pb-12 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <span className="text-primary-fixed uppercase tracking-widest text-xs font-bold font-montserrat">
              Equipamiento B2B & Mayoreo
            </span>
            <h1 className="font-montserrat font-bold text-2xl sm:text-3xl lg:text-4xl text-white mt-1">
              Catálogo Oficial de Seguridad & Conectividad
            </h1>
            <p className="text-sm text-gray-300 mt-1 max-w-xl">
              Consulte especificaciones oficiales, precios actualizados por volumen y agregue a su orden de cotización directa.
            </p>
          </div>
          <div className="flex items-center gap-2 bg-white/10 px-4 py-2 rounded-xl backdrop-blur-sm self-start md:self-auto border border-white/10">
            <span className="material-symbols-outlined text-emerald-400 text-xl">inventory</span>
            <span className="text-xs font-semibold text-white">
              {totalCount} Referencias Oficiales
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}

function ProductFilterControls({
  selectedBrand,
  setSelectedBrand,
  selectedCategory,
  setSelectedCategory,
}: {
  selectedBrand: string;
  setSelectedBrand: (b: string) => void;
  selectedCategory: CategoryFilter;
  setSelectedCategory: (c: CategoryFilter) => void;
}) {
  return (
    <>
      {/* Filter 1: Brand Selection Pills */}
      <div className="mb-4">
        <div className="flex items-center gap-1.5 mb-2 px-1">
          <span className="material-symbols-outlined text-base text-primary">verified</span>
          <span className="text-xs font-bold text-gray-600 uppercase tracking-wider font-montserrat">
            Filtrar por Marca:
          </span>
        </div>
        <div className="flex items-center gap-2 overflow-x-auto pb-2 scroll-smooth custom-category-scrollbar">
          {BRANDS.map((b) => {
            const isSelected = selectedBrand.toLowerCase() === b.id.toLowerCase();
            const count = b.id === 'all'
              ? PRODUCTS.length
              : PRODUCTS.filter((p) => p.brand.toLowerCase() === b.id.toLowerCase()).length;

            if (b.id === 'all' || !b.logo) {
              return (
                <button
                  key={b.id}
                  onClick={() => setSelectedBrand(b.id)}
                  className={`inline-flex items-center gap-1.5 h-10 px-3.5 py-1.5 rounded-xl font-montserrat text-xs font-semibold whitespace-nowrap transition-all shrink-0 cursor-pointer ${
                    isSelected
                      ? 'bg-secondary text-white shadow-md shadow-secondary/20 scale-[1.02] border border-secondary'
                      : 'bg-white text-gray-700 hover:bg-gray-50 hover:text-secondary border border-gray-200/80 shadow-sm'
                  }`}
                >
                  <span className="material-symbols-outlined text-sm">apps</span>
                  <span>{b.name}</span>
                  <span
                    className={`px-1.5 py-0.5 rounded-full text-[10px] font-bold ${
                      isSelected ? 'bg-white/25 text-white' : 'bg-gray-100 text-gray-600'
                    }`}
                  >
                    {count}
                  </span>
                </button>
              );
            }

            return (
              <button
                key={b.id}
                onClick={() => setSelectedBrand(b.id)}
                title={b.name}
                aria-label={`Filtrar por marca ${b.name}`}
                className={`group inline-flex items-center gap-2 h-10 px-3 py-1 rounded-xl font-montserrat text-xs font-semibold whitespace-nowrap transition-all shrink-0 cursor-pointer bg-white ${
                  isSelected
                    ? 'border-2 border-secondary shadow-md ring-2 ring-secondary/15 scale-[1.03]'
                    : 'border border-gray-200/80 shadow-sm hover:border-gray-300 hover:shadow'
                }`}
              >
                <img
                  src={b.logo}
                  alt={b.name}
                  loading="lazy"
                  className="h-5 sm:h-5.5 w-auto max-w-[85px] sm:max-w-[100px] object-contain transition-transform group-hover:scale-105"
                />
                <span
                  className={`px-1.5 py-0.5 rounded-full text-[10px] font-bold transition-colors ${
                    isSelected ? 'bg-secondary text-white' : 'bg-gray-100 text-gray-600'
                  }`}
                >
                  {count}
                </span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Filter 2: Category Filter Tabs */}
      <div className="relative mb-6">
        <div className="flex items-center justify-between mb-2 px-1">
          <div className="flex items-center gap-1.5">
            <span className="material-symbols-outlined text-base text-primary">category</span>
            <span className="text-xs font-bold text-gray-600 uppercase tracking-wider font-montserrat">
              Línea de Solución:
            </span>
          </div>
          <div className="hidden sm:flex items-center gap-1">
            <button
              type="button"
              onClick={() => {
                const el = document.getElementById('categories-scroll-container');
                if (el) el.scrollBy({ left: -260, behavior: 'smooth' });
              }}
              className="w-7 h-7 rounded-full bg-white border border-gray-200 text-gray-600 hover:text-primary hover:border-primary shadow-sm flex items-center justify-center transition-colors"
              aria-label="Desplazar categorías a la izquierda"
            >
              <span className="material-symbols-outlined text-base">chevron_left</span>
            </button>
            <button
              type="button"
              onClick={() => {
                const el = document.getElementById('categories-scroll-container');
                if (el) el.scrollBy({ left: 260, behavior: 'smooth' });
              }}
              className="w-7 h-7 rounded-full bg-white border border-gray-200 text-gray-600 hover:text-primary hover:border-primary shadow-sm flex items-center justify-center transition-colors"
              aria-label="Desplazar categorías a la derecha"
            >
              <span className="material-symbols-outlined text-base">chevron_right</span>
            </button>
          </div>
        </div>

        <div
          id="categories-scroll-container"
          className="flex items-center gap-2 overflow-x-auto pb-2 pt-1 scroll-smooth custom-category-scrollbar"
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
                className={`inline-flex items-center gap-2 px-3.5 py-2 rounded-xl font-montserrat text-xs font-semibold whitespace-nowrap transition-all shrink-0 cursor-pointer ${
                  isSelected
                    ? 'bg-primary text-white shadow-md shadow-primary/20 scale-[1.02]'
                    : 'bg-white text-gray-700 hover:bg-gray-50 hover:text-primary border border-gray-200/80 shadow-sm'
                }`}
              >
                <span>{cat.name}</span>
                <span
                  className={`px-2 py-0.5 rounded-full text-[10px] font-bold ${
                    isSelected ? 'bg-white/25 text-white' : 'bg-gray-100 text-gray-600'
                  }`}
                >
                  {count}
                </span>
              </button>
            );
          })}
        </div>
      </div>
    </>
  );
}

function ProductPagination({
  currentPage,
  totalPages,
  totalItems,
  onPageChange,
}: {
  currentPage: number;
  totalPages: number;
  totalItems: number;
  onPageChange: (page: number) => void;
}) {
  if (totalPages <= 1) return null;

  return (
    <div className="mt-10 flex flex-col sm:flex-row items-center justify-between gap-4 bg-white rounded-2xl p-4 border border-gray-100 shadow-sm">
      <div className="text-xs text-gray-500">
        Página <strong className="text-gray-800">{currentPage}</strong> de <strong className="text-gray-800">{totalPages}</strong> (Total: {totalItems} productos)
      </div>

      <div className="flex items-center gap-1.5">
        {/* Previous Button */}
        <button
          type="button"
          disabled={currentPage === 1}
          onClick={() => onPageChange(currentPage - 1)}
          className="px-3 py-1.5 rounded-xl border border-gray-200 text-xs font-semibold text-gray-700 hover:bg-gray-50 hover:text-primary disabled:opacity-40 disabled:pointer-events-none transition-colors flex items-center gap-1"
        >
          <span className="material-symbols-outlined text-sm">arrow_back</span>
          Anterior
        </button>

        {/* Page Numbers */}
        <div className="flex items-center gap-1">
          {Array.from({ length: totalPages }, (_, i) => i + 1)
            .filter((p) => p === 1 || p === totalPages || Math.abs(p - currentPage) <= 1)
            .map((p, idx, arr) => {
              const prev = arr[idx - 1];
              const showEllipsis = prev && p - prev > 1;

              return (
                <React.Fragment key={p}>
                  {showEllipsis && (
                    <span className="px-2 text-xs text-gray-400">...</span>
                  )}
                  <button
                    type="button"
                    onClick={() => onPageChange(p)}
                    className={`w-8 h-8 rounded-xl text-xs font-bold transition-all ${
                      currentPage === p
                        ? 'bg-primary text-white shadow-sm shadow-primary/30 scale-105'
                        : 'bg-white border border-gray-200 text-gray-700 hover:bg-gray-50 hover:text-primary'
                    }`}
                  >
                    {p}
                  </button>
                </React.Fragment>
              );
            })}
        </div>

        {/* Next Button */}
        <button
          type="button"
          disabled={currentPage === totalPages}
          onClick={() => onPageChange(currentPage + 1)}
          className="px-3 py-1.5 rounded-xl border border-gray-200 text-xs font-semibold text-gray-700 hover:bg-gray-50 hover:text-primary disabled:opacity-40 disabled:pointer-events-none transition-colors flex items-center gap-1"
        >
          Siguiente
          <span className="material-symbols-outlined text-sm">arrow_forward</span>
        </button>
      </div>
    </div>
  );
}
