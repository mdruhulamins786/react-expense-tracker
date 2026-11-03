export default function TransactionForm({
  formData,
  editId,
  handleChange,
  handleSubmit,
  resetForm,
}) {
  return (
    <section className="mb-8 rounded-2xl border border-slate-800 bg-slate-900 p-6">
      <div className="mb-6">
        <h2 className="text-xl font-bold">
          {editId !== null ? "Edit Transaction" : "Add Transaction"}
        </h2>

        <p className="mt-1 text-sm text-slate-400">
          {editId !== null
            ? "Update your transaction details."
            : "Add a new income or expense."}
        </p>
      </div>

      <form
        onSubmit={handleSubmit}
        className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3"
      >
        {/* Title */}
        <div>
          <label className="mb-2 block text-sm text-slate-300">
            Transaction Title
          </label>

          <input
            type="text"
            name="title"
            value={formData.title}
            onChange={handleChange}
            placeholder="e.g. Monthly Salary"
            className="w-full rounded-xl border border-slate-700 bg-slate-800 px-4 py-3 outline-none transition focus:border-indigo-500"
          />
        </div>

        {/* Amount */}
        <div>
          <label className="mb-2 block text-sm text-slate-300">
            Amount (৳)
          </label>

          <input
            type="number"
            name="amount"
            min="0.01"
            step="0.01"
            value={formData.amount}
            onChange={handleChange}
            placeholder="Enter amount"
            className="w-full rounded-xl border border-slate-700 bg-slate-800 px-4 py-3 outline-none transition focus:border-indigo-500"
          />
        </div>

        {/* Type */}
        <div>
          <label className="mb-2 block text-sm text-slate-300">
            Transaction Type
          </label>

          <select
            name="type"
            value={formData.type}
            onChange={handleChange}
            className="w-full rounded-xl border border-slate-700 bg-slate-800 px-4 py-3 outline-none focus:border-indigo-500"
          >
            <option value="">Select Type</option>
            <option value="income">Income</option>
            <option value="expense">Expense</option>
          </select>
        </div>

        {/* Category */}
        <div>
          <label className="mb-2 block text-sm text-slate-300">Category</label>

          <select
            name="category"
            value={formData.category}
            onChange={handleChange}
            className="w-full rounded-xl border border-slate-700 bg-slate-800 px-4 py-3 outline-none focus:border-indigo-500"
          >
            <option value="">Select Category</option>
            <option value="salary">Salary</option>
            <option value="freelancing">Freelancing</option>
            <option value="food">Food</option>
            <option value="shopping">Shopping</option>
            <option value="transport">Transport</option>
            <option value="bills">Bills</option>
            <option value="entertainment">Entertainment</option>
            <option value="other">Other</option>
          </select>
        </div>

        {/* Date */}
        <div>
          <label className="mb-2 block text-sm text-slate-300">Date</label>

          <input
            type="date"
            name="date"
            value={formData.date}
            onChange={handleChange}
            className="w-full rounded-xl border border-slate-700 bg-slate-800 px-4 py-3 text-slate-300 outline-none focus:border-indigo-500"
          />
        </div>

        {/* Buttons */}
        <div className="flex items-end gap-3">
          <button
            type="submit"
            className="w-full rounded-xl bg-indigo-600 px-5 py-3 font-semibold transition hover:bg-indigo-500"
          >
            {editId !== null ? "Update Transaction" : "+ Add Transaction"}
          </button>

          {editId !== null && (
            <button
              type="button"
              onClick={resetForm}
              className="rounded-xl border border-slate-700 px-5 py-3 font-semibold text-slate-300 transition hover:bg-slate-800"
            >
              Cancel
            </button>
          )}
        </div>
      </form>
    </section>
  );
}
