import { formatCurrency } from "../utils/formatCurrency";

export default function SummaryCards({
  totalIncome,
  totalExpense,
  totalBalance,
}) {
  return (
    <section className="mb-8 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
      {/* Balance */}
      <div className="rounded-2xl bg-gradient-to-br from-indigo-600 to-violet-700 p-6 shadow-lg">
        <p className="text-sm text-indigo-100">Total Balance</p>

        <h2 className="mt-3 text-3xl font-bold">
          ৳ {formatCurrency(totalBalance)}
        </h2>

        <p className="mt-3 text-sm text-indigo-100">Your available balance</p>
      </div>

      {/* Income */}
      <div className="rounded-2xl border border-slate-800 bg-slate-900 p-6">
        <div className="flex items-center justify-between">
          <p className="text-sm text-slate-400">Total Income</p>

          <span className="rounded-lg bg-emerald-500/10 p-2 text-emerald-400">
            ↗
          </span>
        </div>

        <h2 className="mt-3 text-3xl font-bold text-emerald-400">
          ৳ {formatCurrency(totalIncome)}
        </h2>

        <p className="mt-3 text-sm text-slate-500">Total money received</p>
      </div>

      {/* Expense */}
      <div className="rounded-2xl border border-slate-800 bg-slate-900 p-6">
        <div className="flex items-center justify-between">
          <p className="text-sm text-slate-400">Total Expense</p>

          <span className="rounded-lg bg-rose-500/10 p-2 text-rose-400">↘</span>
        </div>

        <h2 className="mt-3 text-3xl font-bold text-rose-400">
          ৳ {formatCurrency(totalExpense)}
        </h2>

        <p className="mt-3 text-sm text-slate-500">Total money spent</p>
      </div>
    </section>
  );
}
