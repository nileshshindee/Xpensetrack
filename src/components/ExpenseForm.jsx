export default function ExpenseForm() {
  return (
    <form style={styles.form}>
      <input type="text" placeholder="Expense title" />
      <input type="number" placeholder="Amount" />
      <select>
        <option>Food</option>
        <option>Travel</option>
        <option>Shopping</option>
      </select>
      <button type="button">Add Expense</button>
    </form>
  );
}

const styles = {
  form: {
    display: "flex",
    gap: "10px",
    marginBottom: "20px",
  },
};

