import Header from "./components/Header.jsx";
import UserInput from "./components/UserInput.jsx";
import ResultsTable from "./components/ResultsTable.jsx";

import { useState } from "react";

function App() {
  const [form, setForm] = useState({
    initialInvestment: "",
    annualInvestment: "",
    expectedReturn: "",
    duration: "",
  });
  return (
    <div>
      <Header />
      <main>
        <UserInput form={form} setForm={setForm} />
        <ResultsTable form={form} />
      </main>
    </div>
  );
}

export default App;
