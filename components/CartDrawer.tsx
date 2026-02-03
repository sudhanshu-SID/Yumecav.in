import React, { useMemo } from 'react';
import { X, Trash2, ShoppingBag, ArrowRight, Minus, Plus, Zap, Package } from 'lucide-react';
import { useCart } from '../CartContext';
import { formatPrice } from '../utils';
import { STICKERS, POSTERS } from '../constants';
import { Product } from '../types';

interface CartDrawerProps {
  onCheckout: () => void;
}

export const CartDrawer: React.FC<CartDrawerProps> = ({ onCheckout }) => {
  const { 
    cartItems, 
    cartTotal, 
    isCartOpen, 
    setIsCartOpen, 
    removeFromCart, 
    updateQuantity, 
    addToCart,
    MIN_ORDER,
    FREE_SHIP_THRESHOLD
  } = useCart();

  // Calculate Progress Bar %
  const progressPercentage = Math.min((cartTotal / FREE_SHIP_THRESHOLD) * 100, 100);

  // Logic for Messages
  const amountToUnlock = Math.max(MIN_ORDER - cartTotal, 0);
  const amountToFreeShip = Math.max(FREE_SHIP_THRESHOLD - cartTotal, 0);

  // Fetch real "Lowest AF Deals" from constants
  const lowestPriceProducts = useMemo(() => {
    const allProducts = [...STICKERS, ...POSTERS];
    // Sort by price ascending and take top 4
    return allProducts
      .sort((a, b) => parseFloat(a.price) - parseFloat(b.price))
      .slice(0, 4);
  }, []);

  return (
    <>
      {/* Overlay */}
      <div 
        className={`fixed inset-0 bg-black/60 backdrop-blur-sm z-[100] transition-opacity duration-500 ${isCartOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}
        onClick={() => setIsCartOpen(false)}
      />

      {/* The Main Drawer */}
      <div className={`fixed top-0 right-0 h-full w-full md:w-[420px] bg-neutral-900 border-l border-white/10 z-[110] cursor-auto
 transform transition-transform duration-500 cubic-bezier(0.25, 0.8, 0.25, 1) shadow-2xl flex flex-col ${isCartOpen ? 'translate-x-0' : 'translate-x-full'}`}>
        
        {/* HEADER */}
        <div className="p-6 border-b border-white/10 flex justify-between items-center bg-black/20 backdrop-blur-md">
          <div className="flex items-center gap-3">
             <div className="p-2 bg-purple-600/20 rounded-lg border border-purple-500/30">
               <ShoppingBag className="w-5 h-5 text-purple-500" />
             </div>
             <div>
               <h2 className="text-xl font-black uppercase tracking-tighter italic leading-none">Your Bag</h2>
               <p className="text-[10px] text-neutral-500 font-bold tracking-widest uppercase mt-1">Items: {cartItems.length}</p>
             </div>
          </div>
          <button onClick={() => setIsCartOpen(false)} className="p-2 hover:bg-white/5 rounded-full transition-all group">
            <X className="w-6 h-6 group-hover:rotate-90 transition-transform" />
          </button>
        </div>

        {/* GAMIFICATION BAR */}
        <div className="p-6 bg-black/10 border-b border-white/5">
          <div className="flex justify-between items-center mb-3">
            {cartTotal < MIN_ORDER ? (
               <span className="text-[10px] font-black uppercase tracking-[0.15em] text-orange-400 flex items-center gap-2">
                 <Zap className="w-3 h-3 animate-pulse" /> Add ₹{amountToUnlock} to unlock checkout
               </span>
            ) : cartTotal < FREE_SHIP_THRESHOLD ? (
               <span className="text-[10px] font-black uppercase tracking-[0.15em] text-purple-400 flex items-center gap-2">
                 <Package className="w-3 h-3" /> ₹{amountToFreeShip} for Free Shipping
               </span>
            ) : (
               <span className="text-[10px] font-black uppercase tracking-[0.15em] text-green-400 flex items-center gap-2">
                 <Zap className="w-3 h-3 fill-green-400" /> Free Shipping Unlocked!
               </span>
            )}
          </div>
          
          <div className="h-1.5 w-full bg-white/5 rounded-full overflow-hidden">
            <div 
              className="h-full transition-all duration-700 shadow-[0_0_10px_rgba(168,85,247,0.3)]" 
              style={{ 
                width: `${progressPercentage}%`, 
                background: cartTotal < MIN_ORDER ? '#f97316' : '#a855f7' 
              }} 
            />
          </div>
        </div>

        {/* SCROLLABLE AREA */}
        <div className="flex-1 overflow-y-auto no-scrollbar">
          {/* CART ITEMS */}
          <div className="p-6 space-y-6">
            {cartItems.length === 0 ? (
              <div className="py-20 flex flex-col items-center justify-center text-center opacity-40">
                <Package className="w-12 h-12 mb-4 stroke-1" />
                <p className="font-black uppercase tracking-[0.3em] text-xs">Bag is Empty</p>
                <button onClick={() => setIsCartOpen(false)} className="mt-4 text-[10px] text-purple-500 border-b border-purple-500 uppercase font-black tracking-widest pb-1">Start Upgrading</button>
              </div>
            ) : (
              cartItems.map((item) => (
                <div key={item.id} className="flex gap-4 group">
                  <div className="w-20 h-20 bg-neutral-800 rounded-xl overflow-hidden shrink-0 border border-white/5 group-hover:border-purple-500/30 transition-colors">
                    <img src={item.imageAfter} alt={item.name} className="w-full h-full object-cover grayscale-[20%] group-hover:grayscale-0 transition-all duration-500" />
                  </div>
                  <div className="flex-1 flex flex-col justify-between py-0.5">
                    <div className="flex justify-between items-start">
                      <div>
                        <h4 className="font-black text-[10px] uppercase tracking-tighter leading-tight">{item.name}</h4>
                        <p className="text-[8px] text-neutral-500 uppercase font-bold tracking-widest mt-0.5">{item.category}</p>
                      </div>
                      <button onClick={() => removeFromCart(item.id)} className="text-neutral-600 hover:text-red-500 transition-colors">
                        <Trash2 className="w-3.5 h-3.5" />
                      </button>
                    </div>
                    
                    <div className="flex justify-between items-center">
                      <div className="flex items-center bg-white/5 rounded-lg border border-white/5 p-0.5">
                        <button onClick={() => updateQuantity(item.id, 'dec')} className="p-1 hover:bg-white/10 rounded-md transition-colors"><Minus className="w-3 h-3" /></button>
                        <span className="w-6 text-center text-[10px] font-black">{item.quantity}</span>
                        <button onClick={() => updateQuantity(item.id, 'inc')} className="p-1 hover:bg-white/10 rounded-md transition-colors"><Plus className="w-3 h-3" /></button>
                      </div>
                      <span className="font-black text-[10px] tracking-widest">{formatPrice(parseFloat(item.price) * item.quantity)}</span>
                    </div>
                  </div>
                </div>
              ))
            )}
          </div>

          {/* CROSS SELL (Lowest AF Deals) - Now inside the scrollable container */}
          <div className="p-6 bg-black/20 border-t border-white/5 mt-auto">
            <div className="flex items-center gap-2 mb-4">
               <span className="text-orange-400">🔥</span>
               <h3 className="text-[10px] font-black uppercase tracking-[0.2em] text-neutral-500">Lowest AF Deals</h3>
            </div>
            <div className="flex gap-4 overflow-x-auto no-scrollbar pb-2">
              {lowestPriceProducts.map(item => (
                <div key={item.id} className="min-w-[130px] bg-neutral-800 rounded-xl p-3 border border-white/5 hover:border-purple-500/50 transition-all group">
                  <div className="w-full h-20 rounded-lg overflow-hidden mb-3">
                    <img src={item.imageAfter} alt={item.name} className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all" />
                  </div>
                  <div className="text-[9px] font-black uppercase tracking-tight mb-1 truncate">{item.name}</div>
                  <div className="text-[10px] font-black text-purple-400 mb-2">{formatPrice(item.price)}</div>
                  <button 
                    className="w-full bg-white text-black py-1.5 rounded-lg text-[9px] font-black uppercase tracking-widest hover:bg-purple-600 hover:text-white transition-all active:scale-95" 
                    onClick={() => addToCart(item as Product)}
                  >
                    + Add
                  </button>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* FOOTER */}
        <div className="p-8 border-t border-white/10 bg-black/40 backdrop-blur-xl shrink-0">
          <div className="flex justify-between items-end mb-6">
            <div>
              <span className="text-neutral-500 text-[10px] font-black uppercase tracking-[0.4em]">Subtotal</span>
              <p className="text-[9px] text-neutral-600 font-bold uppercase tracking-widest mt-1 italic">Taxes Calculated at protocol</p>
            </div>
            <span className="text-2xl font-black tracking-tighter tabular-nums">{formatPrice(cartTotal)}</span>
          </div>
          
          <button 
            className={`w-full py-5 rounded-2xl font-black uppercase tracking-[0.2em] text-xs flex items-center justify-center gap-3 transition-all active:scale-95 shadow-2xl ${cartTotal < MIN_ORDER ? 'bg-neutral-800 text-neutral-600 cursor-not-allowed border border-white/5' : 'bg-white text-black hover:bg-purple-600 hover:text-white'}`}
            disabled={cartTotal < MIN_ORDER}
            onClick={() => { setIsCartOpen(false); onCheckout(); }}
          >
            {cartTotal < MIN_ORDER ? `Locked 🔒 Add ₹${amountToUnlock}` : `Secure Checkout • ${formatPrice(cartTotal)}`}
            {cartTotal >= MIN_ORDER && <ArrowRight className="w-4 h-4" />}
          </button>
        </div>

      </div>
    </>
  );
};

export default CartDrawer;
