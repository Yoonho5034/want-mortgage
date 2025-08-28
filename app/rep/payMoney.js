// 원리금균등

import React, { useState } from "react";

const LoanCalculator = ({ money, rate, preiod }) => {
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
    const pv = parseFloat(money);
    const annualRateValue = parseFloat(rate);
    const totalPeriods = preiod * 12; // 40 years in months

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
    <div className="flex font-bold text-stone-500 justify-between mt-2">
      <div className="text-xs">
        <button onClick={handleCalculate}>1회차 상환금액</button>
      </div>
      <div className="text-xs">
        <div className="flex gap-2 w-full justify-between">
          <p>원금</p>
          <div>
            {Math.floor((firstMonthPrincipal / 1) * 10000).toLocaleString()}원
          </div>
        </div>
        <div className="flex gap-2 w-full justify-between">
          <div>이자</div>
          <div>
            {Math.floor((firstMonthInterest / 1) * 10000).toLocaleString()}원
          </div>
        </div>
        <div className="flex gap-2 w-full justify-between text-sm">
          <div>합계</div>
          <div>
            {Math.floor((monthlyPayment / 1) * 10000).toLocaleString()}원
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoanCalculator;
