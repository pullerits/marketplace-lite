'use client';

import { useState } from 'react';
import { ArrowLeft, Filter, Grid, List } from 'lucide-react';
import Link from 'next/link';
import Header from '@/app/draft/components/Header';
import ProductCard from '@/app/draft/components/ProductCard';
import Footer from '@/app/draft/components/Footer';
import { Button } from '@/components/ui/button';

const seafoodItems = [
  {
    id: 1,
    image: '/images/products/ceramic-bowl.jpg',
    title: 'Wild-Caught Atlantic Salmon - Fresh Daily Catch',
    price: '$12.50/lb',
    rating: 4.9,
    reviews: 156,
    seller: 'Coastal Fishery',
  },
  {
    id: 2,
    image: '/images/products/macrame-hanging.jpg',
    title: 'Fresh Maine Lobster - Live from Cold Waters',
    price: '$18.99/lb',
    rating: 4.8,
    reviews: 203,
    seller: 'Atlantic Seafood',
  },
  {
    id: 3,
    image: '/images/products/wooden-jewelry-box.jpg',
    title: 'Gulf Shrimp - Large, Wild-Caught & Peeled',
    price: '$14.75/lb',
    rating: 4.7,
    reviews: 89,
    seller: 'Bay Shore Fish',
  },
  {
    id: 4,
    image: '/images/products/ceramic-bowl.jpg',
    title: 'Fresh Cod Fillets - Sustainable Catch, Boneless',
    price: '$9.99/lb',
    rating: 4.8,
    reviews: 134,
    seller: 'North Sea Fish Co',
  },
  {
    id: 5,
    image: '/images/products/macrame-hanging.jpg',
    title: 'Sea Scallops - Diver Caught, Extra Large',
    price: '$22.50/lb',
    rating: 4.9,
    reviews: 112,
    seller: 'Deep Blue Seafood',
  },
  {
    id: 6,
    image: '/images/products/wooden-jewelry-box.jpg',
    title: 'Fresh Tuna Steaks - Sushi Grade, Line Caught',
    price: '$16.99/lb',
    rating: 4.6,
    reviews: 67,
    seller: 'Pacific Catch',
  },
  {
    id: 7,
    image: '/images/products/ceramic-bowl.jpg',
    title: 'Blue Mussels - Farm Raised, Cleaned & Debearded',
    price: '$5.99/lb',
    rating: 4.5,
    reviews: 78,
    seller: 'Mussel Bay Farm',
  },
  {
    id: 8,
    image: '/images/products/macrame-hanging.jpg',
    title: 'Fresh Halibut - Wild Alaska, Premium Fillets',
    price: '$19.99/lb',
    rating: 4.7,
    reviews: 94,
    seller: 'Alaska Waters',
  },
];

const Seafood = () => {
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
          <h1 className="text-3xl font-bold text-etsy-brown mb-2">Fresh Seafood</h1>
          <p className="text-lg text-muted-foreground">
            Daily fresh catch from sustainable fisheries and local waters
          </p>
        </div>

        {/* Filters and Sort */}
        <div className="flex flex-col sm:flex-row gap-4 mb-8 p-4 bg-etsy-cream/20 rounded-lg">
          <div className="flex items-center gap-2">
            <Filter className="h-4 w-4 text-muted-foreground" />
            <span className="text-sm font-medium">Filters:</span>
            <Button variant="ghost" size="sm" className="text-xs">
              Wild-Caught
            </Button>
            <Button variant="ghost" size="sm" className="text-xs">
              Sustainable
            </Button>
            <Button variant="ghost" size="sm" className="text-xs">
              Local Waters
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
          {seafoodItems.map((item) => (
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
            Load more seafood
          </Button>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Seafood;