import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Dự Đoán 12 Tháng | Thần Số Học - Xem Vận Mệnh Từng Tháng",
  description: "🔮 Dự đoán vận mệnh 12 tháng tới qua thần số học. Khám phá cơ hội, thách thức và lời khuyên cho từng tháng trong năm. Miễn phí và chi tiết.",
  keywords: "dự đoán 12 tháng, vận mệnh từng tháng, thần số học dự đoán, numerology forecast, bói toán hàng tháng",
  openGraph: {
    title: "Dự Đoán 12 Tháng | Xem Vận Mệnh Từng Tháng",
    description: "🔮 Dự đoán vận mệnh 12 tháng tới qua thần số học. Khám phá cơ hội và thách thức.",
    type: "website",
    locale: "vi_VN",
    siteName: "Giải Mã Tâm Linh",
  },
  twitter: {
    card: "summary_large_image",
    title: "Dự Đoán 12 Tháng | Xem Vận Mệnh Từng Tháng",
    description: "🔮 Dự đoán vận mệnh 12 tháng tới qua thần số học.",
  },
  alternates: {
    canonical: "/numerology/forecast",
  },
};

export default function NumerologyForecastLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
