import { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '@/store/hooks';
import { setActiveSection, setIsScrolled } from '@/store/uiSlice';
import { Code2, User, Briefcase, BookOpen, Mail } from 'lucide-react';
import ThemeToggle from './ThemeToggle';

const FloatingNav = () => {
  const dispatch = useAppDispatch();
  const { activeSection, isScrolled } = useAppSelector((state) => state.ui);

  const navItems = [
    { id: 'hero', label: 'Home', icon: Code2 },
    { id: 'about', label: 'About', icon: User },
    { id: 'projects', label: 'Projects', icon: Briefcase },
    { id: 'blog', label: 'Blog', icon: BookOpen },
    { id: 'contact', label: 'Contact', icon: Mail },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      dispatch(setIsScrolled(scrollPosition > 100));

      // Detect active section
      const sections = navItems.map(item => document.getElementById(item.id));
      const currentSection = sections.find(section => {
        if (!section) return false;
        const rect = section.getBoundingClientRect();
        return rect.top <= 150 && rect.bottom >= 150;
      });

      if (currentSection) {
        dispatch(setActiveSection(currentSection.id));
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [dispatch]);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      dispatch(setActiveSection(id));
    }
  };

  if (!isScrolled) return null;

  return (
    <nav className="fixed top-8 left-1/2 -translate-x-1/2 z-50 animate-fade-in">
      <div className="glass-card px-4 py-3 flex gap-2 items-center">
        {navItems.map(({ id, label, icon: Icon }) => (
          <button
            key={id}
            onClick={() => scrollToSection(id)}
            className={`group relative px-4 py-2 rounded-lg transition-all duration-300 ${
              activeSection === id
                ? 'bg-primary/20 text-primary'
                : 'text-muted-foreground hover:text-primary'
            }`}
            aria-label={label}
          >
            <Icon className="w-5 h-5" />
            <span className="absolute -bottom-8 left-1/2 -translate-x-1/2 px-2 py-1 bg-background/90 backdrop-blur-sm rounded text-xs whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity">
              {label}
            </span>
            {activeSection === id && (
              <div className="absolute inset-0 rounded-lg glow-cyan animate-glow-pulse" />
            )}
          </button>
        ))}
        <div className="w-px h-6 bg-border mx-1" />
        <ThemeToggle />
      </div>
    </nav>
  );
};

export default FloatingNav;
