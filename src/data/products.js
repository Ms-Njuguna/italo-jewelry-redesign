import auroraImg from "../assets/products/aurora.jpg";
import lunaImg from "../assets/products/luna.jpg";
import haloImg from "../assets/products/halo.jpg";
import classicBandImg from "../assets/products/classic-band.jpg";
import paveBandImg from "../assets/products/pave-band.jpg";
import celesteImg from "../assets/products/celeste.jpg";
import tennisImg from "../assets/products/tennis.jpg";
import chainImg from "../assets/products/chain.jpg";

export const products = [
  {
    id: "aurora-ring",
    name: "Aurora Ring",
    price: 189,
    compareAt: 249,
    tag: "Featured",
    category: "engagement",
    rating: 4.8,
    reviews: 312,
    image: auroraImg,
  },
  {
    id: "luna-solitaire",
    name: "Luna Solitaire",
    price: 169,
    compareAt: 229,
    tag: "Best Seller",
    category: "engagement",
    rating: 4.7,
    reviews: 221,
    image: lunaImg,
  },
  {
    id: "halo-bloom",
    name: "Halo Bloom Ring",
    price: 199,
    compareAt: 279,
    tag: "Popular",
    category: "engagement",
    rating: 4.6,
    reviews: 188,
    image: haloImg,
  },
  {
    id: "classic-band",
    name: "Classic Band",
    price: 89,
    compareAt: 129,
    tag: "Essential",
    category: "wedding",
    rating: 4.5,
    reviews: 144,
    image: classicBandImg,
  },
  {
    id: "pave-band",
    name: "Pavé Band",
    price: 119,
    compareAt: 159,
    tag: "Giftable",
    category: "wedding",
    rating: 4.6,
    reviews: 97,
    image: paveBandImg,
  },
  {
    id: "celeste-pendant",
    name: "Celeste Pendant",
    price: 109,
    compareAt: 149,
    tag: "New",
    category: "necklaces",
    rating: 4.4,
    reviews: 61,
    image: celesteImg,
  },
  {
    id: "tennis-bracelet",
    name: "Tennis Bracelet",
    price: 139,
    compareAt: 189,
    tag: "Best Seller",
    category: "bracelets",
    rating: 4.7,
    reviews: 203,
    image: tennisImg,
  },
  {
    id: "minimal-chain",
    name: "Minimal Chain",
    price: 79,
    compareAt: 109,
    tag: "Everyday",
    category: "necklaces",
    rating: 4.3,
    reviews: 54,
    image: chainImg,
  },
];

export function formatPrice(n) {
  return `$${Number(n).toFixed(0)}`;
}

export function getFeaturedProduct() {
  return products.find((p) => p.tag === "Featured") ?? products[0];
}

export function getBestSellers(limit = 8) {
  // quick “best seller-ish” ranking: rating * reviews
  return [...products]
    .sort((a, b) => b.rating * b.reviews - a.rating * a.reviews)
    .slice(0, limit);
}
