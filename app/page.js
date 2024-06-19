"use client";
import react from "react";
import MainPage from "./MainPage";

const page = () => {
  const User = [
    // 이름
    "김윤호",
    // 전화번호
    "010-3072-4346",
    // 상담사 등록번호
    "10-00048517",
    // 카카오톡 링크
    "https://open.kakao.com/o/scQs8Swg",
  ];
  return <MainPage User={User} />;
};

export default page;
