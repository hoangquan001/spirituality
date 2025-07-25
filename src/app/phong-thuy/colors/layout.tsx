import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Màu Sắc Hợp Mệnh | Phong Thủy Màu Sắc Theo Ngũ Hành",
  description: "🎨 Tìm màu sắc phong thủy phù hợp theo mệnh ngũ hành và năm sinh. Tư vấn màu sắc cho trang phục, nhà ở, văn phòng. Miễn phí và chính xác.",
  keywords: "màu sắc hợp mệnh, phong thủy màu sắc, ngũ hành màu sắc, màu may mắn theo tuổi, màu sắc phong thủy, mệnh ngũ hành",
  openGraph: {
    title: "Màu Sắc Hợp Mệnh | Phong Thủy Màu Sắc",
    description: "🎨 Tìm màu sắc phong thủy phù hợp theo mệnh ngũ hành và năm sinh.",
    type: "website",
    locale: "vi_VN",
    siteName: "Thần Số Học",
    images: [
      {
        url: "/og-fengshui-colors.jpg",
        width: 1200,
        height: 630,
        alt: "Màu Sắc Hợp Mệnh - Phong Thủy Màu Sắc",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Màu Sắc Hợp Mệnh | Phong Thủy Màu Sắc",
    description: "🎨 Tìm màu sắc phong thủy phù hợp theo mệnh ngũ hành.",
    images: ["/og-fengshui-colors.jpg"],
  },
  alternates: {
    canonical: "/phong-thuy/colors",
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
  name: 'Màu Sắc Hợp Mệnh - Phong Thủy Màu Sắc Theo Ngũ Hành',
  description: 'Tư vấn màu sắc phong thủy phù hợp theo mệnh ngũ hành, giúp chọn màu may mắn cho trang phục, nhà ở và cuộc sống',
  url: 'https://giaima-tamlinh.com/phong-thuy/colors',
  mainEntity: {
    '@type': 'Article',
    headline: 'Màu Sắc Hợp Mệnh - Tư Vấn Phong Thủy Màu Sắc',
    description: 'Hướng dẫn chọn màu sắc phong thủy phù hợp theo mệnh ngũ hành Kim, Mộc, Thủy, Hỏa, Thổ',
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
        name: 'Màu Sắc Hợp Mệnh',
        item: 'https://giaima-tamlinh.com/phong-thuy/colors'
      }
    ]
  }
};

export default function FengshuiColorsLayout({
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
