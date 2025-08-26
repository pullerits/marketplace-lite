import { Search, ShoppingCart, Heart, User } from 'lucide-react';
import { Button } from './ui/button';
import { Input } from './ui/input';

const Header = () => {
  return (
    <header className="bg-background border-b border-border sticky top-0 z-50">
      <div className="container mx-auto px-4 py-3">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-8">
            <h1 className="text-2xl font-bold text-etsy-orange">CraftMarket</h1>
            
            {/* Navigation */}
            <nav className="hidden md:flex space-x-6">
              <Button variant="ghost" className="text-foreground hover:text-etsy-orange">
                Holiday Gifts
              </Button>
              <Button variant="ghost" className="text-foreground hover:text-etsy-orange">
                Home & Living
              </Button>
              <Button variant="ghost" className="text-foreground hover:text-etsy-orange">
                Jewelry
              </Button>
              <Button variant="ghost" className="text-foreground hover:text-etsy-orange">
                Clothing
              </Button>
            </nav>
          </div>

          {/* Search Bar */}
          <div className="flex-1 max-w-2xl mx-8">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input
                type="text"
                placeholder="Search for anything..."
                className="pl-10 pr-4 py-2 w-full rounded-full border-2 border-border focus:border-etsy-orange transition-colors"
              />
              <Button 
                size="sm" 
                className="absolute right-1 top-1/2 transform -translate-y-1/2 rounded-full bg-etsy-orange hover:bg-etsy-orange/90"
              >
                Search
              </Button>
            </div>
          </div>

          {/* User Actions */}
          <div className="flex items-center space-x-4">
            <Button variant="ghost" size="icon" className="hover:text-etsy-orange">
              <Heart className="h-5 w-5" />
            </Button>
            <Button variant="ghost" size="icon" className="hover:text-etsy-orange relative">
              <ShoppingCart className="h-5 w-5" />
              <span className="absolute -top-1 -right-1 bg-etsy-orange text-white text-xs rounded-full w-4 h-4 flex items-center justify-center">
                3
              </span>
            </Button>
            <Button variant="ghost" size="icon" className="hover:text-etsy-orange">
              <User className="h-5 w-5" />
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;