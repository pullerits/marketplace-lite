import Image from 'next/image';
import Link from 'next/link';

const categories = [
  {
    id: 1,
    title: 'Produce',
    subtitle: 'fruits & vegetables',
    image: '/images/categories/category-produce.jpg',
    href: '/draft/produce',
  },
  {
    id: 2,
    title: 'Seafood',
    subtitle: 'fresh catch daily',
    image: '/images/categories/category-seafood.jpg',
    href: '/draft/seafood',
  },
  {
    id: 3,
    title: 'Pantry',
    subtitle: 'honey, preserves & more',
    image: '/images/categories/category-pantry.jpg',
    href: '/draft/pantry',
  },
  {
    id: 4,
    title: 'Meat & Poultry',
    subtitle: 'farm fresh quality',
    image: '/images/categories/category-meat-poultry.jpg',
    href: '/draft/meat-poultry',
  },
  {
    id: 5,
    title: 'Plants & Flowers',
    subtitle: 'fresh bouquets & plants',
    image: '/images/categories/category-plants-flowers.jpg',
    href: '/draft/plants-flowers',
  },
  {
    id: 6,
    title: 'Crafts & Art',
    subtitle: 'handmade local goods',
    image: '/images/categories/category-crafts-art.jpg',
    href: '/draft/crafts-art',
  },
];

const CategoryGrid = () => {
  return (
    <section className="py-12 bg-background">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl font-bold text-etsy-brown mb-2">
          Shop by category
        </h2>
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 mt-8">
          {categories.map((category) => (
            <Link 
              key={category.id}
              href={category.href}
              className="group cursor-pointer block"
            >
              <div className="relative rounded-2xl overflow-hidden mb-4 aspect-square">
                <Image 
                  src={category.image} 
                  alt={category.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors" />
              </div>
              
              <div className="text-center">
                <h3 className="font-semibold text-foreground text-sm mb-1">
                  {category.title}
                </h3>
                <p className="text-xs text-muted-foreground">
                  {category.subtitle}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CategoryGrid;