import { Award, Shield, Users, TrendingUp } from 'lucide-react';

export default function About() {
  return (
    <div className="bg-black min-h-screen pt-20">
      <section className="py-24 px-6 max-w-7xl mx-auto">
        <div className="text-center mb-20 animate-fadeIn">
          <div className="w-16 h-px bg-white/30 mx-auto mb-8" />
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 tracking-tight">
            About Us
          </h1>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto leading-relaxed">
            A trusted name in premium car rentals
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-24">
          <div className="animate-slideLeft">
            <div className="w-16 h-px bg-white/30 mb-6" />
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 leading-tight">
              Our Story
            </h2>
            <div className="space-y-4 text-gray-400 text-lg leading-relaxed">
              <p>
                For years, we've been trusted to deliver premium car rentals for every special journey.
                What started as a vision to redefine luxury transportation has grown into one of India's
                most respected premium car rental services.
              </p>
              <p>
                From self-drive to chauffeur-driven services, our focus has always been comfort,
                reliability, and class. Every vehicle in our fleet is meticulously maintained,
                and every journey is crafted with precision and care.
              </p>
              <p>
                We don't just rent cars—we create experiences. Whether it's a business meeting,
                a wedding celebration, or a weekend getaway, we ensure every moment is extraordinary.
              </p>
            </div>
          </div>

          <div className="relative animate-slideRight">
            <div className="relative overflow-hidden rounded-2xl group">
              <img
                src="https://images.pexels.com/photos/1719647/pexels-photo-1719647.jpeg?auto=compress&cs=tinysrgb&w=1920"
                alt="Luxury car"
                className="w-full h-[500px] object-cover group-hover:scale-110 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
            </div>
          </div>
        </div>

        <div className="mb-24">
          <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-4 animate-fadeIn">
            Why Choose Us
          </h2>
          <p className="text-gray-400 text-center mb-16 animate-fadeIn">
            Excellence in every detail
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: Award,
                title: 'Premium Fleet',
                description: 'Well-maintained luxury vehicles from the world\'s finest manufacturers',
              },
              {
                icon: Users,
                title: 'Professional Chauffeurs',
                description: 'Experienced, verified, and courteous drivers committed to your safety',
              },
              {
                icon: Shield,
                title: 'Transparent Pricing',
                description: 'No hidden charges, complete clarity in all our pricing structures',
              },
              {
                icon: TrendingUp,
                title: 'Reliable Service',
                description: 'On-time pickups and dependable support whenever you need us',
              },
            ].map((feature, index) => (
              <div
                key={index}
                className="group bg-zinc-900 border border-white/10 rounded-lg p-8 hover:border-white/30 transition-all duration-500 hover:transform hover:-translate-y-2 animate-slideUp"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="mb-6 inline-block p-4 bg-white/5 rounded-lg group-hover:bg-white/10 transition-colors duration-500">
                  <feature.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-white text-xl font-semibold mb-3">{feature.title}</h3>
                <p className="text-gray-400 leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="text-center py-16 animate-fadeIn">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Trusted Across India
            </h2>
            <p className="text-gray-400 text-lg leading-relaxed mb-8">
              Trusted by customers across Bangalore and beyond. Our reputation is built on
              years of exceptional service, attention to detail, and an unwavering commitment
              to luxury and reliability.
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-12">
              <div>
                <div className="text-4xl font-bold text-white mb-2">500+</div>
                <div className="text-gray-400">Happy Clients</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-white mb-2">50+</div>
                <div className="text-gray-400">Premium Cars</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-white mb-2">24/7</div>
                <div className="text-gray-400">Support</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-white mb-2">100%</div>
                <div className="text-gray-400">Satisfaction</div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
