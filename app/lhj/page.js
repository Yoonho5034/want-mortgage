"use client";
import MainPage from "../MainPage";

const page = () => {
  const User = [
    // 이름
    "이흥주",
    // 전화번호
    "010-4140-6574",
    // 상담사 등록번호
    "10-00043371",
    // 카카오톡 링크
    "https://open.kakao.com/o/sbQ6788g",
  ];
  return <MainPage User={User} />;
};

export default page;
