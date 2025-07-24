import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Chính Sách Bảo Mật | Thần Số Học - Bảo Vệ Thông Tin Cá Nhân",
  description: "🔒 Chính sách bảo mật của Thần Số Học. Cam kết bảo vệ thông tin cá nhân, dữ liệu người dùng và quyền riêng tư khi sử dụng thần số học, cung hoàng đạo miễn phí.",
  keywords: "chính sách bảo mật, bảo vệ thông tin cá nhân, quyền riêng tư, dữ liệu người dùng, an toàn thông tin, Thần Số Học, thần số học",
  openGraph: {
    title: "Chính Sách Bảo Mật | Thần Số Học",
    description: "🔒 Tìm hiểu cách chúng tôi bảo vệ thông tin cá nhân và quyền riêng tư của bạn khi sử dụng Thần Số Học.",
    type: "website",
    locale: "vi_VN",
    siteName: "Thần Số Học",
    url: "https://tamlinh.com/privacy",
    images: [
      {
        url: "/privacy-og.jpg",
        width: 1200,
        height: 630,
        alt: "Chính Sách Bảo Mật - Thần Số Học",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Chính Sách Bảo Mật - Thần Số Học",
    description: "🔒 Cam kết bảo vệ thông tin cá nhân và quyền riêng tư người dùng.",
    images: ["/privacy-og.jpg"],
  },
  alternates: {
    canonical: "https://tamlinh.com/privacy",
  },
  robots: "index, follow",
};

export default function PrivacyLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
