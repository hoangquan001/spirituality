
import Link from 'next/link';
import React from 'react';
interface ContentHeaderProps {
  title?: string;
  description?: string;
  breadcrumb?: { label: string; href: string }[];
}
export default function ContentHeader({
  title,
  description,
  breadcrumb,
}: ContentHeaderProps) {
  return (
    <div className='relative overflow-hidden py-10 text-center '>
      <h1 className='text-3xl md:text-5xl font-bold mb-6'>
        <span className='bg-gradient-to-r from-golden via-yellow-300 to-golden bg-clip-text text-transparent'>
          {title}
        </span>
        {/* <br /> */}
        {/* <span className="text-white text-3xl md:text-4xl">Phân Tích Tên Tuổi Miễn Phí</span> */}
      </h1>
      <p className='text-lg md:text-xl text-gray-300 max-w-3xl mx-auto mb-4 leading-relaxed'>
        {description}
      </p>
      {/* <p className="text-lg text-gray-400 max-w-2xl mx-auto mb-8">
              Hơn <span className="text-golden font-semibold">30,000+ người</span> đã phân tích tên tuổi và nhận được lời khuyên hữu ích
            </p> */}

      {/* Breadcrumb */}
      <div className='flex items-center justify-center gap-2 text-sm text-gray-400'>
        {breadcrumb && breadcrumb.length > 0 && (
          <>
            {breadcrumb.map((item, idx) => (
              <React.Fragment key={idx}>
                {idx > 0 && <span>›</span>}
                <Link
                  href={item.href}
                  className={
                    idx === breadcrumb.length - 1
                      ? 'text-golden'
                      : 'hover:text-golden transition-colors'
                  }
                >
                  {item.label}
                </Link>
              </React.Fragment>
            ))}
          </>
        )}
      </div>
    </div>
  );
}
