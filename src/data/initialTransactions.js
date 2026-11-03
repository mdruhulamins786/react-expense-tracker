export const initialTransactions = [
  {
    id: crypto.randomUUID(),
    title: "Monthly Salary",
    amount: 30000,
    type: "income",
    category: "salary",
    date: "2026-11-03",
  },
  {
    id: crypto.randomUUID(),
    title: "Freelancing Project",
    amount: 15000,
    type: "income",
    category: "freelancing",
    date: "2026-11-02",
  },
  {
    id: crypto.randomUUID(),
    title: "Grocery Shopping",
    amount: 3500,
    type: "expense",
    category: "food",
    date: "2026-11-02",
  },
  {
    id: crypto.randomUUID(),
    title: "Internet Bill",
    amount: 1200,
    type: "expense",
    category: "bills",
    date: "2026-11-01",
  },
  {
    id: crypto.randomUUID(),
    title: "New Keyboard",
    amount: 2500,
    type: "expense",
    category: "shopping",
    date: "2026-10-31",
  },
];

export const initialFormData = {
  title: "",
  amount: "",
  type: "",
  category: "",
  date: "",
};
