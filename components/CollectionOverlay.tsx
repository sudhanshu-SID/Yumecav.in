import React, { useState, useMemo, useEffect } from 'react';
import { X, Filter, Sparkles, LayoutGrid, StickyNote } from 'lucide-react';
import { STICKERS, POSTERS } from '../constants';
import ProductCard from './ProductCard';
import { handleOrder } from '../utils';

interface CollectionOverlayProps {
  isOpen: boolean;
  onClose: () => void;
  initialType?: string; // Now strictly 'Stickers' | 'Poster'
}

const CollectionOverlay: React.FC<CollectionOverlayProps> = ({ isOpen, onClose, initialType = 'Stickers' }) => {
  // Default to Stickers if 'All' is passed or if initialType is missing
  const [filterType, setFilterType] = useState<string>(initialType === 'All' ? 'Stickers' : initialType);
  const [filterCategory, setFilterCategory] = useState<string>('All');

  // Lock body scroll when open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      // Sync with initialType but enforce Stickers/Poster only
      const targetType = initialType === 'All' ? 'Stickers' : initialType;
      setFilterType(targetType);
      setFilterCategory('All');
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => { document.body.style.overflow = 'unset'; };
  }, [isOpen, initialType]);

  // CRITICAL: Reset category when type changes to prevent "mixing up" results
  useEffect(() => {
    setFilterCategory('All');
  }, [filterType]);

  const allProducts = useMemo(() => [...STICKERS, ...POSTERS], []);
  
  // Extract unique categories based on current type to prevent cross-contamination
  const categories = useMemo(() => {
    const currentPool = allProducts.filter(p => {
      if (filterType === 'Stickers') return p.type === 'Sticker';
      return p.type.includes('Poster');
    });
    const cats = new Set(currentPool.map(p => p.category));
    return ['All', ...Array.from(cats)];
  }, [allProducts, filterType]);

  const filteredProducts = useMemo(() => {
    return allProducts.filter(p => {
      const typeMatch = filterType === 'Stickers' 
          ? p.type === 'Sticker' 
          : p.type.includes('Poster');
      
      const catMatch = filterCategory === 'All' || p.category === filterCategory;
      
      return typeMatch && catMatch;
    });
  }, [allProducts, filterType, filterCategory]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[90] bg-neutral-900 flex flex-col md:flex-row overflow-hidden animate-fade-in">
      
      {/* Sidebar (Desktop) / Top Bar (Mobile) */}
      <div className="w-full md:w-80 bg-black/80 backdrop-blur-xl border-b md:border-b-0 md:border-r border-white/10 flex flex-col p-4 md:p-6 z-20 shrink-0">
        <div className="flex justify-between items-center mb-4 md:mb-8">
          <h2 className="text-xl md:text-2xl font-black uppercase tracking-tighter italic">Explorer</h2>
          <button onClick={onClose} className="p-2 bg-white/10 rounded-full hover:bg-white/20 transition-colors">
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="flex md:flex-col gap-4 md:gap-8 overflow-x-auto md:overflow-y-auto no-scrollbar flex-1 items-start md:items-stretch">
          {/* Type Filter - Horizontal on mobile, Vertical on desktop */}
          <div className="shrink-0 md:shrink">
            <h3 className="hidden md:flex text-xs font-bold text-neutral-500 uppercase tracking-widest mb-4 items-center gap-2">
              <Filter className="w-3 h-3" /> Select Type
            </h3>
            <div className="flex md:flex-col gap-2">
              {[
                { id: 'Stickers', label: 'Stickers', icon: StickyNote },
                { id: 'Poster', label: 'Posters', icon: LayoutGrid }
              ].map(type => (
                <button
                  key={type.id}
                  onClick={() => setFilterType(type.id)}
                  className={`flex items-center gap-3 px-4 py-2 md:py-3 rounded-lg text-xs md:text-sm font-bold uppercase tracking-wider transition-all whitespace-nowrap ${filterType === type.id ? 'bg-purple-600 text-white shadow-lg shadow-purple-900/50' : 'bg-white/5 hover:bg-white/10 text-neutral-400 border border-transparent'}`}
                >
                  <type.icon className="w-4 h-4" />
                  {type.label}
                </button>
              ))}
            </div>
          </div>

          <div className="hidden md:block w-full h-px bg-white/10"></div>

          {/* Category Filter */}
          <div className="shrink-0 md:shrink pb-2">
            <h3 className="hidden md:flex text-xs font-bold text-neutral-500 uppercase tracking-widest mb-4 items-center gap-2">
              <Sparkles className="w-3 h-3" /> Filter Vibe
            </h3>
            <div className="flex md:flex-wrap gap-2">
              {categories.map(cat => (
                <button
                  key={cat}
                  onClick={() => setFilterCategory(cat)}
                  className={`px-3 py-2 rounded-md text-[10px] md:text-xs font-bold uppercase tracking-wider border transition-all whitespace-nowrap ${filterCategory === cat ? 'bg-white text-black border-white' : 'border-white/20 text-neutral-400 hover:border-white/50 bg-black/20'}`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-4 pt-4 border-t border-white/10 hidden md:block">
           <p className="text-[10px] font-mono text-neutral-600 uppercase tracking-tighter">System Status: Active</p>
        </div>
      </div>

      {/* Main Grid */}
      <div className="flex-1 overflow-y-auto bg-neutral-900 relative p-4 md:p-12 no-scrollbar">
        <div className="max-w-7xl mx-auto">
           <div className="mb-6 md:mb-10 flex items-end justify-between border-b border-white/5 pb-4 md:pb-6">
              <div>
                <h1 className="text-3xl md:text-6xl font-black tracking-tighter mb-1 md:mb-2">{filterType.toUpperCase()}</h1>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                  <p className="text-xs md:text-sm text-neutral-400 font-mono">Found {filteredProducts.length} artifacts matching current sensor profile.</p>
                </div>
              </div>
           </div>
           
           {/* Grid with Key to force re-render and prevent mixing */}
           <div 
            key={`${filterType}-${filterCategory}`}
            className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3 md:gap-6 animate-fade-in"
           >
              {filteredProducts.map(product => (
                <div key={product.id} className="h-full">
                  <ProductCard product={product} onOrder={handleOrder} />
                </div>
              ))}
           </div>
           
           {filteredProducts.length === 0 && (
             <div className="py-20 text-center text-neutral-600 flex flex-col items-center">
               <div className="w-16 h-16 border border-neutral-800 rounded-full flex items-center justify-center mb-4 opacity-50">
                  <Filter className="w-6 h-6" />
               </div>
               <p className="text-lg font-mono uppercase tracking-widest mb-4">No artifacts detected.</p>
               <button 
                onClick={() => { setFilterCategory('All'); }} 
                className="px-6 py-2 bg-white/5 hover:bg-white/10 rounded-full text-purple-500 border border-purple-500/30 transition-all text-xs font-bold uppercase tracking-widest"
               >
                 Reset Vibe Filters
               </button>
             </div>
           )}
        </div>
      </div>
    </div>
  );
};

export default CollectionOverlay;