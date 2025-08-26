import Header from '@/app/draft/components/Header';
import HeroSection from '@/app/draft/components/HeroSection';
import CategoryGrid from '@/app/draft/components/CategoryGrid';
import FeaturedProducts from '@/app/draft/components/FeaturedProducts';
import StatsSection from '@/app/draft/components/StatsSection';
import TestimonialsSection from '@/app/draft/components/TestimonialsSection';
import CallToActionSection from '@/app/draft/components/CallToActionSection';
import Footer from '@/app/draft/components/Footer';

export default function DraftPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <HeroSection />
        <CategoryGrid />
        <FeaturedProducts />
        <StatsSection />
        <TestimonialsSection />
        <CallToActionSection />
      </main>
      <Footer />
    </div>
  );
}