'use client';

import { useState } from 'react';
import { ArrowLeft, Filter, Grid, List } from 'lucide-react';
import Link from 'next/link';
import Header from '@/app/draft/components/Header';
import ProductCard from '@/app/draft/components/ProductCard';
import Footer from '@/app/draft/components/Footer';
import { Button } from '@/components/ui/button';

const produceItems = [
  {
    id: 1,
    image: '/images/products/tomatoes.jpg',
    title: 'Organic Roma Tomatoes - Vine Ripened, Perfect for Cooking',
    price: '$4.50/lb',
    rating: 4.9,
    reviews: 156,
    seller: 'Sunshine Farm',
  },
  {
    id: 2,
    image: '/images/products/corn.jpg',
    title: 'Fresh Sweet Corn - Local Harvest, Non-GMO',
    price: '$0.75/ear',
    rating: 4.8,
    reviews: 203,
    seller: 'Valley Acres',
  },
  {
    id: 3,
    image: '/images/products/spinach.jpg',
    title: 'Baby Spinach - Organic, Fresh Picked Daily',
    price: '$3.25/bunch',
    rating: 4.7,
    reviews: 89,
    seller: 'Green Leaf Farm',
  },
  {
    id: 4,
    image: '/images/products/carrots.jpg',
    title: 'Heirloom Carrots - Rainbow Mix, Pesticide-Free',
    price: '$2.99/lb',
    rating: 4.8,
    reviews: 134,
    seller: 'Heritage Gardens',
  },
  {
    id: 5,
    image: '/images/products/broccoli.jpg',
    title: 'Fresh Broccoli Crowns - Locally Grown, Crisp & Fresh',
    price: '$3.75/head',
    rating: 4.6,
    reviews: 112,
    seller: 'Organic Valley',
  },
  {
    id: 6,
    image: '/images/products/mixed-greens.jpg',
    title: 'Mixed Greens Salad - Arugula, Lettuce & Herbs',
    price: '$4.99/bag',
    rating: 4.9,
    reviews: 267,
    seller: 'Fresh Harvest Co',
  },
  {
    id: 7,
    image: '/images/products/bell-peppers.jpg',
    title: 'Red Bell Peppers - Sweet & Crunchy, Greenhouse Grown',
    price: '$5.25/lb',
    rating: 4.7,
    reviews: 78,
    seller: 'Pepper Ridge Farm',
  },
  {
    id: 8,
    image: '/images/products/zucchini.jpg',
    title: 'Fresh Zucchini - Summer Squash, Garden Fresh',
    price: '$2.50/lb',
    rating: 4.5,
    reviews: 94,
    seller: 'Garden Grove',
  },
];

const Produce = () => {
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
          <h1 className="text-3xl font-bold text-etsy-brown mb-2">Fresh Produce</h1>
          <p className="text-lg text-muted-foreground">
            Farm-fresh fruits and vegetables from local growers
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
              Local
            </Button>
            <Button variant="ghost" size="sm" className="text-xs">
              In Season
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
          {produceItems.map((item) => (
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
            Load more produce
          </Button>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Produce;