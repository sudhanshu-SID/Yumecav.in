import React from 'react';
import { ArrowRight, Grid } from 'lucide-react';

interface ExploreCardProps {
  title: string;
  subtitle: string;
  onClick: () => void;
  bgImage?: string;
}

const ExploreCard: React.FC<ExploreCardProps> = ({ title, subtitle, onClick, bgImage }) => {
  return (
    <div 
      onClick={onClick}
      className="group relative bg-neutral-800 rounded-3xl overflow-hidden shadow-xl cursor-pointer hover:shadow-2xl hover:shadow-purple-900/20 transition-all duration-500 h-full flex flex-col items-center justify-center text-center p-6 border border-white/5 hover:border-purple-500/50"
    >
      {/* Optional Background Image with heavy overlay */}
      {bgImage && (
        <>
          <img src={bgImage} alt="" className="absolute inset-0 w-full h-full object-cover opacity-20 group-hover:opacity-30 transition-opacity duration-700 grayscale" />
          <div className="absolute inset-0 bg-neutral-900/80"></div>
        </>
      )}

      <div className="relative z-10 flex flex-col items-center">
        <div className="w-10 h-10 md:w-16 md:h-16 rounded-full border border-white/20 flex items-center justify-center mb-4 md:mb-6 group-hover:scale-110 group-hover:bg-white group-hover:text-black transition-all duration-300">
          <ArrowRight className="w-4 h-4 md:w-6 md:h-6" />
        </div>
        
        <h3 className="text-xl md:text-3xl font-black uppercase tracking-tighter mb-1 md:mb-2 group-hover:text-purple-400 transition-colors leading-none">
          {title}
        </h3>
        
        <p className="text-[8px] md:text-sm text-neutral-400 font-medium tracking-widest uppercase group-hover:text-white transition-colors">
          {subtitle}
        </p>

        <div className="mt-4 md:mt-8 flex items-center gap-2 text-[8px] md:text-xs font-bold uppercase tracking-widest opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-300">
          <Grid className="w-3 h-3 md:w-4 md:h-4" />
          <span>Access</span>
        </div>
      </div>
    </div>
  );
};

export default ExploreCard;