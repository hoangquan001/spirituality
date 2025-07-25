import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Phong Thủy Nhà Ở | Tư Vấn Bố Trí Nội Thất Theo Phong Thủy",
  description: "🏠 Tư vấn phong thủy nhà ở và nội thất toàn diện. Bố trí từng phòng theo nguyên tắc phong thủy để thu hút tài lộc và mang lại bình an. Miễn phí.",
  keywords: "phong thủy nhà ở, bố trí nội thất phong thủy, phong thủy phòng khách, phong thủy phòng ngủ, phong thủy phòng bếp, tư vấn nhà ở",
  openGraph: {
    title: "Phong Thủy Nhà Ở | Tư Vấn Bố Trí Nội Thất",
    description: "🏠 Tư vấn phong thủy nhà ở và nội thất toàn diện theo nguyên tắc phong thủy.",
    type: "website",
    locale: "vi_VN",
    siteName: "Thần Số Học",
    images: [
      {
        url: "/og-fengshui-home.jpg",
        width: 1200,
        height: 630,
        alt: "Phong Thủy Nhà Ở - Tư Vấn Bố Trí Nội Thất",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Phong Thủy Nhà Ở | Tư Vấn Bố Trí Nội Thất",
    description: "🏠 Tư vấn phong thủy nhà ở và nội thất toàn diện.",
    images: ["/og-fengshui-home.jpg"],
  },
  alternates: {
    canonical: "/phong-thuy/home",
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
  name: 'Phong Thủy Nhà Ở - Tư Vấn Bố Trí Nội Thất',
  description: 'Tư vấn phong thủy nhà ở toàn diện, bao gồm bố trí từng phòng và nội thất theo nguyên tắc phong thủy',
  url: 'https://giaima-tamlinh.com/phong-thuy/home',
  mainEntity: {
    '@type': 'Article',
    headline: 'Phong Thủy Nhà Ở - Tư Vấn Bố Trí Không Gian Sống',
    description: 'Hướng dẫn bố trí phong thủy cho từng phòng trong nhà, từ phòng khách, phòng ngủ đến phòng bếp và phòng tắm',
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
        name: 'Phong Thủy Nhà Ở',
        item: 'https://giaima-tamlinh.com/phong-thuy/home'
      }
    ]
  }
};

export default function FengshuiHomeLayout({
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
