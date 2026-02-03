import { useEffect, useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import RecentlyParked from './components/RecentlyParked';
import Services from './components/Services';
import ServicesPage from './pages/ServicesPage';
import Showrooms from './components/Showrooms';
import SellYourCar from './components/SellYourCar';
import BrandStory from './components/BrandStory';
import MediaSection from './components/MediaSection';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';
import { CarsPage } from './components/RecentlyParked';

function App() {
  const [hash, setHash] = useState<string>(typeof window !== 'undefined' ? (window.location.hash || '#home') : '#home');

  // helper to navigate to a page by updating the hash (used by full-page components)
  const onNavigate = (page: string) => {
    if (typeof window !== 'undefined') {
      window.location.hash = `#${page}`;
    }
  };

  useEffect(() => {
    const onHash = () => setHash(window.location.hash || '#home');
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
      </div>
    );
  }

  if (hash.startsWith('#services')) {
    return (
      <div className="min-h-screen bg-black">
        <Header />
        <ServicesPage onNavigate={onNavigate} />
        <Footer />
      </div>
    );
  }

  if (hash.startsWith('#about')) {
    return (
      <div className="min-h-screen bg-black">
        <Header />
        <About />
        <Footer />
      </div>
    );
  }

  if (hash.startsWith('#contact')) {
    return (
      <div className="min-h-screen bg-black">
        <Header />
        <Contact />
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-black">
  <Header />
  <Hero />
  <RecentlyParked />
  <Services />
      <Showrooms />
      <SellYourCar />
      <BrandStory />
      <MediaSection />
      <Footer />
    </div>
  );
}

export default App;
