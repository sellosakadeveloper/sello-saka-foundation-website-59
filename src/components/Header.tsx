import { Link } from "react-router-dom";
import { Heart, Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

const Header = () => {
  return (
    <header className="bg-navy-primary border-b border-gold-800">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16 sm:h-20">
          <Link to="/" className="flex items-center gap-2 sm:gap-3">
            <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-gold-600 flex items-center justify-center">
              <Heart className="w-5 h-5 sm:w-6 sm:h-6 text-navy-primary" fill="currentColor" />
            </div>
            <div>
              <div className="text-white font-bold text-base sm:text-lg">Sello Saka</div>
              <div className="text-gold-600 text-xs sm:text-sm">Foundation</div>
            </div>
          </Link>

          <nav className="hidden lg:flex items-center gap-6 xl:gap-8">
            <Link to="/" className="text-white hover:text-gold-400 transition-colors text-sm xl:text-base">
              Home
            </Link>
            <Link to="/about" className="text-white hover:text-gold-400 transition-colors text-sm xl:text-base">
              About
            </Link>
            <Link to="/programs" className="text-white hover:text-gold-400 transition-colors text-sm xl:text-base">
              Programs
            </Link>
            <Link to="/impact" className="text-white hover:text-gold-400 transition-colors text-sm xl:text-base">
              Impact Stories
            </Link>
            <Link to="/contact" className="text-white hover:text-gold-400 transition-colors text-sm xl:text-base">
              Contact
            </Link>
          </nav>

          <div className="flex items-center gap-2 sm:gap-3">
            <Button
              asChild
              variant="outline"
              className="hidden xl:inline-flex border-gold-600 text-gold-600 bg-transparent hover:bg-white hover:text-navy-primary hover:border-white text-sm"
            >
              <Link to="/apply">Apply for Assistance</Link>
            </Button>
            <Button asChild className="bg-gold-600 hover:bg-gold-400 text-navy-primary text-xs sm:text-sm px-3 sm:px-4">
              <Link to="/donate">
                <Heart className="w-3 h-3 sm:w-4 sm:h-4 mr-1 sm:mr-2" />
                <span className="hidden sm:inline">Donate Now</span>
                <span className="sm:hidden">Donate</span>
              </Link>
            </Button>
            
            {/* Mobile Menu */}
            <Sheet>
              <SheetTrigger asChild className="lg:hidden">
                <Button variant="ghost" size="icon" className="text-white">
                  <Menu className="h-6 w-6" />
                </Button>
              </SheetTrigger>
              <SheetContent className="bg-navy-primary border-gold-800">
                <nav className="flex flex-col gap-6 mt-8">
                  <Link to="/" className="text-white hover:text-gold-400 transition-colors text-lg">
                    Home
                  </Link>
                  <Link to="/about" className="text-white hover:text-gold-400 transition-colors text-lg">
                    About
                  </Link>
                  <Link to="/programs" className="text-white hover:text-gold-400 transition-colors text-lg">
                    Programs
                  </Link>
                  <Link to="/impact" className="text-white hover:text-gold-400 transition-colors text-lg">
                    Impact Stories
                  </Link>
                  <Link to="/contact" className="text-white hover:text-gold-400 transition-colors text-lg">
                    Contact
                  </Link>
                  <Link to="/apply" className="text-gold-600 hover:text-gold-400 transition-colors text-lg font-semibold">
                    Apply for Assistance
                  </Link>
                </nav>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
