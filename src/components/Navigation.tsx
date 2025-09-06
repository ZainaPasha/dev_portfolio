import { useEffect, useState } from 'react';

const navItems = [
  { href: '#hero', label: 'Home' },
  { href: '#about', label: 'About' },
  { href: '#experience', label: 'Experience' },
  { href: '#projects', label: 'Projects' },
  { href: '#contact', label: 'Contact' },
];

export default function Navigation() {
  const [activeSection, setActiveSection] = useState('hero');

  useEffect(() => {
    const handleScroll = () => {
      const sections = navItems.map(item => item.href.substring(1));
      const scrollPosition = window.scrollY + 100;

      sections.forEach(section => {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
          }
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (href: string) => {
    const targetId = href.substring(1);
    const element = document.getElementById(targetId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <nav 
      className="fixed top-6 left-1/2 transform -translate-x-1/2 z-50 nav-blur rounded-full px-8 py-4"
      data-testid="navigation"
    >
      <div className="flex items-center space-x-8">
        {navItems.map((item) => (
          <button
            key={item.href}
            onClick={() => handleNavClick(item.href)}
            className={`text-sm font-medium transition-colors duration-300 hover:text-primary ${
              activeSection === item.href.substring(1) ? 'text-primary' : 'text-foreground'
            }`}
            data-testid={`nav-${item.label.toLowerCase()}`}
          >
            {item.label}
          </button>
        ))}
      </div>
    </nav>
  );
}
