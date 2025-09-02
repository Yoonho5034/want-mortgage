"use client";
import react from "react";
import MainPage from "./MainPage";

const page = () => {
  const User = [
    // 이름
    "대표",
    // 전화번호
    "010-7594-9701",
    // 상담사 등록번호
    "20-00001189",
    // 카카오톡 링크
    "https://open.kakao.com/o/scQs8Swg",
  ];
  return <MainPage User={User} number={"대출모집법인 등록번호"} />;
};

export default page;
