"use client";

import classNames from "classnames";
import react from "react";
import React from "react";
import InputBox from "../InputBox";
import MPR from "../MPR";

const page = () => {
  // 링크
  const hrefArray = [
    { name: "매니지", link: "https://loanfit.co.kr/sw-adm/request/index.php?" },
    { name: "KB부동산", link: "https://kbland.kr/" },
    { name: "제안서", link: "https://wantmortgage.co.kr/rep" },
  ];

  // 스트레스 dsr
  const streesDsrArray = [
    { title: "0.6%", value: 0.6 },
    { title: "1.2%", value: 1.2 },
    { title: "1.5%", value: 1.5 },
  ];
  const [streesDsr, setStreesDsr] = react.useState(0.6);

  // 채무자 연봉 & 배우자 연봉
  const [mainIncome, setMainIncome] = react.useState(0);
  const [subIncome, setSubIncome] = react.useState(0);
  const [income, setIncome] = react.useState(0);
  react.useEffect(() => {
    setIncome(Number(mainIncome) + Number(subIncome));
  }, [mainIncome, subIncome]);

  // 담보대출 금액
  const [bond, setBond] = react.useState(0);
  // 담보대출 금리
  const [bondRate, setBondRate] = react.useState(3.56);
  // 담보대출 상환기간
  const [bondPriod, setBondPriod] = react.useState(360);

  const [etcLoans, setEtcLoans] = react.useState([
    { id: 0, loan: 0, preiod: 60, rate: 5.39, PI: 0 },
    { id: 1, loan: 0, preiod: 60, rate: 5.39, PI: 0 },
    { id: 2, loan: 0, preiod: 60, rate: 5.39, PI: 0 },
    { id: 3, loan: 0, preiod: 300, rate: 4.0, PI: 0 },
    { id: 4, loan: 0, preiod: 360, rate: 5.0, PI: 0 },
  ]);

  const calcLoanPI = (money, rate, preiod, id) => {
    // guard: 0이나 음수 방지
    if (!rate || !preiod) return 0;

    const numerator =
      ((money * 10000 * rate) / 1200) * (1 + rate / 1200) ** preiod;
    const denominator = (1 + rate / 1200) ** Number(preiod) - 1;
    const debtorLoanResult =
      denominator !== 0 ? ((numerator / denominator) * 12) / 10000 : 0;

    setEtcLoans((prev) => {
      // id에 맞는 index 찾기
      const targetIndex = prev.findIndex((loan) => loan.id === id);
      if (targetIndex === -1) return prev; // 못 찾으면 원본 그대로

      const newData = [...prev];
      newData[targetIndex] = {
        ...newData[targetIndex],
        PI: debtorLoanResult,
      };
      return newData;
    });

    return;
  };

  const calcEvent = () => {
    etcLoans.map(({ id, loan, preiod, rate, PI }) => {
      calcLoanPI(loan, rate, preiod, id);
    });
  };

  // 기타대출 pi
  const totalPI = etcLoans.reduce((sum, loan) => sum + loan.PI, 0);

  // 신규담보대출 상환액(원리금)
  const type1 =
    (((((bond * 10000 * (bondRate + streesDsr)) / 1200) *
      Math.pow(1 + (bondRate + streesDsr) / 1200, bondPriod)) /
      (Math.pow(1 + (bondRate + streesDsr) / 1200, bondPriod) - 1)) *
      12) /
    10000
      ? (((((bond * 10000 * (bondRate + streesDsr)) / 1200) *
          Math.pow(1 + (bondRate + streesDsr) / 1200, bondPriod)) /
          (Math.pow(1 + (bondRate + streesDsr) / 1200, bondPriod) - 1)) *
          12) /
        10000
      : 0;
  // 신규담보대출 상환액(원금균등)
  const type2 =
    ((((bond * (bondRate + streesDsr)) / 100) *
      (Number(bondPriod) + 1) *
      10000) /
      24 +
      bond * 10000) /
    (Number(bondPriod) / 12) /
    10000;

  // 원리금 균등
  const TYPE_1 =
    bond && mainIncome
      ? (((type1 + totalPI) / (mainIncome + subIncome)) * 100).toFixed(2)
      : 0;
  // 원금균등
  const TYPE_2 =
    bond && mainIncome
      ? (((type2 + totalPI) / (mainIncome + subIncome)) * 100).toFixed(2)
      : 0;

  const dti = etcLoans.reduce((sum, loan) => {
    return sum + loan.loan * (loan.rate / 100);
  }, 0);

  // DTI(원리금)
  const dti_type_1 =
    bond && mainIncome
      ? (((type1 + dti) / (mainIncome + subIncome)) * 100).toFixed(2)
      : 0;
  const dti_type_2 =
    bond && mainIncome
      ? (((type2 + dti) / (mainIncome + subIncome)) * 100).toFixed(2)
      : 0;

  react.useEffect(() => {
    calcEvent();
  }, [dti_type_1, dti_type_2]);

  return (
    <div className="flex justify-center font-sans">
      {/* 내부 area */}
      <div className="w-3/4 mt-4 ">
        {/* 링크 */}
        <div className="flex gap-3">
          {hrefArray.map(({ name, link }) => {
            return (
              <a
                href={link}
                className="text-stone-600 font-bold text-sm"
                target="_blank"
                key={name}
              >
                <button className="bg-stone-200 px-2 py-1 rounded-lg">
                  {name}
                </button>
              </a>
            );
          })}
        </div>
        {/* dsr */}
        <div className=" flex bg-stone-100 rounded-md px-6 py-4 gap-4 mt-4 font-bold text-stone-600">
          <div className="px-2 py-1 bg-stone-200  rounded-md">
            <p className="text-center">원금 균등</p>
            <p>
              Dsr <span className="text-xl text-orange-400">{TYPE_2}</span>
              <span className="text-xs"> %</span>
            </p>
            Dti <span className="text-xl text-orange-400">{dti_type_2}</span>
            <span className="text-xs"> %</span>
          </div>
          <div className="px-2 py-1 bg-stone-200  rounded-md">
            <p className="text-center">원리금 균등</p>
            <p>
              Dsr <span className="text-xl text-orange-400">{TYPE_1}</span>
              <span className="text-xs "> %</span>
            </p>
            <p>
              Dti <span className="text-xl text-orange-400">{dti_type_1}</span>
              <span className="text-xs"> %</span>
            </p>
          </div>
        </div>
        {/* 신규담보대출 */}
        <div className="mt-6 bg-stone-100 px-4 py-2 font-bold text-stone-600 rounded-lg">
          <div className="flex gap-4">
            {/* 대출금액 */}
            <InputBox
              title="대출금액"
              subTitle="만원"
              stateValue={bond}
              setStateValue={setBond}
            />
            {/* 대출금리 */}
            <InputBox
              title="대출금리"
              subTitle="%"
              stateValue={bondRate}
              setStateValue={setBondRate}
            />
          </div>
          <InputBox
            title="상환기간"
            subTitle="개월"
            stateValue={bondPriod}
            setStateValue={setBondPriod}
          />
          <div className="mb-3 text-sm">
            <div>스트레스 DSR</div>
            <>
              {streesDsrArray.map(({ title, value }) => {
                const onClick = () => {
                  setStreesDsr(value);
                };
                const isClick = streesDsr === value;
                // ("mr-2 text-md px-2 py-1 mt-2 bg-stone-300 rounded-lg text-stone-500");
                return (
                  <button
                    className={
                      isClick
                        ? "mr-2 text-md px-2 py-1 mt-2 bg-stone-400 rounded-lg text-white"
                        : "mr-2 text-md px-2 py-1 mt-2 bg-stone-200 rounded-lg text-stone-400"
                    }
                    onClick={onClick}
                    key={value}
                  >
                    {title}
                  </button>
                );
              })}
            </>
          </div>
        </div>
        {/* 소득 & 부채조건 */}
        <div className="mt-6 bg-stone-100 px-4 py-2 font-bold text-stone-600 rounded-lg">
          <div className="flex gap-3">
            <InputBox
              title="채무자 소득"
              subTitle="만 원"
              stateValue={mainIncome}
              setStateValue={setMainIncome}
            />
            <InputBox
              title="배우자 소득"
              subTitle="만 원"
              stateValue={subIncome}
              setStateValue={setSubIncome}
            />
          </div>
        </div>
        <div className="mt-6 bg-stone-100 px-4 py-2 font-bold text-stone-600 rounded-lg">
          <div className="flex gap-6">
            <div className="mr-32">기존 대출금액</div>
            <div className="mr-8">대출만기</div>
            <div>금리</div>
          </div>
          {/* 기타부채 */}
          <div>
            <MPR
              data={etcLoans?.[0]}
              setData={setEtcLoans}
              etcLoans={etcLoans}
              calcLoanPI={calcLoanPI}
            />
            <MPR data={etcLoans?.[1]} setData={setEtcLoans} />
            <MPR data={etcLoans?.[2]} setData={setEtcLoans} />
            <MPR data={etcLoans?.[3]} setData={setEtcLoans} />
            <MPR data={etcLoans?.[4]} setData={setEtcLoans} />
          </div>
        </div>
        {/* 계산기 */}
        {/* <div className="flex justify-center mt-4 font-bold text-stone-700">
          <button
            className="w-60 h-14 bg-stone-400 rounded-lg"
            onClick={calcEvent}
          >
            계산하기
          </button>
        </div> */}
      </div>
    </div>
  );
};

export default page;
