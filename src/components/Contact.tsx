import { MapPin, Phone, Mail, Clock, MessageCircle } from 'lucide-react';
import Button from './Button';
import { useState } from 'react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    mobile: '',
    email: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Open WhatsApp with prefilled message to +91 79750 72712
    const waNumber = '917975072712';
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
    <div className="bg-black min-h-screen pt-20">
      <section className="py-24 px-6 max-w-7xl mx-auto">
        <div className="text-center mb-20 animate-fadeIn">
          <div className="w-16 h-px bg-white/30 mx-auto mb-8" />
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 tracking-tight">
            Contact Us
          </h1>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto leading-relaxed">
            We're here to help you book the perfect ride
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-24">
          <div className="animate-slideLeft">
            <h2 className="text-3xl font-bold text-white mb-8">Get in Touch</h2>

            <div className="space-y-6 mb-8">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-white/5 rounded-lg">
                  <Phone className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-white font-medium mb-1">Phone</h3>
                  <p className="text-gray-400">+91 98765 43210</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="p-3 bg-white/5 rounded-lg">
                  <Mail className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-white font-medium mb-1">Email</h3>
                  <p className="text-gray-400">info@luxedrive.com</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="p-3 bg-white/5 rounded-lg">
                  <MapPin className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-white font-medium mb-1">Service Area</h3>
                  <p className="text-gray-400">Bangalore, India</p>
                  <p className="text-gray-500 text-sm mt-1">More cities coming soon</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="p-3 bg-white/5 rounded-lg">
                  <Clock className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-white font-medium mb-1">Business Hours</h3>
                  <p className="text-gray-400">24/7 Booking Support</p>
                  <p className="text-gray-500 text-sm mt-1">Office: Mon-Sat, 9:00 AM - 8:00 PM</p>
                </div>
              </div>
            </div>

              <div className="pt-6 border-t border-white/10">
              <h3 className="text-white font-medium mb-4">Quick Contact</h3>
              <a
                href="https://wa.me/917975072712"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 bg-green-600 hover:bg-green-700 text-white rounded-lg transition-colors duration-300"
              >
                <MessageCircle className="w-5 h-5" />
                WhatsApp Us
              </a>
            </div>
          </div>

          <div className="animate-slideRight">
            <div className="bg-zinc-900 border border-white/10 rounded-2xl p-8">
              <h2 className="text-2xl font-bold text-white mb-6">Send Enquiry</h2>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-white text-sm font-medium mb-2">
                    Full Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-black border border-white/20 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-white/50 focus:ring-1 focus:ring-white/50 transition-all duration-300"
                    placeholder="Enter your full name"
                  />
                </div>

                <div>
                  <label htmlFor="mobile" className="block text-white text-sm font-medium mb-2">
                    Mobile Number
                  </label>
                  <input
                    type="tel"
                    id="mobile"
                    name="mobile"
                    value={formData.mobile}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-black border border-white/20 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-white/50 focus:ring-1 focus:ring-white/50 transition-all duration-300"
                    placeholder="+91 98765 43210"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-white text-sm font-medium mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-black border border-white/20 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-white/50 focus:ring-1 focus:ring-white/50 transition-all duration-300"
                    placeholder="your.email@example.com"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-white text-sm font-medium mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="w-full px-4 py-3 bg-black border border-white/20 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-white/50 focus:ring-1 focus:ring-white/50 transition-all duration-300 resize-none"
                    placeholder="Tell us about your requirements..."
                  />
                </div>

                <Button className="w-full" type="submit">SEND ENQUIRY</Button>
              </form>
            </div>
          </div>
        </div>

        <div className="relative overflow-hidden rounded-2xl h-[400px] animate-fadeIn">
          <div className="absolute inset-0 bg-zinc-900 flex items-center justify-center">
            <div className="text-center">
              <MapPin className="w-16 h-16 text-white/20 mx-auto mb-4" />
              <p className="text-gray-500">Map location placeholder</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
