"use client";

import classNames from "classnames";
import react from "react";
import React from "react";

const page = () => {
  // 대출금액
  const [bond, setBond] = react.useState(null);
  // 금리
  const [bondRate, setBondRate] = react.useState(null);
  // 상환기간
  const [bondPriod, setBondPriod] = react.useState(480);
  // 대출조건
  const bondConditionArray = [
    {
      title: "실행금액",
      sub: "(만원)",
      placeholder: "10,000만원",
      value: bond,
      eventHandler: (event) => {
        setBond(event?.target?.value);
      },
    },
    {
      title: "금리",
      sub: "(%)",
      placeholder: "4.44%",
      value: bondRate,
      eventHandler: (event) => {
        setBondRate(event?.target?.value);
      },
    },
    {
      title: "상환기간",
      sub: "(개월)",
      placeholder: "480개월",
      value: bondPriod,
      eventHandler: (event) => {
        setBondPriod(event?.target?.value);
      },
    },
  ];

  // 상환방식
  const [bondType, setBondType] = react.useState(null);

  const bondTypeArray = [
    {
      title: "원리금균등",
      value: "interest",
    },
    {
      title: "원금균등",
      value: "principal",
    },
  ];

  // 연봉
  const [debtorIncome, setDebtorIncome] = react.useState(null);
  // 신용대출
  const [debtorLoan, setDebtorLoan] = react.useState(null);
  // 신용대출 금리
  const [debtorLoanRate, setDebtorLoanRate] = react.useState(null);
  // 신용대출 상환기간
  const [debtorLoanPriod, setDebtorLoanPriod] = react.useState(60);

  // 담보대출
  const [debtorBond, setDebtorBond] = react.useState(null);
  // 담보대출 금리
  const [debtorBondRate, setDebtorBondRate] = react.useState(null);
  // 담보대출 상환기간
  const [debtorBondPriod, setDebtorBondPriod] = react.useState(360);

  // 전세대출
  const [debtorRental, setDebtorRental] = react.useState(null);
  // 전세대출 금리
  const [debtorRentalRate, setDebtorRentalRate] = react.useState(null);
  // 채무자 조건
  const debtorConditionArray = [
    {
      title: "연소득",
      placeholder: "0 만원",
      handler: (event) => {
        setDebtorIncome(Number(event?.target?.value));
      },
      value: debtorIncome,
    },
    {
      title: "신용대출",
      placeholder: "0 만원",
      sub: true,
      handler: (event) => {
        setDebtorLoan(event?.target?.value);
      },
      value: debtorLoan,
      rateHandler: (event) => {
        setDebtorLoanRate(event?.target?.value);
      },
      rateValue: debtorLoanRate,
      priodHandler: (event) => {
        setDebtorLoanPriod(event?.target?.value);
      },
      priodValue: debtorLoanPriod,
    },
    {
      title: "담보대출",
      placeholder: "0 만원",
      sub: true,
      handler: (event) => {
        setDebtorBond(event?.target?.value);
      },
      value: debtorBond,
      rateHandler: (event) => {
        setDebtorBondRate(event?.target?.value);
      },
      rateValue: debtorBondRate,
      priodHandler: (event) => {
        setDebtorBondPriod(event?.target?.value);
      },
      priodValue: debtorBondPriod,
    },
    {
      title: "전세대출",
      placeholder: "0 만원",
      sub: true,
      handler: (event) => {
        setDebtorRental(event?.target?.value);
      },
      value: debtorRental,
      rateHandler: (event) => {
        setDebtorRentalRate(event?.target?.value);
      },
      rateValue: debtorRentalRate,
    },
  ];

  // dsr
  const [result, setResult] = react.useState(null);
  // dti
  const [dtiResult, setDitResult] = react.useState(null);
  // 신용대출 원리금 상환액
  const calculateValue = (
    debtorLoan,
    debtorLoanPriod,
    debtorLoanRate,
    debtorBond,
    debtorBondRate,
    debtorBondPriod,
    bond,
    bondRate,
    bondPriod,
    debtorRental,
    debtorRentalRate,
    debtorIncome
  ) => {
    // 신용대출 원리금 상환액
    const numerator =
      ((debtorLoan * 10000 * debtorLoanRate) / 1200) *
      (1 + debtorLoanRate / 1200) ** debtorLoanPriod;
    const denominator =
      (1 + debtorLoanRate / 1200) ** Number(debtorLoanPriod) - 1;
    const debtorLoanResult =
      ((numerator / denominator) * 12) / 10000
        ? ((numerator / denominator) * 12) / 10000
        : 0;

    // 기담보대출 원리금상환액
    const numerator2 =
      ((debtorBond * 10000 * debtorBondRate) / 1200) *
      (1 + debtorBondRate / 1200) ** debtorBondPriod;
    const denominator2 =
      (1 + debtorBondRate / 1200) ** Number(debtorBondPriod) - 1;
    const debtorBondResult =
      ((numerator2 / denominator2) * 12) / 10000
        ? ((numerator2 / denominator2) * 12) / 10000
        : 0;

    // 신규담보대출 상환액(원리금)
    const type1 =
      (((((bond * 10000 * bondRate) / 1200) *
        Math.pow(1 + bondRate / 1200, bondPriod)) /
        (Math.pow(1 + bondRate / 1200, bondPriod) - 1)) *
        12) /
      10000
        ? (((((bond * 10000 * bondRate) / 1200) *
            Math.pow(1 + bondRate / 1200, bondPriod)) /
            (Math.pow(1 + bondRate / 1200, bondPriod) - 1)) *
            12) /
          10000
        : 0;
    // 신규담보대출 상환액(원금균등)
    const type2 =
      ((((bond * bondRate) / 100) * (Number(bondPriod) + 1) * 10000) / 24 +
        bond * 10000) /
      (Number(bondPriod) / 12) /
      10000;

    // 전세대출
    const debtorRentalResult = (debtorRental * debtorRentalRate) / 100;

    if (bondType === "interest") {
      return (
        (debtorLoanResult + debtorBondResult + type1 + debtorRentalResult) /
        debtorIncome
      );
    } else {
      return (
        (debtorLoanResult + debtorBondResult + type2 + debtorRentalResult) /
        debtorIncome
      );
    }
  };

  // dti 계산기
  const dtiCalc = (
    debtorLoan,
    debtorLoanPriod,
    debtorLoanRate,
    debtorBond,
    debtorBondRate,
    debtorBondPriod,
    bond,
    bondRate,
    bondPriod,
    debtorRental,
    debtorRentalRate,
    debtorIncome
  ) => {
    const type1 =
      (((((bond * 10000 * bondRate) / 1200) *
        Math.pow(1 + bondRate / 1200, bondPriod)) /
        (Math.pow(1 + bondRate / 1200, bondPriod) - 1)) *
        12) /
      10000
        ? (((((bond * 10000 * bondRate) / 1200) *
            Math.pow(1 + bondRate / 1200, bondPriod)) /
            (Math.pow(1 + bondRate / 1200, bondPriod) - 1)) *
            12) /
          10000
        : 0;

    // 신용대출 원리금
    const credit = (debtorLoan * debtorLoanRate) / 100;
    // 담보대출 금리
    const loan = (debtorBond * debtorBondRate) / 100;
    // 전세대출
    const rent = (debtorRental * debtorRentalRate) / 100;

    console.log(debtorLoan, debtorLoanRate, "김윤호2");
    console.log(type1, credit, loan, rent, debtorIncome, "김윤호");
    return (type1 + credit + loan + rent) / debtorIncome;
  };

  // 계산하기
  const handleCalculate = () => {
    const calculatedValue = calculateValue(
      // 신용대출
      debtorLoan,
      debtorLoanPriod,
      debtorLoanRate,
      // 기담보대출
      debtorBond,
      debtorBondRate,
      debtorBondPriod,
      // 신규담보대출
      bond,
      bondRate,
      bondPriod,
      // 전세대출
      debtorRental,
      debtorRentalRate,
      // 연봉
      debtorIncome
    );
    const dtiValue = dtiCalc(
      // 신용대출
      debtorLoan,
      debtorLoanPriod,
      debtorLoanRate,
      // 기담보대출
      debtorBond,
      debtorBondRate,
      debtorBondPriod,
      // 신규담보대출
      bond,
      bondRate,
      bondPriod,
      // 전세대출
      debtorRental,
      debtorRentalRate,
      // 연봉
      debtorIncome
    );
    setResult(calculatedValue);
    setDitResult(dtiValue);
  };

  return (
    <div className="px-4 py-2 font-mono font-bold text-stone-500">
      {/* dsr / dti */}
      <div className="flex justify-around gap-2">
        <div className="w-1/2 h-20 bg-stone-100 rounded-lg">
          <p>DSR</p>
          <p>{(Number(result) * 100)?.toFixed(2)}%</p>
        </div>
        <div className="w-1/2 h-20 bg-stone-100 rounded-lg">
          <p>DTI</p>
          {/* const dtiCalc = ( */}
          {/* dtiResult */}
          <p>{(Number(dtiResult) * 100)?.toFixed(2)}%</p>
        </div>
      </div>
      {/* 담보대출 조건 */}
      <div className="mt-8">
        {bondConditionArray?.map(
          ({ title, placeholder, value, eventHandler, sub }, i) => {
            return (
              <div className="mt-4" key={i}>
                <div className="flex items-center">
                  <p>{title}</p>
                  <span className="text-xs">{sub}</span>
                </div>
                <input
                  value={value}
                  onChange={eventHandler}
                  className=" border-b-2 w-full text-right"
                  placeholder={placeholder}
                  type="number"
                />
              </div>
            );
          }
        )}
        <div className="mt-4">
          <p>상환방식</p>
          <div className="flex gap-2">
            {bondTypeArray?.map(({ title, value }, i) => {
              const clickEvent = () => {
                setBondType(value);
              };
              const isActive = bondType === value;
              return (
                <div
                  key={i}
                  className={classNames(
                    "flex bg-stone-100 w-1/2 rounded-lg h-10 items-center justify-center",
                    { "bg-stone-300": isActive }
                  )}
                  onClick={clickEvent}
                >
                  <span>{title}</span>
                </div>
              );
            })}
          </div>
        </div>
      </div>
      {/* 채무자 조건 */}
      <div className="mt-8 mb-12">
        {debtorConditionArray?.map(
          ({
            title,
            placeholder,
            sub,
            handler,
            value,
            rateHandler,
            rateValue,
            priodHandler,
            priodValue,
          }) => {
            return (
              <>
                <p className="mt-4">{title}</p>
                <div className="bg-stone-100 py-4 px-2">
                  <input
                    className=" border-b-2 w-full text-right bg-stone-100"
                    placeholder={placeholder}
                    onChange={handler}
                    value={value}
                    type="number"
                  />
                  {sub && (
                    <div className="mt-2 flex gap-2">
                      <div>
                        {title !== "전세대출" && (
                          <>
                            <div className="flex items-center">
                              <p>상환기간</p>
                              <span className="text-xs">(개월)</span>
                            </div>
                            <input
                              className=" border-b-2 w-full text-right bg-stone-100"
                              placeholder="480개월"
                              onChange={priodHandler}
                              value={priodValue}
                              type="number"
                            />
                          </>
                        )}
                      </div>
                      <div>
                        <p>금리</p>
                        <input
                          className=" border-b-2 w-full text-right bg-stone-100"
                          placeholder="4.2%"
                          onChange={rateHandler}
                          value={rateValue}
                          type="number"
                        />
                      </div>
                    </div>
                  )}
                </div>
              </>
            );
          }
        )}
      </div>
      <div
        onClick={handleCalculate}
        className="w-3/4 bg-orange-200 flex justify-center py-2 fixed z-10 bottom-2 left-1/2 transform -translate-x-1/2 rounded-lg"
      >
        계산하기
      </div>
    </div>
  );
};

export default page;
