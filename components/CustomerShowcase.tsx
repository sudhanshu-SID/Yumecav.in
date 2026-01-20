import React from 'react';
import { SHOWCASE_ROW_1, SHOWCASE_ROW_2 } from '../constants';

const ShowcaseCard: React.FC<{ imageUrl: string; user: string }> = ({ imageUrl, user }) => (
  <div className="relative group w-[150px] md:w-[240px] aspect-[4/5] overflow-hidden rounded-xl flex-none bg-neutral-800 border border-white/5">
    <img 
      src={imageUrl} 
      alt={`Showcase by ${user}`} 
      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
    />
    {/* Minimal overlay for text readability on hover */}
    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
    <div className="absolute bottom-3 left-3 z-10 opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-2 group-hover:translate-y-0">
      <p className="text-purple-400 font-bold text-[10px] md:text-xs tracking-widest">{user}</p>
    </div>
  </div>
);

const CustomerShowcase: React.FC = () => {
  // Double each unique array to ensure perfect infinite looping for marquee effect
  const track1Images = [...SHOWCASE_ROW_1, ...SHOWCASE_ROW_1];
  const track2Images = [...SHOWCASE_ROW_2, ...SHOWCASE_ROW_2];

  return (
    <section className="py-20 bg-neutral-900 border-t border-white/5 overflow-hidden">
      <div className="container mx-auto px-6 mb-12 text-center">
        <h2 className="text-xs font-bold tracking-[0.4em] text-purple-500 mb-4 uppercase">In The Wild</h2>
        <p className="text-3xl md:text-5xl font-black tracking-tighter uppercase">Community Upgrades</p>
      </div>

      <div className="relative space-y-4 md:space-y-6">
        {/* Edge Masking Effect - Fade out on left and right */}
        <div 
          className="absolute inset-0 z-20 pointer-events-none"
          style={{ 
            maskImage: 'linear-gradient(to right, transparent, black 10%, black 90%, transparent)',
            WebkitMaskImage: 'linear-gradient(to right, transparent, black 10%, black 90%, transparent)'
          }}
        ></div>

        {/* Track 1: Scroll Left - Unique Set 1 */}
        <div className="flex w-max gap-3 md:gap-6 animate-scroll-left hover:[animation-play-state:paused] whitespace-nowrap">
          {track1Images.map((img, idx) => (
            <ShowcaseCard key={`${img.id}-top-${idx}`} imageUrl={img.url} user={img.user} />
          ))}
        </div>

        {/* Track 2: Scroll Right - Unique Set 2 */}
        <div className="flex w-max gap-3 md:gap-6 animate-scroll-right hover:[animation-play-state:paused] whitespace-nowrap">
          {track2Images.map((img, idx) => (
            <ShowcaseCard key={`${img.id}-bottom-${idx}`} imageUrl={img.url} user={img.user} />
          ))}
        </div>
      </div>

      <div className="mt-12 text-center">
        <p className="text-neutral-500 font-mono text-[9px] uppercase tracking-widest">
          SYSTEM_SCAN: 100% COMPATIBILITY DETECTED
        </p>
      </div>
    </section>
  );
};

export default CustomerShowcase;