import React from 'react';
import { Hotspot } from '../types';
import { useCart } from '../CartContext';


interface ShopTheLookProps {
  image: string;
  hotspots: Hotspot[];
}

const ShopTheLookInteractive: React.FC<ShopTheLookProps> = ({ image, hotspots }) => {
  const { addToCart, setIsCartOpen } = useCart();

  return (
    <div className="relative w-full h-[500px] md:h-[700px] bg-neutral-800 rounded-3xl overflow-hidden group">
      <img 
        src={image} 
        alt="Setup" 
        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 opacity-80 group-hover:opacity-60"
      />
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <h3 className="text-4xl font-black uppercase tracking-tighter text-white/10 group-hover:text-white/0 transition-colors duration-500">Hover to Shop</h3>
      </div>
      {hotspots.map((spot) => (
        <div 
          key={spot.id}
          className="absolute z-20 group/hotspot"
          style={{ top: `${spot.top}%`, left: `${spot.left}%` }}
        >
          <div className="relative -translate-x-1/2 -translate-y-1/2 cursor-pointer p-4">
             <div className="w-4 h-4 bg-white rounded-full shadow-[0_0_20px_rgba(255,255,255,0.8)] animate-pulse"></div>
             <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-8 h-8 border border-white/50 rounded-full animate-ping"></div>
          </div>
          <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-4 w-48 bg-black/80 backdrop-blur-md border border-white/20 rounded-xl p-3 opacity-0 group-hover/hotspot:opacity-100 translate-y-2 group-hover/hotspot:translate-y-0 transition-all duration-300 pointer-events-none group-hover/hotspot:pointer-events-auto text-center">
            <h4 className="font-bold text-sm mb-1">{spot.name}</h4>
            <p className="text-purple-400 text-xs font-bold mb-2">{spot.price}</p>
            <button 
              onClick={(e) => {
              e.stopPropagation();
               addToCart({
                 name: spot.name,
                 price: spot.price,
                 imageAfter: image,
                 imageBefore: image,
                 description: '',
                 vibeScore: 0,
                 tags: [],
                 category: 'Look',
                 id: spot.id,
                type: 'Poster-Single',
              });
              setIsCartOpen(true);
             }}

              className="text-[10px] uppercase font-bold tracking-wider bg-white text-black px-3 py-1.5 rounded-full hover:bg-purple-500 hover:text-white transition-colors w-full"
            >
              Get It
            </button>
            <div className="absolute top-full left-1/2 -translate-x-1/2 border-8 border-transparent border-t-black/80"></div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ShopTheLookInteractive;
