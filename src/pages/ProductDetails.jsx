import { useMemo } from "react";
import { useParams } from "react-router-dom";
import AnnouncementBar from "../components/sections/AnnouncementBar";
import Navbar from "../components/sections/Navbar";
import Footer from "../components/sections/Footer";
import ProductDetailsPreview from "../components/sections/ProductDetailsPreview";
import { products } from "../data/products";

export default function ProductDetails() {
  const { id } = useParams();

  const product = useMemo(() => products.find((p) => p.id === id), [id]);

  return (
    <div className="min-h-screen bg-white text-black">
      <AnnouncementBar />
      {/* Navbar needs query props currently; we’ll pass empty handlers */}
      <Navbar query="" onQueryChange={() => {}} />

      {product ? (
        <ProductDetailsPreview product={product} />
      ) : (
        <div className="mx-auto max-w-5xl px-6 py-16">
          <h1 className="text-2xl font-semibold">Product not found</h1>
          <p className="mt-2 text-sm text-black/70">
            The product you’re looking for doesn’t exist.
          </p>
        </div>
      )}

      <Footer />
    </div>
  );
}
