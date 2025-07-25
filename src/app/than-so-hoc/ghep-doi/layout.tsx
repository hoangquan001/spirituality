import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Ghép Đôi Ngày Sinh | Thần Số Học - Xem Độ Hợp Tình Yêu",
  description: "💕 Khám phá độ hợp tình yêu qua thần số học. Phân tích mức độ tương thích giữa hai người dựa trên số đường đời từ ngày sinh. Miễn phí và chính xác.",
  keywords: "ghép đôi ngày sinh, độ hợp tình yêu, thần số học tình yêu, tương thích ngày sinh, bói tình yêu, numerology compatibility",
  openGraph: {
    title: "Ghép Đôi Ngày Sinh | Xem Độ Hợp Tình Yêu",
    description: "💕 Khám phá độ hợp tình yêu qua thần số học. Phân tích tương thích dựa trên ngày sinh.",
    type: "website",
    locale: "vi_VN",
    siteName: "Thần Số Học",
  },
  twitter: {
    card: "summary_large_image",
    title: "Ghép Đôi Ngày Sinh | Xem Độ Hợp Tình Yêu",
    description: "💕 Khám phá độ hợp tình yêu qua thần số học.",
  },
  alternates: {
    canonical: "/than-so-hoc/ghep-doi",
  },
};

export default function NumerologyCompatibilityLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
