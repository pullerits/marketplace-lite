'use client';

import { useState } from 'react';
import { ArrowLeft, Filter, Grid, List } from 'lucide-react';
import Link from 'next/link';
import Header from '@/app/draft/components/Header';
import ProductCard from '@/app/draft/components/ProductCard';
import Footer from '@/app/draft/components/Footer';
import { Button } from '@/components/ui/button';

const pantryItems = [
  {
    id: 1,
    image: '/images/products/ceramic-bowl.jpg',
    title: 'Raw Wildflower Honey - Unprocessed, Straight from Hive',
    price: '$8.00/jar',
    rating: 4.8,
    reviews: 156,
    seller: 'Meadow Bee Farm',
  },
  {
    id: 2,
    image: '/images/products/macrame-hanging.jpg',
    title: 'Artisan Sourdough Bread - Fresh Baked Daily',
    price: '$6.99/loaf',
    rating: 4.9,
    reviews: 203,
    seller: 'Village Bakery',
  },
  {
    id: 3,
    image: '/images/products/wooden-jewelry-box.jpg',
    title: 'Small Batch Strawberry Jam - No Preservatives',
    price: '$7.50/8oz jar',
    rating: 4.7,
    reviews: 89,
    seller: 'Grandmas Kitchen',
  },
  {
    id: 4,
    image: '/images/products/ceramic-bowl.jpg',
    title: 'Cold-Pressed Olive Oil - Extra Virgin, Single Estate',
    price: '$18.99/500ml',
    rating: 4.8,
    reviews: 134,
    seller: 'Sunset Grove',
  },
  {
    id: 5,
    image: '/images/products/macrame-hanging.jpg',
    title: 'Maple Syrup - Grade A, Dark Robust, Tree-Tapped',
    price: '$12.99/16oz',
    rating: 4.9,
    reviews: 112,
    seller: 'Mountain Maple Co',
  },
  {
    id: 6,
    image: '/images/products/wooden-jewelry-box.jpg',
    title: 'Heirloom Grain Flour - Stone Ground, Organic Wheat',
    price: '$4.99/2lb bag',
    rating: 4.6,
    reviews: 67,
    seller: 'Ancient Grains Mill',
  },
  {
    id: 7,
    image: '/images/products/ceramic-bowl.jpg',
    title: 'Sea Salt - Hand Harvested, Unrefined Crystals',
    price: '$9.50/8oz',
    rating: 4.5,
    reviews: 78,
    seller: 'Coastal Salt Works',
  },
  {
    id: 8,
    image: '/images/products/macrame-hanging.jpg',
    title: 'Apple Cider Vinegar - Raw, Unfiltered with Mother',
    price: '$5.99/16oz',
    rating: 4.7,
    reviews: 94,
    seller: 'Orchard Valley',
  },
];

const Pantry = () => {
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
          <h1 className="text-3xl font-bold text-etsy-brown mb-2">Pantry Essentials</h1>
          <p className="text-lg text-muted-foreground">
            Artisanal honey, preserves, oils, and pantry staples from local producers
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
              Raw/Unprocessed
            </Button>
            <Button variant="ghost" size="sm" className="text-xs">
              Small Batch
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
          {pantryItems.map((item) => (
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
            Load more pantry items
          </Button>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Pantry;