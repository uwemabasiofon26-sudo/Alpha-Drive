// Static product catalog for Alpha Valour.
// No database or CMS — this file IS the source of truth for product data.
// To add or edit a product, edit this file directly and redeploy.

import alphaHavoc from "@/assets/products/alpha-havoc.jpg";
import alphaHavocFacts from "@/assets/products/alpha-havoc-facts.jpg";
import alphaDrive from "@/assets/products/alpha-drive.jpg";
import alphaDriveFacts from "@/assets/products/alpha-drive-facts.jpg";
import alphaCreatine from "@/assets/products/alpha-creatine.jpg";
import alphaGrow from "@/assets/products/alpha-grow.jpg";
import alphaGlycoload from "@/assets/products/alpha-glycoload.jpg";
import alphaStack from "@/assets/products/alpha-stack.jpg";
import tshirtBlack from "@/assets/products/tshirt-black.jpeg";
import tshirtWhite from "@/assets/products/tshirt-white.jpeg";
import alphaNitroxar from "@/assets/products/alpha-nitroxar.jpg";
import alphaNightRecovery from "@/assets/products/alpha-night-recovery.jpg";

// Shape reference (every field used somewhere in the UI):
// {
//   id, slug, name, tagline, description,
//   category: "supplement" | "apparel" | "stack",
//   image, supplement_facts_image?,
//   inStock: boolean,
//   price, compare_at_price?,
//   benefits?: string[], ingredients?: string[],
//   servings?, size?, usage?,
//   colors?: string[], sizes?: string[], fit?: string,
//   sort_order?,
// }

export const PRODUCTS = [
  {
    id: "havoc",
    inStock: true,
    slug: "havoc",
    name: "HAVOC",
    tagline: "Extreme Pre-Workout",
    description:
      "A high-intensity pre-workout built for pump, endurance and focus — Raspberry Lemonade flavour, dosed for output that lasts the whole session.",
    category: "supplement",
    image: alphaHavoc,
    supplement_facts_image: alphaHavocFacts,
    price: 69.99,
    benefits: [
      "Supports nitric oxide production and blood flow",
      "Buffers muscular fatigue during high-intensity sets",
      "Clean, dosed stimulation without the crash",
    ],
    // Dosages below match the Supplement Facts panel.
    ingredients: [
      "L-Citrulline — 4500mg",
      "L-Arginine — 2500mg",
      "Taurine — 2000mg",
      "L-Theanine — 150mg",
      "Caffeine Anhydrous — 150mg",
    ],
    servings: "20 servings",
    size: "200g · Raspberry Lemonade",
    usage: "Mix 1 scoop with water 20–30 minutes before training.",
    sort_order: 1,
  },
  {
    id: "drive",
    inStock: true,
    slug: "drive",
    name: "DRIVE",
    tagline: "Premium Daily Performance Multi",
    description:
      "A 2-system daily vitality formula — a complete multivitamin and mineral foundation, plus a vitality and performance blend — in one 6-capsule daily pack.",
    category: "supplement",
    image: alphaDrive,
    supplement_facts_image: alphaDriveFacts,
    price: 79,
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
    servings: "20 servings",
    size: "6 capsule daily pack · 120 capsules",
    usage: "Take all 6 capsules together once daily, with food.",
    sort_order: 2,
  },
  {
    id: "creatine",
    inStock: true,
    slug: "creatine",
    name: "CREATINE",
    tagline: "Creatine + Electrolytes",
    description:
      "Creatine and electrolytes for strength, performance and hydration — Raspberry Lemonade flavour, easy to mix any time of day.",
    category: "supplement",
    image: alphaCreatine,
    price: 44.99,
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
    inStock: true,
    slug: "grow",
    name: "GROW",
    tagline: "Premium Protein",
    description:
      "A smooth, creamy 25g protein blend designed for easy mixing and real recovery — Chocolate Hazelnut flavour, no compromise.",
    category: "supplement",
    image: alphaGrow,
    price: 89.99,
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
    id: "glycoload",
    inStock: true,
    slug: "glycoload",
    name: "GLYCOLOAD",
    tagline: "Fast-Digesting Carbohydrate",
    description:
      "A fast-digesting maltodextrin carbohydrate powder for athletes and gym users who need convenient training fuel — Raspberry Lemonade flavour, mixes easily with water, use before, during or after training.",
    category: "supplement",
    image: alphaGlycoload,
    // Launch pricing: selling at 39.99, regular RRP 44.99. The
    // compare_at_price renders as a struck-through "was" price next to the
    // live price; remove this field to end the launch offer.
    price: 39.99,
    compare_at_price: 44.99,
    benefits: [
      "Fast-digesting carbohydrate source",
      "Helps support muscle glycogen replenishment after exercise",
      "Provides convenient training fuel",
      "Suitable before, during or after training",
      "Easy to mix with water or your favourite sports drink",
      "Easy way to increase daily carbohydrate intake",
    ],
    ingredients: ["Maltodextrin"],
    servings: "1kg pouch",
    size: "1kg · Raspberry Lemonade",
    usage: "Mix the recommended serving with water and shake until fully dissolved. Can be used pre-workout, intra-workout or post-workout. Amount required depends on body weight, training duration and individual carbohydrate needs.",
    sort_order: 5,
  },
  {
    id: "nitroxar",
    inStock: true,
    slug: "nitroxar",
    name: "NITROXAR",
    tagline: "Men's Blood Flow & Performance",
    description:
      "A high-strength men's performance formula developed to support healthy circulation, physical drive and everyday stamina — fully disclosed, no proprietary blends.",
    category: "supplement",
    image: alphaNitroxar,
    price: 79,
    benefits: [
      "Supports healthy blood flow and circulation",
      "Supports physical performance and stamina",
      "Supports male vitality and drive",
      "Supports normal testosterone levels through zinc",
      "Fully disclosed formula with clearly stated dosages",
    ],
    ingredients: [
      "L-Citrulline — 3600mg",
      "Beetroot Extract — 600mg",
      "Horny Goat Weed Extract — 540mg",
      "Zinc — 20mg",
      "Black Pepper Extract — 12mg",
    ],
    servings: "15 servings",
    size: "90 Capsules",
    usage: "Take 6 capsules daily with water. Do not exceed the recommended daily serving.",
    sort_order: 6,
  },
  {
    id: "alpha-night-recovery",
    inStock: true,
    slug: "alpha-night-recovery",
    name: "ALPHA NIGHT RECOVERY",
    tagline: "Sleep & Recovery Formula",
    description:
      "A comprehensive nighttime formula created to support relaxation, restful sleep and overnight recovery — fully disclosed, no proprietary blends.",
    category: "supplement",
    image: alphaNightRecovery,
    price: 79,
    benefits: [
      "Supports relaxation before bedtime",
      "Supports restful, quality sleep",
      "Helps maintain healthy sleep patterns",
      "Supports overnight muscle and nervous-system recovery",
      "Helps reduce feelings of everyday tension",
    ],
    ingredients: [
      "Magnesium — 335mg",
      "Valerian Root Extract — 400mg",
      "Passionflower Extract — 300mg",
      "L-Tryptophan — 300mg",
    ],
    servings: "15 servings",
    size: "90 Capsules",
    usage: "Take 6 capsules with water approximately 30–60 minutes before bedtime.",
    sort_order: 7,
  },
  {
    id: "performance-tee-black",
    inStock: true,
    slug: "performance-tee-black",
    name: "Performance Tee — Black",
    tagline: "Athletic Apparel",
    description:
      "A raglan-sleeve performance tee in black with the Alpha Valour crest — built for training, styled for everywhere else.",
    category: "apparel",
    image: tshirtBlack,
    price: 45.0,
    fit: "One Size – Stretch Fit",
    sort_order: 8,
  },
  {
    id: "performance-tee-white",
    inStock: true,
    slug: "performance-tee-white",
    name: "Performance Tee — White",
    tagline: "Athletic Apparel",
    description:
      "A raglan-sleeve performance tee in white with the Alpha Valour crest — built for training, styled for everywhere else.",
    category: "apparel",
    image: tshirtWhite,
    price: 45.0,
    fit: "One Size – Stretch Fit",
    sort_order: 9,
  },
  {
    id: "complete-stack",
    inStock: true,
    slug: "complete-stack",
    name: "The Complete Stack",
    tagline: "Complete Performance System",
    description:
      "HAVOC, DRIVE, CREATINE, GROW and GLYCOLOAD together as a complete performance system. Build. Fuel. Perform.",
    category: "stack",
    image: alphaStack,
    price: 259.99,
    sort_order: 10,
  },
];
