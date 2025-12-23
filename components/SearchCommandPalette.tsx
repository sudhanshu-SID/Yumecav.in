import React, { useState, useEffect, useRef } from 'react';
import { Search, X, ArrowRight, Heart } from 'lucide-react';
import { STICKERS, POSTERS } from '../constants';
import { Product } from '../types';
import { handleOrder } from '../utils';

interface SearchCommandPaletteProps {
  isOpen: boolean;
  onClose: () => void;
}

const SearchCommandPalette: React.FC<SearchCommandPaletteProps> = ({ isOpen, onClose }) => {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState<Product[]>([]);
  const inputRef = useRef<HTMLInputElement>(null);
  
  const allProducts = [...STICKERS, ...POSTERS];

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => inputRef.current?.focus(), 100);
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => { document.body.style.overflow = 'unset'; };
  }, [isOpen]);

  useEffect(() => {
    if (query.trim() === '') {
      setResults([]);
      return;
    }

    const filtered = allProducts.filter(p => 
      p.name.toLowerCase().includes(query.toLowerCase()) || 
      p.category.toLowerCase().includes(query.toLowerCase()) ||
      p.tags.some(t => t.toLowerCase().includes(query.toLowerCase()))
    );
    setResults(filtered);
  }, [query]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[80] flex items-start justify-center pt-24 px-4">
      {/* Backdrop */}
      <div className="absolute inset-0 bg-neutral-900/90 backdrop-blur-md" onClick={onClose}></div>

      {/* Palette */}
      <div className="relative w-full max-w-2xl bg-black border border-white/20 rounded-2xl shadow-2xl overflow-hidden flex flex-col max-h-[70vh]">
        {/* Search Input */}
        <div className="flex items-center p-4 border-b border-white/10">
          <Search className="w-5 h-5 text-neutral-500 mr-3" />
          <input 
            ref={inputRef}
            type="text" 
            placeholder="Search stickers, posters, vibes..." 
            className="flex-1 bg-transparent border-none outline-none text-white placeholder-neutral-500 text-lg"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />
          <button onClick={onClose} className="p-1 hover:text-purple-500 transition-colors">
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Results */}
        <div className="overflow-y-auto no-scrollbar">
          {query === '' && (
            <div className="p-8 text-center text-neutral-500 text-sm">
              <p className="mb-2 uppercase tracking-widest">Suggestions</p>
              <div className="flex flex-wrap justify-center gap-2 mt-4">
                 {['Cyberpunk', 'Anime', 'Minimalist', 'Split Canvas', 'Holographic'].map(tag => (
                   <button 
                    key={tag} 
                    onClick={() => setQuery(tag)}
                    className="px-3 py-1 bg-white/5 hover:bg-white/10 rounded-full border border-white/5 hover:border-purple-500/50 transition-all text-xs"
                   >
                     {tag}
                   </button>
                 ))}
              </div>
            </div>
          )}

          {query !== '' && results.length === 0 && (
            <div className="p-8 text-center text-neutral-500">
               No results found for "{query}"
            </div>
          )}

          {results.map((product) => (
            <div key={product.id} className="flex items-center gap-4 p-4 hover:bg-white/5 border-b border-white/5 group transition-colors cursor-pointer" onClick={() => handleOrder(product.name)}>
              <img src={product.imageAfter} alt={product.name} className="w-12 h-12 rounded object-cover" />
              <div className="flex-1">
                <h4 className="font-bold text-sm text-white">{product.name}</h4>
                <div className="flex items-center gap-2 mt-1">
                  <span className="text-[10px] uppercase tracking-wider bg-purple-900/30 text-purple-400 px-1.5 py-0.5 rounded">{product.category}</span>
                  <span className="text-xs text-neutral-500">{product.type}</span>
                </div>
              </div>
              <div className="flex items-center gap-4 opacity-0 group-hover:opacity-100 transition-opacity">
                <span className="font-mono text-sm">${product.price}</span>
                <ArrowRight className="w-4 h-4 text-purple-500" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SearchCommandPalette;
