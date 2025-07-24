import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Điều Khoản Sử Dụng | Thần Số Học - Quy Định Website",
  description: "📋 Điều khoản sử dụng website Thần Số Học. Quy định về việc sử dụng website, nội dung thần số học, cung hoàng đạo, giải mã giấc mơ miễn phí và trách nhiệm người dùng.",
  keywords: "điều khoản sử dụng, quy định website, terms of service, quy tắc sử dụng, Thần Số Học, thần số học, trách nhiệm người dùng",
  openGraph: {
    title: "Điều Khoản Sử Dụng | Thần Số Học",
    description: "📋 Tìm hiểu các điều khoản và quy định khi sử dụng website Thần Số Học. Quyền và trách nhiệm của người dùng.",
    type: "website",
    locale: "vi_VN",
    siteName: "Thần Số Học",
    url: "https://tamlinh.com/terms",
    images: [
      {
        url: "/terms-og.jpg",
        width: 1200,
        height: 630,
        alt: "Điều Khoản Sử Dụng - Thần Số Học",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Điều Khoản Sử Dụng - Thần Số Học",
    description: "📋 Quy định và điều khoản sử dụng website Thần Số Học.",
    images: ["/terms-og.jpg"],
  },
  alternates: {
    canonical: "https://tamlinh.com/terms",
  },
  robots: "index, follow",
};

export default function TermsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
