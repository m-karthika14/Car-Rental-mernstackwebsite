import { MapPin, Phone, Mail } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-black text-white pt-20 pb-8 px-6 border-t border-white/10">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-16 items-start">
          {/* Left: Main brand block */}
          <div>
            <h3 className="text-2xl font-bold mb-2">
              Prime<span className="text-yellow-400"> Self Drive</span>
            </h3>
            <p className="text-white/70 leading-relaxed mb-1 font-medium text-lg">
              Affordable Self-Drive Cars Near Goa Airport
            </p>
            <p className="text-white/70 mb-6 font-medium text-lg">यात्रा आपकी, ड्राइव आपकी</p>

            <div className="flex items-center gap-4">
              <a href="#contact" className="inline-block bg-yellow-400 text-black px-4 py-2 rounded-full font-bold hover:bg-yellow-500 transition">Book Now</a>
              <a
                href="#"
                onClick={(e) => { e.preventDefault(); window.open('https://google.com/maps/place/PRIME+SELF+DRIVE+CAR+GOA+AIRPORT/data=!4m2!3m1!1s0x0:0x5cf10d7ada3f6336?sa=X&ved=1t:2428&hl=en-GB&ictx=111', '_blank'); }}
                className="inline-block bg-yellow-400 text-black px-4 py-2 rounded-full font-bold hover:bg-yellow-500 transition"
              >
                Locate & Go
              </a>
            </div>

            <div className="mt-6">
              <h4 className="text-lg font-bold mb-3">Contact</h4>
              <ul className="space-y-2 text-white/70">
                <li className="flex items-center gap-3">
                  <Phone size={18} className="text-yellow-400" />
                  <a href="tel:+917385766602" className="hover:text-yellow-400">073857 66602</a>
                </li>
                <li className="flex items-center gap-3">
                  <Mail size={18} className="text-yellow-400" />
                  <a href="mailto:primeselfdrivecargoaairport@gmail.com" className="hover:text-yellow-400">primeselfdrivecargoaairport@gmail.com</a>
                </li>
                <li className="flex items-start gap-3">
                  <MapPin size={22} className="text-yellow-400 mt-1" />
                  <address className="not-italic text-white/70">Shop no 9, Maria Apartment, Tita, opp. SBI, Mangor Hill, Mormugao, Goa 403802</address>
                </li>
              </ul>
            </div>
          </div>

          {/* Middle: Quick Links */}
          <div>
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

          {/* Right: Areas we serve */}
          <div>
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
