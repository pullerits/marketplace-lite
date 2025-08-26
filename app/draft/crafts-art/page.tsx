'use client';

import { useState } from 'react';
import { ArrowLeft, Filter, Grid, List } from 'lucide-react';
import Link from 'next/link';
import Header from '@/app/draft/components/Header';
import ProductCard from '@/app/draft/components/ProductCard';
import Footer from '@/app/draft/components/Footer';
import { Button } from '@/components/ui/button';

const craftsArtItems = [
  {
    id: 1,
    image: '/images/products/ceramic-bowl.jpg',
    title: 'Handmade Ceramic Bowl - Earthy Glazed Pottery',
    price: '$34.99/piece',
    rating: 4.8,
    reviews: 156,
    seller: 'Clay & Fire Studio',
  },
  {
    id: 2,
    image: '/images/products/macrame-hanging.jpg',
    title: 'Boho Macrame Wall Hanging - Natural Cotton Cord',
    price: '$48.50/piece',
    rating: 4.9,
    reviews: 203,
    seller: 'Knotted Dreams',
  },
  {
    id: 3,
    image: '/images/products/wooden-jewelry-box.jpg',
    title: 'Handcrafted Wooden Box - Intricate Carved Details',
    price: '$76.00/piece',
    rating: 4.7,
    reviews: 89,
    seller: 'Mountain Woodworks',
  },
  {
    id: 4,
    image: '/images/products/ceramic-bowl.jpg',
    title: 'Watercolor Landscape Print - Framed, Original Art',
    price: '$65.00/16x20',
    rating: 4.8,
    reviews: 134,
    seller: 'Riverside Art Studio',
  },
  {
    id: 5,
    image: '/images/products/macrame-hanging.jpg',
    title: 'Hand-Woven Basket - Natural Reed, Storage Size',
    price: '$29.99/each',
    rating: 4.9,
    reviews: 112,
    seller: 'Traditional Crafts Co',
  },
  {
    id: 6,
    image: '/images/products/wooden-jewelry-box.jpg',
    title: 'Artisan Candles - Soy Wax, Hand-Poured, Lavender',
    price: '$18.99/3-pack',
    rating: 4.6,
    reviews: 67,
    seller: 'Flame & Fragrance',
  },
  {
    id: 7,
    image: '/images/products/ceramic-bowl.jpg',
    title: 'Handmade Soap Set - Natural Ingredients, Essential Oils',
    price: '$24.99/6-pack',
    rating: 4.5,
    reviews: 78,
    seller: 'Pure Suds Soapery',
  },
  {
    id: 8,
    image: '/images/products/macrame-hanging.jpg',
    title: 'Knitted Wool Blanket - Chunky Knit, Locally Sourced',
    price: '$89.99/throw',
    rating: 4.7,
    reviews: 94,
    seller: 'Cozy Corner Crafts',
  },
];

const CraftsArt = () => {
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
          <h1 className="text-3xl font-bold text-etsy-brown mb-2">Crafts & Art</h1>
          <p className="text-lg text-muted-foreground">
            Handmade crafts, original artwork, and artisanal goods from local creators
          </p>
        </div>

        {/* Filters and Sort */}
        <div className="flex flex-col sm:flex-row gap-4 mb-8 p-4 bg-etsy-cream/20 rounded-lg">
          <div className="flex items-center gap-2">
            <Filter className="h-4 w-4 text-muted-foreground" />
            <span className="text-sm font-medium">Filters:</span>
            <Button variant="ghost" size="sm" className="text-xs">
              Handmade
            </Button>
            <Button variant="ghost" size="sm" className="text-xs">
              Original Art
            </Button>
            <Button variant="ghost" size="sm" className="text-xs">
              Custom Orders
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
          {craftsArtItems.map((item) => (
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
            Load more crafts & art
          </Button>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default CraftsArt;