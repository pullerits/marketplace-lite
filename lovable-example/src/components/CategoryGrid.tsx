import ceramicBowl from '@/assets/ceramic-bowl.jpg';
import macrameHanging from '@/assets/macrame-hanging.jpg';
import woodenJewelryBox from '@/assets/wooden-jewelry-box.jpg';

const categories = [
  {
    id: 1,
    title: 'Gardening',
    subtitle: 'plants and planters',
    image: ceramicBowl,
  },
  {
    id: 2,
    title: 'Popular Wall Decor',
    subtitle: 'Easy to hang framed',
    image: macrameHanging,
  },
  {
    id: 3,
    title: 'Woodworking',
    subtitle: 'Custom furniture',
    image: woodenJewelryBox,
  },
  {
    id: 4,
    title: 'Personalized Gifts',
    subtitle: 'Made just for you',
    image: ceramicBowl,
  },
];

const CategoryGrid = () => {
  return (
    <section className="py-12 bg-background">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl font-bold text-etsy-brown mb-2">
          Jump into featured interests
        </h2>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-8">
          {categories.map((category) => (
            <div 
              key={category.id}
              className="group cursor-pointer"
            >
              <div className="relative rounded-2xl overflow-hidden mb-4 aspect-square">
                <img 
                  src={category.image} 
                  alt={category.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
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
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CategoryGrid;