import { useState, useEffect } from 'react';
import logo from '../../carlogonew.png';

export default function Header() {
  const [active, setActive] = useState<string>('home');
  const [mobileOpen, setMobileOpen] = useState(false);

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

          {/* Mobile hamburger */}
          <button
            aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={mobileOpen}
            onClick={() => setMobileOpen((v) => !v)}
            className="lg:hidden inline-flex items-center justify-center p-2 rounded-md text-white/90 hover:text-white focus:outline-none ml-2"
          >
            <span className="sr-only">Toggle menu</span>
            <div className="w-6 h-6 relative">
              <span className={`absolute left-0 right-0 h-[2px] bg-white transition-transform ${mobileOpen ? 'rotate-45 top-3' : 'top-1'}`} />
              <span className={`absolute left-0 right-0 h-[2px] bg-white transition-opacity ${mobileOpen ? 'opacity-0' : 'top-3'}`} />
              <span className={`absolute left-0 right-0 h-[2px] bg-white transition-transform ${mobileOpen ? '-rotate-45 top-3' : 'top-5'}`} />
            </div>
          </button>
        </div>
      </div>
      
      {/* Mobile menu overlay */}
      {mobileOpen && (
        <div className="fixed inset-0 z-50 lg:hidden flex items-start justify-center pt-24">
          <div className="absolute inset-0 bg-black/50" onClick={() => setMobileOpen(false)} />

          <div className="relative bg-white w-[92%] max-w-md max-h-[85vh] rounded-2xl shadow-2xl overflow-auto z-60">
            <div className="p-4 flex items-center justify-between border-b">
              <img src={logo} alt="Logo" className="w-9 h-9 object-contain rounded-full" />
              <button aria-label="Close menu" onClick={() => setMobileOpen(false)} className="text-black/70 p-2 bg-white rounded-md shadow">
                ✕
              </button>
            </div>

            <div className="p-4">
              <nav className="flex flex-col gap-3 mt-2">
                <a href="#home" onClick={() => setMobileOpen(false)} className={`block px-4 py-3 rounded-lg shadow-sm ${active === 'home' ? 'bg-yellow-50 text-yellow-600 font-semibold' : 'bg-white text-black/80'}`}>Home</a>
                <a href="#cars" onClick={() => setMobileOpen(false)} className={`block px-4 py-3 rounded-lg shadow-sm ${active === 'cars' ? 'bg-yellow-50 text-yellow-600 font-semibold' : 'bg-white text-black/80'}`}>Cars</a>
                <a href="#services" onClick={() => setMobileOpen(false)} className={`block px-4 py-3 rounded-lg shadow-sm ${active === 'services' ? 'bg-yellow-50 text-yellow-600 font-semibold' : 'bg-white text-black/80'}`}>Services</a>
                <a href="#about" onClick={() => setMobileOpen(false)} className={`block px-4 py-3 rounded-lg shadow-sm ${active === 'about' ? 'bg-yellow-50 text-yellow-600 font-semibold' : 'bg-white text-black/80'}`}>About</a>
                <a href="#blogs" onClick={() => setMobileOpen(false)} className={`block px-4 py-3 rounded-lg shadow-sm ${active === 'blogs' ? 'bg-yellow-50 text-yellow-600 font-semibold' : 'bg-white text-black/80'}`}>Blog</a>
                <a href="#contact" onClick={() => setMobileOpen(false)} className={`block px-4 py-3 rounded-lg shadow-sm ${active === 'contact' ? 'bg-yellow-50 text-yellow-600 font-semibold' : 'bg-white text-black/80'}`}>Contact</a>
              </nav>

              <div className="mt-6">
                <a href="#contact" onClick={() => setMobileOpen(false)} className="block w-full text-center bg-yellow-400 text-black px-4 py-3 rounded-full font-bold">Book Now</a>
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
