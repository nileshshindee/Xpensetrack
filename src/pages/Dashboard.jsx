import Navbar from "../components/Navbar";
import ExpenseForm from "../components/ExpenseForm";
import ExpenseList from "../components/ExpenseList";

export default function Dashboard() {
  return (
    <>
      <Navbar />
      <main style={styles.main}>
        <h1>Dashboard</h1>
        <ExpenseForm />
        <ExpenseList />
      </main>
    </>
  );
}

const styles = {
  main: {
    padding: "20px",
  },
};

