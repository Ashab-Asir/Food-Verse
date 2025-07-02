import { useState, useEffect } from "react";
import { ArrowLeft, ArrowRight } from "lucide-react";

const Carousel = ({ slides }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [cardsPerView, setCardsPerView] = useState(3);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 640) {
        // sm breakpoint (Tailwind's sm: 640px)
        setCardsPerView(1);
      } else {
        // md (768px) and above
        setCardsPerView(3);
      }
    };

    handleResize(); // Set initial value
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const maxIndex = Math.max(0, slides.length - cardsPerView);

  const goToPrevious = () => {
    setCurrentIndex((prev) => (prev <= 0 ? maxIndex : prev - 1));
  };

  const goToNext = () => {
    setCurrentIndex((prev) => (prev >= maxIndex ? 0 : prev + 1));
  };

  return (
    <div className="relative w-full overflow-hidden">
      {/* Slides container */}
      <div
        className="flex transition-transform duration-300 ease-in-out"
        style={{
          transform: `translateX(-${currentIndex * (100 / cardsPerView)}%)`,
          width: `${(100 * slides.length) / cardsPerView}%`,
        }}
      >
        {slides.map((slide, index) => (
          <div
            key={index}
            className="px-2"
            style={{
              flex: `0 0 ${100 / cardsPerView}%`,
              boxSizing: "border-box", // Ensure padding doesn't affect width
            }}
          >
            {slide}
          </div>
        ))}
      </div>

      {/* Navigation arrows */}
      <button
        onClick={goToPrevious}
        className="absolute top-1/2 left-0 -translate-y-1/2 z-10 bg-white/80 hover:bg-white p-2 rounded-full shadow-lg transition-colors duration-200"
        aria-label="Previous slide"
      >
        <ArrowLeft className="w-5 h-5" />
      </button>
      <button
        onClick={goToNext}
        className="absolute top-1/2 right-0 -translate-y-1/2 z-10 bg-white/80 hover:bg-white p-2 rounded-full shadow-lg transition-colors duration-200"
        aria-label="Next slide"
      >
        <ArrowRight className="w-5 h-5" />
      </button>
    </div>
  );
};

export default Carousel;
