/my-numerology-app
├── app/                            # App router chính (Next.js 13+)
│   ├── layout.tsx                 # Layout chung
│   ├── page.tsx                   # Trang chủ
│   ├── about/                     # Giới thiệu
│   │   └── page.tsx
│   ├── numerology/               # Thần số học
│   │   ├── page.tsx              # Giao diện nhập dữ liệu
│   │   └── result.tsx            # Hiển thị kết quả
│   ├── dream/                    # Giải mã giấc mơ
│   │   └── page.tsx
│   ├── zodiac/                   # Tử vi 12 cung
│   │   └── [sign]/page.tsx      # Route động cho từng cung
│   ├── api/                      # API routes (nếu dùng API routes)
│   │   └── numerology/route.ts  # API xử lý thần số học
│   └── sitemap.xml/route.ts     # Tạo sitemap cho SEO
│
├── components/                   # Các component tái sử dụng
│   ├── Header.tsx
│   ├── Footer.tsx
│   ├── NumerologyForm.tsx
│   └── ResultCard.tsx
│
├── lib/                          # Code logic, xử lý dữ liệu
│   ├── numerology.ts             # Hàm tính thần số học
│   ├── dreamDictionary.ts        # Dữ liệu giải mã giấc mơ
│   └── utils.ts                  # Hàm tiện ích chung
│
├── styles/                       # Toàn bộ style
│   ├── globals.css               # Import Tailwind + tùy chỉnh
│   └── animations.css            # Nếu có hiệu ứng đặc biệt
│
├── public/                       # Ảnh, favicon, font, v.v.
│   ├── images/
│   ├── icons/
│   └── fonts/
│
├── content/                      # Dữ liệu tĩnh dạng Markdown/JSON
│   └── blog/
│       └── than-so-la-gi.md
│
├── middleware.ts                # Cho redirect, auth, locale,...
├── tailwind.config.ts
├── postcss.config.js
├── next.config.js
├── tsconfig.json
├── package.json
└── README.md
