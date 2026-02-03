import React, { useState } from 'react';
import { X, ShieldCheck, MapPin, User, Phone, Package, ArrowLeft, Mail, CreditCard, Lock } from 'lucide-react';
import { CartItem, ShippingDetails } from '../types';
import { formatPrice, loadRazorpay, triggerOrderProcess } from '../utils';

interface CheckoutPageProps {
  isOpen: boolean;
  onClose: () => void;
  cartItems: CartItem[];
  onSuccess: () => void;
}

const CheckoutPage: React.FC<CheckoutPageProps> = ({ isOpen, onClose, cartItems, onSuccess }) => {
  const [details, setDetails] = useState<ShippingDetails>({ 
    name: '', email: '', address: '', pincode: '', phone: '' 
  });
  const [loading, setLoading] = useState(false);

  const total = cartItems.reduce((sum, item) => sum + parseFloat(item.price) * item.quantity, 0);

  const handlePayment = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    const res = await loadRazorpay();
    if (!res) { alert("SDK_ERROR: GATEWAY_FAIL"); setLoading(false); return; }

    const options = {
      key: "rzp_test_placeholder",
      amount: total * 100, 
      currency: "INR",
      name: "YUMECAV",
      handler: async function (response: any) {
        await triggerOrderProcess({ payment_id: response.razorpay_payment_id, items: cartItems, shipping: details });
        onSuccess();
      },
      prefill: { name: details.name, email: details.email, contact: details.phone },
      theme: { color: "#a855f7" }
    };

    const rzp = new (window as any).Razorpay(options);
    rzp.open();
    setLoading(false);
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[200] bg-black overflow-y-auto animate-fade-in no-scrollbar p-6">
      <div className="max-w-5xl mx-auto py-12">
        <header className="flex justify-between items-center mb-16">
          <button onClick={onClose} className="flex items-center gap-2 text-[10px] font-black uppercase tracking-widest text-neutral-500 hover:text-white">
            <ArrowLeft className="w-3 h-3" /> Back_to_Archive
          </button>
          <div className="text-xl font-black italic">YUME<span className="text-purple-500">CAV</span>_CHECKOUT</div>
        </header>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <form onSubmit={handlePayment} className="space-y-6">
            <div className="flex items-center gap-4 mb-8">
               <Package className="w-6 h-6 text-purple-500" />
               <h2 className="text-3xl font-black uppercase tracking-tighter">Shipping Logistics</h2>
            </div>
            
            <div className="space-y-4">
              <input required placeholder="FULL NAME" className="w-full bg-neutral-900 border border-white/10 rounded-xl p-4 text-xs font-black tracking-widest uppercase focus:border-purple-500 outline-none" value={details.name} onChange={e => setDetails({...details, name: e.target.value})} />
              <input required type="email" placeholder="EMAIL" className="w-full bg-neutral-900 border border-white/10 rounded-xl p-4 text-xs font-black tracking-widest uppercase focus:border-purple-500 outline-none" value={details.email} onChange={e => setDetails({...details, email: e.target.value})} />
              <div className="grid grid-cols-2 gap-4">
                <input required placeholder="PHONE" className="w-full bg-neutral-900 border border-white/10 rounded-xl p-4 text-xs font-black tracking-widest uppercase focus:border-purple-500 outline-none" value={details.phone} onChange={e => setDetails({...details, phone: e.target.value})} />
                <input required placeholder="PINCODE" className="w-full bg-neutral-900 border border-white/10 rounded-xl p-4 text-xs font-black tracking-widest uppercase focus:border-purple-500 outline-none" value={details.pincode} onChange={e => setDetails({...details, pincode: e.target.value})} />
              </div>
              <textarea required placeholder="COMPLETE ADDRESS" className="w-full bg-neutral-900 border border-white/10 rounded-xl p-4 text-xs font-black tracking-widest uppercase focus:border-purple-500 outline-none min-h-[120px]" value={details.address} onChange={e => setDetails({...details, address: e.target.value})} />
            </div>

            <button type="submit" disabled={loading} className="w-full bg-white text-black py-6 rounded-2xl font-black uppercase tracking-[0.2em] hover:bg-purple-600 hover:text-white transition-all">
              {loading ? 'PROCESSING...' : `Proceed to Payment (${formatPrice(total)})`}
            </button>
          </form>

          <div className="bg-neutral-900/50 rounded-3xl p-8 border border-white/5 h-fit">
            <h3 className="text-xs font-black uppercase tracking-widest text-neutral-500 mb-6 flex items-center gap-2">
              <ShieldCheck className="w-4 h-4" /> Order_Summary
            </h3>
            <div className="space-y-4 mb-8">
              {cartItems.map(item => (
                <div key={item.id} className="flex justify-between items-center text-[10px] font-black uppercase">
                  <span className="text-neutral-400">{item.name} x{item.quantity}</span>
                  <span>{formatPrice(parseFloat(item.price) * item.quantity)}</span>
                </div>
              ))}
            </div>
            <div className="border-t border-white/10 pt-6 flex justify-between items-end">
               <span className="text-xs font-black uppercase tracking-widest">Total Manifest</span>
               <span className="text-3xl font-black tracking-tighter text-purple-500">{formatPrice(total)}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CheckoutPage;