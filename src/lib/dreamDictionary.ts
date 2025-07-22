// Dữ liệu từ điển giải mã giấc mơ chi tiết

export interface DreamSymbol {
  symbol: string;
  meaning: string;
  category: string;
  luckyNumbers?: number[];
  detailedMeaning: string;
  culturalSignificance?: string;
  modernInterpretation?: string;
  recommendations?: string[];
}

export const dreamDictionary: DreamSymbol[] = [
  // Tự nhiên
  {
    symbol: "nước",
    meaning: "Nước trong giấc mơ thường đại diện cho cảm xúc, tiềm thức và sự thanh tẩy. Nước trong có thể báo hiệu may mắn và thành công, trong khi nước đục có thể cảnh báo về khó khăn sắp tới.",
    category: "Tự nhiên",
    luckyNumbers: [7, 14, 21, 28, 35],
    detailedMeaning: "Nước là biểu tượng của sự sống, tình cảm và tiềm thức. Tùy theo trạng thái của nước mà ý nghĩa có thể khác nhau: nước trong suốt báo hiệu tâm trạng trong sáng, may mắn; nước chảy mạnh thể hiện cảm xúc mãnh liệt; nước đứng yên có thể cảnh báo về sự trì trệ.",
    culturalSignificance: "Trong văn hóa phương Đông, nước được coi là nguyên tố của sự khôn ngoan và thịnh vượng. Mơ thấy nước thường được xem là điềm lành.",
    modernInterpretation: "Theo tâm lý học hiện đại, nước trong mơ phản ánh trạng thái cảm xúc và tiềm thức của người mơ. Có thể là dấu hiệu cần thanh tẩy tinh thần.",
    recommendations: [
      "Nếu mơ nước trong, hãy tận dụng thời cơ may mắn",
      "Mơ nước đục nên cẩn thận trong các quyết định",
      "Mơ bơi trong nước báo hiệu sự tự tin",
      "Nước mưa thể hiện sự làm mới và tái sinh"
    ]
  },
  
  {
    symbol: "lửa",
    meaning: "Lửa biểu thị đam mê, năng lượng sáng tạo và sự biến đổi. Lửa cháy mạnh có thể báo hiệu thành công trong công việc, nhưng lửa cháy lung tung cần cảnh giác về cộng sự.",
    category: "Tự nhiên",
    luckyNumbers: [3, 9, 27, 36, 45],
    detailedMeaning: "Lửa mang năng lượng mạnh mẽ, có thể vừa sáng tạo vừa phá hủy. Lửa nhỏ thể hiện đam mê, lửa lớn có thể cảnh báo về cơn giận hoặc xung đột. Lửa ấm áp báo hiệu tình yêu, lửa thiêu đốt cảnh báo về nguy hiểm.",
    culturalSignificance: "Lửa được xem là nguyên tố của sự sáng tạo và quyền lực. Trong nhiều nền văn hóa, lửa là biểu tượng của thần thánh và trí tuệ.",
    modernInterpretation: "Lửa trong mơ có thể phản ánh năng lượng tình dục, sự sáng tạo hoặc cảm xúc mãnh liệt. Cũng có thể là biểu hiện của stress và căng thẳng.",
    recommendations: [
      "Lửa nhỏ báo hiệu nên theo đuổi đam mê",
      "Lửa lớn cần kiểm soát cảm xúc",
      "Mơ thấy lửa nấu ăn là điềm tốt về gia đình",
      "Lửa cháy nhà cảnh báo về xung đột"
    ]
  },

  {
    symbol: "mưa",
    meaning: "Mưa có thể đại diện cho sự thanh tẩy, làm mới và cảm xúc. Mưa nhẹ thường mang ý nghĩa tốt, mưa bão có thể cảnh báo về khó khăn.",
    category: "Thời tiết",
    luckyNumbers: [17, 25, 38, 46],
    detailedMeaning: "Mưa là biểu tượng của sự tái sinh và làm sạch. Mưa nhẹ báo hiệu sự yên bình và may mắn sắp tới. Mưa to có thể thể hiện cảm xúc mãnh liệt hoặc khó khăn. Mưa rào nhanh chóng kết thúc có thể báo hiệu vấn đề tạm thời.",
    culturalSignificance: "Trong văn hóa nông nghiệp, mưa được coi là phước lành từ trời. Mưa đúng mùa báo hiệu mùa màng bội thu.",
    modernInterpretation: "Mưa có thể phản ánh nhu cầu làm sạch tinh thần, giải tỏa stress hoặc bắt đầu lại từ đầu. Cũng có thể là biểu hiện của trầm cảm nhẹ.",
    recommendations: [
      "Mưa nhẹ báo hiệu thời điểm tốt để bắt đầu dự án mới",
      "Mưa to nên chuẩn bị tinh thần cho thử thách",
      "Mưa rào nhanh chóng qua đi nghĩa là khó khăn tạm thời",
      "Mưa kèm nắng báo hiệu may mắn kép"
    ]
  },

  // Động vật
  {
    symbol: "rắn",
    meaning: "Rắn trong giấc mơ có thể đại diện cho kẻ thù ẩn nấp, sự phản bội hoặc sự tái sinh và chữa lành. Tùy vào ngữ cảnh, có thể là cảnh báo hoặc dấu hiệu tốt lành.",
    category: "Động vật",
    luckyNumbers: [1, 8, 15, 22, 29],
    detailedMeaning: "Rắn mang ý nghĩa đa chiều. Rắn cắn có thể cảnh báo về phản bội hoặc nguy hiểm. Rắn lột xác thể hiện sự thay đổi tích cực. Rắn lớn có thể đại diện cho quyền lực hoặc người có ảnh hưởng. Rắn nhỏ có thể là những lo lắng nhỏ nhặt.",
    culturalSignificance: "Trong y học cổ truyền, rắn là biểu tượng của sự chữa lành. Nhiều nền văn hóa coi rắn là biểu tượng của trí tuệ và sự tái sinh.",
    modernInterpretation: "Rắn có thể đại diện cho tiềm thức, bản năng tình dục hoặc những khía cạnh ẩn giấu của bản thân. Cũng có thể là cảnh báo về mối đe dọa tiềm ẩn.",
    recommendations: [
      "Rắn cắn cần cảnh giác với người xung quanh",
      "Rắn lột xác báo hiệu thời kỳ thay đổi tích cực",
      "Rắn to lớn có thể gặp người có quyền lực",
      "Giết rắn thể hiện sự chiến thắng khó khăn"
    ]
  },

  {
    symbol: "cá",
    meaning: "Cá thường mang ý nghĩa tốt lành, báo hiệu tài lộc và may mắn. Cá bơi trong nước trong là dấu hiệu của thịnh vượng và hạnh phúc trong gia đình.",
    category: "Động vật",
    luckyNumbers: [4, 13, 31, 40, 49],
    detailedMeaning: "Cá là biểu tượng của thịnh vượng và dồi dào. Cá lớn báo hiệu may mắn lớn, cá nhỏ là những may mắn nhỏ. Bắt được cá thể hiện thành công trong công việc. Cá chết có thể cảnh báo về tổn thất tài chính.",
    culturalSignificance: "Trong văn hóa phương Đông, cá được coi là biểu tượng của thịnh vượng và may mắn. 'Niên niên hữu dư' (năm nào cũng dư dả) gắn liền với hình ảnh cá.",
    modernInterpretation: "Cá có thể phản ánh trạng thái tài chính hoặc cảm xúc sâu thẳm. Cá bơi tự do thể hiện sự cân bằng cảm xúc.",
    recommendations: [
      "Cá tươi báo hiệu cơ hội kinh doanh tốt",
      "Bắt cá to thành công trong đầu tư",
      "Cá nhỏ nên chú ý những khoản thu nhỏ",
      "Ăn cá báo hiệu sức khỏe tốt"
    ]
  },

  {
    symbol: "chim",
    meaning: "Chim biểu thị tự do, ước mơ và khát vọng bay cao. Chim bay cao có thể báo hiệu thành công trong sự nghiệp, chim chết có thể cảnh báo về thất bại.",
    category: "Động vật",
    luckyNumbers: [2, 11, 29, 38, 47],
    detailedMeaning: "Chim đại diện cho ước mơ và khát vọng. Chim bay cao thể hiện thành công và tự do. Chim hót báo hiệu tin vui. Chim trong lồng có thể thể hiện cảm giác bị ràng buộc. Đàn chim bay thể hiện sự hợp tác thành công.",
    culturalSignificance: "Chim được coi là sứ giả giữa trời và đất. Nhiều loài chim như phượng hoàng, hạc được xem là biểu tượng của may mắn và thịnh vượng.",
    modernInterpretation: "Chim có thể phản ánh ý chí tự do, khát vọng vươn lên hoặc nhu cầu thoát khỏi ràng buộc hiện tại.",
    recommendations: [
      "Chim bay cao nên theo đuổi ước mơ lớn",
      "Chim hót báo hiệu tin vui sắp đến",
      "Chim trong lồng cần tìm cách giải phóng bản thân",
      "Đàn chim bay báo hiệu hợp tác thành công"
    ]
  },

  // Vật dụng
  {
    symbol: "tiền",
    meaning: "Mơ thấy tiền có thể có nhiều ý nghĩa: mất tiền trong mơ thường báo hiệu được tiền trong thực tế, được cho tiền có thể là dấu hiệu của may mắn sắp tới.",
    category: "Vật dụng",
    luckyNumbers: [6, 16, 26, 36, 48],
    detailedMeaning: "Tiền trong mơ phản ánh mối quan tâm về tài chính. Nhặt được tiền báo hiệu may mắn bất ngờ. Mất tiền có thể là cảnh báo nhưng cũng có thể báo hiệu sẽ được bù đắp. Đếm tiền thể hiện mong muốn ổn định tài chính.",
    culturalSignificance: "Trong quan niệm dân gian, mơ thấy tiền thường có ý nghĩa ngược: mất tiền trong mơ sẽ được tiền ngoài đời.",
    modernInterpretation: "Tiền có thể phản ánh lo lắng về tài chính, cảm giác an toàn hoặc giá trị bản thân. Cũng có thể liên quan đến quyền lực và địa vị xã hội.",
    recommendations: [
      "Nhặt tiền báo hiệu cơ hội tài chính bất ngờ",
      "Mất tiền nên cẩn thận với chi tiêu",
      "Được cho tiền có thể nhận được sự giúp đỡ",
      "Tiền giả cảnh báo về lừa đảo"
    ]
  },

  {
    symbol: "xe",
    meaning: "Xe cộ biểu thị hướng đi trong cuộc sống và khả năng kiểm soát định mệnh. Lái xe thuận lợi báo hiệu thành công, tai nạn xe có thể cảnh báo về khó khăn.",
    category: "Phương tiện",
    luckyNumbers: [10, 18, 35, 44],
    detailedMeaning: "Xe đại diện cho hành trình cuộc sống và khả năng kiểm soát. Lái xe thuận lợi thể hiện sự tự tin và thành công. Xe hỏng có thể cảnh báo về trở ngại. Xe mới báo hiệu khởi đầu mới. Ngồi xe của người khác có thể thể hiện sự phụ thuộc.",
    culturalSignificance: "Xe là biểu tượng của tiến bộ và di chuyển. Trong thời hiện đại, xe còn thể hiện địa vị xã hội.",
    modernInterpretation: "Xe có thể phản ánh cảm giác kiểm soát cuộc sống, hướng đi sự nghiệp hoặc mối quan hệ. Cũng có thể liên quan đến stress từ áp lực cuộc sống.",
    recommendations: [
      "Lái xe thuận lợi nên tự tin thực hiện kế hoạch",
      "Xe hỏng cần chuẩn bị cho trở ngại",
      "Xe mới báo hiệu cơ hội mới",
      "Tai nạn xe cảnh báo cần thận trọng"
    ]
  },

  // Kiến trúc
  {
    symbol: "nhà",
    meaning: "Nhà đại diện cho bản thân và gia đình. Nhà đẹp báo hiệu hạnh phúc gia đình, nhà hư hỏng có thể cảnh báo về xung đột trong gia đình.",
    category: "Kiến trúc",
    luckyNumbers: [5, 12, 24, 33, 41],
    detailedMeaning: "Nhà là biểu tượng của bản thân và không gian an toàn. Nhà mới thể hiện khởi đầu mới. Nhà cũ có thể liên quan đến quá khứ. Nhà to báo hiệu thành công, nhà nhỏ thể hiện sự khiêm tốn. Nhà sập cảnh báo về khủng hoảng.",
    culturalSignificance: "Nhà là biểu tượng của gia đình và tổ tiên. Xây nhà mới được xem là việc làm có phước.",
    modernInterpretation: "Nhà phản ánh trạng thái tâm lý và cảm giác an toàn. Có thể liên quan đến hình ảnh bản thân hoặc mối quan hệ gia đình.",
    recommendations: [
      "Nhà mới báo hiệu khởi đầu tốt đẹp",
      "Nhà cũ nên xem xét lại quá khứ",
      "Nhà đẹp thể hiện thành công sắp tới",
      "Nhà hỏng cần chú ý sức khỏe gia đình"
    ]
  },

  // Thực vật
  {
    symbol: "hoa",
    meaning: "Hoa tượng trưng cho vẻ đẹp, tình yêu và sự nở rộ. Hoa tươi báo hiệu tình yêu đẹp và may mắn, hoa tàn có thể báo hiệu kết thúc một giai đoạn.",
    category: "Thực vật",
    luckyNumbers: [19, 22, 33, 37, 46],
    detailedMeaning: "Hoa đại diện cho vẻ đẹp và tình cảm. Hoa nở thể hiện tình yêu đang phát triển. Hoa tàn có thể cảnh báo về kết thúc mối quan hệ. Tặng hoa báo hiệu muốn thể hiện tình cảm. Nhận hoa có thể nhận được tình yêu.",
    culturalSignificance: "Hoa là biểu tượng của sự tinh khiết và vẻ đẹp. Các loài hoa khác nhau có ý nghĩa khác nhau trong văn hóa truyền thống.",
    modernInterpretation: "Hoa có thể phản ánh cảm xúc tích cực, mong muốn yêu thương hoặc nhu cầu được đánh giá cao về mặt thẩm mỹ.",
    recommendations: [
      "Hoa tươi báo hiệu tình yêu đẹp",
      "Hoa tàn cần chăm sóc mối quan hệ",
      "Tặng hoa nên thể hiện tình cảm",
      "Cắt hoa báo hiệu thời gian vui vẻ"
    ]
  }
];

// Hàm tìm kiếm giấc mơ
export function searchDreams(keyword: string): DreamSymbol[] {
  return dreamDictionary.filter(dream =>
    dream.symbol.toLowerCase().includes(keyword.toLowerCase()) ||
    dream.meaning.toLowerCase().includes(keyword.toLowerCase()) ||
    dream.detailedMeaning.toLowerCase().includes(keyword.toLowerCase())
  );
}

// Hàm lấy giấc mơ theo danh mục
export function getDreamsByCategory(category: string): DreamSymbol[] {
  return dreamDictionary.filter(dream => dream.category === category);
}

// Hàm lấy tất cả danh mục
export function getAllCategories(): string[] {
  return [...new Set(dreamDictionary.map(dream => dream.category))];
}

// Hàm lấy giấc mơ ngẫu nhiên
export function getRandomDream(): DreamSymbol {
  return dreamDictionary[Math.floor(Math.random() * dreamDictionary.length)];
}
