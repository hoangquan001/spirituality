import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Cung Hoàng Đạo | Tử Vi 12 Cung Hoàng Đạo Chính Xác - Tâm Linh",
  description: "⭐ Xem tử vi 12 cung hoàng đạo chính xác nhất. Khám phá tính cách, tình yêu, sự nghiệp và vận mệnh theo cung hoàng đạo. Dự đoán tương lai miễn phí - Hơn 60,000 người tin tưởng.",
  keywords: "cung hoàng đạo, tử vi, 12 cung hoàng đạo, tính cách cung hoàng đạo, tình yêu cung hoàng đạo, sự nghiệp cung hoàng đạo, dự đoán tương lai, zodiac, astrology, miễn phí",
  openGraph: {
    title: "Cung Hoàng Đạo | Tử Vi 12 Cung Hoàng Đạo Chính Xác",
    description: "⭐ Khám phá tính cách và vận mệnh qua 12 cung hoàng đạo. Dự đoán tình yêu, sự nghiệp và tương lai chính xác. Miễn phí 100%.",
    type: "website",
    locale: "vi_VN",
    siteName: "Tâm Linh - Thần Số Học",
    url: "https://tamlinh.com/zodiac",
    images: [
      {
        url: "/zodiac-og.jpg",
        width: 1200,
        height: 630,
        alt: "Cung Hoàng Đạo - Tử Vi 12 Cung",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Cung Hoàng Đạo - Tử Vi 12 Cung Hoàng Đạo",
    description: "⭐ Khám phá tính cách và vận mệnh qua 12 cung hoàng đạo. Dự đoán chính xác. Miễn phí 100%.",
    images: ["/zodiac-og.jpg"],
  },
  alternates: {
    canonical: "https://tamlinh.com/zodiac",
  },
};

export default function ZodiacLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
