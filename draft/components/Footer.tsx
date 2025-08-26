import { Button } from '@/components/ui/button';

const Footer = () => {
  return (
    <footer className="bg-etsy-brown text-white py-12 mt-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-bold text-etsy-orange mb-4">CraftMarket</h3>
            <p className="text-sm text-gray-300 mb-4">
              A community doing good. Supporting independent creators and bringing you unique, handcrafted items with a story behind every purchase.
            </p>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Shop</h4>
            <ul className="space-y-2 text-sm">
              <li><Button variant="ghost" className="text-gray-300 hover:text-white p-0 h-auto">Gift cards</Button></li>
              <li><Button variant="ghost" className="text-gray-300 hover:text-white p-0 h-auto">Registry</Button></li>
              <li><Button variant="ghost" className="text-gray-300 hover:text-white p-0 h-auto">Sitemap</Button></li>
              <li><Button variant="ghost" className="text-gray-300 hover:text-white p-0 h-auto">Blog</Button></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Sell</h4>
            <ul className="space-y-2 text-sm">
              <li><Button variant="ghost" className="text-gray-300 hover:text-white p-0 h-auto">Sell on CraftMarket</Button></li>
              <li><Button variant="ghost" className="text-gray-300 hover:text-white p-0 h-auto">Teams</Button></li>
              <li><Button variant="ghost" className="text-gray-300 hover:text-white p-0 h-auto">Forums</Button></li>
              <li><Button variant="ghost" className="text-gray-300 hover:text-white p-0 h-auto">Affiliates</Button></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">About</h4>
            <ul className="space-y-2 text-sm">
              <li><Button variant="ghost" className="text-gray-300 hover:text-white p-0 h-auto">CraftMarket, Inc.</Button></li>
              <li><Button variant="ghost" className="text-gray-300 hover:text-white p-0 h-auto">Careers</Button></li>
              <li><Button variant="ghost" className="text-gray-300 hover:text-white p-0 h-auto">Press</Button></li>
              <li><Button variant="ghost" className="text-gray-300 hover:text-white p-0 h-auto">Investors</Button></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-600 mt-8 pt-8 text-center">
          <p className="text-sm text-gray-400">
            © 2024 CraftMarket, Inc. Terms of Use | Privacy | Interest-based ads
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;