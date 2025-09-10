// "use client";

// import Newpage from "./Newpage";

// const page = () => {
//   return <Newpage />;
// };

// export default page;

"use client";

import Newpage from "./Newpage";

// ❗ 대문자 컴포넌트명
const Page = () => {
  return <Newpage />;
};

export default Page;

// ❗ 이 페이지는 빌드타임 프리렌더를 강제로 끕니다.
export const dynamic = "force-dynamic";
// 또는 export const revalidate = 0;
