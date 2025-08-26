import { Star } from 'lucide-react';

const TestimonialsSection = () => {
  const testimonials = [
    {
      name: 'Sarah Johnson',
      location: 'Downtown',
      rating: 5,
      text: 'The freshest produce I&apos;ve ever bought! Love supporting local farmers through this platform.',
      category: 'Produce'
    },
    {
      name: 'Mike Chen',
      location: 'Riverside',
      rating: 5,
      text: 'Amazing seafood quality and the delivery is always on time. The salmon is restaurant-quality!',
      category: 'Seafood'
    },
    {
      name: 'Emma Rodriguez',
      location: 'Midtown',
      rating: 5,
      text: 'Found the most beautiful handcrafted jewelry here. Each piece tells a story of local artisans.',
      category: 'Crafts & Art'
    }
  ];

  return (
    <section className="py-16 bg-etsy-cream/20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-etsy-brown mb-4">
            What Our Customers Say
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Real reviews from real customers who love shopping local.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-background p-6 rounded-2xl shadow-sm border border-border">
              <div className="flex items-center mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 fill-etsy-orange text-etsy-orange" />
                ))}
              </div>
              
              <p className="text-foreground mb-4 italic">
                &ldquo;{testimonial.text}&rdquo;
              </p>
              
              <div className="flex items-center justify-between">
                <div>
                  <div className="font-semibold text-etsy-brown">
                    {testimonial.name}
                  </div>
                  <div className="text-sm text-muted-foreground">
                    {testimonial.location}
                  </div>
                </div>
                <div className="bg-etsy-orange/10 text-etsy-orange px-3 py-1 rounded-full text-sm font-medium">
                  {testimonial.category}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;