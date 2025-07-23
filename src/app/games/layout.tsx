import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Minigame Bói | Trò Chơi Bói Hình-Màu-Số - Khám Phá Bản Thân",
  description: "🎮 Minigame bói vui nhộn với trò chơi hình dạng, màu sắc, con số. Khám phá tính cách và nhận lời khuyên qua trực giác. Miễn phí và thú vị.",
  keywords: "minigame bói, trò chơi bói, bói hình dạng, bói màu sắc, bói con số, game tâm linh, khám phá bản thân",
  openGraph: {
    title: "Minigame Bói | Trò Chơi Bói Hình-Màu-Số",
    description: "🎮 Minigame bói vui nhộn. Khám phá tính cách qua hình dạng, màu sắc, con số.",
    type: "website",
    locale: "vi_VN",
    siteName: "Giải Mã Tâm Linh",
    images: [
      {
        url: "/og-games.jpg",
        width: 1200,
        height: 630,
        alt: "Minigame Bói - Trò Chơi Bói Hình-Màu-Số",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Minigame Bói | Trò Chơi Bói Hình-Màu-Số",
    description: "🎮 Minigame bói vui nhộn. Khám phá bản thân qua trực giác.",
    images: ["/og-games.jpg"],
  },
  alternates: {
    canonical: "/games",
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
  name: 'Minigame Bói - Trò Chơi Bói Hình-Màu-Số',
  description: 'Tập hợp các minigame bói vui nhộn giúp khám phá tính cách và bản thân qua hình dạng, màu sắc và con số',
  url: 'https://giaima-tamlinh.com/games',
  mainEntity: {
    '@type': 'Article',
    headline: 'Minigame Bói - Khám Phá Bản Thân Qua Trò Chơi',
    description: 'Các trò chơi bói tương tác giúp khám phá tính cách, nhận lời khuyên và hiểu rõ bản thân qua trực giác',
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
        name: 'Minigame Bói',
        item: 'https://giaima-tamlinh.com/games'
      }
    ]
  }
};

export default function GamesLayout({
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
