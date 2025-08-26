import ProductCard from './ProductCard';

const featuredProducts = [
  {
    id: 1,
    image: '/images/products/potatoes.jpg',
    title: 'Fresh Organic Potatoes - Locally Grown, Perfect for Cooking',
    price: '$3.99/lb',
    rating: 4.8,
    reviews: 127,
    seller: 'Green Valley Farm',
  },
  {
    id: 2,
    image: '/images/products/salmon.jpg',
    title: 'Wild-Caught Atlantic Salmon - Fresh Daily Catch',
    price: '$12.50/lb',
    rating: 4.9,
    reviews: 89,
    seller: 'Coastal Fishery',
  },
  {
    id: 3,
    image: '/images/products/honey.jpg',
    title: 'Raw Wildflower Honey - Unprocessed, Straight from Hive',
    price: '$8.00/jar',
    rating: 4.7,
    reviews: 156,
    seller: 'Meadow Bee Farm',
  },
  {
    id: 4,
    image: '/images/products/cucumbers.jpg',
    title: 'Garden Fresh Cucumbers - Crisp and Organic',
    price: '$2.25/lb',
    rating: 4.9,
    reviews: 203,
    seller: 'Sunny Acres',
  },
  {
    id: 5,
    image: '/images/products/chicken-breast.jpg',
    title: 'Free-Range Chicken Breast - Hormone-Free Local Poultry',
    price: '$7.99/lb',
    rating: 4.6,
    reviews: 94,
    seller: 'Heritage Farm',
  },
  {
    id: 6,
    image: '/images/products/eggs.jpg',
    title: 'Farm Fresh Eggs - Brown, Free-Range Hens',
    price: '$4.50/dozen',
    rating: 4.8,
    reviews: 178,
    seller: 'Country Nest',
  },
];

const FeaturedProducts = () => {
  return (
    <section className="py-12 bg-etsy-cream/30">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl font-bold text-etsy-brown mb-8">
          Fresh from Local Farms & Markets
        </h2>
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          {featuredProducts.map((product) => (
            <ProductCard 
              key={product.id}
              {...product}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedProducts;