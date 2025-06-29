

import { Button } from "@/components/ui/button";
import { Download, Menu } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import LanguageSwitcher from "@/components/LanguageSwitcher";
import Logo from "@/components/Logo";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { useState } from "react";

interface NavigationProps {
  currentPage?: 'index' | 'how-it-works';
}

const Navigation = ({ currentPage = 'index' }: NavigationProps) => {
  const { t } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);

  const handleDownload = () => {
    window.open('https://github.com/m3sserschmitt/aenigma-android/releases/download/v1.0.1/aenigma-v1.0.1.apk', '_blank');
  };

  const handleSectionClick = (sectionId: string) => {
    setIsOpen(false); // Close mobile menu
    if (currentPage === 'index') {
      const element = document.querySelector(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      window.location.href = '/';
    }
  };

  const handleHowItWorksClick = () => {
    setIsOpen(false); // Close mobile menu
    window.location.href = '/#/how-it-works';
    setTimeout(() => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }, 100);
  };

  return (
    <nav className="fixed top-0 w-full bg-appSurface/80 backdrop-blur-sm border-b border-appSurfaceHighest z-50">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        <div className="flex items-center space-x-2">
          <Logo size="sm" />
        </div>
        
        {/* Desktop Navigation */}
        <div className="hidden md:flex space-x-6">
          <button 
            onClick={() => handleSectionClick('#features')}
            className={`text-sm hover:text-appPrimary transition-colors ${
              currentPage === 'index' ? 'text-appOnSurface' : 'text-appOnSurface'
            }`}
          >
            {t('nav.features')}
          </button>
          <button 
            onClick={() => handleSectionClick('#security')}
            className={`text-sm hover:text-appPrimary transition-colors ${
              currentPage === 'index' ? 'text-appOnSurface' : 'text-appOnSurface'
            }`}
          >
            {t('nav.security')}
          </button>
          <button 
            onClick={handleHowItWorksClick}
            className={`text-sm hover:text-appPrimary transition-colors ${
              currentPage === 'how-it-works' ? 'text-appPrimary font-medium' : 'text-appOnSurface'
            }`}
          >
            {t('nav.howItWorks')}
          </button>
          <button 
            onClick={() => handleSectionClick('#download')}
            className={`text-sm hover:text-appPrimary transition-colors ${
              currentPage === 'index' ? 'text-appOnSurface' : 'text-appOnSurface'
            }`}
          >
            {t('nav.download')}
          </button>
        </div>
        
        {/* Desktop Controls */}
        <div className="hidden md:flex items-center space-x-2">
          <LanguageSwitcher />
          <Button 
            variant="outline" 
            size="sm"
            className="border-appPrimary text-appPrimary hover:bg-appPrimary hover:text-appOnPrimary"
            onClick={handleDownload}
          >
            <Download className="h-4 w-4" />
          </Button>
        </div>

        {/* Mobile Controls */}
        <div className="flex md:hidden items-center space-x-2">
          <LanguageSwitcher />
          <Button 
            variant="outline" 
            size="sm"
            className="border-appPrimary text-appPrimary hover:bg-appPrimary hover:text-appOnPrimary"
            onClick={handleDownload}
          >
            <Download className="h-4 w-4" />
          </Button>
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="sm" className="text-appOnSurface">
                <Menu className="h-5 w-5" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[280px] bg-appSurface border-appSurfaceHighest">
              <SheetHeader>
                <SheetTitle className="text-appOnPrimary text-left">
                  Menu
                </SheetTitle>
              </SheetHeader>
              <div className="flex flex-col space-y-4 mt-6">
                <button 
                  onClick={() => handleSectionClick('#features')}
                  className="text-left text-sm text-appOnSurface hover:text-appPrimary transition-colors py-2"
                >
                  {t('nav.features')}
                </button>
                <button 
                  onClick={() => handleSectionClick('#security')}
                  className="text-left text-sm text-appOnSurface hover:text-appPrimary transition-colors py-2"
                >
                  {t('nav.security')}
                </button>
                <button 
                  onClick={handleHowItWorksClick}
                  className={`text-left text-sm hover:text-appPrimary transition-colors py-2 ${
                    currentPage === 'how-it-works' ? 'text-appPrimary font-medium' : 'text-appOnSurface'
                  }`}
                >
                  {t('nav.howItWorks')}
                </button>
                <button 
                  onClick={() => handleSectionClick('#download')}
                  className="text-left text-sm text-appOnSurface hover:text-appPrimary transition-colors py-2"
                >
                  {t('nav.download')}
                </button>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;

