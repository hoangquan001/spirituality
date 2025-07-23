import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Ý Nghĩa Con Số | Giải Mã Bí Mật Các Số 0-9 Trong Tâm Linh",
  description: "🔢 Khám phá ý nghĩa sâu sắc của các con số từ 0-9 trong tâm linh và phong thủy. Tìm hiểu tính cách, năng lượng, màu sắc và sức mạnh của từng con số. Miễn phí và chi tiết.",
  keywords: "ý nghĩa con số, số học tâm linh, phong thủy con số, năng lượng số, bí mật con số, numerology meaning, số may mắn",
  openGraph: {
    title: "Ý Nghĩa Con Số | Giải Mã Bí Mật Các Số 0-9",
    description: "🔢 Khám phá ý nghĩa sâu sắc của các con số từ 0-9 trong tâm linh và phong thủy.",
    type: "website",
    locale: "vi_VN",
    siteName: "Giải Mã Tâm Linh",
    images: [
      {
        url: "/og-numbers-meaning.jpg",
        width: 1200,
        height: 630,
        alt: "Ý Nghĩa Con Số - Giải Mã Bí Mật Các Số 0-9",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Ý Nghĩa Con Số | Giải Mã Bí Mật Các Số 0-9",
    description: "🔢 Khám phá ý nghĩa sâu sắc của các con số từ 0-9 trong tâm linh.",
    images: ["/og-numbers-meaning.jpg"],
  },
  alternates: {
    canonical: "/numbers/meaning",
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
  name: 'Ý Nghĩa Con Số - Giải Mã Bí Mật Các Số 0-9',
  description: 'Khám phá ý nghĩa tâm linh và phong thủy của các con số từ 0-9, bao gồm tính cách, năng lượng, màu sắc và sức mạnh',
  url: 'https://giaima-tamlinh.com/numbers/meaning',
  mainEntity: {
    '@type': 'Article',
    headline: 'Ý Nghĩa Con Số - Bí Mật Tâm Linh Của Các Số 0-9',
    description: 'Hướng dẫn chi tiết về ý nghĩa tâm linh, phong thủy và năng lượng của từng con số từ 0 đến 9',
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
        name: 'Giải Mã & Bói',
        item: 'https://giaima-tamlinh.com/dream'
      },
      {
        '@type': 'ListItem',
        position: 3,
        name: 'Ý Nghĩa Con Số',
        item: 'https://giaima-tamlinh.com/numbers/meaning'
      }
    ]
  }
};

export default function NumbersMeaningLayout({
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
