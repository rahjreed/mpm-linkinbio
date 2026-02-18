import React, { useState, useEffect, useRef } from 'react';
import { 
  ShoppingCart, 
  Wrench, 
  Flame, 
  BadgeCheck, 
  Zap, 
  Instagram, 
  Music, 
  Mail, 
  HelpCircle, 
  Check, 
  Lock,
  ArrowRight
} from 'lucide-react';

const App = () => {
  const [showModal, setShowModal] = useState(false);
  const [isSending, setIsSending] = useState(false);
  const REDIRECT_URL = "https://mrplumberman.com";

  // Intersection Observer for scroll reveal animations
  useEffect(() => {
    const observerOptions = {
      threshold: 0.15,
      rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('active');
        }
      });
    }, observerOptions);

    const reveals = document.querySelectorAll('.reveal');
    reveals.forEach(el => observer.observe(el));

    return () => reveals.forEach(el => observer.unobserve(el));
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSending(true);

    // Simulate system processing
    setTimeout(() => {
      setShowModal(true);
      setIsSending(false);

      // Automatic Redirect after 2 seconds
      setTimeout(() => {
        window.location.href = REDIRECT_URL;
      }, 2000);
    }, 1200);
  };

  const handleManualRedirect = () => {
    window.location.href = REDIRECT_URL;
  };

  return (
    <div className="antialiased selection:bg-amber-500/30 min-h-screen text-white relative font-sans">
      {/* Custom Styles */}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&family=JetBrains+Mono:wght@400;700&display=swap');

        :root {
          --bg-dark: #070503;
          --accent: #d4af37;
          --accent-glow: rgba(212, 175, 55, 0.15);
          --glass: rgba(15, 12, 10, 0.4);
          --glass-border: rgba(212, 175, 55, 0.15);
        }

        body {
          background-color: var(--bg-dark);
          margin: 0;
        }

        .mono { font-family: 'JetBrains Mono', monospace; }

        /* Fixed the splotchy gradient with smoother atmospheric lighting */
        .ambient-glow {
          position: fixed;
          top: 0;
          left: 0;
          width: 100vw;
          height: 100vh;
          background: 
            radial-gradient(circle at 20% -10%, rgba(212, 175, 55, 0.15) 0%, transparent 50%),
            radial-gradient(circle at 80% 110%, rgba(120, 72, 30, 0.12) 0%, transparent 50%),
            radial-gradient(ellipse at 50% 50%, rgba(20, 15, 10, 1) 0%, #070503 100%);
          z-index: -1;
        }

        .grid-overlay {
          position: fixed;
          inset: 0;
          background-image: linear-gradient(rgba(212, 175, 55, 0.02) 1px, transparent 1px),
                            linear-gradient(90deg, rgba(212, 175, 55, 0.02) 1px, transparent 1px);
          background-size: 60px 60px;
          mask-image: radial-gradient(circle at center, black, transparent 90%);
          z-index: -1;
          pointer-events: none;
        }

        .glass-card {
          background: var(--glass);
          backdrop-filter: blur(12px);
          border: 1px solid var(--glass-border);
          transition: all 0.5s cubic-bezier(0.16, 1, 0.3, 1);
        }

        .glass-card:not(.coming-soon):hover {
          border-color: rgba(212, 175, 55, 0.4);
          background: rgba(212, 175, 55, 0.08);
          transform: translateY(-4px);
          box-shadow: 0 30px 60px -12px rgba(0,0,0,0.5), 0 0 20px rgba(212, 175, 55, 0.05);
        }

        .marquee-wrapper {
          mask-image: linear-gradient(to right, transparent, black 20%, black 80%, transparent);
          overflow: hidden;
          white-space: nowrap;
        }

        .marquee-content {
          display: inline-flex;
          animation: scroll 40s linear infinite;
          gap: 4rem;
        }

        @keyframes scroll {
          from { transform: translateX(0); }
          to { transform: translateX(-50%); }
        }

        .reveal {
          opacity: 0;
          transform: translateY(20px);
          transition: all 0.8s cubic-bezier(0.2, 0.8, 0.2, 1);
        }

        .reveal.active {
          opacity: 1;
          transform: translateY(0);
        }

        .pulse {
          animation: pulse-ring 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;
        }

        @keyframes pulse-ring {
          0%, 100% { opacity: 1; transform: scale(1); }
          50% { opacity: .4; transform: scale(1.1); }
        }

        @media (prefers-reduced-motion: reduce) {
          .marquee-content {
            animation: none;
            overflow-x: auto;
            white-space: normal;
            display: flex;
            flex-wrap: wrap;
            justify-content: center;
            gap: 1rem;
          }
          .reveal {
            transition: none !important;
            opacity: 1 !important;
            transform: none !important;
          }
        }
      `}</style>

      <div className="ambient-glow"></div>
      <div className="grid-overlay"></div>

      <main className="max-w-2xl mx-auto px-6 py-12 md:py-24">
        
        {/* Inventory Status Badge */}
        <div className="flex justify-center mb-8 reveal">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/5 border border-amber-500/20">
            <span className="relative flex h-2 w-2">
              <span className="pulse absolute inline-flex h-full w-full rounded-full bg-amber-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-amber-500"></span>
            </span>
            <span className="mono text-[10px] font-bold text-amber-500 uppercase tracking-widest">
              Inventory Status: High Demand — Ships in 24h
            </span>
          </div>
        </div>

        {/* Hero Identity Section */}
        <section className="text-center mb-16 reveal">
          <div className="relative inline-block mb-10 group">
            {/* Softened glow behind image */}
            <div className="absolute inset-0 bg-amber-500 rounded-full blur-3xl opacity-10 group-hover:opacity-25 transition-opacity duration-1000"></div>
            <div className="relative w-28 h-28 md:w-36 md:h-36 rounded-full p-1 bg-gradient-to-tr from-amber-500/40 via-transparent to-white/10 overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1534030347209-467a5b0ad3e6?q=80&w=400&h=400&auto=format&fit=crop" 
                alt="Mr Plumber Man" 
                className="w-full h-full rounded-full object-cover grayscale hover:grayscale-0 transition-all duration-1000"
              />
            </div>
          </div>
          
          <h1 className="text-white text-4xl md:text-6xl font-extrabold tracking-tighter mb-4 uppercase">
            Mr Plumber Man<span className="text-amber-500">.</span>
          </h1>
          
          <p className="mono text-[10px] md:text-[11px] font-bold text-amber-500/80 uppercase tracking-[0.5em] mb-8">
            Vitality • Energy • Performance
          </p>

          <h2 className="text-2xl md:text-4xl font-bold text-white mb-6 leading-[1.15] tracking-tight">
            Ready when it counts — <span className="text-amber-500">keep the pipes pipin’</span>
          </h2>
          
          <p className="text-gray-400 text-sm md:text-lg mb-12 max-w-lg mx-auto leading-relaxed font-light">
            Premium men’s vitality supplements built for confidence, stamina, and everyday edge.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-sm mx-auto">
            <div className="relative group w-full">
              <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-amber-600 text-black text-[9px] font-black px-2 py-0.5 rounded shadow-xl z-20 tracking-wider">
                SHOP NOW
              </span>
              <a href="#shop" className="bg-amber-500 text-black w-full px-8 py-4 rounded-2xl font-bold text-base flex items-center justify-center gap-2 group hover:scale-[1.02] transition-transform shadow-[0_20px_40px_-10px_rgba(212,175,55,0.25)]">
                Shop Bestsellers <ShoppingCart className="w-4 h-4" />
              </a>
            </div>
            <a href="#how" className="px-8 py-4 rounded-2xl font-semibold text-gray-400 text-base border border-white/10 hover:bg-white/5 transition-all w-full flex items-center justify-center">
              How It Works
            </a>
          </div>
        </section>

        {/* Newsletter (Email Capture) */}
        <section className="mb-16 reveal text-center">
          <div className="max-w-md mx-auto p-10 glass-card rounded-[3rem] shadow-[0_0_50px_rgba(0,0,0,0.3)]">
            <h2 className="text-2xl font-bold mb-3">Join the Mailing List for Discounts</h2>
            <p className="text-gray-500 mb-8 text-sm font-light leading-relaxed">
              Get access to private deals, restocks, and bundle drops.
            </p>
            
            <form onSubmit={handleSubmit} className="flex flex-col gap-3">
              <input 
                type="email" 
                placeholder="you@example.com" 
                required
                className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 focus:outline-none focus:border-amber-500 transition-all text-white placeholder:text-gray-700 text-sm mono"
              />
              <button 
                type="submit" 
                disabled={isSending}
                className="w-full bg-white text-black font-bold py-4 rounded-2xl hover:bg-amber-500 transition-all active:scale-95 text-xs uppercase tracking-widest disabled:opacity-50"
              >
                {isSending ? "SENDING..." : "Join & Continue"}
              </button>
            </form>
          </div>
        </section>

        {/* Ticker Strip */}
        <section className="mb-24 reveal">
          <div className="marquee-wrapper glass-card py-5 rounded-2xl">
            <div className="marquee-content uppercase">
              <span className="mono text-[10px] font-bold text-amber-500/50 uppercase tracking-[0.2em] flex items-center gap-12">
                <span>Energy</span> <span>•</span> 
                <span>Drive</span> <span>•</span> 
                <span>Performance</span> <span>•</span> 
                <span>Stamina</span> <span>•</span> 
                <span>Confidence</span> <span>•</span>
                <span>Ready when it counts</span> <span>•</span>
              </span>
              <span className="mono text-[10px] font-bold text-amber-500/50 uppercase tracking-[0.2em] flex items-center gap-12">
                <span>Energy</span> <span>•</span> 
                <span>Drive</span> <span>•</span> 
                <span>Performance</span> <span>•</span> 
                <span>Stamina</span> <span>•</span> 
                <span>Confidence</span> <span>•</span>
                <span>Ready when it counts</span> <span>•</span>
              </span>
            </div>
          </div>
        </section>

        {/* Featured Products */}
        <section id="shop" className="mb-24 reveal">
          <div className="flex items-center justify-between mb-8 px-1">
            <h3 className="mono text-[11px] uppercase tracking-[0.3em] text-gray-500 font-bold">Featured Products</h3>
            <span className="h-[1px] flex-1 bg-white/10 ml-6"></span>
          </div>
          <div className="grid gap-4">
            <a href="#pressure" className="glass-card p-6 rounded-[2rem] flex flex-col md:flex-row md:items-center gap-6 group">
              <div className="w-14 h-14 rounded-2xl bg-amber-500/10 flex items-center justify-center text-amber-500 shrink-0 border border-amber-500/10">
                <Wrench className="w-6 h-6" />
              </div>
              <div className="flex-1">
                <h4 className="text-xl font-bold text-white mb-1 group-hover:text-amber-500 transition-colors">PRESSURE</h4>
                <p className="text-gray-500 text-sm leading-relaxed">Our flagship daily formula for peak blood flow and endurance.</p>
              </div>
              <span className="text-xs font-bold text-black bg-amber-500 px-4 py-2 rounded-xl group-hover:scale-105 transition-transform">Shop Now</span>
            </a>

            <a href="#" className="glass-card p-6 rounded-[2rem] flex flex-col md:flex-row md:items-center gap-6 group">
              <div className="w-14 h-14 rounded-2xl bg-orange-500/10 flex items-center justify-center text-orange-400 shrink-0 border border-orange-500/10">
                <Flame className="w-6 h-6" />
              </div>
              <div className="flex-1">
                <h4 className="text-xl font-bold text-white mb-1 group-hover:text-orange-400 transition-colors">PRIME TIME</h4>
                <p className="text-gray-500 text-sm leading-relaxed">Fast-acting booster designed for high-stakes performance.</p>
              </div>
              <span className="text-xs font-bold text-black bg-white px-4 py-2 rounded-xl group-hover:bg-amber-500 transition-colors">Shop Now</span>
            </a>

            <div className="glass-card p-6 rounded-[2rem] flex flex-col md:flex-row md:items-center gap-6 group opacity-70 coming-soon border-white/5 bg-white/[0.01]">
              <div className="w-14 h-14 rounded-2xl bg-white/5 flex items-center justify-center text-gray-600 shrink-0">
                <Lock className="w-6 h-6" />
              </div>
              <div className="flex-1">
                <div className="flex items-center gap-2 mb-1">
                  <h4 className="text-xl font-bold text-white/50">MACA DADDY</h4>
                  <span className="text-[9px] font-black bg-white/5 text-gray-500 border border-white/10 px-2 py-0.5 rounded uppercase tracking-wider">Coming Soon</span>
                </div>
                <p className="text-gray-600 text-sm leading-relaxed">The ultimate natural drive enhancer and hormone optimizer.</p>
              </div>
              <span className="text-xs font-bold text-gray-600 border border-white/5 px-4 py-2 rounded-xl cursor-not-allowed">Locked</span>
            </div>
          </div>
        </section>

        {/* Bestseller Spotlight */}
        <section id="pressure" className="mb-24 reveal">
          <h3 className="mono text-[11px] uppercase tracking-[0.3em] text-gray-500 font-bold mb-6 px-1 text-center">Bestseller</h3>
          <div className="glass-card p-3 rounded-[3rem] relative overflow-hidden group border-amber-500/30">
            <div className="bg-black/60 rounded-[2.5rem] overflow-hidden border border-white/5 aspect-video md:aspect-[21/9] flex items-center justify-center relative">
              <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent z-10"></div>
              <div className="text-center z-20 px-8">
                <div className="w-20 h-20 bg-amber-500/10 text-amber-500 rounded-3xl flex items-center justify-center mx-auto mb-6 border border-amber-500/20 shadow-[0_0_60px_rgba(212,175,55,0.2)]">
                  <Zap className="w-10 h-10" />
                </div>
                <h4 className="text-3xl font-black mb-2 tracking-tighter italic">PRESSURE</h4>
                <p className="text-gray-400 text-sm max-w-sm mx-auto font-light leading-relaxed">
                  The only daily support system you need to keep things running smooth.
                </p>
              </div>
            </div>
            <div className="p-8 text-center">
              <ul className="flex flex-wrap justify-center gap-x-6 gap-y-2 mb-8 text-[10px] font-bold text-gray-400 uppercase tracking-widest">
                <li className="flex items-center gap-2"><Check className="w-3 h-3 text-amber-500" /> Daily Vitality Support</li>
                <li className="flex items-center gap-2"><Check className="w-3 h-3 text-amber-500" /> Fast Checkout</li>
                <li className="flex items-center gap-2"><Check className="w-3 h-3 text-amber-500" /> Discrete Shipping</li>
              </ul>
              <button 
                onClick={() => window.location.href = REDIRECT_URL}
                className="w-full py-5 bg-amber-500 text-black rounded-2xl font-black text-lg hover:scale-[0.99] transition-all active:scale-95 shadow-[0_15px_30px_-5px_rgba(212,175,55,0.4)]"
              >
                Buy PRESSURE
              </button>
              <p className="mono text-[9px] text-gray-600 mt-6 uppercase tracking-[0.4em] font-bold">Secure SSL Checkout Protocol</p>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="pt-12 border-t border-white/5 text-center reveal">
          <div className="flex justify-center gap-10 mb-12">
            <a href="#" className="text-gray-700 hover:text-white transition-all transform hover:-translate-y-1"><Instagram className="w-5 h-5" /></a>
            <a href="#" className="text-gray-700 hover:text-white transition-all transform hover:-translate-y-1"><Music className="w-5 h-5" /></a>
            <a href="#" className="text-gray-700 hover:text-white transition-all transform hover:-translate-y-1"><Mail className="w-5 h-5" /></a>
            <a href="#" className="text-gray-700 hover:text-white transition-all transform hover:-translate-y-1"><HelpCircle className="w-5 h-5" /></a>
          </div>
          
          <div className="mono text-[9px] text-gray-800 font-bold uppercase tracking-[0.5em] space-y-6">
            <p>© 2024 MR PLUMBER MAN • VITALITY INFRASTRUCTURE</p>
            <div className="flex justify-center gap-8 opacity-50">
              <a href="#" className="hover:text-amber-500 transition-colors">Privacy</a>
              <a href="#" className="hover:text-amber-500 transition-colors">FAQ</a>
              <a href="#" className="hover:text-amber-500 transition-colors">Terms</a>
            </div>
          </div>
        </footer>

      </main>

      {/* Success Modal */}
      {showModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-6">
          <div className="absolute inset-0 bg-black/95 backdrop-blur-xl" onClick={() => setShowModal(false)}></div>
          <div className="glass-card p-10 rounded-[3rem] max-w-sm w-full text-center relative z-10 border-amber-500/30 shadow-[0_0_100px_rgba(0,0,0,1)]">
            <div className="w-20 h-20 bg-amber-500/10 text-amber-500 rounded-full flex items-center justify-center mx-auto mb-6 border border-amber-500/20 shadow-[0_0_40px_rgba(212,175,55,0.3)]">
              <Check className="w-10 h-10" />
            </div>
            <h3 className="text-2xl font-bold mb-3 text-white tracking-tight">You’re in.</h3>
            <p className="text-gray-500 text-sm mb-8 leading-relaxed font-light">
              Redirecting you to the store… check your inbox for discounts.
            </p>
            <button 
              onClick={handleManualRedirect}
              className="w-full py-4 bg-amber-500 text-black font-black rounded-2xl active:scale-95 transition-transform uppercase tracking-widest text-[10px] mono"
            >
              Continue to Store
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default App;
