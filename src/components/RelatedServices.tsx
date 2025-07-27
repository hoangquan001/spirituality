import { getRelatedFeatureData } from '@/lib/feature-data';
import Link from 'next/link';

interface RelatedServicesProps {
  currentPage: string;
}

export default function RelatedServices({ currentPage }: RelatedServicesProps) {

  // Filter out the current page and limit to 3 services
  const filteredServices = getRelatedFeatureData(currentPage,3);

  return (
    <section className="py-16 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-white mb-4">
            Chủ Đề Liên Quan
          </h2>
          <p className="text-gray-300">
            Khám phá thêm các chủ đề khác để hiểu rõ hơn về bản thân
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {filteredServices.map((service, index) => (
            <Link key={index} href={service.href} className="group">
              <div className="cosmic-card rounded-2xl p-2 md:p-4 lg:p-6 border border-gray-700/20 hover:border-golden/50 transition-all duration-300 hover:scale-105 text-center">
                <div className="text-3xl mb-3 group-hover:scale-110 transition-transform">
                  {service.icon}
                </div>
                <h3 className="text-lg font-bold text-white mb-2">
                  {service.title}
                </h3>
                <p className="text-gray-400 text-sm">{service.description}</p>
              </div>
            </Link>
          ))}
        </div>

      </div>
    </section>
  );
}
