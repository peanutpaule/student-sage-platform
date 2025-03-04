
import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Search } from 'lucide-react';
import { cn } from '@/lib/utils';

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'Courses', path: '/courses' },
    { name: 'Resources', path: '/resources' },
    { name: 'Profile', path: '/profile' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location.pathname]);

  return (
    <header
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300 px-6 lg:px-10',
        isScrolled 
          ? 'py-4 backdrop-blur-lg bg-white/80 shadow-sm' 
          : 'py-6 bg-transparent'
      )}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <Link 
          to="/" 
          className="text-ai-black font-medium text-xl transition-all hover:text-ai-blue"
        >
          AI<span className="text-ai-blue">Campus</span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          {navItems.map((item) => (
            <Link
              key={item.name}
              to={item.path}
              className={cn(
                'text-sm font-medium transition-all hover:text-ai-blue',
                location.pathname === item.path 
                  ? 'text-ai-blue' 
                  : 'text-ai-dark-gray'
              )}
            >
              {item.name}
            </Link>
          ))}

          <button 
            className="text-ai-dark-gray hover:text-ai-black transition-all"
            aria-label="Search"
          >
            <Search size={20} />
          </button>

          <button className="btn-primary">Get Started</button>
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-ai-black"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label={mobileMenuOpen ? 'Close menu' : 'Open menu'}
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      <div
        className={cn(
          'fixed inset-0 top-[72px] bg-white z-40 md:hidden transition-transform duration-300 ease-in-out',
          mobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
        )}
      >
        <nav className="flex flex-col p-6 space-y-6">
          {navItems.map((item) => (
            <Link
              key={item.name}
              to={item.path}
              className={cn(
                'text-lg font-medium py-2 transition-all',
                location.pathname === item.path 
                  ? 'text-ai-blue' 
                  : 'text-ai-black'
              )}
            >
              {item.name}
            </Link>
          ))}
          
          <div className="relative">
            <input 
              type="text" 
              placeholder="Search courses..." 
              className="w-full py-3 px-4 bg-ai-gray/50 rounded-full text-ai-black placeholder-ai-dark-gray focus:outline-none focus:ring-2 focus:ring-ai-blue/30"
            />
            <Search size={18} className="absolute right-4 top-1/2 transform -translate-y-1/2 text-ai-dark-gray" />
          </div>

          <button className="btn-primary w-full mt-4">Get Started</button>
        </nav>
      </div>
    </header>
  );
};

export default Header;
