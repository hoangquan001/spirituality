import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Tử Vi Hôm Nay | 12 Cung Hoàng Đạo - Dự Đoán Vận Mệnh Hàng Ngày",
  description: "⭐ Xem tử vi hôm nay cho 12 cung hoàng đạo. Dự đoán chi tiết về tình yêu, sự nghiệp, sức khỏe, tài chính. Cập nhật hàng ngày, chính xác và miễn phí.",
  keywords: "tử vi hôm nay, cung hoàng đạo hôm nay, dự đoán hàng ngày, horoscope today, tử vi 12 cung, vận mệnh hôm nay, bói toán hàng ngày",
  openGraph: {
    title: "Tử Vi Hôm Nay | 12 Cung Hoàng Đạo",
    description: "⭐ Xem tử vi hôm nay cho 12 cung hoàng đạo. Dự đoán về tình yêu, sự nghiệp, sức khỏe.",
    type: "website",
    locale: "vi_VN",
    siteName: "Giải Mã Tâm Linh",
    images: [
      {
        url: "/og-zodiac-today.jpg",
        width: 1200,
        height: 630,
        alt: "Tử Vi Hôm Nay - 12 Cung Hoàng Đạo",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Tử Vi Hôm Nay | 12 Cung Hoàng Đạo",
    description: "⭐ Xem tử vi hôm nay cho 12 cung hoàng đạo.",
    images: ["/og-zodiac-today.jpg"],
  },
  alternates: {
    canonical: "/zodiac/today",
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
  name: 'Tử Vi Hôm Nay - 12 Cung Hoàng Đạo',
  description: 'Xem tử vi hôm nay cho 12 cung hoàng đạo với dự đoán chi tiết về tình yêu, sự nghiệp, sức khỏe, tài chính',
  url: 'https://giaima-tamlinh.com/zodiac/today',
  mainEntity: {
    '@type': 'Article',
    headline: 'Tử Vi Hôm Nay - Dự Đoán Vận Mệnh 12 Cung Hoàng Đạo',
    description: 'Dự đoán tử vi hàng ngày cho 12 cung hoàng đạo: Bạch Dương, Kim Ngưu, Song Tử, Cự Giải, Sư Tử, Xử Nữ, Thiên Bình, Bọ Cạp, Nhân Mã, Ma Kết, Bảo Bình, Song Ngư',
    author: {
      '@type': 'Organization',
      name: 'Giải Mã Tâm Linh'
    },
    publisher: {
      '@type': 'Organization',
      name: 'Giải Mã Tâm Linh'
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
        name: 'Tử Vi Hôm Nay',
        item: 'https://giaima-tamlinh.com/zodiac/today'
      }
    ]
  }
};

export default function ZodiacTodayLayout({
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
