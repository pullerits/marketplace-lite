const StatsSection = () => {
  const stats = [
    { number: '150+', label: 'Local Vendors' },
    { number: '5,000+', label: 'Happy Customers' },
    { number: '12', label: 'Years Serving' },
    { number: '95%', label: 'Customer Satisfaction' },
  ];

  return (
    <section className="py-16 bg-etsy-brown text-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">
            Supporting Local Communities
          </h2>
          <p className="text-lg text-etsy-cream max-w-2xl mx-auto">
            We're proud to connect you with the best local farmers, artisans, and vendors in your area.
          </p>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-4xl font-bold text-etsy-orange mb-2">
                {stat.number}
              </div>
              <div className="text-etsy-cream font-medium">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;