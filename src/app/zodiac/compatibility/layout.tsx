import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Ghép Đôi Cung Hoàng Đạo | Tử Vi Tình Yêu - Xem Độ Hợp 12 Cung",
  description: "💕 Ghép đôi cung hoàng đạo - Xem độ hợp tình yêu giữa 12 cung hoàng đạo. Phân tích tương thích trong tình yêu, tình bạn, công việc. Miễn phí và chính xác.",
  keywords: "ghép đôi cung hoàng đạo, độ hợp tình yêu, tử vi tình yêu, zodiac compatibility, cung hoàng đạo hợp nhau, bói tình yêu 12 cung",
  openGraph: {
    title: "Ghép Đôi Cung Hoàng Đạo | Tử Vi Tình Yêu",
    description: "💕 Ghép đôi cung hoàng đạo - Xem độ hợp tình yêu giữa 12 cung hoàng đạo.",
    type: "website",
    locale: "vi_VN",
    siteName: "Thần Số Học",
    images: [
      {
        url: "/og-zodiac-compatibility.jpg",
        width: 1200,
        height: 630,
        alt: "Ghép Đôi Cung Hoàng Đạo - Tử Vi Tình Yêu",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Ghép Đôi Cung Hoàng Đạo | Tử Vi Tình Yêu",
    description: "💕 Ghép đôi cung hoàng đạo - Xem độ hợp tình yêu giữa 12 cung.",
    images: ["/og-zodiac-compatibility.jpg"],
  },
  alternates: {
    canonical: "/zodiac/compatibility",
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
  name: 'Ghép Đôi Cung Hoàng Đạo - Tử Vi Tình Yêu',
  description: 'Phân tích độ hợp tình yêu giữa 12 cung hoàng đạo với tính năng ghép đôi chính xác',
  url: 'https://giaima-tamlinh.com/zodiac/compatibility',
  mainEntity: {
    '@type': 'Article',
    headline: 'Ghép Đôi Cung Hoàng Đạo - Xem Độ Hợp Tình Yêu',
    description: 'Công cụ ghép đôi cung hoàng đạo giúp phân tích mức độ tương thích trong tình yêu, tình bạn và công việc giữa 12 cung hoàng đạo',
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
        name: 'Ghép Đôi Cung Hoàng Đạo',
        item: 'https://giaima-tamlinh.com/zodiac/compatibility'
      }
    ]
  }
};

export default function ZodiacCompatibilityLayout({
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
