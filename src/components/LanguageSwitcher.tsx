
import React from 'react';
import { Button } from '@/components/ui/button';
import { Globe } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';

const LanguageSwitcher = () => {
  const { language, setLanguage } = useLanguage();

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" size="sm" className="text-appOnSurface hover:text-appPrimary">
          <img 
            src={language === 'en' ? '/flags/england.png' : '/flags/romania.png'} 
            alt={language === 'en' ? 'English' : 'Română'} 
            className="h-4 w-6 mr-1 object-cover" 
          />
          {language === 'en' ? 'EN' : 'RO'}
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuItem 
          onClick={() => setLanguage('en')}
          className={language === 'en' ? 'bg-appPrimary/20' : ''}
        >
          <img src="/flags/england.png" alt="English" className="h-4 w-6 mr-1 object-cover" />
          English
        </DropdownMenuItem>
        <DropdownMenuItem 
          onClick={() => setLanguage('ro')}
          className={language === 'ro' ? 'bg-appPrimary/20' : ''}
        >
          <img src="/flags/romania.png" alt="Română" className="h-4 w-6 mr-1 object-cover" />
          Română
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default LanguageSwitcher;
