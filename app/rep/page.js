"use client";
import react from "react";
import BankModal from "./bankModal";
import Option from "./Option";
import ButtonBox from "./ButtonBox";
import MoneyInput from "../MoneyInput";
import PayMoney from "./payMoney";
import PayMoney2 from "./payMoney2";
import Cookies from "js-cookie";

const page = () => {
  const BankArray = [
    {
      id: 1,
      bankName: "국민은행",
      conditions: [
        "급여이체 월 50만",
        "카드사용 월 30만",
        "자동이체 3건",
        "적금 30만(잔고유지)",
        "스마트뱅킹",
      ],
    },
    {
      id: 2,
      bankName: "경남은행(모바일)",
      conditions: ["카드사용 월 50만", "통장잔고 유지(100만)"],
    },
    {
      id: 3,
      bankName: "경남은행",
      conditions: [
        "급여이체 월 50만",
        "통장잔고 유지(100만)",
        "카드사용 월 50만",
        "자동이체 2건",
      ],
    },
    {
      id: 4,
      bankName: "기업은행",
      conditions: [
        "급여이체 월 50만",
        "카드사용 월 50만",
        "적금 월 10만",
        "자동이체 3건(공과금)",
        "청약 가입",
        "스마트뱅킹 월 2회",
        "ISA 종합자산관리계좌 가입",
      ],
      special: ["중소기업 재직"],
    },
    {
      id: 5,
      bankName: "농협은행",
      conditions: [
        "급여이체 월 150만",
        "카드사용 월 34만",
        "적금 10만",
        "자동이체 3건",
      ],
    },
    {
      id: 6,
      bankName: "대구은행",
      conditions: [
        "급여이체 월 100만",
        "카드사용 월 30만",
        "적금 월 30만 or 청약 월 5만",
        "자동이체 3건",
        "통장 잔고유지 (100만)",
      ],
      special: ["노부모 부양", "미성년 3자녀", "모범 납세자"],
    },
    {
      id: 7,
      bankName: "부산은행",
      conditions: [
        "급여이체 월 50만",
        "카드사용 월 70만",
        "자동이체 3건",
        "통장 잔고유지 (100만)",
        "스마트 뱅킹",
      ],
    },
    {
      id: 8,
      bankName: "신한은행",
      conditions: [
        "급여이체 월 50만",
        "카드사용 월 17만",
        "청약 월 10만 or 적금 월 10만",
      ],
    },
    {
      id: 9,
      bankName: "우리은행",
      conditions: [
        "급여이체 월 100만",
        "카드사용 월 30만",
        "적금 10만 or 청약 2만",
        "청약 신규가입",
        "스마트 뱅킹",
        "자동이체 1건",
      ],
      special: ["사회저 배려대상자"],
    },
    {
      id: 10,
      bankName: "하나은행",
      conditions: [
        "급여이체 월 100만",
        "카드사용 월 30만",
        "적금 월 10만 or 청약 월 2만",
      ],
      special: ["미성년 2자녀", "미성년 3자녀"],
    },
    {
      id: 11,
      bankName: "한화생명",
      conditions: ["저축성 보험 월 11만"],
    },
    {
      id: 12,
      bankName: "교보생명",
      conditions: ["없음"],
    },
    {
      id: 13,
      bankName: "농협손해보험",
      conditions: ["없음"],
    },
    {
      id: 14,
      bankName: "KB손해보험",
      conditions: ["없음"],
    },
  ];

  const [selected, setSelected] = react.useState(BankArray[0]);
  const [openModal, setOpenModal] = react.useState(false);
  const modalHandler = () => {
    setOpenModal((prev) => !prev);
  };

  const [repaymentType, setRepaymentType] = react.useState("원리금 균등");
  const repaymentHandler = () => {
    if (repaymentType === "원리금 균등") {
      setRepaymentType("원금 균등");
      return;
    }
    setRepaymentType("원리금 균등");
  };

  const [preiod, setPreiod] = react.useState(0);
  const preiodHandler = () => {
    if (preiod === 3) {
      setPreiod(0);
      return;
    }
    setPreiod((prev) => prev + 1);
  };
  const preiodReturn = () => {
    if (preiod === 0) {
      return "5년 고정";
    }
    if (preiod === 1) {
      return "6개월 변동";
    }
    if (preiod === 2) {
      return "1년 변동";
    }
    if (preiod === 3) {
      return "3년 고정";
    }
  };

  const [isOnlyPay, setIsOnlyPay] = react.useState(false);
  const onlyPayHandler = () => {
    setIsOnlyPay((prev) => !prev);
  };

  const [money, setMoney] = react.useState(null);
  const [rate, setRate] = react.useState(null);

  const [free, setFree] = react.useState("3년 간");
  const freeHandler = () => {
    if (free === "3년 간") {
      setFree("3년 간, 매년");
      return;
    }
    setFree("3년 간");
  };

  // 쿠키설정
  const [name, setName] = react.useState(null);
  const [contact, setContact] = react.useState(null);
  const [savedName, setSavedName] = react.useState(null);
  const [savedContact, setSavedContact] = react.useState(null);

  // 쿠키 저장 함수
  const saveToCookies = () => {
    Cookies.set("name", name);
    Cookies.set("contact", contact);
  };

  // 쿠키 불러오기 함수
  const loadFromCookies = () => {
    const savedName = Cookies.get("name");
    const savedContact = Cookies.get("contact");

    if (savedName && savedContact) {
      setSavedName(savedName);
      setSavedContact(savedContact);
    }
  };

  // 컴포넌트가 마운트될 때 쿠키를 불러옴
  react.useEffect(() => {
    loadFromCookies();
  }, []);

  return (
    <>
      <div className="w-screen h-screen flex justify-center font-sans">
        <div className="flex items-center w-60 px-2">
          <div className="w-full ">
            <div className="font-bold mb-1">
              <button onClick={modalHandler}>{selected?.bankName}</button>
            </div>
            {/* <div className="flex text-xxs gap-1 1 text-stone-400">
              {selected?.special?.map((item, i) => {
                return <ButtonBox item={item} key={i} />;
              })}
            </div> */}
            <div className="mt-3">
              <p className="text-xxs text-stone-500">내 금리</p>
              <p className="font-bold text-xl text-blue-500 flex items-baseline">
                <input
                  placeholder="4.00"
                  className="w-12"
                  onChange={(e) => setRate(e.target.value)}
                />
                <span className="text-sm font-bold">%</span>
              </p>
            </div>
            <div className="mt-3 border-b-2 border-blue-200 pb-1">
              <p className="text-xxs text-stone-500">내 대출한도</p>
              <MoneyInput setMoney={setMoney} />
            </div>
            <div className="text-xs font-bold text-stone-500 mt-2 border-b-2 border-blue-200 pb-1">
              <div className="flex justify-between">
                <p>상환방식</p>
                <button onClick={preiodHandler}>
                  <p>40년 만기 {preiodReturn()}</p>
                </button>
              </div>
              {/* <div className="flex justify-between mt-1">
                <p>거치기간</p>
                {isOnlyPay ? (
                  <input placeholder="1년 사용" className="text-right" />
                ) : (
                  <button onClick={onlyPayHandler}>
                    <p>미사용</p>
                  </button>
                )}{" "}
              </div> */}
              <div className="flex justify-between mt-1">
                <p>상환방법</p>
                <p>
                  <button onClick={repaymentHandler}>{repaymentType}</button>
                </p>
              </div>
              <div className="flex justify-between mt-1">
                <p>
                  중도상환 수수료율<span className="text-xxs">(일할차감)</span>
                </p>
                <span>
                  <input className="w-10 text-right" placeholder="1.2" />%
                </span>
              </div>
              <div className="flex justify-between mt-1">
                <button onClick={freeHandler}>
                  면제비율<span className="text-xxs">({free})</span>
                </button>
                <span>
                  <input className="w-10 text-right" placeholder="10" />%
                </span>
              </div>
            </div>
            {/* 상환금액 */}
            {repaymentType === "원리금 균등" ? (
              <PayMoney money={money} rate={rate} />
            ) : (
              <PayMoney2 money={money} rate={rate} />
            )}
            {/* 부수거래 */}
            <div className="mt-4 p-2 rounded-md bg-stone-100">
              <div className="font-semibold text-xs mb-1 text-stone-500 border-b pb-1">
                부수거래
              </div>
              <div>
                <ul className="text-xs text-stone-400 ">
                  {selected?.conditions?.map((condition, i) => {
                    return (
                      <Option
                        condition={condition}
                        selected={selected}
                        key={i}
                      />
                    );
                  })}
                </ul>
              </div>
            </div>
            {/* 상담사 이름 / 연락처 */}
            {/* {savedName ? (
              <div className="flex justify-between text-sm font-bold mt-2 font-mono items-baseline">
                <p className="text-xs">대출상담사 {savedName}</p>
                <p>{savedContact}</p>
              </div>
            ) : (
              <div>
                <input
                  placeholder="상담사 이름"
                  onChange={(e) => setName(e.target.value)}
                />
                <input
                  placeholder="상담번호"
                  onChange={(e) => setContact(e.target.value)}
                />
                <button onClick={saveToCookies} className="cursor-pointer">
                  저장하기
                </button>
              </div>
            )} */}
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
