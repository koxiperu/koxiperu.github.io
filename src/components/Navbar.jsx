import { useState, useEffect } from 'react';
import Container from './ui/Container';

export default function Navbar({ activePage, setActivePage }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'skills', label: 'Skills' },
    { id: 'experience', label: 'Experience' },
    { id: 'education', label: 'Education' },
    { id: 'projects', label: 'Projects' },
    { id: 'contact', label: 'Contact' },
  ];

  const handleNavClick = (id) => {
    setActivePage(id);
    setIsMenuOpen(false);
  };

  return (
    <nav 
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-700 no-star-interaction ${
        scrolled 
          ? 'py-3 bg-brand-dark/60 backdrop-blur-xl border-b border-white/5' 
          : 'py-6 bg-transparent'
      }`}
      aria-label="Main Navigation"
    >
      <Container>
        <div className="flex justify-between items-center">
          <button 
            className="text-lg font-bold tracking-tighter text-slate-100 cursor-pointer focus:outline-none focus:ring-1 focus:ring-brand-accent/50 rounded-lg"
            onClick={() => handleNavClick('home')}
            aria-label="Anna Bushueva"
          >
            ANNA<span className="text-brand-accent">.</span>B
          </button>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-2">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => setActivePage(item.id)}
                aria-current={activePage === item.id ? 'page' : undefined}
                className={`text-[10px] uppercase tracking-[0.2em] font-bold transition-all duration-300 px-4 py-2 rounded-lg focus:outline-none ${
                  activePage === item.id
                    ? 'text-brand-accent bg-brand-accent/5 shadow-sm shadow-brand-accent/5'
                    : 'text-slate-500 hover:text-slate-200 hover:bg-white/5'
                }`}
              >
                {item.label}
              </button>
            ))}
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button 
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-slate-400 hover:text-slate-100 p-2 transition-colors focus:outline-none"
              aria-expanded={isMenuOpen}
              aria-controls="mobile-menu"
              aria-label={isMenuOpen ? "Close menu" : "Open menu"}
            >
              <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                {isMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 8h16M4 16h16" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </Container>

      {/* Mobile Navigation Menu */}
      <div 
        id="mobile-menu"
        className={`md:hidden absolute top-full right-4 w-64 bg-brand-dark/95 backdrop-blur-3xl border border-white/5 shadow-2xl transition-all duration-500 transform origin-top-right rounded-2xl mt-2 ${
          isMenuOpen ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 -translate-y-2 scale-95 pointer-events-none'
        }`}
      >
        <div className="p-3 space-y-1">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => handleNavClick(item.id)}
              aria-current={activePage === item.id ? 'page' : undefined}
              className={`block w-full text-left px-5 py-3 rounded-xl text-xs font-bold tracking-widest transition-all ${
                activePage === item.id
                  ? 'bg-brand-accent/10 text-brand-accent'
                  : 'text-slate-400 hover:text-slate-100 hover:bg-white/5'
              }`}
            >
              {item.label}
            </button>
          ))}
        </div>
      </div>
    </nav>
  );
}
