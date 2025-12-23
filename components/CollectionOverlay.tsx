import React, { useState, useMemo, useEffect } from 'react';
import { X, Filter, Sparkles } from 'lucide-react';
import { STICKERS, POSTERS } from '../constants';
import ProductCard from './ProductCard';
import { handleOrder } from '../utils';

interface CollectionOverlayProps {
  isOpen: boolean;
  onClose: () => void;
  initialType?: string; // 'All', 'Stickers', 'Poster'
}

const CollectionOverlay: React.FC<CollectionOverlayProps> = ({ isOpen, onClose, initialType = 'All' }) => {
  const [filterType, setFilterType] = useState<string>('All');
  const [filterCategory, setFilterCategory] = useState<string>('All');

  // Lock body scroll when open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      setFilterType(initialType);
      setFilterCategory('All');
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => { document.body.style.overflow = 'unset'; };
  }, [isOpen, initialType]);

  const allProducts = useMemo(() => [...STICKERS, ...POSTERS], []);
  
  // Extract unique categories
  const categories = useMemo(() => {
    const cats = new Set(allProducts.map(p => p.category));
    return ['All', ...Array.from(cats)];
  }, [allProducts]);

  const filteredProducts = useMemo(() => {
    return allProducts.filter(p => {
      const typeMatch = filterType === 'All' 
        ? true 
        : filterType === 'Stickers' 
          ? p.type === 'Sticker' 
          : p.type.includes(filterType); // Matches 'Poster-Single' or 'Poster-Split' if filter is 'Poster'
      
      const catMatch = filterCategory === 'All' || p.category === filterCategory;
      
      return typeMatch && catMatch;
    });
  }, [allProducts, filterType, filterCategory]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[90] bg-neutral-900 flex flex-col md:flex-row overflow-hidden animate-fade-in">
      
      {/* Sidebar / Filters */}
      <div className="w-full md:w-80 bg-black/50 backdrop-blur-xl border-r border-white/10 flex flex-col p-6 z-20">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-2xl font-black uppercase tracking-tighter italic">Explorer</h2>
          <button onClick={onClose} className="p-2 bg-white/10 rounded-full hover:bg-white/20 transition-colors md:hidden">
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="space-y-8 overflow-y-auto no-scrollbar flex-1">
          {/* Type Filter */}
          <div>
            <h3 className="text-xs font-bold text-neutral-500 uppercase tracking-widest mb-4 flex items-center gap-2">
              <Filter className="w-3 h-3" /> Type
            </h3>
            <div className="space-y-2">
              {['All', 'Stickers', 'Poster'].map(type => (
                <button
                  key={type}
                  onClick={() => setFilterType(type)}
                  className={`block w-full text-left px-4 py-3 rounded-lg text-sm font-bold uppercase tracking-wider transition-all ${filterType === type ? 'bg-purple-600 text-white shadow-lg shadow-purple-900/50' : 'hover:bg-white/5 text-neutral-400'}`}
                >
                  {type}
                </button>
              ))}
            </div>
          </div>

          {/* Category Filter */}
          <div>
            <h3 className="text-xs font-bold text-neutral-500 uppercase tracking-widest mb-4 flex items-center gap-2">
              <Sparkles className="w-3 h-3" /> Vibe
            </h3>
            <div className="flex flex-wrap gap-2">
              {categories.map(cat => (
                <button
                  key={cat}
                  onClick={() => setFilterCategory(cat)}
                  className={`px-3 py-2 rounded-md text-xs font-bold uppercase tracking-wider border transition-all ${filterCategory === cat ? 'bg-white text-black border-white' : 'border-white/20 text-neutral-400 hover:border-white/50'}`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-white/10 hidden md:block">
           <button onClick={onClose} className="flex items-center gap-2 text-neutral-500 hover:text-white transition-colors">
             <X className="w-4 h-4" /> Close Explorer
           </button>
        </div>
      </div>

      {/* Main Grid */}
      <div className="flex-1 overflow-y-auto bg-neutral-900 relative p-6 md:p-12 no-scrollbar">
        <div className="max-w-7xl mx-auto">
           <div className="mb-8 flex items-end justify-between">
              <div>
                <h1 className="text-4xl md:text-6xl font-black tracking-tighter mb-2">{filterType === 'All' ? 'FULL ARCHIVE' : filterType.toUpperCase()}</h1>
                <p className="text-neutral-400">Showing {filteredProducts.length} artifacts.</p>
              </div>
           </div>
           
           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {filteredProducts.map(product => (
                <ProductCard key={product.id} product={product} onOrder={handleOrder} />
              ))}
           </div>
           
           {filteredProducts.length === 0 && (
             <div className="py-20 text-center text-neutral-600">
               <p className="text-xl font-mono">NO ARTIFACTS FOUND IN THIS SECTOR.</p>
               <button onClick={() => { setFilterType('All'); setFilterCategory('All'); }} className="mt-4 text-purple-500 hover:text-purple-400 underline underline-offset-4">
                 Reset Sensors
               </button>
             </div>
           )}
        </div>
      </div>
    </div>
  );
};

export default CollectionOverlay;