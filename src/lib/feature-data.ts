
export interface GroupFeature {
    id: number;
    title: string;
    description: string;
    icon: string;
    brief: string;
    features?: any[];
    href: string;

}

export interface Feature {
    id: number;
    title: string;
    description: string;
    icon: string;
    href: string;
    group: number;
}


export const groupFeatureData: GroupFeature[] = [
    {
        id: 1,
        title: "Thần Số Học",
        brief: "Khám phá bí mật cuộc đời qua những con số trong ngày sinh",
        description: "Khám phá số mệnh, tính cách và vận mệnh qua phương pháp Pythagoras. Phân tích ngày sinh, tên tuổi và dự đoán tương lai.",
        icon: "numerology.png",
        href: "/than-so-hoc",
    },
    {
        id: 2,
        title: "Cung Hoàng Đạo",
        brief: "Vận mệnh và tính cách qua 12 cung hoàng đạo",
        description: "Tử vi 12 cung hoàng đạo chi tiết. Xem vận mệnh hôm nay, tương thích tình yêu và đặc điểm tính cách từng cung.",
        icon: "zodiac.png",
        href: "/cung-hoang-dao",
    },
    {
        id: 3,
        title: "Phong Thủy",
        brief: "Hài hòa năng lượng sống theo nguyên lý phong thủy",
        description: "Phong thủy nhà ở, màu sắc hợp mệnh, hướng tốt theo tuổi. Chọn ngày tốt cho cưới hỏi, khai trương và các sự kiện quan trọng.",
        icon: "fengshui.png",
        href: "/phong-thuy",
    },
    {
        id: 4,
        title: "Giải Mã & Bói",
        brief: "Khám phá thông điệp từ tiềm thức và vận may",
        description: "Giải mã giấc mơ, ý nghĩa con số đặc biệt. Bói bài Tarot, bài Tây và các minigame bói vui nhộn.",
        icon: "dream.png",
        href: "/giao-ma-giac-mo",
    },
    {
        id: 5,
        title: "Tiện Ích",
        brief: "Công cụ hỗ trợ cuộc sống theo lịch âm dương",
        description: "Chuyển đổi lịch âm dương, lịch vạn niên, tính tuổi kết hôn, sinh con. Tra cứu tam tai và cung mệnh theo năm sinh.",
        icon: "calendar.png",
        href: "/lich-van-nien",
    },
    {
        id: 6,
        title: "Blog",
        brief: "Kho tàng kiến thức huyền học và phong thủy",
        description: "Kho tàng kiến thức tâm linh từ cơ bản đến nâng cao. Hướng dẫn chi tiết và bài viết chuyên sâu về huyền học.",
        icon: "eye.png",
        href: "/blog",
    },
    // {
    //     id: 7,
    //     title: "Khác",
    //     description: "Thông tin về website, liên hệ hỗ trợ và các tính năng bổ sung khác.",
    //     icon: "ℹ️",
    // },
];


export const featureData: Feature[] = [
    // Thần Số Học (Group 1)
    {
        id: 1,
        title: "Tra cứu thần số học",
        description: "Khám phá số mệnh và tính cách theo phương pháp Pythagoras",
        icon: "📊",
        href: "/than-so-hoc",
        group: 1,
    },
    {
        id: 2,
        title: "Ghép đôi ngày sinh",
        description: "Xem độ hợp trong tình yêu dựa trên thần số học",
        icon: "💕",
        href: "/than-so-hoc/ghep-doi",
        group: 1,
    },
    {
        id: 3,
        title: "Phân tích tên",
        description: "Ý nghĩa tên tuổi theo thần số học",
        icon: "✍️",
        href: "/than-so-hoc/phan-tich-ten",
        group: 1,
    },
    {
        id: 4,
        title: "Dự đoán 12 tháng",
        description: "Vận mệnh cá nhân từng tháng trong năm",
        icon: "🔮",
        href: "/than-so-hoc/du-doan-12-thang",
        group: 1,
    },
    {
        id: 5,
        title: "Bài học nghiệp số",
        description: "Thử thách và bài học cuộc đời",
        icon: "📚",
        href: "/than-so-hoc/bai-hoc-nghiep-so",
        group: 1,
    },
    {
        id: 6,
        title: "Gợi ý nghề nghiệp",
        description: "Nghề nghiệp phù hợp theo số mệnh",
        icon: "💼",
        href: "/than-so-hoc/goi-y-nghe-nghiep",
        group: 1,
    },

    // Cung Hoàng Đạo (Group 2)
    {
        id: 7,
        title: "Tử vi 12 cung",
        description: "Đặc điểm và tính cách từng cung hoàng đạo",
        icon: "⭐",
        href: "/cung-hoang-dao",
        group: 2,
    },
    {
        id: 8,
        title: "Tử vi hôm nay",
        description: "Vận mệnh trong ngày cho 12 cung",
        icon: "🌅",
        href: "/cung-hoang-dao/today",
        group: 2,
    },
    {
        id: 9,
        title: "Ghép đôi cung hoàng đạo",
        description: "Độ hợp tình yêu giữa các cung",
        icon: "💑",
        href: "/cung-hoang-dao/compatibility",
        group: 2,
    },
    {
        id: 10,
        title: "Lịch tử vi cá nhân",
        description: "Theo dõi vận mệnh hàng ngày",
        icon: "📅",
        href: "/cung-hoang-dao/calendar",
        group: 2,
    },

    // Phong Thủy (Group 3)
    {
        id: 11,
        title: "Màu sắc hợp mệnh",
        description: "Màu may mắn theo tuổi và mệnh",
        icon: "🎨",
        href: "/phong-thuy/colors",
        group: 3,
    },
    {
        id: 12,
        title: "Hướng hợp tuổi",
        description: "Hướng nhà, bàn làm việc phù hợp",
        icon: "🧭",
        href: "/phong-thuy/directions",
        group: 3,
    },
    {
        id: 13,
        title: "Vật phẩm phong thủy",
        description: "Đồ vật may mắn theo tuổi",
        icon: "🏺",
        href: "/phong-thuy/items",
        group: 3,
    },
    {
        id: 14,
        title: "Chọn ngày tốt",
        description: "Ngày cưới, khai trương, xuất hành",
        icon: "📅",
        href: "/phong-thuy/dates",
        group: 3,
    },
    {
        id: 15,
        title: "Phong thủy nhà ở",
        description: "Bố trí nội thất hợp phong thủy",
        icon: "🏠",
        href: "/phong-thuy/home",
        group: 3,
    },
    {
        id: 16,
        title: "Sim số - Biển số",
        description: "Số điện thoại, biển số xe may mắn",
        icon: "📱",
        href: "/phong-thuy/numbers",
        group: 3,
    },

    // Giải Mã & Bói (Group 4)
    {
        id: 17,
        title: "Giải mã giấc mơ",
        description: "Từ điển giấc mơ đầy đủ nhất",
        icon: "💭",
        href: "/giai-ma-giac-mo",
        group: 4,
    },
    {
        id: 18,
        title: "Ý nghĩa con số",
        description: "Giải mã các con số đặc biệt",
        icon: "🔢",
        href: "/numbers/meaning",
        group: 4,
    },
    {
        id: 19,
        title: "Bói bài Tarot",
        description: "Bói bài đơn giản và thú vị",
        icon: "🃏",
        href: "/tarot",
        group: 4,
    },
    {
        id: 20,
        title: "Bói bài Tây",
        description: "Trò chơi bói vui nhộn",
        icon: "🎴",
        href: "/boi-bai-tay",
        group: 4,
    },
    {
        id: 21,
        title: "Minigame bói",
        description: "Bói hình, màu, số thú vị",
        icon: "🎮",
        href: "/games",
        group: 4,
    },

    // Tiện Ích (Group 5)
    {
        id: 22,
        title: "Chuyển đổi lịch",
        description: "Âm lịch ⇄ Dương lịch",
        icon: "🌙",
        href: "/chuyen-doi-lich",
        group: 5,
    },
    {
        id: 23,
        title: "Lịch vạn niên",
        description: "Ngày tốt xấu trong năm",
        icon: "📅",
        href: "/lich-van-nien",
        group: 5,
    },
    {
        id: 24,
        title: "Tuổi kết hôn",
        description: "Xem tuổi thích hợp cưới",
        icon: "💒",
        href: "/marriage-age",
        group: 5,
    },
    {
        id: 25,
        title: "Tuổi sinh con",
        description: "Thời điểm tốt sinh con",
        icon: "👶",
        href: "/birth-age",
        group: 5,
    },
    {
        id: 26,
        title: "Tam tai - Hạn năm",
        description: "Tính năm tuổi khó khăn",
        icon: "⚠️",
        href: "/tam-tai",
        group: 5,
    },
    {
        id: 27,
        title: "Cung mệnh - Ngũ hành",
        description: "Tính cung mệnh theo năm sinh",
        icon: "🏛️",
        href: "/destiny-palace",
        group: 5,
    },

    // Blog (Group 6)
    {
        id: 28,
        title: "Blog Tâm Linh",
        description: "Kiến thức huyền học từ cơ bản đến nâng cao",
        icon: "📚",
        href: "/blog",
        group: 6,
    },
    {
        id: 29,
        title: "Hướng dẫn thần số học",
        description: "Học thần số học từ A-Z",
        icon: "📖",
        href: "/huong-dan-than-so-hoc",
        group: 6,
    },

    // Khác (Group 7)
    {
        id: 30,
        title: "Về chúng tôi",
        description: "Thông tin về website Thần Số Học",
        icon: "ℹ️",
        href: "/about",
        group: 7,
    },
    {
        id: 31,
        title: "Liên hệ",
        description: "Hỗ trợ và góp ý",
        icon: "📞",
        href: "/contact",
        group: 7,
    },
]

export const getGroupFeatureData = (): GroupFeature[] => {
    const _groupFeatureData: GroupFeature[] = [...groupFeatureData]
    for (const group of _groupFeatureData) {
        group.features = getFeatureDataByGroup(group.id);
    }
    return _groupFeatureData;
}

export const getFeatureDataByGroup = (group: number, take?: number): Feature[] => {
    take = take || 100;
    return featureData.filter((feature) => feature.group === group).slice(0, take);
}

export const getGroupOfFeature = (href: string) => {
    return featureData.find((feature) => feature.href === href)?.group;
}

export const getRelatedFeatureData = (href: string, take?: number): Feature[] => {
    take = take || 3;
    const group = getGroupOfFeature(href);
    return featureData.filter((feature) => feature.group === group && feature.href !== href).slice(0, take);
}