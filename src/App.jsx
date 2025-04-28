import { useState } from "react";

import Header from "./components/Header"
import UserInput from "./components/UserInput"
import Result from "./components/Result"
import { calculateInvestmentResults } from "./util/investment";

function App() {
      const [ initialInvestment, setInitialInvestment ] = useState();
      const [ annualInvestment, setAnnualInvestment ] = useState();
      const [ expectedReturn, setExpectedReturn ] = useState();
      const [ duration, setDuration ] = useState();
      
      let results
      if (initialInvestment && annualInvestment && expectedReturn && duration) {
        results = calculateInvestmentResults({
          initialInvestment,
          annualInvestment,
          expectedReturn,
          duration          
        });
      }

      const idStates = {
          '0': setInitialInvestment,
          '1': setAnnualInvestment,
          '2': setExpectedReturn,
          '3': setDuration
      }


      function handleInvestValues(e) {
          const id = e.target.id;
          const value = parseFloat(e.target.value);
          const stateToExecute = idStates[id];
          stateToExecute(value);
      }

  return (
    <>
      <Header />
      <main>
        <UserInput handleInvest={handleInvestValues} />
        <Result results={results} />
      </main>
    </>
  )
}

export default App
