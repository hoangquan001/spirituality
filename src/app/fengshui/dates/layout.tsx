import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Chọn Ngày Tốt | Ngày Hoàng Đạo Cưới Hỏi, Khai Trương, Khởi Công",
  description: "📅 Chọn ngày tốt cho cưới hỏi, khai trương, khởi công theo phong thủy. Tìm ngày hoàng đạo, giờ tốt và hướng may mắn. Miễn phí và chính xác.",
  keywords: "chọn ngày tốt, ngày hoàng đạo, ngày cưới tốt, ngày khai trương, ngày khởi công, lịch phong thủy, ngày tốt xấu",
  openGraph: {
    title: "Chọn Ngày Tốt | Ngày Hoàng Đạo Phong Thủy",
    description: "📅 Chọn ngày tốt cho cưới hỏi, khai trương, khởi công theo phong thủy.",
    type: "website",
    locale: "vi_VN",
    siteName: "Thần Số Học",
    images: [
      {
        url: "/og-fengshui-dates.jpg",
        width: 1200,
        height: 630,
        alt: "Chọn Ngày Tốt - Ngày Hoàng Đạo Phong Thủy",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Chọn Ngày Tốt | Ngày Hoàng Đạo Phong Thủy",
    description: "📅 Chọn ngày tốt cho các sự kiện quan trọng theo phong thủy.",
    images: ["/og-fengshui-dates.jpg"],
  },
  alternates: {
    canonical: "/fengshui/dates",
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
    'revisit-after': '3 days',
    'content-language': 'vi',
  },
};

// JSON-LD structured data for SEO
const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'WebPage',
  name: 'Chọn Ngày Tốt - Ngày Hoàng Đạo Phong Thủy',
  description: 'Tư vấn chọn ngày tốt cho cưới hỏi, khai trương, khởi công và các sự kiện quan trọng theo phong thủy',
  url: 'https://giaima-tamlinh.com/fengshui/dates',
  mainEntity: {
    '@type': 'Article',
    headline: 'Chọn Ngày Tốt - Tư Vấn Ngày Hoàng Đạo',
    description: 'Hướng dẫn chọn ngày tốt cho các sự kiện quan trọng như cưới hỏi, khai trương, khởi công theo nguyên tắc phong thủy',
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
        name: 'Phong Thủy',
        item: 'https://giaima-tamlinh.com/fengshui'
      },
      {
        '@type': 'ListItem',
        position: 3,
        name: 'Chọn Ngày Tốt',
        item: 'https://giaima-tamlinh.com/fengshui/dates'
      }
    ]
  }
};

export default function FengshuiDatesLayout({
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
