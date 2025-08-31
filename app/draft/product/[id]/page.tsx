'use client';

import { useParams } from 'next/navigation';
import Link from 'next/link';
import { ArrowLeft, Heart, ShoppingCart, Star, Plus, Minus } from 'lucide-react';
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import Header from '@/app/draft/components/Header';
import Footer from '@/app/draft/components/Footer';
import Image from 'next/image';

// Sample product data - in a real app this would come from an API
const sampleProducts = [
  {
    id: '1',
    title: 'Fresh Organic Potatoes - Locally Grown, Perfect for Cooking',
    price: '$3.99/lb',
    originalPrice: '$4.99/lb',
    rating: 4.8,
    reviews: 127,
    seller: 'Green Valley Farm',
    category: 'produce',
    images: ['/images/products/potatoes.jpg', '/images/products/potatoes.jpg'],
    description: 'Fresh, crisp organic potatoes grown locally at Green Valley Farm. Perfect for mashing, roasting, or frying. These high-quality potatoes are packed with nutrients and add hearty satisfaction to any meal.',
    details: [
      'Certified organic',
      'Locally grown',
      'Perfect for all cooking methods',
      'Rich in potassium and vitamin C',
      'Fresh harvest guarantee'
    ],
    inStock: true,
    stockCount: 25,
    shippingInfo: 'Free shipping on orders over $25',
    returnPolicy: '30-day return policy'
  },
  {
    id: '2',
    title: 'Wild-Caught Atlantic Salmon - Fresh Daily Catch',
    price: '$12.50/lb',
    rating: 4.9,
    reviews: 89,
    seller: 'Coastal Fishery',
    category: 'seafood',
    images: ['/images/products/salmon.jpg', '/images/products/salmon.jpg'],
    description: 'Premium Atlantic salmon fillet, wild-caught and sustainably sourced. Rich in omega-3 fatty acids and perfect for grilling, baking, or pan-searing.',
    details: [
      'Wild-caught Atlantic salmon',
      'Sustainably sourced',
      'Rich in Omega-3',
      'Fresh, never frozen',
      'Approximately 1 lb'
    ],
    inStock: true,
    stockCount: 8,
    shippingInfo: 'Overnight shipping required for freshness',
    returnPolicy: 'Must be returned within 24 hours'
  },
  {
    id: '3',
    title: 'Raw Wildflower Honey - Unprocessed, Straight from Hive',
    price: '$8.00/jar',
    rating: 4.7,
    reviews: 156,
    seller: 'Meadow Bee Farm',
    category: 'pantry',
    images: ['/images/products/honey.jpg', '/images/products/honey.jpg'],
    description: 'Pure, unprocessed wildflower honey harvested from local hives. This golden nectar retains all its natural enzymes and benefits, perfect for sweetening tea, drizzling on toast, or using in recipes.',
    details: [
      'Raw and unprocessed',
      'Local wildflower variety',
      'Rich in natural enzymes',
      '16 oz glass jar',
      'No added sugars or preservatives'
    ],
    inStock: true,
    stockCount: 12,
    shippingInfo: 'Free shipping on orders over $25',
    returnPolicy: '30-day return policy'
  },
  {
    id: '4',
    title: 'Garden Fresh Cucumbers - Crisp and Organic',
    price: '$2.25/lb',
    rating: 4.9,
    reviews: 203,
    seller: 'Sunny Acres',
    category: 'produce',
    images: ['/images/products/cucumbers.jpg', '/images/products/cucumbers.jpg'],
    description: 'Crisp, refreshing organic cucumbers grown with care at Sunny Acres. Perfect for salads, sandwiches, or snacking. These cucumbers are harvested at peak freshness for maximum flavor and crunch.',
    details: [
      'Certified organic',
      'Locally grown',
      'Perfect for salads and snacking',
      'High water content for hydration',
      'Fresh harvest guarantee'
    ],
    inStock: true,
    stockCount: 30,
    shippingInfo: 'Free shipping on orders over $25',
    returnPolicy: '7-day freshness guarantee'
  },
  {
    id: '5',
    title: 'Free-Range Chicken Breast - Hormone-Free Local Poultry',
    price: '$7.99/lb',
    rating: 4.6,
    reviews: 94,
    seller: 'Heritage Farm',
    category: 'meat-poultry',
    images: ['/images/products/chicken-breast.jpg', '/images/products/chicken-breast.jpg'],
    description: 'Premium free-range chicken breast from Heritage Farm. Our chickens roam freely and are fed a natural diet without hormones or antibiotics, resulting in tender, flavorful meat.',
    details: [
      'Free-range chickens',
      'No hormones or antibiotics',
      'Natural grain-fed diet',
      'Locally raised',
      'Approximately 1 lb per package'
    ],
    inStock: true,
    stockCount: 15,
    shippingInfo: 'Refrigerated shipping included',
    returnPolicy: 'Must be returned within 48 hours'
  },
  {
    id: '6',
    title: 'Farm Fresh Eggs - Brown, Free-Range Hens',
    price: '$4.50/dozen',
    rating: 4.8,
    reviews: 178,
    seller: 'Country Nest',
    category: 'produce',
    images: ['/images/products/eggs.jpg', '/images/products/eggs.jpg'],
    description: 'Farm-fresh brown eggs from free-range hens at Country Nest. Our hens enjoy access to pasture and are fed a natural diet, producing eggs with rich, golden yolks and superior flavor.',
    details: [
      'Free-range hens',
      'Natural diet',
      'Rich, golden yolks',
      'One dozen eggs',
      'Fresh from local farm'
    ],
    inStock: true,
    stockCount: 20,
    shippingInfo: 'Careful packaging for safe delivery',
    returnPolicy: '7-day freshness guarantee'
  }
];

const ProductDetail = () => {
  const params = useParams();
  const id = params?.id as string;
  const [quantity, setQuantity] = useState(1);
  const [selectedImage, setSelectedImage] = useState(0);
  const [isWishlisted, setIsWishlisted] = useState(false);

  // Find product by ID (in a real app, this would be an API call)
  const product = sampleProducts.find(p => p.id === id) || sampleProducts[0];

  const handleQuantityChange = (delta: number) => {
    setQuantity(Math.max(1, Math.min(product.stockCount, quantity + delta)));
  };

  const handleAddToCart = () => {
    // In a real app, this would add to cart state/database
    console.log(`Added ${quantity} of ${product.title} to cart`);
  };

  const handleBuyNow = () => {
    // In a real app, this would redirect to checkout
    console.log(`Buy now: ${quantity} of ${product.title}`);
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="container mx-auto px-4 py-8">
        {/* Breadcrumb */}
        <div className="flex items-center space-x-2 text-sm text-muted-foreground mb-6">
          <Link href="/draft" className="hover:text-foreground">Home</Link>
          <span>/</span>
          <Link href={`/draft/${product.category}`} className="hover:text-foreground capitalize">
            {product.category.replace('-', ' & ')}
          </Link>
          <span>/</span>
          <span className="text-foreground">{product.title}</span>
        </div>

        {/* Back button */}
        <Button variant="ghost" asChild className="mb-6">
          <Link href={`/draft/${product.category}`}>
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to {product.category.replace('-', ' & ')}
          </Link>
        </Button>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Product Images */}
          <div className="space-y-4">
            <div className="relative bg-card rounded-lg overflow-hidden">
              <Image 
                src={product.images[selectedImage]} 
                alt={product.title}
                width={600}
                height={400}
                className="w-full h-96 object-cover"
              />
            </div>
            <div className="flex space-x-2">
              {product.images.map((image, index) => (
                <button
                  key={index}
                  onClick={() => setSelectedImage(index)}
                  className={`w-20 h-20 rounded-lg overflow-hidden border-2 ${
                    selectedImage === index ? 'border-primary' : 'border-border'
                  }`}
                >
                  <Image 
                    src={image} 
                    alt={`${product.title} ${index + 1}`} 
                    width={80}
                    height={80}
                    className="w-full h-full object-cover" 
                  />
                </button>
              ))}
            </div>
          </div>

          {/* Product Info */}
          <div className="space-y-6">
            <div>
              <h1 className="text-3xl font-bold text-foreground mb-2">{product.title}</h1>
              <div className="flex items-center space-x-4 mb-4">
                <div className="flex items-center space-x-1">
                  {[...Array(5)].map((_, i) => (
                    <Star 
                      key={i} 
                      className={`h-4 w-4 ${i < Math.floor(product.rating) ? 'text-etsy-orange fill-current' : 'text-muted-foreground'}`}
                    />
                  ))}
                  <span className="text-sm text-muted-foreground ml-2">
                    {product.rating} ({product.reviews} reviews)
                  </span>
                </div>
              </div>
              <p className="text-muted-foreground">by {product.seller}</p>
            </div>

            {/* Price */}
            <div className="flex items-center space-x-4">
              <span className="text-3xl font-bold text-etsy-orange">{product.price}</span>
              {product.originalPrice && (
                <span className="text-lg text-muted-foreground line-through">{product.originalPrice}</span>
              )}
            </div>

            {/* Stock Status */}
            <div className="flex items-center space-x-2">
              {product.inStock ? (
                <>
                  <Badge variant="secondary" className="bg-green-100 text-green-800">In Stock</Badge>
                  <span className="text-sm text-muted-foreground">
                    {product.stockCount} items available
                  </span>
                </>
              ) : (
                <Badge variant="destructive">Out of Stock</Badge>
              )}
            </div>

            {/* Quantity Selector */}
            <div className="flex items-center space-x-4">
              <span className="text-sm font-medium">Quantity:</span>
              <div className="flex items-center border rounded-md">
                <Button 
                  variant="ghost" 
                  size="icon" 
                  onClick={() => handleQuantityChange(-1)}
                  disabled={quantity <= 1}
                  className="h-8 w-8"
                >
                  <Minus className="h-3 w-3" />
                </Button>
                <span className="px-4 py-2 text-sm font-medium">{quantity}</span>
                <Button 
                  variant="ghost" 
                  size="icon" 
                  onClick={() => handleQuantityChange(1)}
                  disabled={quantity >= product.stockCount}
                  className="h-8 w-8"
                >
                  <Plus className="h-3 w-3" />
                </Button>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="space-y-3">
              <div className="flex space-x-3">
                <Button 
                  onClick={handleAddToCart}
                  disabled={!product.inStock}
                  className="flex-1"
                  variant="outline"
                >
                  <ShoppingCart className="h-4 w-4 mr-2" />
                  Add to Cart
                </Button>
                <Button 
                  onClick={handleBuyNow}
                  disabled={!product.inStock}
                  className="flex-1"
                >
                  Buy Now
                </Button>
              </div>
              <Button 
                variant="ghost" 
                onClick={() => setIsWishlisted(!isWishlisted)}
                className="w-full"
              >
                <Heart className={`h-4 w-4 mr-2 ${isWishlisted ? 'fill-current text-red-500' : ''}`} />
                {isWishlisted ? 'Remove from Wishlist' : 'Add to Wishlist'}
              </Button>
            </div>

            {/* Shipping Info */}
            <div className="bg-secondary/50 p-4 rounded-lg space-y-2">
              <p className="text-sm font-medium">Shipping & Returns</p>
              <p className="text-sm text-muted-foreground">{product.shippingInfo}</p>
              <p className="text-sm text-muted-foreground">{product.returnPolicy}</p>
            </div>
          </div>
        </div>

        {/* Product Details Tabs */}
        <div className="mt-12">
          <Tabs defaultValue="description" className="w-full">
            <TabsList className="grid w-full grid-cols-3">
              <TabsTrigger value="description">Description</TabsTrigger>
              <TabsTrigger value="details">Details</TabsTrigger>
              <TabsTrigger value="reviews">Reviews</TabsTrigger>
            </TabsList>
            
            <TabsContent value="description" className="mt-6">
              <div className="prose prose-sm max-w-none">
                <p className="text-muted-foreground leading-relaxed">{product.description}</p>
              </div>
            </TabsContent>
            
            <TabsContent value="details" className="mt-6">
              <ul className="space-y-2">
                {product.details.map((detail, index) => (
                  <li key={index} className="flex items-center text-sm text-muted-foreground">
                    <span className="w-2 h-2 bg-etsy-orange rounded-full mr-3"></span>
                    {detail}
                  </li>
                ))}
              </ul>
            </TabsContent>
            
            <TabsContent value="reviews" className="mt-6">
              <div className="space-y-4">
                <div className="flex items-center space-x-4">
                  <div className="text-3xl font-bold">{product.rating}</div>
                  <div>
                    <div className="flex items-center space-x-1 mb-1">
                      {[...Array(5)].map((_, i) => (
                        <Star 
                          key={i} 
                          className={`h-4 w-4 ${i < Math.floor(product.rating) ? 'text-etsy-orange fill-current' : 'text-muted-foreground'}`}
                        />
                      ))}
                    </div>
                    <p className="text-sm text-muted-foreground">{product.reviews} reviews</p>
                  </div>
                </div>
                <Separator />
                <p className="text-muted-foreground">Reviews would be loaded here in a real application.</p>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default ProductDetail;