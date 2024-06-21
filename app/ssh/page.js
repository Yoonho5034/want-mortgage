"use client";
import MainPage from "../MainPage";

const page = () => {
  const User = [
    // 이름
    "송승환",
    // 전화번호
    "010-9977-5992",
    // 상담사 등록번호
    "10-00016623",
    // 카카오톡 링크
    "https://open.kakao.com/o/sxwRRvyg",
  ];
  return <MainPage User={User} />;
};

export default page;
