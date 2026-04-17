import { useState, useEffect } from 'react';
import logo from '../../carlogonew.png';

export default function Header() {
  const [active, setActive] = useState<string>('home');

  useEffect(() => {
    const update = () => {
      const h = (window.location.hash || '#home').split('?')[0];
      switch (h) {
        case '#cars': setActive('cars'); break;
        case '#services': setActive('services'); break;
        case '#about': setActive('about'); break;
        case '#blogs': setActive('blogs'); break;
        case '#contact': setActive('contact'); break;
        case '#booking': setActive('booking'); break;
        default: setActive('home'); break;
      }
    };
    update();
    window.addEventListener('hashchange', update);
    return () => window.removeEventListener('hashchange', update);
  }, []);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-md">
      <div className="container mx-auto px-6 py-[20px]">
        <div className="flex items-center justify-between">
          <a href="#home" className="flex items-center gap-3">
            <img src={logo} alt="Logo" className="w-12 h-12 object-contain transform scale-[4.4] md:scale-[6]" />
            <div className="leading-tight">
              <div className="text-base md:text-lg font-bold text-white uppercase">PRIME SELF</div>
              <div className="text-base md:text-lg font-bold text-yellow-400 uppercase">DRIVE CARS</div>
            </div>
          </a>

          <nav className="hidden lg:flex items-center space-x-8">
            <a href="#home" className={`text-sm tracking-wide transition-colors ${active === 'home' ? 'text-white border-b-2 border-yellow-400 pb-1' : 'text-white/90 hover:text-white'}`}>Home</a>
            <a href="#cars" className={`text-sm tracking-wide transition-colors ${active === 'cars' ? 'text-white border-b-2 border-yellow-400 pb-1' : 'text-white/90 hover:text-white'}`}>Cars</a>
            <a href="#services" className={`text-sm tracking-wide transition-colors ${active === 'services' ? 'text-white border-b-2 border-yellow-400 pb-1' : 'text-white/90 hover:text-white'}`}>Services</a>
            <a href="#about" className={`text-sm tracking-wide transition-colors ${active === 'about' ? 'text-white border-b-2 border-yellow-400 pb-1' : 'text-white/90 hover:text-white'}`}>About</a>
            <a href="#blogs" className={`text-sm tracking-wide transition-colors ${active === 'blogs' ? 'text-white border-b-2 border-yellow-400 pb-1' : 'text-white/90 hover:text-white'}`}>Blog</a>
            <a href="#contact" className={`text-sm tracking-wide transition-colors ${active === 'contact' ? 'text-white border-b-2 border-yellow-400 pb-1' : 'text-white/90 hover:text-white'}`}>Contact</a>
          </nav>

          <div className="flex items-center space-x-4">
            <a href="#contact" className="inline-block bg-white text-black px-4 py-2 rounded-full text-sm font-semibold hover:opacity-95 transition">Book Now</a>
          </div>
        </div>
      </div>
    </header>
  );
}
