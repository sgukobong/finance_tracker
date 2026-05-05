import React from 'react';

interface TopAppBarProps {
  title?: string;
}

export default function TopAppBar({ title = "Fintrack" }: TopAppBarProps) {
  return (
    <header className="fixed top-0 w-full max-w-[414px] left-0 right-0 mx-auto z-50 bg-white/80 dark:bg-zinc-950/80 backdrop-blur-md border-b border-zinc-100 dark:border-zinc-800 flex justify-between items-center px-6 h-16">
      <div className="flex items-center gap-3">
        <div className="w-8 h-8 rounded-full bg-[#1c1b1c] flex items-center justify-center text-white">
          <span className="material-symbols-outlined text-[18px]">account_balance_wallet</span>
        </div>
        <span className="text-lg font-black tracking-tighter text-zinc-900 dark:text-zinc-50 font-headline-md">{title}</span>
      </div>
      <button className="text-zinc-900 dark:text-zinc-50 hover:opacity-70 transition-opacity active:scale-95 duration-200">
        <span className="material-symbols-outlined">notifications</span>
      </button>
    </header>
  );
}
