import { UserCircle, Plane, Car, Briefcase, Heart, Clock } from 'lucide-react';
import ServiceCard from '../components/ServiceCard';
import Button from '../components/Button';

interface ServicesProps {
  onNavigate: (page: string) => void;
}

export default function Services({ onNavigate }: ServicesProps) {
  return (
    <div className="bg-black min-h-screen pt-20">
      <section className="py-24 px-6 max-w-7xl mx-auto">
        <div className="text-center mb-20 animate-fadeIn">
          <div className="w-16 h-px bg-white/30 mx-auto mb-8" />
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 tracking-tight">
            Our Services
          </h1>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto leading-relaxed">
            Premium car rental solutions for every journey
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-24">
          <div className="animate-slideUp" style={{ animationDelay: '0s' }}>
            <ServiceCard
              icon={UserCircle}
              title="Chauffeur-Driven Rentals"
              description="Professional drivers for business, events, and city travel. Experience comfort and convenience with our expert chauffeurs."
            />
          </div>

          <div className="animate-slideUp" style={{ animationDelay: '0.1s' }}>
            <ServiceCard
              icon={Plane}
              title="Airport Pickup & Drop"
              description="On-time luxury transfers to and from the airport. Never worry about missing a flight with our punctual service."
            />
          </div>

          <div className="animate-slideUp" style={{ animationDelay: '0.2s' }}>
            <ServiceCard
              icon={Car}
              title="Self-Drive Rentals"
              description="Premium cars with complete freedom and flexibility. Take control of your journey with our well-maintained fleet."
            />
          </div>

          <div className="animate-slideUp" style={{ animationDelay: '0.3s' }}>
            <ServiceCard
              icon={Briefcase}
              title="Corporate Travel"
              description="Reliable luxury transportation for business professionals. Impress clients and maintain your professional image."
            />
          </div>

          <div className="animate-slideUp" style={{ animationDelay: '0.4s' }}>
            <ServiceCard
              icon={Heart}
              title="Wedding & Event Rentals"
              description="Arrive in style on your most special occasions. Make unforgettable memories with our premium wedding cars."
            />
          </div>

          <div className="animate-slideUp" style={{ animationDelay: '0.5s' }}>
            <ServiceCard
              icon={Clock}
              title="Hourly & Daily Packages"
              description="Flexible rental options tailored to your needs. Choose from hourly rates to extended daily packages."
            />
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
