// 원금균등
import React, { useState } from "react";

const PrincipalEqualPaymentCalculator = ({ rate, money }) => {
  const [monthlyPrincipalPayment, setMonthlyPrincipalPayment] = useState("");
  const [firstMonthInterest, setFirstMonthInterest] = useState("");
  const [firstMonthTotalPayment, setFirstMonthTotalPayment] = useState("");

  const calculatePayments = (pv, annualRate, totalPeriods) => {
    const monthlyRate = annualRate / 12 / 100; // Convert annual rate to monthly rate
    const monthlyPrincipal = pv / totalPeriods; // Fixed monthly principal payment
    const firstMonthInterest = pv * monthlyRate; // Interest for the first month
    const firstMonthTotalPayment = monthlyPrincipal + firstMonthInterest; // Total payment for the first month

    return { monthlyPrincipal, firstMonthInterest, firstMonthTotalPayment };
  };

  const handleCalculate = () => {
    const pv = parseFloat(money);
    const annualRateValue = parseFloat(rate);
    const totalPeriods = 40 * 12; // 40 years in months

    if (!isNaN(pv) && !isNaN(annualRateValue)) {
      const { monthlyPrincipal, firstMonthInterest, firstMonthTotalPayment } =
        calculatePayments(pv, annualRateValue, totalPeriods);
      setMonthlyPrincipalPayment(monthlyPrincipal.toFixed(2)); // Format to 2 decimal places
      setFirstMonthInterest(firstMonthInterest.toFixed(2)); // Format to 2 decimal places
      setFirstMonthTotalPayment(firstMonthTotalPayment.toFixed(2)); // Format to 2 decimal places
    } else {
      setMonthlyPrincipalPayment("Invalid input");
      setFirstMonthInterest("Invalid input");
      setFirstMonthTotalPayment("Invalid input");
    }
  };

  return (
    // <div>
    //   <button onClick={handleCalculate}>Calculate</button>
    //   <p>Monthly Principal Payment: {monthlyPrincipalPayment}</p>
    //   <p>First Month Interest: {firstMonthInterest}</p>
    //   <p>First Month Total Payment: {firstMonthTotalPayment}</p>
    // </div>

    <div className="flex font-bold text-stone-500 justify-between mt-2">
      <div className="text-xs">
        <button onClick={handleCalculate}>1회차 상환금액</button>
      </div>
      <div className="text-xs">
        <div className="flex gap-2 w-full justify-between">
          <p>원금</p>
          <div>
            {Math.floor((monthlyPrincipalPayment / 1) * 10000).toLocaleString()}원
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
            {Math.floor((firstMonthTotalPayment / 1) * 10000).toLocaleString()}원
          </div>
        </div>
      </div>
    </div>
  );
};

export default PrincipalEqualPaymentCalculator;
