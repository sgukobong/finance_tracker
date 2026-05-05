import React from 'react';
import BottomNavBar from '@/components/BottomNavBar';
import TopAppBar from '@/components/TopAppBar';

export default function SettingsProfile() {
  return (
    <>
      <TopAppBar title="Settings" />
      
      <main className="w-full max-w-md mx-auto pb-32 pt-24 px-6 space-y-8">
        
        {/* Profile Section */}
        <section className="bg-white rounded-2xl p-6 border border-zinc-100 flex flex-col items-center text-center shadow-sm">
          <div className="relative mb-4">
            <div className="w-24 h-24 rounded-full p-1 border-2 border-black ring-4 ring-white shadow-xl bg-black flex items-center justify-center text-white">
              <span className="material-symbols-outlined text-[48px]">account_circle</span>
            </div>
            <button className="absolute bottom-0 right-0 bg-black text-white p-2 rounded-full border-4 border-white shadow-md active:scale-90 transition-transform flex items-center justify-center h-10 w-10">
              <span className="material-symbols-outlined text-[18px]">edit</span>
            </button>
          </div>
          <h1 className="font-manrope font-semibold text-[24px] text-zinc-900">Alex Thompson</h1>
          <p className="font-inter text-[16px] text-zinc-500">alex.thompson@prime.com</p>
          <div className="mt-4 inline-flex items-center px-3 py-1 bg-[#6bff8f] text-[#002109] rounded-full text-[12px] font-bold tracking-wider">
              PRO PLAN
          </div>
        </section>

        {/* Data Sources Section */}
        <section className="space-y-3">
          <h2 className="font-inter font-semibold text-[14px] text-zinc-500 uppercase tracking-widest px-2">Data Sources</h2>
          <div className="bg-white rounded-2xl border border-zinc-100 overflow-hidden">
            
            <div className="flex items-center justify-between p-4 hover:bg-zinc-50 transition-colors group cursor-pointer">
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-xl bg-red-50 text-red-600 flex items-center justify-center">
                  <span className="material-symbols-outlined">mail</span>
                </div>
                <div>
                  <p className="font-inter font-semibold text-[16px] text-zinc-900">Gmail</p>
                  <p className="text-[12px] text-zinc-500">Scanning receipts automatically</p>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-[12px] font-bold text-[#4ae176]">Linked</span>
                <span className="material-symbols-outlined text-zinc-400 group-hover:translate-x-1 transition-transform">chevron_right</span>
              </div>
            </div>

            <div className="h-[1px] bg-zinc-100 mx-4"></div>

            <div className="flex items-center justify-between p-4 hover:bg-zinc-50 transition-colors group cursor-pointer">
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center">
                  <span className="material-symbols-outlined">sms</span>
                </div>
                <div>
                  <p className="font-inter font-semibold text-[16px] text-zinc-900">SMS Notifications</p>
                  <p className="text-[12px] text-zinc-500">Bank alert parsing active</p>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-[12px] font-bold text-[#4ae176]">Active</span>
                <span className="material-symbols-outlined text-zinc-400 group-hover:translate-x-1 transition-transform">chevron_right</span>
              </div>
            </div>

            <div className="h-[1px] bg-zinc-100 mx-4"></div>

            <div className="flex items-center justify-between p-4 hover:bg-zinc-50 transition-colors group cursor-pointer">
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-xl bg-zinc-100 text-zinc-900 flex items-center justify-center">
                  <span className="material-symbols-outlined">camera_alt</span>
                </div>
                <div>
                  <p className="font-inter font-semibold text-[16px] text-zinc-900">Camera Permissions</p>
                  <p className="text-[12px] text-zinc-500">Manual receipt capture</p>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-[12px] font-bold text-zinc-500">Enabled</span>
                <span className="material-symbols-outlined text-zinc-400 group-hover:translate-x-1 transition-transform">chevron_right</span>
              </div>
            </div>

          </div>
        </section>

        {/* App Preferences Section */}
        <section className="space-y-3">
          <h2 className="font-inter font-semibold text-[14px] text-zinc-500 uppercase tracking-widest px-2">App Preferences</h2>
          <div className="bg-white rounded-2xl border border-zinc-100 overflow-hidden">
            
            <div className="flex items-center justify-between p-4 hover:bg-zinc-50 transition-colors group cursor-pointer">
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-xl bg-black text-white flex items-center justify-center">
                  <span className="material-symbols-outlined">payments</span>
                </div>
                <div>
                  <p className="font-inter font-semibold text-[16px] text-zinc-900">Default Currency</p>
                  <p className="text-[12px] text-zinc-500">United States Dollar (USD)</p>
                </div>
              </div>
              <span className="material-symbols-outlined text-zinc-400 group-hover:translate-x-1 transition-transform">chevron_right</span>
            </div>

            <div className="h-[1px] bg-zinc-100 mx-4"></div>

            <div className="flex items-center justify-between p-4 hover:bg-zinc-50 transition-colors group cursor-pointer">
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-xl bg-black text-white flex items-center justify-center">
                  <span className="material-symbols-outlined">notifications_active</span>
                </div>
                <div>
                  <p className="font-inter font-semibold text-[16px] text-zinc-900">Push Notifications</p>
                  <p className="text-[12px] text-zinc-500">Instant transaction alerts</p>
                </div>
              </div>
              <div className="relative inline-flex items-center cursor-pointer">
                <div className="w-11 h-6 bg-black rounded-full"></div>
                <div className="absolute left-1 top-1 bg-white w-4 h-4 rounded-full transition-transform translate-x-5"></div>
              </div>
            </div>

          </div>
        </section>

      </main>

      <BottomNavBar />
    </>
  );
}
