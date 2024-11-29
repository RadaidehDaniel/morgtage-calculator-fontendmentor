import { useState } from "react";
import Input from "./components/Input";
import RadioInput from "./components/RadioInput";
import Result from "./components/Result";

function App() {
  const [data, setData] = useState({
    amount: 0,
    term: 0,
    interest: 0,
    mortgageType: "none",
  });

  function handleSubmit(e) {
    e.preventDefault();

    const formData = new FormData(e.target);
    const dataEntries = Object.fromEntries(formData.entries());

    setData({ ...dataEntries });
  }

  function handleClear() {
    setData({ amount: 0, term: 0, interest: 0, mortgageType: "none" });
  }

  return (
    <div id="app">
      <div id="calculator">
        <header>
          <h1>Mortgage Calculator</h1>
          <button onClick={handleClear}>Clear All</button>
        </header>
        <main>
          <form onSubmit={handleSubmit}>
            <Input title="Mortgage Amount" id="amount" text="$" prefix />
            <div className="together">
              <Input title="Mortgage Term" id="term" text="years" />
              <Input title="Interest Rate" id="interest" text="%" />
            </div>
            <p className="mortgage-type-style">Mortgage Type</p>
            <div className="radio-options">
              <RadioInput
                title="Repayment"
                name="mortgageType"
                id="repayment"
                value="repayment"
              />
              <RadioInput
                title="Interest Only"
                name="mortgageType"
                id="interest-radio"
                value="interest"
              />
            </div>
            <button id="submit-button" type="submit">
              Calculate Repayments
            </button>
          </form>
        </main>
      </div>
      <Result data={data} />
    </div>
  );
}

export default App;
