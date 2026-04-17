import { useEffect, useRef, useState } from 'react';

// Replaced SellYourCar with a Trust/Brands showcase per request.
const logos = [
  'https://images.pexels.com/photos/358070/pexels-photo-358070.jpeg?auto=compress&cs=tinysrgb&w=800',
  'https://images.pexels.com/photos/210019/pexels-photo-210019.jpeg?auto=compress&cs=tinysrgb&w=800',
  'https://images.pexels.com/photos/3752169/pexels-photo-3752169.jpeg?auto=compress&cs=tinysrgb&w=800',
  'https://images.pexels.com/photos/170811/pexels-photo-170811.jpeg?auto=compress&cs=tinysrgb&w=800',
  'https://images.pexels.com/photos/3593922/pexels-photo-3593922.jpeg?auto=compress&cs=tinysrgb&w=1200'
];

export default function SellYourCar() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);
  const scrollRef = useRef<HTMLDivElement | null>(null);
  const pausedRef = useRef(false);
  const imagesReadyRef = useRef(false);
  const loadedCountRef = useRef(0);
  const loopsRef = useRef(0);
  const stoppedRef = useRef(false);
  const MAX_LOOPS = 1000;

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

  // autoplay loop using requestAnimationFrame. Duplicate logos for seamless loop.
  // Run when the section becomes visible so scrollRef is available and we don't exit early.
  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;
    let raf = 0;
    const speed = 0.6; // pixels per frame, adjust for faster/slower

    const step = () => {
      if (!el) return;

      // If we've been instructed to stop after the max loops, don't advance and stop scheduling RAF
      if (stoppedRef.current) return;

      // Only advance when images are ready AND there is overflow (content wider than container)
      if (imagesReadyRef.current && el.scrollWidth > el.clientWidth) {
        if (!pausedRef.current) {
          el.scrollLeft += speed;
          // when we've scrolled past half (the duplicated set), jump back and count a loop
          if (el.scrollLeft >= el.scrollWidth / 2) {
            el.scrollLeft -= el.scrollWidth / 2;
            loopsRef.current += 1;
            if (loopsRef.current >= MAX_LOOPS) {
              // stop the RAF-driven motion
              stoppedRef.current = true;
              return;
            }
          }
        }
      }

      // Keep the RAF loop running so we can start as soon as images load / layout stabilizes
      raf = requestAnimationFrame(step);
    };

    raf = requestAnimationFrame(step);

    const onResize = () => {
      // trigger a layout check on resize; RAF loop already handles it, so noop here
    };
    window.addEventListener('resize', onResize);

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener('resize', onResize);
    };
  }, [isVisible]);

  // Images loaded detector: set imagesReady when all imgs inside the slider have fired load/error
  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;

    const imgs = Array.from(el.querySelectorAll('img')) as HTMLImageElement[];
    if (imgs.length === 0) {
      imagesReadyRef.current = true;
      // nudge scroll to force layout and kickstart RAF-driven scrolling
      const slider = scrollRef.current;
      if (slider) {
        slider.scrollLeft += 1;
        slider.scrollLeft -= 1;
      }
      return;
    }

    loadedCountRef.current = 0;

    const onLoaded = () => {
      loadedCountRef.current += 1;
      if (loadedCountRef.current >= imgs.length) {
        imagesReadyRef.current = true;
        // nudge scroll once images are ready so the RAF loop sees overflow immediately
        const slider = scrollRef.current;
        if (slider) {
          slider.scrollLeft += 1;
          slider.scrollLeft -= 1;
        }
      }
    };

    imgs.forEach((img) => {
      if (img.complete) {
        onLoaded();
      } else {
        img.addEventListener('load', onLoaded);
        img.addEventListener('error', onLoaded);
      }
    });

    return () => {
      imgs.forEach((img) => {
        img.removeEventListener('load', onLoaded);
        img.removeEventListener('error', onLoaded);
      });
    };
  }, [isVisible]);

  return (
    <section ref={sectionRef} id="sell" className="py-24 px-0 bg-black">
      <div className="container mx-auto">
        {/* Section header — animate on enter */}
        <div className="max-w-5xl mx-auto text-center">
          <h2
            className={`text-6xl md:text-7xl lg:text-8xl mb-6 text-white font-normal leading-tight ${isVisible ? 'animate-wow' : 'opacity-0'}`}
            style={{ fontFamily: `'Allura', cursive`, textShadow: '0 8px 28px rgba(0,0,0,0.6)', animationDelay: '120ms' }}
          >
            Trusted Luxury Car Brands
          </h2>

          <p className={`text-lg text-white/70 mb-6 ${isVisible ? 'animate-wow' : 'opacity-0'}`} style={{ animationDelay: '340ms' }}>
            Premium cars from globally renowned manufacturers
          </p>
        </div>
      </div>

      {/* Logo slider — full width end-to-end, autoplay & loop. Logos stagger in. */}
      <div className="w-full overflow-hidden mt-6">
        <div
          ref={scrollRef}
          onMouseEnter={() => (pausedRef.current = true)}
          onMouseLeave={() => (pausedRef.current = false)}
          className="flex gap-6 whitespace-nowrap will-change-transform overflow-x-auto scrollbar-hide px-6 md:px-0"
          style={{ scrollBehavior: 'auto', scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {/* render logos twice for seamless looping; each logo will fade/slide up with a small stagger */}
          {[...logos, ...logos].map((src, i) => (
            <div
              key={i}
              className={`inline-block w-[22%] min-w-[220px] h-40 md:h-48 rounded-xl overflow-hidden shadow-2xl bg-white/5 ${isVisible ? 'animate-wow' : 'opacity-0'}`}
              style={{ animationDelay: `${220 + (i % logos.length) * 140}ms` }}
            >
              <img src={src} alt={`brand-${i}`} className="w-full h-full object-cover" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
