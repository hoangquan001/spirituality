import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Bài Học Nghiệp Số | Thần Số Học - Khám Phá Mục Đích Cuộc Đời",
  description: "📚 Khám phá bài học nghiệp số và thử thách cuộc đời qua thần số học. Hiểu rõ mục đích tâm hồn và con đường phát triển cá nhân. Miễn phí và sâu sắc.",
  keywords: "bài học nghiệp số, thử thách cuộc đời, mục đích sống, thần số học tâm linh, karmic lessons, numerology lessons",
  openGraph: {
    title: "Bài Học Nghiệp Số | Khám Phá Mục Đích Cuộc Đời",
    description: "📚 Khám phá bài học nghiệp số và thử thách cuộc đời qua thần số học.",
    type: "website",
    locale: "vi_VN",
    siteName: "Giải Mã Tâm Linh",
  },
  twitter: {
    card: "summary_large_image",
    title: "Bài Học Nghiệp Số | Khám Phá Mục Đích Cuộc Đời",
    description: "📚 Khám phá bài học nghiệp số và thử thách cuộc đời.",
  },
  alternates: {
    canonical: "/numerology/lessons",
  },
};

export default function NumerologyLessonsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
