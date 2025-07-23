import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Bói Tên Theo Thần Số Học | Phân Tích Tên Tuổi Miễn Phí - Tâm Linh",
  description: "✍️ Phân tích tên tuổi theo thần số học chính xác. Khám phá ý nghĩa tên, tính cách, vận mệnh và tác động của tên đến cuộc sống. Miễn phí 100% - Hơn 30,000 người đã sử dụng.",
  keywords: "bói tên, phân tích tên tuổi, thần số học tên, ý nghĩa tên, tên tuổi phong thủy, tác động tên đến vận mệnh, đổi tên theo thần số học, tên hay, tên đẹp, miễn phí",
  openGraph: {
    title: "Bói Tên Theo Thần Số Học | Phân Tích Tên Tuổi Miễn Phí",
    description: "✍️ Khám phá ý nghĩa và tác động của tên tuổi qua thần số học. Phân tích chi tiết tính cách, vận mệnh và lời khuyên cải thiện. Miễn phí 100%.",
    type: "website",
    locale: "vi_VN",
    siteName: "Tâm Linh - Thần Số Học",
    url: "https://tamlinh.com/name-analysis",
    images: [
      {
        url: "/name-analysis-og.jpg",
        width: 1200,
        height: 630,
        alt: "Bói Tên Theo Thần Số Học - Phân Tích Tên Tuổi",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Bói Tên Theo Thần Số Học - Phân Tích Tên Tuổi Miễn Phí",
    description: "✍️ Khám phá ý nghĩa tên tuổi qua thần số học. Phân tích tính cách và vận mệnh. Miễn phí 100%.",
    images: ["/name-analysis-og.jpg"],
  },
  alternates: {
    canonical: "https://tamlinh.com/name-analysis",
  },
};

export default function NameAnalysisLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
