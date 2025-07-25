import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Thần Số Học Pythagoras Chính Xác | Tính Số Mệnh Miễn Phí - Tâm Linh",
  description: "🔮 Tính thần số học chính xác theo phương pháp Pythagoras. Khám phá số mệnh (Life Path Number), tính cách, tài năng và vận mệnh. Miễn phí 100% - Hơn 50,000 người tin tưởng.",
  keywords: "thần số học, numerology, số mệnh, life path number, pythagoras, tính số mệnh, số định mệnh, số linh hồn, số nhân cách, tính cách theo số, vận mệnh, tài năng, miễn phí",
  openGraph: {
    title: "Thần Số Học Pythagoras Chính Xác | Tính Số Mệnh Miễn Phí",
    description: "🔮 Khám phá số mệnh và tính cách qua thần số học Pythagoras. Phân tích chi tiết số đường đời, định mệnh, linh hồn. Miễn phí 100%.",
    type: "website",
    locale: "vi_VN",
    siteName: "Tâm Linh - Thần Số Học",
    url: "https://tamlinh.com/than-so-hoc",
    images: [
      {
        url: "/than-so-hoc-og.jpg",
        width: 1200,
        height: 630,
        alt: "Thần Số Học Pythagoras - Tính Số Mệnh Chính Xác",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Thần Số Học Pythagoras - Tính Số Mệnh Miễn Phí",
    description: "🔮 Khám phá số mệnh và tính cách qua thần số học Pythagoras chính xác. Miễn phí 100%.",
    images: ["/than-so-hoc-og.jpg"],
  },
  alternates: {
    canonical: "https://tamlinh.com/than-so-hoc",
  },
};

export default function NumerologyLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
