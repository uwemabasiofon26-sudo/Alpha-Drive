import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowUpRight, Plus } from "lucide-react";
import { Image } from "@/components/ui/image";
import { useProducts } from "@/hooks/useProducts";
import { formatNZD } from "@/lib/brand";
import ScrollReveal from "@/components/ScrollReveal";
import ParallaxText from "@/components/ParallaxText";
import HeroSlideshow from "@/components/HeroSlideshow";
import ReviewCarousel from "@/components/ReviewCarousel";

const WHY = [
  { t: "Purpose-built performance products", d: "Engineered around real training demands — not generic wellness trends." },
  { t: "Fully disclosed formulas", d: "Every ingredient and dose printed clearly. No proprietary blends hiding under-dosed filler." },
  { t: "Effective, practical dosages", d: "Clinical, functional amounts that actually move the needle session after session." },
  { t: "Individual or monthly stack", d: "Buy what you need, or subscribe to the complete system and save." },
  { t: "Built for consistency", d: "Designed to support long-term progress, not a single hype cycle." },
];

export default function Home() {
  const { data: products } = useProducts();
  const all = products || [];
  const supplements = all.filter((p) => p.category === "supplement");
  const apparel = all.filter((p) => p.category === "apparel");
  const featured = supplements.slice(0, 4);
  const slideshowImages = supplements.map((p) => p.image).filter(Boolean);
  const stack = all.find((p) => p.category === "stack");
  const stackPrice = stack?.subscription_price || 259.99;

  return (
    <div className="bg-av-deep">
      {/* HERO */}
      <section className="relative min-h-[100svh] flex items-end overflow-hidden grain">
        <div className="absolute inset-0">
          {slideshowImages.length > 0 && <HeroSlideshow images={slideshowImages} />}
        </div>

        {/* hero visual */}

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 1 }}
          className="relative z-20 w-full px-5 md:px-10 pb-12 md:pb-16"
        >
          <div className="mx-auto max-w-[1400px] text-center">
            <h2 className="font-display text-3xl sm:text-4xl md:text-6xl font-bold tracking-tight text-av-alloy text-balance">
              Fuel Your Strength.<br />
              <span className="text-av-gold">Elevate Your Performance.</span>
            </h2>
            <div className="mt-6 md:mt-8 flex flex-wrap items-center justify-center gap-3">
              <Link to="/shop" className="group inline-flex items-center gap-2 bg-av-gold text-av-deep px-6 md:px-7 py-3 md:py-3.5 rounded-full text-[11px] md:text-xs uppercase tracking-[0.2em] font-bold hover:brightness-110 transition">
                Shop The Range <ArrowUpRight className="h-4 w-4 transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </Link>
              <Link to="/stack" className="inline-flex items-center gap-2 border-2 border-av-teal text-av-alloy px-6 md:px-7 py-3 md:py-3.5 rounded-full text-[11px] md:text-xs uppercase tracking-[0.2em] font-semibold hover:border-av-gold hover:text-av-gold transition">
                Build Your Stack
              </Link>
            </div>
          </div>
        </motion.div>
      </section>

      {/* RANGE */}
      <section className="relative py-16 md:py-40">
        <div className="mx-auto max-w-[1400px] px-5 md:px-10">
          <ScrollReveal className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10 md:mb-14">
            <div>
              <p className="text-[11px] uppercase tracking-[0.3em] text-av-gold mb-3">Our Performance Range</p>
              <h2 className="font-display text-3xl md:text-6xl font-bold tracking-tight text-av-alloy max-w-2xl">
                A complete system for people who train with purpose.
              </h2>
            </div>
            <Link to="/shop" className="inline-flex items-center gap-2 text-sm uppercase tracking-[0.2em] text-av-alloy hover:text-av-gold transition">
              View all <ArrowUpRight className="h-4 w-4" />
            </Link>
          </ScrollReveal>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-x-4 md:gap-x-6 gap-y-10 md:gap-y-14">
            {featured.map((p, i) => (
              <ScrollReveal key={p.id} delay={i * 0.08}>
                <Link to={`/product/${p.slug}`} className="group block frame-corner relative overflow-hidden">
                  <div className="aspect-[4/5] overflow-hidden bg-av-teal/20">
                    <Image src={p.image} alt={p.name} fittingType="fill" className="h-full w-full transition-transform duration-700 group-hover:scale-105" />
                  </div>
                </Link>
                <div className="mt-3 md:mt-4">
                  <h3 className="font-display text-base md:text-xl font-bold text-av-alloy">{p.name}</h3>
                  <p className="text-xs md:text-sm text-av-alloy/60">{p.tagline}</p>
                  <p className="mt-2 text-av-gold font-semibold text-sm md:text-base">{formatNZD(p.price)}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* APPAREL */}
      {apparel.length > 0 && (
        <section className="relative py-16 md:py-40 border-y border-av-teal/30 overflow-hidden">
          <div className="mx-auto max-w-[1400px] px-5 md:px-10 mb-10 md:mb-14">
            <ScrollReveal>
              <p className="text-[11px] uppercase tracking-[0.3em] text-av-gold mb-3">Athletic Apparel</p>
              <h2 className="font-display text-3xl md:text-6xl font-bold tracking-tight text-av-alloy">
                Wear the valour.
              </h2>
            </ScrollReveal>
          </div>

          {/* Desktop looping carousel */}
          <div className="hidden lg:block">
            <div className="flex gap-6 w-max animate-marquee hover:[animation-play-state:paused]">
              {[...apparel, ...apparel, ...apparel, ...apparel].map((p, i) => (
                <Link key={i} to={`/product/${p.slug}`} className="group block w-72 shrink-0">
                  <div className="frame-corner aspect-[4/5] overflow-hidden bg-av-teal/20">
                    <Image src={p.image} alt={p.name} fittingType="fill" className="h-full w-full transition-transform duration-700 group-hover:scale-105" />
                  </div>
                  <div className="mt-4">
                    <h3 className="font-display text-lg font-bold text-av-alloy">{p.name}</h3>
                    <p className="text-sm text-av-alloy/60">{p.tagline}</p>
                    <p className="mt-2 text-av-gold font-semibold">{formatNZD(p.price)}</p>
                  </div>
                </Link>
              ))}
            </div>
          </div>

          {/* Mobile grid */}
          <div className="lg:hidden px-5 grid grid-cols-2 gap-4">
            {apparel.map((p) => (
              <Link key={p.id} to={`/product/${p.slug}`} className="group block">
                <div className="frame-corner aspect-[4/5] overflow-hidden bg-av-teal/20">
                  <Image src={p.image} alt={p.name} fittingType="fill" className="h-full w-full transition-transform duration-700 group-hover:scale-105" />
                </div>
                <div className="mt-3">
                  <h3 className="font-display text-base font-bold text-av-alloy">{p.name}</h3>
                  <p className="text-xs text-av-alloy/60">{p.tagline}</p>
                  <p className="mt-1 text-av-gold font-semibold text-sm">{formatNZD(p.price)}</p>
                </div>
              </Link>
            ))}
          </div>
        </section>
      )}

      {/* STACK */}
      <section className="relative py-16 md:py-40 overflow-hidden">
        <ParallaxText className="hidden md:flex absolute inset-0 items-center justify-center pointer-events-none">
          <span className="font-display text-[20vw] font-black tracking-tighter text-av-teal/25">STACK</span>
        </ParallaxText>
        <div className="relative mx-auto max-w-[1400px] px-5 md:px-10 grid md:grid-cols-2 gap-10 md:gap-12 items-center">
          <ScrollReveal>
            <p className="text-[11px] uppercase tracking-[0.3em] text-av-gold mb-3">The Alpha Valour Stack</p>
            <h2 className="font-display text-3xl md:text-6xl font-bold tracking-tight text-av-alloy">
              One system. Four products. Total performance.
            </h2>
            <p className="mt-5 md:mt-6 text-av-alloy/70 leading-relaxed max-w-lg text-sm md:text-base">
              HAVOC, DRIVE, GROW and FUEL together as a complete monthly performance system — supporting preparation, training, nutrition and recovery.
            </p>
            <div className="mt-6 md:mt-8 flex items-baseline gap-4 flex-wrap">
              <span className="font-display text-4xl md:text-5xl font-bold text-av-gold">{formatNZD(stackPrice)}</span>
              <span className="text-av-alloy/50 line-through">{formatNZD(299.96)}</span>
              <span className="text-xs uppercase tracking-[0.2em] text-emerald-400 font-semibold">Save $40</span>
            </div>
            <Link to="/stack" className="mt-6 md:mt-8 inline-flex items-center gap-2 bg-av-gold text-av-deep px-6 md:px-7 py-3 md:py-3.5 rounded-full text-[11px] md:text-xs uppercase tracking-[0.2em] font-bold hover:brightness-110 transition">
              Subscribe To The Stack <ArrowUpRight className="h-4 w-4" />
            </Link>
          </ScrollReveal>
          <ScrollReveal delay={0.1} className="grid grid-cols-2 gap-3 md:gap-4">
            {featured.map((p) => (
              <div key={p.id} className="frame-corner aspect-square overflow-hidden bg-av-teal/20">
                <Image src={p.image} alt={p.name} fittingType="fill" className="h-full w-full" />
              </div>
            ))}
          </ScrollReveal>
        </div>
      </section>

      {/* WHY */}
      <section className="py-16 md:py-40">
        <div className="mx-auto max-w-[1400px] px-5 md:px-10">
          <ScrollReveal className="mb-10 md:mb-14">
            <p className="text-[11px] uppercase tracking-[0.3em] text-av-gold mb-3">Why Alpha Valour</p>
            <h2 className="font-display text-3xl md:text-6xl font-bold tracking-tight text-av-alloy max-w-3xl">
              No filler. No noise. Just performance.
            </h2>
          </ScrollReveal>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-px bg-av-teal/30 border border-av-teal/30">
            {WHY.map((w, i) => (
              <ScrollReveal key={i} delay={(i % 3) * 0.06} className="bg-av-deep p-6 md:p-10">
                <h3 className="font-display text-lg md:text-xl font-bold text-av-alloy mb-3">{w.t}</h3>
                <p className="text-sm text-av-alloy/60 leading-relaxed">{w.d}</p>
              </ScrollReveal>
            ))}
            <ScrollReveal delay={0.18} className="bg-av-gold text-av-deep p-6 md:p-10 flex flex-col justify-between">
              <Plus className="h-8 w-8" />
              <div>
                <h3 className="font-display text-xl md:text-2xl font-bold mt-6">Build Your Performance System</h3>
                <Link to="/shop" className="mt-6 inline-flex items-center gap-2 text-sm uppercase tracking-[0.2em] font-bold">
                  Shop The Range <ArrowUpRight className="h-4 w-4" />
                </Link>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* REVIEWS */}
      <section className="py-16 md:py-40 border-y border-av-teal/30">
        <div className="mx-auto max-w-[1400px] px-5 md:px-10">
          <ScrollReveal className="text-center mb-10 md:mb-14">
            <p className="text-[11px] uppercase tracking-[0.3em] text-av-gold mb-3">Trusted By Athletes</p>
            <h2 className="font-display text-3xl md:text-6xl font-bold tracking-tight text-av-alloy">What they say</h2>
          </ScrollReveal>
          <ReviewCarousel />
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 md:py-40 text-center">
        <ScrollReveal className="mx-auto max-w-[1400px] px-5 md:px-10">
          <h2 className="font-display text-3xl md:text-6xl font-bold text-av-alloy">Ready to elevate?</h2>
          <p className="mt-4 text-av-alloy/60 max-w-xl mx-auto text-sm md:text-base">
            Build your performance system and fuel your training with purpose.
          </p>
          <Link to="/shop" className="mt-6 md:mt-8 inline-flex items-center gap-2 bg-av-gold text-av-deep px-7 py-3.5 rounded-full text-xs uppercase tracking-[0.2em] font-bold hover:brightness-110 transition">
            Shop The Range <ArrowUpRight className="h-4 w-4" />
          </Link>
        </ScrollReveal>
      </section>
    </div>
  );
}
