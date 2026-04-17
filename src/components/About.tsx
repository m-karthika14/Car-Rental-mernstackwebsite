import { CheckCircle2 } from 'lucide-react';

export default function About() {
  return (
    <div className="bg-black min-h-screen pt-20" id="about">
      <section className="py-24 px-6 max-w-7xl mx-auto">
        <div className="text-center mb-20 animate-fadeIn">
          <div className="w-16 h-px bg-white/30 mx-auto mb-8" />
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 tracking-tight">
            Self Drive Car Rental near Goa Airport
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
            Looking for a budget-friendly self-drive car rental near Goa Airport or Vasco Railway Station? We provide a wide range of well-maintained cars that give you the freedom to travel at your own pace.
          </p>
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
