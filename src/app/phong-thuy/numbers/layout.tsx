import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Sim Số Phong Thủy | Phân Tích Số Điện Thoại Và Biển Số Xe",
  description: "📱 Phân tích sim số và biển số xe theo phong thủy. Xem ý nghĩa, điểm số và năng lượng của các con số. Tư vấn cải thiện vận may qua số. Miễn phí.",
  keywords: "sim số phong thủy, biển số xe phong thủy, phân tích số điện thoại, ý nghĩa số, số may mắn, phong thủy số học",
  openGraph: {
    title: "Sim Số Phong Thủy | Phân Tích Số Điện Thoại",
    description: "📱 Phân tích sim số và biển số xe theo phong thủy. Xem ý nghĩa và năng lượng số.",
    type: "website",
    locale: "vi_VN",
    siteName: "Thần Số Học",
    images: [
      {
        url: "/og-fengshui-numbers.jpg",
        width: 1200,
        height: 630,
        alt: "Sim Số Phong Thủy - Phân Tích Số Điện Thoại",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Sim Số Phong Thủy | Phân Tích Số Điện Thoại",
    description: "📱 Phân tích sim số và biển số xe theo phong thủy.",
    images: ["/og-fengshui-numbers.jpg"],
  },
  alternates: {
    canonical: "/phong-thuy/numbers",
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
  name: 'Sim Số Phong Thủy - Phân Tích Số Điện Thoại Và Biển Số',
  description: 'Công cụ phân tích sim số và biển số xe theo phong thủy, giúp hiểu ý nghĩa và năng lượng của các con số',
  url: 'https://giaima-tamlinh.com/phong-thuy/numbers',
  mainEntity: {
    '@type': 'Article',
    headline: 'Sim Số Phong Thủy - Phân Tích Năng Lượng Số',
    description: 'Hướng dẫn phân tích sim số điện thoại và biển số xe theo nguyên tắc phong thủy và số học',
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
        item: 'https://giaima-tamlinh.com/phong-thuy'
      },
      {
        '@type': 'ListItem',
        position: 3,
        name: 'Sim Số Phong Thủy',
        item: 'https://giaima-tamlinh.com/phong-thuy/numbers'
      }
    ]
  }
};

export default function FengshuiNumbersLayout({
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
