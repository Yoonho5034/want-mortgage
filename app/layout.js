import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  // 메타 상단
  title: "원트모기지",
  description: "한화생명 대출모집법인 (주)원트모기지",
  icons: {
    icon: "/Icon.png",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
