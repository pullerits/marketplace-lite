import ProductCard from './ProductCard';

const featuredProducts = [
  {
    id: 1,
    image: '/images/products/ceramic-bowl.jpg',
    title: 'Handmade Ceramic Bowl - Earthy Glazed Pottery for Modern Home Decor',
    price: '$34.99',
    rating: 4.8,
    reviews: 127,
    seller: 'CeramicStudio',
  },
  {
    id: 2,
    image: '/images/products/macrame-hanging.jpg',
    title: 'Boho Macrame Wall Hanging - Natural Cotton Cord Home Decor',
    price: '$48.50',
    rating: 4.9,
    reviews: 89,
    seller: 'BohoVibes',
  },
  {
    id: 3,
    image: '/images/products/wooden-jewelry-box.jpg',
    title: 'Handcrafted Wooden Jewelry Box with Intricate Carved Details',
    price: '$76.00',
    rating: 4.7,
    reviews: 156,
    seller: 'WoodCrafters',
  },
  {
    id: 4,
    image: '/images/products/ceramic-bowl.jpg',
    title: 'Artisan Made Serving Bowl - Perfect for Fruit and Salads',
    price: '$42.25',
    rating: 4.9,
    reviews: 203,
    seller: 'HandmadePottery',
  },
  {
    id: 5,
    image: '/images/products/macrame-hanging.jpg',
    title: 'Large Macrame Wall Art - Statement Piece for Living Room',
    price: '$68.99',
    rating: 4.6,
    reviews: 94,
    seller: 'FiberArt',
  },
  {
    id: 6,
    image: '/images/products/wooden-jewelry-box.jpg',
    title: 'Custom Engraved Wooden Box - Personalized Gift Box',
    price: '$55.00',
    rating: 4.8,
    reviews: 178,
    seller: 'CustomWood',
  },
];

const FeaturedProducts = () => {
  return (
    <section className="py-12 bg-etsy-cream/30">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl font-bold text-etsy-brown mb-8">
          Discover our best of handmade 2024
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