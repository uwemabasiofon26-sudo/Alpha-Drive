// Vercel Serverless Function — creates a Stripe-hosted Checkout Session for
// the cart and returns its URL. The frontend just redirects the browser
// there; Stripe collects payment details itself (nothing card-related ever
// touches our own server, which is what keeps this out of PCI-DSS scope).
//
// Requires the STRIPE_SECRET_KEY environment variable (Vercel → Project →
// Settings → Environment Variables). Get it from the Stripe Dashboard →
// Developers → API keys. Use a test-mode key (starts "sk_test_") until
// you're ready to go live.
import Stripe from "stripe";

export default async function handler(req, res) {
  if (req.method !== "POST") {
    res.setHeader("Allow", "POST");
    return res.status(405).json({ error: "Method not allowed" });
  }

  if (!process.env.STRIPE_SECRET_KEY) {
    console.error("STRIPE_SECRET_KEY is not set");
    return res.status(500).json({ error: "Payments are not configured yet." });
  }

  const stripe = new Stripe(process.env.STRIPE_SECRET_KEY, { apiVersion: "2024-06-20" });

  try {
    const { items, email, shipping } = req.body || {};

    if (!Array.isArray(items) || items.length === 0) {
      return res.status(400).json({ error: "Cart is empty." });
    }

    const line_items = items.map((item) => ({
      price_data: {
        currency: "nzd",
        product_data: {
          name: item.name,
          metadata: {
            purchaseType: item.purchaseType || "one_time",
            size: item.size || "",
            color: item.color || "",
          },
        },
        unit_amount: Math.round(Number(item.price) * 100), // NZD cents
      },
      quantity: item.quantity || 1,
    }));

    const origin = req.headers.origin || `https://${req.headers.host}`;

    const session = await stripe.checkout.sessions.create({
      mode: "payment",
      line_items,
      customer_email: email || undefined,
      shipping_address_collection: { allowed_countries: ["NZ", "AU"] },
      success_url: `${origin}/checkout?success=true&session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${origin}/checkout?canceled=true`,
      metadata: {
        shippingFirstName: shipping?.firstName || "",
        shippingLastName: shipping?.lastName || "",
        shippingAddress: shipping?.address || "",
        shippingCity: shipping?.city || "",
        shippingPostcode: shipping?.postcode || "",
        shippingCountry: shipping?.country || "",
      },
    });

    return res.status(200).json({ url: session.url });
  } catch (err) {
    console.error("create-checkout-session error:", err);
    return res.status(500).json({ error: "Could not start checkout. Please try again." });
  }
}
