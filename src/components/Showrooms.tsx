import { useEffect, useRef, useState } from 'react';

type RentalType = 'chauffeur' | 'airport' | 'self';

export default function Showrooms() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  // Booking form state
  const [type, setType] = useState<RentalType>('chauffeur');
  const [from, setFrom] = useState('');
  const [to, setTo] = useState('');
  const [pickupDate, setPickupDate] = useState('');
  const [pickupTime, setPickupTime] = useState('');
  const [dropTime, setDropTime] = useState('');
  const [returnDate, setReturnDate] = useState('');

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

  const handleBook = () => {
    // Placeholder action — integrate with booking flow as needed
    console.log('BOOK NOW', { type, from, to, pickupDate, pickupTime, dropTime, returnDate });
    alert('Book Now clicked — check console for form values');
  };

  return (
    <section ref={sectionRef} className="py-24 px-6 bg-white" id="booking">
      <div className="container mx-auto">
        <div className="max-w-5xl mx-auto">
          <div className={`transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <div className="bg-white rounded-3xl shadow-2xl p-10">
              {/* BIG HEADING */}
              <div className="text-center mb-10">
                <h2 className="text-5xl font-bold text-black">Book Your Ride</h2>
                <p className="text-neutral-600 mt-3">Self-drive or chauffeur-driven, always premium</p>
              </div>

              {/* STEP 1 — SELECT TYPE */}
              <div className="mb-8">
                <h3 className="text-xl font-semibold text-black mb-4">Select Rental Type</h3>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  {(
                    [
                      { key: 'chauffeur', label: 'Chauffeur-Driven' },
                      { key: 'airport', label: 'Airport Pickup / Drop' },
                      { key: 'self', label: 'Self-Drive' }
                    ] as const
                  ).map((opt) => (
                    <button
                      key={opt.key}
                      type="button"
                      onClick={() => setType(opt.key as RentalType)}
                      aria-pressed={type === opt.key}
                      className={`flex items-center justify-center p-6 rounded-lg border transition-colors duration-200 ease-out text-center font-medium shadow-sm focus:outline-none focus-visible:ring-2 focus-visible:ring-black
                        ${type === opt.key ? 'bg-black text-white border-black shadow-md' : 'bg-white text-black border-neutral-200 hover:shadow-md hover:border-neutral-300'}`}
                    >
                      <span className="text-lg">{opt.label}</span>
                    </button>
                  ))}
                </div>
              </div>

              {/* STEP 2 — BOOKING DETAILS FORM */}
              <div className="mb-8 bg-white p-6 rounded-lg border border-neutral-200 shadow-sm">
                <h4 className="text-lg font-semibold text-black mb-4">Booking Details</h4>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                  <div>
                    <label className="block text-sm text-neutral-600 mb-2">FROM</label>
                    <input
                      value={from}
                      onChange={(e) => setFrom(e.target.value)}
                      placeholder={type === 'airport' ? 'BLR (Airport selected)' : 'Enter Pickup City'}
                      className="w-full border border-neutral-200 rounded-md px-4 py-3 focus:outline-none focus:ring-2 focus:ring-black"
                      disabled={type === 'airport'}
                    />
                  </div>

                  <div>
                    <label className="block text-sm text-neutral-600 mb-2">TO</label>
                    <input
                      value={to}
                      onChange={(e) => setTo(e.target.value)}
                      placeholder={type === 'airport' ? 'Enter City Address' : 'Enter Drop City'}
                      className="w-full border border-neutral-200 rounded-md px-4 py-3 focus:outline-none focus:ring-2 focus:ring-black"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
                  <div>
                    <label className="block text-sm text-neutral-600 mb-2">PICK UP DATE</label>
                    <input type="date" value={pickupDate} onChange={(e) => setPickupDate(e.target.value)} className="w-full border border-neutral-200 rounded-md px-4 py-3" />
                  </div>
                  <div>
                    <label className="block text-sm text-neutral-600 mb-2">PICK UP TIME</label>
                    <input type="time" value={pickupTime} onChange={(e) => setPickupTime(e.target.value)} className="w-full border border-neutral-200 rounded-md px-4 py-3" />
                  </div>

                  {type === 'self' ? (
                    <div>
                      <label className="block text-sm text-neutral-600 mb-2">RETURN DATE</label>
                      <input type="date" value={returnDate} onChange={(e) => setReturnDate(e.target.value)} className="w-full border border-neutral-200 rounded-md px-4 py-3" />
                    </div>
                  ) : (
                    <div>
                      <label className="block text-sm text-neutral-600 mb-2">DROP TIME</label>
                      <input type="time" value={dropTime} onChange={(e) => setDropTime(e.target.value)} className="w-full border border-neutral-200 rounded-md px-4 py-3" />
                    </div>
                  )}
                </div>

                {/* explanatory line removed as requested */}
              </div>

              {/* CTA */}
              <div className="mt-6">
                <div className="md:static fixed left-0 right-0 bottom-4 px-6 md:px-0">
                  <div className="max-w-2xl mx-auto">
                    <button
                      onClick={handleBook}
                      className="w-full md:w-auto mx-auto block bg-black text-white rounded-full px-8 py-4 text-lg font-semibold transition-all hover:bg-white hover:text-black border-2 border-transparent hover:border-black"
                    >
                      BOOK NOW
                    </button>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
