import { useState, useEffect, useCallback, useMemo, useRef } from 'react';

interface UseCarouselOptions {
  cardWidth: number;
  itemCount: number;
}

export const useCarousel = ({ cardWidth, itemCount }: UseCarouselOptions) => {
  const carouselRef = useRef<HTMLDivElement>(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [visibleCards, setVisibleCards] = useState(3);

  const getVisibleCards = useCallback(() => {
    if (carouselRef.current) {
      const containerWidth = carouselRef.current.offsetWidth;
      return Math.floor(containerWidth / cardWidth);
    }
    return 3; // fallback
  }, [cardWidth]);

  const scrollToNext = useCallback(() => {
    if (carouselRef.current) {
      const scrollLeft = carouselRef.current.scrollLeft;
      const newScrollLeft = scrollLeft + (cardWidth * visibleCards);
      
      carouselRef.current.scrollTo({
        left: newScrollLeft,
        behavior: 'smooth'
      });
    }
  }, [cardWidth, visibleCards]);

  const scrollToPrev = useCallback(() => {
    if (carouselRef.current) {
      const scrollLeft = carouselRef.current.scrollLeft;
      const newScrollLeft = Math.max(0, scrollLeft - (cardWidth * visibleCards));
      
      carouselRef.current.scrollTo({
        left: newScrollLeft,
        behavior: 'smooth'
      });
    }
  }, [cardWidth, visibleCards]);

  // Handle scroll events to update pagination
  useEffect(() => {
    const handleScroll = () => {
      if (carouselRef.current) {
        const scrollLeft = carouselRef.current.scrollLeft;
        const newIndex = Math.round(scrollLeft / cardWidth);
        setCurrentIndex(newIndex);
      }
    };

    const carousel = carouselRef.current;
    if (carousel) {
      carousel.addEventListener('scroll', handleScroll);
      return () => carousel.removeEventListener('scroll', handleScroll);
    }
  }, [cardWidth]);

  // Handle resize events
  useEffect(() => {
    const handleResize = () => {
      setVisibleCards(getVisibleCards());
    };
    
    window.addEventListener('resize', handleResize);
    handleResize(); // Set initial value
    return () => window.removeEventListener('resize', handleResize);
  }, [getVisibleCards]);

  // Memoized calculations for performance
  const { maxScrollIndex, totalDots, currentDot, paginationDots } = useMemo(() => {
    const maxIndex = Math.max(0, itemCount - visibleCards);
    const dots = Math.min(5, Math.ceil(itemCount / visibleCards));
    const currentDotIndex = Math.min(Math.floor(currentIndex / visibleCards), dots - 1);
    
    const dotArray = Array.from({ length: dots }, (_, index) => ({
      active: index === currentDotIndex,
      bgClass: index === currentDotIndex ? "bg-[#1e2125]" : "bg-white"
    }));

    return {
      maxScrollIndex: maxIndex,
      totalDots: dots,
      currentDot: currentDotIndex,
      paginationDots: dotArray
    };
  }, [itemCount, visibleCards, currentIndex]);

  return {
    carouselRef,
    currentIndex,
    visibleCards,
    scrollToNext,
    scrollToPrev,
    maxScrollIndex,
    totalDots,
    currentDot,
    paginationDots,
  };
};
