import React, { useState, useEffect } from 'react';
import { X, Trash2, Send, MessageCircle } from 'lucide-react';
import { STICKERS, POSTERS } from '../constants';
import { Product } from '../types';

interface WishlistDrawerProps {
  isOpen: boolean;
  onClose: () => void;
}

const WishlistDrawer: React.FC<WishlistDrawerProps> = ({ isOpen, onClose }) => {
  const [wishlistItems, setWishlistItems] = useState<Product[]>([]);
  const [totalPrice, setTotalPrice] = useState(0);

  // Combine all products for lookup
  const allProducts = [...STICKERS, ...POSTERS];

  const loadWishlist = () => {
    const savedIds = JSON.parse(localStorage.getItem('yumecav_wishlist') || '[]');
    const items = allProducts.filter(p => savedIds.includes(p.id));
    setWishlistItems(items);
    
    const total = items.reduce((sum, item) => sum + parseFloat(item.price), 0);
    setTotalPrice(total);
  };

  useEffect(() => {
    loadWishlist();
    window.addEventListener('wishlist-updated', loadWishlist);
    return () => window.removeEventListener('wishlist-updated', loadWishlist);
  }, [isOpen]); // Reload when drawer opens

  const removeItem = (id: number) => {
    const savedIds = JSON.parse(localStorage.getItem('yumecav_wishlist') || '[]');
    const newIds = savedIds.filter((savedId: number) => savedId !== id);
    localStorage.setItem('yumecav_wishlist', JSON.stringify(newIds));
    window.dispatchEvent(new Event('wishlist-updated'));
  };

  const handleBulkOrder = () => {
    if (wishlistItems.length === 0) return;

    const itemsList = wishlistItems.map(item => `• ${item.name} (₹${item.price})`).join('\n');
    const message = `Hey YUMECAV, I've curated a collection of upgrades I'm interested in:\n\n${itemsList}\n\nTotal Value: ~₹${totalPrice.toFixed(2)}\n\nI'd like to discuss ordering this set.`;
    
    const phone = "15550000000";
    const url = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
  };

  return (
    <>
      {/* Backdrop */}
      <div 
        className={`fixed inset-0 bg-black/60 backdrop-blur-sm z-[60] transition-opacity duration-300 ${isOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}
        onClick={onClose}
      />

      {/* Drawer */}
      <div className={`fixed top-0 right-0 h-full w-full md:w-[480px] bg-neutral-900 border-l border-white/10 z-[70] transform transition-transform duration-300 ease-out shadow-2xl flex flex-col ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}>
        
        {/* Header */}
        <div className="p-6 border-b border-white/10 flex justify-between items-center bg-neutral-900/50 backdrop-blur-md sticky top-0 z-10">
          <div>
            <h2 className="text-2xl font-black uppercase tracking-tighter italic">Your Curation</h2>
            <p className="text-xs text-neutral-400 font-mono mt-1">{wishlistItems.length} ITEMS SELECTED</p>
          </div>
          <button onClick={onClose} className="p-2 hover:bg-white/10 rounded-full transition-colors">
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* Content */}
        <div className="flex-1 overflow-y-auto p-6 space-y-4 no-scrollbar">
          {wishlistItems.length === 0 ? (
            <div className="h-full flex flex-col items-center justify-center text-center opacity-50">
              <div className="w-16 h-16 border-2 border-white/20 rounded-full flex items-center justify-center mb-4">
                <Send className="w-6 h-6" />
              </div>
              <p className="font-bold uppercase tracking-widest mb-2">Collection Empty</p>
              <p className="text-sm text-neutral-400 max-w-[200px]">Browse the archive and find items that match your vibe.</p>
              <button onClick={onClose} className="mt-8 text-xs font-bold text-purple-500 hover:text-white transition-colors uppercase tracking-widest border-b border-purple-500 hover:border-white pb-1">
                Start Exploring
              </button>
            </div>
          ) : (
            wishlistItems.map((item) => (
              <div key={item.id} className="flex gap-4 bg-neutral-800/50 border border-white/5 p-3 rounded-xl group hover:border-purple-500/30 transition-colors">
                <div className="w-20 h-20 bg-neutral-800 rounded-lg overflow-hidden shrink-0">
                  <img src={item.imageAfter} alt={item.name} className="w-full h-full object-cover" />
                </div>
                <div className="flex-1 flex flex-col justify-center">
                  <h3 className="font-bold text-sm leading-tight mb-1">{item.name}</h3>
                  <p className="text-xs text-neutral-400 mb-2">{item.tags[0]}</p>
                  <p className="text-sm font-mono text-purple-400">₹{item.price}</p>
                </div>
                <button 
                  onClick={() => removeItem(item.id)}
                  className="p-2 text-neutral-600 hover:text-red-500 transition-colors self-center"
                >
                  <Trash2 className="w-4 h-4" />
                </button>
              </div>
            ))
          )}
        </div>

        {/* Footer */}
        {wishlistItems.length > 0 && (
          <div className="p-6 border-t border-white/10 bg-neutral-900/95 backdrop-blur-md">
            <div className="flex justify-between items-end mb-6">
              <span className="text-neutral-400 text-sm uppercase tracking-wider">Estimated Value</span>
              <span className="text-3xl font-black tracking-tighter">₹{totalPrice.toFixed(2)}</span>
            </div>
            <button 
              onClick={handleBulkOrder}
              className="w-full bg-purple-600 hover:bg-purple-500 text-white py-4 rounded-xl font-bold uppercase tracking-widest flex items-center justify-center gap-3 transition-all hover:scale-[1.02] shadow-lg shadow-purple-900/20"
            >
              <MessageCircle className="w-5 h-5" />
              Inquire About Collection
            </button>
            <p className="text-center text-[10px] text-neutral-500 mt-4 uppercase tracking-wider">
              Secure Checkout via WhatsApp Business
            </p>
          </div>
        )}
      </div>
    </>
  );
};

export default WishlistDrawer;