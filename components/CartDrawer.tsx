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

  const progressPercentage = Math.min((cartTotal / FREE_SHIP_THRESHOLD) * 100, 100);
  const amountToUnlock = Math.max(MIN_ORDER - cartTotal, 0);
  const amountToFreeShip = Math.max(FREE_SHIP_THRESHOLD - cartTotal, 0);

  const lowestPriceProducts = useMemo(() => {
    const allProducts = [...STICKERS, ...POSTERS];
    return allProducts.sort((a, b) => parseFloat(a.price) - parseFloat(b.price)).slice(0, 4);
  }, []);

  return (
    <>
      <div 
        className={`fixed inset-0 bg-black/60 backdrop-blur-sm z-[100] transition-opacity duration-500 ${isCartOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}
        onClick={() => setIsCartOpen(false)}
      />

      <div className={`fixed top-0 right-0 h-full w-full md:w-[420px] bg-neutral-900 border-l border-white/10 z-[110] transform transition-transform duration-500 shadow-2xl flex flex-col ${isCartOpen ? 'translate-x-0' : 'translate-x-full'}`}>
        
        <div className="p-6 border-b border-white/10 flex justify-between items-center bg-black/20 backdrop-blur-md">
          <div className="flex items-center gap-3">
             <div className="p-2 bg-purple-600/20 rounded-lg border border-purple-500/30">
               <ShoppingBag className="w-5 h-5 text-purple-500" />
             </div>
             <div>
               <h2 className="text-xl font-black uppercase tracking-tighter italic leading-none">The Bag</h2>
               <p className="text-[10px] text-neutral-500 font-bold tracking-widest uppercase mt-1">Status: {cartItems.length} ARTIFACTS</p>
             </div>
          </div>
          <button onClick={() => setIsCartOpen(false)} className="p-2 hover:bg-white/5 rounded-full transition-all group">
            <X className="w-6 h-6 group-hover:rotate-90 transition-transform" />
          </button>
        </div>

        <div className="p-6 bg-black/10 border-b border-white/5">
          <div className="flex justify-between items-center mb-3">
            {cartTotal < MIN_ORDER ? (
               <span className="text-[10px] font-black uppercase tracking-[0.15em] text-orange-400">Add ₹{amountToUnlock} for Checkout Protocol</span>
            ) : (
               <span className="text-[10px] font-black uppercase tracking-[0.15em] text-green-400">Protocol Unlocked</span>
            )}
          </div>
          <div className="h-1.5 w-full bg-white/5 rounded-full overflow-hidden">
            <div className="h-full transition-all duration-700 bg-purple-500" style={{ width: `${progressPercentage}%` }} />
          </div>
        </div>

        <div className="flex-1 overflow-y-auto no-scrollbar p-6 space-y-6">
          {cartItems.length === 0 ? (
            <div className="py-20 flex flex-col items-center justify-center text-center opacity-40">
              <Package className="w-12 h-12 mb-4" />
              <p className="font-black uppercase tracking-[0.3em] text-xs">No Assets Selected</p>
            </div>
          ) : (
            cartItems.map((item) => (
              <div key={item.id} className="flex gap-4 group">
                <div className="w-20 h-20 bg-neutral-800 rounded-xl overflow-hidden shrink-0 border border-white/5">
                  <img src={item.imageAfter} className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all" />
                </div>
                <div className="flex-1 flex flex-col justify-between py-1">
                  <div className="flex justify-between">
                    <h4 className="font-black text-[10px] uppercase">{item.name}</h4>
                    <button onClick={() => removeFromCart(item.id)} className="text-neutral-600 hover:text-red-500"><Trash2 className="w-3.5 h-3.5" /></button>
                  </div>
                  <div className="flex justify-between items-center mt-2">
                    <div className="flex items-center bg-white/5 rounded-lg border border-white/5 p-0.5">
                      <button onClick={() => updateQuantity(item.id, 'dec')} className="p-1"><Minus className="w-3 h-3" /></button>
                      <span className="w-6 text-center text-[10px] font-black">{item.quantity}</span>
                      <button onClick={() => updateQuantity(item.id, 'inc')} className="p-1"><Plus className="w-3 h-3" /></button>
                    </div>
                    <span className="font-black text-[10px]">{formatPrice(parseFloat(item.price) * item.quantity)}</span>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>

        <div className="p-8 border-t border-white/10 bg-black/40 backdrop-blur-xl shrink-0">
          <div className="flex justify-between items-end mb-6">
            <span className="text-neutral-500 text-[10px] font-black uppercase tracking-[0.4em]">Subtotal</span>
            <span className="text-2xl font-black tracking-tighter tabular-nums">{formatPrice(cartTotal)}</span>
          </div>
          <button 
            disabled={cartTotal < MIN_ORDER}
            onClick={() => { setIsCartOpen(false); onCheckout(); }}
            className={`w-full py-5 rounded-2xl font-black uppercase tracking-[0.2em] text-xs flex items-center justify-center gap-3 transition-all ${cartTotal < MIN_ORDER ? 'bg-neutral-800 text-neutral-600' : 'bg-white text-black hover:bg-purple-600 hover:text-white'}`}
          >
            Authorize Purchase <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </>
  );
};

export default CartDrawer;