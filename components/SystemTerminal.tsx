import React, { useState } from 'react';
import { Terminal } from 'lucide-react';
import { FAQS } from '../constants';

const SystemTerminal: React.FC = () => {
  const [activeTab, setActiveTab] = useState(0);
  
  return (
    <section id="data-bank" className="py-24 bg-neutral-900 border-y border-white/5">
       <div className="container mx-auto px-6 max-w-4xl">
          <div className="flex items-center gap-3 mb-10">
             <Terminal className="text-purple-500 w-6 h-6" />
             <h2 className="text-2xl md:text-3xl font-bold uppercase tracking-widest">Data_Bank // FAQ</h2>
          </div>

          <div className="bg-black border border-white/10 rounded-xl overflow-hidden shadow-2xl font-mono text-sm md:text-base">
             {/* Terminal Header */}
             <div className="bg-white/5 px-4 py-2 border-b border-white/10 flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-red-500"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                <div className="w-3 h-3 rounded-full bg-green-500"></div>
                <span className="ml-4 text-neutral-500 text-xs">user@yumecav-terminal:~</span>
             </div>

             {/* Terminal Body */}
             <div className="p-6 md:p-10 space-y-6">
                {FAQS.map((item, index) => (
                   <div key={index} className="group cursor-pointer" onClick={() => setActiveTab(activeTab === index ? -1 : index)}>
                      <div className="flex items-start gap-2 text-purple-400 mb-2">
                         <span className="mt-1">{'>'}</span>
                         <h3 className={`font-bold uppercase tracking-wider transition-colors ${activeTab === index ? 'text-purple-300' : 'text-purple-400'}`}>
                           {item.question}
                         </h3>
                         {activeTab !== index && <span className="animate-pulse">_</span>}
                      </div>
                      
                      <div className={`pl-5 text-neutral-400 overflow-hidden transition-all duration-300 ${activeTab === index ? 'max-h-40 opacity-100' : 'max-h-0 opacity-0'}`}>
                         <p className="leading-relaxed border-l-2 border-white/10 pl-4">
                           {`>> ${item.answer}`}
                         </p>
                      </div>
                   </div>
                ))}
                
                <div className="pt-4 mt-8 border-t border-white/10 text-xs text-neutral-600">
                   STATUS: ONLINE • ENCRYPTION: 256-BIT • SERVER: TOKYO_01
                </div>
             </div>
          </div>
       </div>
    </section>
  );
};

export default SystemTerminal;
