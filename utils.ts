export const handleOrder = (productName: string): void => {
  const phone = "7896409312"; 
  const message = `Hey YUMECAV, I'm ready to elevate my style. I'm interested in the "${productName}" custom order.`;
  const url = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
  window.open(url, '_blank');
};
