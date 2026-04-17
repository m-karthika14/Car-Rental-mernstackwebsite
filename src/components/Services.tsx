import { CheckCircle2, Navigation2, FileCheck, PhoneCall, Car, Shield, Key } from 'lucide-react';
import { useEffect, useRef, useState } from 'react';

export default function Services() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true);
      },
      { threshold: 0.1 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  const services = [
    { title: 'Self-drive car rentals', icon: <Car className="text-yellow-400" size={24} /> },
    { title: 'Airport pickup & drop-off', icon: <Navigation2 className="text-yellow-400" size={24} /> },
    { title: 'Daily & long-term rentals', icon: <CheckCircle2 className="text-yellow-400" size={24} /> },
    { title: 'Family & group travel vehicles', icon: <Shield className="text-yellow-400" size={24} /> },
    { title: 'Budget and premium car options', icon: <Key className="text-yellow-400" size={24} /> }
  ];
  return (
    <section ref={sectionRef} className="py-24 px-6 bg-black" id="services">
      <div className="container mx-auto">
        <div className={`mb-16 transition-all duration-1000 text-center ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Our Services
          </h2>
          <div className="h-1 w-24 bg-yellow-400 mx-auto mb-8"></div>
        </div>

        <div className={`transition-all duration-1000 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-6">
            {services.slice(0, 3).map((service, index) => (
              <div key={index} className="bg-white/5 border border-white/10 p-6 rounded-xl flex items-center gap-4 hover:bg-white/10 transition-colors">
                <div className="p-3 bg-black/50 rounded-lg shrink-0">
                  {service.icon}
                </div>
                <p className="text-white text-lg font-medium">{service.title}</p>
              </div>
            ))}
          </div>

          <div className="flex flex-wrap justify-center gap-6 mt-6">
            {services.slice(3).map((service, index) => (
              <div key={index} className="w-full sm:w-1/2 lg:w-1/3 max-w-xl bg-white/5 border border-white/10 p-6 rounded-xl flex items-center gap-4 hover:bg-white/10 transition-colors">
                <div className="p-3 bg-black/50 rounded-lg shrink-0">
                  {service.icon}
                </div>
                <p className="text-white text-lg font-medium">{service.title}</p>
              </div>
            ))}
          </div>
        </div>

        <div className={`transition-all duration-1000 delay-300 mt-[3cm] ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Easy Self-Drive Booking
            </h2>
            <div className="h-1 w-24 bg-yellow-400 mx-auto"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="flex flex-col items-center text-center">
              <div className="w-16 h-16 rounded-full bg-yellow-400 flex items-center justify-center mb-6 shadow-lg shadow-yellow-400/20">
                <Car className="text-black" size={32} />
              </div>
              <h3 className="text-white text-xl font-bold mb-3">1. Browse & Select</h3>
              <p className="text-white/60">Choose your preferred car from our fleet.</p>
            </div>
            
            <div className="flex flex-col items-center text-center">
              <div className="w-16 h-16 rounded-full bg-yellow-400 flex items-center justify-center mb-6 shadow-lg shadow-yellow-400/20">
                <FileCheck className="text-black" size={32} />
              </div>
              <h3 className="text-white text-xl font-bold mb-3">2. Choose Dates</h3>
              <p className="text-white/60">Select your rental dates (minimum 3 days).</p>
            </div>

            <div className="flex flex-col items-center text-center">
              <div className="w-16 h-16 rounded-full bg-yellow-400 flex items-center justify-center mb-6 shadow-lg shadow-yellow-400/20">
                <PhoneCall className="text-black" size={32} />
              </div>
              <h3 className="text-white text-xl font-bold mb-3">3. Contact Us</h3>
              <p className="text-white/60">Book instantly via WhatsApp or Call.</p>
            </div>

            <div className="flex flex-col items-center text-center">
              <div className="w-16 h-16 rounded-full bg-yellow-400 flex items-center justify-center mb-6 shadow-lg shadow-yellow-400/20">
                <Navigation2 className="text-black" size={32} />
              </div>
              <h3 className="text-white text-xl font-bold mb-3">4. Pick Up & Drive</h3>
              <p className="text-white/60">Pick up your car from the airport or station.</p>
            </div>
          </div>
        </div>

        {/* SEO Optimized FAQ Section (glass card) */}
        <div className={`mt-24 transition-all duration-1000 delay-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="mx-auto max-w-6xl bg-white/5 border border-white/10 rounded-2xl p-8 backdrop-blur-md shadow-lg overflow-hidden">
            <div className="mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                FAQs about Car Rental near Goa Airport
              </h2>
              <div className="h-1 w-24 bg-yellow-400"></div>
            </div>

            <div className="space-y-6">
              <div className="bg-transparent border-none p-0">
                <div className="bg-white/5 border border-white/10 p-6 rounded-xl">
                  <h3 className="text-xl font-bold text-white mb-2">How far are you from Goa Airport?</h3>
                  <p className="text-white/70">Our self drive car rental pickup point is located just 1 km from Goa Airport (Dabolim) and 1.5 km from Vasco da Gama Railway Station.</p>
                </div>
              </div>

              <div className="bg-transparent border-none p-0">
                <div className="bg-white/5 border border-white/10 p-6 rounded-xl">
                  <h3 className="text-xl font-bold text-white mb-2">Are your cars allowed to go out of Goa?</h3>
                  <p className="text-white/70">No. As per RTO guidelines, our vehicles are strict restricted within Goa state borders. Violations incur heavy penalties.</p>
                </div>
              </div>

              <div className="bg-transparent border-none p-0">
                <div className="bg-white/5 border border-white/10 p-6 rounded-xl">
                  <h3 className="text-xl font-bold text-white mb-2">What documents are required to rent a self-drive car?</h3>
                  <p className="text-white/70">You need a valid Driving License, an Aadhaar Card or Passport for ID proof. All documents must be original variants shown at the time of pickup.</p>
                </div>
              </div>

              <div className="bg-transparent border-none p-0">
                <div className="bg-white/5 border border-white/10 p-6 rounded-xl">
                  <h3 className="text-xl font-bold text-white mb-2">What is the minimum booking duration?</h3>
                  <p className="text-white/70">Our standard pricing applies per day. For newly registered cars, we have a minimum 3-day booking requirement.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
