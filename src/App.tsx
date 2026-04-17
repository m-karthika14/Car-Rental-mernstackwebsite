import { useEffect, useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import RecentlyParked from './components/RecentlyParked';
import Services from './components/Services';
import ServicesPage from './pages/ServicesPage';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';
import { CarsPage } from './components/RecentlyParked';
import { BlogIndex, BlogPostPage } from './components/Blog';
import { MessageCircle } from 'lucide-react';

function App() {
  const [hash, setHash] = useState<string>(typeof window !== 'undefined' ? (window.location.hash || '#home') : '#home');

  // helper to navigate to a page by updating the hash (used by full-page components)
  const onNavigate = (page: string) => {
    if (typeof window !== 'undefined') {
      window.location.hash = `#${page}`;
    }
  };

  useEffect(() => {
    const onHash = () => {
      setHash(window.location.hash || '#home');
      try {
        window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
      } catch (e) {
        // ignore in non-browser environments
      }
    };
    window.addEventListener('hashchange', onHash);
    return () => window.removeEventListener('hashchange', onHash);
  }, []);

  // If the user navigates to #cars, #services or #about, render the respective page as a full page.
  if (hash.startsWith('#cars')) {
    return (
      <div className="min-h-screen bg-black">
        <Header />
        <CarsPage />
        <Footer />
        <WhatsAppFloatingButton />
      </div>
    );
  }

  if (hash.startsWith('#blogs')) {
    return (
      <div className="min-h-screen bg-black">
        <Header />
        <BlogIndex />
        <Footer />
        <WhatsAppFloatingButton />
      </div>
    );
  }

  if (hash.startsWith('#blog?slug=')) {
    const slug = new URLSearchParams(hash.split('?')[1]).get('slug') || '';
    return (
      <div className="min-h-screen bg-black">
        <Header />
        <BlogPostPage slug={slug} />
        <Footer />
        <WhatsAppFloatingButton />
      </div>
    );
  }

  if (hash.startsWith('#services')) {
    return (
      <div className="min-h-screen bg-black">
        <Header />
        <ServicesPage onNavigate={onNavigate} />
        <Footer />
        <WhatsAppFloatingButton />
      </div>
    );
  }

  if (hash.startsWith('#about')) {
    return (
      <div className="min-h-screen bg-black">
        <Header />
        <About />
        <Footer />
        <WhatsAppFloatingButton />
      </div>
    );
  }

  if (hash.startsWith('#contact')) {
    return (
      <div className="min-h-screen bg-black">
        <Header />
        <Contact />
        <Footer />
        <WhatsAppFloatingButton />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-black">
      <Header />
      <Hero />
      <RecentlyParked />
      <Services />
      <Footer />
      <WhatsAppFloatingButton />
    </div>
  );
}

function WhatsAppFloatingButton() {
  return (
    <a
      href="https://wa.me/917385766602"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 bg-green-500 text-white p-4 rounded-full shadow-2xl hover:bg-green-600 transition-transform hover:scale-110 z-50 flex items-center justify-center animate-bounce"
      aria-label="Chat on WhatsApp"
    >
      <MessageCircle size={32} />
    </a>
  );
}

export default App;
