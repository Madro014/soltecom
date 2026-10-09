import React from 'react';
import { Product } from '../../types';
import ProductCard from '../ProductCard';

interface ContinuousProductCarouselProps {
  products: Product[];
  speed?: number; // Duration in seconds for one loop
}

export default function ContinuousProductCarousel({ products, speed = 120 }: ContinuousProductCarouselProps) {
  // We duplicate the products to create a seamless loop
  const duplicatedProducts = [...products, ...products];

  return (
    <div className="relative w-full overflow-hidden py-6">
      <style>
        {`
          @keyframes marquee {
            0% { transform: translateX(0); }
            100% { transform: translateX(calc(-50% - 12px)); } /* 12px is half of the 24px gap */
          }
          .animate-marquee {
            animation: marquee ${speed}s linear infinite;
          }
          .animate-marquee:hover {
            animation-play-state: paused;
          }
        `}
      </style>
      
      {/* 
        Mask image applies a gradient that fades to transparent on the left and right edges.
        This achieves the "left and right transparent, middle visible" effect.
      */}
      <div 
        className="w-full flex"
        style={{
          maskImage: 'linear-gradient(to right, transparent 0%, rgba(0,0,0,0.1) 5%, black 28%, black 72%, rgba(0,0,0,0.1) 95%, transparent 100%)',
          WebkitMaskImage: 'linear-gradient(to right, transparent 0%, rgba(0,0,0,0.1) 5%, black 28%, black 72%, rgba(0,0,0,0.1) 95%, transparent 100%)',
        }}
      >
        <div 
          className="flex gap-6 min-w-max px-4 animate-marquee hover:[animation-play-state:paused]"
          // react-doctor-disable-next-line react-doctor/no-permanent-will-change
          style={{ willChange: 'transform' }}
        >
          {duplicatedProducts.map((product, index) => (
            <div 
              // react-doctor-disable-next-line react-doctor/no-array-index-as-key
              key={`${product.id}-${index}`}
              className="w-[280px] sm:w-[320px] shrink-0"
            >
              <ProductCard product={product} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
