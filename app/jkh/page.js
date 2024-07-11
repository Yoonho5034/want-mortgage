"use client";
import MainPage from "../MainPage";

const page = () => {
  const User = [
    // 이름
    "장기훈",
    // 전화번호
    "010-3788-5679",
    // 상담사 등록번호
    "10-00013054",
    // 카카오톡 링크
    "https://open.kakao.com/o/sPbruWBg",
  ];
  return <MainPage User={User} />;
};

export default page;
