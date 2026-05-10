import { ShoppingCart, Star } from 'lucide-react';

interface ProductCardProps {
  name: string;
  description: string;
  price: string;
  image: string;
  origin: string;
  rating: number;
}

export function ProductCard({ name, description, price, image, origin, rating }: ProductCardProps) {
  return (
    <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-shadow duration-300">
      <div className="relative h-64 overflow-hidden bg-gradient-to-br from-green-50 to-emerald-50">
        <img
          src={image}
          alt={name}
          className="w-full h-full object-contain hover:scale-110 transition-transform duration-500 p-4"
        />
        {origin && (
          <div className="absolute top-4 right-4 bg-green-800 text-white px-3 py-1 rounded-full text-sm font-semibold">
            {origin}
          </div>
        )}
      </div>

      <div className="p-6">
        {rating > 0 && (
          <div className="flex items-center mb-2">
            {[...Array(rating)].map((_, i) => (
              <Star
                key={i}
                className="w-4 h-4 fill-green-600 text-green-600"
              />
            ))}
          </div>
        )}

        <h3 className="text-xl font-bold text-gray-900 mb-2">{name}</h3>
        <p className="text-gray-600 text-sm mb-4 line-clamp-2">{description}</p>

        <div className="flex items-center justify-between">
          <span className="text-2xl font-bold text-green-800">{price}</span>
          <button className="bg-green-800 hover:bg-green-900 text-white px-4 py-2 rounded-lg flex items-center gap-2 transition-colors">
            <ShoppingCart className="w-4 h-4" />
            Agregar
          </button>
        </div>
      </div>
    </div>
  );
}
