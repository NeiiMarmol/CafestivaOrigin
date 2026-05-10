import { ArrowRight, Coffee } from 'lucide-react';
import logo from '../../imports/image-5.png';

export function Hero() {
  return (
    <section className="relative bg-gradient-to-br from-green-50 to-emerald-50 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <div className="inline-flex items-center gap-2 bg-green-100 text-green-800 px-4 py-2 rounded-full mb-6">
              <Coffee className="w-4 h-4" />
              <span className="text-sm font-semibold">100% Café Colombiano</span>
            </div>

            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
              Cafestiva Origin
              <span className="block text-green-800">Sabor que conecta</span>
            </h1>

            <p className="text-xl text-gray-600 mb-8">
              Cafestiva Origin S.A.S. te ofrece una selección de cafés premium y productos diseñados para brindar experiencias únicas en cada taza.
            </p>

            <div className="flex gap-4">
              <button className="bg-green-800 hover:bg-green-900 text-white px-8 py-4 rounded-lg font-semibold flex items-center gap-2 transition-colors shadow-lg">
                Ver Productos
                <ArrowRight className="w-5 h-5" />
              </button>
              <button className="border-2 border-green-800 text-green-800 hover:bg-green-50 px-8 py-4 rounded-lg font-semibold transition-colors">
                Conocer Más
              </button>
            </div>
          </div>

          <div className="relative flex items-center justify-center">
            <div className="absolute inset-0 bg-green-400 rounded-full blur-3xl opacity-20"></div>
            <img
              src={logo}
              alt="Cafestiva Origin - Café Premium Colombiano"
              className="relative w-full max-w-md h-auto object-contain drop-shadow-2xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
