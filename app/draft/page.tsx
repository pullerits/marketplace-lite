import Header from '@/draft/components/Header';
import HeroSection from '@/draft/components/HeroSection';
import CategoryGrid from '@/draft/components/CategoryGrid';
import FeaturedProducts from '@/draft/components/FeaturedProducts';
import Footer from '@/draft/components/Footer';

export default function DraftPage() {
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
}