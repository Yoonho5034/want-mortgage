"use client";
import react from "react";

export default function Home() {
  const [type, setType] = react.useState("Apt");

  const Tilte = [
    { title: "아파트", value: "Apt" },
    { title: "빌라", value: "Villa" },
  ];
  const Rate = [
    { value: "Apt", rate: "연 4.44% ~ 6.14%" },
    { value: "Villa", rate: "연 4.54% ~ 6.24%" },
  ];

  const Info = [
    {
      title: "금리유형",
      contents: ["연동형(변동금리)", "혼합형(고정금리 후 변동금리)"],
    },
    {
      title: "기준금리",
      contents: ["전일국고채"],
    },
    {
      title: "변동주기",
      contents: ["연동형(1,3,6,12개월)", "3년/5년 혼합형(1,6,12개월)"],
    },
    {
      title: "대출대상",
      contents: [`${type==="Apt"?"아파트":"빌라(다세대주택)"}를 담보로 제공하는 개인`],
    },
    {
      title: "대출기간",
      contents: ["15년, 20년, 30년, 35년,", "40년 (만 35세 미만)"],
    },
    {
      title: "이자부과시기",
      contents: ["매월 지정일 원리금 납입"],
    },
    {
      title: "중도상환수수료",
      contents: [
        "- 기본형 : 3년이내 원금 상환시, 1.2%",
        "- 선택 1 : 3년이내 원금 상환시 1.3%, 최초 대출금액 대비 30%까지 면제 (변동금리)",
        "- 선택 2 : 3년이내 원금 상환시 1.5%, 최초 대출금액 대비 50%까지 면제 (고정금리)",
        "- 선택 3 : 6개월이내 원금 상환시, 1.5%(단, 금리 1.0% 가산)",
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
  ];

  return (
    // 전체페이지
    <main className="w-screen relative pb-20">
      {/* 이너 */}

      <div className=" max-w-screen-md mx-auto">
        {/* 해더 */}
        <div className="py-2 flex items-center justify-between h-20">
          <div className="px-2">
            <img src="./logo.png" className="w-40" />
          </div>
          <div className="px-2 text-gray-400 font-bold text-sm">
            한화생명 대출모집법인 원트모기지
          </div>
        </div>
        {/* body */}
        <div className="mt-100 px-2">
          {/* 메인문구 */}
          <div className="pt-20">
            <div className="flex justify-between">
              <div className="flex items-center">
                <div className="bg-red-500 size-14 rounded-full">logo</div>
                <div className="pl-4">
                  <p className="text-sm text-gray-400">
                    대출상담사 등록번호 10-00048517
                  </p>
                  <p className="font-bold">
                    (주) 원트모기지{" "}
                    <span className="text-lg">김윤호 상담사</span>
                  </p>
                  <p className="font-bold text-xl">010-3072-4346</p>
                </div>
              </div>
              <button className="bg-green-500 w-36 text-white font-bold text-2xl flex items-center justify-center rounded-2xl shadow-lg hover:bg-red-500 transition-transform">
                <p>전화상담</p>
              </button>
            </div>
            <div></div>
          </div>

          <div className="flex justify-between mt-14">
            {Tilte?.map(({ title, value }) => {
              const customStyle = () => {
                if (type === value) {
                  return "text-orange-400 border-b-orange-400";
                }
                return "text-black";
              };
              return (
                <div
                  className={`w-1/2 border-b-4 border-b-orange-100 text-center cursor-pointer transition-all ${customStyle()}`}
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
            <p className="text-3xl font-extrabold">대 출 금 리</p>
            <p className="text-xl font-bold text-orange-400 py-4">
              {Rate.find((item) => item?.value === type)?.rate}
            </p>
            <p className="text-gray-500 text-sm">(2024년 4월 기준)</p>
          </div>
          <div className="bg-gray-100 w-1/2 ml-1 mr-2 rounded-2xl text-center p-2 shadow-md">
            <p className="text-3xl font-extrabold">대 출 한 도</p>
            <p className="text-xl font-bold text-orange-400 py-4">
              감정가의 최대 70% 까지
            </p>
            <p className="text-gray-500 text-sm">
              (대출금액, 신용도 등에 따라 차등 적용)
            </p>
          </div>
        </div>
        <div>
          <div className="mt-6 pl-4 my-4">한화생명 담보대출의 장점</div>
          <div className="flex">
            <div className="border w-1/2 ml-2 mr-1 rounded-2xl text-center p-2 shadow-md">
              <p className="text-2xl font-extrabold text-gray-700">
                중도상환수수료
              </p>
              <p className="text-xl font-bold text-orange-400 py-2">
                <span className="text-sm text-gray-500 mr-2">대출 원금의</span>
                50% 면제
              </p>
              <p className="text-gray-500 text-sm">(3년 이후 100% 면제)</p>
            </div>
            <div className="border w-1/2 ml-2 mr-1 rounded-2xl text-center p-2 shadow-md">
              <p className="text-2xl font-extrabold text-gray-700">거치 기간</p>
              <p className="text-xl font-bold text-orange-400 py-2">
                <span className="text-sm text-gray-500 mr-2">거치 설정</span>
                1년 이상
              </p>
              <p className="text-gray-500 text-sm">(원금선납 거치 가능)</p>
            </div>
            <div className="border w-1/2 ml-2 mr-1 rounded-2xl text-center p-2 shadow-md">
              <p className="text-2xl font-extrabold text-gray-700">낮은 DSR</p>
              <p className="text-xl font-bold text-orange-400 py-2">
                <span className="text-sm text-gray-500 mr-2">원금균등상환</span>
                DSR 계산
              </p>
              <p className="text-gray-500 text-sm">(타금융사 대비 낮은 DSR)</p>
            </div>
          </div>
        </div>
        <div className="mt-20 ">
          {/* 컨테이너 */}
          <div className="p-4 bg-slate-50 rounded-lg">
            {Info?.map(({ title, contents }) => {
              return (
                <div className="flex border-b-2 py-2 last:border-none">
                  <div className="mr-10 text-md font-bold w-32 ">{title}</div>
                  <div>
                    {contents?.map((content) => {
                      return (
                        <p className=" text-stone-600 text-sm mb-1">
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
      </div>
    </main>
  );
}

// Home.useClient = true;
