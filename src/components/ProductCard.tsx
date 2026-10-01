import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Product } from '../types';
import { useCartStore } from '../store/useCartStore';

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  const { addItem } = useCartStore();

  const formatCOP = (val: number) => {
    return '$' + val.toLocaleString('es-CO') + ' COP';
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 15 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.3 }}
      whileHover={{ y: -5 }}
      className="group rounded-2xl bg-white p-4 shadow-sm hover:shadow-xl transition-shadow duration-300 flex flex-col justify-between border border-gray-100"
    >
      <div className="flex flex-col">
        {/* Product Image */}
        <Link to={`/productos/${product.id}`} className="relative w-full aspect-[4/3] rounded-xl bg-white overflow-hidden mb-3 flex items-center justify-center block border border-gray-100/70 p-3">
          <img 
            src={product.image} 
            alt={product.name} 
            loading="lazy"
            decoding="async"
            className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-300"
          />
          <span className="absolute top-2 left-2 px-2 py-0.5 rounded-full bg-primary text-white text-[11px] font-semibold shadow">
            En Stock
          </span>
          {product.tags?.[0] && (
            <span className="absolute top-2 right-2 px-2 py-0.5 rounded-full bg-surface-high text-surface-dark text-[11px] font-bold shadow">
              {product.tags[0]}
            </span>
          )}
        </Link>

        {/* Brand & Title */}
        <span className="text-[11px] font-bold text-primary uppercase tracking-wide">
          {product.brand}
        </span>
        <Link to={`/productos/${product.id}`}>
          <h3 className="font-montserrat font-semibold text-sm sm:text-base text-surface-dark mt-1 line-clamp-2 hover:text-primary transition-colors">
            {product.name}
          </h3>
        </Link>
        <p className="text-xs text-gray-500 mt-1 line-clamp-2">
          {product.shortDesc}
        </p>

        {/* Quick Specs Snippet */}
        <div className="mt-3 pt-2 border-t border-gray-50 space-y-1 text-xs text-gray-600">
          {Object.entries(product.specs).slice(0, 2).map(([key, val]) => (
            <div key={key} className="flex justify-between">
              <span className="text-gray-400">{key}:</span>
              <span className="font-medium text-gray-800 text-right">{val}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Pricing & CTA */}
      <div className="pt-4 mt-3 border-t border-gray-100 flex flex-col gap-2">
        <div className="flex items-baseline justify-between">
          <span className="text-[11px] text-gray-400 font-medium">Precio B2B</span>
          <span className="font-montserrat font-bold text-base text-surface-dark">
            {formatCOP(product.wholesalePrice || product.price)}
          </span>
        </div>

        <div className="grid grid-cols-2 gap-2">
          <Link
            to={`/productos/${product.id}`}
            className="py-2 px-2 rounded-xl bg-gray-100 hover:bg-gray-200 text-gray-700 text-xs font-semibold text-center transition-colors flex items-center justify-center gap-1"
          >
            <span>Ver detalle</span>
          </Link>
          <button
            onClick={() => addItem(product, 1)}
            className="py-2 px-2 rounded-xl bg-primary hover:bg-primary-light text-white text-xs font-semibold transition-colors flex items-center justify-center gap-1 shadow-sm"
          >
            <span className="material-symbols-outlined text-sm">add_shopping_cart</span>
            <span>Añadir</span>
          </button>
        </div>
      </div>
    </motion.div>
  );
}
