import React from 'react';
import { MousePointer2, Zap, ShoppingCart } from 'lucide-react';
import { Product } from '../types';

interface ProductCardProps {
  product: Product;
  onOrder: () => void;
}

const ProductCard: React.FC<ProductCardProps> = ({ product, onOrder }) => {
  const isSticker = product.type === 'Sticker';

  return (
    <div
      className={`group relative bg-neutral-800 rounded-2xl overflow-hidden shadow-xl transition-all duration-500 h-full ${
        isSticker
          ? 'hover:shadow-purple-900/10 border border-white/5'
          : 'hover:-translate-y-2 hover:shadow-purple-900/20'
      }`}
    >
      {/* Image Section */}
      <div
        className={`relative ${
          isSticker ? 'h-[160px] md:h-[220px]' : 'h-[400px]'
        } overflow-hidden`}
      >
        <div className="absolute inset-0 bg-gradient-to-t from-neutral-900 via-transparent to-transparent opacity-40 z-10"></div>

        {/* Stickers → Single Image */}
        {isSticker ? (
          <img
            src={product.imageAfter}
            alt={product.name}
            className="absolute inset-0 w-full h-full object-cover grayscale-[20%] group-hover:grayscale-0 transition-all duration-500"
          />
        ) : (
          <>
            {/* Posters → Before */}
            <img
              src={product.imageBefore}
              alt={`${product.name} Before`}
              className="absolute inset-0 w-full h-full object-cover filter grayscale contrast-75 transition-opacity duration-700"
            />

            {/* Hover Hint */}
            <div className="absolute inset-0 flex items-center justify-center z-10 pointer-events-none opacity-100 group-hover:opacity-0 transition-opacity duration-500">
              <div className="bg-black/50 backdrop-blur-md border border-white/10 px-4 py-2 rounded-full flex items-center gap-2">
                <MousePointer2 className="w-4 h-4 animate-bounce" />
                <span className="text-xs font-bold tracking-widest uppercase">
                  Hover
                </span>
              </div>
            </div>

            {/* Posters → After */}
            <img
              src={product.imageAfter}
              alt={`${product.name} After`}
              className="absolute inset-0 w-full h-full object-cover opacity-0 group-hover:opacity-100 transition-all duration-700"
            />
          </>
        )}

        {/* Vibe Score (Posters only) */}
        {!isSticker && (
          <div className="absolute top-4 right-4 z-20 bg-black/40 backdrop-blur-md px-3 py-1 rounded-full border border-white/10 flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
            <Zap className="w-3 h-3 text-yellow-400 fill-yellow-400" />
            <span className="text-[10px] font-bold tracking-wider">
              VIBE: {product.vibeScore}
            </span>
          </div>
        )}
      </div>

      {/* Content */}
      <div
        className={`p-3 md:p-4 transition-transform duration-500 ${
          isSticker ? '' : 'translate-y-12 group-hover:translate-y-0'
        }`}
      >
        <h3
          className={`font-bold mb-1 truncate ${
            isSticker ? 'text-xs md:text-sm' : 'text-2xl'
          }`}
        >
          {product.name}
        </h3>

        {!isSticker && (
          <p className="text-sm text-neutral-300 mb-6 line-clamp-2">
            {product.description}
          </p>
        )}

        {/* Price + Add to Bag */}
        <div
          className={`flex items-center justify-between border-t border-white/5 pt-2 md:pt-3 transition-opacity duration-500 ${
            isSticker
              ? 'opacity-100'
              : 'opacity-0 group-hover:opacity-100 delay-200'
          }`}
        >
          <div>
            <span className="text-[9px] text-neutral-500 uppercase">
              Price
            </span>
            <p
              className={`font-bold ${
                isSticker ? 'text-xs md:text-sm' : 'text-lg'
              }`}
            >
              ₹{product.price}
            </p>
          </div>

          <button
            onClick={onOrder}
            className={`flex items-center gap-2 bg-purple-600 hover:bg-purple-500 text-white rounded-lg font-bold transition-all ${
              isSticker
                ? 'p-1 md:p-1.5 text-[10px]'
                : 'px-5 py-2.5 text-sm'
            }`}
          >
            <ShoppingCart
              className={`${isSticker ? 'w-3 h-3' : 'w-4 h-4'}`}
            />
            {!isSticker && 'Add to Bag'}
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
