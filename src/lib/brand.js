export const LOGO_URL = "https://media.base44.com/images/public/6a88bf652a5df8dcfa09b143/c6983d45d_logo.png";
export const CURRENCY = "NZD";

export const formatNZD = (n) => `$${Number(n || 0).toFixed(2)}`;

export const NAV_LINKS = [
  { label: "Home", to: "/" },
  { label: "Shop", to: "/shop" },
  { label: "Performance Nutrition", to: "/performance-nutrition" },
  { label: "The Stack", to: "/stack" },
  { label: "About", to: "/about" },
  { label: "Contact", to: "/contact" },
];
