import React from 'react';

interface InfiniteMarqueeProps {
  text: string;
  reverse?: boolean;
}

const InfiniteMarquee: React.FC<InfiniteMarqueeProps> = ({ text, reverse = false }) => {
  return (
    <div className="bg-purple-600 text-black py-3 overflow-hidden whitespace-nowrap border-y border-black">
      <div className={`inline-flex animate-marquee ${reverse ? 'flex-row-reverse' : ''}`}>
        {[...Array(6)].map((_, i) => (
          <span key={i} className="text-sm md:text-base font-black tracking-widest uppercase mx-4">
            {text}
          </span>
        ))}
      </div>
      <style>{`
        .animate-marquee {
          animation: marquee 20s linear infinite;
        }
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
      `}</style>
    </div>
  );
};

export default InfiniteMarquee;
