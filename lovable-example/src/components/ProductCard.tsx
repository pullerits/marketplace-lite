import { Heart } from 'lucide-react';
import { Button } from './ui/button';
import { Card } from './ui/card';

interface ProductCardProps {
  image: string;
  title: string;
  price: string;
  rating: number;
  reviews: number;
  seller: string;
}

const ProductCard = ({ image, title, price, rating, reviews, seller }: ProductCardProps) => {
  return (
    <Card className="group cursor-pointer hover:shadow-lg transition-all duration-300 overflow-hidden border-border/50">
      <div className="relative">
        <img 
          src={image} 
          alt={title}
          className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
        />
        <Button 
          variant="ghost" 
          size="icon" 
          className="absolute top-2 right-2 bg-white/80 hover:bg-white hover:text-etsy-orange opacity-0 group-hover:opacity-100 transition-opacity"
        >
          <Heart className="h-4 w-4" />
        </Button>
      </div>
      
      <div className="p-4 space-y-2">
        <h3 className="font-medium text-foreground line-clamp-2 text-sm">
          {title}
        </h3>
        
        <div className="flex items-center space-x-1">
          <div className="flex items-center">
            {[...Array(5)].map((_, i) => (
              <span 
                key={i} 
                className={`text-xs ${i < Math.floor(rating) ? 'text-etsy-orange' : 'text-muted-foreground'}`}
              >
                ★
              </span>
            ))}
          </div>
          <span className="text-xs text-muted-foreground">({reviews})</span>
        </div>
        
        <div className="flex items-center justify-between">
          <span className="font-bold text-etsy-brown">{price}</span>
          <span className="text-xs text-muted-foreground">{seller}</span>
        </div>
      </div>
    </Card>
  );
};

export default ProductCard;