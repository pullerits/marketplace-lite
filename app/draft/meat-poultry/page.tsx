'use client';

import { useState } from 'react';
import { ArrowLeft, Filter, Grid, List } from 'lucide-react';
import Link from 'next/link';
import Header from '@/app/draft/components/Header';
import ProductCard from '@/app/draft/components/ProductCard';
import Footer from '@/app/draft/components/Footer';
import { Button } from '@/components/ui/button';

const meatPoultryItems = [
  {
    id: 1,
    image: '/images/products/ceramic-bowl.jpg',
    title: 'Free-Range Chicken Breast - Hormone-Free Local Poultry',
    price: '$7.99/lb',
    rating: 4.8,
    reviews: 156,
    seller: 'Heritage Farm',
  },
  {
    id: 2,
    image: '/images/products/macrame-hanging.jpg',
    title: 'Grass-Fed Beef Ground Chuck - 85% Lean, Pasture Raised',
    price: '$9.50/lb',
    rating: 4.9,
    reviews: 203,
    seller: 'Prairie Cattle Co',
  },
  {
    id: 3,
    image: '/images/products/wooden-jewelry-box.jpg',
    title: 'Organic Turkey Breast - Free Range, No Antibiotics',
    price: '$8.75/lb',
    rating: 4.7,
    reviews: 89,
    seller: 'Sunny Meadow Farm',
  },
  {
    id: 4,
    image: '/images/products/ceramic-bowl.jpg',
    title: 'Heritage Pork Chops - Thick Cut, Pasture Raised',
    price: '$11.99/lb',
    rating: 4.8,
    reviews: 134,
    seller: 'Mountain View Ranch',
  },
  {
    id: 5,
    image: '/images/products/macrame-hanging.jpg',
    title: 'Grass-Fed Ribeye Steak - Prime Cut, Dry Aged',
    price: '$24.99/lb',
    rating: 4.9,
    reviews: 112,
    seller: 'Black Angus Ranch',
  },
  {
    id: 6,
    image: '/images/products/wooden-jewelry-box.jpg',
    title: 'Free-Range Whole Chicken - Organic, Air Chilled',
    price: '$5.99/lb',
    rating: 4.6,
    reviews: 67,
    seller: 'Countryside Poultry',
  },
  {
    id: 7,
    image: '/images/products/ceramic-bowl.jpg',
    title: 'Lamb Shoulder Chops - Grass Fed, Locally Raised',
    price: '$13.50/lb',
    rating: 4.5,
    reviews: 78,
    seller: 'Hillside Lamb Farm',
  },
  {
    id: 8,
    image: '/images/products/macrame-hanging.jpg',
    title: 'Italian Sausage - Made Fresh Daily, No Preservatives',
    price: '$6.99/lb',
    rating: 4.7,
    reviews: 94,
    seller: 'Artisan Butcher Shop',
  },
];

const MeatPoultry = () => {
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
          <h1 className="text-3xl font-bold text-etsy-brown mb-2">Meat & Poultry</h1>
          <p className="text-lg text-muted-foreground">
            Farm-fresh, humanely raised meat and poultry from local ranchers
          </p>
        </div>

        {/* Filters and Sort */}
        <div className="flex flex-col sm:flex-row gap-4 mb-8 p-4 bg-etsy-cream/20 rounded-lg">
          <div className="flex items-center gap-2">
            <Filter className="h-4 w-4 text-muted-foreground" />
            <span className="text-sm font-medium">Filters:</span>
            <Button variant="ghost" size="sm" className="text-xs">
              Grass Fed
            </Button>
            <Button variant="ghost" size="sm" className="text-xs">
              Free Range
            </Button>
            <Button variant="ghost" size="sm" className="text-xs">
              Organic
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
          {meatPoultryItems.map((item) => (
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
            Load more meat & poultry
          </Button>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default MeatPoultry;