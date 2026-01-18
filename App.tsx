import React, { useState } from 'react';
import { Layers, Image as ImageIcon, ChevronRight } from 'lucide-react';
import { NOISE_SVG_DATA_URI, STICKERS, POSTERS, LOOKBOOKS } from './constants';
import { handleOrder } from './utils';

// Components
import CustomCursor from './components/CustomCursor';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import InfiniteMarquee from './components/InfiniteMarquee';
import DropCountdown from './components/DropCountdown';
import ProductCard from './components/ProductCard';
import ExploreCard from './components/ExploreCard';
import ShopTheLookInteractive from './components/ShopTheLookInteractive';
import SystemTerminal from './components/SystemTerminal';
import UGCSection from './components/UGCSection';
import Footer from './components/Footer';
import WishlistDrawer from './components/WishlistDrawer';
import SearchCommandPalette from './components/SearchCommandPalette';
import CollectionOverlay from './components/CollectionOverlay';

const App: React.FC = () => {
  const [isWishlistOpen, setIsWishlistOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isCollectionOpen, setIsCollectionOpen] = useState(false);
  const [collectionInitialType, setCollectionInitialType] = useState('All');

  // Show all 30 stickers as requested
  const featuredStickers = STICKERS.slice(0, 30);
  // Keep posters limited for focus
  const featuredPosters = POSTERS.slice(0, 30);

  const openCollection = (type: string) => {
    setCollectionInitialType(type);
    setIsCollectionOpen(true);
  };

  return (
    <div className="min-h-screen bg-neutral-900 text-white font-sans selection:bg-purple-500 selection:text-white overflow-x-hidden cursor-none">
      
      {/* --- Global Effects --- */}
      <div 
        className="fixed inset-0 pointer-events-none z-[60] mix-blend-overlay opacity-40"
        style={{ backgroundImage: `url("${NOISE_SVG_DATA_URI}")` }}
      ></div>

      <CustomCursor />

      {/* --- Navigation --- */}
      <Navbar 
        onOpenWishlist={() => setIsWishlistOpen(true)} 
        onOpenSearch={() => setIsSearchOpen(true)}
        onOpenCollection={() => openCollection('All')}
      />

      {/* --- Overlays --- */}
      <WishlistDrawer isOpen={isWishlistOpen} onClose={() => setIsWishlistOpen(false)} />
      <SearchCommandPalette isOpen={isSearchOpen} onClose={() => setIsSearchOpen(false)} />
      <CollectionOverlay 
        isOpen={isCollectionOpen} 
        onClose={() => setIsCollectionOpen(false)} 
        initialType={collectionInitialType}
      />

      {/* --- Hero Section --- */}
      <HeroSection />

      {/* --- Infinite Marquee 1 --- */}
      <InfiniteMarquee text="ELEVATE YOUR REALITY • CUSTOM SKINS • LIMITED DROPS • ALL INDIA SHIPPING • DON'T BE BORING •" />

      {/* --- Drop Countdown --- */}
      <DropCountdown />

      {/* --- Manifesto --- */}
      <section id="vibe" className="py-24 bg-neutral-900 border-b border-white/5 relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-purple-900/10 rounded-full blur-[120px] pointer-events-none"></div>
        <div className="container mx-auto px-6 text-center max-w-4xl relative z-10">
          <h2 className="text-xs font-bold tracking-[0.3em] text-purple-500 mb-6 uppercase">The Philosophy</h2>
          <p className="text-4xl md:text-6xl font-black leading-tight mb-8 tracking-tighter">
            "DEFAULT IS <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">DEATH.</span>"
          </p>
          <p className="text-neutral-400 text-lg md:text-xl leading-relaxed max-w-2xl mx-auto">
            Your devices are an extension of your mind. Why leave them factory standard? 
            We create aesthetic upgrades for the new generation. Not just stickers—identity layers.
          </p>
        </div>
      </section>

      {/* --- Collection Section --- */}
      <section id="collection" className="py-24 bg-neutral-900 relative">
        <div className="container mx-auto px-6">
          <div className="mb-20">
             <h2 className="text-4xl md:text-6xl font-black tracking-tighter mb-4">THE ARCHIVE</h2>
             <div className="h-1 w-24 bg-purple-500 mb-6"></div>
             <p className="text-neutral-400 uppercase tracking-widest text-xs font-bold">Featured artifacts from the current timeline.</p>
          </div>

          {/* Stickers & Skins - Horizontal Scroll */}
          <div className="mb-24">
            <div className="flex flex-col md:flex-row justify-between items-end mb-10 gap-4 border-b border-white/10 pb-4">
              <div className="flex items-center gap-3">
                <Layers className="text-purple-500 w-6 h-6" />
                <h3 className="text-2xl font-bold tracking-widest uppercase italic">Stickers & Skins</h3>
              </div>
              <div className="flex items-center gap-6">
                <div className="hidden md:flex items-center gap-2 text-[10px] text-neutral-500 font-bold uppercase tracking-widest animate-pulse">
                  <span>Scroll Right</span>
                  <ChevronRight className="w-3 h-3" />
                </div>
                <span className="text-[10px] font-mono text-neutral-500 uppercase">Sector: 01_Skins</span>
              </div>
            </div>
            
            <div className="relative group/scroll">
              {/* Fade out mask on the right */}
              <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-neutral-900 to-transparent z-10 pointer-events-none opacity-0 md:group-hover/scroll:opacity-100 transition-opacity"></div>
              
              <div className="flex overflow-x-auto no-scrollbar gap-4 pb-6 px-1 scroll-smooth">
                {featuredStickers.map((product) => (
                  <div key={product.id} className="flex-none w-[160px] md:w-[220px]">
                    <ProductCard product={product} onOrder={handleOrder} />
                  </div>
                ))}
                {/* Explore More Card at the end of the scroll */}
                <div className="flex-none w-[160px] md:w-[220px]">
                  <ExploreCard 
                    title="Archive" 
                    subtitle="View Full Archive" 
                    onClick={() => openCollection('Stickers')}
                    bgImage="https://images.unsplash.com/photo-1614624532983-4ce03382d63d?q=80&w=2070&auto=format&fit=crop"
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="w-full h-px bg-gradient-to-r from-transparent via-purple-900/50 to-transparent mb-24"></div>

          {/* Posters - Matching Sector label */}
          <div>
            <div className="flex flex-col md:flex-row justify-between items-end mb-10 gap-4 border-b border-white/10 pb-4">
              <div className="flex items-center gap-3">
                <ImageIcon className="text-purple-500 w-6 h-6" />
                <h3 className="text-2xl font-bold tracking-widest uppercase italic">Wall Art</h3>
              </div>
              <span className="text-[10px] font-mono text-neutral-500 uppercase">Sector: 02_Prints</span>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {featuredPosters.map((product) => (
                <ProductCard key={product.id} product={product} onOrder={handleOrder} />
              ))}
              <ExploreCard 
                title="Gallery" 
                subtitle="Browse All Prints" 
                onClick={() => openCollection('Poster')}
                bgImage="https://images.unsplash.com/photo-1550684848-fac1c5b4e853?q=80&w=2070&auto=format&fit=crop"
              />
            </div>
          </div>
        </div>
      </section>

      {/* --- Infinite Marquee 2 --- */}
      <InfiniteMarquee text="EST 2025 • DESIGNED BY THE IDEAL FIRM • MANUFACTURED ON EARTH • FUTURE READY • YUMECAV •" reverse />

      {/* --- Limited Drop Collages --- */}
      <section id="drops" className="py-24 bg-neutral-900">
         <div className="container mx-auto px-6">
            <div className="mb-16 text-center max-w-2xl mx-auto">
               <div className="inline-flex items-center gap-2 border border-purple-500/50 rounded-full px-4 py-1 mb-6 animate-pulse">
                  <span className="w-2 h-2 bg-purple-500 rounded-full"></span>
                  <span className="text-[10px] font-bold uppercase tracking-widest text-purple-400">Limited Time Only</span>
               </div>
               <h2 className="text-4xl md:text-6xl font-black tracking-tighter uppercase mb-6">Collage Drops</h2>
               <p className="text-neutral-400 text-lg">
                 Curated sets of posters and skins available for a limited window. One click to get the full aesthetic.
               </p>
            </div>
            
            <div className="space-y-24">
              {LOOKBOOKS.map((look) => (
                <div key={look.id}>
                  <div className="flex items-end gap-4 mb-8">
                    <span className="text-6xl font-black text-white/10">{look.id.toString().padStart(2, '0')}</span>
                    <h3 className="text-2xl md:text-3xl font-bold uppercase tracking-widest mb-2">{look.title}</h3>
                  </div>
                  <ShopTheLookInteractive image={look.image} hotspots={look.hotspots} />
                </div>
              ))}
            </div>
         </div>
      </section>

      {/* --- System Terminal --- */}
      <SystemTerminal />

      {/* --- UGC Grid --- */}
      <UGCSection />

      {/* --- Footer --- */}
      <Footer />
    </div>
  );
};

export default App;