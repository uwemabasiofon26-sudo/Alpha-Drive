// Static product catalog for Alpha Valour.
// No database or CMS — this file IS the source of truth for product data.
// To add or edit a product, edit this file directly and redeploy.

import alphaDrive from "@/assets/products/alpha-drive.jpeg";
import alphaDriveFacts from "@/assets/products/alpha-drive-facts.jpeg";
import alphaHavocFacts from "@/assets/products/alpha-havoc-facts.jpeg";
import alphaFuel from "@/assets/products/alpha-fuel.jpeg";
import alphaGrow from "@/assets/products/alpha-grow.jpeg";
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
//   colors?: string[], sizes?: string[],
//   sort_order?,
// }

export const PRODUCTS = [
  {
    id: "havoc",
    slug: "havoc",
    name: "HAVOC",
    tagline: "Extreme Pre-Workout",
    description:
      "A high-intensity pre-workout built for maximum output — nitric oxide support, buffered endurance and clean, dosed stimulation for training that demands more.",
    category: "supplement",
    // NOTE: no bottle/product photo was supplied for HAVOC yet — only its
    // supplement facts graphic. Replace this with the real product photo
    // when available.
    image: "REPLACE_WITH_HAVOC_PRODUCT_IMAGE",
    supplement_facts_image: alphaHavocFacts,
    price: 69.99,
    subscription_price: 59.99,
    benefits: [
      "Supports nitric oxide production and blood flow",
      "Buffers muscular fatigue during high-intensity sets",
      "Clean, dosed stimulation without the crash",
    ],
    ingredients: [
      "L-Citrulline — 6000mg",
      "Beta-Alanine — 3200mg",
      "Taurine — 2000mg",
      "L-Tyrosine — 1000mg",
      "Caffeine Anhydrous — 200mg",
    ],
    servings: "20 servings",
    size: "300g",
    usage: "Mix 1 scoop (15g) with water 20–30 minutes before training.",
    sort_order: 1,
  },
  {
    id: "drive",
    slug: "drive",
    name: "DRIVE",
    tagline: "Premium Daily Performance Multi",
    description:
      "A complete 3-system daily formula — foundational multivitamin support, nitric oxide and circulation, and vitality and performance — in one 8-capsule daily pack.",
    category: "supplement",
    image: alphaDrive,
    supplement_facts_image: alphaDriveFacts,
    price: 49.99,
    subscription_price: 42.99,
    benefits: [
      "Complete multivitamin and mineral foundation",
      "Nitric oxide and circulatory support",
      "Vitality, stamina and focus support",
    ],
    ingredients: [
      "Complete Multivitamin + Mineral Formula — 1 capsule",
      "L-Citrulline — 2400mg",
      "Pine Bark Extract (95% Proanthocyanidins) — 300mg",
      "Black Maca Extract (10:1) — 1000mg",
      "Panax Ginseng Extract (20% Ginsenosides) — 300mg",
    ],
    servings: "20 servings",
    size: "8 capsule daily pack",
    usage: "Take all 8 capsules together once daily, with food.",
    sort_order: 2,
  },
  {
    id: "grow",
    slug: "grow",
    name: "GROW",
    tagline: "Premium Protein",
    description:
      "A smooth, creamy 25g protein blend designed for easy mixing and real recovery — chocolate flavour, no compromise.",
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
    size: "1kg · Chocolate",
    usage: "Mix 1–2 scoops with water or milk post-workout.",
    sort_order: 3,
  },
  {
    id: "fuel",
    slug: "fuel",
    name: "FUEL",
    tagline: "Instant Cream of Rice",
    description:
      "A fast-digesting, low-fibre carbohydrate source in a smooth instant cream of rice — chocolate flavour, easy mix, built to refill glycogen around training.",
    category: "supplement",
    image: alphaFuel,
    price: 39.99,
    benefits: [
      "Fast-digesting carbohydrate source",
      "Smooth, easy-mix texture",
      "Supports glycogen resynthesis around training",
    ],
    ingredients: ["Instant Cream of Rice — 40g"],
    servings: "25 servings",
    size: "1kg · Chocolate",
    usage: "Mix with water immediately before or after training.",
    sort_order: 4,
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
    sizes: ["S", "M", "L", "XL", "XXL"],
    sort_order: 5,
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
    sizes: ["S", "M", "L", "XL", "XXL"],
    sort_order: 6,
  },
  {
    id: "complete-stack",
    slug: "complete-stack",
    name: "The Complete Stack",
    tagline: "Monthly Performance System",
    description:
      "HAVOC, DRIVE, GROW and FUEL together as a complete monthly performance system.",
    category: "stack",
    // No dedicated stack photo supplied — using DRIVE as a placeholder
    // collage image until a real stack product shot is provided.
    image: alphaDrive,
    price: 299.96,
    subscription_price: 259.99,
    sort_order: 7,
  },
];
