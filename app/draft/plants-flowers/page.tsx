'use client';

import { useState } from 'react';
import { ArrowLeft, Filter, Grid, List } from 'lucide-react';
import Link from 'next/link';
import Header from '@/app/draft/components/Header';
import ProductCard from '@/app/draft/components/ProductCard';
import Footer from '@/app/draft/components/Footer';
import { Button } from '@/components/ui/button';

const plantsFlowersItems = [
  {
    id: 1,
    image: '/images/products/ceramic-bowl.jpg',
    title: 'Mixed Seasonal Bouquet - Fresh Cut, Locally Grown',
    price: '$15.99/bouquet',
    rating: 4.8,
    reviews: 156,
    seller: 'Wildflower Farm',
  },
  {
    id: 2,
    image: '/images/products/macrame-hanging.jpg',
    title: 'Herb Garden Starter Kit - Basil, Rosemary, Thyme',
    price: '$12.99/3-pack',
    rating: 4.9,
    reviews: 203,
    seller: 'Green Thumb Nursery',
  },
  {
    id: 3,
    image: '/images/products/wooden-jewelry-box.jpg',
    title: 'Succulent Collection - Low Maintenance, Potted',
    price: '$8.50/each',
    rating: 4.7,
    reviews: 89,
    seller: 'Desert Rose Gardens',
  },
  {
    id: 4,
    image: '/images/products/ceramic-bowl.jpg',
    title: 'Sunflowers - Giant Variety, Fresh Cut Stems',
    price: '$3.99/stem',
    rating: 4.8,
    reviews: 134,
    seller: 'Sunny Fields Farm',
  },
  {
    id: 5,
    image: '/images/products/macrame-hanging.jpg',
    title: 'Heirloom Tomato Seedlings - Cherokee Purple',
    price: '$4.99/4-pack',
    rating: 4.9,
    reviews: 112,
    seller: 'Heritage Plant Co',
  },
  {
    id: 6,
    image: '/images/products/wooden-jewelry-box.jpg',
    title: 'Lavender Bundles - Dried, Organic, Fragrant',
    price: '$6.99/bundle',
    rating: 4.6,
    reviews: 67,
    seller: 'Purple Hills Lavender',
  },
  {
    id: 7,
    image: '/images/products/ceramic-bowl.jpg',
    title: 'Potted Rose Bush - Climbing Variety, 2-Gallon',
    price: '$24.99/pot',
    rating: 4.5,
    reviews: 78,
    seller: 'Rose Garden Nursery',
  },
  {
    id: 8,
    image: '/images/products/macrame-hanging.jpg',
    title: 'Air Plants - Tillandsia Collection, No Soil Needed',
    price: '$9.99/3-pack',
    rating: 4.7,
    reviews: 94,
    seller: 'Sky Garden Co',
  },
];

const PlantsFlowers = () => {
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
          <h1 className="text-3xl font-bold text-etsy-brown mb-2">Plants & Flowers</h1>
          <p className="text-lg text-muted-foreground">
            Fresh blooms, garden plants, and seedlings from local growers
          </p>
        </div>

        {/* Filters and Sort */}
        <div className="flex flex-col sm:flex-row gap-4 mb-8 p-4 bg-etsy-cream/20 rounded-lg">
          <div className="flex items-center gap-2">
            <Filter className="h-4 w-4 text-muted-foreground" />
            <span className="text-sm font-medium">Filters:</span>
            <Button variant="ghost" size="sm" className="text-xs">
              Fresh Cut
            </Button>
            <Button variant="ghost" size="sm" className="text-xs">
              Live Plants
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
          {plantsFlowersItems.map((item) => (
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
            Load more plants & flowers
          </Button>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default PlantsFlowers;