export default function ZodiacStructuredData() {
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Cung Hoàng Đạo - Tử Vi 12 Cung",
    "description": "Nội dung về tử vi và phân tích tính cách theo 12 cung hoàng đạo. Tìm hiểu về tình yêu, sự nghiệp và những đặc điểm cá nhân.",
    "provider": {
      "@type": "Organization",
      "name": "Tâm Linh - Thần Số Học",
      "url": "https://tamlinh.com"
    },
    "serviceType": "Astrology",
    "areaServed": "Vietnam",
    "url": "https://tamlinh.com/zodiac",
    "offers": {
      "@type": "Offer",
      "price": "0",
      "priceCurrency": "VND",
      "availability": "https://schema.org/InStock",
      "description": "Nội dung cung hoàng đạo hoàn toàn miễn phí"
    }
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "Cung hoàng đạo có chính xác không?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Cung hoàng đạo dựa trên vị trí của mặt trời tại thời điểm sinh, được nghiên cứu và phát triển qua hàng nghìn năm. Độ chính xác phụ thuộc vào cách diễn giải và áp dụng. Tại Tâm Linh, chúng tôi kết hợp kiến thức chiêm tinh học cổ điển với hiểu biết hiện đại để đưa ra phân tích chính xác nhất về tính cách và xu hướng cuộc sống."
        }
      },
      {
        "@type": "Question",
        "name": "Làm thế nào để biết cung hoàng đạo của mình?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Cung hoàng đạo được xác định dựa trên ngày và tháng sinh. Có 12 cung hoàng đạo tương ứng với 12 khoảng thời gian trong năm: Bạch Dương (21/3-19/4), Kim Ngưu (20/4-20/5), Song Tử (21/5-20/6), Cử Giải (21/6-22/7), Sư Tử (23/7-22/8), Xử Nữ (23/8-22/9), Thiên Bình (23/9-22/10), Bọ Cạp (23/10-21/11), Nhân Mã (22/11-21/12), Ma Kết (22/12-19/1), Bảo Bình (20/1-18/2), Song Ngư (19/2-20/3)."
        }
      },
      {
        "@type": "Question",
        "name": "Cung hoàng đạo có thể dự đoán tương lai không?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Cung hoàng đạo không dự đoán tương lai một cách tuyệt đối mà chỉ ra xu hướng và khả năng dựa trên tính cách và đặc điểm của từng cung. Nó giúp bạn hiểu rõ điểm mạnh, điểm yếu và cách tiếp cận cuộc sống, từ đó đưa ra quyết định phù hợp. Tương lai vẫn phụ thuộc vào nỗ lực và lựa chọn của bản thân."
        }
      },
      {
        "@type": "Question",
        "name": "Tại sao các cung hoàng đạo khác nhau có tính cách khác nhau?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Theo chiêm tinh học, mỗi cung hoàng đạo chịu ảnh hưởng của các yếu tố khác nhau như nguyên tố (Hỏa, Thổ, Khí, Thủy), hành tinh cai quản và vị trí trong chu kỳ năm. Những yếu tố này tạo nên những đặc điểm tính cách riêng biệt. Ví dụ, các cung Hỏa (Bạch Dương, Sư Tử, Nhân Mã) thường năng động và nhiệt huyết, trong khi các cung Thủy (Cự Giải, Bọ Cạp, Song Ngư) có xu hướng cảm xúc và trực giác."
        }
      },
      {
        "@type": "Question",
        "name": "Website cung hoàng đạo có tính phí không?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Không, tất cả nội dung cung hoàng đạo tại Tâm Linh đều hoàn toàn miễn phí. Bạn có thể xem thông tin chi tiết về 12 cung hoàng đạo, phân tích tính cách, tìm hiểu về tình yêu và sự nghiệp mà không mất phí. Chúng mình cam kết chia sẻ thông tin hữu ích để giúp bạn hiểu rõ hơn về bản thân."
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
        "name": "Cung Hoàng Đạo",
        "item": "https://tamlinh.com/zodiac"
      }
    ]
  };

  const howToSchema = {
    "@context": "https://schema.org",
    "@type": "HowTo",
    "name": "Cách xem cung hoàng đạo của bạn",
    "description": "Hướng dẫn chi tiết cách xác định và hiểu về cung hoàng đạo của bản thân",
    "totalTime": "PT3M",
    "supply": [
      {
        "@type": "HowToSupply",
        "name": "Ngày và tháng sinh"
      }
    ],
    "step": [
      {
        "@type": "HowToStep",
        "name": "Xác định ngày tháng sinh",
        "text": "Chuẩn bị thông tin chính xác về ngày và tháng sinh của bạn"
      },
      {
        "@type": "HowToStep",
        "name": "Tìm cung hoàng đạo tương ứng",
        "text": "Dựa vào ngày tháng sinh để xác định cung hoàng đạo trong 12 cung"
      },
      {
        "@type": "HowToStep",
        "name": "Đọc thông tin chi tiết",
        "text": "Xem phân tích về tính cách, tình yêu, sự nghiệp và lời khuyên cho cung của bạn"
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
