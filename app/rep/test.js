import React, { useState } from "react";

const LoanCalculator = () => {
  const [loanAmount, setLoanAmount] = useState("");
  const [annualRate, setAnnualRate] = useState("");
  const [monthlyPayment, setMonthlyPayment] = useState("");
  const [firstMonthPrincipal, setFirstMonthPrincipal] = useState("");
  const [firstMonthInterest, setFirstMonthInterest] = useState("");

  // Calculates the monthly payment amount
  const calculateMonthlyPayment = (pv, rate, n) => {
    const monthlyRate = rate / 12 / 100;
    return (monthlyRate * pv) / (1 - Math.pow(1 + monthlyRate, -n));
  };

  // Calculates the PPMT and IPMT for the first month
  const calculateLoanDetails = (pv, annualRate, totalPeriods) => {
    const monthlyRate = annualRate / 12 / 100;
    const payment = calculateMonthlyPayment(pv, annualRate, totalPeriods);

    // First month interest
    const firstMonthInterest = pv * monthlyRate;
    // First month principal
    const firstMonthPrincipal = payment - firstMonthInterest;

    return { payment, firstMonthPrincipal, firstMonthInterest };
  };

  const handleCalculate = () => {
    const pv = parseFloat(loanAmount);
    const annualRateValue = parseFloat(annualRate);
    const totalPeriods = 40 * 12; // 40 years in months

    if (!isNaN(pv) && !isNaN(annualRateValue)) {
      const { payment, firstMonthPrincipal, firstMonthInterest } =
        calculateLoanDetails(pv, annualRateValue, totalPeriods);
      setMonthlyPayment(payment.toFixed(2)); // Format to 2 decimal places
      setFirstMonthPrincipal(firstMonthPrincipal.toFixed(2)); // Format to 2 decimal places
      setFirstMonthInterest(firstMonthInterest.toFixed(2)); // Format to 2 decimal places
    } else {
      setMonthlyPayment("Invalid input");
      setFirstMonthPrincipal("Invalid input");
      setFirstMonthInterest("Invalid input");
    }
  };

  return (
    <div>
      <h2>Loan Calculator</h2>
      <div>
        <label>
          Loan Amount (e.g., 40000000):
          <input
            type="number"
            value={loanAmount}
            onChange={(e) => setLoanAmount(e.target.value)}
            placeholder="Enter loan amount"
          />
        </label>
      </div>
      <div>
        <label>
          Annual Interest Rate (%):
          <input
            type="number"
            step="0.01"
            value={annualRate}
            onChange={(e) => setAnnualRate(e.target.value)}
            placeholder="Enter annual interest rate"
          />
        </label>
      </div>
      <button onClick={handleCalculate}>Calculate</button>
      <p>Monthly Payment: {monthlyPayment}</p>
      <p>First Month Principal: {firstMonthPrincipal}</p>
      <p>First Month Interest: {firstMonthInterest}</p>
    </div>
  );
};

export default LoanCalculator;
