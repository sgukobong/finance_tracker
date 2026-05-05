import React from 'react';
import TopAppBar from '@/components/TopAppBar';
import BottomNavBar from '@/components/BottomNavBar';
import FAB from '@/components/FAB';

export default function TransactionsList() {
  return (
    <>
      <TopAppBar title="Transactions" />
      
      <main className="pt-20 px-6 pb-32 max-w-lg mx-auto">
        <div className="mb-6 opacity-0 animate-[fade-in-up_0.5s_ease-out_forwards]" style={{ animationDelay: '50ms' }}>
          <h2 className="font-manrope font-semibold text-[32px] text-zinc-900 mb-4">Transactions</h2>
          
          {/* Search Bar */}
          <div className="relative group mb-4">
            <span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-zinc-400">search</span>
            <input className="w-full bg-[#f3f4f5] border-none rounded-xl py-3.5 pl-12 pr-4 focus:ring-2 focus:ring-black text-zinc-900 placeholder-zinc-400 transition-all font-inter" placeholder="Search merchants, categories..." type="text"/>
          </div>
          
          {/* Horizontal Filter Chips */}
          <div className="flex gap-2 overflow-x-auto hide-scrollbar pb-2">
            <button className="bg-black text-white px-5 py-2 rounded-full whitespace-nowrap font-inter font-semibold text-[14px] transition-all active:scale-95">All</button>
            <button className="bg-white border border-zinc-100 text-zinc-600 px-5 py-2 rounded-full whitespace-nowrap font-inter font-semibold text-[14px] hover:bg-zinc-50 active:scale-95">Shopping</button>
            <button className="bg-white border border-zinc-100 text-zinc-600 px-5 py-2 rounded-full whitespace-nowrap font-inter font-semibold text-[14px] hover:bg-zinc-50 active:scale-95">Dining</button>
            <button className="bg-white border border-zinc-100 text-zinc-600 px-5 py-2 rounded-full whitespace-nowrap font-inter font-semibold text-[14px] hover:bg-zinc-50 active:scale-95">Transport</button>
            <button className="bg-white border border-zinc-100 text-zinc-600 px-5 py-2 rounded-full whitespace-nowrap font-inter font-semibold text-[14px] hover:bg-zinc-50 active:scale-95">Utility</button>
          </div>
        </div>

        {/* Transactions List */}
        <div className="space-y-6">
          
          {/* Date Group */}
          <div className="opacity-0 animate-[fade-in-up_0.5s_ease-out_forwards]" style={{ animationDelay: '150ms' }}>
            <p className="font-inter font-semibold text-[14px] text-zinc-400 uppercase tracking-widest mb-3">Today, Oct 24</p>
            <div className="space-y-3">
              
              {/* Transaction Item 1 */}
              <div className="bg-white p-4 rounded-xl flex items-center justify-between border border-zinc-100 shadow-sm active:scale-[0.98] transition-transform">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-zinc-50 rounded-full flex items-center justify-center relative">
                    <span className="material-symbols-outlined text-zinc-900">shopping_bag</span>
                    <div className="absolute -top-1 -right-1 bg-white p-1 rounded-full shadow-sm border border-zinc-50">
                      <span className="material-symbols-outlined text-[14px] text-[#4854bb]" style={{fontVariationSettings: "'FILL' 1"}}>mail</span>
                    </div>
                  </div>
                  <div>
                    <h3 className="font-inter font-semibold text-[14px] text-zinc-900">Apple Store</h3>
                    <p className="text-xs text-zinc-400">Shopping • 10:24 AM</p>
                  </div>
                </div>
                <div className="text-right">
                  <p className="font-inter font-semibold text-[14px] text-zinc-900">-$149.00</p>
                  <p className="text-[10px] text-zinc-400 font-bold uppercase tracking-tighter">Approved</p>
                </div>
              </div>

              {/* Transaction Item 2 */}
              <div className="bg-white p-4 rounded-xl flex items-center justify-between border border-zinc-100 shadow-sm active:scale-[0.98] transition-transform">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-zinc-50 rounded-full flex items-center justify-center relative">
                    <span className="material-symbols-outlined text-zinc-900">restaurant</span>
                    <div className="absolute -top-1 -right-1 bg-white p-1 rounded-full shadow-sm border border-zinc-50">
                      <span className="material-symbols-outlined text-[14px] text-[#009844]" style={{fontVariationSettings: "'FILL' 1"}}>receipt_long</span>
                    </div>
                  </div>
                  <div>
                    <h3 className="font-inter font-semibold text-[14px] text-zinc-900">Blue Bottle Coffee</h3>
                    <p className="text-xs text-zinc-400">Dining • 08:15 AM</p>
                  </div>
                </div>
                <div className="text-right">
                  <p className="font-inter font-semibold text-[14px] text-zinc-900">-$6.50</p>
                  <p className="text-[10px] text-zinc-400 font-bold uppercase tracking-tighter">Matched</p>
                </div>
              </div>

            </div>
          </div>

          {/* Date Group */}
          <div className="opacity-0 animate-[fade-in-up_0.5s_ease-out_forwards]" style={{ animationDelay: '250ms' }}>
            <p className="font-inter font-semibold text-[14px] text-zinc-400 uppercase tracking-widest mb-3">Yesterday, Oct 23</p>
            <div className="space-y-3">
              
              {/* Transaction Item 3 */}
              <div className="bg-white p-4 rounded-xl flex items-center justify-between border border-zinc-100 shadow-sm active:scale-[0.98] transition-transform">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-zinc-50 rounded-full flex items-center justify-center relative">
                    <span className="material-symbols-outlined text-zinc-900">directions_car</span>
                    <div className="absolute -top-1 -right-1 bg-white p-1 rounded-full shadow-sm border border-zinc-50">
                      <span className="material-symbols-outlined text-[14px] text-zinc-800" style={{fontVariationSettings: "'FILL' 1"}}>sms</span>
                    </div>
                  </div>
                  <div>
                    <h3 className="font-inter font-semibold text-[14px] text-zinc-900">Uber</h3>
                    <p className="text-xs text-zinc-400">Transport • 11:45 PM</p>
                  </div>
                </div>
                <div className="text-right">
                  <p className="font-inter font-semibold text-[14px] text-zinc-900">-$24.30</p>
                  <p className="text-[10px] text-zinc-400 font-bold uppercase tracking-tighter">Verified</p>
                </div>
              </div>

            </div>
          </div>

        </div>
      </main>

      <FAB />
      <BottomNavBar />
    </>
  );
}
