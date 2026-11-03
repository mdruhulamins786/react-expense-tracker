import { ToastContainer } from "react-toastify";
import ExpenseTracker from "./ExpenseTracker";

export default function App() {
  return (
    <>
      <ExpenseTracker />

      <ToastContainer position="top-right" autoClose={3000} theme="dark" />
    </>
  );
}
