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
import { products, filterProductsByQuery } from "../data/products";

export default function Home() {
  const [query, setQuery] = useState("");
  const [quickView, setQuickView] = useState(null);

  const filtered = useMemo(
    () => filterProductsByQuery(products, query),
    [query]
  );

  return (
    <div className="min-h-screen bg-white text-black">
      <AnnouncementBar />
      <Navbar query={query} onQueryChange={setQuery} />
      <Hero />
      <CategoryGrid />
      <FeaturedProduct />
      <BestSellers
        query={query}
        products={filtered}
        onQuickView={(p) => setQuickView(p)}
      />
      <TrustBar />
      <Footer />
      <QuickViewModal
        product={quickView}
        onClose={() => setQuickView(null)}
      />
    </div>
  );
}
