import { Button } from '@/components/ui/button';
import Image from 'next/image';

const HeroSection = () => {
  return (
    <section className="bg-gradient-to-br from-etsy-cream to-etsy-beige py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          <div className="space-y-6">
            <h2 className="text-4xl lg:text-5xl font-bold text-etsy-brown leading-tight">
              Fall-inspired
              <br />
              <span className="text-etsy-orange">decor</span>
            </h2>
            <p className="text-lg text-etsy-light-brown max-w-md">
              Find a treasure trove of handcrafted autumn pieces to make your home feel cozy and welcoming this season.
            </p>
            <Button 
              size="lg" 
              className="bg-etsy-brown hover:bg-etsy-brown/90 text-white px-8 py-3 text-lg rounded-full"
            >
              Browse now
            </Button>
          </div>
          
          <div className="relative">
            <div className="rounded-2xl overflow-hidden shadow-xl">
              <Image 
                src="/lovable-example/src/assets/hero-fall-decor.jpg"
                alt="Fall-inspired home decor with warm autumn colors"
                width={600}
                height={400}
                className="w-full h-[400px] object-cover"
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;