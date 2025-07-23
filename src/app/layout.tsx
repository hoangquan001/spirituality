import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Footer from "../components/Footer";
import Header from "../components/Header";
import LoadingBar from "../components/LoadingBar";
import { LoadingProvider } from "../contexts/LoadingContext";
import "./globals.css";

export const viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
  themeColor: '#ffffff',
};
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Giải Mã Tâm Linh | Khám Phá Bản Thân Qua Thần Số Học",
  description: "🔮 Tìm hiểu những điều thú vị về bản thân qua thần số học, cung hoàng đạo và giải mã giấc mơ. Nội dung giải trí và thông tin hữu ích.",
  keywords: "thần số học, numerology, cung hoàng đạo, giải mã giấc mơ, tâm linh, khám phá bản thân, giải trí, thông tin, tính cách, ngày sinh",
  authors: [{ name: "Tâm Linh Team" }],
  robots: "index, follow",
  openGraph: {
    title: "Giải Mã Tâm Linh | Khám Phá Bản Thân",
    description: "🔮 Tìm hiểu những điều thú vị về bản thân qua thần số học và cung hoàng đạo.",
    type: "website",
    locale: "vi_VN",
    siteName: "Tâm Linh - Thần Số Học",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Tâm Linh - Thần Số Học Chính Xác",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Tâm Linh - Thần Số Học Chính Xác",
    description: "🔮 Khám phá số mệnh miễn phí qua thần số học Pythagoras.",
    images: ["/og-image.jpg"],
  },
  alternates: {
    canonical: "https://tamlinh.com",
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
        <LoadingProvider>
          {/* Loading Bar */}
          <LoadingBar />
          
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
        </LoadingProvider>
      </body>
    </html>
  );
}
