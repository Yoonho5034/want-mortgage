"use client";
import react from "react";

const page = () => {
  const BankArray = [
    {
      bankName: "국민은행",
      conditions: ["급여이체", "카드사용", "자동이체", "적금", "스마트뱅킹"],
    },
    {
      bankName: "경남은행(모바일)",
      conditions: ["급여이체", "카드사용", "통장잔고 유지"],
    },
    {
      bankName: "경남은행",
      conditions: ["급여이체", "카드사용", "통장잔고 유지", "자동이체", "적금"],
    },
    {
      bankName: "기업은행",
      conditions: [
        "급여이체",
        "카드사용",
        "적금",
        "자동이체",
        "청약",
        "스마트뱅킹",
        "ISA 종합자산관리계좌",
      ],
      special: ["중소기업 재직"],
    },
    {
      bankName: "농협은행",
      conditions: ["급여이체", "카드사용", "적금", "자동이체"],
    },
    {
      bankName: "대구은행",
      conditions: [
        "급여이체",
        "카드사용",
        "적금 or 청약",
        "자동이체",
        "통장 잔고유지",
      ],
      special: ["노부모 부양", "미성년 3자녀", "모범 납세자"],
    },
    {
      bankName: "부산은행",
      conditions: [
        "급여이체",
        "카드사용",
        "자동이체",
        "통장 잔고유지",
        "스마트 뱅킹",
      ],
    },
    {
      bankName: "신한은행",
      conditions: ["급여이체3", "카드사용3", "청약가입3"],
    },
    {
      bankName: "우리은행",
      conditions: [
        "급여이체",
        "카드사용",
        "적금 or 청약",
        "청약 신규가입",
        "스마트 뱅킹",
        "자동일체",
      ],
      special: ["사회저 배려대상자"],
    },
    {
      bankName: "하나은행",
      conditions: ["급여이체", "카드사용", "적금 or 청약"],
      special: ["미성년 2자녀", "미성년 3자녀"],
    },
  ];

  const selected = {
    bankName: "기업은행",
    conditions: [
      "급여이체",
      "카드사용",
      "적금",
      "자동이체",
      "청약",
      "스마트뱅킹",
      "ISA 종합자산관리계좌",
    ],
    special: ["중소기업 재직", "대기업 재직"],
  };

  const [moneyInput, setMoneyInput] = react.useState(null);
  const moneyHandler = (event) => {
    setMoneyInput(event.target.value.replace(/[^0-9]/g, ""));
  };
  return (
    <div className="w-screen h-screen flex justify-center font-sans">
      <div className="flex gap-x-4">
        <div className="bg-red-200 flex items-center">금융사 셀렉터</div>
        <div className="flex items-center w-60 px-2">
          <div className="w-full">
            <div className="font-bold mb-1">{selected?.bankName}</div>
            <div className="flex text-xxs gap-1 1 text-stone-400">
              {selected?.special?.map((item) => {
                const [isClick, setIsClick] = react.useState(false);
                const clickHandler = () => {
                  setIsClick((isClick) => !isClick);
                };
                return (
                  <button
                    onClick={clickHandler}
                    className={`rounded-md px-1  ${
                      isClick
                        ? "bg-blue-200 text-blue-600 font-bold"
                        : "bg-slate-100"
                    }`}
                  >
                    {item}
                  </button>
                );
              })}
              {/* <div className="rounded-md bg-slate-100 px-1">1년거치</div>
              <div className="rounded-md bg-slate-100 px-1">DSR 40%</div>
              <div className="rounded-md bg-slate-100 px-1">40년 상환</div> */}
            </div>
            <div className="mt-3">
              <p className="text-xxs text-stone-500">내 금리</p>
              <p className="font-bold text-xl text-blue-500 flex items-baseline">
                <input placeholder="9.99" className="w-12" />
                <span className="text-sm font-bold">%</span>
              </p>
            </div>
            <div className="mt-3">
              <p className="text-xxs text-stone-500">내 대출한도</p>
              <p className="font-bold text-xl text-blue-500">
                <input placeholder="9.99" className="w-14" />
                <span className="text-sm font-bold">만원</span>
              </p>
            </div>
            <div className="mt-4 bg-stone-100 p-2 rounded-md">
              <div className="font-semibold text-xs mb-1 text-stone-500 border-b pb-1">
                부수거래
              </div>
              <div>
                <ul className="text-xs text-stone-400 ">
                  <li className="flex items-center">
                    <span className="mr-1">
                      <img src="./unCheck.png" className="w-2" />
                    </span>
                    <span>급여이체</span>
                  </li>
                  <li className="flex items-center">
                    <span className="mr-1">
                      <img src="./check.png" className="w-2" />
                    </span>
                    <span className="text-blue-500 font-semibold">
                      카드사용
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
