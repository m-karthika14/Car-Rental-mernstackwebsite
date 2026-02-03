import { ChevronLeft, Calendar, Gauge, Fuel } from 'lucide-react';
import { useState, useRef, useEffect } from 'react';

const curatedCollections: Record<string, Array<{id:number;name:string;price:string;image:string;year:string;mileage:string;fuel:string;}>> = {
  chauffeur: [
    {
      id: 101,
      name: 'Mercedes GLS 350',
      price: '₹20,000',
      image: 'https://images.pexels.com/photos/358070/pexels-photo-358070.jpeg?auto=compress&cs=tinysrgb&w=800',
      year: '2024',
      mileage: '80 Kms',
      fuel: 'Petrol'
    },
    {
      id: 102,
      name: 'Mercedes GLS 350',
      price: '₹20,000',
      image: 'https://images.pexels.com/photos/358070/pexels-photo-358070.jpeg?auto=compress&cs=tinysrgb&w=800',
      year: '2024',
      mileage: '8 Hr 80Kms',
      fuel: 'Petrol'
    },
    {
      id: 103,
      name: 'Audi A8',
      price: '₹22,000',
      image: 'https://images.pexels.com/photos/358070/pexels-photo-358070.jpeg?auto=compress&cs=tinysrgb&w=800',
      year: '2023',
      mileage: '70 Kms',
      fuel: 'Petrol'
    },
    {
      id: 104,
      name: 'Range Rover Vogue',
      price: '₹28,000',
      image: 'https://images.pexels.com/photos/358070/pexels-photo-358070.jpeg?auto=compress&cs=tinysrgb&w=800',
      year: '2024',
      mileage: '50 Kms',
      fuel: 'Diesel'
    },
    {
      id: 105,
      name: 'Volvo XC90',
      price: '₹18,000',
      image: 'https://images.pexels.com/photos/358070/pexels-photo-358070.jpeg?auto=compress&cs=tinysrgb&w=800',
      year: '2023',
      mileage: '90 Kms',
      fuel: 'Petrol'
    },
    {
      id: 106,
      name: 'Toyota Land Cruiser',
      price: '₹19,500',
      image: 'https://images.pexels.com/photos/358070/pexels-photo-358070.jpeg?auto=compress&cs=tinysrgb&w=800',
      year: '2024',
      mileage: '85 Kms',
      fuel: 'Diesel'
    }
  ],
  airport: [
    {
      id: 201,
      name: 'Honda Accord',
      price: '₹3,000',
      image: 'https://images.pexels.com/photos/210019/pexels-photo-210019.jpeg?auto=compress&cs=tinysrgb&w=800',
      year: '2023',
      mileage: '10 Kms',
      fuel: 'Petrol'
    },
    {
      id: 202,
      name: 'Toyota Camry',
      price: '₹3,200',
      image: 'https://images.pexels.com/photos/210019/pexels-photo-210019.jpeg?auto=compress&cs=tinysrgb&w=800',
      year: '2024',
      mileage: '8 Kms',
      fuel: 'Petrol'
    },
    {
      id: 203,
      name: 'Hyundai Sonata',
      price: '₹2,800',
      image: 'https://images.pexels.com/photos/210019/pexels-photo-210019.jpeg?auto=compress&cs=tinysrgb&w=800',
      year: '2023',
      mileage: '12 Kms',
      fuel: 'Petrol'
    },
    {
      id: 204,
      name: 'Skoda Superb',
      price: '₹3,500',
      image: 'https://images.pexels.com/photos/210019/pexels-photo-210019.jpeg?auto=compress&cs=tinysrgb&w=800',
      year: '2024',
      mileage: '9 Kms',
      fuel: 'Diesel'
    },
    {
      id: 205,
      name: 'Kia K5',
      price: '₹2,900',
      image: 'https://images.pexels.com/photos/210019/pexels-photo-210019.jpeg?auto=compress&cs=tinysrgb&w=800',
      year: '2023',
      mileage: '11 Kms',
      fuel: 'Petrol'
    },
    {
      id: 206,
      name: 'Nissan Altima',
      price: '₹2,700',
      image: 'https://images.pexels.com/photos/210019/pexels-photo-210019.jpeg?auto=compress&cs=tinysrgb&w=800',
      year: '2024',
      mileage: '7 Kms',
      fuel: 'Petrol'
    }
  ],
  self: [
    {
      id: 301,
      name: 'Mini Cooper',
      price: '₹1,500',
      image: 'https://images.pexels.com/photos/170811/pexels-photo-170811.jpeg?auto=compress&cs=tinysrgb&w=800',
      year: '2023',
      mileage: '5 Kms',
      fuel: 'Petrol'
    },
    {
      id: 302,
      name: 'Volkswagen Polo',
      price: '₹1,200',
      image: 'https://images.pexels.com/photos/170811/pexels-photo-170811.jpeg?auto=compress&cs=tinysrgb&w=800',
      year: '2022',
      mileage: '6 Kms',
      fuel: 'Petrol'
    },
    {
      id: 303,
      name: 'Ford Fiesta',
      price: '₹1,100',
      image: 'https://images.pexels.com/photos/170811/pexels-photo-170811.jpeg?auto=compress&cs=tinysrgb&w=800',
      year: '2023',
      mileage: '4 Kms',
      fuel: 'Petrol'
    },
    {
      id: 304,
      name: 'Honda Jazz',
      price: '₹1,300',
      image: 'https://images.pexels.com/photos/170811/pexels-photo-170811.jpeg?auto=compress&cs=tinysrgb&w=800',
      year: '2024',
      mileage: '3 Kms',
      fuel: 'Petrol'
    },
    {
      id: 305,
      name: 'Toyota Yaris',
      price: '₹1,400',
      image: 'https://images.pexels.com/photos/170811/pexels-photo-170811.jpeg?auto=compress&cs=tinysrgb&w=800',
      year: '2023',
      mileage: '2 Kms',
      fuel: 'Petrol'
    },
    {
      id: 306,
      name: 'Suzuki Swift',
      price: '₹1,250',
      image: 'https://images.pexels.com/photos/170811/pexels-photo-170811.jpeg?auto=compress&cs=tinysrgb&w=800',
      year: '2022',
      mileage: '5 Kms',
      fuel: 'Petrol'
    }
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
              {curatedCollections[selectedTab].slice(0, 6).map((car, index) => (
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
  // Expand to 12 cars by repeating the array if needed (reuse images as requested)
  const expanded: Car[] = Array.from({ length: 12 }, (_, i) => all[i % all.length]);

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
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 justify-center">
            {filtered.map((car, idx) => (
              <article
                key={`${car.id}-${idx}`}
                className="bg-white rounded-lg overflow-hidden group cursor-pointer transition-all duration-700 hover:shadow-2xl hover:-translate-y-2 text-black max-w-[300px] mx-auto"
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
  const [selectedPackage, setSelectedPackage] = useState('Standard – 8 Hr / 80 Kms');
  const [dateFrom, setDateFrom] = useState('');
  const [timeFrom, setTimeFrom] = useState('');
  const [addKms, setAddKms] = useState(0);
  const [addHrs, setAddHrs] = useState(0);
  const [name, setName] = useState('');
  const [mobile, setMobile] = useState('');
  const [email, setEmail] = useState('');
  const [pickup, setPickup] = useState('');
  const [drop, setDrop] = useState('');
  const [notes, setNotes] = useState('');

  const base = parseInt((car.price.replace(/[₹,]/g, '')) || '0', 10);
  const driverAllowance = 2000;
  const extraKm = 200 * addKms;
  const extraHr = 2000 * addHrs;
  const total = base + driverAllowance + extraKm + extraHr;

  return (
    <div className="min-h-screen bg-neutral-50 text-black py-12 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2">
          {/* back button - call onBack if present, then ensure hash goes to cars */}
          <button onClick={() => { if (onBack) onBack(); window.location.hash = '#cars'; }} className="mb-6 text-sm text-neutral-600 flex items-center gap-2"> <ChevronLeft size={16} /> Back</button>

          <div className="bg-white rounded-lg overflow-hidden shadow">
            <div className="p-6 border-b">
              <h2 className="text-3xl font-bold">{car.name}</h2>
              <p className="text-2xl font-bold mt-2">{car.price}</p>
            </div>

            {/* image gallery - single large image */}
            <div className="p-6">
              <div className="h-72 bg-neutral-100 overflow-hidden rounded">
                <img src={car.image} alt={car.name} className="w-full h-full object-cover" />
              </div>
            </div>

            {/* Info / Please read */}
            <div className="p-6 border-t">
              <h3 className="font-semibold mb-3">PLEASE READ</h3>
              <ul className="list-disc pl-5 text-neutral-600">
                <li>Distance and time calculated from garage to garage.</li>
                <li>Tolls, taxes, and parking charged as actuals.</li>
                <li>Similar car may be provided if unavailable.</li>
                <li>Images are for reference only.</li>
                <li>Extra usage charged at the end of trip.</li>
                <li>Refund & cancellation as per policy. <button className="text-indigo-600 underline ml-2">Read More</button></li>
              </ul>
            </div>

            {/* Package */}
            <div className="p-6 border-t">
              <h4 className="font-semibold mb-3">Packages</h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className={`p-4 border rounded ${selectedPackage.includes('Standard') ? 'border-black' : 'border-neutral-200'}`}>
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="font-semibold">Standard – 8 Hr / 80 Kms</div>
                      <div className="text-sm text-neutral-600">Seating: 5 • Luggage: 3 • Auto</div>
                    </div>
                    <div>
                      <button onClick={() => setSelectedPackage('Standard – 8 Hr / 80 Kms')} className="px-4 py-2 border rounded">Choose</button>
                    </div>
                  </div>
                </div>
                <div className={`p-4 border rounded ${selectedPackage.includes('Standard') ? '' : 'border-neutral-200'}`}>
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="font-semibold">Premium – 12 Hr / 150 Kms</div>
                      <div className="text-sm text-neutral-600">Seating: 5 • Luggage: 4 • Auto</div>
                    </div>
                    <div>
                      <button onClick={() => setSelectedPackage('Premium – 12 Hr / 150 Kms')} className="px-4 py-2 border rounded">Choose</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Pricing details & feedback */}
            <div className="p-6 border-t grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h5 className="font-semibold mb-2">Pricing Details</h5>
                <ul className="text-sm text-neutral-600">
                  <li>Driver Allowance: ₹2,000</li>
                  <li>Extra Km: ₹200</li>
                  <li>Extra Hr: ₹2,000</li>
                </ul>
              </div>

              <div>
                <h5 className="font-semibold mb-2">Feedback</h5>
                <div className="p-4 bg-neutral-100 rounded">
                  <p className="text-sm">“Nice experience”</p>
                  <div className="mt-2 text-xs text-neutral-600">— Arya</div>
                </div>
              </div>
            </div>

          </div>
        </div>

        {/* Booking sidebar */}
        <aside className="lg:col-span-1">
          <div className="sticky top-32 bg-white p-6 rounded-lg shadow">
            <h4 className="font-semibold text-lg mb-4">Book this car</h4>
            <div className="mb-4">
              <div className="text-sm text-neutral-600">Selected package</div>
              <div className="font-semibold mt-2">{selectedPackage}</div>
            </div>

            <div className="grid grid-cols-1 gap-3">
              <label className="text-sm">From Date</label>
              <input value={dateFrom} onChange={(e) => setDateFrom(e.target.value)} type="date" className="w-full rounded border px-3 py-2" />

              <label className="text-sm">From Time</label>
              <input value={timeFrom} onChange={(e) => setTimeFrom(e.target.value)} type="time" className="w-full rounded border px-3 py-2" />

              <label className="text-sm">Additional Kms</label>
              <div className="flex items-center gap-2">
                <button onClick={() => setAddKms(Math.max(0, addKms - 1))} className="px-3 py-1 border rounded">-</button>
                <div className="px-3">{addKms}</div>
                <button onClick={() => setAddKms(addKms + 1)} className="px-3 py-1 border rounded">+</button>
              </div>

              <label className="text-sm">Additional Hrs</label>
              <div className="flex items-center gap-2">
                <button onClick={() => setAddHrs(Math.max(0, addHrs - 1))} className="px-3 py-1 border rounded">-</button>
                <div className="px-3">{addHrs}</div>
                <button onClick={() => setAddHrs(addHrs + 1)} className="px-3 py-1 border rounded">+</button>
              </div>

              <label className="text-sm">Pickup</label>
              <input value={pickup} onChange={(e) => setPickup(e.target.value)} className="w-full rounded border px-3 py-2" />

              <label className="text-sm">Drop</label>
              <input value={drop} onChange={(e) => setDrop(e.target.value)} className="w-full rounded border px-3 py-2" />

              <label className="text-sm">Name</label>
              <input value={name} onChange={(e) => setName(e.target.value)} className="w-full rounded border px-3 py-2" />

              <label className="text-sm">Mobile</label>
              <input value={mobile} onChange={(e) => setMobile(e.target.value)} className="w-full rounded border px-3 py-2" />

              <label className="text-sm">Email</label>
              <input value={email} onChange={(e) => setEmail(e.target.value)} className="w-full rounded border px-3 py-2" />

              <label className="text-sm">Notes (optional)</label>
              <textarea value={notes} onChange={(e) => setNotes(e.target.value)} className="w-full rounded border px-3 py-2" />
            </div>

            <div className="mt-4 border-t pt-4">
              <div className="flex items-center justify-between mb-3">
                <div className="text-sm text-neutral-600">Estimated Total</div>
                <div className="font-bold">₹{total.toLocaleString()}</div>
              </div>
              <button
                onClick={() => {
                  // Minimal placeholder for payment flow
                  console.log('Proceed to pay', { car: car.name, dateFrom, timeFrom, addKms, addHrs, name, mobile, pickup, drop, notes });
                  alert('Proceed to payment – this is a demo flow.');
                }}
                disabled={!dateFrom || !timeFrom || !name || !mobile}
                className="w-full bg-black text-white px-4 py-3 rounded-full disabled:opacity-50"
              >
                Pay Now
              </button>
            </div>
          </div>
        </aside>

      </div>
    </div>
  );
}
