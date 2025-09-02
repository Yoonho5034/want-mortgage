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
  // console.log(streesDsr, "김윤호");

  // 채무자 연봉 & 배우자 연봉
  const [mainIncome, setMainIncome] = react.useState(0);
  const [subIncome, setSubIncome] = react.useState(0);
  const [income, setIncome] = react.useState(0);
  react.useEffect(() => {
    setIncome(Number(mainIncome) + Number(subIncome));
  }, [mainIncome, subIncome]);

  // console.log(mainIncome, subIncome, "김윤호");

  // 담보대출 금액
  const [bond, setBond] = react.useState(0);
  // 담보대출 금리
  const [bondRate, setBondRate] = react.useState(3.56);
  // 담보대출 상환기간
  const [bondPriod, setBondPriod] = react.useState(360);

  // 기타대출 금액
  const [loan_1, setLoan_1] = react.useState(0);
  const [loan_2, setLoan_2] = react.useState(0);
  const [loan_3, setLoan_3] = react.useState(0);
  const [loan_4, setLoan_4] = react.useState(0);
  const [loan_5, setLoan_5] = react.useState(0);

  // 기타대출 상환기간
  const [etcPreiod_1, setEtcPreiod_1] = react.useState(60);
  const [etcPreiod_2, setEtcPreiod_2] = react.useState(60);
  const [etcPreiod_3, setEtcPreiod_3] = react.useState(60);
  const [etcPreiod_4, setEtcPreiod_4] = react.useState(300);
  const [etcPreiod_5, setEtcPreiod_5] = react.useState(360);

  // 기타대출 금리
  const [etcRate_1, setEtcRate_1] = react.useState(5.39);
  const [etcRate_2, setEtcRate_2] = react.useState(5.39);
  const [etcRate_3, setEtcRate_3] = react.useState(5.39);
  const [etcRate_4, setEtcRate_4] = react.useState(4.0);
  const [etcRate_5, setEtcRate_5] = react.useState(5.0);

  return (
    <div className="flex justify-center font-sans">
      {/* 내부 area */}
      <div className="w-3/4 mt-4 ">
        {/* 링크 */}
        <div className="flex gap-3">
          {hrefArray.map(({ name, link }) => {
            return (
              <button className="bg-stone-200 px-2 py-1 rounded-lg">
                <a
                  href={link}
                  className="text-stone-600 font-bold text-sm"
                  target="_blank"
                >
                  {name}
                </a>
              </button>
            );
          })}
        </div>
        {/* dsr */}
        <div className=" flex bg-stone-100 rounded-md px-6 py-4 gap-4 mt-4 font-bold text-stone-600">
          <div className="px-2 py-1 bg-stone-200  rounded-md">
            <p>원리금균등</p>
            <p>Dsr 40.00%</p>
            <p>Dti 40.00%</p>
          </div>
          <div className="px-2 py-1 bg-stone-200  rounded-md">
            <p>원금균등</p>
            <p>Dsr 40.00%</p>
            <p>Dti 40.00%</p>
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

          <div>
            <MPR
              etcRate={etcRate_1}
              preiod={etcPreiod_1}
              setMoney={setLoan_1}
              setPreiod={setEtcPreiod_1}
              setRate={setEtcRate_1}
            />
            <MPR
              etcRate={etcRate_2}
              preiod={etcPreiod_2}
              setMoney={setLoan_2}
              setPreiod={setEtcPreiod_2}
              setRate={setEtcRate_2}
            />
            <MPR
              etcRate={etcRate_3}
              preiod={etcPreiod_3}
              setMoney={setLoan_3}
              setPreiod={setEtcPreiod_3}
              setRate={setEtcRate_3}
            />
            <MPR
              etcRate={etcRate_4}
              preiod={etcPreiod_4}
              setMoney={setLoan_4}
              setPreiod={setEtcPreiod_4}
              setRate={setEtcRate_4}
            />
            <MPR
              etcRate={etcRate_5}
              preiod={etcPreiod_5}
              setMoney={setLoan_5}
              setPreiod={setEtcPreiod_5}
              setRate={setEtcRate_5}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
