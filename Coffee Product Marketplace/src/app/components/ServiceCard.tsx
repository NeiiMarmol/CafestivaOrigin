import { LucideIcon } from 'lucide-react';

interface ServiceCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  price: string;
  image: string;
  badge: string;
}

export function ServiceCard({ icon: Icon, title, description, price, image, badge }: ServiceCardProps) {
  return (
    <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-shadow duration-300">
      <div className="relative h-48 overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover"
        />
        <div className="absolute top-4 left-4 bg-green-900 text-white p-3 rounded-full">
          <Icon className="w-6 h-6" />
        </div>
      </div>

      <div className="p-6">
        <h3 className="text-lg font-bold text-gray-900 mb-2">{title}</h3>
        <p className="text-gray-600 text-sm mb-4 min-h-[60px]">{description}</p>

        <div className="flex items-center justify-between mb-4">
          <div className="bg-green-800 text-white px-4 py-2 rounded-lg">
            <span className="text-lg font-bold">{price}</span>
          </div>
        </div>

        <div className="flex items-start gap-2 text-sm text-gray-600">
          <div className="bg-green-100 p-2 rounded-full flex-shrink-0 mt-1">
            <svg className="w-4 h-4 text-green-800" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
            </svg>
          </div>
          <p className="text-xs leading-relaxed">{badge}</p>
        </div>
      </div>
    </div>
  );
}
