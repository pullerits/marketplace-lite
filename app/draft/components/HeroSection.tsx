import { Button } from '@/components/ui/button';
import Image from 'next/image';
import Link from 'next/link';

const HeroSection = () => {
  return (
    <section className="bg-gradient-to-br from-etsy-cream to-etsy-beige py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          <div className="space-y-6">
            <h2 className="text-4xl lg:text-5xl font-bold text-etsy-brown leading-tight">
              Fresh from farm
              <br />
              <span className="text-etsy-orange">to your table</span>
            </h2>
            <p className="text-lg text-etsy-light-brown max-w-md">
              Discover the best local produce, fresh meat, seafood, and artisanal goods from farmers and vendors near you.
            </p>
            <div className="flex gap-4">
              <Button 
                size="lg" 
                className="bg-etsy-brown hover:bg-etsy-brown/90 text-white px-8 py-3 text-lg rounded-full"
                asChild
              >
                <Link href="/draft/produce">Shop Produce</Link>
              </Button>
              <Button 
                size="lg" 
                variant="outline"
                className="border-2 border-etsy-brown text-etsy-brown hover:bg-etsy-brown hover:text-white px-8 py-3 text-lg rounded-full"
                asChild
              >
                <Link href="/draft/seafood">Fresh Seafood</Link>
              </Button>
            </div>
          </div>
          
          <div className="relative">
            <div className="rounded-2xl overflow-hidden shadow-xl">
              <Image 
                src="/images/hero/hero-fall-decor.jpg"
                alt="Fresh local market produce and goods"
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