import { useEffect, useRef, useState } from 'react';

const reviews = [
  { name: 'Mohommadali Tapal', time: '3 hours ago', text: 'Transparent pricing, no hidden charges. Deposit bhi easily return ho gaya. Highly recommend.' },
  { name: 'Mayur Tubachi', time: '3 days ago', text: 'Service was pretty reliable. We got the car delivered near our hotel, and it saved us a lot of time. Staff was polite and easy to deal with.' },
  { name: 'Mayur Tubachi', time: '3 days ago', text: 'Amazing experience! The car was sanitized, fuel-efficient, and comfortable. Customer support was responsive and polite. Best self-drive car rental in Goa!' },
  { name: 'Mayur Tubachi', time: '3 days ago', text: 'Very reliable car rental service in Goa. Prime Self Drive Car provided quick service and excellent support throughout the trip. Highly satisfied!' },
  { name: 'Kiran Tubachi', time: '3 days ago', text: 'Our flight was delayed by 2 hours, but Ali at Prime Self Drive was so patient and waited for us at the airport. His customer service is top-tier. The car was excellent and very clean.' },
  { name: 'Rajeshree Tublbachi', time: '3 days ago', text: 'We rented an Ertiga from Prime Self Drive. The vehicle was sanitized and very comfortable for our family of six. Ali even gave us some great local tips for North Goa. Excellent service!' },
  { name: 'Mittu Tubachi', time: '3 days ago', text: 'Prime Self Drive made our Goa trip so much easier. Ali is a man of his word — everything promised during the booking was delivered. The car was fuel-efficient and perfectly maintained.' },
  { name: 'Alexzar Kara', time: '4 days ago', text: 'Had a great experience at Goa Airport! Service was smooth and hassle-free. Special thanks to Mr. Ali for being extremely helpful and professional throughout. Highly recommend!' },
  { name: 'Rajan Kara', time: '4 days ago', text: 'Great experience near Dabolim Airport. Ali is very professional and helpful. Car was clean, well-maintained, and delivered on time. No hidden charges. Highly recommended!' },
  { name: 'Naren Yashwanth N', time: '4 days ago', text: 'Easily one of the best self-drive car rental services I\'ve used. Competitive pricing, direct airport delivery, and excellent service. Great value for money. Highly recommended!' },
];

export default function About() {
  const [isVisible, setIsVisible] = useState(false);
  const headerRef = useRef<HTMLDivElement | null>(null);
  const trackRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) setIsVisible(true); }, { threshold: 0.05 });
    if (headerRef.current) obs.observe(headerRef.current);
    return () => obs.disconnect();
  }, []);

  useEffect(() => {
    const el = trackRef.current;
    if (!el) return;
    let pos = 0;
    let raf: number;
    let paused = false;
    const step = () => {
      if (!paused) {
        pos += 0.6;
        const half = el.scrollWidth / 2;
        if (pos >= half) pos = 0;
        el.style.transform = `translateX(-${pos}px)`;
      }
      raf = requestAnimationFrame(step);
    };
    raf = requestAnimationFrame(step);
    el.addEventListener('mouseenter', () => { paused = true; });
    el.addEventListener('mouseleave', () => { paused = false; });
    return () => cancelAnimationFrame(raf);
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
                    <img src="https://i.postimg.cc/1XKFkhpZ/alibabab.jpg" alt="Ali — Founder" className="w-full h-full object-cover" />
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

        {/* Reviews */}
        <div className="pb-8">
          <div className="text-center mb-12">
            <div className="w-16 h-px bg-yellow-400 mx-auto mb-8" />
            <h3 className="text-3xl md:text-4xl font-bold text-white mb-2">What Our Customers Say</h3>
            <p className="text-gray-500 text-sm">Real reviews from Google</p>
          </div>
          <div className="overflow-hidden">
            <div ref={trackRef} className="flex gap-5 w-max will-change-transform">
              {[...reviews, ...reviews].map((r, i) => (
                <div key={i} className="bg-white/5 border border-white/10 rounded-2xl p-5 w-[270px] shrink-0 flex flex-col gap-3">
                  <div className="flex items-center gap-3">
                    <div className="w-9 h-9 rounded-full bg-yellow-400/20 border border-yellow-400/40 flex items-center justify-center text-yellow-400 font-bold text-sm shrink-0">
                      {r.name[0]}
                    </div>
                    <div>
                      <p className="text-white text-sm font-semibold leading-tight">{r.name}</p>
                      <p className="text-neutral-500 text-xs">{r.time}</p>
                    </div>
                  </div>
                  <div className="flex gap-0.5">
                    {[1,2,3,4,5].map(s => <span key={s} className="text-yellow-400 text-sm">★</span>)}
                  </div>
                  <p className="text-gray-400 text-sm leading-relaxed line-clamp-4">{r.text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
