interface LegalStructuredDataProps {
  pageType: 'privacy' | 'terms';
}

export default function LegalStructuredData({ pageType }: LegalStructuredDataProps) {
  const baseUrl = "https://tamlinh.com";
  
  const privacySchema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": "Chính Sách Bảo Mật",
    "description": "Chính sách bảo mật của Giải Mã Tâm Linh về việc thu thập, sử dụng và bảo vệ thông tin cá nhân người dùng.",
    "url": `${baseUrl}/privacy`,
    "inLanguage": "vi-VN",
    "isPartOf": {
      "@type": "WebSite",
      "name": "Giải Mã Tâm Linh",
      "url": baseUrl
    },
    "about": {
      "@type": "Thing",
      "name": "Chính sách bảo mật",
      "description": "Quy định về bảo vệ thông tin cá nhân và quyền riêng tư"
    },
    "mainEntity": {
      "@type": "Article",
      "headline": "Chính Sách Bảo Mật - Giải Mã Tâm Linh",
      "description": "Cam kết bảo vệ thông tin cá nhân và quyền riêng tư của người dùng khi sử dụng dịch vụ tâm linh miễn phí.",
      "author": {
        "@type": "Organization",
        "name": "Giải Mã Tâm Linh"
      },
      "publisher": {
        "@type": "Organization",
        "name": "Giải Mã Tâm Linh",
        "logo": {
          "@type": "ImageObject",
          "url": `${baseUrl}/logo.png`
        }
      },
      "datePublished": new Date().toISOString(),
      "dateModified": new Date().toISOString()
    }
  };

  const termsSchema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": "Điều Khoản Sử Dụng",
    "description": "Điều khoản và quy định sử dụng dịch vụ Giải Mã Tâm Linh, quyền và trách nhiệm của người dùng.",
    "url": `${baseUrl}/terms`,
    "inLanguage": "vi-VN",
    "isPartOf": {
      "@type": "WebSite",
      "name": "Giải Mã Tâm Linh",
      "url": baseUrl
    },
    "about": {
      "@type": "Thing",
      "name": "Điều khoản sử dụng",
      "description": "Quy định và điều khoản khi sử dụng dịch vụ"
    },
    "mainEntity": {
      "@type": "Article",
      "headline": "Điều Khoản Sử Dụng - Giải Mã Tâm Linh",
      "description": "Quy định về việc sử dụng website và dịch vụ tâm linh, quyền và trách nhiệm của người dùng.",
      "author": {
        "@type": "Organization",
        "name": "Giải Mã Tâm Linh"
      },
      "publisher": {
        "@type": "Organization",
        "name": "Giải Mã Tâm Linh",
        "logo": {
          "@type": "ImageObject",
          "url": `${baseUrl}/logo.png`
        }
      },
      "datePublished": new Date().toISOString(),
      "dateModified": new Date().toISOString()
    }
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Trang Chủ",
        "item": baseUrl
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": pageType === 'privacy' ? "Chính Sách Bảo Mật" : "Điều Khoản Sử Dụng",
        "item": `${baseUrl}/${pageType}`
      }
    ]
  };

  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Giải Mã Tâm Linh",
    "url": baseUrl,
    "logo": `${baseUrl}/logo.png`,
    "contactPoint": {
      "@type": "ContactPoint",
      "contactType": "customer service",
      "email": pageType === 'privacy' ? "privacy@tamlinh.com" : "legal@tamlinh.com",
      "availableLanguage": "Vietnamese"
    },
    "address": {
      "@type": "PostalAddress",
      "addressCountry": "VN"
    }
  };

  const schema = pageType === 'privacy' ? privacySchema : termsSchema;

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(schema),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(breadcrumbSchema),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(organizationSchema),
        }}
      />
    </>
  );
}
