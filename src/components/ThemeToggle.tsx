import { useTheme } from 'next-themes';
import { Moon, Sun } from 'lucide-react';
import { useEffect, useState } from 'react';

const ThemeToggle = () => {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <button className="p-2 rounded-lg transition-all duration-300 text-muted-foreground">
        <div className="w-5 h-5" />
      </button>
    );
  }

  return (
    <button
      onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
      className="group relative p-2 rounded-lg transition-all duration-300 text-muted-foreground hover:text-primary hover:bg-primary/10"
      aria-label="Toggle theme"
    >
      {theme === 'dark' ? (
        <Sun className="w-5 h-5 transition-transform group-hover:rotate-180 duration-500" />
      ) : (
        <Moon className="w-5 h-5 transition-transform group-hover:-rotate-12 duration-300" />
      )}
      <span className="absolute -bottom-8 left-1/2 -translate-x-1/2 px-2 py-1 bg-background/90 backdrop-blur-sm rounded text-xs whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity">
        {theme === 'dark' ? 'Light mode' : 'Dark mode'}
      </span>
    </button>
  );
};

export default ThemeToggle;
