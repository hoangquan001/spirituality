interface FAQItem {
  question: string;
  answer: string;
}

interface FAQSectionProps {
  title?: string;
  subtitle?: string;
  faqs: FAQItem[];
}

export default function FAQSection({ 
  title = "Câu Hỏi Thường Gặp", 
  subtitle = "Giải đáp những thắc mắc phổ biến", 
  faqs 
}: FAQSectionProps) {
  return (
    <section className="py-20 px-4">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-white mb-4">
            <span className="bg-gradient-to-r from-golden to-yellow-400 bg-clip-text text-transparent">
              {title}
            </span>
          </h2>
          <p className="text-gray-300 text-lg">
            {subtitle}
          </p>
        </div>

        <div className="space-y-6">
          {faqs.map((faq, index) => (
            <div 
              key={index}
              className="bg-gradient-to-br from-gray-900/30 to-gray-800/30 backdrop-blur-sm rounded-2xl p-6 border border-gray-700/20"
            >
              <h3 className="text-xl font-bold text-golden mb-3">
                {faq.question}
              </h3>
              <p className="text-gray-300 leading-relaxed">
                {faq.answer}
              </p>
            </div>
          ))}
        </div>

        {/* Additional CTA */}
        <div className="text-center mt-12">
          <div className="bg-gradient-to-br from-gray-900/40 to-gray-800/40 backdrop-blur-sm rounded-2xl p-6 border border-gray-700/20">
            <h3 className="text-lg font-bold text-white mb-3">
              <span className="bg-gradient-to-r from-golden to-yellow-400 bg-clip-text text-transparent">
                Còn Thắc Mắc Khác?
              </span>
            </h3>
            <p className="text-gray-300 text-sm mb-4">
              Hãy liên hệ với chúng tôi để được hỗ trợ chi tiết và miễn phí
            </p>
            <div className="flex flex-wrap justify-center gap-3 text-sm">
              <div className="flex items-center gap-2 text-gray-400">
                <span>📧</span>
                <span>contact@tamlinh.com</span>
              </div>
              <div className="flex items-center gap-2 text-gray-400">
                <span>💬</span>
                <span>Hỗ trợ 24/7</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
