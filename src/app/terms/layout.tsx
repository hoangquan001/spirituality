import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Điều Khoản Sử Dụng | Giải Mã Tâm Linh - Quy Định Website",
  description: "📋 Điều khoản sử dụng website Giải Mã Tâm Linh. Quy định về việc sử dụng website, nội dung thần số học, cung hoàng đạo, giải mã giấc mơ miễn phí và trách nhiệm người dùng.",
  keywords: "điều khoản sử dụng, quy định website, terms of service, quy tắc sử dụng, giải mã tâm linh, thần số học, trách nhiệm người dùng",
  openGraph: {
    title: "Điều Khoản Sử Dụng | Giải Mã Tâm Linh",
    description: "📋 Tìm hiểu các điều khoản và quy định khi sử dụng website Giải Mã Tâm Linh. Quyền và trách nhiệm của người dùng.",
    type: "website",
    locale: "vi_VN",
    siteName: "Giải Mã Tâm Linh",
    url: "https://tamlinh.com/terms",
    images: [
      {
        url: "/terms-og.jpg",
        width: 1200,
        height: 630,
        alt: "Điều Khoản Sử Dụng - Giải Mã Tâm Linh",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Điều Khoản Sử Dụng - Giải Mã Tâm Linh",
    description: "📋 Quy định và điều khoản sử dụng website Giải Mã Tâm Linh.",
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
