import { ChevronLeft, Calendar, Gauge, Fuel } from 'lucide-react';
import { useState, useRef, useEffect } from 'react';

const curatedCollections: Record<string, Array<{id:number;name:string;price:string;image:string;year:string;mileage:string;fuel:string;}>> = {
  chauffeur: [
    {
      id: 101,
      name: 'Mercedes GLS 350',
      price: '₹20,000',
      image: 'https://image2url.com/r2/default/images/1770297350295-fa54d71b-c2fd-49ac-9629-6379be5ef02a.avif',
      year: '2024',
      mileage: '80 Kms',
      fuel: 'Petrol'
    },
    {
      id: 102,
      name: 'Mercedes GLS 350',
      price: '₹20,000',
      image: 'https://i.postimg.cc/J4fy1Cn1/innova-hycross-exterior-right-front-three-quarter-74.avif',
      year: '2024',
      mileage: '8 Hr 80Kms',
      fuel: 'Petrol'
    },
    {
      id: 103,
      name: 'Audi A8',
      price: '₹22,000',
      image: 'https://i.postimg.cc/tg2CnKXV/exterior-grille.avif',
      year: '2023',
      mileage: '70 Kms',
      fuel: 'Petrol'
    },
    // trimmed to top 3
  ],
  airport: [
    {
      id: 201,
      name: 'Honda Accord',
      price: '₹3,000',
      image: 'https://i.postimg.cc/Gpkv0hx0/toyota-innova-crysta-left-front-three-quarter0.avif',
      year: '2023',
      mileage: '10 Kms',
      fuel: 'Petrol'
    },
    {
      id: 202,
      name: 'Toyota Camry',
      price: '₹3,200',
      image: 'https://i.postimg.cc/BbdvQ2Jp/i20-exterior-front-view-3.avif',
      year: '2024',
      mileage: '8 Kms',
      fuel: 'Petrol'
    },
    {
      id: 203,
      name: 'Hyundai Sonata',
      price: '₹2,800',
      image: 'https://i.postimg.cc/SQXCqrrL/innova-crysta-exterior-right-front-three-quarter-3.avif',
      year: '2023',
      mileage: '12 Kms',
      fuel: 'Petrol'
    },
    // trimmed to top 3
  ],
  self: [
    {
      id: 301,
      name: 'Mini Cooper',
      price: '₹1,500',
      image: 'https://i.postimg.cc/tg2CnKXV/exterior-grille.avif',
      year: '2023',
      mileage: '5 Kms',
      fuel: 'Petrol'
    },
    {
      id: 302,
      name: 'Volkswagen Polo',
      price: '₹1,200',
      image: 'https://image2url.com/r2/default/images/1770297350295-fa54d71b-c2fd-49ac-9629-6379be5ef02a.avif',
      year: '2022',
      mileage: '6 Kms',
      fuel: 'Petrol'
    },
    {
      id: 303,
      name: 'Ford Fiesta',
      price: '₹1,100',
      image: 'https://i.postimg.cc/BbdvQ2Jp/i20-exterior-front-view-3.avif',
      year: '2023',
      mileage: '4 Kms',
      fuel: 'Petrol'
    },
    // trimmed to top 3
  ]
};

export default function RecentlyParked() {
  const [isVisible, setIsVisible] = useState(false);
  const [selectedTab, setSelectedTab] = useState<'chauffeur' | 'airport' | 'self'>('chauffeur');
  // activeTab is no longer used on the homepage since we show all three categories
  const sectionRef = useRef<HTMLDivElement>(null);
  const tabs = (['chauffeur','airport','self'] as const);
  const tabsContainerRef = useRef<HTMLDivElement | null>(null);
  const tabButtonRefs = useRef<HTMLButtonElement[]>([]);
  const [highlight, setHighlight] = useState<{ left: number; width: number } | null>(null);
  // Homepage should not render car details inline; clicking a card navigates to the Cars page
  // which handles rendering the details. Remove selectedCar state to avoid inline detail.

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

  // compute highlight position for the selected tab (animated flow)
  useEffect(() => {
    const updateHighlight = () => {
      const container = tabsContainerRef.current;
      if (!container) return;
      const idx = tabs.indexOf(selectedTab);
      const btn = tabButtonRefs.current[idx];
      if (!btn) return;
      const cRect = container.getBoundingClientRect();
      const bRect = btn.getBoundingClientRect();
      setHighlight({ left: bRect.left - cRect.left + container.scrollLeft, width: bRect.width });
    };

    updateHighlight();
    window.addEventListener('resize', updateHighlight);
    return () => window.removeEventListener('resize', updateHighlight);
  }, [selectedTab]);

  return (
    <section ref={sectionRef} className="py-24 px-6 bg-neutral-50" id="collection">
      <div className="container mx-auto">
        <div className={`flex items-center justify-between mb-12 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div>
            <h2 className="text-5xl font-bold text-black mb-2">Curated Collection</h2>
            <div className="h-0.5 w-96 bg-black"></div>
          </div>

          {/* removed carousel controls and All Collection button as requested */}
        </div>

        {/* Tabs to toggle between Chauffeur / Airport / Self and show only the selected category */}
        <div className="mb-8">
          <div className="flex justify-center">
            <div ref={tabsContainerRef} className="relative inline-flex items-center gap-4 p-1">
              {/* animated highlight (black box) that flows between tabs */}
              {highlight && (
                <div
                  aria-hidden
                  style={{
                    position: 'absolute',
                    left: highlight.left,
                    width: highlight.width,
                    top: 0,
                    height: '100%',
                    background: 'black',
                    borderRadius: 8,
                    transition: 'left 300ms cubic-bezier(.2,.9,.2,1), width 300ms cubic-bezier(.2,.9,.2,1), transform 300ms',
                    boxShadow: '0 6px 18px rgba(0,0,0,0.12)'
                  }}
                />
              )}

              {tabs.map((t, idx) => (
                <button
                  key={t}
                  ref={(el) => { if (el) tabButtonRefs.current[idx] = el; }}
                  onClick={() => setSelectedTab(t)}
                  className={`relative z-10 px-6 py-3 rounded-md text-sm font-medium border transition-all duration-300 transform ${
                    selectedTab === t
                      ? 'bg-transparent text-white border-transparent'
                      : 'bg-white text-black border-black hover:scale-105'
                  }`}
                >
                  {t === 'chauffeur' ? 'Chauffeur Driven' : t === 'airport' ? 'Airport Pickup / Drop' : 'Self-Drive'}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Selected category grid (first 6 cars) */}
        <div>
          <h3 className="text-2xl font-semibold mb-4">{selectedTab === 'chauffeur' ? 'Chauffeur Driven' : selectedTab === 'airport' ? 'Airport Pickup / Drop' : 'Self-Drive'}</h3>
          <div className="flex justify-center">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-[1200px] w-full">
              {curatedCollections[selectedTab].slice(0, 3).map((car, index) => (
                <div
                  key={car.id}
                  className={`bg-white rounded-lg overflow-hidden group cursor-pointer transition-all duration-700 hover:shadow-2xl hover:-translate-y-2 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
                  style={{ transitionDelay: `${index * 100}ms` }}
                  onClick={() => { window.location.hash = `#cars?id=${car.id}`; }}
                >
                  <div className="relative h-64 bg-neutral-100 overflow-hidden">
                    <img
                      src={car.image}
                      alt={car.name}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                  </div>

                  <div className="p-6">
                    <h3 className="text-xl font-bold text-black mb-2 group-hover:text-neutral-600 transition-colors">
                      {car.name}
                    </h3>
                    <p className="text-2xl font-bold text-black mb-4">{car.price}</p>

                    <div className="flex items-center gap-6 text-sm text-neutral-600">
                      <div className="flex items-center gap-2"><Calendar size={16} /><span>{car.year}</span></div>
                      <div className="flex items-center gap-2"><Gauge size={16} /><span>{car.mileage}</span></div>
                      <div className="flex items-center gap-2"><Fuel size={16} /><span>{car.fuel}</span></div>
                    </div>
                    <div className="mt-6">
                      <button
                        type="button"
                        onClick={(e) => { e.stopPropagation(); window.location.hash = `#cars?id=${car.id}`; }}
                        className="bg-black text-white px-6 py-3 rounded-full text-sm transition-all hover:bg-white hover:text-black border-2 border-transparent hover:border-black hover:scale-105 w-full"
                      >
                        Book Now
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* View All button centered below the grid - matches tab/button design */}
        <div className="flex justify-center mt-8">
          <a href="#cars" className="group relative px-6 py-3 border border-black rounded-md overflow-hidden">
            <span className="absolute inset-0 bg-black transform origin-left transition-transform duration-500 group-hover:scale-x-100 scale-x-0" aria-hidden />
            <span className="relative z-10 font-medium transition-colors group-hover:text-white text-black">View All</span>
          </a>
        </div>
      </div>
    </section>
  );
}

// -----------------------------------------------------------------------------
// Cars Page + Car Details & Booking flow (named exports)
// These are additional page components kept inside this file as requested.
// They reuse the exact card UI from the RecentlyParked component and the
// curatedCollections dataset above. Do not change existing card styles.
// -----------------------------------------------------------------------------

type Car = { id: number; name: string; price: string; image: string; year: string; mileage: string; fuel: string };

export function CarsPage() {
  const [activeTab, setActiveTab] = useState<'chauffeur' | 'airport' | 'self'>('chauffeur');
  const [query, setQuery] = useState('');
  const [selectedCar, setSelectedCar] = useState<Car | null>(null);
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) setIsVisible(true); }, { threshold: 0.05 });
    if (sectionRef.current) obs.observe(sectionRef.current);
    return () => obs.disconnect();
  }, []);

  const all = curatedCollections[activeTab];
  // show only available cars for the selected tab (top 3)
  const expanded: Car[] = all.slice(0, 3);

  const filtered = expanded.filter(c =>
    (c.name + ' ' + c.price + ' ' + c.fuel).toLowerCase().includes(query.toLowerCase())
  );

  useEffect(() => {
    const parseHash = () => {
      try {
        const h = window.location.hash || '';
        const [path, q] = h.split('?');
        if (path === '#cars' && q) {
          const params = new URLSearchParams(q);
          const id = params.get('id');
          const queryParam = params.get('query');
          if (queryParam !== null) {
            setQuery(decodeURIComponent(queryParam));
          }
          if (id) {
            const num = parseInt(id, 10);
            // search across all curated collections
            for (const key of Object.keys(curatedCollections)) {
              // @ts-ignore
              const found = curatedCollections[key].find((c: Car) => c.id === num);
              if (found) {
                setSelectedCar(found);
                setActiveTab(key as any);
                break;
              }
            }
          }
        }
      } catch (e) {
        // ignore
      }
    };

    // parse on mount
    parseHash();
    window.addEventListener('hashchange', parseHash);
    return () => window.removeEventListener('hashchange', parseHash);
  }, []);

  if (selectedCar) {
    return <CarDetailsPage car={selectedCar} onBack={() => setSelectedCar(null)} />;
  }

  return (
    <main ref={sectionRef} className="min-h-screen bg-black text-white py-20 px-6">
      <div className="container mx-auto">
        <header className={`mb-12 transition-all duration-700 text-center ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}>
          <h1 className="text-5xl font-bold mt-8">Our Premium Fleet</h1>

          {/* Subheading removed as requested. Search remains centered below the heading. */}
          <div className="mt-6 max-w-2xl mx-auto">
            <input
              aria-label="Search cars"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search by car name, brand, or category"
              className="w-full rounded-full px-6 py-3 bg-neutral-800 border border-neutral-700 placeholder-neutral-400 focus:outline-none focus:ring-2 focus:ring-white/20 transition text-base leading-normal"
            />
          </div>
        </header>

        {/* Tabs */}
        <div className="flex justify-center mb-8">
          <div className="inline-flex gap-4">
            {(['chauffeur','airport','self'] as const).map((t) => (
              <button
                key={t}
                onClick={() => setActiveTab(t)}
                className={`relative px-6 py-3 border rounded-md overflow-hidden ${activeTab===t? 'border-white bg-white/5' : 'border-neutral-700'}`}
              >
                <span className={`relative z-10 font-medium transition-colors ${activeTab===t ? 'text-white' : 'text-neutral-300'}`}>{t === 'chauffeur' ? 'Chauffeur Driven' : t === 'airport' ? 'Airport Pickup / Drop' : 'Self-Drive'}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Grid */}
        <div className="">
          {/* use a centered flex wrapper so 3 cards sit centered for each category */}
          <div className="flex flex-wrap justify-center gap-6">
            {filtered.map((car, idx) => (
              <article
                key={`${car.id}-${idx}`}
                className="bg-white rounded-lg overflow-hidden group cursor-pointer transition-all duration-700 hover:shadow-2xl hover:-translate-y-2 text-black max-w-[300px]"
                onClick={() => setSelectedCar(car)}
                style={{ transitionDelay: `${idx * 30}ms` }}
              >
                <div className="relative h-48 bg-neutral-100 overflow-hidden">
                  <img src={car.image} alt={car.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                </div>

                <div className="p-5">
                  <h3 className="text-base font-bold mb-1">{car.name}</h3>
                  <p className="text-xl font-bold mb-3">{car.price}</p>

                  <div className="flex items-center gap-4 text-sm text-neutral-600">
                    <div className="flex items-center gap-2"><Calendar size={14} /><span>{car.year}</span></div>
                    <div className="flex items-center gap-2"><Gauge size={14} /><span>{car.mileage}</span></div>
                    <div className="flex items-center gap-2"><Fuel size={14} /><span>{car.fuel}</span></div>
                  </div>

                  <div className="mt-5">
                    <button
                      onClick={(e) => { e.stopPropagation(); setSelectedCar(car); }}
                      className="bg-black text-white px-6 py-3 rounded-full text-sm transition-all hover:bg-white hover:text-black border-2 border-transparent hover:border-black hover:scale-105 w-full"
                    >
                      Book Now
                    </button>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}

export function CarDetailsPage({ car, onBack }: { car: Car; onBack?: () => void }) {
  const [dateFrom, setDateFrom] = useState('');
  const [timeFrom, setTimeFrom] = useState('');
  const [timePeriod, setTimePeriod] = useState<'AM' | 'PM'>('AM');
  const [name, setName] = useState('');
  const [mobile, setMobile] = useState('');
  const [email, setEmail] = useState('');

  const base = parseInt((car.price.replace(/[₹,]/g, '')) || '0', 10);
  const driverAllowance = 2000;
  const total = base + driverAllowance;
  return (
    <div className="min-h-screen bg-gradient-to-b from-neutral-100 to-neutral-50 text-black pt-20 pb-12 px-6">
      <div className="max-w-5xl mx-auto">

        {/* Centered card */}
        <button onClick={() => { if (onBack) onBack(); window.location.hash = '#cars'; }} className="mb-6 text-sm text-neutral-600 flex items-center gap-2"> <ChevronLeft size={16} /> Back</button>

        <div className="bg-white rounded-3xl shadow-2xl overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 p-6 lg:p-10 items-start">

            {/* LEFT: Car details */}
            <div className="space-y-6">
              <div>
                <h2 className="text-3xl lg:text-4xl font-extrabold tracking-tight">{car.name}</h2>
                <p className="mt-2 text-2xl font-bold text-black">{car.price}<span className="text-sm font-medium text-neutral-500"> /day</span></p>
              </div>

              <div className="w-full rounded-xl overflow-hidden shadow-sm">
                <img src={car.image} alt={car.name} className="w-full h-80 object-cover rounded-xl" />
              </div>

              <div className="pt-2">
                <h3 className="font-semibold mb-3">Please read</h3>
                <ul className="list-disc pl-5 text-neutral-600 space-y-2">
                  <li>Distance and time calculated from garage to garage.</li>
                  <li>Tolls, taxes, and parking charged as actuals.</li>
                  <li>Similar car may be provided if unavailable.</li>
                  <li>Images are for reference only.</li>
                  <li>Extra usage charged at the end of trip.</li>
                </ul>
              </div>

              {/* Packages removed as requested */}
            </div>

            {/* RIGHT: Booking form inside same card */}
            <aside className="w-full">
              <div className="bg-white">
                <h4 className="text-2xl font-semibold mb-4">Book Now</h4>

                {/* Selected package display removed */}

                <form
                  className="space-y-4"
                  onSubmit={(e) => {
                    e.preventDefault();
                    // build a concise message for WhatsApp
                    const timeDisplay = timeFrom ? `${timeFrom} ${timePeriod}` : '';
                    const msg = `Hello, I would like to rent ${car.name}${dateFrom ? ' on ' + dateFrom : ''}${timeDisplay ? ' at ' + timeDisplay : ''}. Name: ${name || '-'}, Mobile: ${mobile || '-'}, Email: ${email || '-'}.`;
                    const waNumber = '917975072712'; // +91 79750 72712
                    const url = `https://wa.me/${waNumber}?text=${encodeURIComponent(msg)}`;
                    // open WhatsApp in a new tab (works on mobile and desktop)
                    window.open(url, '_blank');
                  }}
                >
                  <div>
                    <label className="text-sm block mb-1">Date</label>
                    <input value={dateFrom} onChange={(e) => setDateFrom(e.target.value)} type="date" className="w-full rounded-lg border border-neutral-200 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-black/10" />
                  </div>

                  <div>
                    <label className="text-sm block mb-1">Time</label>
                    <div className="flex gap-3">
                      <input value={timeFrom} onChange={(e) => setTimeFrom(e.target.value)} type="time" className="flex-1 rounded-lg border border-neutral-200 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-black/10" />
                      <select value={timePeriod} onChange={(e) => setTimePeriod(e.target.value as 'AM' | 'PM')} className="rounded-lg border border-neutral-200 px-3 py-3 bg-white">
                        <option>AM</option>
                        <option>PM</option>
                      </select>
                    </div>
                  </div>

                  {/* Pickup Details removed */}

                  <div className="pt-2 border-t border-neutral-100" />

                  <div>
                    <label className="text-sm block mb-1">Name</label>
                    <input value={name} onChange={(e) => setName(e.target.value)} placeholder="Full name" className="w-full rounded-lg border border-neutral-200 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-black/10" />
                  </div>

                  <div>
                    <label className="text-sm block mb-1">Mobile Number</label>
                    <input value={mobile} onChange={(e) => setMobile(e.target.value)} placeholder="Mobile number" className="w-full rounded-lg border border-neutral-200 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-black/10" />
                  </div>

                  <div>
                    <label className="text-sm block mb-1">Email Address</label>
                    <input value={email} onChange={(e) => setEmail(e.target.value)} placeholder="name@domain.com" className="w-full rounded-lg border border-neutral-200 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-black/10" />
                  </div>

                  {/* Additional Kms / Hrs removed */}

                  {/* Notes textarea removed */}

                  <div className="mt-4 border-t pt-4">
                    <div className="flex items-center justify-between mb-3">
                      <div className="text-sm text-neutral-600">Estimated Total</div>
                      <div className="font-bold">₹{total.toLocaleString()}</div>
                    </div>
                    <button
                      type="submit"
                      disabled={!dateFrom || !timeFrom || !name || !mobile}
                      className="w-full bg-black text-white px-4 py-3 rounded-full disabled:opacity-50 hover:opacity-95"
                    >
                      Rent Now
                    </button>
                  </div>
                </form>
              </div>
            </aside>

          </div>
        </div>
      </div>
    </div>
  );
}
