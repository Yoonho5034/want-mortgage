"use client";
import MainPage from "../MainPage";

const page = () => {
  const User = [
    // 이름
    "신이일",
    // 전화번호
    "010-3029-7305",
    // 상담사 등록번호
    "10-00037153",
    // 카카오톡 링크
    "https://open.kakao.com/o/sT00Poyg",
  ];
  return <MainPage User={User} />;
};

export default page;
