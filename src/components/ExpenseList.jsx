import { useEffect, useState } from "react";
import { supabase } from "../services/supabase";

export default function ExpenseList() {
  const [expenses, setExpenses] = useState([]);

  useEffect(() => {
    fetchExpenses();
  }, []);

  const fetchExpenses = async () => {
    const { data, error } = await supabase
      .from("expenses")
      .select("*")
      .order("created_at", { ascending: false });
    if (error) console.log(error);
    else setExpenses(data);
  };

  return (
    <div>
      <h3>Expenses</h3>
      <ul>
        {expenses.map((e) => (
          <li key={e.id}>
            {e.title} – ₹{e.amount} ({e.category})
          </li>
        ))}
      </ul>
    </div>
  );
}

