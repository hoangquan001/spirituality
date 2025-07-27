import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Bói Bài Tây | Rút Bài 52 Lá Online - Xem Vận Mệnh Miễn Phí",
  description: "🃏 Bói bài Tây online với 52 lá bài truyền thống. Rút bài để xem vận mệnh, tình yêu, sự nghiệp. Giải nghĩa chi tiết từng lá bài Cơ, Rô, Tép, Bích. Miễn phí.",
  keywords: "bói bài tây, rút bài 52 lá, bói bài online, xem vận mệnh, bài tây tình yêu, bói bài miễn phí, playing cards fortune",
  openGraph: {
    title: "Bói Bài Tây | Rút Bài 52 Lá Online",
    description: "🃏 Bói bài Tây online với 52 lá bài truyền thống. Xem vận mệnh, tình yêu, sự nghiệp.",
    type: "website",
    locale: "vi_VN",
    siteName: "Thần Số Học",
    images: [
      {
        url: "/og-cards.jpg",
        width: 1200,
        height: 630,
        alt: "Bói Bài Tây - Rút Bài 52 Lá Online",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Bói Bài Tây | Rút Bài 52 Lá Online",
    description: "🃏 Bói bài Tây online với 52 lá bài truyền thống. Xem vận mệnh miễn phí.",
    images: ["/og-cards.jpg"],
  },
  alternates: {
    canonical: "/boi-bai-tay",
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
  name: 'Bói Bài Tây - Rút Bài 52 Lá Online',
  description: 'Công cụ bói bài Tây online miễn phí với 52 lá bài truyền thống, giải nghĩa chi tiết về vận mệnh, tình yêu và sự nghiệp',
  url: 'https://giaima-tamlinh.com/boi-bai-tay',
  mainEntity: {
    '@type': 'Article',
    headline: 'Bói Bài Tây - Khám Phá Vận Mệnh Qua 52 Lá Bài',
    description: 'Hướng dẫn sử dụng bài Tây để bói toán, khám phá vận mệnh và tìm hiểu tương lai qua các lá bài Cơ, Rô, Tép, Bích',
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
        item: 'https://giaima-tamlinh.com/giai-ma-giac-mo'
      },
      {
        '@type': 'ListItem',
        position: 3,
        name: 'Bói Bài Tây',
        item: 'https://giaima-tamlinh.com/boi-bai-tay'
      }
    ]
  }
};

export default function CardsLayout({
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
