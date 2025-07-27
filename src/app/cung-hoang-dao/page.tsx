import { BlockContent } from "@/components/BlockContent";
import ContentHeader from "@/components/ContentHeader";
import FAQSection from "@/components/FAQSection";
import RelatedServices from "@/components/RelatedServices";
import ZodiacStructuredData from "@/components/ZodiacStructuredData";
import Link from "next/link";

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
    icon: "/aries.png",
    color: "from-gray-700 to-gray-800",
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
    icon: "/taurus.png",
    color: "from-gray-700 to-gray-800",
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
    icon: "/gemini.png",
    color: "from-gray-700 to-gray-800",
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
    icon: "/cancer.png",
    color: "from-gray-700 to-gray-800",
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
    icon: "/leo.png",
    color: "from-gray-700 to-gray-800",
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
    icon: "/virgo.png",
    color: "from-gray-700 to-gray-800",
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
    icon: "/libra.png",
    color: "from-gray-700 to-gray-800",
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
    icon: "/scorpio.png",
    color: "from-gray-700 to-gray-800",
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
    icon: "/sagittarius.png",
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
    icon: "/capricorn.png",
    color: "from-gray-700 to-gray-800",
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
    icon: "/aquarius.png",
    color: "from-gray-700 to-gray-800",
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
    icon: "/pisces.png",
    color: "from-gray-700 to-gray-800",
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
                <div className="cosmic-card rounded-2xl p-2 md:p-4 lg:p-6 h-full hover:scale-105 transition-all duration-300">
                  <div className="text-center">
                    {/* Icon */}
                    <div
                      className={`w-16 h-16 bg-gradient-to-br ${sign.color} border-3 border-yellow-700 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300`}
                    >
                      <span className="text-2xl text-white p-1"><img src={sign.icon} alt=""  className="p-1" /></span>
                    </div>

                    {/* Name & Dates */}
                    <h3 className="text-xl font-thin text-white mb-2">
                      <p className="text-golden"> {sign.name}</p>
                      <div>
                        <img src="/break-line.png" className="w-1/3 mx-auto" alt="" />
                      </div>
                    </h3>
                    <p className="font-medium mb-4">{sign.dates}</p>

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
                <div className="w-16 h-16 bg-gradient-to-br from-orange-300 to-orange-600 shadow-2xl shadow-amber-300 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl"><img src="/fire.png" alt="" /></span>
                </div>
                <h3 className="text-xl font-bold text-white mb-2">Hỏa</h3>
                <p className="text-gray-300 mb-3">Năng động, đam mê, dẫn dắt</p>
                <div className="text-sm text-golden">
                  Bạch Dương, Sư Tử, Nhân Mã
                </div>
              </div>

              <div className="cosmic-card rounded-xl p-6 text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-lime-200 to-lime-600 shadow-2xl shadow-lime-300 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl"><img src="/rock.png" alt="" /></span>
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
                <div className="w-16 h-16 bg-gradient-to-br from-cyan-200 to-cyan-600 shadow-2xl shadow-cyan-300 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl"><img src="/wind.png" alt="" /></span>
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
                <div className="w-16 h-16 bg-gradient-to-br from-blue-200 to-teal-600 shadow-2xl shadow-blue-300 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl"><img src="/water.png" alt="" /></span>
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

          <BlockContent>{content}</BlockContent>

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

const content = `## 12 Cung Hoàng Đạo: Khám Phá Bản Thân Qua Thiên Văn Học Huyền Bí

Bạn đã bao giờ tự hỏi liệu ngày sinh của mình có mối liên hệ nào với tính cách và con đường cuộc đời không? Câu trả lời nằm trong **12 Cung Hoàng Đạo** – một hệ thống chiêm tinh cổ xưa đã được khám phá và nghiên cứu suốt hàng ngàn năm. Đây không chỉ là một bảng phân loại ngày sinh đơn thuần, mà còn là chiếc gương phản chiếu những nét tính cách sâu sắc, xu hướng hành vi và tiềm năng định mệnh của mỗi chúng ta.

---

### 12 Cung Hoàng Đạo Là Gì?

**12 Cung Hoàng Đạo (Zodiac Signs)** là một vòng tròn 360 độ trên bầu trời, tượng trưng cho đường đi của Mặt Trời quanh Trái Đất trong một năm. Vòng tròn này được chia thành 12 phần bằng nhau, mỗi phần 30 độ, tương ứng với một khoảng thời gian cụ thể và một chòm sao. **Cung Hoàng Đạo** của bạn được xác định bởi vị trí của Mặt Trời vào ngày bạn chào đời.

Hiểu về cung Hoàng Đạo của mình và của những người xung quanh sẽ giúp bạn:

* **Thấu hiểu bản thân:** Khám phá những điểm mạnh, điểm yếu tiềm ẩn và các đặc trưng tính cách bẩm sinh.
* **Cải thiện mối quan hệ:** Nắm bắt xu hướng tính cách của bạn bè, gia đình, đối tác để xây dựng kết nối hài hòa hơn.
* **Định hướng cuộc sống:** Nhận diện những năng lượng chiêm tinh có thể ảnh hưởng đến các quyết định và hành trình của bạn.

---

### Bốn Nguyên Tố Chi Phối 12 Cung Hoàng Đạo

12 Cung Hoàng Đạo được chia thành bốn nhóm nguyên tố chính: Lửa, Đất, Khí, và Nước. Mỗi nhóm mang một "chất liệu" năng lượng riêng, định hình tính cách chung của các cung thuộc nhóm đó.

#### 1. Nhóm Nguyên Tố Lửa (Bạch Dương, Sư Tử, Nhân Mã)
* **Đặc điểm chung:** Nồng nhiệt, đam mê, năng động, nhiệt huyết, dũng cảm và có khả năng truyền cảm hứng. Họ là những người tiên phong, thích hành động.
* **Thách thức:** Dễ bốc đồng, thiếu kiên nhẫn, đôi khi độc đoán.

#### 2. Nhóm Nguyên Tố Đất (Kim Ngưu, Xử Nữ, Ma Kết)
* **Đặc điểm chung:** Thực tế, ổn định, kiên nhẫn, đáng tin cậy và luôn tìm kiếm sự an toàn, bền vững. Họ chú trọng giá trị vật chất và sự cần cù.
* **Thách thức:** Cứng nhắc, bảo thủ, đôi khi quá tập trung vào vật chất.

#### 3. Nhóm Nguyên Tố Khí (Song Tử, Thiên Bình, Bảo Bình)
* **Đặc điểm chung:** Thông minh, logic, giỏi giao tiếp, thích giao lưu, cởi mở, yêu tự do và luôn tìm kiếm kiến thức mới. Họ là những người của ý tưởng và kết nối.
* **Thách thức:** Khó tập trung, đôi khi quá lý trí, thiếu kiên định.

#### 4. Nhóm Nguyên Tố Nước (Cự Giải, Bọ Cạp, Song Ngư)
* **Đặc điểm chung:** Giàu cảm xúc, trực giác mạnh, sâu sắc, đồng cảm và có khả năng thấu hiểu người khác. Họ sống bằng trái tim và trực giác.
* **Thách thức:** Dễ bị chi phối bởi cảm xúc, nhạy cảm quá mức, đôi khi sống nội tâm.

---

### Tổng Quan 12 Cung Hoàng Đạo Và Đặc Trưng Nổi Bật

Hãy cùng khám phá những đặc trưng chính của từng cung:

#### 1. Bạch Dương (Aries) - 21/3 - 19/4
* **Đặc trưng:** Tiên phong, dũng cảm, thẳng thắn, nhiệt tình. Luôn tràn đầy năng lượng và sẵn sàng đối mặt thử thách.
* **Điểm cần lưu ý:** Dễ bốc đồng, thiếu kiên nhẫn.

#### 2. Kim Ngưu (Taurus) - 20/4 - 20/5
* **Đặc trưng:** Kiên định, chung thủy, thực tế, yêu thích sự ổn định và cái đẹp.
* **Điểm cần lưu ý:** Bướng bỉnh, khó thay đổi.

#### 3. Song Tử (Gemini) - 21/5 - 20/6
* **Đặc trưng:** Thông minh, nhanh nhẹn, hoạt ngôn, tò mò và thích nghi tốt.
* **Điểm cần lưu ý:** Dễ thay đổi, thiếu kiên định.

#### 4. Cự Giải (Cancer) - 21/6 - 22/7
* **Đặc trưng:** Nhạy cảm, quan tâm, bảo vệ, trực giác mạnh mẽ, yêu gia đình.
* **Điểm cần lưu ý:** Dễ bị chi phối bởi cảm xúc, sống nội tâm.

#### 5. Sư Tử (Leo) - 23/7 - 22/8
* **Đặc trưng:** Tự tin, hào phóng, lôi cuốn, có khả năng lãnh đạo bẩm sinh.
* **Điểm cần lưu ý:** Kiêu ngạo, thích được chú ý quá mức.

#### 6. Xử Nữ (Virgo) - 23/8 - 22/9
* **Đặc trưng:** Tỉ mỉ, cẩn thận, thực tế, luôn hướng tới sự hoàn hảo và thích phục vụ.
* **Điểm cần lưu ý:** Cầu toàn, hay lo lắng, đôi khi chỉ trích.

#### 7. Thiên Bình (Libra) - 23/9 - 22/10
* **Đặc trưng:** Duyên dáng, hòa đồng, giỏi ngoại giao, luôn tìm kiếm sự cân bằng và công bằng.
* **Điểm cần lưu ý:** Thiếu quyết đoán, dễ bị ảnh hưởng.

#### 8. Bọ Cạp (Scorpio) - 23/10 - 21/11
* **Đặc trưng:** Bí ẩn, mạnh mẽ, quyết đoán, đam mê, trực giác tốt.
* **Điểm cần lưu ý:** Thù dai, thích kiểm soát, đôi khi khắc nghiệt.

#### 9. Nhân Mã (Sagittarius) - 22/11 - 21/12
* **Đặc trưng:** Yêu tự do, lạc quan, thích phiêu lưu, ham học hỏi và có tầm nhìn rộng.
* **Điểm cần lưu ý:** Thiếu tế nhị, vô trách nhiệm, bốc đồng.

#### 10. Ma Kết (Capricorn) - 22/12 - 19/1
* **Đặc trưng:** Tham vọng, kỷ luật, có trách nhiệm, thực tế và kiên trì.
* **Điểm cần lưu ý:** Quá nghiêm khắc, bi quan, khó thể hiện cảm xúc.

#### 11. Bảo Bình (Aquarius) - 20/1 - 18/2
* **Đặc trưng:** Độc lập, sáng tạo, nhân đạo, thông minh và luôn đổi mới.
* **Điểm cần lưu ý:** Lập dị, xa cách, khó gần gũi về cảm xúc.

#### 12. Song Ngư (Pisces) - 19/2 - 20/3
* **Đặc trưng:** Nhạy cảm, đồng cảm, sáng tạo, trực giác mạnh và giàu lòng trắc ẩn.
* **Điểm cần lưu ý:** Dễ bị ảnh hưởng, mơ mộng, trốn tránh thực tế.

---

### Làm Thế Nào Để Sử Dụng Kiến Thức Về 12 Cung Hoàng Đạo?

Việc tìm hiểu về 12 Cung Hoàng Đạo không phải là để đóng khung bạn vào một khuôn mẫu cứng nhắc, mà là để:

* **Tự nhận thức:** Hiểu rõ hơn về những đặc điểm bẩm sinh của mình, cả ưu và nhược điểm.
* **Phát triển bản thân:** Nắm bắt điểm mạnh để phát huy và tìm cách cải thiện những hạn chế.
* **Cải thiện các mối quan hệ:** Đồng cảm hơn với người khác khi hiểu về xu hướng tính cách của họ.
* **Đưa ra quyết định:** Tham khảo những gợi ý về sự nghiệp, tình yêu, cuộc sống để đưa ra lựa chọn phù hợp nhất với bản thân.

Hãy nhớ rằng, Cung Mặt Trời chỉ là một phần của bản đồ chiêm tinh cá nhân bạn. Để có cái nhìn toàn diện hơn, bạn có thể tìm hiểu thêm về Cung Mọc (Ascendant Sign), Cung Mặt Trăng (Moon Sign) và vị trí của các hành tinh khác trong biểu đồ sao cá nhân của mình.
`
