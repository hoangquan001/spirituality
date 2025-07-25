const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient();

const samplePosts = [
  {
    title: "Thần Số Học Là Gì? Hướng Dẫn Tính Số Mệnh Chi Tiết",
    slug: "than-so-hoc-la-gi-huong-dan-tinh-so-menh",
    excerpt: "Khám phá thế giới thần số học và cách tính số mệnh để hiểu rõ tính cách, vận mệnh của bản thân.",
    content: `# Thần Số Học Là Gì?

Thần số học (Numerology) là một hệ thống cổ xưa được sử dụng để khám phá những bí mật của cuộc sống thông qua các con số. Dựa trên ngày sinh và tên tuổi của bạn, thần số học có thể tiết lộ những thông tin quan trọng về tính cách, sở thích, thế mạnh và những thách thức mà bạn có thể gặp phải trong cuộc sống.

## Lịch Sử Của Thần Số Học

Thần số học có nguồn gốc từ nhiều nền văn minh cổ đại khác nhau:

- **Babylon cổ đại**: Những người Babylon đã sử dụng số học để dự đoán tương lai
- **Ai Cập cổ đại**: Người Ai Cập tin rằng các con số có thể ảnh hưởng đến vận mệnh
- **Hy Lạp cổ đại**: Pythagoras đã phát triển hệ thống thần số học hiện đại

## Cách Tính Số Mệnh

Để tính số mệnh của bạn, hãy làm theo các bước sau:

1. Viết ra ngày sinh đầy đủ (ngày/tháng/năm)
2. Cộng tất cả các chữ số lại với nhau
3. Tiếp tục cộng cho đến khi chỉ còn một chữ số

**Ví dụ**: Ngày sinh 15/03/1990
- 1 + 5 + 0 + 3 + 1 + 9 + 9 + 0 = 28
- 2 + 8 = 10
- 1 + 0 = 1

Vậy số mệnh của bạn là **1**.

## Ý Nghĩa Các Số Mệnh

### Số 1 - Người Lãnh Đạo
- **Tính cách**: Mạnh mẽ, quyết đoán, độc lập
- **Thế mạnh**: Khả năng lãnh đạo tự nhiên
- **Nghề nghiệp phù hợp**: CEO, doanh nhân, chính trị gia

### Số 2 - Người Hòa Giải
- **Tính cách**: Nhạy cảm, hòa đồng, thích hợp tác
- **Thế mạnh**: Khả năng làm việc nhóm xuất sắc
- **Nghề nghiệp phù hợp**: Ngoại giao, tư vấn, giáo dục

### Số 3 - Người Sáng Tạo
- **Tính cách**: Sáng tạo, lạc quan, giao tiếp tốt
- **Thế mạnh**: Khả năng nghệ thuật và biểu đạt
- **Nghề nghiệp phù hợp**: Nghệ sĩ, nhà văn, diễn viên

## Ứng Dụng Thần Số Học Trong Cuộc Sống

Thần số học không chỉ giúp bạn hiểu rõ bản thân mà còn có thể ứng dụng trong:

- **Chọn nghề nghiệp**: Tìm công việc phù hợp với tính cách
- **Quan hệ tình cảm**: Hiểu độ tương thích với đối tác
- **Ra quyết định**: Chọn thời điểm phù hợp cho các quyết định quan trọng
- **Phát triển bản thân**: Tối đa hóa thế mạnh và khắc phục điểm yếu

## Lưu Ý Khi Sử Dụng Thần Số Học

- Thần số học là công cụ tham khảo, không phải quyết định cuộc sống
- Kết hợp với kinh nghiệm và lý trí để đưa ra quyết định
- Sử dụng tích cực để phát triển bản thân

Thần số học là một công cụ tuyệt vời để khám phá bản thân và tìm kiếm ý nghĩa cuộc sống. Hãy sử dụng nó một cách khôn ngoan để tạo ra những thay đổi tích cực trong cuộc sống của bạn!`,
    author: "Chuyên gia Tâm Linh",
    category: "numerology",
    tags: ["thần số học", "số mệnh", "tính cách", "pythagoras"],
    isPublished: true,
    readTime: 8,
  },
  {
    title: "12 Cung Hoàng Đạo và Tính Cách Của Bạn",
    slug: "12-cung-hoang-dao-va-tinh-cach",
    excerpt: "Tìm hiểu về 12 cung hoàng đạo và cách chúng ảnh hưởng đến tính cách, vận mệnh của bạn.",
    content: `# 12 Cung Hoàng Đạo và Tính Cách

Cung hoàng đạo là một trong những công cụ cổ xưa nhất để hiểu về tính cách và vận mệnh con người. Dựa trên ngày tháng sinh, mỗi người sẽ thuộc về một trong 12 cung hoàng đạo, mỗi cung có những đặc điểm riêng biệt.

## Bạch Dương (21/3 - 19/4) ♈

**Đặc điểm nổi bật:**
- Năng động, nhiệt huyết
- Thích dẫn đầu và khám phá
- Quyết đoán, dám nghĩ dám làm

**Điểm mạnh:** Dũng cảm, lạc quan, có tinh thần lãnh đạo
**Điểm yếu:** Nóng tính, thiếu kiên nhẫn, ích kỷ

## Kim Ngưu (20/4 - 20/5) ♉

**Đặc điểm nổi bật:**
- Ổn định, đáng tin cậy
- Yêu thích sự thoải mái và vẻ đẹp
- Kiên trì, bền bỉ

**Điểm mạnh:** Thực tế, trung thành, có trách nhiệm
**Điểm yếu:** Cứng đầu, chậm thích nghi, vật chất

## Song Tử (21/5 - 20/6) ♊

**Đặc điểm nổi bật:**
- Thông minh, linh hoạt
- Giao tiếp giỏi, hòa đồng
- Tò mò, thích học hỏi

**Điểm mạnh:** Thích nghi nhanh, sáng tạo, hài hước
**Điểm yếu:** Không kiên định, nói nhiều, thiếu sâu sắc

## Cự Giải (21/6 - 22/7) ♋

**Đặc điểm nổi bật:**
- Tình cảm sâu sắc
- Yêu thích gia đình, tổ ấm
- Trực giác tốt, nhạy cảm

**Điểm mạnh:** Che chở, đồng cảm, trung thành
**Điểm yếu:** Hay lo lắng, khép kín, dễ tổn thương

## Sư Tử (23/7 - 22/8) ♌

**Đặc điểm nổi bật:**
- Tự tin, lạc quan
- Thích là trung tâm chú ý
- Có lòng tự trọng cao

**Điểm mạnh:** Hào phóng, trung thành, có khí chất lãnh đạo
**Điểm yếu:** Kiêu căng, độc đoán, thích khoe khoang

## Xử Nữ (23/8 - 22/9) ♍

**Đặc điểm nổi bật:**
- Tỉ mỉ, cẩn thận
- Thích sự hoàn hảo
- Thực tế, có óc phân tích

**Điểm mạnh:** Đáng tin cậy, chăm chỉ, có trách nhiệm
**Điểm yếu:** Khó tính, lo lắng, thiếu tự tin

## Thiên Bình (23/9 - 22/10) ♎

**Đặc điểm nổi bật:**
- Cân bằng, hài hòa
- Yêu thích vẻ đẹp và nghệ thuật
- Công bằng, khách quan

**Điểm mạnh:** Ngoại giao, lịch thiệp, có gu thẩm mỹ
**Điểm yếu:** Do dự, tránh xung đột, phụ thuộc

## Hổ Cáp (23/10 - 21/11) ♏

**Đặc điểm nổi bật:**
- Bí ẩn, sâu sắc
- Ý chí mạnh mẽ
- Trực giác nhạy bén

**Điểm mạnh:** Quyết tâm, trung thành, có sức mạnh nội tại
**Điểm yếu:** Ghen tuông, báo thù, khó gần

## Nhân Mã (22/11 - 21/12) ♐

**Đặc điểm nổi bật:**
- Tự do, phiêu lưu
- Lạc quan, tích cực
- Thích khám phá, học hỏi

**Điểm mạnh:** Độc lập, trung thực, có tầm nhìn xa
**Điểm yếu:** Thiếu kiên nhẫn, nói thẳng, khó ràng buộc

## Ma Kết (22/12 - 19/1) ♑

**Đặc điểm nổi bật:**
- Có tham vọng lớn
- Kiên trì, bền bỉ
- Thực tế, có trách nhiệm

**Điểm mạnh:** Kỷ luật, đáng tin cậy, có khả năng lãnh đạo
**Điểm yếu:** Cứng nhắc, bi quan, quá nghiêm khắc

## Bảo Bình (20/1 - 18/2) ♒

**Đặc điểm nổi bật:**
- Độc đáo, sáng tạo
- Thích sự tự do
- Có tính nhân đạo

**Điểm mạnh:** Tiến bộ, độc lập, có tầm nhìn tương lai
**Điểm yếu:** Lạnh lùng, cực đoan, khó đoán

## Song Ngư (19/2 - 20/3) ♓

**Đặc điểm nổi bật:**
- Nhạy cảm, mơ mộng
- Tình cảm phong phú
- Trực giác tốt, có khả năng nghệ thuật

**Điểm mạnh:** Đồng cảm, sáng tạo, linh hoạt
**Điểm yếu:** Dễ dao động, tránh thực tế, thiếu quyết đoán

## Ứng Dụng Kiến Thức Cung Hoàng Đạo

Hiểu rõ cung hoàng đạo của mình và người khác giúp bạn:

- **Cải thiện mối quan hệ**: Hiểu cách giao tiếp phù hợp với từng cung
- **Phát triển sự nghiệp**: Tìm nghề nghiệp phù hợp với tính cách
- **Tự phát triển**: Nhận ra điểm mạnh để phát huy và điểm yếu cần khắc phục

Hãy nhớ rằng cung hoàng đạo chỉ là một trong nhiều yếu tố ảnh hưởng đến tính cách. Sử dụng nó như một công cụ tham khảo để hiểu rõ bản thân và phát triển tích cực hơn!`,
    author: "Chuyên gia Tử Vi",
    category: "zodiac",
    tags: ["cung hoàng đạo", "tử vi", "tính cách", "12 cung"],
    isPublished: true,
    readTime: 12,
  },
  {
    title: "Phong Thủy Nhà Ở: 10 Nguyên Tắc Vàng Để Thu Hút Tài Lộc",
    slug: "phong-thuy-nha-o-10-nguyen-tac-vang",
    excerpt: "Khám phá 10 nguyên tắc phong thủy cơ bản giúp bạn bố trí nhà cửa hợp lý để thu hút tài lộc và may mắn.",
    content: `# Phong Thủy Nhà Ở: 10 Nguyên Tắc Vàng

Phong thủy là nghệ thuật sắp xếp không gian sống để tạo ra sự hài hòa giữa con người và môi trường xung quanh. Một ngôi nhà có phong thủy tốt không chỉ mang lại cảm giác thoải mái mà còn giúp thu hút tài lộc và may mắn cho gia chủ.

## 1. Cửa Chính - Cửa Sinh Khí

Cửa chính được coi là "miệng" của ngôi nhà, nơi khí tốt đi vào.

**Những điều cần lưu ý:**
- Cửa chính phải rộng rãi, sáng sủa
- Không để cửa chính đối diện với cửa sau (thông đường)
- Cửa phải mở được hoàn toàn, không bị cản trở
- Đặt chậu cây xanh hoặc tượng phong thủy hai bên cửa

**Tránh:**
- Cửa chính đối diện nhà vệ sinh
- Có gương chiếu thẳng vào cửa chính
- Để rác thải, đồ cũ trước cửa

## 2. Phòng Khách - Trung Tâm Năng Lượng

Phòng khách là nơi tập trung năng lượng của cả gia đình.

**Bố trí hợp lý:**
- Đặt bàn ghế theo hình chữ U hoặc L
- Ghế chính (của gia chủ) quay lưng vào tường
- Có thể nhìn thấy cửa chính từ vị trí ngồi
- Đặt bàn trà ở giữa để tạo điểm nhấn

**Màu sắc phù hợp:**
- Tông màu ấm: vàng, cam, đỏ nhạt
- Tránh màu quá tối hoặc quá sáng
- Kết hợp màu sắc theo mệnh gia chủ

## 3. Phòng Ngủ - Nơi Tích Tụ Năng Lượng

Phòng ngủ ảnh hưởng trực tiếp đến sức khỏe và vận mệnh.

**Vị trí giường ngủ:**
- Đầu giường tựa vào tường vững chắc
- Không đặt giường dưới xà ngang
- Tránh đặt giường đối diện gương
- Có thể nhìn thấy cửa nhưng không nằm thẳng hàng

**Màu sắc phòng ngủ:**
- Màu nhẹ nhàng: hồng nhạt, xanh mint, be
- Tránh màu đỏ và màu quá nổi
- Chọn màu theo hướng mệnh

## 4. Phòng Bếp - Nguồn Tài Lộc

Bếp tượng trưng cho sự thịnh vượng của gia đình.

**Vị trí bếp:**
- Không đặt bếp đối diện cửa chính
- Tránh đặt bếp dưới cầu thang
- Bếp không nên ở giữa nhà
- Có cửa sổ để thông khí

**Hướng bếp phù hợp:**
- Gia chủ mệnh Kim: Hướng Tây, Tây Bắc
- Gia chủ mệnh Mộc: Hướng Đông, Đông Nam
- Gia chủ mệnh Thủy: Hướng Bắc
- Gia chủ mệnh Hỏa: Hướng Nam
- Gia chủ mệnh Thổ: Hướng Tây Nam, Đông Bắc

## 5. Nhà Vệ Sinh - Nơi Thoát Khí Xấu

Nhà vệ sinh cần được bố trí hợp lý để không ảnh hưởng đến phong thủy.

**Nguyên tắc:**
- Không đặt ở trung tâm nhà
- Cửa nhà vệ sinh luôn đóng
- Có cửa sổ hoặc quạt thông gió
- Giữ sạch sẽ, khô ráo

## 6. Cây Xanh - Nguồn Sinh Khí

Cây xanh mang lại sinh khí và làm sạch không khí.

**Cây phù hợp:**
- Cây kim tiền: Thu hút tài lộc
- Cây phát tài: Tăng vận may
- Cây lan ý: Mang lại bình an
- Cây trúc: Tượng trưng sự kiên cường

**Vị trí đặt cây:**
- Góc tài lộc (góc chéo so với cửa chính)
- Cạnh cửa sổ có ánh sáng
- Tránh đặt trong phòng ngủ quá nhiều

## 7. Gương - Nhân Đôi Năng Lượng

Gương có thể nhân đôi năng lượng tích cực hoặc tiêu cực.

**Cách sử dụng:**
- Đặt gương phản chiếu cảnh đẹp
- Gương trong phòng ăn để nhân đôi thức ăn
- Không để gương chiếu vào giường
- Tránh gương vỡ hoặc cũ

## 8. Ánh Sáng - Nguồn Năng Lượng Dương

Ánh sáng tự nhiên mang lại năng lượng tích cực.

**Nguyên tắc:**
- Tối đa hóa ánh sáng tự nhiên
- Sử dụng đèn ấm cho buổi tối
- Tránh ánh sáng quá gắt hoặc quá tối
- Đèn phải hoạt động tốt

## 9. Màu Sắc Theo Mệnh

Mỗi người có màu sắc may mắn riêng theo ngũ hành.

**Mệnh Kim:** Trắng, vàng, nâu
**Mệnh Mộc:** Xanh lá, xanh lam, nâu
**Mệnh Thủy:** Đen, xanh đậm, xám
**Mệnh Hỏa:** Đỏ, cam, tím
**Mệnh Thổ:** Vàng, nâu, be

## 10. Dọn Dẹp và Sắp Xếp

Không gian sạch sẽ, ngăn nắp giúp khí tốt lưu thông.

**Thực hiện:**
- Dọn dẹp thường xuyên
- Vứt bỏ đồ không cần thiết
- Sắp xếp đồ đạc ngăn nắp
- Sửa chữa đồ hỏng kịp thời

## Lưu Ý Quan Trọng

- Phong thủy là nghệ thuật, không phải khoa học chính xác
- Cần kết hợp với thực tế và sở thích cá nhân
- Thay đổi từ từ, không nên thay đổi quá nhiều cùng lúc
- Quan trọng nhất là tạo ra không gian sống thoải mái

Áp dụng những nguyên tắc phong thủy này một cách linh hoạt để tạo ra ngôi nhà hài hòa, mang lại may mắn và thịnh vượng cho gia đình bạn!`,
    author: "Thầy Phong Thủy Minh An",
    category: "feng-shui",
    tags: ["phong thủy", "nhà ở", "tài lộc", "bố trí"],
    isPublished: true,
    readTime: 15,
  }
];

async function seed() {
  try {
    console.log('Seeding blog posts...');

    // Clear existing posts
    await prisma.blogPost.deleteMany();
    console.log('Cleared existing blog posts');

    // Create sample posts
    for (const postData of samplePosts) {
      await prisma.blogPost.create({
        data: {
          ...postData,
          publishedAt: new Date(),
        }
      });
    }

    console.log(`Created ${samplePosts.length} sample blog posts`);

    // Create some categories
    await prisma.blogCategory.deleteMany();
    const categories = [
      { name: 'Thần Số Học', slug: 'numerology', description: 'Khám phá bí mật cuộc đời qua những con số' },
      { name: 'Tử Vi 12 Cung', slug: 'zodiac', description: 'Vận mệnh và tính cách qua 12 cung hoàng đạo' },
      { name: 'Phong Thủy', slug: 'feng-shui', description: 'Hài hòa năng lượng sống theo nguyên lý phong thủy' },
      { name: 'Giải Mã Giấc Mơ', slug: 'dreams', description: 'Khám phá thông điệp từ tiềm thức' },
      { name: 'Tâm Linh', slug: 'spirituality', description: 'Kiến thức và trải nghiệm tâm linh' },
      { name: 'Mẹo Hay', slug: 'tips', description: 'Những mẹo hữu ích trong cuộc sống' },
    ];

    for (const category of categories) {
      await prisma.blogCategory.create({ data: category });
    }

    console.log(`Created ${categories.length} categories`);
    console.log('Seeding completed successfully!');

  } catch (error) {
    console.error('Error seeding database:', error);
  } finally {
    await prisma.$disconnect();
  }
}

seed();
