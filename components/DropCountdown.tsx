import React, { useState, useEffect } from 'react';
import { Clock } from 'lucide-react';

const DropCountdown: React.FC = () => {
  const [timeLeft, setTimeLeft] = useState({ hours: 47, minutes: 59, seconds: 59 });

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prev => {
        if (prev.seconds > 0) return { ...prev, seconds: prev.seconds - 1 };
        if (prev.minutes > 0) return { ...prev, minutes: prev.minutes - 1, seconds: 59 };
        if (prev.hours > 0) return { ...prev, hours: prev.hours - 1, minutes: 59, seconds: 59 };
        return prev;
      });
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="w-full bg-neutral-900 border-b border-white/5 py-12 flex flex-col items-center justify-center relative overflow-hidden">
       {/* Background Grid Animation */}
       <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>
       
       <div className="relative z-10 text-center">
          <div className="flex items-center justify-center gap-2 text-purple-500 mb-4 animate-pulse">
             <Clock className="w-4 h-4" />
             <span className="text-xs font-bold tracking-[0.3em] uppercase">Next Drop Incoming</span>
          </div>
          
          <div className="flex items-center gap-4 md:gap-8 font-black text-4xl md:text-7xl tabular-nums tracking-tighter">
             <div>
                <span>{String(timeLeft.hours).padStart(2, '0')}</span>
                <span className="block text-[10px] md:text-sm font-medium tracking-widest text-neutral-500 mt-2 uppercase">Hours</span>
             </div>
             <span className="text-neutral-700">:</span>
             <div>
                <span>{String(timeLeft.minutes).padStart(2, '0')}</span>
                <span className="block text-[10px] md:text-sm font-medium tracking-widest text-neutral-500 mt-2 uppercase">Mins</span>
             </div>
             <span className="text-neutral-700">:</span>
             <div className="text-purple-500">
                <span>{String(timeLeft.seconds).padStart(2, '0')}</span>
                <span className="block text-[10px] md:text-sm font-medium tracking-widest text-neutral-500 mt-2 uppercase">Secs</span>
             </div>
          </div>

          <div className="mt-8">
             <button className="text-xs font-bold uppercase tracking-widest border border-white/20 hover:bg-white hover:text-black transition-all px-6 py-3 rounded-full">
                Join Waitlist
             </button>
          </div>
       </div>
    </div>
  );
};

export default DropCountdown;
