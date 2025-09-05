"use client";
import react from "react";
import BankModal from "./bankModal";
import Option from "./Option";
import ButtonBox from "./ButtonBox";
import MoneyInput from "../MoneyInput";
import PayMoney from "./payMoney";
import PayMoney2 from "./payMoney2";
import Cookies from "js-cookie";
import { useSearchParams } from "next/navigation";

const Page = () => {
  const sp = useSearchParams();

  const BankArray = [
    {
      id: 1,
      bankName: "경남은행",
      conditions: [
        "급여이체 월 50만",
        "통장잔고 유지(100만)",
        "카드사용 월 50만",
        "자동이체 2건",
      ],
    },
    {
      id: 2,
      bankName: "경남은행(모바일)",
      conditions: ["카드사용 월 50만", "통장잔고 유지(100만)"],
    },
    {
      id: 3,
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
      bankName: "교보생명",
      conditions: ["없음"],
    },
    {
      id: 6,
      bankName: "단위농협",
      conditions: ["카드 발급", "카드 사용", "화재 보험", "모바일 뱅킹 가입"],
    },
    {
      id: 7,
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
      id: 8,
      bankName: "동양생명",
      conditions: ["없음"],
    },
    {
      id: 9,
      bankName: "농협생명",
      conditions: ["없음"],
    },
    {
      id: 10,
      bankName: "농협손해보험",
      conditions: ["없음"],
    },
    {
      id: 11,
      bankName: "농협은행",
      conditions: [
        "급여이체 월 150만",
        "카드사용 월 34만",
        "적금 10만",
        "통장 잔고유지 (200만)",
        "올원뱅크 가입",
      ],
    },
    {
      id: 12,
      bankName: "부산은행",
      conditions: [
        "급여이체 월 50만",
        "카드사용 월 70만",
        "자동이체 3건",
        "통장 잔고유지 (100만)",
        "스마트 뱅킹",
        "청약 10만",
      ],
    },
    {
      id: 13,
      bankName: "삼성생명",
      conditions: ["없음"],
    },
    {
      id: 14,
      bankName: "삼성화재",
      conditions: ["없음"],
    },
    {
      id: 15,
      bankName: "신한은행",
      conditions: [
        "급여이체 월 50만",
        "카드사용 월 17만",
        "청약 월 10만 or 적금 월 10만",
      ],
    },
    {
      id: 16,
      bankName: "신협",
      conditions: ["화재보험"],
    },
    {
      id: 17,
      bankName: "수협",
      conditions: ["없음"],
    },
    {
      id: 18,
      bankName: "우리은행",
      conditions: ["급여이체 월 100만", "카드사용 월 30만", "적금 10만"],
      special: ["사회저 배려대상자"],
    },
    {
      id: 19,
      bankName: "제일은행",
      conditions: ["급여이체 월 70만", "카드사용 월 30만"],
    },
    {
      id: 20,
      bankName: "하나생명",
      conditions: ["없음"],
    },
    {
      id: 21,
      bankName: "하나은행",
      conditions: [
        "급여이체 월 100만",
        "카드사용 월 30만",
        "적금 월 10만 or 청약 월 5만",
      ],
      special: ["미성년 2자녀", "미성년 3자녀"],
    },
    {
      id: 22,
      bankName: "한화생명",
      conditions: ["저축성 보험 월 11만"],
    },
    {
      id: 23,
      bankName: "현대해상",
      conditions: ["없음"],
    },
    {
      id: 24,
      bankName: "KB손해보험",
      conditions: ["없음"],
    },
  ];
  const JsbankArray = [
    {
      id: 101,
      bankName: "우리은행",
      conditions: [
        "급여이체 월 100만",
        "카드사용 월 30만",
        "적금 10만",
        "부동산 전자계약",
      ],
      special: ["사회저 배려대상자"],
    },
    {
      id: 102,
      bankName: "ABL 생명",
      conditions: ["없음"],
      special: ["사회저 배려대상자"],
    },
    {
      id: 103,
      bankName: "단위 신협",
      conditions: ["건별 확인 필요"],
    },
    {
      id: 104,
      bankName: "단위 농협",
      conditions: ["건별 확인 필요"],
    },
    {
      id: 105,
      bankName: "단위 수협",
      conditions: ["건별 확인 필요"],
    },
    {
      id: 105,
      bankName: "새마을 금고",
      conditions: ["건별 확인 필요"],
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

  const [fixed, setFixed] = react.useState(null);

  const [money, setMoney] = react.useState(Number(sp.get("bond")));
  const [rate, setRate] = react.useState(Number(sp.get("bondRate")));
  const [preiod, setPreiod] = react.useState(Number(sp.get("bondPriod")) / 12);

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

  // 전세대출
  const securityArray = [
    { id: 1, label: "3개월 변동", value: "3개월 변동" },
    { id: 2, label: "6개월 변동", value: "6개월 변동" },
    { id: 3, label: "1년 변동", value: "1년 변동" },
    { id: 4, label: "3년 고정", value: "3년 고정" },
    { id: 5, label: "5년 고정", value: "5년 고정" },
  ];

  const jsArray = [
    { id: 1, label: "6개월 변동", value: "6개월 변동" },
    { id: 2, label: "1년 변동", value: "1년 변동" },
    { id: 3, label: "2년 고정", value: "2년 고정" },
  ];
  const jsTypeArray = [
    { id: 1, label: "SGI", value: "SGI" },
    { id: 2, label: "HF", value: "HF" },
    { id: 3, label: "HUG", value: "HUG" },
  ];

  const renderArray = selected.id >= 100 ? jsArray : securityArray;
  const [jsType, setJsType] = react.useState(null);

  return (
    <>
      <div className="flex items-center justify-center h-screen overflow-hidden font-sans">
        <div
          className="flex items-center w-72 px-4 scale-150 py-4 border border-stone-200 shadow-xl rounded-md
        "
        >
          <div className="w-full">
            <div className="font-bold mb-1 flex justify-between items-baseline">
              <div>
                <button onClick={modalHandler}>{selected?.bankName}</button>
                {jsType && selected.id >= 100 && (
                  <button
                    className="border text-xxs border-blue-300 ml-1 px-1 bg-blue-300 rounded-xl text-white"
                    onClick={() => setJsType(null)}
                  >
                    {jsType}
                  </button>
                )}
              </div>
              <p className="text-stone-400 text-xxs">
                {new Date().getFullYear()}.
                {String(new Date().getMonth() + 1).padStart(2, "0")}.
                {String(new Date().getDate()).padStart(2, "0")}
              </p>
            </div>
            {(selected.id >= 100) & (jsType === null) ? (
              <>
                {jsTypeArray.map(({ id, label, value }) => {
                  return (
                    <button
                      onClick={() => setJsType(value)}
                      // setFixed
                      key={id}
                      className="border px-1 rounded-xl text-stone-500 text-xxs mr-1"
                    >
                      {label}
                    </button>
                  );
                })}
              </>
            ) : null}
            {/* <div className="flex text-xxs gap-1 1 text-stone-400">
              {selected?.special?.map((item, i) => {
                return <ButtonBox item={item} key={i} />;
              })}
            </div> */}
            <div className="mt-3">
              <p className="text-xxs text-stone-500">내 금리</p>
              <p className="font-bold text-xl text-blue-500 flex items-baseline justify-end">
                <span className="text-xs mr-2 text-blue-500">
                  <button onClick={() => setFixed(null)}>{fixed}</button>
                </span>
                <input
                  placeholder="4.00"
                  value={rate ? rate : null}
                  className="w-11 text-right mr-1"
                  onChange={(e) => setRate(e.target.value)}
                />
                <span className="text-sm font-bold">%</span>
              </p>
              {fixed ? null : (
                <div className="text-[7px] flex gap-1">
                  {renderArray.map(({ id, label, value }) => {
                    return (
                      <button
                        onClick={() => setFixed(value)}
                        setFixed
                        key={id}
                        className="border px-1 rounded-xl text-stone-500"
                      >
                        {label}
                      </button>
                    );
                  })}
                </div>
              )}
            </div>
            <div className="mt-3 border-b-2 border-blue-200 pb-1">
              <p className="text-xxs text-stone-500">내 대출한도</p>
              <MoneyInput setMoney={setMoney} money={money} />
            </div>
            <div className="text-xs font-bold text-stone-500 mt-2 border-b-2 border-blue-200 pb-1 ">
              <div className="flex justify-between">
                <p>상환기간</p>
                <div className="flex">
                  <div className="flex ">
                    <input
                      className="w-8 text-right"
                      placeholder="30"
                      value={preiod ? preiod : null}
                      onChange={(e) => setPreiod(e.target.value)}
                    />
                    <span>년 만기</span>
                  </div>
                  {/* <button onClick={() => setFixed(null)}>{fixed}</button> */}
                </div>
              </div>
              <div className="flex justify-between mt-1">
                <p>상환방법</p>
                <p>
                  {selected.id >= 100 ? (
                    <p>만기일시 상환</p>
                  ) : (
                    <button onClick={repaymentHandler}>{repaymentType}</button>
                  )}
                </p>
              </div>
              <div className="flex justify-between mt-1">
                <p>
                  중도상환 수수료율<span className="text-xxs">(일할차감)</span>
                </p>
                <span>
                  <input className="w-10 text-right" placeholder="0.6" />%
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
              <PayMoney
                money={money}
                rate={rate}
                preiod={preiod}
                JSTF={selected.id >= 100}
              />
            ) : (
              <PayMoney2
                money={money}
                rate={rate}
                preiod={preiod}
                JSTF={selected.id >= 100}
              />
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
          JsbankArray={JsbankArray}
        />
      ) : null}
    </>
  );
};

export default Page;
