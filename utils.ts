
export const loadRazorpay = (): Promise<boolean> => {
  return new Promise((resolve) => {
    const script = document.createElement('script');
    script.src = 'https://checkout.razorpay.com/v1/checkout.js';
    script.onload = () => resolve(true);
    script.onerror = () => resolve(false);
    document.body.appendChild(script);
  });
};

export const formatPrice = (price: string | number) => {
  return new Intl.NumberFormat('en-IN', {
    style: 'currency',
    currency: 'INR',
    maximumFractionDigits: 0
  }).format(Number(price));
};

// Placeholder for Supabase/Resend trigger
export const triggerOrderProcess = async (orderData: any) => {
  console.log("Triggering Supabase storage & Resend email...", orderData);
  // Implementation would use supabase.from('orders').insert(...)
};

// Fix: Implement missing handleOrder utility used for manual inquiries/direct ordering
/**
 * Initiates a direct order inquiry via WhatsApp.
 * Used for specific items or general business inquiries (B2B).
 */
export const handleOrder = (item?: string) => {
  const message = item 
    ? `Hey YUMECAV, I'm interested in: ${item}. Can I get more details or place an order?`
    : `Hey YUMECAV, I'd like to discuss a custom order or inquiry.`;
  
  // Business WhatsApp placeholder
  const phone = "917896409312"; 
  const url = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
  window.open(url, '_blank');
};

