import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { ArrowRight, Users, Truck, Shield } from 'lucide-react';

const CallToActionSection = () => {
  const features = [
    {
      icon: Users,
      title: 'Local Community',
      description: 'Connect directly with farmers and artisans in your area'
    },
    {
      icon: Truck,
      title: 'Fresh Delivery',
      description: 'Same-day delivery from farm to your doorstep'
    },
    {
      icon: Shield,
      title: 'Quality Guaranteed',
      description: '100% satisfaction guarantee on all purchases'
    }
  ];

  return (
    <section className="py-16 bg-gradient-to-br from-etsy-orange/5 to-etsy-cream/20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-etsy-brown mb-4">
            Ready to Shop Local?
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8">
            Join thousands of customers who choose fresh, local, and sustainable products every day.
          </p>
          
          <div className="flex justify-center gap-4 mb-12">
            <Button 
              size="lg" 
              className="bg-etsy-orange hover:bg-etsy-orange/90 text-white px-8 py-3 text-lg rounded-full"
              asChild
            >
              <Link href="/draft/produce" className="flex items-center gap-2">
                Start Shopping
                <ArrowRight className="h-5 w-5" />
              </Link>
            </Button>
            <Button 
              size="lg" 
              variant="outline"
              className="border-2 border-etsy-brown text-etsy-brown hover:bg-etsy-brown hover:text-white px-8 py-3 text-lg rounded-full"
            >
              Learn More
            </Button>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="text-center">
              <div className="bg-etsy-orange/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <feature.icon className="h-8 w-8 text-etsy-orange" />
              </div>
              <h3 className="text-xl font-semibold text-etsy-brown mb-2">
                {feature.title}
              </h3>
              <p className="text-muted-foreground">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CallToActionSection;