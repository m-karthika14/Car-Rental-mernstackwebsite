import { ArrowRight } from 'lucide-react';
import { useEffect, useRef, useState } from 'react';

const services = [
  {
    id: 1,
    title: 'Self-Drive Rentals',
    image: 'https://images.pexels.com/photos/4489739/pexels-photo-4489739.jpeg?auto=compress&cs=tinysrgb&w=800',
    description: 'Drive premium cars on your own terms'
  },
  {
    id: 2,
    title: 'Chauffeur-Driven Rentals',
    image: 'https://images.pexels.com/photos/3806288/pexels-photo-3806288.jpeg?auto=compress&cs=tinysrgb&w=800',
    description: 'Professional drivers for a refined journey'
  },
  {
    id: 3,
    title: 'Airport Transfers',
    image: 'https://images.pexels.com/photos/3752169/pexels-photo-3752169.jpeg?auto=compress&cs=tinysrgb&w=800',
    description: 'Luxury pickup and drop, always on time'
  }
];

export default function Services() {
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
    <section ref={sectionRef} className="py-24 px-6 bg-black" id="services">
      <div className="container mx-auto">
        <div className={`mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="flex items-center gap-4 mb-6">
            <div className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center">
              <ArrowRight className="text-white" size={20} />
            </div>
            <p className="text-white/60 text-sm tracking-widest uppercase">Elevate Your Ride</p>
          </div>
          <h2 className="text-6xl font-bold text-white mb-4">
            We specialize exclusively in premium car rentals.
          </h2>
          <p className="text-white/60 text-lg max-w-2xl leading-relaxed">
            Self-drive or chauffeur-driven, every ride feels premium.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <div
              key={service.id}
              className={`group relative h-96 overflow-hidden rounded-lg cursor-pointer transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
              style={{ transitionDelay: `${index * 150}ms` }}
            >
              <img
                src={service.image}
                alt={service.title}
                className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-110 transition-all duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent"></div>

              <div className="absolute bottom-0 left-0 right-0 p-8">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="text-3xl font-bold text-white mb-2">{service.title}</h3>
                    <p className="text-white/70 text-sm">{service.description}</p>
                  </div>
                  <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <ArrowRight className="text-white" size={32} />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
