import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "홍길동 | 포트폴리오",
  description: "풀스택 개발자 홍길동의 포트폴리오 웹사이트입니다. 다양한 프로젝트와 경력을 확인해보세요.",
  keywords: ["포트폴리오", "개발자", "프론트엔드", "백엔드", "풀스택", "React", "Next.js"],
  authors: [{ name: "홍길동" }],
  openGraph: {
    title: "홍길동 | 포트폴리오",
    description: "풀스택 개발자 홍길동의 포트폴리오 웹사이트",
    type: "website",
    locale: "ko_KR",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
