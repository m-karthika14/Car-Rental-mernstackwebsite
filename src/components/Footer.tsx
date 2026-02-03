import { Instagram, Facebook, Twitter, Youtube, Linkedin } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-black text-white pt-20 pb-8 px-6 border-t border-white/10">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 mb-16">
          <div className="lg:col-span-2">
            <h3 className="text-3xl font-bold mb-6">
              Elite<span className="text-neutral-500">Wheels</span>
            </h3>
            <p className="text-white/60 leading-relaxed mb-6 max-w-md">
            India’s trusted destination for premium car rentals, setting new standards since 2010.
            </p>
            <div className="flex items-center gap-4">
              <a href="#" className="bg-white/10 p-3 rounded-full hover:bg-white/20 transition-all hover:scale-110">
                <Instagram size={20} />
              </a>
              <a href="#" className="bg-white/10 p-3 rounded-full hover:bg-white/20 transition-all hover:scale-110">
                <Facebook size={20} />
              </a>
              <a href="#" className="bg-white/10 p-3 rounded-full hover:bg-white/20 transition-all hover:scale-110">
                <Twitter size={20} />
              </a>
              <a href="#" className="bg-white/10 p-3 rounded-full hover:bg-white/20 transition-all hover:scale-110">
                <Youtube size={20} />
              </a>
              <a href="#" className="bg-white/10 p-3 rounded-full hover:bg-white/20 transition-all hover:scale-110">
                <Linkedin size={20} />
              </a>
            </div>
          </div>

          <div className="lg:col-span-3 flex items-center">
            {/* Horizontal nav links — enlarged and spaced to fill the footer */}
            <ul className="flex flex-wrap items-center gap-8 justify-center md:justify-center w-full">
              <li><a href="#home" className="text-white/60 hover:text-white transition-colors text-xl md:text-2xl">Home</a></li>
              <li><a href="#cars" className="text-white/60 hover:text-white transition-colors text-xl md:text-2xl">Cars</a></li>
              <li><a href="#services" className="text-white/60 hover:text-white transition-colors text-xl md:text-2xl">Services</a></li>
              <li><a href="#about" className="text-white/60 hover:text-white transition-colors text-xl md:text-2xl">About</a></li>
              <li><a href="#contact" className="text-white/60 hover:text-white transition-colors text-xl md:text-2xl">Contact</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-white/40 text-sm">
              © 2026 EliteWheels. All rights reserved.
            </p>
            <div className="flex items-center gap-6 text-sm">
              <a href="#" className="text-white/60 hover:text-white transition-colors">Privacy Policy</a>
              <a href="#" className="text-white/60 hover:text-white transition-colors">Terms of Service</a>
              <a href="#" className="text-white/60 hover:text-white transition-colors">Cookie Policy</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
