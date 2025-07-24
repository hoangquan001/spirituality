export interface GroupFeature {
    id: number;
    title: string;
    description: string;
    icon: string;
}

export interface Feature {
    id: number;
    title: string;
    description: string;
    icon: string;
    href: string;
    group: number;
}


export const groupFeatureData = [
    {
        id: 1,
        title: "Thần Số Học",
        description: "Khám phá số mệnh, tính cách và vận mệnh qua phương pháp Pythagoras. Phân tích ngày sinh, tên tuổi và dự đoán tương lai.",
        icon: "🔢",
    },
    {
        id: 2,
        title: "Cung Hoàng Đạo",
        description: "Tử vi 12 cung hoàng đạo chi tiết. Xem vận mệnh hôm nay, tương thích tình yêu và đặc điểm tính cách từng cung.",
        icon: "♈",
    },
    {
        id: 3,
        title: "Phong Thủy",
        description: "Phong thủy nhà ở, màu sắc hợp mệnh, hướng tốt theo tuổi. Chọn ngày tốt cho cưới hỏi, khai trương và các sự kiện quan trọng.",
        icon: "🧭",
    },
    {
        id: 4,
        title: "Giải Mã & Bói",
        description: "Giải mã giấc mơ, ý nghĩa con số đặc biệt. Bói bài Tarot, bài Tây và các minigame bói vui nhộn.",
        icon: "🔮",
    },
    {
        id: 5,
        title: "Tiện Ích",
        description: "Chuyển đổi lịch âm dương, lịch vạn niên, tính tuổi kết hôn, sinh con. Tra cứu tam tai và cung mệnh theo năm sinh.",
        icon: "🛠️",
    },
    {
        id: 6,
        title: "Blog",
        description: "Kho tàng kiến thức tâm linh từ cơ bản đến nâng cao. Hướng dẫn chi tiết và bài viết chuyên sâu về huyền học.",
        icon: "📚",
    },
    {
        id: 7,
        title: "Khác",
        description: "Thông tin về website, liên hệ hỗ trợ và các tính năng bổ sung khác.",
        icon: "ℹ️",
    },
];


export const featureData = [
    // Thần Số Học (Group 1)
    {
        id: 1,
        title: "Tra cứu thần số học",
        description: "Khám phá số mệnh và tính cách theo phương pháp Pythagoras",
        icon: "📊",
        href: "/numerology",
        group: 1,
    },
    {
        id: 2,
        title: "Ghép đôi ngày sinh",
        description: "Xem độ hợp trong tình yêu dựa trên thần số học",
        icon: "💕",
        href: "/numerology/compatibility",
        group: 1,
    },
    {
        id: 3,
        title: "Phân tích tên",
        description: "Ý nghĩa tên tuổi theo thần số học",
        icon: "✍️",
        href: "/name-analysis",
        group: 1,
    },
    {
        id: 4,
        title: "Dự đoán 12 tháng",
        description: "Vận mệnh cá nhân từng tháng trong năm",
        icon: "🔮",
        href: "/numerology/forecast",
        group: 1,
    },
    {
        id: 5,
        title: "Bài học nghiệp số",
        description: "Thử thách và bài học cuộc đời",
        icon: "📚",
        href: "/numerology/lessons",
        group: 1,
    },
    {
        id: 6,
        title: "Gợi ý nghề nghiệp",
        description: "Nghề nghiệp phù hợp theo số mệnh",
        icon: "💼",
        href: "/numerology/career",
        group: 1,
    },

    // Cung Hoàng Đạo (Group 2)
    {
        id: 7,
        title: "Tử vi 12 cung",
        description: "Đặc điểm và tính cách từng cung hoàng đạo",
        icon: "⭐",
        href: "/zodiac",
        group: 2,
    },
    {
        id: 8,
        title: "Tử vi hôm nay",
        description: "Vận mệnh trong ngày cho 12 cung",
        icon: "🌅",
        href: "/zodiac/today",
        group: 2,
    },
    {
        id: 9,
        title: "Ghép đôi cung hoàng đạo",
        description: "Độ hợp tình yêu giữa các cung",
        icon: "💑",
        href: "/zodiac/compatibility",
        group: 2,
    },
    {
        id: 10,
        title: "Lịch tử vi cá nhân",
        description: "Theo dõi vận mệnh hàng ngày",
        icon: "📅",
        href: "/zodiac/calendar",
        group: 2,
    },

    // Phong Thủy (Group 3)
    {
        id: 11,
        title: "Màu sắc hợp mệnh",
        description: "Màu may mắn theo tuổi và mệnh",
        icon: "🎨",
        href: "/fengshui/colors",
        group: 3,
    },
    {
        id: 12,
        title: "Hướng hợp tuổi",
        description: "Hướng nhà, bàn làm việc phù hợp",
        icon: "🧭",
        href: "/fengshui/directions",
        group: 3,
    },
    {
        id: 13,
        title: "Vật phẩm phong thủy",
        description: "Đồ vật may mắn theo tuổi",
        icon: "🏺",
        href: "/fengshui/items",
        group: 3,
    },
    {
        id: 14,
        title: "Chọn ngày tốt",
        description: "Ngày cưới, khai trương, xuất hành",
        icon: "📅",
        href: "/fengshui/dates",
        group: 3,
    },
    {
        id: 15,
        title: "Phong thủy nhà ở",
        description: "Bố trí nội thất hợp phong thủy",
        icon: "🏠",
        href: "/fengshui/home",
        group: 3,
    },
    {
        id: 16,
        title: "Sim số - Biển số",
        description: "Số điện thoại, biển số xe may mắn",
        icon: "📱",
        href: "/fengshui/numbers",
        group: 3,
    },

    // Giải Mã & Bói (Group 4)
    {
        id: 17,
        title: "Giải mã giấc mơ",
        description: "Từ điển giấc mơ đầy đủ nhất",
        icon: "💭",
        href: "/dream",
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
        href: "/cards",
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
        href: "/calendar/convert",
        group: 5,
    },
    {
        id: 23,
        title: "Lịch vạn niên",
        description: "Ngày tốt xấu trong năm",
        icon: "📅",
        href: "/calendar",
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
        description: "Thông tin về website Giải Mã Tâm Linh",
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

export const getFeatureDataByGroup = (group: number, take?: number) : Feature[] => {
    take = take || 100;
    return featureData.filter((feature) => feature.group === group).slice(0, take);
}

export const getGroupOfFeature = (href: string) => {
    return featureData.find((feature) => feature.href === href)?.group;
}

export const getRelatedFeatureData = (href: string, take?: number) : Feature[] => {
    take = take || 3;
    const group = getGroupOfFeature(href);
    return featureData.filter((feature) => feature.group === group && feature.href !== href).slice(0, take);
}