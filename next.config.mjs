/** @type {import('next').NextConfig} */
const nextConfig = {
  basePath: "/want-mortgage",
  assetPrefix: "/want-mortgage/",
  output: {
    // /out 디렉터리에 정적 파일을 생성합니다.
    dir: "out",
  },
};

export default nextConfig;
