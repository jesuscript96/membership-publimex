import {
  Menu,
  Search,
  Heart,
  ShoppingBag,
  Truck,
  Calendar,
  MessageSquare,
  ChevronDown,
  ChevronLeft,
  ChevronRight,
  Globe,
  User,
  Smartphone,
  Activity,
  Dumbbell,
  Package,
  LucideIcon,
} from 'lucide-react';
import { motion } from 'motion/react';
import React, { useState } from 'react';


const Navbar = () => {
  return (
    <div className="w-full bg-white z-50 sticky top-0 border-b border-gray-100">
      <div className="flex justify-between items-center px-8 lg:px-16 py-6">
        <div className="flex-1">
          <img src="/nike-logo.svg" alt="Logo" className="w-14 h-auto" />
        </div>
        <div className="font-medium text-base hover:text-gray-600 cursor-pointer">
          Registrarse
        </div>
        <div className="flex-1 flex justify-end">
          <button className="p-2 hover:bg-gray-100 transition-colors rounded-full">
            <User className="w-6 h-6" />
          </button>
        </div>
      </div>
    </div>
  );
};

const Hero = () => {
  return (
    <div className="w-full flex flex-col md:flex-row min-h-[70vh]">
      <div className="flex-1 flex flex-col justify-center px-8 lg:px-16 py-24 md:py-32 space-y-10 bg-neutral-50 order-2 md:order-1 border-r border-neutral-100">
        <div className="space-y-6">
          <span className="text-xs font-black uppercase tracking-[0.3em] text-neutral-400">Membresía Nike</span>
          <h1 className="text-6xl md:text-8xl font-black leading-[0.9] tracking-tighter uppercase text-black">
            Donde los<br/><span className="text-neutral-300 underline decoration-black decoration-4">mejores</span><br/>se encuentran.
          </h1>
        </div>
        <p className="text-neutral-500 max-w-md text-base md:text-lg leading-relaxed font-medium">
          Muévete, compra y celebra con lo mejor de Nike. Todo en un solo lugar. Exclusivo para miembros.
        </p>
        <div className="flex gap-4 pt-8">
          <button className="bg-black text-white px-12 py-5 text-sm font-bold uppercase tracking-widest hover:scale-105 transition-transform flex items-center gap-4">
            Regístrate Gratis
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>
      </div>
      <div className="flex-1 relative bg-neutral-200 overflow-hidden order-1 md:order-2 h-[50vh] md:h-auto">
        <img
          src="https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?q=80&w=2670&auto=format&fit=crop"
          alt="Athletes"
          className="w-full h-full object-cover object-center absolute inset-0"
        />
        <div className="absolute inset-0 bg-gradient-to-tr from-black/40 to-transparent"></div>
      </div>
    </div>
  );
};

const BenefitsCards = () => {
  const cards = [
    {
      title: "Acceso exclusivo",
      subtitle: "Producto para Miembros",
      cta: "Comprar",
      image: "https://images.unsplash.com/photo-1607513746994-51f730a44832?q=80&w=1000&auto=format&fit=crop",
    },
    {
      title: "Cómo decimos gracias",
      subtitle: "Recompensas para Miembros",
      cta: "Celebrar",
      image: "https://images.unsplash.com/photo-1538805060514-97d9cc17730c?q=80&w=1000&auto=format&fit=crop",
    },
    {
      title: "Muévete ahí mismo",
      subtitle: "Apps de deporte y bienestar",
      cta: "Muévete",
      image: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?q=80&w=1000&auto=format&fit=crop",
    }
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 md:px-8 py-24 md:py-32">
      <div className="flex justify-between items-end mb-16">
        <h2 className="text-3xl md:text-4xl font-medium text-gray-900">Beneficios para Miembros</h2>
        <div className="hidden md:flex items-center gap-6">
          <span className="font-medium text-base text-gray-900 cursor-pointer hover:underline">Regístrate</span>
          <div className="flex gap-3">
            <button className="p-4 bg-gray-100 rounded-full hover:bg-gray-200 transition-colors"><ChevronLeft className="w-6 h-6" /></button>
            <button className="p-4 bg-gray-100 rounded-full hover:bg-gray-200 transition-colors"><ChevronRight className="w-6 h-6" /></button>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-10">
        {cards.map((card, idx) => (
          <div key={idx} className="relative aspect-[4/5] bg-gray-200 group overflow-hidden">
            <img 
              src={card.image} 
              alt={card.title}
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
            <div className="absolute bottom-0 left-0 p-8 text-white w-full">
              <p className="text-sm font-medium mb-1 drop-shadow-md">{card.subtitle}</p>
              <h3 className="text-3xl md:text-4xl font-medium mb-8 drop-shadow-md leading-[1.2]">{card.title}</h3>
              <button className="bg-white text-black px-8 py-3 rounded-full font-medium text-base hover:bg-gray-100 transition-colors">
                {card.cta}
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

const MoreBenefits = () => {
  const benefits = [
    {
      icon: "01",
      title: "Envío gratuito",
      desc: "Así es, la entrega es gratuita para todos los Miembros en pedidos seleccionados."
    },
    {
      icon: "02",
      title: "Experiencias",
      desc: "Únete a la comunidad para disfrutar de eventos en vivo solo para Miembros."
    },
    {
      icon: "03",
      title: "Sin Intereses",
      desc: "Los miembros obtienen meses sin intereses en compras exclusivas."
    }
  ];

  return (
    <section className="py-24 md:py-32 border-t border-neutral-100">
      <div className="max-w-7xl mx-auto px-4 md:px-8 grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-16">
        {benefits.map((b, i) => (
          <div key={i} className="group flex flex-col">
            <div className="w-16 h-16 bg-black flex items-center justify-center text-white font-black text-base mb-6 shadow-lg">{b.icon}</div>
            <div className="">
              <h3 className="font-black uppercase text-base mb-4 tracking-widest">{b.title}</h3>
              <p className="text-sm text-neutral-500 leading-relaxed font-medium">
                {b.desc}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

const Marquee = () => {
  return (
    <div className="w-full bg-black text-white py-12 md:py-16 overflow-hidden flex whitespace-nowrap relative border-t border-neutral-900 border-b-4 border-b-neutral-800">
      <motion.div 
        animate={{ x: ["0%", "-50%"] }}
        transition={{ repeat: Infinity, ease: "linear", duration: 25 }}
        className="flex items-center gap-12 min-w-max"
      >
        {[...Array(10)].map((_, i) => (
          <div key={i} className="flex items-center gap-12">
            <span className="text-xs font-black uppercase tracking-[0.4em] text-neutral-500">Nike Sportswear</span>
            <span className="text-5xl font-black italic tracking-tighter uppercase text-white">Membresía</span>
          </div>
        ))}
      </motion.div>
    </div>
  );
};

const AppsSection = () => {
  const apps: { name: string; desc: string; bg: string; text: string; icon: LucideIcon }[] = [
    { name: "Nike App", desc: "Mantente al día con lo mejor.", bg: "bg-neutral-50", text: "text-black", icon: Smartphone },
    { name: "Nike Run Club", desc: "Corre con nosotros en NRC.", bg: "bg-black", text: "text-white", icon: Activity },
    { name: "Nike Training", desc: "Muévete con NTC.", bg: "bg-neutral-100", text: "text-black", icon: Dumbbell },
    { name: "SNKRS", desc: "Los lanzamientos más recientes.", bg: "bg-neutral-900", text: "text-white", icon: Package }
  ];

  return (
    <div className="flex flex-col bg-white">
      <div className="max-w-7xl mx-auto w-full px-4 md:px-8 py-24 md:py-32">
        <h2 className="text-3xl md:text-4xl font-medium text-gray-900 mb-16 px-4">Conecta con tus Apps</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-10">
          {apps.map((app, i) => {
            const Icon = app.icon;
            return (
              <div key={i} className={`flex flex-col items-start p-10 lg:p-16 ${app.bg} ${app.text} min-h-[400px] group cursor-pointer`}>
                <div className="mb-8 group-hover:-translate-y-2 transition-transform origin-left">
                  <Icon className="w-16 h-16" strokeWidth={1.25} />
                </div>
                <h3 className="text-sm font-black uppercase tracking-widest mb-4 mt-auto">{app.name}</h3>
                <p className="text-sm opacity-70 mb-12 leading-relaxed max-w-[200px] font-medium">{app.desc}</p>
                <div className={`text-xs font-bold uppercase tracking-[0.2em] border-b-2 ${app.text === 'text-white' ? 'border-white' : 'border-black'} pb-2 group-hover:opacity-50 transition-opacity`}>
                  Explorar
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    {
      q: "¿Qué es la membresía de Nike?",
      a: "La membresía de Nike es una comunidad que te ofrece acceso exclusivo a lo mejor de Nike: productos, experiencias y una comunidad dedicada al deporte."
    },
    {
      q: "¿Soy Miembro de Nike?",
      a: "Si alguna vez te has registrado en una App de Nike (como Nike App, NRC o NTC), ya eres Miembro. ¡Solo inicia sesión!"
    },
    {
      q: "¿Tiene algún costo?",
      a: "No, unirse a la membresía de Nike es completamente gratis. Solo necesitas registrarte para empezar a disfrutar de los beneficios."
    },
    {
      q: "¿Cuáles son los beneficios?",
      a: "Incluye envío gratuito en pedidos seleccionados, acceso a lanzamientos exclusivos, entrenamientos guiados en nuestras apps y eventos especiales para la comunidad."
    }
  ];

  return (
    <div className="w-full bg-neutral-50 py-24 md:py-32">
      <div className="max-w-7xl mx-auto px-4 md:px-8 grid grid-cols-1 lg:grid-cols-3 gap-16 md:gap-24">
        <div className="flex flex-col justify-start">
          <h2 className="text-3xl md:text-4xl font-medium tracking-tight text-black leading-tight mb-6">Preguntas Frecuentes</h2>
          <p className="text-base text-neutral-500 font-medium max-w-sm">Todo lo que necesitas saber acerca de nuestra comunidad y beneficios.</p>
        </div>
        <div className="lg:col-span-2 flex flex-col divide-y divide-neutral-200">
          {faqs.map((faq, i) => (
            <div key={i} className="py-8 flex flex-col cursor-pointer group" onClick={() => setOpenIndex(openIndex === i ? null : i)}>
              <div className="flex justify-between items-center">
                <h3 className="text-lg font-medium group-hover:text-neutral-500 transition-colors">{faq.q}</h3>
                <div className={`w-10 h-10 flex items-center justify-center transition-all rounded-full border border-neutral-200 ${openIndex === i ? 'bg-black text-white rotate-180' : 'bg-white text-black'}`}>
                  <ChevronDown className="w-5 h-5" />
                </div>
              </div>
              <motion.div
                initial={false}
                animate={{ height: openIndex === i ? "auto" : 0, opacity: openIndex === i ? 1 : 0 }}
                className="overflow-hidden"
              >
                <p className="pt-6 text-neutral-500 leading-relaxed max-w-2xl font-medium">
                  {faq.a}
                </p>
              </motion.div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

const Footer = () => {
  return (
    <footer className="py-16 md:py-24 px-8 lg:px-16 border-t border-neutral-200 flex flex-col md:flex-row justify-between items-center text-xs uppercase tracking-widest text-neutral-400 font-bold bg-white gap-12">
      <div className="flex items-center gap-6">
        <img src="/nike-logo.svg" alt="Logo" className="w-14 h-auto opacity-30 grayscale" />
        <span>© 2026 Nike, Inc.</span>
      </div>
      <div className="flex gap-8 lg:gap-12 flex-wrap justify-center">
        <a href="#" className="hover:text-black transition-colors">Términos</a>
        <a href="#" className="hover:text-black transition-colors">Privacidad</a>
        <a href="#" className="hover:text-black transition-colors">Ayuda</a>
        <a href="#" className="hover:text-black transition-colors">Cookies</a>
      </div>
    </footer>
  );
};

export default function App() {
  return (
    <div className="min-h-screen bg-white font-sans text-gray-900 selection:bg-gray-900 selection:text-white">
      <Navbar />
      <Hero />
      <BenefitsCards />
      <MoreBenefits />
      <Marquee />
      <AppsSection />
      <FAQ />
      <Footer />
    </div>
  );
}

