import { useEffect, useRef, useState } from 'react';

export default function BrandStory() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="relative h-screen overflow-hidden" id="about">
      <div className="absolute inset-0">
        <img
          src="https://images.pexels.com/photos/3764984/pexels-photo-3764984.jpeg?auto=compress&cs=tinysrgb&w=1920"
          alt="Luxury supercar detail"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/80 to-transparent"></div>
      </div>

      <div className="relative z-10 h-full flex items-center">
        <div className="container mx-auto px-6">
          <div className={`max-w-2xl transition-all duration-1000 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}>
            <p className="text-white/60 text-sm tracking-widest mb-4 uppercase">Let's Keep It Simple</p>
            <h2 className="text-6xl font-bold text-white mb-6 leading-tight">
              We specialize in premium car rentals for every occasion.
            </h2>
            <p className="text-white/80 text-xl leading-relaxed mb-8">
              For years, we’ve proudly served customers with premium cars and dependable service. Our passion for excellence drives everything we do.
            </p>
            <a href="#about" className="bg-white text-black px-8 py-4 rounded-full font-medium hover:bg-neutral-200 transition-all hover:scale-105 hover:shadow-2xl">
              About Us
            </a>
          </div>
        </div>
      </div>

      {/* Removed the floating "2010-2024 / TRUST BUILT" badge as requested */}
    </section>
  );
}
