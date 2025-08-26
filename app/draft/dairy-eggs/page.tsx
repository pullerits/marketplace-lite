'use client';

import { useState } from 'react';
import { ArrowLeft, Filter, Grid, List } from 'lucide-react';
import Link from 'next/link';
import Header from '@/app/draft/components/Header';
import ProductCard from '@/app/draft/components/ProductCard';
import Footer from '@/app/draft/components/Footer';
import { Button } from '@/components/ui/button';

const dairyEggsItems = [
  {
    id: 1,
    image: '/images/products/ceramic-bowl.jpg',
    title: 'Farm Fresh Eggs - Brown, Free-Range Hens',
    price: '$4.50/dozen',
    rating: 4.8,
    reviews: 156,
    seller: 'Country Nest',
  },
  {
    id: 2,
    image: '/images/products/macrame-hanging.jpg',
    title: 'Raw Milk - Whole, Grass-Fed Cows, Unhomogenized',
    price: '$6.99/half gallon',
    rating: 4.9,
    reviews: 203,
    seller: 'Valley View Dairy',
  },
  {
    id: 3,
    image: '/images/products/wooden-jewelry-box.jpg',
    title: 'Artisan Cheddar Cheese - Sharp, Aged 12 Months',
    price: '$12.99/lb',
    rating: 4.7,
    reviews: 89,
    seller: 'Hillcrest Creamery',
  },
  {
    id: 4,
    image: '/images/products/ceramic-bowl.jpg',
    title: 'Greek Yogurt - Organic, Whole Milk, Plain',
    price: '$5.49/32oz',
    rating: 4.8,
    reviews: 134,
    seller: 'Mountain Fresh Dairy',
  },
  {
    id: 5,
    image: '/images/products/macrame-hanging.jpg',
    title: 'Fresh Butter - Churned Daily, Salted, Grass-Fed',
    price: '$8.99/lb',
    rating: 4.9,
    reviews: 112,
    seller: 'Meadowbrook Farm',
  },
  {
    id: 6,
    image: '/images/products/wooden-jewelry-box.jpg',
    title: 'Duck Eggs - Large, Rich & Creamy, Free-Range',
    price: '$7.99/dozen',
    rating: 4.6,
    reviews: 67,
    seller: 'Pond Side Farm',
  },
  {
    id: 7,
    image: '/images/products/ceramic-bowl.jpg',
    title: 'Goat Cheese - Soft, Creamy, Herb-Crusted',
    price: '$9.50/8oz',
    rating: 4.5,
    reviews: 78,
    seller: 'Three Sisters Farm',
  },
  {
    id: 8,
    image: '/images/products/macrame-hanging.jpg',
    title: 'Heavy Cream - 40% Fat, Perfect for Cooking',
    price: '$4.99/pint',
    rating: 4.7,
    reviews: 94,
    seller: 'Prairie Gold Dairy',
  },
];

const DairyEggs = () => {
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [sortBy, setSortBy] = useState('featured');

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="container mx-auto px-4 py-8">
        {/* Breadcrumb */}
        <div className="flex items-center gap-2 mb-6">
          <Link href="/draft" className="flex items-center gap-2 text-muted-foreground hover:text-etsy-orange transition-colors">
            <ArrowLeft className="h-4 w-4" />
            Back to home
          </Link>
        </div>

        {/* Page Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-etsy-brown mb-2">Dairy & Eggs</h1>
          <p className="text-lg text-muted-foreground">
            Fresh dairy products and farm eggs from pasture-raised animals
          </p>
        </div>

        {/* Filters and Sort */}
        <div className="flex flex-col sm:flex-row gap-4 mb-8 p-4 bg-etsy-cream/20 rounded-lg">
          <div className="flex items-center gap-2">
            <Filter className="h-4 w-4 text-muted-foreground" />
            <span className="text-sm font-medium">Filters:</span>
            <Button variant="ghost" size="sm" className="text-xs">
              Organic
            </Button>
            <Button variant="ghost" size="sm" className="text-xs">
              Grass Fed
            </Button>
            <Button variant="ghost" size="sm" className="text-xs">
              Raw/Unpasteurized
            </Button>
          </div>
          
          <div className="flex items-center gap-4 ml-auto">
            <div className="flex items-center gap-2">
              <span className="text-sm font-medium">Sort:</span>
              <Button 
                variant={sortBy === 'featured' ? 'default' : 'ghost'} 
                size="sm" 
                onClick={() => setSortBy('featured')}
              >
                Featured
              </Button>
              <Button 
                variant={sortBy === 'price-low' ? 'default' : 'ghost'} 
                size="sm" 
                onClick={() => setSortBy('price-low')}
              >
                Price ↑
              </Button>
              <Button 
                variant={sortBy === 'rating' ? 'default' : 'ghost'} 
                size="sm" 
                onClick={() => setSortBy('rating')}
              >
                Rating
              </Button>
            </div>
            
            <div className="flex items-center border rounded-md">
              <Button
                variant={viewMode === 'grid' ? 'default' : 'ghost'}
                size="sm"
                onClick={() => setViewMode('grid')}
                className="rounded-r-none"
              >
                <Grid className="h-4 w-4" />
              </Button>
              <Button
                variant={viewMode === 'list' ? 'default' : 'ghost'}
                size="sm"
                onClick={() => setViewMode('list')}
                className="rounded-l-none"
              >
                <List className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>

        {/* Products Grid */}
        <div className={`grid gap-6 ${
          viewMode === 'grid' 
            ? 'grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4' 
            : 'grid-cols-1'
        }`}>
          {dairyEggsItems.map((item) => (
            <ProductCard 
              key={item.id}
              {...item}
            />
          ))}
        </div>

        {/* Load More */}
        <div className="text-center mt-12">
          <Button 
            variant="outline" 
            size="lg"
            className="px-8"
          >
            Load more dairy & eggs
          </Button>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default DairyEggs;