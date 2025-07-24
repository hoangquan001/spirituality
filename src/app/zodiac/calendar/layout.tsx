import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Lịch Tử Vi Cá Nhân | Dự Đoán Từng Ngày Theo Cung Hoàng Đạo",
  description: "📅 Lịch tử vi cá nhân - Dự đoán chi tiết từng ngày theo cung hoàng đạo. Xem vận mệnh hàng ngày, giờ may mắn, màu sắc phù hợp. Miễn phí và chính xác.",
  keywords: "lịch tử vi cá nhân, dự đoán từng ngày, tử vi hàng ngày, lịch cung hoàng đạo, vận mệnh từng ngày, horoscope calendar",
  openGraph: {
    title: "Lịch Tử Vi Cá Nhân | Dự Đoán Từng Ngày",
    description: "📅 Lịch tử vi cá nhân - Dự đoán chi tiết từng ngày theo cung hoàng đạo.",
    type: "website",
    locale: "vi_VN",
    siteName: "Thần Số Học",
    images: [
      {
        url: "/og-zodiac-calendar.jpg",
        width: 1200,
        height: 630,
        alt: "Lịch Tử Vi Cá Nhân - Dự Đoán Từng Ngày",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Lịch Tử Vi Cá Nhân | Dự Đoán Từng Ngày",
    description: "📅 Lịch tử vi cá nhân - Dự đoán chi tiết từng ngày theo cung hoàng đạo.",
    images: ["/og-zodiac-calendar.jpg"],
  },
  alternates: {
    canonical: "/zodiac/calendar",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  other: {
    'revisit-after': '1 day',
    'content-language': 'vi',
  },
};

// JSON-LD structured data for SEO
const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'WebPage',
  name: 'Lịch Tử Vi Cá Nhân - Dự Đoán Từng Ngày',
  description: 'Tạo lịch tử vi cá nhân với dự đoán chi tiết cho từng ngày trong tháng theo cung hoàng đạo',
  url: 'https://giaima-tamlinh.com/zodiac/calendar',
  mainEntity: {
    '@type': 'Article',
    headline: 'Lịch Tử Vi Cá Nhân - Dự Đoán Vận Mệnh Từng Ngày',
    description: 'Công cụ tạo lịch tử vi cá nhân giúp dự đoán vận mệnh, năng lượng, tâm trạng và lời khuyên cho từng ngày trong tháng',
    author: {
      '@type': 'Organization',
      name: 'Thần Số Học'
    },
    publisher: {
      '@type': 'Organization',
      name: 'Thần Số Học'
    },
    dateModified: new Date().toISOString(),
    datePublished: new Date().toISOString(),
  },
  breadcrumb: {
    '@type': 'BreadcrumbList',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: 'Trang Chủ',
        item: 'https://giaima-tamlinh.com'
      },
      {
        '@type': 'ListItem',
        position: 2,
        name: 'Tử Vi 12 Cung',
        item: 'https://giaima-tamlinh.com/zodiac'
      },
      {
        '@type': 'ListItem',
        position: 3,
        name: 'Lịch Tử Vi Cá Nhân',
        item: 'https://giaima-tamlinh.com/zodiac/calendar'
      }
    ]
  }
};

export default function ZodiacCalendarLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      {children}
    </>
  );
}
