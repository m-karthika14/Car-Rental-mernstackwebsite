import { Search, ChevronDown } from 'lucide-react';
import { useEffect, useRef } from 'react';

export default function Hero() {
  const heroRef = useRef<HTMLDivElement>(null);

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

  return (
    <section className="relative h-screen bg-black overflow-hidden">
      <div
        ref={heroRef}
        className="absolute inset-0 transition-transform duration-0"
      >
        <div className="absolute inset-0 bg-gradient-to-b from-black via-transparent to-black z-10"></div>
        <img
          src="https://images.pexels.com/photos/3752169/pexels-photo-3752169.jpeg?auto=compress&cs=tinysrgb&w=1920"
          alt="Luxury Supercar"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/30 z-10"></div>
      </div>

      <div className="relative z-20 h-full flex flex-col items-center justify-center px-6">
        <p className="text-white/60 text-sm tracking-[0.3em] mb-4 animate-fade-in-up uppercase font-bold">
          Welcome to Premium Luxury Car Rentals
        </p>

        <h1 className="text-white text-6xl md:text-7xl lg:text-8xl font-bold text-center mb-8 animate-fade-in-up animation-delay-200 leading-tight tracking-tight">
          Elegance <span className="italic font-light">in</span> Motion
        </h1>

        <div className="flex flex-col sm:flex-row gap-4 items-center mb-12 animate-fade-in-up animation-delay-400">
          <form
            onSubmit={(e) => {
              e.preventDefault();
              const form = e.currentTarget as HTMLFormElement;
              const el = form.querySelector('input[name="heroSearch"]') as HTMLInputElement | null;
              const val = el?.value || '';
              // navigate to cars page with query param
              if (typeof window !== 'undefined') {
                window.location.hash = `#cars?query=${encodeURIComponent(val)}`;
              }
            }}
            className="relative"
          >
            <input
              name="heroSearch"
              value={''}
              onChange={() => { /* controlled by form element value when submitted */ }}
              type="text"
              placeholder="Search Luxury Cars & Services"
              className="bg-white/10 backdrop-blur-md border border-white/20 text-white placeholder-white/60 px-6 py-4 pr-12 rounded-full w-full sm:w-80 max-w-full focus:outline-none focus:border-white/40 transition-all"
            />
            <button type="submit" aria-label="Search" className="absolute right-4 top-1/2 -translate-y-1/2 text-white/60">
              <Search size={20} />
            </button>
          </form>

          <a href="#cars" className="bg-white text-black px-8 py-4 rounded-full font-medium hover:bg-neutral-200 transition-all hover:scale-105 hover:shadow-2xl hover:shadow-white/20">
            Explore Rides
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
