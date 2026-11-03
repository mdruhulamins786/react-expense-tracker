import { formatCurrency } from "../utils/formatCurrency";

export default function TransactionTable({
  transactions,
  totalTransactions,
  handleEdit,
  handleDeleted,
}) {
  return (
    <div className="overflow-x-auto">
      <table className="w-full min-w-[650px] text-left">
        <thead>
          <tr className="border-b border-slate-800 text-sm text-slate-400">
            <th className="px-4 py-4 font-medium">Title</th>
            <th className="px-4 py-4 font-medium">Category</th>
            <th className="px-4 py-4 font-medium">Date</th>
            <th className="px-4 py-4 font-medium">Type</th>
            <th className="px-4 py-4 font-medium">Amount</th>
            <th className="px-4 py-4 text-right font-medium">Actions</th>
          </tr>
        </thead>

        <tbody className="divide-y divide-slate-800">
          {transactions.length > 0 ? (
            transactions.map((transaction) => (
              <tr
                key={transaction.id}
                className="transition hover:bg-slate-800/50"
              >
                <td className="px-4 py-4 font-medium">{transaction.title}</td>

                <td className="px-4 py-4 text-slate-400 capitalize">
                  {transaction.category}
                </td>

                <td className="px-4 py-4 text-sm text-slate-400">
                  {transaction.date}
                </td>

                <td className="px-4 py-4">
                  <span
                    className={`rounded-full px-3 py-1 text-xs font-medium ${
                      transaction.type === "income"
                        ? "bg-emerald-500/10 text-emerald-400"
                        : "bg-red-500/10 text-red-400"
                    }`}
                  >
                    {transaction.type}
                  </span>
                </td>

                <td
                  className={`px-4 py-4 font-semibold ${
                    transaction.type === "income"
                      ? "text-emerald-400"
                      : "text-red-400"
                  }`}
                >
                  {transaction.type === "income" ? "+" : "-"}৳{" "}
                  {formatCurrency(transaction.amount)}
                </td>

                <td className="px-4 py-4">
                  <div className="flex justify-end gap-2">
                    <button
                      type="button"
                      onClick={() => handleEdit(transaction)}
                      className="rounded-lg bg-indigo-500/10 px-3 py-2 text-sm text-indigo-400 hover:bg-indigo-500/20"
                    >
                      Edit
                    </button>

                    <button
                      type="button"
                      onClick={() => handleDeleted(transaction.id)}
                      className="rounded-lg bg-rose-500/10 px-3 py-2 text-sm text-rose-400 hover:bg-rose-500/20"
                    >
                      Delete
                    </button>
                  </div>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="6" className="px-4 py-10 text-center text-slate-400">
                No transactions found.
              </td>
            </tr>
          )}
        </tbody>
      </table>

      {/* Footer */}
      <div className="mt-5 flex flex-col justify-between gap-3 border-t border-slate-800 pt-5 sm:flex-row sm:items-center">
        <p className="text-sm text-slate-400">
          Showing {transactions.length} of {totalTransactions} transactions
        </p>

        <p className="text-sm text-slate-500">Expense Tracker © 2026</p>
      </div>
    </div>
  );
}
