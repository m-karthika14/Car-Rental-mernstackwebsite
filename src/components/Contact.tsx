import { MapPin, Phone, Clock, MessageCircle, Star } from 'lucide-react';
import Button from './Button';
import { useState, useEffect, useRef } from 'react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    mobile: '',
    email: '',
    message: '',
  });

  const [isVisible, setIsVisible] = useState(false);
  const headerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) setIsVisible(true); }, { threshold: 0.05 });
    if (headerRef.current) obs.observe(headerRef.current);
    return () => obs.disconnect();
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const waNumber = '917385766602';
    const msg = `Enquiry from website:\nName: ${formData.name || '-'}\nMobile: ${formData.mobile || '-'}\nEmail: ${formData.email || '-'}\nMessage: ${formData.message || '-'}\n`;
    const url = `https://wa.me/${waNumber}?text=${encodeURIComponent(msg)}`;
    window.open(url, '_blank');
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="bg-black min-h-screen pt-20" id="contact">
      <section className="py-24 px-6 max-w-7xl mx-auto">
        <div ref={headerRef} className={`mb-20 transition-all duration-700 text-center ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}>
          <div className="w-16 h-px bg-yellow-400 mx-auto mb-8" />
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 tracking-tight">
            Contact Us
          </h1>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto leading-relaxed">
            We are available 24/7. Get in touch to book your reliable self-drive car.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-24">
          <div className="animate-slideLeft">
            <h2 className="text-3xl font-bold text-white mb-8">Reach Out Connect</h2>

            <div className="space-y-6 mb-8">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-white/5 rounded-lg border border-white/10">
                  <Phone className="w-6 h-6 text-yellow-400" />
                </div>
                <div>
                  <h3 className="text-white font-medium mb-1">Phone</h3>
                  <p className="text-gray-400">Primary: +91 73857 66602</p>
                  <p className="text-gray-400">Alternate: +91 93738 57038</p>
                </div>
              </div>

              <a
                href="https://google.com/maps/place/PRIME+SELF+DRIVE+CAR+GOA+AIRPORT/data=!4m2!3m1!1s0x0:0x5cf10d7ada3f6336?sa=X&ved=1t:2428&hl=en-GB&ictx=111"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Open location in Google Maps"
                className="flex items-start gap-4 cursor-pointer no-underline"
              >
                <div className="p-3 bg-white/5 rounded-lg border border-white/10">
                  <MapPin className="w-6 h-6 text-yellow-400" />
                </div>
                <div>
                  <h3 className="text-white font-medium mb-1">Our Location</h3>
                  <p className="text-gray-400 max-w-sm">
                    Tita Maria Apartments, Shop No. 9, Opp. SBI, Mangor Hill, Vasco da Gama, Goa – 403802
                  </p>
                  <p className="text-yellow-400/80 text-sm mt-1 flex items-center gap-2">
                    <MapPin className="w-4 h-4 text-yellow-400" />
                    <span>1 km from Goa Airport & 1.5 km from Vasco Railway Station</span>
                  </p>
                </div>
              </a>

              <div className="flex items-start gap-4">
                <div className="p-3 bg-white/5 rounded-lg border border-white/10">
                  <Clock className="w-6 h-6 text-yellow-400" />
                </div>
                <div>
                  <h3 className="text-white font-medium mb-1">Operating Hours</h3>
                  <p className="text-gray-400">Open 24 Hours – 7 Days a Week</p>
                  <p className="text-gray-500 text-sm mt-1">Available anytime for booking, pickup, and support.</p>
                </div>
              </div>

              <div className="pt-6 border-t border-white/10 flex flex-col sm:flex-row gap-4">
                <a
                  href="https://wa.me/917385766602"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-green-600 hover:bg-green-700 text-white font-bold rounded-lg transition-colors duration-300"
                >
                  <MessageCircle className="w-5 h-5" />
                  WhatsApp Us
                </a>
                <a
                  href="https://g.page/r/CTZjP9p6DfFcEBM/review"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-white hover:bg-gray-200 text-black font-bold rounded-lg transition-colors duration-300"
                >
                  <Star className="w-5 h-5 text-yellow-500" />
                  Leave a Review
                </a>
              </div>
            </div>
          </div>

          <div className="animate-slideRight">
            <div className="bg-zinc-900 border border-white/10 rounded-2xl p-8 shadow-2xl">
              <h2 className="text-2xl font-bold text-white mb-6">Send Enquiry</h2>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-gray-300 text-sm font-medium mb-2">
                    Full Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-black border border-white/20 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-yellow-400 focus:ring-1 focus:ring-yellow-400 transition-all duration-300"
                    placeholder="Enter your full name"
                  />
                </div>

                <div>
                  <label htmlFor="mobile" className="block text-gray-300 text-sm font-medium mb-2">
                    Mobile Number
                  </label>
                  <input
                    type="tel"
                    id="mobile"
                    name="mobile"
                    value={formData.mobile}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-black border border-white/20 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-yellow-400 focus:ring-1 focus:ring-yellow-400 transition-all duration-300"
                    placeholder="+91 98765 43210"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-gray-300 text-sm font-medium mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="w-full px-4 py-3 bg-black border border-white/20 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-yellow-400 focus:ring-1 focus:ring-yellow-400 transition-all duration-300 resize-none"
                    placeholder="Tell us which car you want to book or your requirements..."
                  />
                </div>

                <Button className="w-full bg-yellow-400 text-black hover:bg-yellow-500 font-bold py-4" type="submit">SUBMIT VIA WHATSAPP</Button>
              </form>
            </div>
          </div>
        </div>

        {/* Google Maps iframe removed (invalid embed); location links are available above */}
      </section>
    </div>
  );
}
