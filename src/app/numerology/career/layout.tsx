import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Gợi Ý Nghề Nghiệp | Thần Số Học - Tìm Nghề Phù Hợp Với Số Mệnh",
  description: "💼 Khám phá nghề nghiệp phù hợp với số mệnh qua thần số học. Tìm hiểu tài năng tự nhiên, phong cách làm việc và con đường sự nghiệp lý tưởng. Miễn phí và chi tiết.",
  keywords: "gợi ý nghề nghiệp, nghề nghiệp theo số mệnh, thần số học sự nghiệp, tìm nghề phù hợp, numerology career, career guidance",
  openGraph: {
    title: "Gợi Ý Nghề Nghiệp | Tìm Nghề Phù Hợp Với Số Mệnh",
    description: "💼 Khám phá nghề nghiệp phù hợp với số mệnh qua thần số học.",
    type: "website",
    locale: "vi_VN",
    siteName: "Giải Mã Tâm Linh",
  },
  twitter: {
    card: "summary_large_image",
    title: "Gợi Ý Nghề Nghiệp | Tìm Nghề Phù Hợp Với Số Mệnh",
    description: "💼 Khám phá nghề nghiệp phù hợp với số mệnh qua thần số học.",
  },
  alternates: {
    canonical: "/numerology/career",
  },
};

export default function NumerologyCareerLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
