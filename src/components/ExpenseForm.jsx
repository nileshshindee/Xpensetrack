import { useState } from "react";
import { supabase } from "../services/supabase";

export default function ExpenseForm() {
  const [title, setTitle] = useState("");
  const [amount, setAmount] = useState("");
  const [category, setCategory] = useState("Food");

  const addExpense = async () => {
    if (!title || !amount) return alert("Fill title and amount");
    const { data, error } = await supabase.from("expenses").insert([
      { title, amount, category },
    ]);
    if (error) console.log(error);
    else {
      alert("Expense added!");
      setTitle("");
      setAmount("");
    }
  };

  return (
    <form style={{ display: "flex", gap: "10px", marginBottom: "20px" }}>
      <input
        type="text"
        placeholder="Expense title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <input
        type="number"
        placeholder="Amount"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
      />
      <select value={category} onChange={(e) => setCategory(e.target.value)}>
        <option>Food</option>
        <option>Travel</option>
        <option>Shopping</option>
      </select>
      <button type="button" onClick={addExpense}>
        Add Expense
      </button>
    </form>
  );
}

