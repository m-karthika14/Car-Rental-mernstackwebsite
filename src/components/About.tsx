import { useEffect, useRef, useState } from 'react';

export default function About() {
  const [isVisible, setIsVisible] = useState(false);
  const headerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) setIsVisible(true); }, { threshold: 0.05 });
    if (headerRef.current) obs.observe(headerRef.current);
    return () => obs.disconnect();
  }, []);

  return (
    <div className="bg-black min-h-screen pt-20" id="about">
      <section className="py-24 px-6 max-w-7xl mx-auto mt-[0.2cm]">
        <div ref={headerRef} className={`mb-20 transition-all duration-700 text-center ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}>
          <div className="w-16 h-px bg-yellow-400 mx-auto mb-8" />
          <h2 className="text-5xl md:text-6xl font-bold text-white mb-6 tracking-tight">
            Self Drive Car Rental near Goa Airport
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto leading-relaxed">
            Looking for a budget-friendly self-drive car rental near Goa Airport or Vasco Railway Station? We provide a wide range of well-maintained cars that give you the freedom to travel at your own pace.
          </p>
        </div>

        {/* Founder’s Note */}
        <div className="mb-20">
          <div className="bg-white/5 border border-white/10 rounded-3xl p-8 lg:p-12">
            <div className="flex flex-col lg:flex-row items-center lg:items-start gap-10">

              {/* Photo */}
              <div className="flex-shrink-0 flex flex-col items-center gap-3 mt-[1.5cm]">
                <div className="w-64 h-64 rounded-full overflow-hidden border-4 border-yellow-400/60 shadow-2xl shadow-yellow-400/10">
                  <img src="https://i.postimg.cc/x1d9ny30/alibabab.jpg" alt="Ali — Founder" className="w-full h-full object-cover" />
                </div>
                <span className="text-xs font-semibold tracking-widest uppercase text-yellow-400">Founder</span>
              </div>

              {/* Content */}
              <div className="flex-1 text-white flex flex-col justify-center">
                <div className="w-10 h-px bg-yellow-400 mb-5" />
                <h3 className="text-3xl font-extrabold mb-6 tracking-tight">Founder’s Note</h3>
                <div className="text-gray-300 space-y-4 text-base leading-relaxed">
                  <p>Hi, I’m <span className="text-white font-semibold">Ali</span>, founder of Prime Self Drive Cars.</p>
                  <p>I started this service to make travel in Goa simple, affordable, and reliable — without hidden charges or last-minute hassles.</p>
                  <p className="text-white font-semibold">We focus on:</p>
                  <ul className="space-y-2 pl-1">
                    <li className="flex items-center gap-3"><span className="w-1.5 h-1.5 rounded-full bg-yellow-400 shrink-0" />Well-maintained cars</li>
                    <li className="flex items-center gap-3"><span className="w-1.5 h-1.5 rounded-full bg-yellow-400 shrink-0" />Transparent pricing</li>
                    <li className="flex items-center gap-3"><span className="w-1.5 h-1.5 rounded-full bg-yellow-400 shrink-0" />On-time delivery</li>
                    <li className="flex items-center gap-3"><span className="w-1.5 h-1.5 rounded-full bg-yellow-400 shrink-0" />Friendly support</li>
                  </ul>
                  <p>Our goal is to give you a smooth, stress-free ride every time.</p>
                  <p className="text-white font-semibold">Thank you for trusting us.</p>
                </div>
              </div>

            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-24">
          <div className="animate-slideLeft">
            <div className="w-16 h-px bg-yellow-400 mb-6" />
            <h3 className="text-3xl md:text-4xl font-bold text-white mb-6 leading-tight">
              Explore Goa <span className="text-yellow-400 font-light italic">Your Way</span>
            </h3>
            <div className="space-y-6 text-gray-400 text-lg leading-relaxed">
              <p>
                Conveniently located just <strong>1 km from the airport</strong> and <strong>1.5 km from the railway station</strong>, our service is perfect for travelers who want quick and easy access to a rental car right after arrival.
              </p>
              <p>
                Whether you're planning a beach trip, a family vacation, or a long drive across Goa, we have the perfect vehicle for you — all at affordable daily rates.
              </p>
            </div>
            
            <div className="mt-10 grid grid-cols-2 gap-6">
              <div className="bg-white/5 border border-white/10 p-6 rounded-xl">
                <div className="text-yellow-400 text-4xl font-bold mb-2">1 km</div>
                <div className="text-white text-sm">From Goa Airport</div>
              </div>
              <div className="bg-white/5 border border-white/10 p-6 rounded-xl">
                <div className="text-yellow-400 text-4xl font-bold mb-2">1.5 km</div>
                <div className="text-white text-sm">From Railway Station</div>
              </div>
            </div>
          </div>

          <div className="relative animate-slideRight">
            <div className="relative overflow-hidden rounded-2xl group">
              <img
                src="https://images.pexels.com/photos/1719647/pexels-photo-1719647.jpeg?auto=compress&cs=tinysrgb&w=1920"
                alt="Luxury car in Goa"
                className="w-full h-[600px] object-cover group-hover:scale-110 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
