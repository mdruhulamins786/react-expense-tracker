import { useState } from "react";
import { toast } from "react-toastify";

import {
  initialTransactions,
  initialFormData,
} from "./data/initialTransactions";

import SummaryCards from "./components/SummaryCards";
import TransactionForm from "./components/TransactionForm";
import TransactionFilters from "./components/TransactionFilters";
import TransactionTable from "./components/TransactionTable";

export default function ExpenseTracker() {
  // States
  const [transactions, setTransactions] = useState(initialTransactions);
  const [formData, setFormData] = useState(initialFormData);
  const [search, setSearch] = useState("");
  const [filters, setFilters] = useState("all");
  const [editId, setEditId] = useState(null);

  // Calculate Total Income
  const totalIncome = transactions.reduce(
    (acc, curr) => (curr.type === "income" ? acc + Number(curr.amount) : acc),
    0,
  );

  // Calculate Total Expense
  const totalExpense = transactions.reduce(
    (acc, curr) => (curr.type === "expense" ? acc + Number(curr.amount) : acc),
    0,
  );

  // Calculate Balance
  const totalBalance = totalIncome - totalExpense;

  // Search and Filter
  const transactionData = transactions.filter((transaction) => {
    const searchTerm = search.trim().toLowerCase();

    const textSearch =
      transaction.title.toLowerCase().includes(searchTerm) ||
      String(transaction.amount).includes(searchTerm) ||
      transaction.type.toLowerCase().includes(searchTerm) ||
      transaction.category.toLowerCase().includes(searchTerm) ||
      transaction.date.includes(searchTerm);

    const optionSearch = filters === "all" || transaction.type === filters;

    return textSearch && optionSearch;
  });

  // Handle Input Change
  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // Reset Form
  const resetForm = () => {
    setFormData(initialFormData);
    setEditId(null);
  };

  // Validate Form
  const validateForm = () => {
    const amount = Number(formData.amount);

    if (
      !formData.title.trim() ||
      !formData.amount ||
      !Number.isFinite(amount) ||
      amount <= 0 ||
      !formData.type ||
      !formData.category ||
      !formData.date
    ) {
      toast.error("Please fill in all fields correctly!");
      return false;
    }

    return true;
  };

  // Add Transaction
  const handleAddTransaction = (e) => {
    e.preventDefault();

    if (!validateForm()) return;

    const amount = Number(formData.amount);

    // Check Available Balance
    if (formData.type === "expense" && amount > totalBalance) {
      toast.error("Your available balance is insufficient!");
      return;
    }

    const newTransaction = {
      id: crypto.randomUUID(),
      ...formData,
      title: formData.title.trim(),
      amount,
    };

    setTransactions((prev) => [...prev, newTransaction]);

    toast.success("Transaction added successfully!");

    resetForm();
  };

  // Edit Transaction
  const handleEdit = (transaction) => {
    setEditId(transaction.id);

    setFormData({
      title: transaction.title,
      amount: String(transaction.amount),
      type: transaction.type,
      category: transaction.category,
      date: transaction.date,
    });

    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  // Update Transaction
  const handleUpdateTransaction = (e) => {
    e.preventDefault();

    if (!validateForm()) return;

    const oldTransaction = transactions.find(
      (transaction) => transaction.id === editId,
    );

    if (!oldTransaction) {
      toast.error("Transaction not found!");
      resetForm();
      return;
    }

    const amount = Number(formData.amount);

    // Calculate balance without old transaction
    const availableBalance =
      totalBalance -
      (oldTransaction.type === "income"
        ? Number(oldTransaction.amount)
        : -Number(oldTransaction.amount));

    // Validate Expense Balance
    if (formData.type === "expense" && amount > availableBalance) {
      toast.error("Your available balance is insufficient!");
      return;
    }

    // Update Transaction
    setTransactions((prev) =>
      prev.map((transaction) =>
        transaction.id === editId
          ? {
              ...transaction,
              ...formData,
              title: formData.title.trim(),
              amount,
            }
          : transaction,
      ),
    );

    toast.success("Transaction updated successfully!");

    resetForm();
  };

  // Delete Transaction
  const handleDeleted = (id) => {
    setTransactions((prev) =>
      prev.filter((transaction) => transaction.id !== id),
    );

    // Cancel Edit if Deleted Transaction is Being Edited
    if (editId === id) {
      resetForm();
    }

    toast.success("Transaction deleted successfully!");
  };

  // Handle Form Submit
  const handleSubmit =
    editId !== null ? handleUpdateTransaction : handleAddTransaction;

  return (
    <main className="min-h-screen bg-slate-950 text-white">
      <div className="mx-auto max-w-6xl px-4 py-10">
        {/* Header */}
        <header className="mb-10">
          <h1 className="text-3xl font-bold tracking-tight">Expense Tracker</h1>

          <p className="mt-2 text-slate-400">
            Manage your income and expenses easily.
          </p>
        </header>

        {/* Summary Cards */}
        <SummaryCards
          totalIncome={totalIncome}
          totalExpense={totalExpense}
          totalBalance={totalBalance}
        />

        {/* Add / Edit Form */}
        <TransactionForm
          formData={formData}
          editId={editId}
          handleChange={handleChange}
          handleSubmit={handleSubmit}
          resetForm={resetForm}
        />

        {/* Transaction History */}
        <section className="rounded-2xl border border-slate-800 bg-slate-900 p-6">
          {/* Search and Filter */}
          <TransactionFilters
            search={search}
            setSearch={setSearch}
            filters={filters}
            setFilters={setFilters}
          />

          {/* Transaction Table */}
          <TransactionTable
            transactions={transactionData}
            totalTransactions={transactions.length}
            handleEdit={handleEdit}
            handleDeleted={handleDeleted}
          />
        </section>
      </div>
    </main>
  );
}
