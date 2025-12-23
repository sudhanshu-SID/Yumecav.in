import React, { useState, useEffect } from 'react';
import { ArrowRight } from 'lucide-react';

const HeroSection: React.FC = () => {
  const words = ["Laptop", "Bike", "Workspace", "Console", "Reality"];
  const [index, setIndex] = useState(0);
  const [fade, setFade] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setFade(false);
      setTimeout(() => {
        setIndex((prev) => (prev + 1) % words.length);
        setFade(true);
      }, 500); 
    }, 3000); 
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative h-screen flex flex-col justify-center items-center overflow-hidden">
      <div className="absolute top-[-20%] left-[-10%] w-[50vw] h-[50vw] bg-purple-600/20 rounded-full blur-[120px] pointer-events-none animate-pulse"></div>
      <div className="absolute bottom-[-20%] right-[-10%] w-[40vw] h-[40vw] bg-blue-600/10 rounded-full blur-[100px] pointer-events-none"></div>

      <div className="z-10 text-center px-4">
        <h2 className="text-lg md:text-xl font-medium tracking-[0.5em] text-neutral-400 mb-6 uppercase">
          Est. 2024 • The Curated Lifestyle
        </h2>
        <h1 className="text-6xl md:text-8xl lg:text-9xl font-black tracking-tighter mb-8 leading-none">
          ELEVATE YOUR<br />
          <span className={`text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600 transition-opacity duration-500 block mt-2 ${fade ? 'opacity-100' : 'opacity-0'}`}>
            {words[index]}
          </span>
        </h1>
        <a href="#collection" className="group relative inline-flex items-center gap-3 px-8 py-4 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full text-white font-bold tracking-widest hover:bg-white hover:text-black transition-all duration-300 mt-8 hover:scale-105">
          EXPLORE THE DROP
          <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
        </a>
      </div>
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce text-neutral-500">
        <span className="text-xs uppercase tracking-widest">Scroll</span>
      </div>
    </div>
  );
};

export default HeroSection;
