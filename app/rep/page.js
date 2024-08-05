"use client";
import react from "react";
import BankModal from "./bankModal";
import Option from "./Option";
import ButtonBox from "./ButtonBox";

const page = () => {
  const BankArray = [
    {
      id: 1,
      bankName: "국민은행",
      conditions: ["급여이체", "카드사용", "자동이체", "적금", "스마트뱅킹"],
    },
    {
      id: 2,
      bankName: "경남은행(모바일)",
      conditions: ["급여이체", "카드사용", "통장잔고 유지"],
    },
    {
      id: 3,
      bankName: "경남은행",
      conditions: ["급여이체", "카드사용", "통장잔고 유지", "자동이체", "적금"],
    },
    {
      id: 4,
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
      id: 5,
      bankName: "농협은행",
      conditions: ["급여이체", "카드사용", "적금", "자동이체"],
    },
    {
      id: 6,
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
      id: 7,
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
      id: 8,
      bankName: "신한은행",
      conditions: ["급여이체3", "카드사용3", "청약가입3"],
    },
    {
      id: 9,
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
      id: 10,
      bankName: "하나은행",
      conditions: ["급여이체", "카드사용", "적금 or 청약"],
      special: ["미성년 2자녀", "미성년 3자녀"],
    },
  ];

  const [selected, setSelected] = react.useState(BankArray[0]);
  const [openModal, setOpenModal] = react.useState(false);
  const modalHandler = () => {
    setOpenModal((prev) => !prev);
  };

  const [value, setValue] = react.useState("");

  // 입력값을 1000단위로 쉼표를 추가하여 포맷팅하는 함수
  const formatNumber = (num) => {
    if (!num) return "";
    return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  };

  const handleChange = (e) => {
    const inputValue = e.target.value.replace(/,/g, ""); // 쉼표 제거
    if (!isNaN(inputValue)) {
      setValue(formatNumber(inputValue));
    }
  };

  return (
    <>
      <div className="w-screen h-screen flex justify-center font-sans">
        <div className="flex items-center w-60 px-2">
          <div className="w-full">
            <div className="font-bold mb-1">
              <button onClick={modalHandler}>{selected?.bankName}</button>
            </div>
            <div className="flex text-xxs gap-1 1 text-stone-400">
              {selected?.special?.map((item) => {
                return <ButtonBox item={item} />;
              })}
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
                <input
                  placeholder="10000"
                  className="w-20"
                  value={value}
                  onChange={handleChange}
                />
                <span className="text-sm font-bold">만원</span>
              </p>
            </div>
            <div className="mt-4 bg-stone-100 p-2 rounded-md">
              <div className="font-semibold text-xs mb-1 text-stone-500 border-b pb-1">
                부수거래
              </div>
              <div>
                <ul className="text-xs text-stone-400 ">
                  {selected?.conditions?.map((condition) => {
                    return <Option condition={condition} selected={selected} />;
                  })}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      {openModal ? (
        <BankModal
          bankArray={BankArray}
          modalHandler={modalHandler}
          setSelected={setSelected}
        />
      ) : null}
    </>
  );
};

export default page;
