// Scientific research notes for known ingredients.
// Keyed by the normalized ingredient name (the part before the dose).
export const INGREDIENT_RESEARCH = {
  "l-citrulline": {
    name: "L-Citrulline",
    note: "L-Citrulline is converted to L-arginine in the kidneys, raising plasma arginine and nitric oxide production more effectively than arginine itself, supporting blood flow and vascular function.",
    ref: "Curis et al., J Nutr. 2007; Schwedhelm et al., Am J Physiol.",
  },
  "beta-alanine": {
    name: "Beta-Alanine",
    note: "Beta-alanine is the rate-limiting precursor to carnosine. Sustained supplementation raises muscle carnosine, which buffers hydrogen ions during high-intensity exercise and delays neuromuscular fatigue.",
    ref: "Hill et al., Amino Acids. 2007; Derave et al., J Appl Physiol.",
  },
  "taurine": {
    name: "Taurine",
    note: "Taurine is an abundant amino acid in skeletal muscle with roles in calcium handling and membrane stabilisation. Supplementation has been associated with improved exercise capacity and reduced oxidative stress.",
    ref: "Waldman et al., Sports Med. 2018.",
  },
  "l-tyrosine": {
    name: "L-Tyrosine",
    note: "Tyrosine is a catecholamine precursor. Acute supplementation helps preserve cognitive performance and working memory under acute stress such as sleep deprivation and high cognitive load.",
    ref: "Young, J Psychiatr Res.; Deijen & Orlebeke, Brain Res Bull.",
  },
  "caffeine anhydrous": {
    name: "Caffeine Anhydrous",
    note: "Caffeine antagonises adenosine receptors, reducing perceived exertion and improving reaction time, focus and endurance performance. Effects are dose-dependent and well-established in controlled trials.",
    ref: "Goldstein et al., Int J Sport Nutr Exerc Metab. 2010.",
  },
  "caffeine": {
    name: "Caffeine",
    note: "Caffeine antagonises adenosine receptors, reducing perceived exertion and improving reaction time, focus and endurance performance.",
    ref: "Goldstein et al., Int J Sport Nutr Exerc Metab. 2010.",
  },
  "pine bark extract": {
    name: "Pine Bark Extract",
    note: "Standardised pine bark extract is rich in proanthocyanidins. It supports endothelial function and nitric oxide availability, complementing citrulline for circulatory support.",
    ref: "Drechsel et al., Hypertens Res. 2008.",
  },
  "black maca": {
    name: "Black Maca",
    note: "Black maca (Lepidium meyenii) has been studied for its effects on energy, stamina and male vitality, with preclinical and small human trials supporting adaptogenic and performance benefits.",
    ref: "Gonzales et al., Andrologia.",
  },
  "panax ginseng": {
    name: "Panax Ginseng",
    note: "Panax ginseng ginsenosides modulate the HPA axis and nitric oxide pathways. Supplementation is associated with reduced fatigue and improved subjective vitality in controlled studies.",
    ref: "Kim et al., J Ginseng Res. 2013.",
  },
  "premium protein blend": {
    name: "Premium Protein Blend",
    note: "Supplementing with ~20–40 g of high-quality protein post-exercise supports muscle protein synthesis. The International Society of Sports Nutrition recommends 1.4–2.0 g/kg/day for athletes.",
    ref: "Jäger et al., J Int Soc Sports Nutr. 2017.",
  },
  "instant cream of rice": {
    name: "Instant Cream of Rice",
    note: "Rice is a low-fibre, rapidly digesting carbohydrate source. Carbohydrate availability before and after training supports glycogen resynthesis and training quality.",
    ref: "Burke et al., Int J Sport Nutr Exerc Metab. 2011.",
  },
  "oyster extract": {
    name: "Oyster Extract",
    note: "Oyster extract is a natural source of zinc, a mineral involved in testosterone metabolism, immune function and cellular repair, and has traditionally been associated with male vitality and reproductive health.",
    ref: "Fallah et al., Nutrients. 2018 (zinc and reproductive health review).",
  },
};

// Vitamins / minerals shown as a grouped system line — matched loosely.
export const VITAMIN_RESEARCH = {
  name: "Vitamins & Minerals",
  note: "A complete multivitamin and mineral foundation supports micronutrient status for energy metabolism (B-vitamins), immune function (vitamins C, D, zinc) and bone health (vitamin D, calcium), particularly under elevated training load.",
  ref: "Peeling et al., Int J Sport Nutr Exerc Metab. 2018.",
};

// Parse a product ingredient line and return a research entry (or null).
export function researchForIngredient(line) {
  const raw = String(line || "");
  // Split on em dash, en dash, or hyphen-with-spaces, take the name part.
  const namePart = raw.split(/[—–-]/)[0].trim();
  if (!namePart) return null;
  const norm = namePart.toLowerCase().replace(/\s+/g, " ").trim();

  // Group multi-vitamin lines under one entry
  if (/vitamin|b-complex|b1|b2|b3|b5|b6|b7|b9|b12|mineral|multivitamin/i.test(norm)) {
    return VITAMIN_RESEARCH;
  }
  if (INGREDIENT_RESEARCH[norm]) return INGREDIENT_RESEARCH[norm];
  // partial match
  const key = Object.keys(INGREDIENT_RESEARCH).find((k) => norm.includes(k) || k.includes(norm));
  return key ? INGREDIENT_RESEARCH[key] : null;
}
