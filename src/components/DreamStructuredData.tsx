export default function DreamStructuredData() {
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Giải Mã Giấc Mơ",
    "description": "Công cụ giải mã và phân tích ý nghĩa giấc mơ. Từ điển giấc mơ đầy đủ với hàng nghìn biểu tượng và thông điệp từ tiềm thức.",
    "provider": {
      "@type": "Organization",
      "name": "Tâm Linh - Thần Số Học",
      "url": "https://tamlinh.com"
    },
    "serviceType": "Dream Interpretation",
    "areaServed": "Vietnam",
    "url": "https://tamlinh.com/dream",
    "offers": {
      "@type": "Offer",
      "price": "0",
      "priceCurrency": "VND",
      "availability": "https://schema.org/InStock",
      "description": "Nội dung giải mã giấc mơ hoàn toàn miễn phí"
    }
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "Giấc mơ có ý nghĩa gì?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Giấc mơ là cách tiềm thức giao tiếp với ý thức, phản ánh những suy nghĩ, cảm xúc và mong muốn sâu kín. Mỗi biểu tượng trong giấc mơ đều mang ý nghĩa riêng, có thể là lời khuyên, cảnh báo hoặc dự báo về tương lai. Việc giải mã giấc mơ giúp bạn hiểu rõ hơn về bản thân và những gì đang diễn ra trong cuộc sống."
        }
      },
      {
        "@type": "Question",
        "name": "Tại sao chúng ta lại mơ?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Giấc mơ xảy ra trong giai đoạn REM của giấc ngủ, khi não bộ xử lý thông tin và cảm xúc từ ngày hôm đó. Theo tâm linh học, giấc mơ là cầu nối giữa thế giới vật chất và tinh thần, giúp linh hồn nhận được thông điệp từ vũ trụ. Giấc mơ cũng có thể là cách tiềm thức giải quyết vấn đề và chuẩn bị cho những thử thách sắp tới."
        }
      },
      {
        "@type": "Question",
        "name": "Làm thế nào để nhớ giấc mơ?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Để nhớ giấc mơ tốt hơn, bạn nên: đặt sổ ghi chú bên cạnh giường, ghi lại ngay khi thức dậy, tránh sử dụng điện thoại ngay sau khi thức dậy, duy trì giấc ngủ đều đặn, và tập trung suy nghĩ về giấc mơ trước khi ngủ. Việc ghi chép thường xuyên sẽ giúp bạn nhớ giấc mơ rõ ràng hơn."
        }
      },
      {
        "@type": "Question",
        "name": "Giấc mơ có thể dự báo tương lai không?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Theo quan niệm tâm linh, một số giấc mơ có thể mang tính dự báo, đặc biệt là những giấc mơ rõ ràng và ấn tượng mạnh. Tuy nhiên, hầu hết giấc mơ phản ánh tâm trạng hiện tại và những lo lắng trong tiềm thức. Quan trọng là hiểu được thông điệp mà giấc mơ muốn truyền tải để đưa ra quyết định đúng đắn trong cuộc sống."
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
        "name": "Giải Mã Giấc Mơ",
        "item": "https://tamlinh.com/dream"
      }
    ]
  };

  const howToSchema = {
    "@context": "https://schema.org",
    "@type": "HowTo",
    "name": "Cách giải mã ý nghĩa giấc mơ",
    "description": "Hướng dẫn chi tiết cách tìm hiểu và giải thích ý nghĩa của các biểu tượng trong giấc mơ",
    "totalTime": "PT5M",
    "supply": [
      {
        "@type": "HowToSupply",
        "name": "Chi tiết về giấc mơ cần giải mã"
      }
    ],
    "step": [
      {
        "@type": "HowToStep",
        "name": "Ghi nhớ chi tiết giấc mơ",
        "text": "Ghi lại tất cả chi tiết trong giấc mơ ngay sau khi thức dậy, bao gồm người, vật, địa điểm và cảm xúc"
      },
      {
        "@type": "HowToStep",
        "name": "Tìm kiếm biểu tượng",
        "text": "Sử dụng từ điển giấc mơ để tìm kiếm ý nghĩa của các biểu tượng chính trong giấc mơ"
      },
      {
        "@type": "HowToStep",
        "name": "Phân tích tổng thể",
        "text": "Kết hợp ý nghĩa các biểu tượng với tình huống thực tế để hiểu thông điệp từ giấc mơ"
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
