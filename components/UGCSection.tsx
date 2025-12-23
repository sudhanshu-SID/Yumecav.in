import React from 'react';
import { Instagram } from 'lucide-react';
import { UGC_POSTS } from '../constants';
import { UGCPost } from '../types';

interface UGCCardProps {
  post: UGCPost;
  height: string;
}

const UGCCard: React.FC<UGCCardProps> = ({ post, height }) => (
  <div className={`relative group w-full ${height} overflow-hidden rounded-2xl border border-white/5`}>
     {/* Image */}
     <img src={post.img} alt={post.user} className="w-full h-full object-cover grayscale contrast-125 transition-all duration-700 group-hover:grayscale-0 group-hover:scale-110" />
     
     {/* Scanner Line (Only on hover) */}
     <div className="absolute inset-0 bg-gradient-to-b from-transparent via-purple-500/10 to-transparent translate-y-[-100%] group-hover:translate-y-[100%] transition-transform duration-1000 z-10 pointer-events-none"></div>

     {/* Static Overlay (Always visible) */}
     <div className="absolute top-4 left-4 z-20">
        <div className="bg-black/50 backdrop-blur-sm px-2 py-1 rounded border border-white/10 flex items-center gap-2">
           <span className="w-1.5 h-1.5 bg-red-500 rounded-full animate-pulse"></span>
           <span className="text-[10px] font-mono text-white/80 uppercase">REC</span>
        </div>
     </div>

     {/* Hover Info */}
     <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-60 group-hover:opacity-90 transition-opacity duration-300"></div>
     
     <div className="absolute bottom-0 left-0 w-full p-6 translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
        <div className="flex justify-between items-end">
           <div>
              <p className="text-purple-400 text-xs font-bold tracking-widest mb-1">{post.user}</p>
              <p className="text-white font-bold text-lg leading-none">{post.product}</p>
           </div>
           <span className="text-neutral-500 text-[10px] font-mono">{post.time}</span>
        </div>
     </div>
  </div>
);

const UGCSection: React.FC = () => {
  return (
    <section className="py-24 bg-black relative border-t border-white/10 overflow-hidden">
       {/* Section Header with 'Live' indicator */}
       <div className="container mx-auto px-6 mb-16 flex justify-between items-end">
          <div>
            <div className="flex items-center gap-2 mb-2">
               <span className="relative flex h-3 w-3">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-3 w-3 bg-red-500"></span>
                </span>
                <span className="text-red-500 text-xs font-bold tracking-widest uppercase">Live Feed</span>
            </div>
            <h2 className="text-4xl md:text-6xl font-black tracking-tighter uppercase leading-none">
              Signals from<br/>The Underground
            </h2>
          </div>
          <div className="hidden md:block text-right">
             <p className="text-neutral-500 font-mono text-xs">HASH: #YUMECAV_WILD</p>
             <p className="text-neutral-500 font-mono text-xs">LOC: GLOBAL_NET</p>
          </div>
       </div>

       {/* Asymmetric Grid */}
       <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-8">
          {/* Column 1 */}
          <div className="flex flex-col gap-8">
             <UGCCard post={UGC_POSTS[0]} height="h-[400px]" />
             <UGCCard post={UGC_POSTS[1]} height="h-[300px]" />
          </div>
          {/* Column 2 (Offset) */}
          <div className="flex flex-col gap-8 md:mt-12">
             <UGCCard post={UGC_POSTS[2]} height="h-[350px]" />
             <UGCCard post={UGC_POSTS[3]} height="h-[450px]" />
          </div>
          {/* Column 3 */}
          <div className="flex flex-col gap-8 md:mt-24">
             {/* Join Card */}
             <div className="bg-neutral-900 h-[200px] flex items-center justify-center border border-white/10 rounded-2xl p-6 text-center group cursor-pointer hover:bg-neutral-800 transition-colors relative overflow-hidden">
                <div className="relative z-10">
                   <Instagram className="w-8 h-8 mx-auto mb-4 text-purple-500 group-hover:scale-110 transition-transform" />
                   <h3 className="font-bold uppercase tracking-widest text-sm">Join the Cult</h3>
                   <p className="text-xs text-neutral-500 mt-2">Tag @YUMECAV to be featured</p>
                </div>
                {/* Decorative background for join card */}
                <div className="absolute inset-0 bg-gradient-to-tr from-purple-900/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
             </div>
             <UGCCard post={UGC_POSTS[4]} height="h-[300px]" />
          </div>
       </div>
    </section>
  )
}

export default UGCSection;
