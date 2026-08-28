import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Instagram, Facebook } from "lucide-react";
import Logo from "@/components/Logo";
import Newsletter from "@/components/Newsletter";
import { CURRENCY } from "@/lib/brand";

function TikTokIcon({ className }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64c.29 0 .57.04.84.12V9.4a6.33 6.33 0 0 0-1-.05A6.34 6.34 0 1 0 14.37 19V11.5a8.16 8.16 0 0 0 4.76 1.51V9.56a4.85 4.85 0 0 1-.46-.01z" />
    </svg>
  );
}

function useLocalTime() {
  const [now, setNow] = useState(new Date());
  useEffect(() => {
    const t = setInterval(() => setNow(new Date()), 1000);
    return () => clearInterval(t);
  }, []);
  return now.toLocaleTimeString("en-NZ", {
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
    hour12: false,
    timeZone: "Pacific/Auckland",
  });
}

export default function Footer() {
  const time = useLocalTime();
  return (
    <footer className="relative border-t border-av-teal/40 bg-av-deep mt-24">
      {/* Newsletter */}
      <div className="border-b border-av-teal/30 py-12 md:py-16">
        <div className="mx-auto max-w-[1400px] px-5 md:px-10">
          <Newsletter />
        </div>
      </div>

      <div className="mx-auto max-w-[1400px] px-5 md:px-10 py-16 md:py-24">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-10">
          <div className="col-span-2 md:col-span-1">
            <Logo />
            <p className="mt-5 text-sm text-av-alloy/60 leading-relaxed max-w-xs">
              Premium performance nutrition and athletic apparel. Built for people who train with purpose.
            </p>
          </div>

          <div>
            <h4 className="text-[11px] uppercase tracking-[0.3em] text-av-gold mb-5">Shop</h4>
            <ul className="space-y-3 text-sm text-av-alloy/70">
              <li><Link to="/shop" className="hover:text-av-gold transition-colors">All Products</Link></li>
              <li><Link to="/performance-nutrition" className="hover:text-av-gold transition-colors">Performance Nutrition</Link></li>
              <li><Link to="/stack" className="hover:text-av-gold transition-colors">The Monthly Stack</Link></li>
              <li><Link to="/shop?category=apparel" className="hover:text-av-gold transition-colors">Athletic Apparel</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-[11px] uppercase tracking-[0.3em] text-av-gold mb-5">Company</h4>
            <ul className="space-y-3 text-sm text-av-alloy/70">
              <li><Link to="/about" className="hover:text-av-gold transition-colors">About Us</Link></li>
              <li><Link to="/about#faq" className="hover:text-av-gold transition-colors">FAQ</Link></li>
              <li><Link to="/contact" className="hover:text-av-gold transition-colors">Contact</Link></li>
              <li><Link to="/policy" className="hover:text-av-gold transition-colors">Policies</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-[11px] uppercase tracking-[0.3em] text-av-gold mb-5">System Status</h4>
            {/* Definition list: label/value pairs are machine-readable for
                screen readers, unlike plain stacked divs. */}
            <dl className="space-y-4">
              <div>
                <dt className="text-[10px] uppercase tracking-[0.25em] text-av-alloy/40">Currency</dt>
                <dd className="text-av-alloy mt-0.5">{CURRENCY}</dd>
              </div>
              <div>
                <dt className="text-[10px] uppercase tracking-[0.25em] text-av-alloy/40">Shipping</dt>
                <dd className="text-emerald-400 mt-0.5">Operational</dd>
              </div>
              <div>
                <dt className="text-[10px] uppercase tracking-[0.25em] text-av-alloy/40">NZ Time</dt>
                <dd className="text-av-alloy mt-0.5 font-mono">{time}</dd>
              </div>
            </dl>
            <div className="flex gap-4 mt-6">
              <a href="#" aria-label="Facebook" className="text-av-alloy/60 hover:text-av-gold transition-colors"><Facebook className="h-5 w-5" /></a>
              <a href="#" aria-label="Instagram" className="text-av-alloy/60 hover:text-av-gold transition-colors"><Instagram className="h-5 w-5" /></a>
              <a href="#" aria-label="TikTok" className="text-av-alloy/60 hover:text-av-gold transition-colors"><TikTokIcon className="h-5 w-5" /></a>
            </div>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-av-teal/30">
          <div className="flex flex-col md:flex-row items-center justify-between gap-5">
            <p className="text-[11px] uppercase tracking-[0.2em] text-av-alloy/40 order-2 md:order-1">
              © {new Date().getFullYear()} ALPHA VALOUR — All Rights Reserved
            </p>
            <p className="text-[11px] uppercase tracking-[0.3em] text-av-gold/50 order-1 md:order-2">
              Fuel Your Strength · Elevate Your Performance
            </p>
            <div className="flex items-center gap-3 text-[11px] uppercase tracking-[0.2em] text-av-alloy/40 order-3">
              <Link to="/policy" className="hover:text-av-gold transition-colors">Privacy</Link>
              <span className="text-av-teal">·</span>
              <Link to="/policy" className="hover:text-av-gold transition-colors">Terms</Link>
              <span className="text-av-teal">·</span>
              <Link to="/policy" className="hover:text-av-gold transition-colors">Shipping & Returns</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
