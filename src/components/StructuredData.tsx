export default function StructuredData() {
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Tâm Linh - Thần Số Học",
    "url": "https://tamlinh.com",
    "logo": "https://tamlinh.com/logo.png",
    "description": "Khám phá số mệnh và tương lai qua thần số học Pythagoras chính xác. Thần Số Học miễn phí: cung hoàng đạo, giải mã giấc mơ, bói tình yêu, phong thủy.",
    "foundingDate": "2024",
    "contactPoint": {
      "@type": "ContactPoint",
      "contactType": "customer service",
      "availableLanguage": "Vietnamese"
    },
    "sameAs": [
      "https://facebook.com/tamlinh",
      "https://instagram.com/tamlinh"
    ]
  };

  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "Tâm Linh - Thần Số Học",
    "url": "https://tamlinh.com",
    "description": "Website thần số học và tâm linh hàng đầu Việt Nam",
    "inLanguage": "vi-VN",
    "potentialAction": {
      "@type": "SearchAction",
      "target": "https://tamlinh.com/search?q={search_term_string}",
      "query-input": "required name=search_term_string"
    }
  };

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Thần Số Học Online",
    "description": "Tính toán và phân tích thần số học chính xác theo phương pháp Pythagoras",
    "provider": {
      "@type": "Organization",
      "name": "Tâm Linh - Thần Số Học"
    },
    "serviceType": "Spiritual Services",
    "areaServed": "Vietnam",
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Thần Số Học",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Thần Số Học",
            "description": "Tính toán số mệnh và phân tích tính cách"
          },
          "price": "0",
          "priceCurrency": "VND"
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Cung Hoàng Đạo",
            "description": "Phân tích tính cách theo 12 cung hoàng đạo"
          },
          "price": "0",
          "priceCurrency": "VND"
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Giải Mã Giấc Mơ",
            "description": "Diễn giải ý nghĩa và thông điệp từ giấc mơ"
          },
          "price": "0",
          "priceCurrency": "VND"
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Bói Tình Yêu",
            "description": "Phân tích độ tương thích trong tình yêu và hôn nhân"
          },
          "price": "0",
          "priceCurrency": "VND"
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Phong Thủy",
            "description": "Thông tin về bố trí không gian sống theo phong thủy"
          },
          "price": "0",
          "priceCurrency": "VND"
        }
      ]
    }
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "Thần số học có chính xác không?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Thần số học là một hệ thống nghiên cứu được phát triển từ thời Pythagoras (khoảng 500 TCN) và đã được ứng dụng qua hàng nghìn năm. Độ chính xác phụ thuộc vào phương pháp tính toán và cách diễn giải. Tại Tâm Linh, chúng tôi sử dụng thuật toán chuẩn quốc tế kết hợp với kiến thức truyền thống Việt Nam để đưa ra kết quả chính xác nhất."
        }
      },
      {
        "@type": "Question",
        "name": "Làm thế nào để tính số mệnh của tôi?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Để tính số mệnh (Life Path Number), bạn cần cộng tất cả các chữ số trong ngày sinh đầy đủ (ngày/tháng/năm) cho đến khi được một chữ số từ 1-9 hoặc số chủ đạo 11, 22, 33. Ví dụ: sinh ngày 15/08/1990 = 1+5+0+8+1+9+9+0 = 33 → 3+3 = 6. Tuy nhiên, việc diễn giải ý nghĩa cần có kiến thức chuyên môn, vì vậy hãy sử dụng công cụ của chúng tôi để có kết quả chính xác nhất."
        }
      },
      {
        "@type": "Question",
        "name": "Cung hoàng đạo và thần số học khác nhau như thế nào?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Cung hoàng đạo dựa trên vị trí của mặt trời tại thời điểm sinh, chia thành 12 cung theo tháng sinh. Thần số học dựa trên ngày sinh cụ thể và tên tuổi, tập trung vào các con số và rung động năng lượng. Cả hai đều có giá trị riêng: cung hoàng đạo giúp hiểu tính cách tổng quát, thần số học chia sẻ thông tin chi tiết về đường đời và những đặc điểm cá nhân."
        }
      },
      {
        "@type": "Question",
        "name": "Website có tính phí không?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Tất cả nội dung cơ bản tại Tâm Linh đều hoàn toàn miễn phí, bao gồm: tính thần số học, xem cung hoàng đạo, giải mã giấc mơ, phân tích tên tuổi, bói tình yêu, và các công cụ phong thủy. Chúng mình cam kết chia sẻ kiến thức tâm linh chất lượng cao mà không thu phí, giúp mọi người đều có cơ hội khám phá và hiểu rõ bản thân."
        }
      }
    ]
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Trang Chủ",
        "item": "https://tamlinh.com"
      }
    ]
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(organizationSchema),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(websiteSchema),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(serviceSchema),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(faqSchema),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(breadcrumbSchema),
        }}
      />
    </>
  );
}
