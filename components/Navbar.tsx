import React, { useState, useEffect } from 'react';
import { Menu, X, Search, Grid, ShoppingCart } from 'lucide-react';
import { useCart } from '../CartContext';


interface NavbarProps {
  onOpenSearch: () => void;
  onOpenCollection: () => void;
}

const Navbar: React.FC<NavbarProps> = ({ onOpenSearch, onOpenCollection }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { cartItems, setIsCartOpen } = useCart();
  const cartCount = cartItems.reduce(
  (sum, item) => sum + item.quantity,
  0
);


  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
   
    window.addEventListener('scroll', handleScroll);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
      
    };
  }, []);

  return (
    <>
      <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-neutral-900/90 backdrop-blur-md py-4 border-b border-white/10' : 'bg-transparent py-6'}`}>
        <div className="container mx-auto px-6 flex justify-between items-center">
          <div className="text-2xl font-black tracking-tighter italic relative group cursor-pointer">
            YUME<span className="text-purple-500">CAV</span>.
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-purple-500 transition-all duration-300 group-hover:w-full"></span>
          </div>
          
          <div className="hidden md:flex space-x-8 text-sm font-medium tracking-widest uppercase items-center">
            {/* Added Explore Collection trigger */}
            <button onClick={onOpenCollection} className="hover:text-purple-400 transition-colors relative group flex items-center gap-2">
              <Grid className="w-4 h-4" />
              Explore
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-purple-500 transition-all duration-300 group-hover:w-full"></span>
            </button>

            {['Drops', 'Data-Bank'].map((item) => (
              <a key={item} href={`#${item.toLowerCase().replace(' ', '-')}`} className="hover:text-purple-400 transition-colors relative group">
                {item}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-purple-500 transition-all duration-300 group-hover:w-full"></span>
              </a>
            ))}
            
            <div className="w-px h-6 bg-white/20 mx-2"></div>

            <button 
              onClick={onOpenSearch}
              className="group hover:text-purple-500 transition-colors p-1"
              aria-label="Search"
            >
              <Search className="w-5 h-5 group-hover:scale-110 transition-transform" />
            </button>

            <button 
              onClick= {() => setIsCartOpen(true)}
              className="relative group hover:text-purple-500 transition-colors p-1"
              aria-label="Cart"
            >
              <ShoppingCart className={`w-5 h-5 ${cartCount > 0 ? 'fill-purple-500 text-purple-500' : ''} group-hover:scale-110 transition-transform`} />
              {cartCount > 0 && (
              <span className="absolute -top-1 -right-1 w-3 h-3 bg-white text-black text-[9px] font-bold flex items-center justify-center rounded-full">
              {cartCount}
              </span>
              )}
            </button>
          </div>

          <div className="flex items-center gap-6 md:hidden">
             <button onClick={onOpenSearch} className="text-white hover:text-purple-500 transition-colors">
               <Search className="w-5 h-5" />
             </button>
             
             <button 
                onClick={() => setIsCartOpen(true)}
                className="relative text-white hover:text-purple-500 transition-colors"
              >
              <ShoppingCart className={`w-5 h-5 ${cartCount > 0 ? 'fill-purple-500 text-purple-500' : ''}`} />
              {cartCount > 0 && (
                <span className="absolute -top-1 -right-1 w-3 h-3 bg-white text-black text-[9px] font-bold flex items-center justify-center rounded-full">
                  {cartCount}
                </span>
              )}
            </button>
            <button className="text-white hover:text-purple-500 transition-colors" onClick={() => setIsMenuOpen(!isMenuOpen)}>
              {isMenuOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="fixed inset-0 z-40 bg-neutral-900 flex flex-col justify-center items-center space-y-8 animate-fade-in">
          <button onClick={() => { setIsMenuOpen(false); onOpenCollection(); }} className="text-2xl font-bold uppercase tracking-widest hover:text-purple-500 transition-colors flex items-center gap-3">
             <Grid className="w-6 h-6" /> Explore
          </button>
          {['Drops', 'Data-Bank'].map((item) => (
            <a key={item} href={`#${item.toLowerCase().replace(' ', '-')}`} onClick={() => setIsMenuOpen(false)} className="text-2xl font-bold uppercase tracking-widest hover:text-purple-500 transition-colors">
              {item}
            </a>
          ))}
        </div>
      )}
    </>
  );
};

export default Navbar;