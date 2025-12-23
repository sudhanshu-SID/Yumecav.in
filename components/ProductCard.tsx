import React, { useState, useEffect } from 'react';
import { MousePointer2, Zap, MessageCircle, Heart } from 'lucide-react';
import { Product } from '../types';

interface ProductCardProps {
  product: Product;
  onOrder: (name: string) => void;
}

const ProductCard: React.FC<ProductCardProps> = ({ product, onOrder }) => {
  const [isWishlisted, setIsWishlisted] = useState(false);

  useEffect(() => {
    // Load wishlist state from local storage on mount
    const loadWishlist = () => {
      const wishlist = JSON.parse(localStorage.getItem('yumecav_wishlist') || '[]');
      setIsWishlisted(wishlist.includes(product.id));
    };

    loadWishlist();
    
    // Listen for updates from other components (like the drawer)
    window.addEventListener('wishlist-updated', loadWishlist);
    return () => window.removeEventListener('wishlist-updated', loadWishlist);
  }, [product.id]);

  const toggleWishlist = (e: React.MouseEvent) => {
    e.stopPropagation(); // Prevent bubbling
    const wishlist = JSON.parse(localStorage.getItem('yumecav_wishlist') || '[]');
    
    if (isWishlisted) {
      // Remove from wishlist
      const newWishlist = wishlist.filter((id: number) => id !== product.id);
      localStorage.setItem('yumecav_wishlist', JSON.stringify(newWishlist));
      setIsWishlisted(false);
    } else {
      // Add to wishlist
      if (!wishlist.includes(product.id)) {
        wishlist.push(product.id);
        localStorage.setItem('yumecav_wishlist', JSON.stringify(wishlist));
      }
      setIsWishlisted(true);
    }
    
    // Dispatch event to notify Navbar and Drawer
    window.dispatchEvent(new Event('wishlist-updated'));
  };

  return (
    <div className="group relative bg-neutral-800 rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl hover:shadow-purple-900/20 transition-all duration-500 hover:-translate-y-2">
      <div className="relative h-[400px] overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-t from-neutral-900 via-transparent to-transparent opacity-60 z-10"></div>
        
        {/* Wishlist Button */}
        <button
          onClick={toggleWishlist}
          className={`absolute top-4 left-4 z-30 p-2.5 rounded-full border backdrop-blur-md transition-all duration-300 ${
            isWishlisted 
              ? 'bg-purple-500/20 border-purple-500 text-purple-500 opacity-100 scale-100' 
              : 'bg-black/40 border-white/10 text-white opacity-0 group-hover:opacity-100 hover:bg-white hover:text-black scale-90 group-hover:scale-100'
          }`}
          aria-label={isWishlisted ? "Remove from wishlist" : "Add to wishlist"}
        >
          <Heart className={`w-5 h-5 ${isWishlisted ? 'fill-current' : ''}`} />
        </button>

        {/* BEFORE Image (Boring/Default) */}
        <img 
          src={product.imageBefore} 
          alt={`${product.name} Before`} 
          className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 filter grayscale contrast-75 opacity-100"
        />
        
        {/* Visual Cue Overlay (Only visible on Before state) */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10 opacity-100 group-hover:opacity-0 transition-opacity duration-500 pointer-events-none">
           <div className="bg-black/50 backdrop-blur-md border border-white/10 px-4 py-2 rounded-full flex items-center gap-2">
             <MousePointer2 className="w-4 h-4 animate-bounce" />
             <span className="text-xs font-bold tracking-widest uppercase">Hover to Elevate</span>
           </div>
        </div>

        {/* AFTER Image (Elevated/Colorful) - Fades in on Hover */}
        <img 
          src={product.imageAfter} 
          alt={`${product.name} After`} 
          className="absolute inset-0 w-full h-full object-cover transition-all duration-700 opacity-0 group-hover:opacity-100 group-hover:scale-110 group-hover:rotate-1"
        />

        <div className="absolute top-4 right-4 z-20 bg-black/40 backdrop-blur-md px-3 py-1 rounded-full border border-white/10 flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <Zap className="w-3 h-3 text-yellow-400 fill-yellow-400" />
          <span className="text-xs font-bold tracking-wider">VIBE: {product.vibeScore}/10</span>
        </div>
      </div>
      
      <div className="absolute bottom-0 left-0 right-0 p-6 z-20 translate-y-12 group-hover:translate-y-0 transition-transform duration-500">
        <div className="flex flex-wrap gap-2 mb-3 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">
          {product.tags.map((tag, i) => (
            <span key={i} className="text-[10px] font-bold uppercase tracking-wider bg-white/10 backdrop-blur-sm px-2 py-1 rounded text-neutral-300 border border-white/5">
              {tag}
            </span>
          ))}
        </div>
        <h3 className="text-2xl font-bold mb-1 leading-tight drop-shadow-lg">{product.name}</h3>
        <p className="text-sm text-neutral-300 mb-6 line-clamp-2 drop-shadow-md">{product.description}</p>
        <div className="flex items-center justify-between border-t border-white/10 pt-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-200">
          <div className="flex flex-col">
            <span className="text-xs text-neutral-500 uppercase tracking-wider">Price</span>
            <span className="font-bold text-lg text-white">${product.price}</span>
          </div>
          <button 
            onClick={() => onOrder(product.name)}
            className="flex items-center gap-2 bg-purple-600 hover:bg-purple-500 text-white px-5 py-2.5 rounded-xl font-bold text-sm transition-colors shadow-lg shadow-purple-900/40"
          >
            <MessageCircle className="w-4 h-4" />
            Order
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;