import { Menu, Search } from 'lucide-react';
import { useState } from 'react';

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-md">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="text-2xl font-bold tracking-wider text-white">
            Elite<span className="text-neutral-500">Wheels</span>
          </div>

          <nav className="hidden lg:flex items-center space-x-8">
            <a href="#home" className="text-white/90 hover:text-white text-sm tracking-wide transition-colors">Home</a>
            <a href="#cars" className="text-white/90 hover:text-white text-sm tracking-wide transition-colors">Cars</a>
            <a href="#services" className="text-white/90 hover:text-white text-sm tracking-wide transition-colors">Services</a>
            <a href="#about" className="text-white/90 hover:text-white text-sm tracking-wide transition-colors">About</a>
            <a href="#contact" className="text-white/90 hover:text-white text-sm tracking-wide transition-colors">Contact</a>
          </nav>

          <div className="flex items-center space-x-4">
            <a href="#booking" className="hidden lg:inline-block bg-white text-black px-4 py-2 rounded-full text-sm font-semibold hover:opacity-95 transition">Book Now</a>
            <button className="text-white/90 hover:text-white transition-colors">
              <Search size={20} />
            </button>
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="text-white/90 hover:text-white transition-colors"
            >
              <Menu size={24} />
            </button>
          </div>
        </div>
      </div>

      {menuOpen && (
        <div className="absolute top-full left-0 right-0 bg-black/95 backdrop-blur-xl border-t border-white/10">
          <div className="container mx-auto px-6 py-8">
            <nav className="space-y-4">
              <a href="#home" className="block text-white text-xl hover:text-neutral-400 transition-colors">Home</a>
              <a href="#cars" className="block text-white text-xl hover:text-neutral-400 transition-colors">Cars</a>
              <a href="#services" className="block text-white text-xl hover:text-neutral-400 transition-colors">Services</a>
              <a href="#about" className="block text-white text-xl hover:text-neutral-400 transition-colors">About</a>
              <a href="#contact" className="block text-white text-xl hover:text-neutral-400 transition-colors">Contact</a>
              <a href="#booking" className="inline-block mt-3 bg-white text-black px-5 py-3 rounded-full text-lg font-semibold hover:opacity-95 transition">Book Now</a>
            </nav>
          </div>
        </div>
      )}
    </header>
  );
}
