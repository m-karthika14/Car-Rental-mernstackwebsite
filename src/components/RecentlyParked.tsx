import { ChevronLeft, Phone, MessageCircle } from 'lucide-react';
import { useState, useRef, useEffect } from 'react';

type Car = { id: number; name: string; price: string; image: string; year: string; category: string; gallery?: string[]; };

const allCars: Car[] = [
  { 
    id: 401, name: 'Swift Manual', price: '₹1200', year: 'Hatch', category: 'Hatchbacks',
    image: 'https://i.postimg.cc/B60R1QGb/Whats-App-Image-2026-04-12-at-18-43-27.jpg',
    gallery: [
      'https://i.postimg.cc/B60R1QGb/Whats-App-Image-2026-04-12-at-18-43-27.jpg',
      'https://i.postimg.cc/gJW16kPZ/Whats-App-Image-2026-04-12-at-18-43-28.jpg',
      'https://i.postimg.cc/Tw6BWYXW/Whats-App-Image-2026-04-12-at-18-43-28-(1).jpg'
    ]
  },
  { 
    id: 402, name: 'Swift Automatic', price: '₹1400', year: 'Hatch', category: 'Hatchbacks',
    image: 'https://i.postimg.cc/KjmJrJfs/Whats-App-Image-2026-04-12-at-18-42-14.jpg',
    gallery: [
      'https://i.postimg.cc/KjmJrJfs/Whats-App-Image-2026-04-12-at-18-42-14.jpg',
      'https://i.postimg.cc/bJxmtKxV/Whats-App-Image-2026-04-12-at-18-42-14-(1).jpg',
      'https://i.postimg.cc/mkT8N8j5/Whats-App-Image-2026-04-12-at-18-42-14-(2).jpg'
    ]
  },
  { 
    id: 403, name: 'Baleno Manual', price: '₹1300', year: 'Hatch', category: 'Hatchbacks',
    image: 'https://i.postimg.cc/6QD3FPG9/b1.jpg',
    gallery: [
      'https://i.postimg.cc/6QD3FPG9/b1.jpg',
      'https://i.postimg.cc/YSJ9TPm6/b2.jpg',
      'https://i.postimg.cc/k5k4LHtW/b3.jpg'
    ]
  },
  { 
    id: 404, name: 'Baleno Automatic', price: '₹1400', year: 'Hatch', category: 'Hatchbacks',
    image: 'https://i.postimg.cc/sx3VrCfj/ba1.jpg',
    gallery: [
      'https://i.postimg.cc/sx3VrCfj/ba1.jpg',
      'https://i.postimg.cc/mkVTZphj/ba2.jpg',
      'https://i.postimg.cc/NFbQGCLk/ba3.jpg',
      'https://i.postimg.cc/C5JwMrdj/ba4.jpg'
    ]
  },
  { 
    id: 405, name: 'New i20 Manual', price: '₹1400', year: 'Hatch', category: 'Hatchbacks',
    image: 'https://i.postimg.cc/4dxGGPPd/202.jpg',
    gallery: [
      'https://i.postimg.cc/4dxGGPPd/202.jpg',
      'https://i.postimg.cc/HxkmmzzJ/203.jpg',
      'https://i.postimg.cc/yd8KKjjS/i201.jpg'
    ]
  },
  { 
    id: 406, name: 'i20 Auto w/ Sunroof', price: '₹1600', year: 'Hatch', category: 'Hatchbacks',
    image: 'https://i.postimg.cc/xTv9KXX1/i20m.jpg',
    gallery: [
      'https://i.postimg.cc/xTv9KXX1/i20m.jpg',
      'https://i.postimg.cc/NjbYzZ8D/i20m-(2).jpg'
    ]
  },

  { 
    id: 407, name: 'New Creta Manual', price: '₹2900', year: 'SUV', category: 'SUVs',
    image: 'https://i.postimg.cc/G2WX8bTB/cr1.jpg',
    gallery: [
      'https://i.postimg.cc/G2WX8bTB/cr1.jpg',
      'https://i.postimg.cc/d1b5kJZC/cr2.jpg'
    ]
  },
  { 
    id: 408, name: 'Creta Auto w/ Sunroof', price: '₹3300', year: 'SUV', category: 'SUVs',
    image: 'https://i.postimg.cc/MKp8j9Jj/c1.jpg',
    gallery: [
      'https://i.postimg.cc/MKp8j9Jj/c1.jpg',
      'https://i.postimg.cc/ZK5hywzr/c2.jpg',
      'https://i.postimg.cc/X7Y0ys6f/c3.jpg'
    ]
  },
  { 
    id: 409, name: 'Thar Manual', price: '₹2800', year: 'SUV', category: 'SUVs',
    image: 'https://i.postimg.cc/Bb1nWNZ1/tharman.jpg',
    gallery: [
      'https://i.postimg.cc/Bb1nWNZ1/tharman.jpg',
      'https://i.postimg.cc/kGtgrwMx/tharman2.jpg',
      'https://i.postimg.cc/j2JSVvqH/tharman3.jpg'
    ]
  },
  { 
    id: 410, name: 'Thar Auto Convertible', price: '₹3300', year: 'SUV', category: 'SUVs',
    image: 'https://i.postimg.cc/6pz8PTYf/Whats-App-Image-2026-04-12-at-18-48-57.jpg',
    gallery: [
      'https://i.postimg.cc/6pz8PTYf/Whats-App-Image-2026-04-12-at-18-48-57.jpg',
      'https://i.postimg.cc/QdjBSck4/Whats-App-Image-2026-04-12-at-18-48-57-(1).jpg',
      'https://i.postimg.cc/Vk4Jh5DF/Whats-App-Image-2026-04-12-at-18-48-58.jpg',
      'https://i.postimg.cc/g2Gw43q7/Whats-App-Image-2026-04-12-at-18-48-58-(1).jpg'
    ]
  },
  { 
    id: 411, name: 'Fortuner', price: '₹6300', year: 'SUV', category: 'SUVs',
    image: 'https://i.postimg.cc/c1KQPqg5/Whats-App-Image-2026-04-12-at-18-41-04.jpg',
    gallery: [
      'https://i.postimg.cc/c1KQPqg5/Whats-App-Image-2026-04-12-at-18-41-04.jpg',
      'https://i.postimg.cc/ZY9rXkBH/Whats-App-Image-2026-04-12-at-18-41-04-(1).jpg',
      'https://i.postimg.cc/nVsvN8j3/Whats-App-Image-2026-04-12-at-18-41-04-(2).jpg',
      'https://i.postimg.cc/zDLn4mb2/Whats-App-Image-2026-04-12-at-18-41-05.jpg'
    ]
  },

  { 
    id: 412, name: 'Kia Carens (Manual)', price: '₹2300', year: '7-Seat', category: '7-Seaters',
    image: 'https://i.postimg.cc/TPGLV8dW/Whats-App-Image-2026-04-16-at-20-19-48-(1).jpg',
    gallery: [
      'https://i.postimg.cc/TPGLV8dW/Whats-App-Image-2026-04-16-at-20-19-48-(1).jpg',
      'https://i.postimg.cc/8CDJR8pf/Whats-App-Image-2026-04-16-at-20-19-49.jpg',
      'https://i.postimg.cc/fbZtc4zt/Whats-App-Image-2026-04-16-at-20-19-49-(1).jpg'
    ]
  },
  { 
    id: 413, name: 'New Ertiga', price: '₹2200', year: '7-Seat', category: '7-Seaters',
    image: 'https://i.postimg.cc/G3NCKDGn/smthg1.jpg',
    gallery: [
      'https://i.postimg.cc/G3NCKDGn/smthg1.jpg',
      'https://i.postimg.cc/ncDtPL1b/stmh3.jpg',
      'https://i.postimg.cc/X7C0zvkm/smthg4.jpg',
      'https://i.postimg.cc/9F7jnfY6/smthg5.jpg',
      'https://i.postimg.cc/QxTryMqZ/smthg6.jpg'
    ]
  },
  { 
    id: 414, name: 'Innova Crysta Manual', price: '₹3000', year: '7-Seat', category: '7-Seaters',
    image: 'https://i.postimg.cc/SxXLjbZ1/tic4.jpg',
    gallery: [
      'https://i.postimg.cc/SxXLjbZ1/tic4.jpg',
      'https://i.postimg.cc/RZ31qxPD/tic5.jpg',
      'https://i.postimg.cc/CxZCdpPV/tic6.jpg'
    ]
  },
  { 
    id: 415, name: 'Innova Crysta Auto', price: '₹3300', year: '7-Seat', category: '7-Seaters',
    image: 'https://i.postimg.cc/3xyjWQLB/tic.jpg',
    gallery: [
      'https://i.postimg.cc/3xyjWQLB/tic.jpg',
      'https://i.postimg.cc/nhsKMfd3/tic2.jpg',
      'https://i.postimg.cc/t41d7Grr/tic3.jpg'
    ]
  },
  { 
    id: 416, name: 'Innova Hycross Auto', price: '₹3500', year: '7-Seat', category: '7-Seaters',
    image: 'https://i.postimg.cc/43zvGbdS/TIH1.jpg',
    gallery: [
      'https://i.postimg.cc/43zvGbdS/TIH1.jpg',
      'https://i.postimg.cc/V6mqkr0y/TIH2.jpg',
      'https://i.postimg.cc/XJ4fYGBS/TIH3.jpg'
    ]
  },
  {
    id: 417,
    name: 'Thar Roxx Auto with Sunroof',
    price: '₹5000',
    year: 'SUV',
    category: 'SUVs',
    image: 'https://i.postimg.cc/y8jVcpn2/thar1.jpg',
    gallery: [
      'https://i.postimg.cc/y8jVcpn2/thar1.jpg',
      'https://i.postimg.cc/dV1fNWwx/thar2.jpg',
      'https://i.postimg.cc/q7654zt8/thar3.jpg',
      'https://i.postimg.cc/2649LM7Q/thar4.jpg'
    ]
  },
  {
    id: 418,
    name: 'Alcazar automatic sunroof',
    price: '₹3500',
    year: '7-Seat',
    category: '7-Seaters',
    image: 'https://i.postimg.cc/B6kDsnKy/al1.jpg',
    gallery: [
      'https://i.postimg.cc/B6kDsnKy/al1.jpg',
      'https://i.postimg.cc/kXr8pD9t/al2.jpg',
      'https://i.postimg.cc/52bzfGXW/al3.jpg',
      'https://i.postimg.cc/yNNSZZh9/al4.jpg'
    ]
  },
  {
    id: 419,
    name: 'Fronx Automatic',
    price: '₹1800',
    year: 'Hatch',
    category: 'Hatchbacks',
    image: 'https://i.postimg.cc/PJnx2pD0/Whats-App-Image-2026-04-18-at-8-27-42-PM.jpg',
    gallery: [
      'https://i.postimg.cc/PJnx2pD0/Whats-App-Image-2026-04-18-at-8-27-42-PM.jpg',
      'https://i.postimg.cc/TPhpwXGQ/Whats-App-Image-2026-04-18-at-8-27-42-PM-(1).jpg',
      'https://i.postimg.cc/598jjgdy/Whats-App-Image-2026-04-18-at-8-27-43-PM-(1).jpg',
      'https://i.postimg.cc/TY9wJP37/Whats-App-Image-2026-04-18-at-8-27-43-PM.jpg'
    ]
  },
  {
    id: 420,
    name: 'Mercedes C 300',
    price: '₹25000',
    year: 'Sedan',
    category: 'Luxury',
    image: 'https://i.postimg.cc/Dw9tWrK7/Whats-App-Image-2026-04-18-at-8-27-36-PM.jpg',
    gallery: [
      'https://i.postimg.cc/Dw9tWrK7/Whats-App-Image-2026-04-18-at-8-27-36-PM.jpg',
      'https://i.postimg.cc/63XJPdHd/Whats-App-Image-2026-04-18-at-8-27-36-PM-(1).jpg',
      'https://i.postimg.cc/C5xtyJbJ/Whats-App-Image-2026-04-18-at-8-27-37-PM.jpg'
    ]
  },
  {
    id: 421,
    name: 'Mini Cooper convertible',
    price: '₹1600',
    year: 'Hatch',
    category: 'Hatchbacks',
    image: 'https://i.postimg.cc/SK723GS0/mini2.jpg',
    gallery: [
      'https://i.postimg.cc/SK723GS0/mini2.jpg',
      'https://i.postimg.cc/vBb9ZNq6/mini.jpg',
      'https://i.postimg.cc/HkbV8t70/mini3.jpg'
    ]
  },
  {
    id: 422,
    name: 'Audi A3 convertible',
    price: '₹25000',
    year: 'Convertible',
    category: 'Luxury',
    image: 'https://i.postimg.cc/9QHf2qNr/audi2.jpg',
    gallery: [
      'https://i.postimg.cc/9QHf2qNr/audi2.jpg',
      'https://i.postimg.cc/v8jBPKrT/audi.jpg'
    ]
  },
];

export default function RecentlyParked() {

  return (
    <section className="py-24 px-6 bg-neutral-50 mt-[2.5cm]" id="collection">
      <div className="container mx-auto">
        <div className="flex flex-col mb-12 items-center text-center">
          <div className="w-16 h-px bg-yellow-400 mx-auto mb-8" />
          <h2 className="text-4xl md:text-5xl font-bold text-black mb-4">Self Drive Cars near Goa Airport</h2>
          <p className="text-gray-600 font-medium">Note: All prices are per day. Minimum 3-day booking required for new brand cars.</p>
        </div>

        <div>
          <div className="flex justify-center">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-[1200px] w-full">
              {allCars.map((car) => (
                <div key={car.id} className="bg-white rounded-lg overflow-hidden group hover:shadow-2xl hover:-translate-y-2">
                  <div className="relative h-64 bg-neutral-100 overflow-hidden cursor-pointer" onClick={() => { window.location.hash = `#cars?id=${car.id}`; }}>
                    <img src={car.image} alt={car.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                    <span className="absolute top-4 right-4 bg-white/90 backdrop-blur text-black text-xs font-bold px-3 py-1 rounded-full">{car.category}</span>
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-black mb-2 group-hover:text-neutral-600 transition-colors cursor-pointer" onClick={() => { window.location.hash = `#cars?id=${car.id}`; }}>{car.name}</h3>
                    <p className="text-2xl font-bold text-black mb-4">{car.price} <span className="text-sm font-medium text-neutral-500">/day</span></p>
                    <div className="mt-6 flex gap-3">
                      <a href="tel:+917385766602" className="flex-1 flex justify-center items-center gap-2 bg-black text-white px-4 py-3 rounded-md text-sm transition-all hover:bg-neutral-800"><Phone size={16} /> Call Now</a>
                      <a href={`https://wa.me/917385766602?text=${encodeURIComponent(`Hello, I would like to book the ${car.name} at ${car.price}/day.`)}`} target="_blank" rel="noopener noreferrer" className="flex-1 flex justify-center items-center gap-2 bg-green-600 text-white px-4 py-3 rounded-md text-sm transition-all hover:bg-green-700"><MessageCircle size={16} /> WhatsApp</a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="flex justify-center mt-12">
          <a href="#cars" className="group relative px-8 py-4 border-2 border-black rounded-md overflow-hidden bg-black text-white hover:bg-transparent hover:text-black transition-colors duration-300 font-bold tracking-wide">
            View All Cars
          </a>
        </div>
      </div>
    </section>
  );
}

export function CarsPage() {
  const [query, setQuery] = useState('');
  const [selectedCar, setSelectedCar] = useState<Car | null>(null);
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) setIsVisible(true); }, { threshold: 0.05 });
    if (sectionRef.current) obs.observe(sectionRef.current);
    return () => obs.disconnect();
  }, []);

  const filtered = allCars.filter(c => (c.name + ' ' + c.category).toLowerCase().includes(query.toLowerCase()));

  useEffect(() => {
    const parseHash = () => {
      try {
        const h = window.location.hash || '';
        const [path, q] = h.split('?');
        if (path === '#cars' && q) {
          const params = new URLSearchParams(q);
          const id = params.get('id');
          if (id) {
            const found = allCars.find(c => c.id === parseInt(id, 10));
            if (found) setSelectedCar(found);
          }
        } else if (path !== '#cars') {
           setSelectedCar(null);
        }
      } catch (e) { /* ignore */ }
    };
    parseHash();
    window.addEventListener('hashchange', parseHash);
    return () => window.removeEventListener('hashchange', parseHash);
  }, []);

  if (selectedCar) {
    return <CarDetailsPage car={selectedCar} onBack={() => setSelectedCar(null)} />;
  }

  return (
    <main ref={sectionRef} className="min-h-screen bg-black text-white py-20 px-6 mt-[2.5cm]">
      <div className="container mx-auto">
        <header className={`mb-12 transition-all duration-700 text-center ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}>
          <div className="w-16 h-px bg-yellow-400 mx-auto mb-8" />
          <h1 className="text-5xl md:text-6xl font-bold mt-8 mb-4">Self Drive Car Rental near Goa Airport</h1>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto leading-relaxed mb-6">Explore our well-maintained self-drive cars near Vasco Station & Goa Airport. New cars require a minimum 3-day booking.</p>
          <div className="max-w-2xl mx-auto">
            <input aria-label="Search cars" value={query} onChange={(e) => setQuery(e.target.value)} placeholder="Search by car name or category (e.g. SUV, Hatch)" className="w-full rounded-full px-6 py-3 bg-neutral-800 border border-neutral-700 placeholder-neutral-400 focus:outline-none focus:ring-2 focus:ring-white/20 transition text-base" />
          </div>
        </header>

        <div className="flex flex-wrap justify-center gap-6">
          {filtered.map((car, idx) => (
            <article key={`${car.id}-${idx}`} className="bg-white rounded-lg overflow-hidden group transition-all duration-700 hover:shadow-2xl hover:-translate-y-2 text-black max-w-[320px] w-full" style={{ transitionDelay: `${idx * 20}ms` }}>
              <div className="relative h-48 bg-neutral-100 overflow-hidden cursor-pointer" onClick={() => setSelectedCar(car)}>
                <img src={car.image} alt={car.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                <span className="absolute top-3 right-3 bg-black/80 backdrop-blur text-white text-[10px] uppercase tracking-wider font-bold px-2 py-1 rounded">{car.category}</span>
              </div>
              <div className="p-5">
                <h3 className="text-lg font-bold mb-1 cursor-pointer" onClick={() => setSelectedCar(car)}>{car.name}</h3>
                <p className="text-xl font-bold mb-5">{car.price} <span className="text-sm font-medium text-neutral-500">/day</span></p>
                <div className="flex gap-2">
                  <a href="tel:+917385766602" className="flex-1 flex justify-center items-center gap-1.5 bg-black text-white py-2.5 rounded-md text-sm transition-all hover:bg-neutral-800"><Phone size={14} /> Call</a>
                  <a href={`https://wa.me/917385766602?text=${encodeURIComponent(`Hello, I want to rent the ${car.name}.`)}`} target="_blank" rel="noopener noreferrer" className="flex-1 flex justify-center items-center gap-1.5 bg-green-600 text-white py-2.5 rounded-md text-sm transition-all hover:bg-green-700"><MessageCircle size={14} /> WhatsApp</a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </main>
  );
}

export function CarDetailsPage({ car, onBack }: { car: Car; onBack?: () => void }) {
  const [dateFrom, setDateFrom] = useState('');
  const [timeFrom, setTimeFrom] = useState('');
  const [name, setName] = useState('');
  const [mobile, setMobile] = useState('');
  const [mainImage, setMainImage] = useState(car.image);

  useEffect(() => {
    setMainImage(car.image);
  }, [car.image]);

  const imageList = car.gallery && car.gallery.length > 0 ? car.gallery : [car.image];

  return (
    <div className="min-h-screen bg-gradient-to-b from-neutral-100 to-neutral-50 text-black pt-20 pb-12 px-6">
      <div className="max-w-5xl mx-auto">
        <div className="bg-white rounded-3xl shadow-2xl overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 p-6 lg:p-10 items-start">
            <div className="space-y-6">
              <div>
                <span className="bg-black text-white text-xs px-2 py-1 rounded inline-block mb-3 uppercase tracking-wider">{car.category}</span>
                <h2 className="text-3xl lg:text-4xl font-extrabold tracking-tight">{car.name}</h2>
                <p className="mt-2 text-2xl font-bold text-black">{car.price}<span className="text-sm font-medium text-neutral-500"> /day</span></p>
                <p className="text-sm text-neutral-600 mt-2 font-medium bg-neutral-100 inline-block px-3 py-1 rounded-full">Minimum 3-day booking required for new cars.</p>
              </div>

              <div className="w-full rounded-xl overflow-hidden shadow-sm flex flex-col gap-4">
                <img src={mainImage} alt={car.name} className="w-full h-[300px] object-cover rounded-xl transition-all duration-300" />

                {imageList.length > 1 && (
                  <div className="flex gap-2 overflow-x-auto pb-2">
                    {imageList.map((imgUrl, idx) => (
                      <button key={idx} onClick={() => setMainImage(imgUrl)} className={`shrink-0 border-2 rounded-lg overflow-hidden w-20 h-20 transition-all ${mainImage === imgUrl ? 'border-black' : 'border-transparent hover:border-neutral-300'}`}>
                        <img src={imgUrl} alt={`${car.name} view ${idx + 1}`} className="w-full h-full object-cover" />
                      </button>
                    ))}
                  </div>
                )}
              </div>

              <div className="pt-4 border-t">
                <h3 className="font-bold text-xl mb-4">Car Rental Rules & Guidelines</h3>
                <ul className="list-inside space-y-3 text-neutral-700">
                  <li className="flex gap-2"><span className="text-red-500 font-bold shrink-0">!</span> <span>Vehicles are <strong>not allowed outside Goa</strong> as per RTO regulations. Any violations will result in fines and additional charges.</span></li>
                  <li className="flex gap-2"><span className="text-red-500 font-bold shrink-0">!</span> <span>In case of any <strong>damage to the vehicle</strong>, repair costs must be paid by the customer, along with rental charges for the duration of repair.</span></li>
                  <li className="flex gap-2"><span className="text-red-500 font-bold shrink-0">!</span> <span>Driving on <strong>Goa beaches is strictly prohibited</strong> and considered an offense.</span></li>
                  <li className="flex gap-2"><span className="text-red-500 font-bold shrink-0">!</span> <span>Always park in <strong>designated parking areas</strong> to avoid damage and inconvenience.</span></li>
                  <li className="flex gap-2"><span className="text-red-500 font-bold shrink-0">!</span> <span>Any <strong>third-party damages or accidents</strong> must be covered by the customer.</span></li>
                </ul>
              </div>
            </div>

            <aside className="w-full h-full">
              <div className="bg-neutral-50 rounded-2xl p-6 border border-neutral-100 shadow-inner">
                <h4 className="text-2xl font-bold mb-6">Reserve {car.name}</h4>
                <form
                  className="space-y-4"
                  onSubmit={(e) => {
                    e.preventDefault();
                    const msg = `Hello, I want to book ${car.name}. Dates: ${dateFrom} at ${timeFrom}. Name: ${name}, Mobile: ${mobile}. I agree to the min. 3-day rule.`;
                    window.open(`https://wa.me/917385766602?text=${encodeURIComponent(msg)}`, '_blank');
                  }}
                >
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="text-xs font-bold text-neutral-500 uppercase tracking-wider mb-1 block">Pick-up Date</label>
                      <input value={dateFrom} onChange={(e) => setDateFrom(e.target.value)} type="date" className="w-full rounded-lg border-none px-4 py-3 bg-white shadow-sm focus:outline-none focus:ring-2 focus:ring-black" required />
                    </div>
                    <div>
                      <label className="text-xs font-bold text-neutral-500 uppercase tracking-wider mb-1 block">Time</label>
                      <input value={timeFrom} onChange={(e) => setTimeFrom(e.target.value)} type="time" className="w-full rounded-lg border-none px-4 py-3 bg-white shadow-sm focus:outline-none focus:ring-2 focus:ring-black" required />
                    </div>
                  </div>

                  <div>
                    <label className="text-xs font-bold text-neutral-500 uppercase tracking-wider mb-1 block">Full Name</label>
                    <input value={name} onChange={(e) => setName(e.target.value)} placeholder="Enter your name" className="w-full rounded-lg border-none px-4 py-3 bg-white shadow-sm focus:outline-none focus:ring-2 focus:ring-black" required />
                  </div>

                  <div>
                    <label className="text-xs font-bold text-neutral-500 uppercase tracking-wider mb-1 block">Mobile Number</label>
                    <input value={mobile} onChange={(e) => setMobile(e.target.value)} placeholder="WhatsApp number" className="w-full rounded-lg border-none px-4 py-3 bg-white shadow-sm focus:outline-none focus:ring-2 focus:ring-black" required />
                  </div>

                  <div className="pt-6 mt-6 border-t border-neutral-200">
                    <div className="flex flex-col gap-3">
                      <button type="submit" className="w-full flex justify-center items-center gap-2 bg-green-600 text-white px-4 py-4 rounded-xl font-bold text-lg hover:bg-green-700 transition shadow-lg shadow-green-600/30">
                        <MessageCircle size={20} /> Book via WhatsApp
                      </button>
                      <a href="tel:+917385766602" className="w-full flex justify-center items-center gap-2 bg-black text-white px-4 py-4 rounded-xl font-bold hover:bg-neutral-800 transition">
                        <Phone size={20} /> Call Now
                      </a>
                    </div>
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
