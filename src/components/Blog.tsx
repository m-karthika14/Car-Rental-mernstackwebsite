import { useState, useEffect, useRef } from 'react';
import { blogPosts, BlogPost } from '../data/blogs';
import { ChevronRight, Calendar, ArrowLeft } from 'lucide-react';

export function BlogIndex() {
  return (
    <div className="bg-black min-h-screen text-white pt-24 pb-16 px-6">
      <div className="max-w-7xl mx-auto mt-[2cm]">
        <div className="text-center mb-16">
          <div className="w-16 h-px bg-yellow-400 mx-auto mb-8" />
          <h1 className="text-5xl md:text-6xl font-bold tracking-tight mb-4">Prime Self Drive Blog</h1>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto leading-relaxed">
            Travel guides, tips, and everything you need to know about self-drive car rentals in Goa, specifically near Dabolim Airport and Vasco Railway Station.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post) => (
            <article key={post.id} className="bg-neutral-900 rounded-2xl overflow-hidden border border-neutral-800 hover:border-yellow-400 transition-colors group">
              <a href={`#blog?slug=${post.slug}`} className="block h-56 overflow-hidden">
                <img src={post.image} alt={post.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
              </a>
              <div className="p-6">
                <div className="flex items-center gap-2 text-xs text-yellow-400 font-bold uppercase tracking-wider mb-3">
                  <span>{post.category}</span>
                  <span>•</span>
                  <span className="flex items-center gap-1 text-gray-400"><Calendar size={14} /> {post.date}</span>
                </div>
                <h2 className="text-xl font-bold mb-3 leading-tight group-hover:text-yellow-400 transition-colors">
                  <a href={`#blog?slug=${post.slug}`}>{post.title}</a>
                </h2>
                <p className="text-gray-400 text-sm mb-4 line-clamp-3">
                  {post.snippet}
                </p>
                <a href={`#blog?slug=${post.slug}`} className="inline-flex items-center gap-1 text-white font-bold hover:text-yellow-400 transition-colors text-sm">
                  Read Article <ChevronRight size={16} />
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
}

export function BlogPostPage({ slug }: { slug: string }) {
  const [post, setPost] = useState<BlogPost | null>(null);

  useEffect(() => {
    const found = blogPosts.find(p => p.slug === slug);
    if (found) {
      setPost(found);
      // Update SEO title when blog is loaded
      document.title = `${found.title} | Prime Self Drive`;
      // We can also let the index.html meta descriptions handle it, 
      // but dynamically setting the title helps user experience.
    }
    
    // Scroll to top
    window.scrollTo(0, 0);
  }, [slug]);

  if (!post) {
    return (
      <div className="min-h-screen bg-black text-white flex flex-col items-center justify-center">
        <h1 className="text-3xl font-bold mb-4">Blog Post Not Found</h1>
        <a href="#blogs" className="text-yellow-400 hover:underline">Return to all blogs</a>
      </div>
    );
  }

  const [isVisible, setIsVisible] = useState(false);
  const headerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => {
      if (e.isIntersecting) setIsVisible(true);
    }, { threshold: 0.05 });

    if (headerRef.current) obs.observe(headerRef.current);
    return () => obs.disconnect();
  }, []);

  return (
    <div className="bg-black min-h-screen text-white pt-24 pb-16 px-6">
      <div className="max-w-4xl mx-auto mt-[2cm]">
        <a href="#blogs" className="inline-flex items-center gap-2 text-gray-400 hover:text-yellow-400 transition-colors mb-8 font-medium">
          <ArrowLeft size={16} /> Back to all articles
        </a>

        <div className="mb-8" ref={headerRef}>
          <div className="flex items-center gap-3 text-sm text-yellow-400 font-bold uppercase tracking-wider mb-4">
            <span className="bg-yellow-400/10 px-3 py-1 rounded-full">{post.category}</span>
            <span className="flex items-center gap-1 text-gray-400"><Calendar size={14} /> {post.date}</span>
          </div>
          <h1 className="text-5xl md:text-6xl font-bold leading-tight mb-6">{post.title}</h1>
        </div>

        <div className="w-full h-[400px] md:h-[500px] rounded-2xl overflow-hidden mb-12">
          <img src={post.image} alt={post.title} className="w-full h-full object-cover" />
        </div>

        {/* Global styles applied specifically for the inject html content to style the heavy interlinking */}
        <div 
          className="max-w-none 
                    [&_h2]:text-3xl [&_h2]:font-bold [&_h2]:text-white [&_h2]:mb-4 [&_h2]:mt-10 
                    [&_h3]:text-2xl [&_h3]:font-bold [&_h3]:text-gray-200 [&_h3]:mb-3 [&_h3]:mt-8
                    [&_p]:text-gray-300 [&_p]:leading-relaxed [&_p]:mb-6 [&_p]:text-lg
                    [&_a]:text-yellow-400 [&_a]:font-bold hover:[&_a]:text-yellow-300 [&_a]:underline
                    [&_ul]:list-disc [&_ul]:pl-6 [&_ul]:text-gray-300 [&_ul]:mb-6 [&_ul]:text-lg
                    [&_li]:mb-2 [&_strong]:text-white"
          dangerouslySetInnerHTML={{ __html: post.content }}
        />

        <div className="mt-16 p-8 bg-neutral-900 rounded-2xl border border-neutral-800 text-center">
          <h3 className="text-2xl font-bold mb-3">Ready to Start Your Journey?</h3>
          <p className="text-gray-400 mb-6">Book your self drive car near Goa Airport & Vasco Railway Station today.</p>
          <div className="flex justify-center gap-4">
            <a href="#cars" className="bg-white text-black px-6 py-3 rounded-full font-bold hover:bg-gray-200 transition-colors">
              Browse Cars
            </a>
            <a href="https://wa.me/917385766602" target="_blank" rel="noopener noreferrer" className="bg-green-600 text-white px-6 py-3 rounded-full font-bold hover:bg-green-700 transition-colors">
              WhatsApp Us
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

// End of Blog components
