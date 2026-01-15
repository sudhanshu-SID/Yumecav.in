import React, { useState, useEffect } from 'react';
import { MousePointer2, Zap, MessageCircle, Heart } from 'lucide-react';
import { Product } from '../types';

interface ProductCardProps {
  product: Product;
  onOrder: (name: string) => void;
}

const ProductCard: React.FC<ProductCardProps> = ({ product, onOrder }) => {
  const [isWishlisted, setIsWishlisted] = useState(false);
  const isSticker = product.type === 'Sticker';

  useEffect(() => {
    const loadWishlist = () => {
      const wishlist = JSON.parse(localStorage.getItem('yumecav_wishlist') || '[]');
      setIsWishlisted(wishlist.includes(product.id));
    };

    loadWishlist();
    window.addEventListener('wishlist-updated', loadWishlist);
    return () => window.removeEventListener('wishlist-updated', loadWishlist);
  }, [product.id]);

  const toggleWishlist = (e: React.MouseEvent) => {
    e.stopPropagation();
    const wishlist = JSON.parse(localStorage.getItem('yumecav_wishlist') || '[]');
    
    if (isWishlisted) {
      const newWishlist = wishlist.filter((id: number) => id !== product.id);
      localStorage.setItem('yumecav_wishlist', JSON.stringify(newWishlist));
      setIsWishlisted(false);
    } else {
      if (!wishlist.includes(product.id)) {
        wishlist.push(product.id);
        localStorage.setItem('yumecav_wishlist', JSON.stringify(wishlist));
      }
      setIsWishlisted(true);
    }
    window.dispatchEvent(new Event('wishlist-updated'));
  };

  return (
    <div className={`group relative bg-neutral-800 rounded-2xl overflow-hidden shadow-xl transition-all duration-500 ${isSticker ? 'hover:shadow-purple-900/10' : 'hover:-translate-y-2 hover:shadow-purple-900/20'}`}>
      <div className={`relative ${isSticker ? 'h-[200px] md:h-[280px]' : 'h-[400px]'} overflow-hidden`}>
        <div className="absolute inset-0 bg-gradient-to-t from-neutral-900 via-transparent to-transparent opacity-40 z-10"></div>
        
        {/* Wishlist Button */}
        <button
          onClick={toggleWishlist}
          className={`absolute top-2 left-2 z-30 p-1.5 rounded-full border backdrop-blur-md transition-all duration-300 ${
            isWishlisted 
              ? 'bg-purple-500/20 border-purple-500 text-purple-500 opacity-100 scale-100' 
              : 'bg-black/40 border-white/10 text-white opacity-0 group-hover:opacity-100 scale-90 group-hover:scale-100'
          }`}
          aria-label={isWishlisted ? "Remove from wishlist" : "Add to wishlist"}
        >
          <Heart className={`w-3.5 h-3.5 ${isWishlisted ? 'fill-current' : ''}`} />
        </button>

        {/* Stickers: Fixed After Image | Others: Before/After Hover */}
        {isSticker ? (
          <img 
            src={product.imageAfter} 
            alt={product.name} 
            className="absolute inset-0 w-full h-full object-cover grayscale-[20%] group-hover:grayscale-0 transition-all duration-500"
          />
        ) : (
          <>
            <img 
              src={product.imageBefore} 
              alt={`${product.name} Before`} 
              className="absolute inset-0 w-full h-full object-cover filter grayscale contrast-75 opacity-100 transition-opacity duration-700"
            />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10 opacity-100 group-hover:opacity-0 transition-opacity duration-500 pointer-events-none">
               <div className="bg-black/50 backdrop-blur-md border border-white/10 px-4 py-2 rounded-full flex items-center gap-2">
                 <MousePointer2 className="w-4 h-4 animate-bounce" />
                 <span className="text-xs font-bold tracking-widest uppercase text-white">Hover</span>
               </div>
            </div>
            <img 
              src={product.imageAfter} 
              alt={`${product.name} After`} 
              className="absolute inset-0 w-full h-full object-cover transition-all duration-700 opacity-0 group-hover:opacity-100"
            />
          </>
        )}

        {/* Vibe Score - Smaller for Stickers */}
        {!isSticker && (
          <div className="absolute top-4 right-4 z-20 bg-black/40 backdrop-blur-md px-3 py-1 rounded-full border border-white/10 flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <Zap className="w-3 h-3 text-yellow-400 fill-yellow-400" />
            <span className="text-[10px] font-bold tracking-wider text-white">VIBE: {product.vibeScore}</span>
          </div>
        )}
      </div>
      
      {/* Content Area - Adjusted for compact Sticker Grid */}
      <div className={`p-4 z-20 transition-transform duration-500 ${isSticker ? '' : 'translate-y-12 group-hover:translate-y-0'}`}>
        <h3 className={`font-bold mb-1 leading-tight drop-shadow-lg truncate ${isSticker ? 'text-sm md:text-base' : 'text-2xl'}`}>
          {product.name}
        </h3>
        
        {!isSticker && (
           <p className="text-sm text-neutral-300 mb-6 line-clamp-2 drop-shadow-md">{product.description}</p>
        )}

        <div className={`flex items-center justify-between border-t border-white/5 pt-3 transition-opacity duration-500 ${isSticker ? 'opacity-100' : 'opacity-0 group-hover:opacity-100 delay-200'}`}>
          <div className="flex flex-col">
            <span className="text-[9px] text-neutral-500 uppercase tracking-wider">Price</span>
            <span className={`font-bold text-white ${isSticker ? 'text-sm' : 'text-lg'}`}>${product.price}</span>
          </div>
          <button 
            onClick={() => onOrder(product.name)}
            className={`flex items-center gap-2 bg-purple-600 hover:bg-purple-500 text-white rounded-lg font-bold transition-all ${isSticker ? 'p-1.5' : 'px-5 py-2.5 text-sm'}`}
            title="Order on WhatsApp"
          >
            <MessageCircle className={`${isSticker ? 'w-4 h-4' : 'w-4 h-4'}`} />
            {!isSticker && "Order"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
