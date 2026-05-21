import { prisma } from '@/lib/prisma';
import Link from 'next/link';

function formatCurrency(amount: number) {
  return new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(amount);
}

function timeAgo(date: Date) {
  const now = new Date();
  const diffMs = now.getTime() - date.getTime();
  const diffH = Math.floor(diffMs / (1000 * 60 * 60));
  if (diffH < 1) return 'Just now';
  if (diffH < 24) return `${diffH}h ago`;
  const diffD = Math.floor(diffH / 24);
  if (diffD === 1) return 'Yesterday';
  return `${diffD}d ago`;
}

const sourceIcons: Record<string, { icon: string; color: string }> = {
  email: { icon: 'mail', color: 'text-[#4854bb]' },
  sms: { icon: 'sms', color: 'text-zinc-800' },
  receipt: { icon: 'receipt_long', color: 'text-[#009844]' },
  manual: { icon: 'edit', color: 'text-zinc-500' },
};

export default async function Dashboard() {
  const user = await prisma.user.findFirst();
  if (!user) return <p className="p-8">No user found. Please seed the database.</p>;

  const transactions = await prisma.transaction.findMany({
    where: { userId: user.id },
    include: { category: true },
    orderBy: { createdAt: 'desc' },
  });

  const totalIncome = transactions.filter(t => t.type === 'income').reduce((s, t) => s + t.amount, 0);
  const totalExpenses = transactions.filter(t => t.type === 'expense').reduce((s, t) => s + t.amount, 0);
  const balance = totalIncome - totalExpenses;
  const savingsRate = totalIncome > 0 ? Math.round(((totalIncome - totalExpenses) / totalIncome) * 100) : 0;

  const recentTransactions = transactions.slice(0, 5);

  const categorySpending = transactions
    .filter(t => t.type === 'expense')
    .reduce<Record<string, { name: string; total: number; icon: string; color: string }>>((acc, t) => {
      const key = t.category.name;
      if (!acc[key]) acc[key] = { name: key, total: 0, icon: t.category.icon, color: t.category.color };
      acc[key].total += t.amount;
      return acc;
    }, {});

  const topCategories = Object.values(categorySpending).sort((a, b) => b.total - a.total).slice(0, 4);

  return (
    <div className="min-h-screen pb-24 md:pb-8">
      {/* Header */}
      <header className="bg-white border-b border-zinc-100 px-6 py-5 md:px-10 md:py-6">
        <div className="max-w-5xl mx-auto flex items-center justify-between">
          <div>
            <p className="text-zinc-500 text-sm">Welcome back,</p>
            <h1 className="font-['Manrope'] font-bold text-2xl md:text-3xl text-zinc-900">{user.name}</h1>
          </div>
          <div className="flex items-center gap-3">
            {user.smsActive && (
              <div className="hidden sm:flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#f3f4f5] border border-[#c7c6ca]/30">
                <span className="w-2 h-2 rounded-full bg-[#009844] animate-pulse" />
                <span className="text-xs font-semibold text-zinc-500">SMS Active</span>
              </div>
            )}
            {user.gmailLinked && (
              <div className="hidden sm:flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#f3f4f5] border border-[#c7c6ca]/30">
                <span className="w-2 h-2 rounded-full bg-[#009844] animate-pulse" />
                <span className="text-xs font-semibold text-zinc-500">Email Linked</span>
              </div>
            )}
            <button className="w-10 h-10 rounded-xl bg-zinc-100 flex items-center justify-center text-zinc-600 hover:bg-zinc-200 transition-colors">
              <span className="material-symbols-outlined">notifications</span>
            </button>
          </div>
        </div>
      </header>

      <div className="max-w-5xl mx-auto px-6 md:px-10 py-6 md:py-8 space-y-8">
        {/* Financial Snapshot */}
        <section className="opacity-0 animate-fade-in-up" style={{ animationDelay: '100ms' }}>
          <div className="bg-black rounded-3xl p-6 md:p-8 text-white shadow-2xl shadow-black/20 relative overflow-hidden">
            <div className="absolute -right-10 -top-10 w-40 h-40 bg-white/10 rounded-full blur-3xl" />
            <p className="text-sm opacity-70 mb-1 font-semibold">Total Balance</p>
            <h2 className="text-4xl md:text-5xl font-semibold font-['Manrope'] tracking-tight mb-6">
              {formatCurrency(balance)}
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              <div className="bg-white/10 rounded-2xl p-4 backdrop-blur-sm">
                <div className="flex items-center gap-2 mb-1">
                  <span className="material-symbols-outlined text-sm">arrow_downward</span>
                  <span className="text-[12px] uppercase tracking-wider opacity-70 font-semibold">Income</span>
                </div>
                <p className="font-['Manrope'] font-semibold text-xl">{formatCurrency(totalIncome)}</p>
              </div>
              <div className="bg-white/10 rounded-2xl p-4 backdrop-blur-sm">
                <div className="flex items-center gap-2 mb-1">
                  <span className="material-symbols-outlined text-sm">arrow_upward</span>
                  <span className="text-[12px] uppercase tracking-wider opacity-70 font-semibold">Expenses</span>
                </div>
                <p className="font-['Manrope'] font-semibold text-xl">{formatCurrency(totalExpenses)}</p>
              </div>
              <div className="hidden md:block bg-white/10 rounded-2xl p-4 backdrop-blur-sm">
                <div className="flex items-center gap-2 mb-1">
                  <span className="material-symbols-outlined text-sm">savings</span>
                  <span className="text-[12px] uppercase tracking-wider opacity-70 font-semibold">Savings Rate</span>
                </div>
                <p className="font-['Manrope'] font-semibold text-xl">{savingsRate}%</p>
              </div>
            </div>
          </div>
        </section>

        {/* Insights + Top Spending */}
        <section className="grid grid-cols-2 md:grid-cols-4 gap-4 opacity-0 animate-fade-in-up" style={{ animationDelay: '200ms' }}>
          <div className="bg-[#8692fd] rounded-3xl p-5 flex flex-col justify-between aspect-square md:aspect-auto md:min-h-[160px]">
            <span className="material-symbols-outlined text-[#16238e] text-3xl">savings</span>
            <div>
              <p className="text-[#16238e] text-[12px] uppercase mb-1 font-semibold">Savings Rate</p>
              <p className="font-['Manrope'] font-semibold text-lg text-[#16238e]">{savingsRate}%</p>
            </div>
          </div>
          <div className="bg-[#e1e3e4] rounded-3xl p-5 flex flex-col justify-between aspect-square md:aspect-auto md:min-h-[160px]">
            <span className="material-symbols-outlined text-[#191c1d] text-3xl">auto_awesome</span>
            <div>
              <p className="text-[#46464a] text-[12px] uppercase mb-1 font-semibold">Transactions</p>
              <p className="font-['Manrope'] font-semibold text-lg text-[#191c1d]">{transactions.length} total</p>
            </div>
          </div>
          {topCategories.slice(0, 2).map((cat) => (
            <div key={cat.name} className="bg-white rounded-3xl p-5 border border-zinc-100 flex flex-col justify-between aspect-square md:aspect-auto md:min-h-[160px]">
              <span className="material-symbols-outlined text-3xl" style={{ color: cat.color }}>{cat.icon}</span>
              <div>
                <p className="text-zinc-500 text-[12px] uppercase mb-1 font-semibold">{cat.name}</p>
                <p className="font-['Manrope'] font-semibold text-lg text-zinc-900">{formatCurrency(cat.total)}</p>
              </div>
            </div>
          ))}
        </section>

        {/* Recent Activity */}
        <section className="opacity-0 animate-fade-in-up" style={{ animationDelay: '300ms' }}>
          <div className="flex justify-between items-end mb-4">
            <h2 className="font-['Manrope'] font-semibold text-xl md:text-2xl">Recent Activity</h2>
            <Link href="/transactions" className="text-[#4854bb] font-semibold text-sm">
              View All
            </Link>
          </div>
          <div className="bg-white rounded-2xl border border-zinc-100 divide-y divide-zinc-100">
            {recentTransactions.map((txn) => {
              const src = sourceIcons[txn.source] || sourceIcons['manual'];
              return (
                <div key={txn.id} className="flex items-center justify-between p-4 hover:bg-zinc-50 transition-colors">
                  <div className="flex items-center gap-4">
                    <div className="w-11 h-11 rounded-xl flex items-center justify-center relative" style={{ backgroundColor: `${txn.category.color}15` }}>
                      <span className="material-symbols-outlined" style={{ color: txn.category.color }}>{txn.category.icon}</span>
                      <div className="absolute -top-1 -right-1 bg-white p-0.5 rounded-full shadow-sm border border-zinc-50">
                        <span className={`material-symbols-outlined text-[12px] ${src.color}`} style={{ fontVariationSettings: "'FILL' 1" }}>{src.icon}</span>
                      </div>
                    </div>
                    <div>
                      <p className="font-semibold text-sm text-zinc-900">{txn.merchant}</p>
                      <p className="text-xs text-zinc-400">{txn.category.name} &middot; {timeAgo(txn.createdAt)}</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className={`font-semibold text-sm ${txn.type === 'income' ? 'text-[#009844]' : 'text-zinc-900'}`}>
                      {txn.type === 'income' ? '+' : '-'}{formatCurrency(txn.amount)}
                    </p>
                    <p className="text-[10px] text-zinc-400 font-bold uppercase tracking-tight">{txn.status}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </section>
      </div>
    </div>
  );
}
