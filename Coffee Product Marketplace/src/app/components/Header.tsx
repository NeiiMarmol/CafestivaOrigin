import { Coffee, Menu, ShoppingCart, User } from 'lucide-react';

export function Header() {
  return (
    <header className="bg-gradient-to-r from-green-900 to-green-800 text-white sticky top-0 z-50 shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center gap-3">
            <Coffee className="w-8 h-8" />
            <div className="flex flex-col">
              <span className="text-2xl font-bold leading-tight">Cafestiva Origin</span>
              <span className="text-xs text-green-200">Café Premium Colombiano</span>
            </div>
          </div>

          <nav className="hidden md:flex items-center gap-8">
            <a href="#inicio" className="hover:text-green-200 transition-colors">Inicio</a>
            <a href="#servicios" className="hover:text-green-200 transition-colors">Servicios</a>
            <a href="#productos" className="hover:text-green-200 transition-colors">Productos</a>
            <a href="#nosotros" className="hover:text-green-200 transition-colors">Nosotros</a>
            <a href="#contacto" className="hover:text-green-200 transition-colors">Contacto</a>
          </nav>

          <div className="flex items-center gap-4">
            <button className="relative hover:text-green-200 transition-colors">
              <ShoppingCart className="w-6 h-6" />
              <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                0
              </span>
            </button>
            <button className="hover:text-green-200 transition-colors">
              <User className="w-6 h-6" />
            </button>
            <button className="md:hidden hover:text-green-200 transition-colors">
              <Menu className="w-6 h-6" />
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}
