import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Check, Lock } from "lucide-react";
import { Image } from "@/components/ui/image";
import { useCart } from "@/context/CartContext";
import { formatNZD } from "@/lib/brand";
import ScrollReveal from "@/components/ScrollReveal";

export default function Checkout() {
  const { items, subtotal, clear } = useCart();
  const navigate = useNavigate();
  const [placed, setPlaced] = useState(false);
  const [form, setForm] = useState({
    email: "", firstName: "", lastName: "", address: "", city: "", postcode: "", country: "New Zealand",
  });

  const shipping = subtotal > 0 ? (subtotal >= 100 ? 0 : 9.99) : 0;
  const total = subtotal + shipping;

  const update = (k) => (e) => setForm((f) => ({ ...f, [k]: e.target.value }));

  const submit = (e) => {
    e.preventDefault();
    setPlaced(true);
    clear();
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  if (placed) {
    return (
      <div className="bg-av-deep pt-36 pb-24 min-h-screen">
        <div className="mx-auto max-w-[1400px] px-5 md:px-10 text-center">
          <div className="mx-auto grid place-items-center h-16 w-16 rounded-full bg-av-gold text-av-deep mb-6">
            <Check className="h-8 w-8" />
          </div>
          <h1 className="font-display text-4xl md:text-5xl font-bold text-av-alloy">Order confirmed</h1>
          <p className="mt-4 text-av-alloy/60 max-w-md mx-auto">
            Thank you. A confirmation email is on its way to {form.email || "your inbox"} with your order details.
          </p>
          <Link to="/shop" className="mt-8 inline-flex items-center gap-2 bg-av-gold text-av-deep px-7 py-3.5 rounded-full text-xs uppercase tracking-[0.2em] font-bold hover:brightness-110 transition">
            Continue Shopping
          </Link>
        </div>
      </div>
    );
  }

  if (items.length === 0) {
    return (
      <div className="bg-av-deep pt-36 pb-24 min-h-screen text-center">
        <h1 className="font-display text-4xl font-bold text-av-alloy">Your cart is empty</h1>
        <Link to="/shop" className="mt-6 inline-block text-av-gold underline underline-offset-4">Shop the range</Link>
      </div>
    );
  }

  return (
    <div className="bg-av-deep pt-28 md:pt-36 pb-24">
      <div className="mx-auto max-w-[1400px] px-5 md:px-10">
        <ScrollReveal>
          <p className="text-[11px] uppercase tracking-[0.3em] text-av-gold mb-3">Checkout</p>
          <h1 className="font-display text-4xl md:text-5xl font-bold tracking-tight text-av-alloy">Complete your order</h1>
        </ScrollReveal>

        <form onSubmit={submit} className="mt-12 grid lg:grid-cols-3 gap-10">
          <div className="lg:col-span-2 space-y-8">
            <section>
              <h2 className="font-display text-xl font-bold text-av-alloy mb-4">Contact</h2>
              <Field label="Email" type="email" value={form.email} onChange={update("email")} required />
            </section>
            <section>
              <h2 className="font-display text-xl font-bold text-av-alloy mb-4">Shipping Address</h2>
              <div className="grid sm:grid-cols-2 gap-4">
                <Field label="First name" value={form.firstName} onChange={update("firstName")} required />
                <Field label="Last name" value={form.lastName} onChange={update("lastName")} required />
                <div className="sm:col-span-2"><Field label="Address" value={form.address} onChange={update("address")} required /></div>
                <Field label="City" value={form.city} onChange={update("city")} required />
                <Field label="Postcode" value={form.postcode} onChange={update("postcode")} required />
                <div className="sm:col-span-2"><Field label="Country" value={form.country} onChange={update("country")} required /></div>
              </div>
            </section>
            <section>
              <h2 className="font-display text-xl font-bold text-av-alloy mb-4">Payment</h2>
              <div className="border border-av-teal/40 p-5 rounded flex items-center gap-3 text-av-alloy/60 text-sm">
                <Lock className="h-4 w-4 text-av-gold" />
                Secure payment details are collected at the next step. This demo checkout confirms the order without charging.
              </div>
            </section>
          </div>

          <div className="lg:col-span-1">
            <div className="border border-av-teal/40 p-6 sticky top-28">
              <h2 className="font-display text-xl font-bold text-av-alloy mb-5">Order Summary</h2>
              <div className="space-y-4 max-h-72 overflow-auto pr-1">
                {items.map((item) => (
                  <div key={item.cartId} className="flex gap-3">
                    <div className="w-14 h-16 bg-av-teal/20 shrink-0 overflow-hidden">
                      <Image src={item.image} alt={item.name} fittingType="fill" className="h-full w-full" />
                    </div>
                    <div className="flex-1 text-sm">
                      <p className="text-av-alloy font-semibold">{item.name}</p>
                      <p className="text-xs text-av-alloy/50">
                        {item.purchaseType === "subscription" ? "Monthly" : "One-time"}{item.size ? ` · ${item.size}` : ""} · Qty {item.quantity}
                      </p>
                      <p className="text-av-gold mt-1">{formatNZD(item.price * item.quantity)}</p>
                    </div>
                  </div>
                ))}
              </div>
              <div className="border-t border-av-teal/40 mt-5 pt-5 space-y-2 text-sm">
                <div className="flex justify-between text-av-alloy/70"><span>Subtotal</span><span>{formatNZD(subtotal)}</span></div>
                <div className="flex justify-between text-av-alloy/70"><span>Shipping</span><span>{shipping === 0 ? "Free" : formatNZD(shipping)}</span></div>
                <div className="flex justify-between items-baseline pt-2 border-t border-av-teal/40 mt-2">
                  <span className="text-av-alloy">Total</span>
                  <span className="font-display text-2xl font-bold text-av-gold">{formatNZD(total)}</span>
                </div>
              </div>
              <button type="submit" className="mt-6 w-full inline-flex items-center justify-center gap-2 bg-av-gold text-av-deep px-6 py-4 rounded-full text-sm uppercase tracking-[0.2em] font-bold hover:brightness-110 transition">
                Place Order
              </button>
              <p className="mt-3 text-center text-[10px] uppercase tracking-[0.2em] text-av-alloy/40">
                {form.country || "New Zealand"} · NZD
              </p>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

function Field({ label, type = "text", value, onChange, required }) {
  return (
    <div>
      <label className="block text-[11px] uppercase tracking-[0.2em] text-av-alloy/50 mb-2">{label}</label>
      <input
        type={type}
        required={required}
        value={value}
        onChange={onChange}
        className="w-full bg-transparent border border-av-teal rounded px-4 py-3 text-av-alloy focus:border-av-gold outline-none transition"
      />
    </div>
  );
}
