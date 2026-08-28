// Static product catalog for Alpha Valour.
// No database or CMS — this file IS the source of truth for product data.
// To add or edit a product, edit this file directly and redeploy.

import alphaHavoc from "@/assets/products/alpha-havoc.jpg";
import alphaHavocFacts from "@/assets/products/alpha-havoc-facts.jpg";
import alphaDrive from "@/assets/products/alpha-drive.jpeg";
import alphaDriveFacts from "@/assets/products/alpha-drive-facts.jpg";
import alphaCreatine from "@/assets/products/alpha-creatine.jpg";
import alphaGrow from "@/assets/products/alpha-grow.jpg";
import alphaFuel from "@/assets/products/alpha-fuel.jpg";
import alphaStack from "@/assets/products/alpha-stack.jpg";
import tshirtBlack from "@/assets/products/tshirt-black.jpeg";
import tshirtWhite from "@/assets/products/tshirt-white.jpeg";

// Shape reference (every field used somewhere in the UI):
// {
//   id, slug, name, tagline, description,
//   category: "supplement" | "apparel" | "stack",
//   image, supplement_facts_image?,
//   price, subscription_price?,
//   benefits?: string[], ingredients?: string[],
//   servings?, size?, usage?,
//   colors?: string[], sizes?: string[], fit?: string,
//   sort_order?,
// }

export const PRODUCTS = [
  {
    id: "havoc",
    slug: "havoc",
    name: "HAVOC",
    tagline: "Extreme Pre-Workout",
    description:
      "A high-intensity pre-workout built for pump, endurance and focus — Raspberry Lemonade flavour, dosed for output that lasts the whole session.",
    category: "supplement",
    image: alphaHavoc,
    supplement_facts_image: alphaHavocFacts,
    price: 69.99,
    subscription_price: 59.99,
    benefits: [
      "Supports nitric oxide production and blood flow",
      "Buffers muscular fatigue during high-intensity sets",
      "Clean, dosed stimulation without the crash",
    ],
    // Dosages below follow the detailed supplement-facts panel (the
    // authoritative reference), which differs slightly from the older
    // front-of-bottle copy.
    ingredients: [
      "L-Citrulline — 3500mg",
      "Beta-Alanine — 3200mg",
      "Taurine — 2000mg",
      "L-Tyrosine — 1000mg",
      "Caffeine Anhydrous — 200mg",
    ],
    servings: "20 servings",
    size: "200g · Raspberry Lemonade",
    usage: "Mix 1 scoop (10g) with water 20–30 minutes before training.",
    sort_order: 1,
  },
  {
    id: "drive",
    slug: "drive",
    name: "DRIVE",
    tagline: "Premium Daily Performance Multi",
    description:
      "A 2-system daily vitality formula — a complete multivitamin and mineral foundation, plus a vitality and performance blend — in one 6-capsule daily pack.",
    category: "supplement",
    image: alphaDrive,
    supplement_facts_image: alphaDriveFacts,
    price: 49.99,
    subscription_price: 42.99,
    benefits: [
      "Complete multivitamin and mineral foundation",
      "Oyster extract, maca and ginseng for vitality",
      "Supports energy, stamina and focus",
    ],
    ingredients: [
      "Complete Multivitamin + Mineral Formula — 1 capsule",
      "Oyster Extract — 1000mg",
      "Black Maca Extract (10:1) — 1000mg",
      "Panax Ginseng Extract (20% Ginsenosides) — 300mg",
    ],
    servings: "15 servings",
    size: "6 capsule daily pack",
    usage: "Take all 6 capsules together once daily, with food.",
    sort_order: 2,
  },
  {
    id: "creatine",
    slug: "creatine",
    name: "CREATINE",
    tagline: "Creatine + Electrolytes",
    description:
      "Creatine and electrolytes for strength, performance and hydration — Raspberry Lemonade flavour, easy to mix any time of day.",
    category: "supplement",
    image: alphaCreatine,
    price: 44.99,
    subscription_price: 38.99,
    benefits: [
      "Supports strength and power output",
      "Electrolytes for hydration support",
      "Simple, effective daily dose",
    ],
    ingredients: [
      "Creatine — 5000mg",
      "Sodium — 300mg",
      "Potassium — 200mg",
    ],
    servings: "30 servings",
    size: "250g · Raspberry Lemonade",
    usage: "Mix 1 scoop with water, any time of day.",
    sort_order: 3,
  },
  {
    id: "grow",
    slug: "grow",
    name: "GROW",
    tagline: "Premium Protein",
    description:
      "A smooth, creamy 25g protein blend designed for easy mixing and real recovery — Chocolate Hazelnut flavour, no compromise.",
    category: "supplement",
    image: alphaGrow,
    price: 89.99,
    subscription_price: 76.99,
    benefits: [
      "25g of protein per serving",
      "Smooth, creamy texture that mixes easily",
      "Supports post-training muscle recovery",
    ],
    ingredients: ["Premium Protein Blend — 25g"],
    servings: "~33 servings",
    size: "1kg · Chocolate Hazelnut",
    usage: "Mix 1–2 scoops with water or milk post-workout.",
    sort_order: 4,
  },
  {
    id: "fuel",
    slug: "fuel",
    name: "FUEL",
    tagline: "Instant Cream of Rice",
    description:
      "A fast-digesting, low-fibre carbohydrate source in a smooth instant cream of rice — Chocolate Hazelnut flavour, easy mix, built to refill glycogen around training.",
    category: "supplement",
    image: alphaFuel,
    price: 39.99,
    subscription_price: 33.99,
    benefits: [
      "Fast-digesting carbohydrate source",
      "Smooth, easy-mix texture",
      "Supports glycogen resynthesis around training",
    ],
    ingredients: ["Instant Cream of Rice — 40g"],
    servings: "25 servings",
    size: "1kg · Chocolate Hazelnut",
    usage: "Mix with water immediately before or after training.",
    sort_order: 5,
  },
  {
    id: "performance-tee-black",
    slug: "performance-tee-black",
    name: "Performance Tee — Black",
    tagline: "Athletic Apparel",
    description:
      "A raglan-sleeve performance tee in black with the Alpha Valour crest — built for training, styled for everywhere else.",
    category: "apparel",
    image: tshirtBlack,
    price: 45.0,
    fit: "One Size – Stretch Fit",
    sort_order: 6,
  },
  {
    id: "performance-tee-white",
    slug: "performance-tee-white",
    name: "Performance Tee — White",
    tagline: "Athletic Apparel",
    description:
      "A raglan-sleeve performance tee in white with the Alpha Valour crest — built for training, styled for everywhere else.",
    category: "apparel",
    image: tshirtWhite,
    price: 45.0,
    fit: "One Size – Stretch Fit",
    sort_order: 7,
  },
  {
    id: "complete-stack",
    slug: "complete-stack",
    name: "The Complete Stack",
    tagline: "Monthly Performance System",
    description:
      "HAVOC, DRIVE, CREATINE, GROW and FUEL together as a complete monthly performance system. Build. Fuel. Perform.",
    category: "stack",
    image: alphaStack,
    price: 299.96,
    subscription_price: 259.99,
    sort_order: 8,
  },
];
