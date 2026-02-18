<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Mr Plumber Man | Vitality & Performance</title>
    <script src="https://cdn.tailwindcss.com"></script>
    <script src="https://unpkg.com/lucide@latest"></script>
    <style>
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&family=JetBrains+Mono:wght@400;700&display=swap');

        :root {
            --bg-dark: #070503;
            --accent: #d4af37;
            --accent-glow: rgba(212, 175, 55, 0.25);
            --glass: rgba(255, 255, 255, 0.03);
            --glass-border: rgba(212, 175, 55, 0.12);
        }

        body {
            font-family: 'Inter', sans-serif;
            background-color: var(--bg-dark);
            color: #ffffff;
            overflow-x: hidden;
            scroll-behavior: smooth;
        }

        .mono { font-family: 'JetBrains Mono', monospace; }

        /* Ambient Background - Warm Gold & Brown */
        .ambient-glow {
            position: fixed;
            top: 0;
            left: 50%;
            transform: translateX(-50%);
            width: 100vw;
            height: 100vh;
            background: 
                radial-gradient(circle at 10% 10%, rgba(212, 175, 55, 0.12) 0%, transparent 45%),
                radial-gradient(circle at 90% 90%, rgba(120, 72, 30, 0.10) 0%, transparent 45%),
                radial-gradient(circle at 50% 50%, rgba(0, 0, 0, 1) 0%, transparent 100%);
            z-index: -1;
        }

        /* Grid Overlay */
        .grid-overlay {
            position: fixed;
            inset: 0;
            background-image: linear-gradient(rgba(212, 175, 55, 0.03) 1px, transparent 1px),
                              linear-gradient(90deg, rgba(212, 175, 55, 0.03) 1px, transparent 1px);
            background-size: 40px 40px;
            mask-image: radial-gradient(ellipse at center, black, transparent 85%);
            z-index: -1;
            pointer-events: none;
        }

        .glass-card {
            background: var(--glass);
            backdrop-filter: blur(16px);
            border: 1px solid var(--glass-border);
            transition: all 0.5s cubic-bezier(0.16, 1, 0.3, 1);
        }

        .glass-card:not(.coming-soon):hover {
            border-color: rgba(212, 175, 55, 0.4);
            background: rgba(212, 175, 55, 0.04);
            transform: translateY(-4px) scale(1.01);
            box-shadow: 0 20px 40px -20px rgba(0,0,0,0.8), 0 0 20px rgba(212, 175, 55, 0.1);
        }

        .primary-cta {
            background: var(--accent);
            color: #000000;
            transition: all 0.3s ease;
        }

        .primary-cta:hover {
            transform: translateY(-2px);
            box-shadow: 0 0 30px rgba(212, 175, 55, 0.4);
            filter: brightness(1.1);
        }

        /* Ticker Animation */
        .marquee-wrapper {
            mask-image: linear-gradient(to right, transparent, black 15%, black 85%, transparent);
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
            transform: translateY(30px);
            transition: all 0.8s cubic-bezier(0.2, 0.8, 0.2, 1);
        }

        .reveal.active {
            opacity: 1;
            transform: translateY(0);
        }

        /* Accessibility: Reduced Motion */
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
                transition: none;
                opacity: 1;
                transform: none;
            }
            .pulse {
                animation: none;
            }
        }

        .pulse {
            animation: pulse-ring 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;
        }

        @keyframes pulse-ring {
            0%, 100% { opacity: 1; }
            50% { opacity: .5; }
        }

        ::-webkit-scrollbar { width: 4px; }
        ::-webkit-scrollbar-track { background: var(--bg-dark); }
        ::-webkit-scrollbar-thumb { background: #1a1a1a; border-radius: 10px; }
        ::-webkit-scrollbar-thumb:hover { background: var(--accent); }
    </style>
</head>
<body class="antialiased selection:bg-amber-500/30">
    <div class="ambient-glow"></div>
    <div class="grid-overlay"></div>

    <main class="max-w-2xl mx-auto px-6 py-12 md:py-24">
        
        <!-- Inventory Status Badge -->
        <div class="flex justify-center mb-8 reveal">
            <div class="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/5 border border-amber-500/20">
                <span class="relative flex h-2 w-2">
                    <span class="pulse absolute inline-flex h-full w-full rounded-full bg-amber-400 opacity-75"></span>
                    <span class="relative inline-flex rounded-full h-2 w-2 bg-amber-500"></span>
                </span>
                <span class="mono text-[10px] font-bold text-amber-500 uppercase tracking-widest">Inventory Status: High Demand — Ships in 24h</span>
            </div>
        </div>

        <!-- 1. Hero Identity Section -->
        <section class="text-center mb-16 reveal">
            <div class="relative inline-block mb-10 group">
                <div class="absolute inset-0 bg-amber-500 rounded-full blur-2xl opacity-20 group-hover:opacity-40 transition-opacity"></div>
                <div class="relative w-28 h-28 md:w-36 md:h-36 rounded-full p-1 bg-gradient-to-b from-amber-500/50 to-transparent overflow-hidden">
                    <img src="https://images.unsplash.com/photo-1534030347209-467a5b0ad3e6?q=80&w=400&h=400&auto=format&fit=crop" 
                         alt="Mr Plumber Man" 
                         class="w-full h-full rounded-full object-cover grayscale hover:grayscale-0 transition-all duration-700">
                </div>
            </div>
            
            <h1 class="text-white text-4xl md:text-6xl font-extrabold tracking-tighter mb-4">
                MR PLUMBER MAN<span class="text-amber-500">.</span>
            </h1>
            
            <p class="mono text-[10px] md:text-[11px] font-bold text-amber-500/80 uppercase tracking-[0.5em] mb-8">
                VITALITY • ENERGY • PERFORMANCE
            </p>

            <h2 class="text-2xl md:text-4xl font-bold text-white mb-6 leading-[1.15] tracking-tight">
                Ready when it counts — <span class="text-amber-500">keep the pipes pipin’</span>
            </h2>
            
            <p class="text-gray-400 text-sm md:text-lg mb-12 max-w-lg mx-auto leading-relaxed font-light">
                Premium men’s vitality supplements built for confidence, stamina, and everyday edge.
            </p>

            <div class="flex flex-col sm:flex-row gap-4 justify-center max-w-sm mx-auto">
                <div class="relative group w-full">
                    <span class="absolute -top-3 left-1/2 -translate-x-1/2 bg-amber-600 text-black text-[9px] font-black px-2 py-0.5 rounded shadow-xl z-20 tracking-wider">
                        SHOP NOW
                    </span>
                    <a href="#shop" class="primary-cta w-full px-8 py-4 rounded-2xl font-bold text-base flex items-center justify-center gap-2 group">
                        Shop Bestsellers <i data-lucide="shopping-cart" class="w-4 h-4"></i>
                    </a>
                </div>
                <a href="#how" class="px-8 py-4 rounded-2xl font-semibold text-gray-400 text-base border border-white/10 hover:bg-white/5 transition-all w-full flex items-center justify-center">
                    How It Works
                </a>
            </div>
        </section>

        <!-- Newsletter (Email Capture) - Repositioned "Near" Top -->
        <section class="mb-16 reveal text-center">
            <div class="max-w-md mx-auto p-10 glass-card rounded-[3rem] border-amber-500/20 shadow-[0_0_30px_rgba(212,175,55,0.05)]">
                <h2 class="text-2xl font-bold mb-3">Join the Mailing List for Discounts</h2>
                <p class="text-gray-500 mb-8 text-sm font-light leading-relaxed">Get access to private deals, restocks, and bundle drops.</p>
                
                <form id="emailForm" class="flex flex-col gap-3">
                    <input type="email" placeholder="you@example.com" required
                        class="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 focus:outline-none focus:border-amber-500 transition-all text-white placeholder:text-gray-700 text-sm mono">
                    <button type="submit" class="w-full bg-white text-black font-bold py-4 rounded-2xl hover:bg-amber-500 transition-all active:scale-95 text-xs uppercase tracking-widest">
                        Join & Continue
                    </button>
                </form>
            </div>
        </section>

        <!-- Ticker Strip -->
        <section class="mb-24 reveal">
            <div class="marquee-wrapper glass-card py-5 rounded-2xl border-amber-500/10">
                <div class="marquee-content">
                    <span class="mono text-[10px] font-bold text-amber-500/50 uppercase tracking-[0.2em] flex items-center gap-12">
                        <span>ENERGY</span> <span>•</span> 
                        <span>DRIVE</span> <span>•</span> 
                        <span>PERFORMANCE</span> <span>•</span> 
                        <span>STAMINA</span> <span>•</span> 
                        <span>CONFIDENCE</span> <span>•</span>
                        <span>READY WHEN IT COUNTS</span> <span>•</span>
                    </span>
                    <span class="mono text-[10px] font-bold text-amber-500/50 uppercase tracking-[0.2em] flex items-center gap-12">
                        <span>ENERGY</span> <span>•</span> 
                        <span>DRIVE</span> <span>•</span> 
                        <span>PERFORMANCE</span> <span>•</span> 
                        <span>STAMINA</span> <span>•</span> 
                        <span>CONFIDENCE</span> <span>•</span>
                        <span>READY WHEN IT COUNTS</span> <span>•</span>
                    </span>
                </div>
            </div>
        </section>

        <!-- Featured Products -->
        <section id="shop" class="mb-24 reveal">
            <div class="flex items-center justify-between mb-8 px-1">
                <h3 class="mono text-[11px] uppercase tracking-[0.3em] text-gray-500 font-bold">Featured Products</h3>
                <span class="h-[1px] flex-1 bg-white/10 ml-6"></span>
            </div>
            <div class="grid gap-4">
                <!-- Product 1: PRESSURE -->
                <a href="#pressure" class="glass-card p-6 rounded-[2rem] flex flex-col md:flex-row md:items-center gap-6 group">
                    <div class="w-14 h-14 rounded-2xl bg-amber-500/10 flex items-center justify-center text-amber-500 shrink-0 border border-amber-500/10">
                        <i data-lucide="wrench" class="w-6 h-6"></i>
                    </div>
                    <div class="flex-1">
                        <h4 class="text-xl font-bold text-white mb-1 group-hover:text-amber-500 transition-colors">PRESSURE</h4>
                        <p class="text-gray-500 text-sm leading-relaxed">Our flagship daily formula for peak blood flow and endurance.</p>
                    </div>
                    <span class="text-xs font-bold text-black bg-amber-500 px-4 py-2 rounded-xl group-hover:scale-105 transition-transform">Shop Now</span>
                </a>

                <!-- Product 2: PRIME TIME -->
                <a href="#primetime" class="glass-card p-6 rounded-[2rem] flex flex-col md:flex-row md:items-center gap-6 group">
                    <div class="w-14 h-14 rounded-2xl bg-orange-500/10 flex items-center justify-center text-orange-400 shrink-0 border border-orange-500/10">
                        <i data-lucide="flame" class="w-6 h-6"></i>
                    </div>
                    <div class="flex-1">
                        <h4 class="text-xl font-bold text-white mb-1 group-hover:text-orange-400 transition-colors">PRIME TIME</h4>
                        <p class="text-gray-500 text-sm leading-relaxed">Fast-acting booster designed for high-stakes performance.</p>
                    </div>
                    <span class="text-xs font-bold text-black bg-white px-4 py-2 rounded-xl group-hover:bg-amber-500 transition-colors">Shop Now</span>
                </a>

                <!-- Product 3: MACA DADDY (Coming Soon) -->
                <div class="glass-card p-6 rounded-[2rem] flex flex-col md:flex-row md:items-center gap-6 group opacity-70 coming-soon">
                    <div class="w-14 h-14 rounded-2xl bg-white/5 flex items-center justify-center text-gray-400 shrink-0 border border-white/5">
                        <i data-lucide="lock" class="w-6 h-6"></i>
                    </div>
                    <div class="flex-1">
                        <div class="flex items-center gap-2 mb-1">
                            <h4 class="text-xl font-bold text-white">MACA DADDY</h4>
                            <span class="text-[9px] font-black bg-amber-500/10 text-amber-500 border border-amber-500/20 px-2 py-0.5 rounded uppercase tracking-wider">Coming Soon</span>
                        </div>
                        <p class="text-gray-500 text-sm leading-relaxed">The ultimate natural drive enhancer and hormone optimizer.</p>
                    </div>
                    <span class="text-xs font-bold text-gray-500 border border-white/10 px-4 py-2 rounded-xl cursor-not-allowed">Locked</span>
                </div>
            </div>
        </section>

        <!-- Signature Product Spotlight -->
        <section id="pressure" class="mb-24 reveal">
            <h3 class="mono text-[11px] uppercase tracking-[0.3em] text-gray-500 font-bold mb-6 px-1 text-center">Bestseller</h3>
            <div class="glass-card p-3 rounded-[3rem] relative overflow-hidden group">
                <div class="bg-black/60 rounded-[2.5rem] overflow-hidden border border-white/5 aspect-video md:aspect-[21/9] flex items-center justify-center relative">
                    <div class="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent z-10"></div>
                    <div class="text-center z-20 px-8">
                        <div class="w-20 h-20 bg-amber-500/10 text-amber-500 rounded-3xl flex items-center justify-center mx-auto mb-6 border border-amber-500/20 shadow-[0_0_50px_rgba(212,175,55,0.2)]">
                            <i data-lucide="zap" class="w-10 h-10"></i>
                        </div>
                        <h4 class="text-3xl font-black mb-2 tracking-tighter italic">PRESSURE</h4>
                        <p class="text-gray-400 text-sm max-w-sm mx-auto font-light leading-relaxed">The only daily support system you need to keep things running smooth.</p>
                    </div>
                </div>
                <div class="p-8 text-center">
                    <ul class="flex flex-wrap justify-center gap-x-6 gap-y-2 mb-8 text-[10px] font-bold text-gray-400 uppercase tracking-widest">
                        <li class="flex items-center gap-2"><i data-lucide="check" class="w-3 h-3 text-amber-500"></i> Daily Vitality Support</li>
                        <li class="flex items-center gap-2"><i data-lucide="check" class="w-3 h-3 text-amber-500"></i> Fast Checkout</li>
                        <li class="flex items-center gap-2"><i data-lucide="check" class="w-3 h-3 text-amber-500"></i> Discrete Shipping</li>
                    </ul>
                    <button onclick="redirectToStore()" class="w-full py-5 bg-amber-500 text-black rounded-2xl font-black text-lg hover:scale-[0.99] transition-all active:scale-95 shadow-xl shadow-amber-500/10">
                        Buy PRESSURE
                    </button>
                    <p class="mono text-[9px] text-gray-600 mt-6 uppercase tracking-[0.4em] font-bold">Secure SSL Checkout Protocol</p>
                </div>
            </div>
        </section>

        <!-- Footer -->
        <footer class="pt-12 border-t border-white/5 text-center reveal">
            <div class="flex justify-center gap-10 mb-12">
                <a href="#" class="text-gray-700 hover:text-white transition-all transform hover:-translate-y-1"><i data-lucide="instagram" class="w-5 h-5"></i></a>
                <a href="#" class="text-gray-700 hover:text-white transition-all transform hover:-translate-y-1"><i data-lucide="music" class="w-5 h-5"></i></a>
                <a href="#" class="text-gray-700 hover:text-white transition-all transform hover:-translate-y-1"><i data-lucide="mail" class="w-5 h-5"></i></a>
                <a href="#" class="text-gray-700 hover:text-white transition-all transform hover:-translate-y-1"><i data-lucide="help-circle" class="w-5 h-5"></i></a>
            </div>
            
            <div class="mono text-[9px] text-gray-800 font-bold uppercase tracking-[0.5em] space-y-6">
                <p>© 2024 MR PLUMBER MAN • VITALITY INFRASTRUCTURE</p>
                <div class="flex justify-center gap-8 opacity-50">
                    <a href="#" class="hover:text-amber-500 transition-colors">PRIVACY</a>
                    <a href="#" class="hover:text-amber-500 transition-colors">FAQ</a>
                    <a href="#" class="hover:text-amber-500 transition-colors">TERMS</a>
                </div>
            </div>
        </footer>

    </main>

    <!-- Success Modal -->
    <div id="successModal" class="fixed inset-0 z-50 flex items-center justify-center p-6 hidden">
        <div class="absolute inset-0 bg-black/95 backdrop-blur-xl"></div>
        <div class="glass-card p-10 rounded-[3rem] max-w-sm w-full text-center relative z-10 border-amber-500/30">
            <div class="w-20 h-20 bg-amber-500/10 text-amber-500 rounded-full flex items-center justify-center mx-auto mb-6 border border-amber-500/20 shadow-[0_0_40px_rgba(212,175,55,0.3)]">
                <i data-lucide="check" class="w-10 h-10"></i>
            </div>
            <h3 class="text-2xl font-bold mb-3 text-white tracking-tight">You’re in.</h3>
            <p class="text-gray-500 text-sm mb-8 leading-relaxed font-light">Redirecting you to the store… check your inbox for discounts.</p>
            <button onclick="redirectToStore()" class="w-full py-4 bg-amber-500 text-black font-black rounded-2xl active:scale-95 transition-transform uppercase tracking-widest text-[10px] mono">Continue to Store</button>
        </div>
    </div>

    <script>
        // Initialize Lucide Icons
        lucide.createIcons();

        // Reveal Animation on Scroll
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

        document.querySelectorAll('.reveal').forEach(el => observer.observe(el));

        // Form Logic
        const emailForm = document.getElementById('emailForm');
        const successModal = document.getElementById('successModal');
        const REDIRECT_URL = "https://mrplumberman.com";

        emailForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const btn = emailForm.querySelector('button');
            const originalText = btn.innerText;
            
            btn.innerText = "SENDING...";
            btn.disabled = true;

            // Step 1: Show Success Modal
            setTimeout(() => {
                successModal.classList.remove('hidden');
                btn.innerText = originalText;
                btn.disabled = false;
                emailForm.reset();

                // Step 2: Automatic Redirect after 2 seconds
                setTimeout(() => {
                    window.location.href = REDIRECT_URL;
                }, 2000);
            }, 1200);
        });

        // Immediate Redirect on Button Click
        function redirectToStore() {
            window.location.href = REDIRECT_URL;
        }

        // Mouse Glow Effect for Cards
        document.querySelectorAll('.glass-card').forEach(card => {
            card.addEventListener('mousemove', e => {
                const rect = card.getBoundingClientRect();
                const x = e.clientX - rect.left;
                const y = e.clientY - rect.top;
                card.style.setProperty('--mouse-x', `${x}px`);
                card.style.setProperty('--mouse-y', `${y}px`);
            });
        });
    </script>
</body>
</html>
