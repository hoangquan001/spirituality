import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Bói Bài Tarot | Rút Bài Tarot Online - Khám Phá Tương Lai",
  description: "🔮 Bói bài Tarot online miễn phí với các lá bài Major Arcana. Rút bài Tarot để khám phá tương lai, tình yêu, sự nghiệp. Giải nghĩa chi tiết và chính xác.",
  keywords: "bói bài tarot, rút bài tarot online, tarot miễn phí, bói tarot tình yêu, tarot sự nghiệp, major arcana, bói bài online",
  openGraph: {
    title: "Bói Bài Tarot | Rút Bài Tarot Online",
    description: "🔮 Bói bài Tarot online miễn phí. Rút bài để khám phá tương lai, tình yêu, sự nghiệp.",
    type: "website",
    locale: "vi_VN",
    siteName: "Thần Số Học",
    images: [
      {
        url: "/og-tarot.jpg",
        width: 1200,
        height: 630,
        alt: "Bói Bài Tarot - Rút Bài Tarot Online",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Bói Bài Tarot | Rút Bài Tarot Online",
    description: "🔮 Bói bài Tarot online miễn phí. Khám phá tương lai qua các lá bài huyền bí.",
    images: ["/og-tarot.jpg"],
  },
  alternates: {
    canonical: "/tarot",
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
  name: 'Bói Bài Tarot - Rút Bài Tarot Online',
  description: 'Công cụ bói bài Tarot online miễn phí với các lá bài Major Arcana, giải nghĩa chi tiết về tương lai, tình yêu và sự nghiệp',
  url: 'https://giaima-tamlinh.com/tarot',
  mainEntity: {
    '@type': 'Article',
    headline: 'Bói Bài Tarot - Khám Phá Tương Lai Qua Các Lá Bài Huyền Bí',
    description: 'Hướng dẫn sử dụng bài Tarot để bói toán, khám phá tương lai và tìm hiểu về bản thân qua các lá bài Major Arcana',
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
        name: 'Giải Mã & Bói',
        item: 'https://giaima-tamlinh.com/dream'
      },
      {
        '@type': 'ListItem',
        position: 3,
        name: 'Bói Bài Tarot',
        item: 'https://giaima-tamlinh.com/tarot'
      }
    ]
  }
};

export default function TarotLayout({
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
