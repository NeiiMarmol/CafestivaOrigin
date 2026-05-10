import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { ProductCard } from './components/ProductCard';
import { ServiceCard } from './components/ServiceCard';
import { Award, Coffee, Leaf, ShieldCheck, Truck, ShoppingBag, Package, Users, Calendar, CreditCard, Gift } from 'lucide-react';

import imgPremiumMolido from '../imports/image.png';
import imgEnGrano from '../imports/image-1.png';
import imgKitCafetero from '../imports/image-2.png';
import imgOrganico from '../imports/image-3.png';
import imgOficinas from '../imports/image-4.png';

export default function App() {
  const services = [
    {
      icon: ShoppingBag,
      title: "Venta de Café Online",
      description: "Compra y envío de café premium a domicilio, mediante tienda virtual y redes sociales.",
      price: "Desde $25.000",
      image: "https://images.unsplash.com/photo-1646193186175-4ec30e6e5882?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
      badge: "Calidad que se siente, confianza que perdura"
    },
    {
      icon: Package,
      title: "Distribución de Café",
      description: "Suministro de café para oficinas, empresas y negocios comerciales.",
      price: "$180.000",
      image: "https://images.unsplash.com/photo-1625552186100-8444c429dca8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
      badge: "100% Café colombiano, de origen sostenible"
    },
    {
      icon: Users,
      title: "Degustaciones de Café",
      description: "Experiencia guiada para aprender diferentes perfiles de café artesanal colombiano.",
      price: "$50.000 por grupo",
      image: "https://images.unsplash.com/photo-1762195880370-9d68ec30bfe9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
      badge: "Sabor que conecta, historias que perduran"
    },
    {
      icon: Calendar,
      title: "Servicios de Cafetería para Eventos",
      description: "Atención con servicio de café para reuniones, ferias y eventos sociales.",
      price: "$350.000 por evento",
      image: "https://images.unsplash.com/photo-1739050981003-6e2cfb081384?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
      badge: "Aromas que perduran"
    },
    {
      icon: CreditCard,
      title: "Suscripciones Mensuales de Café",
      description: "Entrega de café premium con diferentes intensidades, notas y texturas mensual.",
      price: "$70.000 mensual",
      image: "https://images.unsplash.com/photo-1625980324627-45235eb4345e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
      badge: "Apoyamos a los productores y al campo colombiano"
    },
    {
      icon: Gift,
      title: "Empaques Personalizados",
      description: "Diseño y personalización de empaques corporativos o mensajes a marcas personales.",
      price: "$15.000 por unidad",
      image: "https://images.unsplash.com/photo-1762504366698-46550e162068?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
      badge: "Aromas que perduran"
    }
  ];

  const products = [
    {
      name: "Café Premium Molido",
      description: "Café especial colombiano de alta calidad",
      price: "$25.000",
      image: imgPremiumMolido,
      origin: "",
      rating: 3
    },
    {
      name: "Café en Grano",
      description: "Café tostado artesanalmente",
      price: "$30.000",
      image: imgEnGrano,
      origin: "",
      rating: 3
    },
    {
      name: "Kit Cafetero",
      description: "Incluye café y taza personalizada",
      price: "$45.000",
      image: imgKitCafetero,
      origin: "",
      rating: 3
    },
    {
      name: "Café Orgánico",
      description: "Café cultivado sin químicos",
      price: "$35.000",
      image: imgOrganico,
      origin: "",
      rating: 3
    },
    {
      name: "Café Especial para Oficinas",
      description: "Sobres de café personal",
      price: "$5.000",
      image: imgOficinas,
      origin: "",
      rating: 3
    }
  ];

  const features = [
    {
      icon: Leaf,
      title: "100% Café Colombiano",
      description: "De origen sostenible"
    },
    {
      icon: Award,
      title: "Calidad Premium",
      description: "En cada producto"
    },
    {
      icon: Truck,
      title: "Envíos a todo el país",
      description: "Entrega rápida y segura"
    },
    {
      icon: ShieldCheck,
      title: "Aromas que perduran",
      description: "Sabor que conecta"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <Hero />

      {/* Features Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-green-100 rounded-full mb-4">
                  <feature.icon className="w-8 h-8 text-green-800" />
                </div>
                <h3 className="font-bold text-gray-900 mb-2">{feature.title}</h3>
                <p className="text-sm text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="servicios" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Portafolio de Servicios
            </h2>
            <p className="text-xl text-gray-600">
              Soluciones de café diseñadas para empresas, eventos y amantes del buen café
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <ServiceCard key={index} {...service} />
            ))}
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section id="productos" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Portafolio de Productos
            </h2>
            <p className="text-xl text-gray-600">
              Cafés premium y productos diseñados para experiencias únicas
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {products.map((product, index) => (
              <ProductCard key={index} {...product} />
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-green-950 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <Coffee className="w-6 h-6 text-green-400" />
                <span className="text-xl font-bold">Cafestiva Origin</span>
              </div>
              <p className="text-gray-400 text-sm">
                Café Premium Colombiano - Sabor que conecta, aromas que perduran
              </p>
            </div>

            <div>
              <h4 className="font-bold mb-4">Productos</h4>
              <ul className="space-y-2 text-gray-400 text-sm">
                <li><a href="#" className="hover:text-white">Café Premium Molido</a></li>
                <li><a href="#" className="hover:text-white">Café en Grano</a></li>
                <li><a href="#" className="hover:text-white">Kit Cafetero</a></li>
                <li><a href="#" className="hover:text-white">Café Orgánico</a></li>
              </ul>
            </div>

            <div>
              <h4 className="font-bold mb-4">Empresa</h4>
              <ul className="space-y-2 text-gray-400 text-sm">
                <li><a href="#" className="hover:text-white">Sobre Nosotros</a></li>
                <li><a href="#" className="hover:text-white">Contacto</a></li>
                <li><a href="#" className="hover:text-white">Blog</a></li>
                <li><a href="#" className="hover:text-white">Trabaja con Nosotros</a></li>
              </ul>
            </div>

            <div>
              <h4 className="font-bold mb-4">Síguenos</h4>
              <ul className="space-y-2 text-gray-400 text-sm">
                <li><a href="#" className="hover:text-white">Facebook</a></li>
                <li><a href="#" className="hover:text-white">Instagram</a></li>
                <li><a href="#" className="hover:text-white">Twitter</a></li>
                <li><a href="#" className="hover:text-white">LinkedIn</a></li>
              </ul>
            </div>
          </div>

          <div className="border-t border-green-900 mt-8 pt-8 text-center text-gray-400 text-sm">
            <p>&copy; 2026 Cafestiva Origin S.A.S. Todos los derechos reservados.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}