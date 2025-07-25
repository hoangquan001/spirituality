export default function NameAnalysisStructuredData() {
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Bói Tên Theo Thần Số Học",
    "description": "Công cụ phân tích tên tuổi theo thần số học. Khám phá ý nghĩa, tính cách và tác động của tên đến những đặc điểm cá nhân.",
    "provider": {
      "@type": "Organization",
      "name": "Tâm Linh - Thần Số Học",
      "url": "https://tamlinh.com"
    },
    "serviceType": "Name Analysis",
    "areaServed": "Vietnam",
    "url": "https://tamlinh.com/than-so-hoc/phan-tich-ten",
    "offers": {
      "@type": "Offer",
      "price": "0",
      "priceCurrency": "VND",
      "availability": "https://schema.org/InStock",
      "description": "Nội dung phân tích tên tuổi hoàn toàn miễn phí"
    }
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "Bói tên theo thần số học có chính xác không?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Phân tích tên theo thần số học có độ chính xác cao khi được thực hiện đúng phương pháp. Mỗi chữ cái trong tên có giá trị số tương ứng, và tổng của chúng tạo ra các con số có ý nghĩa riêng. Tại Tâm Linh, chúng tôi sử dụng bảng chuyển đổi chuẩn quốc tế kết hợp với kiến thức truyền thống để đảm bảo kết quả chính xác."
        }
      },
      {
        "@type": "Question",
        "name": "Tên có thực sự ảnh hưởng đến vận mệnh không?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Theo thần số học, tên có tác động đến tính cách và cách người khác nhìn nhận bạn. Tên tạo ra rung động năng lượng nhất định, ảnh hưởng đến sự tự tin, cách giao tiếp và cơ hội trong cuộc sống. Tuy nhiên, tên chỉ là một yếu tố trong tổng thể, không quyết định hoàn toàn vận mệnh."
        }
      },
      {
        "@type": "Question",
        "name": "Tôi có nên đổi tên theo thần số học không?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Việc đổi tên nên được cân nhắc kỹ lưỡng. Nếu phân tích cho thấy tên hiện tại có những hạn chế, bạn có thể: thêm tên lót phù hợp, sử dụng biệt danh tích cực, hoặc đổi tên hoàn toàn nếu thực sự cần thiết. Quan trọng là tên mới phải phù hợp với số mệnh và mang lại năng lượng tích cực."
        }
      },
      {
        "@type": "Question",
        "name": "Phân tích tên có tính phí không?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Không, nội dung phân tích tên tuổi tại Tâm Linh hoàn toàn miễn phí. Bạn có thể phân tích bất kỳ tên nào, nhận kết quả chi tiết về ý nghĩa, tính cách và lời khuyên mà không mất phí. Chúng mình cam kết chia sẻ nội dung chất lượng cao miễn phí cho mọi người."
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
        "name": "Bói Tên",
        "item": "https://tamlinh.com/than-so-hoc/phan-tich-ten"
      }
    ]
  };

  const howToSchema = {
    "@context": "https://schema.org",
    "@type": "HowTo",
    "name": "Cách phân tích tên tuổi theo thần số học",
    "description": "Hướng dẫn chi tiết cách phân tích ý nghĩa và tác động của tên tuổi theo thần số học",
    "totalTime": "PT3M",
    "supply": [
      {
        "@type": "HowToSupply",
        "name": "Tên đầy đủ cần phân tích"
      }
    ],
    "step": [
      {
        "@type": "HowToStep",
        "name": "Nhập tên cần phân tích",
        "text": "Nhập họ tên đầy đủ hoặc tên riêng vào ô tìm kiếm"
      },
      {
        "@type": "HowToStep",
        "name": "Phân tích thần số học",
        "text": "Hệ thống sẽ chuyển đổi các chữ cái thành số và tính toán các con số quan trọng"
      },
      {
        "@type": "HowToStep",
        "name": "Xem kết quả chi tiết",
        "text": "Nhận phân tích về ý nghĩa tên, tính cách, điểm mạnh yếu và lời khuyên cải thiện"
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
