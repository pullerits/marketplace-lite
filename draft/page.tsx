import Header from './components/Header';
import HeroSection from './components/HeroSection';
import CategoryGrid from './components/CategoryGrid';
import FeaturedProducts from './components/FeaturedProducts';
import Footer from './components/Footer';

const MarketplaceDraft = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <HeroSection />
        <CategoryGrid />
        <FeaturedProducts />
      </main>
      <Footer />
    </div>
  );
};

export default MarketplaceDraft;