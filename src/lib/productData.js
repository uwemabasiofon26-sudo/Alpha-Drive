// Static product catalog for Alpha Valour.
// No database or CMS — this file IS the source of truth for product data.
// To add or edit a product, edit this file directly and redeploy.
//
// Shape reference (every field used somewhere in the UI):
// {
//   id: string                     - unique id (used as React key + cart line item id)
//   slug: string                   - used in URLs: /product/:slug
//   name: string
//   tagline: string                - short line under product name
//   description: string            - longer paragraph on ProductDetail
//   category: "supplement" | "apparel" | "stack"
//   image: string                  - main product image URL
//   supplement_facts_image?: string
//   price: number                  - one-time price (NZD)
//   subscription_price?: number    - monthly subscription price, omit if not offered
//   benefits?: string[]            - bullet list of key benefits
//   ingredients?: string[]         - each line matched against src/lib/ingredientResearch.js
//   servings?: string              - e.g. "30 servings"
//   size?: string                  - e.g. "450g"
//   usage?: string                 - directions for use
//   colors?: string[]              - apparel only
//   sizes?: string[]               - apparel only
//   sort_order?: number
// }

export const PRODUCTS = [
  {
    id: "havoc",
    slug: "havoc",
    name: "HAVOC",
    tagline: "Pre-Workout",
    description:
      "REPLACE ME: full product description for HAVOC pre-workout.",
    category: "supplement",
    image: "REPLACE_WITH_IMAGE_URL",
    supplement_facts_image: "REPLACE_WITH_IMAGE_URL",
    price: 69.99,
    subscription_price: 59.99,
    benefits: [
      "REPLACE ME: benefit 1",
      "REPLACE ME: benefit 2",
    ],
    ingredients: [
      "L-Citrulline — 6000mg",
      "Beta-Alanine — 3200mg",
      "Caffeine Anhydrous — 200mg",
    ],
    servings: "30 servings",
    size: "450g",
    usage: "Mix 1 scoop with water 20-30 minutes before training.",
    sort_order: 1,
  },
  {
    id: "drive",
    slug: "drive",
    name: "DRIVE",
    tagline: "Daily Focus",
    description: "REPLACE ME: full product description for DRIVE.",
    category: "supplement",
    image: "REPLACE_WITH_IMAGE_URL",
    price: 49.99,
    subscription_price: 42.99,
    benefits: ["REPLACE ME: benefit 1"],
    ingredients: ["L-Tyrosine — 500mg", "Caffeine — 100mg"],
    servings: "30 servings",
    size: "150g",
    usage: "Take 1 serving each morning.",
    sort_order: 2,
  },
  {
    id: "grow",
    slug: "grow",
    name: "GROW",
    tagline: "Protein",
    description: "REPLACE ME: full product description for GROW.",
    category: "supplement",
    image: "REPLACE_WITH_IMAGE_URL",
    price: 89.99,
    subscription_price: 76.99,
    benefits: ["REPLACE ME: benefit 1"],
    ingredients: ["Premium Protein Blend — 25g"],
    servings: "25 servings",
    size: "800g",
    usage: "Mix 1-2 scoops with water or milk post-workout.",
    sort_order: 3,
  },
  {
    id: "fuel",
    slug: "fuel",
    name: "FUEL",
    tagline: "Recovery Carbs",
    description: "REPLACE ME: full product description for FUEL.",
    category: "supplement",
    image: "REPLACE_WITH_IMAGE_URL",
    price: 39.99,
    benefits: ["REPLACE ME: benefit 1"],
    ingredients: ["Instant Cream of Rice — 40g"],
    servings: "20 servings",
    size: "800g",
    usage: "Mix with water immediately after training.",
    sort_order: 4,
  },
  {
    id: "performance-tee",
    slug: "performance-tee",
    name: "Performance Tee",
    tagline: "Athletic Apparel",
    description: "REPLACE ME: full product description for the tee.",
    category: "apparel",
    image: "REPLACE_WITH_IMAGE_URL",
    price: 45.0,
    colors: ["Black", "Deep Teal"],
    sizes: ["S", "M", "L", "XL", "XXL"],
    sort_order: 5,
  },
  {
    id: "complete-stack",
    slug: "complete-stack",
    name: "The Complete Stack",
    tagline: "Monthly Performance System",
    description:
      "HAVOC, DRIVE, GROW and FUEL together as a complete monthly performance system.",
    category: "stack",
    image: "REPLACE_WITH_IMAGE_URL",
    price: 299.96,
    subscription_price: 259.99,
    sort_order: 6,
  },
];
