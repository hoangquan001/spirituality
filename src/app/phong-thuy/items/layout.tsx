import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Vật Phẩm Phong Thủy | Gợi Ý Vật Phẩm Theo Tuổi Và Mệnh",
  description: "🏺 Gợi ý vật phẩm phong thủy phù hợp theo tuổi và mệnh ngũ hành. Tư vấn cách bố trí, giá cả và chăm sóc các vật phẩm mang lại may mắn. Miễn phí.",
  keywords: "vật phẩm phong thủy, đồ phong thủy theo tuổi, vật phẩm may mắn, tượng phong thủy, cây phong thủy, đồ trang trí phong thủy",
  openGraph: {
    title: "Vật Phẩm Phong Thủy | Gợi Ý Theo Tuổi",
    description: "🏺 Gợi ý vật phẩm phong thủy phù hợp theo tuổi và mệnh ngũ hành.",
    type: "website",
    locale: "vi_VN",
    siteName: "Thần Số Học",
    images: [
      {
        url: "/og-fengshui-items.jpg",
        width: 1200,
        height: 630,
        alt: "Vật Phẩm Phong Thủy - Gợi Ý Theo Tuổi",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Vật Phẩm Phong Thủy | Gợi Ý Theo Tuổi",
    description: "🏺 Gợi ý vật phẩm phong thủy phù hợp theo tuổi và mệnh.",
    images: ["/og-fengshui-items.jpg"],
  },
  alternates: {
    canonical: "/phong-thuy/items",
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
  name: 'Vật Phẩm Phong Thủy - Gợi Ý Theo Tuổi Và Mệnh',
  description: 'Tư vấn vật phẩm phong thủy phù hợp theo mệnh ngũ hành, bao gồm cách bố trí, giá cả và chăm sóc',
  url: 'https://giaima-tamlinh.com/phong-thuy/items',
  mainEntity: {
    '@type': 'Article',
    headline: 'Vật Phẩm Phong Thủy - Tư Vấn Theo Mệnh Ngũ Hành',
    description: 'Hướng dẫn chọn và bố trí vật phẩm phong thủy phù hợp theo mệnh Kim, Mộc, Thủy, Hỏa, Thổ',
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
        name: 'Vật Phẩm Phong Thủy',
        item: 'https://giaima-tamlinh.com/phong-thuy/items'
      }
    ]
  }
};

export default function FengshuiItemsLayout({
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
