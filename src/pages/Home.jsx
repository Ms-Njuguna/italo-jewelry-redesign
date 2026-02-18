import AnnouncementBar from "../components/sections/AnnouncementBar";
import Navbar from "../components/sections/Navbar";
import Hero from "../components/sections/Hero";
import CategoryGrid from "../components/sections/CategoryGrid";
import FeaturedProduct from "../components/sections/FeaturedProduct";
import BestSellers from "../components/sections/BestSellers";
import TrustBar from "../components/sections/TrustBar";
import Footer from "../components/sections/Footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-white text-black">
      <AnnouncementBar />
      <Navbar />
      <Hero />
      <CategoryGrid />
      <FeaturedProduct />
      <BestSellers />
      <TrustBar />
      <Footer />
    </div>
  );
}
