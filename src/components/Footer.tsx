import { MapPin, Globe, Star } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-black text-white pt-20 pb-8 px-6 border-t border-white/10">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <div className="lg:col-span-1">
            <h3 className="text-2xl font-bold mb-6">
              Prime<span className="text-yellow-400"> Self Drive</span>
            </h3>
            <p className="text-white/60 leading-relaxed mb-6 font-bold text-lg">
              Affordable Self-Drive Cars Near Goa Airport – यात्रा आपकी, ड्राइव आपकी 🚗
            </p>
            <div className="flex flex-col gap-3 mt-4">
               <a href="https://share.google/6aTFniQ3Elem1PyKx" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-white/60 hover:text-yellow-400 max-w-max transition">
                 <Globe size={18} /> Google Business Listing
               </a>
               <a href="https://g.page/r/CTZjP9p6DfFcEBM/review" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-white/60 hover:text-yellow-400 max-w-max transition">
                 <Star size={18} /> Leave a Google Review
               </a>
            </div>
          </div>

          <div className="lg:col-span-1">
            <h4 className="text-lg font-bold mb-4 text-white">Quick Links</h4>
             <ul className="flex flex-col gap-3">
              <li><a href="#home" className="text-white/60 hover:text-yellow-400 transition-colors">Home</a></li>
              <li><a href="#cars" className="text-white/60 hover:text-yellow-400 transition-colors">Our Fleet</a></li>
              <li><a href="#services" className="text-white/60 hover:text-yellow-400 transition-colors">Services</a></li>
              <li><a href="#about" className="text-white/60 hover:text-yellow-400 transition-colors">About Us</a></li>
              <li><a href="#blogs" className="text-white/60 hover:text-yellow-400 transition-colors">Blog & Guides</a></li>
              <li><a href="#contact" className="text-white/60 hover:text-yellow-400 transition-colors">Contact</a></li>
            </ul>
          </div>

          <div className="lg:col-span-2">
            <h4 className="text-lg font-bold mb-4 text-white flex items-center gap-2"><MapPin size={20} className="text-yellow-400"/> Areas We Serve in Goa</h4>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 text-white/60">
              <span>Vasco da Gama</span>
              <span>Dabolim</span>
              <span>Panaji</span>
              <span>Mapusa</span>
              <span>Calangute</span>
              <span>Anjuna</span>
              <span>Baga</span>
              <span>Candolim</span>
              <span>Madgaon</span>
              <span>Colva</span>
              <span>Palolem</span>
              <span>Dona Paula</span>
              <span>Bambolim</span>
              <span>Siolim</span>
              <span>Cavelossim</span>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-white/40 text-sm text-center md:text-left">
              © 2026 Prime Self Drive Car Goa Airport. All rights reserved.
            </p>
            <div className="flex items-center gap-6 text-sm">
              <a href="#" className="text-white/60 hover:text-yellow-400 transition-colors">Privacy Policy</a>
              <a href="#" className="text-white/60 hover:text-yellow-400 transition-colors">Terms of Service</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
