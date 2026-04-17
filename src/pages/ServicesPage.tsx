import { Car, Navigation2, CheckCircle2, Shield, Key } from 'lucide-react';
import { useState, useRef, useEffect } from 'react';
import ServiceCard from '../components/ServiceCard';
import Button from '../components/Button';

interface ServicesProps {
  onNavigate: (page: string) => void;
}

export default function Services({ onNavigate }: ServicesProps) {
  const [isVisible, setIsVisible] = useState(false);
  const headerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) setIsVisible(true); }, { threshold: 0.05 });
    if (headerRef.current) obs.observe(headerRef.current);
    return () => obs.disconnect();
  }, []);

  return (
    <div className="bg-black min-h-screen pt-20">
      <section className="py-24 px-6 max-w-7xl mx-auto">
        <div ref={headerRef} className={`mb-20 transition-all duration-700 text-center ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}>
          <div className="w-16 h-px bg-yellow-400 mx-auto mb-8" />
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 tracking-tight">
            Self Drive Car Services near Goa Airport
          </h1>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto leading-relaxed">
            Budget-friendly and premium self-drive car rental solutions for every journey in Goa
          </p>
        </div>

        <div className="mb-24">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="animate-slideUp" style={{ animationDelay: '0s' }}>
              <ServiceCard
                icon={Car}
                title="Self-drive car rentals"
                description="Choose from our wide fleet for independent travel across Goa."
                showButton={false}
              />
            </div>

            <div className="animate-slideUp" style={{ animationDelay: '0.1s' }}>
              <ServiceCard
                icon={Navigation2}
                title="Airport pickup & drop-off"
                description="Reliable on-time transfers to and from the airport and stations."
                showButton={false}
              />
            </div>

            <div className="animate-slideUp" style={{ animationDelay: '0.2s' }}>
              <ServiceCard
                icon={CheckCircle2}
                title="Daily & long-term rentals"
                description="Flexible daily and extended rental plans at competitive rates."
                showButton={false}
              />
            </div>
          </div>

          <div className="flex justify-center gap-8 mt-8">
            <div className="w-full sm:w-1/2 lg:w-1/3">
              <ServiceCard
                icon={Shield}
                title="Family & group travel vehicles"
                description="Spacious vehicles suitable for families and group travel needs."
                showButton={false}
              />
            </div>

            <div className="w-full sm:w-1/2 lg:w-1/3">
              <ServiceCard
                icon={Key}
                title="Budget and premium car options"
                description="Choose budget-friendly cars or premium models to match your trip."
                showButton={false}
              />
            </div>
          </div>
        </div>

        <div className="relative overflow-hidden rounded-2xl animate-fadeIn">
          <img
            src="https://images.pexels.com/photos/116675/pexels-photo-116675.jpeg?auto=compress&cs=tinysrgb&w=1920"
            alt="Luxury car fleet"
            className="w-full h-[400px] object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent flex items-center justify-center">
            <div className="text-center px-6">
              <h2 className="text-4xl font-bold text-white mb-6">Ready to Book Your Ride?</h2>
              <Button onClick={() => onNavigate('contact')}>CONTACT US NOW</Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
