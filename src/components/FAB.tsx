'use client';
import React from 'react';

export default function FAB() {
  return (
    <div className="fixed bottom-0 w-full max-w-[414px] left-0 right-0 mx-auto h-0 pointer-events-none z-40">
      <button 
        onClick={() => alert('Transaction modal opened!')}
        className="absolute bottom-28 right-6 w-14 h-14 bg-black text-white rounded-2xl shadow-[0_8px_30px_rgba(0,0,0,0.2)] flex items-center justify-center hover:scale-105 active:scale-95 transition-all duration-300 pointer-events-auto group"
      >
        <span className="material-symbols-outlined text-3xl group-hover:rotate-90 transition-transform duration-300">add</span>
      </button>
    </div>
  );
}
