import ContentHeader from "@/components/ContentHeader";
import Link from "next/link";
import RelatedServices from "@/components/RelatedServices";
import ZodiacStructuredData from "@/components/ZodiacStructuredData";
import FAQSection from "@/components/FAQSection";
import { ZodiacIcon } from "@/components/icons";

interface ZodiacSign {
  name: string;
  slug: string;
  dates: string;
  element: string;
  ruling_planet: string;
  symbol: string;
  description: string;
  icon: string;
  color: string;
}

const zodiacSigns: ZodiacSign[] = [
  {
    name: "Bạch Dương",
    slug: "bach-duong",
    dates: "21/3 - 19/4",
    element: "Hỏa",
    ruling_planet: "Sao Hỏa",
    symbol: "Cừu",
    description:
      "Năng động, quyết đoán và đầy nhiệt huyết. Người Bạch Dương luôn sẵn sàng đối mặt với thử thách.",
    icon: "♈",
    color: "from-red-600 to-orange-600",
  },
  {
    name: "Kim Ngưu",
    slug: "kim-nguu",
    dates: "20/4 - 20/5",
    element: "Thổ",
    ruling_planet: "Sao Kim",
    symbol: "Bò",
    description:
      "Ổn định, đáng tin cậy và yêu thích sự thoải mái. Người Kim Ngưu trân trọng vật chất và cảm xúc.",
    icon: "♉",
    color: "from-green-600 to-emerald-600",
  },
  {
    name: "Song Tử",
    slug: "song-tu",
    dates: "21/5 - 20/6",
    element: "Khí",
    ruling_planet: "Sao Thủy",
    symbol: "Đôi",
    description:
      "Thông minh, linh hoạt và giao tiếp giỏi. Người Song Tử có khả năng thích nghi nhanh với mọi hoàn cảnh.",
    icon: "♊",
    color: "from-yellow-600 to-amber-600",
  },
  {
    name: "Cự Giải",
    slug: "cu-giai",
    dates: "21/6 - 22/7",
    element: "Thủy",
    ruling_planet: "Mặt Trăng",
    symbol: "Cua",
    description:
      "Nhạy cảm, quan tâm gia đình và trực giác mạnh. Người Cử Giải có trái tim ấm áp và tình yêu sâu sắc.",
    icon: "♋",
    color: "from-blue-600 to-cyan-600",
  },
  {
    name: "Sư Tử",
    slug: "su-tu",
    dates: "23/7 - 22/8",
    element: "Hỏa",
    ruling_planet: "Mặt Trời",
    symbol: "Sư tử",
    description:
      "Tự tin, hào phóng và có khả năng lãnh đạo. Người Sư Tử luôn tỏa sáng và truyền cảm hứng cho người khác.",
    icon: "♌",
    color: "from-orange-600 to-yellow-600",
  },
  {
    name: "Xử Nữ",
    slug: "xu-nu",
    dates: "23/8 - 22/9",
    element: "Thổ",
    ruling_planet: "Sao Thủy",
    symbol: "Trinh nữ",
    description:
      "Cẩn thận, tỉ mỉ và có khả năng phân tích tốt. Người Xử Nữ luôn hướng đến sự hoàn hảo trong mọi việc.",
    icon: "♍",
    color: "from-gray-600 to-gray-700",
  },
  {
    name: "Thiên Bình",
    slug: "thien-binh",
    dates: "23/9 - 22/10",
    element: "Khí",
    ruling_planet: "Sao Kim",
    symbol: "Cán cân",
    description:
      "Hòa hợp, công bằng và yêu thích cái đẹp. Người Thiên Bình luôn tìm kiếm sự cân bằng trong cuộc sống.",
    icon: "♎",
    color: "from-pink-600 to-rose-600",
  },
  {
    name: "Hổ Cáp",
    slug: "ho-cap",
    dates: "23/10 - 21/11",
    element: "Thủy",
    ruling_planet: "Sao Diêm Vương",
    symbol: "Bọ cạp",
    description:
      "Mạnh mẽ, bí ẩn và có ý chí kiên định. Người Hổ Cáp có khả năng chuyển hóa và tái sinh mạnh mẽ.",
    icon: "♏",
    color: "from-red-800 to-red-600",
  },
  {
    name: "Nhân Mã",
    slug: "nhan-ma",
    dates: "22/11 - 21/12",
    element: "Hỏa",
    ruling_planet: "Sao Mộc",
    symbol: "Cung thủ",
    description:
      "Phiêu lưu, lạc quan và yêu thích tự do. Người Nhân Mã luôn tìm kiếm những trải nghiệm mới mẻ.",
    icon: "♐",
    color: "from-gray-700 to-gray-800",
  },
  {
    name: "Ma Kết",
    slug: "ma-ket",
    dates: "22/12 - 19/1",
    element: "Thổ",
    ruling_planet: "Sao Thổ",
    symbol: "Dê núi",
    description:
      "Kiên trì, có trách nhiệm và tham vọng. Người Ma Kết luôn nỗ lực để đạt được mục tiêu cao.",
    icon: "♑",
    color: "from-gray-600 to-slate-600",
  },
  {
    name: "Bảo Bình",
    slug: "bao-binh",
    dates: "20/1 - 18/2",
    element: "Khí",
    ruling_planet: "Sao Thiên Vương",
    symbol: "Người mang nước",
    description:
      "Độc lập, sáng tạo và có tầm nhìn xa. Người Bảo Bình luôn đi trước thời đại và yêu thích sự mới mẻ.",
    icon: "♒",
    color: "from-cyan-600 to-blue-600",
  },
  {
    name: "Song Ngư",
    slug: "song-ngu",
    dates: "19/2 - 20/3",
    element: "Thủy",
    ruling_planet: "Sao Hải Vương",
    symbol: "Cá",
    description:
      "Nhạy cảm, trực giác và giàu tình cảm. Người Song Ngư có khả năng thấu hiểu sâu sắc cảm xúc của người khác.",
    icon: "♓",
    color: "from-teal-600 to-green-600",
  },
];

const faqs = [
  {
    question: "Cung hoàng đạo có đáng tin không?",
    answer:
      "Cung hoàng đạo là một môn học cổ xưa dựa trên vị trí mặt trời khi bạn sinh ra. Đây là cách thú vị để tìm hiểu về tính cách và đặc điểm của bản thân. Nhiều người thấy những mô tả về cung hoàng đạo khá phù hợp với tính cách thực tế của mình, tạo cảm giác thú vị khi khám phá.",
  },
  {
    question: "Làm thế nào để biết cung hoàng đạo của mình?",
    answer:
      "Cung hoàng đạo được xác định dựa trên ngày và tháng sinh. Có 12 cung hoàng đạo tương ứng với 12 khoảng thời gian trong năm: Bạch Dương (21/3-19/4), Kim Ngưu (20/4-20/5), Song Tử (21/5-20/6), Cự Giải (21/6-22/7), Sư Tử (23/7-22/8), Xử Nữ (23/8-22/9), Thiên Bình (23/9-22/10), Bọ Cạp (23/10-21/11), Nhân Mã (22/11-21/12), Ma Kết (22/12-19/1), Bảo Bình (20/1-18/2), Song Ngư (19/2-20/3).",
  },
  {
    question: "Cung hoàng đạo có thể dự đoán tương lai không?",
    answer:
      "Cung hoàng đạo không dự đoán tương lai một cách tuyệt đối mà chỉ ra xu hướng và khả năng dựa trên tính cách và đặc điểm của từng cung. Nó giúp bạn hiểu rõ điểm mạnh, điểm yếu và cách tiếp cận cuộc sống, từ đó đưa ra quyết định phù hợp. Tương lai vẫn phụ thuộc vào nỗ lực và lựa chọn của bản thân.",
  },
  {
    question: "Tại sao các cung hoàng đạo khác nhau có tính cách khác nhau?",
    answer:
      "Theo chiêm tinh học, mỗi cung hoàng đạo chịu ảnh hưởng của các yếu tố khác nhau như nguyên tố (Hỏa, Thổ, Khí, Thủy), hành tinh cai quản và vị trí trong chu kỳ năm. Những yếu tố này tạo nên những đặc điểm tính cách riêng biệt. Ví dụ, các cung Hỏa (Bạch Dương, Sư Tử, Nhân Mã) thường năng động và nhiệt huyết, trong khi các cung Thủy (Cự Giải, Bọ Cạp, Song Ngư) có xu hướng cảm xúc và trực giác.",
  },
];

export default function ZodiacPage() {
  return (
    <>
      <ZodiacStructuredData />
      <div className="min-h-screen px-4">
        <div className="container mx-auto max-w-6xl">
          {/* Header */}

          <ContentHeader
            title="Cung Hoàng Đạo"
            description="Tìm hiểu tính cách và đặc điểm của 12 cung hoàng đạo.
              Khám phá những điều thú vị về bản thân qua ngày sinh của bạn."
            breadcrumb={[
              { label: "Trang Chủ", href: "/" },
              { label: "Cung Hoàng Đạo", href: "/cung-hoang-dao" },
            ]}
          />

          {/* Zodiac Wheel */}
          <div className="mb-16">
            <div className="relative w-100 h-100 mx-auto mb-8">
              <div
                className="absolute inset-0 rounded-full border-golden/30 animate-spin"
                style={{ animationDuration: "60s" }}
              >
                <img src="/1.png" alt="" />
              </div>
              <div
                className="absolute inset-0 rounded-full border-golden/30 animate-spin"
                style={{ animationDuration: "30s" }}
              >
                <img src="/2.png" alt="" />
              </div>
              <div
                className="absolute inset-0 rounded-full border-golden/30 animate-spin"
                style={{ animationDuration: "15s" }}
              >
                <img src="/3.png" alt="" />
              </div>
              <div
                className="absolute inset-0 rounded-full border-golden/30 animate-spin"
                style={{ animationDuration: "7s" }}
              >
                <img src="/4.png" alt="" />
              </div>
            </div>
          </div>

          {/* Zodiac Signs Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mb-16">
            {zodiacSigns.map((sign, index) => (
              <Link
                key={index}
                href={`/cung-hoang-dao/${sign.slug}`}
                className="block group"
              >
                <div className="cosmic-card rounded-2xl p-6 h-full hover:scale-105 transition-all duration-300">
                  <div className="text-center">
                    {/* Icon */}
                    <div
                      className={`w-16 h-16 bg-gradient-to-br ${sign.color} rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300`}
                    >
                      <span className="text-2xl text-white">{sign.icon}</span>
                    </div>

                    {/* Name & Dates */}
                    <h3 className="text-xl font-bold text-white mb-2">
                      {sign.name}
                    </h3>
                    <p className="text-golden font-medium mb-4">{sign.dates}</p>

                    {/* Details */}
                    <div className="space-y-2 mb-4">
                      <div className="flex justify-between text-sm">
                        <span className="text-gray-400">Nguyên tố:</span>
                        <span className="text-white">{sign.element}</span>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span className="text-gray-400">Hành tinh:</span>
                        <span className="text-white">{sign.ruling_planet}</span>
                      </div>
                    </div>

                    {/* Description */}
                    <p className="text-gray-300 text-sm leading-relaxed mb-4">
                      {sign.description}
                    </p>

                    {/* CTA */}
                    <div className="text-golden font-semibold group-hover:text-yellow-300 transition-colors">
                      Xem chi tiết →
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>

          {/* Elements Section */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-center mb-8">
              <span className="bg-gradient-to-r from-golden to-yellow-300 bg-clip-text text-transparent">
                4 Nguyên Tố Cơ Bản
              </span>
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="cosmic-card rounded-xl p-6 text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-red-600 to-orange-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">🔥</span>
                </div>
                <h3 className="text-xl font-bold text-white mb-2">Hỏa</h3>
                <p className="text-gray-300 mb-3">Năng động, đam mê, dẫn dắt</p>
                <div className="text-sm text-golden">
                  Bạch Dương, Sư Tử, Nhân Mã
                </div>
              </div>

              <div className="cosmic-card rounded-xl p-6 text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-green-600 to-emerald-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">🌍</span>
                </div>
                <h3 className="text-xl font-bold text-white mb-2">Thổ</h3>
                <p className="text-gray-300 mb-3">
                  Ổn định, thực tế, đáng tin cậy
                </p>
                <div className="text-sm text-golden">
                  Kim Ngưu, Xử Nữ, Ma Kết
                </div>
              </div>

              <div className="cosmic-card rounded-xl p-6 text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-cyan-600 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">💨</span>
                </div>
                <h3 className="text-xl font-bold text-white mb-2">Khí</h3>
                <p className="text-gray-300 mb-3">
                  Thông minh, giao tiếp, linh hoạt
                </p>
                <div className="text-sm text-golden">
                  Song Tử, Thiên Bình, Bảo Bình
                </div>
              </div>

              <div className="cosmic-card rounded-xl p-6 text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-600 to-teal-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">💧</span>
                </div>
                <h3 className="text-xl font-bold text-white mb-2">Thủy</h3>
                <p className="text-gray-300 mb-3">
                  Cảm xúc, trực giác, nhạy cảm
                </p>
                <div className="text-sm text-golden">
                  Cự Giải, Hổ Cáp, Song Ngư
                </div>
              </div>
            </div>
          </div>

          {/* CTA Section */}
          <div className="cosmic-card rounded-2xl p-8 text-center">
            <h2 className="text-3xl font-bold text-white mb-4">
              Tìm Hiểu Cung Hoàng Đạo Của Bạn
            </h2>
            <p className="text-xl text-gray-300 mb-6">
              Khám phá chi tiết về tính cách, tình yêu và vận mệnh dựa trên ngày
              sinh của bạn
            </p>
            <div className="space-y-4">
              <div className="text-gray-300">
                📅 Chỉ cần biết ngày sinh để khám phá cung hoàng đạo của bạn
              </div>
              <div className="text-gray-300">
                🔮 Nhận được lời khuyên chi tiết về tình yêu, sự nghiệp và sức
                khỏe
              </div>
              <div className="text-gray-300">
                <span className="flex items-center gap-2">
                  <ZodiacIcon className="text-golden" size={16} />
                  Tìm hiểu về mức độ tương hợp với các cung khác
                </span>
              </div>
            </div>
          </div>

          {/* FAQ Section */}
          <FAQSection
            description="Giải đáp những thắc mắc phổ biến về cung hoàng đạo và tử vi"
            faqs={faqs}
          />

          {/* Related Services */}
          <RelatedServices currentPage="/cung-hoang-dao" />
        </div>
      </div>
    </>
  );
}
