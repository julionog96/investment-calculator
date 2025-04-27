import { useState } from "react";

import Header from "./components/header"
import UserInput from "./components/user-input"
import Result from "./components/result"
import { calculateInvestmentResults } from "./util/investment";

function App() {
      const [ initialInvest, setInitialInvest ] = useState(0);
      const [ annualInvest, setAnnualInvest ] = useState(0);
      const [ expectedReturn, setExpectedReturn ] = useState(0);
      const [ duration, setDuration ] = useState(0);

      const idStates = {
          '0': setInitialInvest,
          '1': setAnnualInvest,
          '2': setExpectedReturn,
          '3': setDuration
      }

      function execState(stateToExecute, value) {
          stateToExecute(value);
      }

      function handleInvestValues(e) {
          const id = e.target.id;
          const value = e.target.value;
          const stateToExecute = idStates[id];
          execState(stateToExecute, value);
          calculateInvestmentResults(initialInvest, annualInvest, expectedReturn, duration);
      }

  return (
    <>
      <Header />
      <main>
        <UserInput handleInvest={handleInvestValues} />
        <Result />
      </main>
    </>
  )
}

export default App
