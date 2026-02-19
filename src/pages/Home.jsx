import { useMemo, useState } from "react";
import AnnouncementBar from "../components/sections/AnnouncementBar";
import Navbar from "../components/sections/Navbar";
import Hero from "../components/sections/Hero";
import CategoryGrid from "../components/sections/CategoryGrid";
import FeaturedProduct from "../components/sections/FeaturedProduct";
import BestSellers from "../components/sections/BestSellers";
import TrustBar from "../components/sections/TrustBar";
import Footer from "../components/sections/Footer";
import QuickViewModal from "../components/ui/QuickViewModal";
import { categories } from "../data/categories";
import ProductDetailsPreview from "../components/sections/ProductDetailsPreview";
import {
  products,
  filterProductsByCategory,
  filterProductsByQuery,
  sortProducts,
  getFeaturedProduct,
} from "../data/products";

export default function Home() {
  const [query, setQuery] = useState("");
  const [quickView, setQuickView] = useState(null);

  const [activeCategory, setActiveCategory] = useState("all");
  const [sortKey, setSortKey] = useState("best_match");

  const filtered = useMemo(() => {
    const byQuery = filterProductsByQuery(products, query);
    const byCategory = filterProductsByCategory(byQuery, activeCategory);
    return sortProducts(byCategory, sortKey, query);
  }, [query, activeCategory, sortKey]);

  const categoryOptions = useMemo(() => {
    return [
      { value: "all", label: "All" },
      ...categories.map((c) => ({ value: c.id, label: c.title })),
    ];
  }, []);

  const sortOptions = [
    { value: "best_match", label: "Best match" },
    { value: "rating", label: "Top rated" },
    { value: "price_asc", label: "Price: low to high" },
    { value: "price_desc", label: "Price: high to low" },
  ];

  const pdpProduct = useMemo(() => getFeaturedProduct(), []);

  return (
    <div className="min-h-screen bg-white text-black">
      <AnnouncementBar />
      <Navbar query={query} onQueryChange={setQuery} />

      <Hero />
      <CategoryGrid />
      <FeaturedProduct />
      <ProductDetailsPreview product={pdpProduct} />
      <BestSellers
        query={query}
        products={filtered}
        onQuickView={(p) => setQuickView(p)}
        activeCategory={activeCategory}
        onCategoryChange={setActiveCategory}
        sortKey={sortKey}
        onSortChange={setSortKey}
        categoryOptions={categoryOptions}
        sortOptions={sortOptions}
      />

      <TrustBar />
      <Footer />

      <QuickViewModal product={quickView} onClose={() => setQuickView(null)} />
    </div>
  );
}
