import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Giải Mã Giấc Mơ | Từ Điển Giấc Mơ Đầy Đủ Nhất - Tâm Linh",
  description: "💭 Giải mã ý nghĩa giấc mơ chính xác với từ điển giấc mơ đầy đủ nhất. Khám phá thông điệp từ tiềm thức, số may mắn và lời khuyên từ giấc mơ. Miễn phí 100% - Hơn 40,000 giấc mơ đã được giải thích.",
  keywords: "giải mã giấc mơ, từ điển giấc mơ, ý nghĩa giấc mơ, mơ thấy gì, giải mơ, thông điệp giấc mơ, số may mắn từ giấc mơ, tâm linh, tiềm thức, miễn phí",
  openGraph: {
    title: "Giải Mã Giấc Mơ | Từ Điển Giấc Mơ Đầy Đủ Nhất",
    description: "💭 Khám phá ý nghĩa sâu xa của giấc mơ. Từ điển giấc mơ đầy đủ với hàng nghìn biểu tượng và thông điệp từ tiềm thức. Miễn phí 100%.",
    type: "website",
    locale: "vi_VN",
    siteName: "Tâm Linh - Thần Số Học",
    url: "https://tamlinh.com/dream",
    images: [
      {
        url: "/dream-og.jpg",
        width: 1200,
        height: 630,
        alt: "Giải Mã Giấc Mơ - Từ Điển Giấc Mơ Đầy Đủ",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Giải Mã Giấc Mơ - Từ Điển Giấc Mơ Đầy Đủ Nhất",
    description: "💭 Khám phá ý nghĩa giấc mơ với từ điển giấc mơ đầy đủ nhất. Thông điệp từ tiềm thức. Miễn phí 100%.",
    images: ["/dream-og.jpg"],
  },
  alternates: {
    canonical: "https://tamlinh.com/dream",
  },
};

export default function DreamLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
