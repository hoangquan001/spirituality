import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "../components/Header";
import Footer from "../components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Tâm Linh - Thần Số Học | Khám Phá Số Mệnh Của Bạn",
  description: "Khám phá bí mật cuộc sống qua thần số học, giải mã giấc mơ và tử vi 12 cung hoàng đạo. Tìm hiểu về bản thân và định hướng tương lai.",
  keywords: "thần số học, numerology, tử vi, giải mã giấc mơ, tâm linh, số mệnh",
  authors: [{ name: "Tâm Linh Team" }],
  openGraph: {
    title: "Tâm Linh - Thần Số Học",
    description: "Khám phá số mệnh và tìm hiểu về bản thân qua thần số học",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="vi">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased min-h-screen flex flex-col`}
      >
        {/* Floating particles effect */}
        <div className="floating-particles">
          {[...Array(20)].map((_, i) => (
            <div
              key={i}
              className="particle"
              style={{
                left: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 20}s`,
                animationDuration: `${15 + Math.random() * 10}s`,
              }}
            />
          ))}
        </div>

        <Header />
        <main className="flex-1 pt-20 relative z-10">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
