import { Search, ChevronDown } from 'lucide-react';
import { useEffect, useRef, useState } from 'react';

export default function Hero() {
  const heroRef = useRef<HTMLDivElement>(null);
  const [currentImg, setCurrentImg] = useState(0);

  const images = [
    "https://images.pexels.com/photos/3752169/pexels-photo-3752169.jpeg?auto=compress&cs=tinysrgb&w=1920",
    "https://images.pexels.com/photos/120049/pexels-photo-120049.jpeg?auto=compress&cs=tinysrgb&w=1920",
    "https://images.pexels.com/photos/1149137/pexels-photo-1149137.jpeg?auto=compress&cs=tinysrgb&w=1920",
    "https://images.pexels.com/photos/3729464/pexels-photo-3729464.jpeg?auto=compress&cs=tinysrgb&w=1920"
  ];

  useEffect(() => {
    const handleScroll = () => {
      if (heroRef.current) {
        const scrolled = window.scrollY;
        heroRef.current.style.transform = `translateY(${scrolled * 0.5}px)`;
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImg((prev) => (prev + 1) % images.length);
    }, 4000);
    return () => clearInterval(timer);
  }, [images.length]);

  return (
    <section className="relative h-screen bg-black overflow-hidden">
      <div
        ref={heroRef}
        className="absolute inset-0 transition-transform duration-0"
      >
        <div className="absolute inset-0 bg-gradient-to-b from-black via-transparent to-black z-10"></div>
        {images.map((img, idx) => (
          <img
            key={img}
            src={img}
            alt="Luxury Supercar"
            className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ${
              idx === currentImg ? 'opacity-100' : 'opacity-0'
            }`}
          />
        ))}
        <div className="absolute inset-0 bg-black/30 z-10"></div>
      </div>

      <div className="relative z-20 h-full flex flex-col items-center justify-center px-6">
        <p className="text-yellow-400 text-sm tracking-[0.2em] mb-4 animate-fade-in-up uppercase font-bold bg-black/50 px-4 py-2 rounded-full inline-block backdrop-blur-sm">
          📍 Located only 1 km from Goa Airport and 1.5 km from the Railway Station
        </p>

        <h1 className="text-white text-4xl md:text-6xl lg:text-7xl font-bold text-center mb-6 animate-fade-in-up animation-delay-200 leading-tight tracking-tight max-w-5xl">
          Self Drive Car Rental near Goa Airport
        </h1>
        
        <p className="text-white/80 text-xl max-w-3xl text-center mb-10 animate-fade-in-up animation-delay-300">
          Book budget-friendly self-drive cars just minutes from Goa Airport and Vasco Railway Station. Explore Goa your way.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 items-center mb-12 animate-fade-in-up animation-delay-400">
          <a
            href="https://wa.me/917385766602"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white text-black px-8 py-4 rounded-full font-bold hover:bg-neutral-200 transition-all hover:scale-105 hover:shadow-2xl hover:shadow-white/20"
          >
            Book Your Car Now
          </a>
          <a
            href="#cars"
            className="bg-black/50 backdrop-blur-md border border-white/20 text-white px-8 py-4 rounded-full font-bold hover:bg-white/10 transition-all hover:scale-105"
          >
            View Available Cars
          </a>
        </div>

        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <ChevronDown className="text-white/60" size={32} />
        </div>
      </div>

      <div className="absolute bottom-8 right-8 z-20 text-white/40 text-xs tracking-wider">
        Explore
      </div>
    </section>
  );
}
