import Link from 'next/link';

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen bg-gray-900">
      {/* Navigation */}
      <nav className="bg-gray-800 border-b border-gray-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex items-center">
              <Link href="/" className="flex items-center">
                <span className="text-2xl font-bold bg-gradient-to-r from-golden to-yellow-400 bg-clip-text text-transparent">
                  Tâm Linh
                </span>
              </Link>
              <div className="ml-10 flex items-baseline space-x-4">
                <Link
                  href="/admin/blog"
                  className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                >
                  Quản lý Blog
                </Link>
              </div>
            </div>
            <div className="flex items-center">
              <Link
                href="/blog"
                className="text-gray-300 hover:text-golden"
              >
                Xem Blog
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Content */}
      <main>{children}</main>
    </div>
  );
}
