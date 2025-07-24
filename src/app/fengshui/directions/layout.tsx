import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Hướng Hợp Tuổi | Phong Thủy Hướng Nhà Theo Số Kua",
  description: "🧭 Xác định hướng tốt xấu theo tuổi và mệnh phong thủy. Tìm hướng may mắn cho giường ngủ, bàn làm việc, cửa chính dựa trên số Kua. Miễn phí và chính xác.",
  keywords: "hướng hợp tuổi, số kua, phong thủy hướng nhà, hướng giường ngủ, hướng bàn làm việc, la bàn phong thủy, hướng may mắn",
  openGraph: {
    title: "Hướng Hợp Tuổi | Phong Thủy Hướng Nhà",
    description: "🧭 Xác định hướng tốt xấu theo tuổi và mệnh phong thủy dựa trên số Kua.",
    type: "website",
    locale: "vi_VN",
    siteName: "Thần Số Học",
    images: [
      {
        url: "/og-fengshui-directions.jpg",
        width: 1200,
        height: 630,
        alt: "Hướng Hợp Tuổi - Phong Thủy Hướng Nhà",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Hướng Hợp Tuổi | Phong Thủy Hướng Nhà",
    description: "🧭 Xác định hướng tốt xấu theo tuổi và mệnh phong thủy.",
    images: ["/og-fengshui-directions.jpg"],
  },
  alternates: {
    canonical: "/fengshui/directions",
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
    'revisit-after': '7 days',
    'content-language': 'vi',
  },
};

// JSON-LD structured data for SEO
const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'WebPage',
  name: 'Hướng Hợp Tuổi - Phong Thủy Hướng Nhà Theo Số Kua',
  description: 'Tư vấn hướng phong thủy phù hợp theo số Kua, giúp xác định hướng tốt cho giường ngủ, bàn làm việc và cửa chính',
  url: 'https://giaima-tamlinh.com/fengshui/directions',
  mainEntity: {
    '@type': 'Article',
    headline: 'Hướng Hợp Tuổi - Tư Vấn Phong Thủy Hướng Nhà',
    description: 'Hướng dẫn xác định hướng phong thủy phù hợp dựa trên số Kua cá nhân, bao gồm hướng cho giường ngủ, bàn làm việc và cửa chính',
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
        name: 'Hướng Hợp Tuổi',
        item: 'https://giaima-tamlinh.com/fengshui/directions'
      }
    ]
  }
};

export default function FengshuiDirectionsLayout({
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
