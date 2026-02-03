import React from 'react';
import { handleManualInquiry } from '../utils';

const Footer: React.FC = () => {
  return (
    <footer id="business" className="bg-white text-neutral-900 py-24">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row items-center justify-between">
          <div className="mb-10 lg:mb-0 text-center lg:text-left">
            <h3 className="text-5xl font-black mb-4 tracking-tighter">
              TRANSFORM YOUR OFFICE.
            </h3>
            <p className="text-xl text-neutral-600 max-w-lg">
              Bulk custom orders for agencies, startups, and design houses.
            </p>
          </div>

          <div className="flex flex-col items-center gap-4">
            <button 
              onClick={() => handleManualInquiry("Bulk B2B Inquiry")}
              className="bg-neutral-900 text-white px-10 py-5 rounded-full font-bold text-lg hover:bg-purple-600 hover:scale-105 transition-all duration-300 shadow-2xl"
            >
              Get B2B Pricing
            </button>
          </div>
        </div>

        <div className="border-t border-neutral-200 mt-20 pt-10 flex flex-col md:flex-row justify-between items-center text-sm text-neutral-500">
          <p>&copy; 2024 YUMECAV. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
