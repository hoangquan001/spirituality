export default function NumerologyStructuredData() {
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Thần Số Học Pythagoras",
    "description": "Công cụ tính toán và phân tích thần số học theo phương pháp Pythagoras. Khám phá số mệnh, tính cách và những đặc điểm cá nhân.",
    "provider": {
      "@type": "Organization",
      "name": "Tâm Linh - Thần Số Học",
      "url": "https://tamlinh.com"
    },
    "serviceType": "Numerology Analysis",
    "areaServed": "Vietnam",
    "url": "https://tamlinh.com/than-so-hoc",
    "offers": {
      "@type": "Offer",
      "price": "0",
      "priceCurrency": "VND",
      "availability": "https://schema.org/InStock",
      "description": "Nội dung thần số học hoàn toàn miễn phí"
    },
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Nội Dung Thần Số Học",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Tính Số Mệnh (Life Path Number)",
            "description": "Phân tích số đường đời và mục tiêu cuộc sống"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Số Định Mệnh",
            "description": "Khám phá sứ mệnh và mục tiêu cuộc đời"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Số Linh Hồn",
            "description": "Hiểu rõ khao khát và động lực nội tâm"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Số Nhân Cách",
            "description": "Cách người khác nhìn nhận bạn từ ấn tượng đầu tiên"
          }
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
        "name": "Thần số học Pythagoras là gì?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Thần số học Pythagoras là hệ thống phân tích dựa trên các con số được phát triển bởi nhà toán học Pythagoras từ thế kỷ 6 TCN. Hệ thống này sử dụng ngày sinh và tên tuổi để tính toán các con số quan trọng như số mệnh, số định mệnh, số linh hồn và số nhân cách, từ đó phân tích tính cách, tài năng và vận mệnh của một người."
        }
      },
      {
        "@type": "Question",
        "name": "Làm thế nào để tính số mệnh (Life Path Number)?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Để tính số mệnh, bạn cộng tất cả các chữ số trong ngày sinh đầy đủ (ngày/tháng/năm) cho đến khi được một chữ số từ 1-9 hoặc số chủ đạo 11, 22, 33. Ví dụ: sinh ngày 15/08/1990 = 1+5+0+8+1+9+9+0 = 33 → 3+3 = 6. Số mệnh 6 thể hiện người có trách nhiệm, yêu thương gia đình và có khả năng chăm sóc người khác."
        }
      },
      {
        "@type": "Question",
        "name": "Thần số học có độ chính xác như thế nào?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Thần số học là một cách thú vị để tìm hiểu về bản thân thông qua những con số trong ngày sinh. Mỗi con số đều mang một ý nghĩa riêng, giúp bạn hiểu rõ hơn về bản thân mình. Nhiều bạn đã chia sẻ rằng thông tin này khá phù hợp với tính cách thực tế của mình."
        }
      },
      {
        "@type": "Question",
        "name": "Tôi có thể thay đổi vận mệnh theo thần số học không?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Thần số học không quyết định hoàn toàn vận mệnh mà chỉ chỉ ra xu hướng và tiềm năng. Bạn có thể cải thiện cuộc sống bằng cách: hiểu rõ điểm mạnh để phát huy, nhận biết thách thức để khắc phục, chọn nghề nghiệp phù hợp với số mệnh, và đưa ra quyết định đúng đắn dựa trên hiểu biết về bản thân."
        }
      },
      {
        "@type": "Question",
        "name": "Website thần số học có miễn phí không?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Có, tất cả nội dung thần số học tại Tâm Linh đều hoàn toàn miễn phí. Bạn có thể tính số mệnh, phân tích tính cách, khám phá tài năng và nhận lời khuyên mà không mất bất kỳ chi phí nào. Chúng mình cam kết chia sẻ kiến thức tâm linh chất lượng cao để giúp mọi người hiểu rõ bản thân."
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
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": "Thần Số Học",
        "item": "https://tamlinh.com/than-so-hoc"
      }
    ]
  };

  const howToSchema = {
    "@context": "https://schema.org",
    "@type": "HowTo",
    "name": "Cách tính số mệnh theo thần số học Pythagoras",
    "description": "Hướng dẫn chi tiết cách tính số mệnh (Life Path Number) theo phương pháp thần số học Pythagoras",
    "totalTime": "PT5M",
    "supply": [
      {
        "@type": "HowToSupply",
        "name": "Ngày sinh đầy đủ (ngày/tháng/năm)"
      },
      {
        "@type": "HowToSupply", 
        "name": "Họ tên đầy đủ"
      }
    ],
    "step": [
      {
        "@type": "HowToStep",
        "name": "Nhập thông tin cá nhân",
        "text": "Nhập họ tên đầy đủ và ngày sinh chính xác vào form tính toán"
      },
      {
        "@type": "HowToStep",
        "name": "Tính toán số mệnh",
        "text": "Hệ thống sẽ tự động tính toán số mệnh bằng cách cộng các chữ số trong ngày sinh"
      },
      {
        "@type": "HowToStep",
        "name": "Nhận kết quả phân tích",
        "text": "Xem kết quả chi tiết về số mệnh, tính cách, tài năng và lời khuyên cá nhân"
      }
    ]
  };

  return (
    <>
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
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(howToSchema),
        }}
      />
    </>
  );
}
