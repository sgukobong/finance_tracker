import React from 'react';
import BottomNavBar from '@/components/BottomNavBar';

export default function ScanReceipt() {
  return (
    <>
      {/* Immersive Camera View (Mock) */}
      <div className="fixed inset-0 w-full max-w-[414px] left-0 right-0 mx-auto bg-zinc-900 z-0">
        <img alt="Camera view showing a paper receipt on a dark desk" className="w-full h-full object-cover opacity-60" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAe19G1p6R2Yk5_W3c-D5rK-Q4jL7p1m2e-k9pI5K1_X6hZ7v0e5a8p2_Z1w_H5o9m5m4l9x7d8y4b3c2q1s8m6n5r4t3x2w1v0u9i8o7p6a5s4d3f2g1h0j9k8l7m6n5b4v3c2x1z0" />
      </div>
      
      {/* Overlay UI */}
      <div className="fixed inset-0 w-full max-w-[414px] left-0 right-0 mx-auto z-10 flex flex-col pointer-events-none">
        
        {/* Top Controls */}
        <header className="flex justify-between items-center px-6 h-20 pt-safe pointer-events-auto">
          <button className="w-10 h-10 rounded-full bg-black/40 backdrop-blur-md flex items-center justify-center text-white active:scale-95 transition-transform">
            <span className="material-symbols-outlined text-[20px]">close</span>
          </button>
          <div className="bg-black/40 backdrop-blur-md px-4 py-2 rounded-full text-white">
            <span className="font-inter text-[12px] font-bold tracking-widest uppercase">Auto-Capture</span>
          </div>
          <button className="w-10 h-10 rounded-full bg-white text-black flex items-center justify-center active:scale-95 transition-transform">
            <span className="material-symbols-outlined text-[20px]">flash_on</span>
          </button>
        </header>

        {/* Viewfinder Guide */}
        <div className="flex-1 flex items-center justify-center p-8">
          <div className="w-full aspect-[3/4] border-2 border-dashed border-white/50 rounded-3xl relative pointer-events-auto">
            {/* Corner Markers */}
            <div className="absolute top-0 left-0 w-8 h-8 border-t-4 border-l-4 border-white rounded-tl-2xl -mt-0.5 -ml-0.5"></div>
            <div className="absolute top-0 right-0 w-8 h-8 border-t-4 border-r-4 border-white rounded-tr-2xl -mt-0.5 -mr-0.5"></div>
            <div className="absolute bottom-0 left-0 w-8 h-8 border-b-4 border-l-4 border-white rounded-bl-2xl -mb-0.5 -ml-0.5"></div>
            <div className="absolute bottom-0 right-0 w-8 h-8 border-b-4 border-r-4 border-white rounded-br-2xl -mb-0.5 -mr-0.5"></div>
            
            {/* Scanning Animation Line */}
            <div className="absolute top-0 left-0 w-full h-0.5 bg-green-400 shadow-[0_0_15px_rgba(74,225,118,1)] animate-[scan_2s_ease-in-out_infinite_alternate]"></div>
            
            <div className="absolute inset-0 flex items-center justify-center">
              <p className="text-white/70 font-inter text-sm font-medium tracking-wide">Align receipt within frame</p>
            </div>
          </div>
        </div>

        {/* Bottom Controls */}
        <div className="pb-32 px-6 pointer-events-auto flex justify-between items-center">
          <button className="w-12 h-12 rounded-full bg-black/40 backdrop-blur-md flex items-center justify-center text-white">
            <span className="material-symbols-outlined text-[24px]">photo_library</span>
          </button>
          
          {/* Shutter Button */}
          <button className="w-20 h-20 rounded-full border-4 border-white flex items-center justify-center group active:scale-95 transition-transform">
            <div className="w-16 h-16 bg-white rounded-full group-active:scale-90 transition-transform"></div>
          </button>
          
          <button className="w-12 h-12 rounded-full bg-black/40 backdrop-blur-md flex items-center justify-center text-white">
            <span className="material-symbols-outlined text-[24px]">document_scanner</span>
          </button>
        </div>
      </div>
      
      <BottomNavBar />
    </>
  );
}
