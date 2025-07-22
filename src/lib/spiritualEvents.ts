// Spiritual Events Library - Vietnamese Traditional Calendar Events

export interface SpiritualEvent {
  id: string;
  name: string;
  icon: string;
  type: 'Buddhist' | 'Traditional' | 'Confucian' | 'Folk' | 'Cultural';
  tradition: string;
  date: {
    day: number;
    month: number;
    isLunar: boolean;
  };
  description: string;
  significance: string;
  activities?: string[];
  preparations?: string[];
  tags: string[];
  isSpecial: boolean;
  isUpcoming?: boolean;
  daysLeft?: number | null;
}

// Main spiritual events data
const SPIRITUAL_EVENTS: SpiritualEvent[] = [
  // Tết Nguyên Đán
  {
    id: 'tet-nguyen-dan',
    name: 'Tết Nguyên Đán',
    icon: '🎊',
    type: 'Traditional',
    tradition: 'Dân gian Việt Nam',
    date: { day: 1, month: 1, isLunar: true },
    description: 'Tết Nguyên Đán là ngày lễ quan trọng nhất trong năm của người Việt Nam, đánh dấu sự khởi đầu của năm mới âm lịch.',
    significance: 'Biểu tượng cho sự đổi mới, hy vọng và đoàn tụ gia đình. Đây là thời điểm để tưởng nhớ tổ tiên và cầu chúc may mắn cho năm mới.',
    activities: [
      'Cúng gia tiên và thần linh',
      'Thăm hỏi họ hàng, bạn bè',
      'Lì xì cho trẻ em',
      'Ăn bánh chưng, bánh tét',
      'Xem múa lân, pháo hoa'
    ],
    preparations: [
      'Dọn dẹp nhà cửa',
      'Mua sắm quần áo mới',
      'Chuẩn bị mâm cúng',
      'Trang trí nhà với hoa đào, mai',
      'Nấu các món ăn truyền thống'
    ],
    tags: ['Năm mới', 'Gia đình', 'Truyền thống', 'Cúng bái'],
    isSpecial: true
  },

  // Tết Trung Thu
  {
    id: 'tet-trung-thu',
    name: 'Tết Trung Thu',
    icon: '🌕',
    type: 'Traditional',
    tradition: 'Dân gian Việt Nam',
    date: { day: 15, month: 8, isLunar: true },
    description: 'Tết Trung Thu là ngày lễ dành cho trẻ em, được tổ chức vào đêm trăng tròn của tháng 8 âm lịch.',
    significance: 'Biểu tượng cho sự đoàn viên, tình yêu thương gia đình và niềm vui tuổi thơ. Đây cũng là dịp tôn vinh mặt trăng và cầu chúc mùa màng bội thu.',
    activities: [
      'Thưởng trăng cùng gia đình',
      'Ăn bánh trung thu',
      'Múa lân, rước đèn',
      'Kể chuyện cô Chang\'e',
      'Cúng trăng với trái cây'
    ],
    preparations: [
      'Mua bánh trung thu',
      'Chuẩn bị đèn lồng',
      'Trang trí nhà với đèn màu',
      'Chuẩn bị mâm cúng trăng',
      'Mua trái cây tươi'
    ],
    tags: ['Trẻ em', 'Trăng tròn', 'Đoàn viên', 'Bánh trung thu'],
    isSpecial: true
  },

  // Phật Đản
  {
    id: 'phat-dan',
    name: 'Phật Đản (Vesak)',
    icon: '🙏',
    type: 'Buddhist',
    tradition: 'Phật giáo',
    date: { day: 8, month: 4, isLunar: true },
    description: 'Ngày kỷ niệm sinh nhật của Đức Phật Thích Ca Mâu Ni, là ngày lễ thiêng liêng nhất trong Phật giáo.',
    significance: 'Tưởng nhớ và tôn vinh Đức Phật, học hỏi giáo pháp từ bi và trí tuệ. Đây là dịp để tự soi chiếu và phát nguyện tu hành.',
    activities: [
      'Lễ Phật tại chùa',
      'Nghe pháp thoại',
      'Thả đèn hoa đăng',
      'Ăn chay và tụng kinh',
      'Phóng sinh động vật'
    ],
    preparations: [
      'Ăn chay 3 ngày',
      'Chuẩn bị hoa và nến',
      'Đọc kinh Phật',
      'Làm từ thiện',
      'Tâm niệm thanh tịnh'
    ],
    tags: ['Phật giáo', 'Từ bi', 'Giác ngộ', 'Tu hành'],
    isSpecial: true
  },

  // Vu Lan
  {
    id: 'vu-lan',
    name: 'Vu Lan (Ullambana)',
    icon: '👻',
    type: 'Buddhist',
    tradition: 'Phật giáo',
    date: { day: 15, month: 7, isLunar: true },
    description: 'Ngày cúng dương báo hiếu và siêu độ cho các linh hồn đã khuất, đặc biệt là cha mẹ.',
    significance: 'Thể hiện lòng hiếu thảo với cha mẹ và tổ tiên, cầu siêu cho những người đã khuất để họ được an nghỉ.',
    activities: [
      'Cúng vu lan tại chùa',
      'Đeo hoa hồng (cha mẹ còn sống) hoặc hoa trắng',
      'Cầu siêu cho tổ tiên',
      'Làm từ thiện, bố thi',
      'Tụng kinh Vu Lan'
    ],
    preparations: [
      'Chuẩn bị hoa hồng/trắng',
      'Mua lễ cúng tổ tiên',
      'Ăn chay thanh tịnh',
      'Chuẩn bị tiền bố thi',
      'Tâm niệm hiếu thảo'
    ],
    tags: ['Hiếu thảo', 'Tổ tiên', 'Cầu siêu', 'Từ thiện'],
    isSpecial: true
  },

  // Tết Đoan Ngọ
  {
    id: 'tet-doan-ngo',
    name: 'Tết Đoan Ngọ',
    icon: '🌿',
    type: 'Traditional',
    tradition: 'Dân gian Việt Nam',
    date: { day: 5, month: 5, isLunar: true },
    description: 'Tết Đoan Ngọ là ngày lễ truyền thống để phòng chống bệnh tật và tà ma, thường diễn ra vào mùa hè.',
    significance: 'Xua đuổi tà ma, phòng chống dịch bệnh và cầu chúc sức khỏe cho gia đình. Đây là thời điểm quan trọng để thanh tẩy và bảo vệ.',
    activities: [
      'Ăn rượu nếp và bánh ít lá gai',
      'Treo lá ngải, lá xả',
      'Tắm nước lá thuốc nam',
      'Giết sâu bọ trong vườn',
      'Cúng thần linh bảo vệ'
    ],
    preparations: [
      'Hái lá ngải, lá xả',
      'Nấu rượu nếp',
      'Làm bánh ít lá gai',
      'Chuẩn bị thuốc nam',
      'Dọn dẹp nhà cửa'
    ],
    tags: ['Sức khỏe', 'Phòng bệnh', 'Xua tà', 'Thuốc nam'],
    isSpecial: false
  },

  // Rằm tháng Giêng
  {
    id: 'ram-thang-gieng',
    name: 'Rằm tháng Giêng',
    icon: '🌕',
    type: 'Traditional',
    tradition: 'Dân gian Việt Nam',
    date: { day: 15, month: 1, isLunar: true },
    description: 'Ngày rằm đầu tiên của năm mới, đánh dấu kết thúc dịp Tết Nguyên Đán.',
    significance: 'Cầu chúc may mắn và bình an cho cả năm, thể hiện lòng thành kính với thần Phật và tổ tiên.',
    activities: [
      'Cúng rằm tại gia',
      'Đi chùa cầu an',
      'Thả đèn hoa đăng',
      'Ăn chè, bánh trôi',
      'Cầu tài lộc, sức khỏe'
    ],
    preparations: [
      'Chuẩn bị mâm cúng rằm',
      'Mua hoa và nến',
      'Làm bánh trôi, chè',
      'Chuẩn bị tiền lẻ cúng',
      'Tâm niệm thành kính'
    ],
    tags: ['Rằm', 'Cầu an', 'Tết Nguyên Đán', 'Trăng tròn'],
    isSpecial: false
  },

  // Giỗ Tổ Hùng Vương
  {
    id: 'gio-to-hung-vuong',
    name: 'Giỗ Tổ Hùng Vương',
    icon: '👑',
    type: 'Cultural',
    tradition: 'Lịch sử Việt Nam',
    date: { day: 10, month: 3, isLunar: true },
    description: 'Ngày tưởng nhớ các Vua Hùng - những người có công dựng nước và khai sinh dân tộc Việt Nam.',
    significance: 'Thể hiện lòng biết ơn với tổ tiên dân tộc, giáo dục về truyền thống và bản sắc văn hóa Việt Nam.',
    activities: [
      'Lễ dâng hương tại Đền Hùng',
      'Tham gia các hoạt động văn hóa',
      'Ăn bánh chưng, bánh dày',
      'Nghe kể chuyện lịch sử',
      'Tham quan di tích lịch sử'
    ],
    preparations: [
      'Tìm hiểu lịch sử Vua Hùng',
      'Chuẩn bị lễ vật dâng hương',
      'Mặc trang phục lịch sự',
      'Chuẩn bị bánh chưng',
      'Tâm niệm tri ân'
    ],
    tags: ['Lịch sử', 'Dân tộc', 'Vua Hùng', 'Truyền thống'],
    isSpecial: true
  },

  // Tết Hàn Thực
  {
    id: 'tet-han-thuc',
    name: 'Tết Hàn Thực',
    icon: '🥧',
    type: 'Traditional',
    tradition: 'Dân gian Việt Nam',
    date: { day: 3, month: 3, isLunar: true },
    description: 'Ngày lễ truyền thống với tục ăn đồ nguội và tưởng nhớ người đã khuất.',
    significance: 'Tưởng nhớ tổ tiên, thể hiện lòng hiếu thảo và duy trì truyền thống ẩm thực dân gian.',
    activities: [
      'Ăn bánh trôi, bánh chay',
      'Cúng tổ tiên với đồ ăn nguội',
      'Kể chuyện cổ tích',
      'Thăm mộ tổ tiên',
      'Ăn chay thanh tịnh'
    ],
    preparations: [
      'Làm bánh trôi, bánh chay',
      'Chuẩn bị đồ ăn nguội',
      'Mua hoa và nến',
      'Dọn dẹp bàn thờ',
      'Chuẩn bị tâm thành'
    ],
    tags: ['Tổ tiên', 'Ẩm thực', 'Truyền thống', 'Hiếu đạo'],
    isSpecial: false
  }
];

// Get all spiritual events
export function getSpiritualEvents(): SpiritualEvent[] {
  return SPIRITUAL_EVENTS.map(event => ({
    ...event,
    isUpcoming: isEventUpcoming(event),
    daysLeft: getDaysUntilEvent(event)
  }));
}

// Get events by month
export function getEventsByMonth(month: number, year: number): SpiritualEvent[] {
  return SPIRITUAL_EVENTS.filter(event => {
    if (event.date.isLunar) {
      // For lunar calendar events, approximate matching
      return event.date.month === month;
    } else {
      // For solar calendar events
      return event.date.month === month;
    }
  }).map(event => ({
    ...event,
    isUpcoming: isEventUpcoming(event),
    daysLeft: getDaysUntilEvent(event)
  }));
}

// Get upcoming events (next 30 days)
export function getUpcomingEvents(): SpiritualEvent[] {
  const upcoming = SPIRITUAL_EVENTS.filter(event => {
    const daysLeft = getDaysUntilEvent(event);
    return daysLeft !== null && daysLeft >= 0 && daysLeft <= 30;
  });

  return upcoming.map(event => ({
    ...event,
    isUpcoming: true,
    daysLeft: getDaysUntilEvent(event)
  })).sort((a, b) => (a.daysLeft || 0) - (b.daysLeft || 0));
}

// Check if event is upcoming
function isEventUpcoming(event: SpiritualEvent): boolean {
  const daysLeft = getDaysUntilEvent(event);
  return daysLeft !== null && daysLeft >= 0 && daysLeft <= 30;
}

// Calculate days until event (simplified for lunar calendar)
function getDaysUntilEvent(event: SpiritualEvent): number | null {
  const now = new Date();
  const currentYear = now.getFullYear();
  
  // For lunar calendar events, this is an approximation
  // In a real application, you would use precise lunar calendar calculations
  let eventDate: Date;
  
  if (event.date.isLunar) {
    // Approximate lunar to solar conversion
    // This is simplified - real conversion would be more complex
    let approximateMonth = event.date.month + 1; // Rough approximation
    if (approximateMonth > 12) approximateMonth = approximateMonth - 12;
    
    eventDate = new Date(currentYear, approximateMonth - 1, event.date.day);
    
    // If the event has passed this year, check next year
    if (eventDate < now) {
      eventDate = new Date(currentYear + 1, approximateMonth - 1, event.date.day);
    }
  } else {
    eventDate = new Date(currentYear, event.date.month - 1, event.date.day);
    
    // If the event has passed this year, check next year
    if (eventDate < now) {
      eventDate = new Date(currentYear + 1, event.date.month - 1, event.date.day);
    }
  }
  
  const diffTime = eventDate.getTime() - now.getTime();
  const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
  
  return diffDays;
}

// Format event date for display
export function formatEventDate(event: SpiritualEvent): string {
  const calendarType = event.date.isLunar ? 'âm lịch' : 'dương lịch';
  return `${event.date.day}/${event.date.month} (${calendarType})`;
}

// Get events by type
export function getEventsByType(type: SpiritualEvent['type']): SpiritualEvent[] {
  return SPIRITUAL_EVENTS.filter(event => event.type === type);
}

// Get special events only
export function getSpecialEvents(): SpiritualEvent[] {
  return SPIRITUAL_EVENTS.filter(event => event.isSpecial);
}

// Search events by name or description
export function searchEvents(query: string): SpiritualEvent[] {
  const lowercaseQuery = query.toLowerCase();
  return SPIRITUAL_EVENTS.filter(event => 
    event.name.toLowerCase().includes(lowercaseQuery) ||
    event.description.toLowerCase().includes(lowercaseQuery) ||
    event.significance.toLowerCase().includes(lowercaseQuery) ||
    event.tags.some(tag => tag.toLowerCase().includes(lowercaseQuery))
  );
}

// Get event by ID
export function getEventById(id: string): SpiritualEvent | undefined {
  return SPIRITUAL_EVENTS.find(event => event.id === id);
}

// Get random spiritual fact
export function getRandomSpiritualFact(): string {
  const facts = [
    "Tết Nguyên Đán thường kéo dài 7 ngày, từ mồng 1 đến mồng 7 tháng Giêng.",
    "Phật Đản được UNESCO công nhận là ngày lễ quốc tế từ năm 1999.",
    "Tết Trung Thu có nguồn gốc từ truyền thuyết Hằng Nga bay lên cung trăng.",
    "Vu Lan là dịp để thể hiện lòng hiếu thảo với cha mẹ trong truyền thống Phật giáo.",
    "Tết Đoan Ngọ có tác dụng xua đuổi tà ma và phòng chống dịch bệnh.",
    "Giỗ Tổ Hùng Vương là ngày tưởng nhớ những vị vua đầu tiên của dân tộc Việt.",
    "Rằm tháng Giêng đánh dấu kết thúc chính thức của dịp Tết Nguyên Đán."
  ];
  
  return facts[Math.floor(Math.random() * facts.length)];
}
