export default function TransactionFilters({
  search,
  setSearch,
  filters,
  setFilters,
}) {
  const filterOptions = ["all", "income", "expense"];

  return (
    <>
      <div className="mb-6 flex flex-col justify-between gap-4 lg:flex-row lg:items-center">
        <div>
          <h2 className="text-xl font-bold">Transaction History</h2>

          <p className="mt-1 text-sm text-slate-400">
            Manage all your transactions.
          </p>
        </div>

        {/* Search */}
        <input
          type="search"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Search transactions..."
          className="w-full rounded-xl border border-slate-700 bg-slate-800 px-4 py-3 outline-none focus:border-indigo-500 lg:max-w-xs"
        />
      </div>

      {/* Filters */}
      <div className="mb-6 flex flex-wrap gap-2">
        {filterOptions.map((filter) => (
          <button
            key={filter}
            type="button"
            onClick={() => setFilters(filter)}
            className={`rounded-lg px-5 py-2 text-sm font-medium capitalize transition ${
              filters === filter
                ? "bg-indigo-600 text-white"
                : "border border-slate-700 text-slate-400 hover:bg-slate-800"
            }`}
          >
            {filter}
          </button>
        ))}
      </div>
    </>
  );
}
