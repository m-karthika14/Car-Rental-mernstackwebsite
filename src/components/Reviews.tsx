import { useEffect, useRef } from 'react';

const reviews = [
  { name: 'Mohommadali Tapal', time: '3 hours ago', text: 'Transparent pricing, no hidden charges. Deposit bhi easily return ho gaya. Highly recommend.' },
  { name: 'Mayur Tubachi', time: '3 days ago', text: 'Very reliable car rental service in Goa. Prime Self Drive Car provided quick service and excellent support throughout the trip. Highly satisfied!' },
  { name: 'Kiran Tubachi', time: '3 days ago', text: 'Our flight was delayed by 2 hours, but Ali at Prime Self Drive was so patient and waited for us at the airport. His customer service is top-tier. The car was excellent and very clean.' },
  { name: 'Rajeshree Tublbachi', time: '3 days ago', text: 'We rented an Ertiga from Prime Self Drive. The vehicle was sanitized and very comfortable for our family of six. Ali even gave us some great local tips for North Goa. Excellent service!' },
  { name: 'Mittu Tubachi', time: '3 days ago', text: 'Prime Self Drive made our Goa trip so much easier. Ali is a man of his word—everything promised during the booking was delivered. The car was fuel-efficient and perfectly maintained.' },
  { name: 'Alexzar Kara', time: '4 days ago', text: 'Had a great experience with Prime Self Drive Car at Goa Airport! The service was smooth and hassle-free from start to finish. The car was clean, well-maintained, and delivered right on time.' },
  { name: 'Naren Yashwanth N', time: '4 days ago', text: 'This was a very helpful and smooth experience from start to finish. Easily one of the best self-drive car rental services I’ve used. The pricing is very competitive. Highly recommended!' },
];

export default function Reviews() {
  const trackRef = useRef<HTMLDivElement | null>(null);

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
    <section className="mt-12 py-12" aria-label="Customer reviews">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-8">
          <h3 className="text-3xl font-bold text-white">What our customers say</h3>
          <div className="h-1 w-20 bg-yellow-400 mx-auto mt-4"></div>
        </div>

        <div className="overflow-hidden">
          <div ref={trackRef} className="flex gap-5 w-max will-change-transform" style={{ transform: 'translateX(0)' }}>
            {[...reviews, ...reviews].map((r, i) => (
              <div key={i} className="bg-white/5 border border-white/10 rounded-2xl p-5 w-[270px] shrink-0 flex flex-col gap-3 text-white">
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
  );
}
