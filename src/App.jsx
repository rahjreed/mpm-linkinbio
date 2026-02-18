import React, { useEffect } from 'react';
import { 
  ShoppingCart, 
  Wrench, 
  Flame, 
  Zap, 
  Instagram, 
  Music, 
  Mail, 
  HelpCircle, 
  Check, 
  Lock,
  ExternalLink
} from 'lucide-react';

const App = () => {
  const REDIRECT_URL = "https://www.mrplumberman.com";

  // Load ConvertKit Script
  useEffect(() => {
    const script = document.createElement('script');
    script.src = "https://f.convertkit.com/ckjs/ck.5.js";
    script.async = true;
    document.body.appendChild(script);

    // Intersection Observer for scroll reveal animations
    const observerOptions = {
      threshold: 0.1,
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

    return () => {
      if (document.body && document.body.contains(script)) {
        document.body.removeChild(script);
      }
      reveals.forEach(el => observer.unobserve(el));
    };
  }, []);

  const handleManualRedirect = () => {
    window.location.href = REDIRECT_URL;
  };

  return (
    <div className="antialiased selection:bg-amber-500/30 min-h-screen text-white relative font-sans overflow-x-hidden">
      {/* Custom Styles */}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&family=JetBrains+Mono:wght@400;700&display=swap');

        :root {
          --bg-dark: #070503;
          --accent: #d4af37;
          --accent-glow: rgba(212, 175, 55, 0.15);
          --glass: rgba(10, 8, 6, 0.94);
          --glass-border: rgba(212, 175, 55, 0.12);
        }

        body {
          background-color: var(--bg-dark);
          margin: 0;
        }

        .mono { font-family: 'JetBrains Mono', monospace; }

        .background-container {
          position: fixed;
          top: 0;
          left: 0;
          width: 100vw;
          height: 100vh;
          z-index: -1;
          background-image: 
            linear-gradient(to bottom, rgba(7, 5, 3, 0.65), rgba(7, 5, 3, 0.98)),
            url('https://images.travelprox.com/mrplumberman/herowall.png');
          background-size: cover;
          background-position: center;
          background-attachment: fixed;
        }

        .ambient-glow {
          position: fixed;
          top: 0;
          left: 0;
          width: 100vw;
          height: 100vh;
          background: 
            radial-gradient(circle at 50% -20%, rgba(212, 175, 55, 0.12) 0%, transparent 60%),
            radial-gradient(circle at 80% 110%, rgba(120, 72, 30, 0.08) 0%, transparent 50%);
          z-index: -1;
        }

        .glass-card {
          background: var(--glass);
          backdrop-filter: blur(32px);
          border: 1px solid var(--glass-border);
          transition: all 0.5s cubic-bezier(0.16, 1, 0.3, 1);
        }

        .glass-card:not(.coming-soon):hover {
          border-color: rgba(212, 175, 55, 0.4);
          background: rgba(212, 175, 55, 0.08);
          transform: translateY(-2px);
          box-shadow: 0 30px 60px -15px rgba(0,0,0,0.8), 0 0 30px rgba(212, 175, 55, 0.03);
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
          transform: translateY(15px);
          transition: all 0.7s cubic-bezier(0.2, 0.8, 0.2, 1);
        }

        .reveal.active {
          opacity: 1;
          transform: translateY(0);
        }

        .hero-aura {
          animation: aura-pulse 6s ease-in-out infinite;
        }

        @keyframes aura-pulse {
          0%, 100% { filter: drop-shadow(0 0 20px rgba(212, 175, 55, 0.1)) brightness(1); }
          50% { filter: drop-shadow(0 0 45px rgba(212, 175, 55, 0.25)) brightness(1.03); }
        }

        /* Kit Form Overrides */
        .formkit-form[data-uid="6b0b0fa093"] {
          background: transparent !important;
          border: none !important;
          padding: 0 !important;
          margin: 0 auto !important;
        }
        .formkit-form[data-uid="6b0b0fa093"] .formkit-input {
          background: rgba(255, 255, 255, 0.03) !important;
          border: 1px solid rgba(212, 175, 55, 0.15) !important;
          color: white !important;
          border-radius: 12px !important;
          padding: 14px !important;
          font-family: 'Inter', sans-serif !important;
        }
        .formkit-form[data-uid="6b0b0fa093"] .formkit-submit {
          background-color: var(--accent) !important;
          color: black !important;
          font-weight: 900 !important;
          text-transform: uppercase !important;
          letter-spacing: 0.15em !important;
          border-radius: 12px !important;
          width: 100% !important;
          margin-top: 8px !important;
          padding: 16px !important;
          transition: transform 0.2s ease, filter 0.2s ease !important;
        }
        .formkit-powered-by-convertkit { display: none !important; }

        @media (prefers-reduced-motion: reduce) {
          .marquee-content { animation: none; }
          .reveal { transition: none !important; opacity: 1 !important; transform: none !important; }
        }

        .callista-badge {
          position: fixed;
          bottom: 1.5rem;
          right: 1.5rem;
          z-index: 100;
          text-decoration: none;
        }
      `}</style>

      <div className="background-container"></div>
      <div className="ambient-glow"></div>

      {/* Floating Callista Badge */}
      <a 
        href="https://www.callistadigital.com" 
        target="_blank" 
        rel="noopener noreferrer"
        className="callista-badge glass-card px-3.5 py-2 rounded-xl flex items-center gap-2.5 group overflow-hidden border-white/5 opacity-80 hover:opacity-100"
      >
        <span className="mono text-[8px] font-black uppercase tracking-[0.2em] text-gray-400 group-hover:text-amber-500 transition-colors">
          Built by Callista Digital
        </span>
        <ExternalLink className="w-2.5 h-2.5 text-gray-500 group-hover:text-amber-500 transition-colors" />
      </a>

      {/* Main Content Start */}
      <main className="max-w-2xl mx-auto px-6 pt-4 md:pt-8 pb-20 relative z-10">
        
        {/* Status Badge */}
        <div className="flex justify-center mb-4 reveal active">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/5 border border-amber-500/10 backdrop-blur-md">
            <span className="relative flex h-1.5 w-1.5">
              <span className="absolute inline-flex h-full w-full rounded-full bg-amber-400 opacity-75 animate-ping"></span>
              <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-amber-500"></span>
            </span>
            <span className="mono text-[8px] font-bold text-amber-500 uppercase tracking-[0.3em]">
              Dispatch Protocol: Active
            </span>
          </div>
        </div>

        {/* Hero Section */}
        <section className="text-center mb-10 reveal active">
          {/* Brand Symbol Profile Size */}
          <div className="flex justify-center mb-4">
            <div className="relative p-1 rounded-full border border-amber-500/20 bg-gradient-to-b from-amber-500/10 to-transparent">
              <img 
                src="https://images.travelprox.com/mrplumberman/symbol.png" 
                alt="Plumber Man Seal" 
                className="w-24 h-24 md:w-32 md:h-32 object-contain filter drop-shadow-[0_0_15px_rgba(212,175,55,0.2)]"
              />
            </div>
          </div>
          
          <div className="max-w-xl mx-auto">
            <h1 className="text-white text-4xl md:text-6xl font-black tracking-tighter mb-2 uppercase italic leading-none">
              Mr Plumber Man<span className="text-amber-500">.</span>
            </h1>
            
            <p className="mono text-[9px] md:text-[10px] font-bold text-amber-500 uppercase tracking-[0.6em] mb-3">
              Vitality • Energy • Performance
            </p>

            <h2 className="text-xl md:text-3xl font-black text-white mb-4 leading-tight tracking-tight uppercase">
              Keep the pipes <span className="text-amber-500">pipin’</span>
            </h2>

            {/* Pristine Hero Visual - High Tight Placement */}
            <div className="relative mb-2 -mt-4">
              <div className="absolute inset-0 bg-amber-500/10 blur-[60px] rounded-full scale-75 opacity-15"></div>
              <img 
                src="https://images.travelprox.com/mrplumberman/hero.png" 
                alt="Mr Plumber Man Showcase" 
                className="relative z-10 w-full max-w-[440px] mx-auto hero-aura"
              />
            </div>
            
            <div className="flex flex-col gap-6 items-center">
              <p className="text-gray-300 text-sm md:text-base max-w-sm mx-auto leading-relaxed font-medium">
                Premium vitality supplements engineered for peak stamina and elite confidence.
              </p>

              <div className="relative group w-full max-w-[240px]">
                <span className="absolute -top-2.5 left-1/2 -translate-x-1/2 bg-amber-600 text-black text-[8px] font-black px-2 py-0.5 rounded shadow-xl z-20 tracking-widest uppercase">
                  ENTER STORE
                </span>
                <button 
                  onClick={handleManualRedirect}
                  className="bg-amber-500 text-black w-full px-6 py-4 rounded-xl font-black text-base flex items-center justify-center gap-3 group hover:scale-[1.02] transition-all duration-300 shadow-[0_20px_40px_-10px_rgba(212,175,55,0.3)] uppercase italic"
                >
                  Shop Now <ShoppingCart className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Mailing List Form */}
        <section className="mb-16 reveal text-center">
          <div className="max-w-md mx-auto p-8 glass-card rounded-[2.5rem] shadow-[0_0_60px_rgba(0,0,0,0.5)] border-amber-500/15">
            <h2 className="text-xl font-black mb-1 uppercase tracking-tight italic text-amber-500">Privileged Access</h2>
            <p className="text-gray-400 mb-6 text-xs font-medium leading-relaxed max-w-[240px] mx-auto">
              Private discounts, restock alerts, and exclusive performance protocols.
            </p>
            
            <div className="kit-form-container">
              <form 
                action="https://app.kit.com/forms/9033723/subscriptions" 
                className="seva-form formkit-form" 
                method="post" 
                data-sv-form="9033723" 
                data-uid="6b0b0fa093" 
                data-format="inline" 
                data-version="5"
              >
                <div data-style="clean">
                  <ul className="formkit-alert formkit-alert-error" data-element="errors" data-group="alert"></ul>
                  <div data-element="fields" data-stacked="false" className="seva-fields formkit-fields flex flex-col gap-2">
                    <div className="formkit-field">
                      <input 
                        className="formkit-input w-full" 
                        aria-label="First Name" 
                        name="fields[first_name]" 
                        placeholder="First Name" 
                        type="text" 
                      />
                    </div>
                    <div className="formkit-field">
                      <input 
                        className="formkit-input w-full" 
                        name="email_address" 
                        aria-label="Email Address" 
                        placeholder="Email Address" 
                        required 
                        type="email" 
                      />
                    </div>
                    <button 
                      data-element="submit" 
                      className="formkit-submit"
                    >
                      <div className="formkit-spinner"><div></div><div></div><div></div></div>
                      <span>Subscribe</span>
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </section>

        {/* Ticker Strip */}
        <section className="mb-16 reveal">
          <div className="marquee-wrapper glass-card py-4 rounded-xl border-amber-500/5">
            <div className="marquee-content uppercase italic">
              <span className="mono text-[8px] font-black text-amber-500/40 uppercase tracking-[0.4em] flex items-center gap-12">
                <span>Energy</span> <span>•</span> 
                <span>Drive</span> <span>•</span> 
                <span>Performance</span> <span>•</span> 
                <span>Stamina</span> <span>•</span> 
                <span>Confidence</span> <span>•</span>
                <span>Ready when it counts</span> <span>•</span>
              </span>
              <span className="mono text-[8px] font-black text-amber-500/40 uppercase tracking-[0.4em] flex items-center gap-12">
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

        {/* Catalog Section */}
        <section id="shop" className="mb-20 reveal">
          <div className="flex items-center justify-between mb-8 px-1">
            <h3 className="mono text-[10px] uppercase tracking-[0.5em] text-gray-500 font-bold italic">Engineering Catalog</h3>
            <span className="h-[1px] flex-1 bg-white/5 ml-8"></span>
          </div>
          <div className="grid gap-4">
            <button 
              onClick={handleManualRedirect}
              className="glass-card p-6 rounded-[2rem] flex flex-col md:flex-row md:items-center gap-5 group text-left w-full border-amber-500/10"
            >
              <div className="w-12 h-12 rounded-xl bg-amber-500/10 flex items-center justify-center text-amber-500 shrink-0 border border-amber-500/10 group-hover:bg-amber-500/20 transition-colors">
                <Wrench className="w-6 h-6" />
              </div>
              <div className="flex-1">
                <h4 className="text-lg font-black text-white mb-0.5 group-hover:text-amber-500 transition-colors italic uppercase tracking-tight">PRESSURE</h4>
                <p className="text-gray-400 text-xs leading-relaxed font-medium">Flagship protocol for optimal blood flow and endurance.</p>
              </div>
              <span className="text-[9px] font-black text-black bg-amber-500 px-5 py-2 rounded-lg group-hover:scale-105 transition-transform uppercase tracking-widest">Shop</span>
            </button>

            <button 
              onClick={handleManualRedirect}
              className="glass-card p-6 rounded-[2rem] flex flex-col md:flex-row md:items-center gap-5 group text-left w-full border-white/5"
            >
              <div className="w-12 h-12 rounded-xl bg-orange-500/10 flex items-center justify-center text-orange-400 shrink-0 border border-orange-500/10 group-hover:bg-orange-500/20 transition-colors">
                <Flame className="w-6 h-6" />
              </div>
              <div className="flex-1">
                <h4 className="text-lg font-black text-white mb-0.5 group-hover:text-orange-400 transition-colors italic uppercase tracking-tight">PRIME TIME</h4>
                <p className="text-gray-400 text-xs leading-relaxed font-medium">Fast-acting booster designed for high-stakes performance.</p>
              </div>
              <span className="text-[9px] font-black text-black bg-white px-5 py-2 rounded-lg group-hover:bg-amber-500 transition-all uppercase tracking-widest">Shop</span>
            </button>

            <div className="glass-card p-6 rounded-[2rem] flex flex-col md:flex-row md:items-center gap-5 group opacity-40 border-white/5 bg-white/[0.01]">
              <div className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center text-gray-600 shrink-0">
                <Lock className="w-6 h-6" />
              </div>
              <div className="flex-1">
                <div className="flex items-center gap-3 mb-0.5">
                  <h4 className="text-lg font-black text-white/50 italic uppercase tracking-tight">MACA DADDY</h4>
                  <span className="text-[8px] font-black bg-white/10 text-gray-500 border border-white/10 px-2 py-0.5 rounded uppercase tracking-wider">Locked</span>
                </div>
                <p className="text-gray-600 text-xs leading-relaxed font-medium">Ultimate natural drive and hormone optimization.</p>
              </div>
              <span className="text-[8px] font-black text-gray-600 border border-white/10 px-4 py-2 rounded-lg cursor-not-allowed uppercase tracking-widest">Pending</span>
            </div>
          </div>
        </section>

        {/* Bestseller Spotlight */}
        <section id="pressure" className="mb-20 reveal">
          <div className="glass-card p-3 rounded-[3rem] relative overflow-hidden group border-amber-500/25 shadow-[0_40px_100px_-20px_rgba(212,175,55,0.1)]">
            <div className="bg-black/90 rounded-[2.5rem] overflow-hidden border border-white/10 aspect-video md:aspect-[21/9] flex items-center justify-center relative">
              <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent z-10"></div>
              <div className="text-center z-20 px-8">
                <div className="w-16 h-16 bg-amber-500/10 text-amber-500 rounded-2xl flex items-center justify-center mx-auto mb-4 border border-amber-500/20 shadow-[0_0_50px_rgba(212,175,55,0.2)]">
                  <Zap className="w-8 h-8" />
                </div>
                <h4 className="text-3xl md:text-5xl font-black mb-2 tracking-tighter italic uppercase text-amber-500">PRESSURE</h4>
                <p className="text-gray-300 text-[9px] md:text-xs max-w-sm mx-auto font-black leading-relaxed uppercase tracking-[0.2em]">
                  Elite Daily Performance Protocol.
                </p>
              </div>
            </div>
            <div className="p-8 text-center">
              <div className="flex flex-wrap justify-center gap-6 mb-8">
                <div className="flex items-center gap-2 text-gray-300"><Check className="w-4 h-4 text-amber-500" /> <span className="text-[8px] font-black uppercase tracking-widest">Vitality Support</span></div>
                <div className="flex items-center gap-2 text-gray-300"><Check className="w-4 h-4 text-amber-500" /> <span className="text-[8px] font-black uppercase tracking-widest">Discrete Shipping</span></div>
                <div className="flex items-center gap-2 text-gray-300"><Check className="w-4 h-4 text-amber-500" /> <span className="text-[8px] font-black uppercase tracking-widest">Fast Delivery</span></div>
              </div>
              <button 
                onClick={handleManualRedirect}
                className="w-full py-5 bg-amber-500 text-black rounded-xl font-black text-xl hover:scale-[1.01] transition-all active:scale-95 shadow-[0_20px_40px_-10px_rgba(212,175,55,0.4)] uppercase italic tracking-tighter"
              >
                Buy PRESSURE Now
              </button>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="pt-12 border-t border-white/5 text-center reveal">
          <div className="flex justify-center gap-8 mb-12">
            <a href="#" className="text-gray-700 hover:text-amber-500 transition-all transform hover:-translate-y-1"><Instagram className="w-5 h-5" /></a>
            <a href="#" className="text-gray-700 hover:text-amber-500 transition-all transform hover:-translate-y-1"><Music className="w-5 h-5" /></a>
            <a href="#" className="text-gray-700 hover:text-amber-500 transition-all transform hover:-translate-y-1"><Mail className="w-5 h-5" /></a>
            <a href="#" className="text-gray-700 hover:text-amber-500 transition-all transform hover:-translate-y-1"><HelpCircle className="w-5 h-5" /></a>
          </div>
          
          <div className="mono text-[8px] text-gray-800 font-bold uppercase tracking-[0.5em] space-y-6">
            <p>© 2024 MR PLUMBER MAN • VITALITY INFRASTRUCTURE</p>
            <div className="flex justify-center gap-8 opacity-40">
              <a href="#" className="hover:text-amber-500 transition-colors">Privacy</a>
              <a href="#" className="hover:text-amber-500 transition-colors">FAQ</a>
              <a href="#" className="hover:text-amber-500 transition-colors">Terms</a>
            </div>
          </div>
        </footer>

      </main>
    </div>
  );
};

export default App;
