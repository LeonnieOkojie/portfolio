import { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '@/store/hooks';
import { setIsScrolled } from '@/store/uiSlice';
import { ArrowUp } from 'lucide-react';
import { Button } from '@/components/ui/button';

const BackToTop = () => {
  const dispatch = useAppDispatch();
  const isScrolled = useAppSelector((state) => state.ui.isScrolled);

  useEffect(() => {
    const handleScroll = () => {
      dispatch(setIsScrolled(window.scrollY > 500));
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [dispatch]);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  if (!isScrolled) return null;

  return (
    <Button
      onClick={scrollToTop}
      size="icon"
      className="fixed bottom-8 right-8 z-50 rounded-full w-14 h-14 bg-primary hover:bg-primary/90 text-primary-foreground glow-cyan hover-glow shadow-lg animate-fade-in"
      aria-label="Back to top"
    >
      <ArrowUp className="w-6 h-6" />
    </Button>
  );
};

export default BackToTop;
