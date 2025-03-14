"use client";
import react from "react";
import Modal from "./modal";
import RefundModal from "./refund";
import InterestOnlyModal from "./interestOnly";
import DsrModal from "./dsrModal";

export default function Home({ User }) {
  const [type, setType] = react.useState("Apt");
  const [isModalOpen, setIsModalOpen] = react.useState(false);
  const [refundModalOpen, isrefundModalOpen] = react.useState(false);
  const [interestOnlyOpen, setInteresOnlyOpen] = react.useState(false);
  const [dsrModalOpen, setDsrModal] = react.useState(false);

  const modalHandler = () => {
    setIsModalOpen((prev) => !prev);
  };
  const refundModalHandler = () => {
    isrefundModalOpen((prev) => !prev);
  };
  const interestOnlyModalHandler = () => {
    setInteresOnlyOpen((prev) => !prev);
  };

  const dsrModalHandler = () => {
    setDsrModal((prev) => !prev);
  };

  const Tilte = [
    { title: "아파트", value: "Apt" },
    { title: "빌라", value: "Villa" },
  ];
  // 금리 정보
  const Rate = [
    { value: "Apt", rate: "연 4.31% ~ 5.95%" },
    { value: "Villa", rate: "연 4.81% ~ 6.45%" },
    "( 2025년 3월 기준 )",
  ];
  const handleCall = () => {
    window.location.href = `tel:${User?.[1]}`; // 전화번호를 여기에 입력하세요
  };
  const Info = [
    {
      title: "상품명",
      contents: ["홈드림 모기지론"],
    },
    {
      title: "금리유형",
      contents: ["연동형(변동금리)", "혼합형(고정금리 후 변동금리)"],
    },
    {
      title: "기준금리",
      contents: ["전월 국고채"],
    },
    {
      title: "변동주기",
      contents: ["연동형(1,3,6,12개월)", "3년/5년 혼합형(1,6,12개월)"],
    },
    {
      title: "대출대상",
      contents: [
        `${
          type === "Apt" ? "아파트" : "빌라(다세대주택)"
        }를 담보로 제공하는 개인
        `,
        `${type === "Apt" ? "(CB통합등급 : 1~7등급)" : "(CB통합등급 : 1~5등급)"}
        `,
      ],
    },
    {
      title: "대출기간",
      contents: ["15년, 20년, 30년, 35년, 40년"],
    },
    {
      title: "이자부과시기",
      contents: ["매월 지정일 원리금 납입"],
    },
    {
      title: "중도상환수수료",
      contents: [
        "- 선택 1 : 36개월이내 최초대출금액 대비 30%초과 상환금액의 0.8%",
        "- 선택 2 : 36개월이내 최초대출금액 대비 50%초과 상환금액의 1.0%",
        "※ 잔존일수(중도상환수수료 부과기간 - 사용일수)에 따라 잔존만기별로 일할 계산",
        "※ 중도상환수수료 부과기간은 3년 동일 적용",
      ],
    },
    {
      title: "구비서류",
      contents: [
        "신분증, 인감도장, 인감증명서, 주민등록등본, 가족관계증명서,본인통장, 등기권리증, 소득확인서류 등",
      ],
    },
    {
      title: "취급수수료",
      contents: ["없음"],
    },
    {
      title: "인지세",
      contents: [
        "5천만원 이하 없음, 5천만원 초과시 한화생명과 고객 각각 50% 부담",
      ],
    },
    {
      title: "근저당설정비용",
      contents: ["없음"],
    },
    {
      title: "고객부담비용",
      contents: [
        "- 국민주택채권 매입 비용 근저당권 말소",
        "- 채권최고액 감액 시 비용",
        "- 등기주소 변경 및 확인서면 비용",
      ],
    },
    {
      title: "상환방법",
      contents: [
        "1) 1,3,5년 거치 후, 잔여기간동안 원금 50%(100%) / 매월(년) 균등분할 상환",
        "2) 대출 전기간 동안 원금의 50%(100%) / 매월(년)균등분할상환",
      ],
    },
  ];

  const Notice = [
    "해당 대출상담사 및 ㈜원트모기지는 금융 관계 법률에 따라 한화생명 주식회사와 주택담보대출 모집업무를 위탁 계약 체결하고 생명보험협회에 등록된 대출모집인 (대출상담사, 대출모집법인) 입니다.",
    "해당 대출상담사 및 ㈜원트모기지는 일사전속주의에 따라 한화생명보험 주식회사와 계약체결 및 대리, 중개하는 대출모집인(대출상담사, 대출모집법인) 입니다.",
    "해당 대출상담사 및 ㈜원트모기지는 한화생명보험 주식회사와 대출모집 위탁계약을 체결한 법인으로 계약체결권을 부여받지 않았으며, 타 금융사 금융상품을 판매할 수 없습니다.",

    // 기존
    // "㈜원트모기지는 금융 관계 법률에 따라 한화생명 주식회사와 주택담보대출 모집 업무를 위탁 계약 체결하고 생명보험협회에 등록된 대출모집법인 입니다",
    // "㈜원트모기지는 일사전속주의에 따라 한화생명보험 주식회사와 대출 모집 위탁계약을 체결하고 생명보험협회에 등록된 대출모집법인 입니다.",
    // "㈜원트모기지는 한화생명보험 주식회사와 대출 모집 위탁계약을 체결한 법인으로 타 금융사 금융상품을 판매할 수 없습니다.",
    "대출상담사등록 여부 확인은 대출모집인 포털사이트(www.loanconsultant.or.kr)에서 대출상담사 등록번호와 휴대전화 번호를 입력하여 조회 가능합니다.",
    "대출상담사는 고객님께 별도의 수수료를 요구하거나 수취할 수 없으며, 대출실행여부는 한화생명보험 주식회사가 직접 심사해서 결정합니다.",
    "대출상담사 및 대출모집법인 대출모집 수수료율은 한화생명보험 주식회사 홈페이지(www.hanwhalife.com금융>대출>대출가이드>대출모집인 수수료율)에서 확인 가능합니다.",
    "대출계약을 체결하기 전에 금융상품설명서 및 약관을 반드시 읽어보시길 바랍니다.",
    "대출금리는 기준금리(국고채 3년, 5년을 적용)와 가산금리(업무원가, 위험프리미엄, 목표이익률 등)를 합산하여 산출되며, 최종 적용되는 대출금리는 고객의 개인신용평점, 거래실적, 대출조건 등에 따라 가감조정금리를 반영하여 적용합니다.",
    "고객님의 신용평점, 외부 규제 및 정책 등 제반조건에 따라 대출이 제한될 수 있으며, 대출 승인 후에도 개인정보의 변동(신용평점, 채무상환 계약조건 등)이 발생할 경우 대출실행이 불가할 수 있습니다.",
    //
    "상환능력에 비해 대출금 및 신용카드사용액이 과도할 경우 귀하의 개인신용평점이 하락할 수 있습니다.",
    "여신금융상품 이용 시 개인신용평점 하락으로 다른 금융거래와 관련된 불이익이 발생할 수 있습니다.",
    "금융소비자는 금소법 제19조 제1항에 따라 해당 상품 또는 서비스에 대하여 설명을 받을 권리가 있으며, 그 설명을 듣고 내용을 충분히 이해한 후 거래하시기 바랍니다.",
    "대출기간 만기 후 대출원리금 전액을 변제하지 않거나, 대출기간 중 일정기간 원리금 납부 연체 할 경우 연체이자율이 부과되며, 대출만기가 도래하기 전에 모든 원리금을 변제할 의무가 발생할 수 있습니다.",
    "대출상품과 관련한 의문사항 또는 민원이 있을 경우 한화생명보험 주식회사 홈페이지(www.hanwhalife.com)또는 콜센터(1588-6363)으로 문의하실 수 있으며, 분쟁이 발생한 경우에는 금융감독원 (국번없이1332) 에 도움을 요청할 수 있습니다.",
    "금리인하요구권 및 대출계약철회권은 한화생명 홈페이지(www.hanwhalife.com)또는 당사 고객센터에서 확인 가능합니다.",
    "연체이자율은 정상이율 +3%, 최고 연 19%를 적용합니다.",
  ];

  const Card = [
    {
      title: "중도상환수수료",
      point: "최대 50% 면제",
      img: "coin.png",
      clickEvent: () => {
        refundModalHandler();
      },
    },
    {
      title: "거치기간",
      point: "최장 1,3,5년",
      img: "calendar.png",
      clickEvent: () => {
        interestOnlyModalHandler();
      },
    },
    {
      title: "DSR 비율",
      point: "최대 50%",
      // img: "money.png",
      img: "dsrIMG.png",
      clickEvent: () => {
        dsrModalHandler();
      },
    },
  ];
  return (
    // 전체페이지
    <main className="w-screen relative font-sans">
      <div className=" max-w-screen-md mx-auto">
        <div className="py-2 flex items-center justify-between h-20 mobile:h-14 ">
          <div className="px-2 ">
            <img src="./logo.png" className="w-40 mobile:w-24" />
          </div>
          <div className="px-2 text-stone-400 font-bold text-sm mobile:text-xs">
            한화생명 대출모집법인 원트모기지
            <p className="font-medium text-right">20-00001189</p>
          </div>
        </div>
      </div>
      <div>
        <img src="./main2.png" className="mobile:hidden" />
        <img src="./mainMo.png" className="notMobile:hidden" />
      </div>
      {/* 이너 */}
      <div className=" max-w-screen-md mx-auto mb-6">
        {/* body */}
        <div className="mt-100 px-2">
          {/* 메인문구 */}
          <div className="pt-10">
            <div className="flex justify-between mobile:block">
              <div className="flex items-center">
                <div className=" size-14 rounded-full">
                  <img src="./Icon.png" />
                </div>
                <div className="pl-4">
                  <p className="text-sm text-gray-400 mobile:text-xs">
                    대출상담사 등록번호 {User?.[2]}
                  </p>
                  <p className="font-bold text-stone-600 ">
                    <span className="text-xl mobile:text-sm">
                      {User?.[0]} 상담사
                    </span>
                  </p>
                  <p className="font-bold text-3xl text-stone-600 mobile:text-sm ">
                    {User?.[1]}
                  </p>
                </div>
              </div>
              <div className="flex mobile:mt-4">
                <button
                  className="bg-gradient-to-tr from-orange-600 to-orange-300 w-36 text-white font-bold text-2xl flex items-center justify-center rounded-2xl shadow-lg mr-2 mobile:rounded-md mobile:w-1/2 mobile:py-2 hover:from-orange-400 hover:to-orange-600"
                  onClick={handleCall}
                >
                  <p>전화상담</p>
                </button>
                <button
                  className="bg-gradient-to-tr from-yellow-300 to-orange-300 w-36 text-white font-bold text-2xl flex items-center justify-center rounded-2xl shadow-lg mobile:rounded-md mobile:w-1/2  hover:from-orange-400 hover:to-yellow-300"
                  // onClick={handleCall}
                >
                  <a href={User?.[3]} target="_blank" rel="noopener noreferrer">
                    카톡 상담
                  </a>
                </button>
              </div>
            </div>
            <div></div>
          </div>

          <div className="flex justify-between mt-14">
            {Tilte?.map(({ title, value }, i) => {
              const customStyle = () => {
                if (type === value) {
                  return "text-orange-400 border-b-orange-400";
                }
                return "text-black";
              };
              return (
                <div
                  key={i}
                  className={`w-1/2 border-b-4 text-lg font-bold text-stone-500 border-b-orange-100 text-center cursor-pointer transition-all ${customStyle()}`}
                  onClick={() => {
                    setType(value);
                  }}
                >
                  {title} 담보대출
                </div>
              );
            })}
          </div>
        </div>
        {/* 박스 */}
        <div className="flex mt-4">
          <div className="bg-gray-100 w-1/2 ml-2 mr-1 rounded-2xl text-center p-2 shadow-md">
            <p className="text-2xl font-extrabold text-stone-500 mobile:text-sm">
              대출금리
            </p>
            <p className="text-2xl font-bold text-orange-400 pb-4 pt-2 mobile:text-sm">
              {Rate.find((item) => item?.value === type)?.rate}
            </p>
            <p className="text-gray-500 text-sm mobile:text-xs">{Rate?.[2]}</p>
          </div>
          <div className="bg-gray-100 w-1/2 ml-1 mr-2 rounded-2xl text-center p-2 shadow-md">
            <p className="text-2xl font-extrabold text-stone-500 mobile:text-sm">
              대출한도
            </p>
            <p className="text-2xl font-bold text-orange-400 pb-4 pt-2 mobile:text-sm">
              감정가의 최대 70% 까지
            </p>
            <p className="text-gray-500 text-sm mobile:text-xs">
              (담보물소재지, 대출금액, 고객신용, 소득 등에 따라 차등적용)
            </p>
          </div>
        </div>
        <div>
          <div className="mt-10 pl-4 mb-4 text-xl text-stone-500 font-bold">
            한화생명 담보대출의 장점
          </div>
          {/* 작업중 */}
          <div className="flex relative">
            {Card?.map(({ title, subTitle, img, point, clickEvent }, i) => {
              return (
                <button
                  key={i}
                  className="border w-1/3 mx-1 rounded-2xl text-center p-2 shadow-md text-stone-500 hover:shadow-2xl"
                  onClick={clickEvent}
                >
                  <div className="flex justify-center">
                    <img src={img} className="size-2/3" />
                  </div>
                  <div className="font-bold mobile:text-sm">{title}</div>
                  <div>
                    <div className="flex justify-center items-end">
                      <p className="font-bold text-orange-500 text-sm">
                        {point}
                      </p>
                    </div>
                  </div>
                </button>
              );
            })}
          </div>
        </div>
        <div className="mt-20 mobile:mt-10">
          {/* 컨테이너 */}
          <div className="p-4 bg-slate-50 rounded-lg">
            {Info?.map(({ title, contents }, i) => {
              return (
                <div className="flex border-b-2 py-2 last:border-none" key={i}>
                  <div className="text-stone-700 mr-10 text-md font-bold w-32 mobile:text-sm mobile:w-24 mobile:mr-0">
                    {title}
                  </div>
                  <div>
                    {contents?.map((content, i) => {
                      return (
                        <p
                          key={i}
                          className=" text-stone-600 text-sm mb-1 mobile:text-xs mobile:min-w-56"
                        >
                          {content}
                        </p>
                      );
                    })}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
        <div className="mobile:px-2">
          <div className="mt-14 font-bold text-xl text-stone-500 mb-4 mobile:mt-6 mobile:text-sm">
            꼭 알아두실 내용!
          </div>
          <ul>
            {Notice?.map((item, i) => {
              const isColor = i === 9 || i === 10 || i === 12;
              return (
                <li
                  key={i}
                  // className="text-stone-500 mb-2 text-sm mobile:text-xs"
                  className={`${
                    isColor ? "text-orange-500" : "text-stone-500"
                  } mb-2 text-sm mobile:text-xs"`}
                >
                  - {item}
                </li>
              );
            })}
          </ul>
        </div>
      </div>

      {/* footer */}
      <div className="bg-gray-100 border-t-2 py-4 text-stone-500 text-sm mobile:px-2 mobile:py-2">
        {/* footer Inner */}
        <div className="max-w-screen-md mx-auto mb-6 mobile:mb-4 text-center">
          <div>
            <button
              className="font-bold"
              onClick={() => {
                modalHandler();
              }}
            >
              이용약관
            </button>
          </div>
          <div className="flex mobile:text-xs justify-center">
            <div className="flex">
              {/* <p>(주)원트모기지</p>
              <p className="mx-4">사업자등록번호 : 661-86-02715</p> */}
              <p className="mr-4">
                (주)원트모기지 사업자등록번호 : 661-86-02715
                <p>대표자명 : 송호성</p>
              </p>
            </div>
          </div>
          <div className="mobile:text-xs mobile:my-2">
            <p>
              주소 : 서울특별시 강서구 마곡동 759-3(마곡중앙로 161-17)
              <p>보타닉파크타워1차 616호</p>
            </p>
          </div>
          <div className="flex justify-center mobile:text-xs">
            <p>
              (주)한화생명 대출모집법인 (주)원트모기지 등록번호 : 20-00001189
            </p>
          </div>
          <p className="mobile:text-xs">
            <p>준법감시인확인필 LS 24-07-001 (’24.07.15 ~ ’25.07.14)</p>
            관리 한화생명 융자마케팅사업부
          </p>
        </div>
      </div>
      {isModalOpen ? <Modal modalHandler={() => modalHandler} /> : null}
      {refundModalOpen ? (
        <RefundModal refundModalHandler={() => refundModalHandler} />
      ) : null}

      {interestOnlyOpen ? (
        <InterestOnlyModal
          interestOnlyModalHandler={() => interestOnlyModalHandler}
        />
      ) : null}
      {dsrModalOpen ? (
        <DsrModal dsrModalHandler={() => dsrModalHandler} />
      ) : null}
    </main>
  );
}
