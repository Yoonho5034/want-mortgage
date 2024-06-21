"use client";
import MainPage from "../MainPage";

const page = () => {
  const User = [
    // 이름
    "손성일",
    // 전화번호
    "010-7355-4722",
    // 상담사 등록번호
    "10-00005579",
    // 카카오톡 링크
    "https://open.kakao.com/o/sE3EUpyg",
  ];
  return <MainPage User={User} />;
};

export default page;
