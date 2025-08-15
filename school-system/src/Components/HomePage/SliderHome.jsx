import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';

// Import images
import schoolgraphicimageone from '/src/assets/SCHOOL GRAPHIC.avif';
import schoolgraphicimagetwo from '/src/assets/JUST DESIGN.avif';
import schoolgraphicimagethree from '/src/assets/school art.avif';

const newsData = [
  {
    id: 1, 
    image: schoolgraphicimageone, 
    title: "LEARN ANYWHERE", 
    description: "With access to digital tools and guided support, children can continue learning from home, while traveling, or from any safe space. Our platform ensures that learning never stops—whether inside or outside the classroom."
  },
  {
    id: 2, 
    image: schoolgraphicimagetwo, 
    title: "CREATIVE DESIGN", 
    description: "Our visual resources and design tools help children express their creativity while learning. From illustrations to layout-based tasks, design becomes part of the learning journey." 
  },
  {
    id: 3, 
    image: schoolgraphicimagethree, 
    title: "ARTISTIC GROWTH", 
    description: "We encourage young learners to grow through art. Drawing, painting, and visual storytelling are integrated into the curriculum to nurture imagination and self-expression."
  },
];

const SliderHome = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(1); // 1 for forward, -1 for backward
  const [isMobile, setIsMobile] = useState(false);

  // Check for mobile view
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Auto-advance slides
  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 6000);
    return () => clearInterval(interval);
  }, [currentIndex]);

  const nextSlide = () => {
    setDirection(1);
    setCurrentIndex((prev) => (prev + 1) % newsData.length);
  };

  const prevSlide = () => {
    setDirection(-1);
    setCurrentIndex((prev) => (prev - 1 + newsData.length) % newsData.length);
  };

  // Determine which slides to show based on viewport
  const getVisibleSlides = () => {
    if (isMobile) {
      return [newsData[currentIndex]];
    }
    
    return [
      newsData[currentIndex],
      newsData[(currentIndex + 1) % newsData.length],
      newsData[(currentIndex + 2) % newsData.length]
    ];
  };

  const slideVariants = {
    hidden: (direction) => ({
      x: direction > 0 ? '100%' : '-100%',
      opacity: 0
    }),
    visible: {
      x: 0,
      opacity: 1,
      transition: { duration: 0.6, ease: 'easeInOut' }
    },
    exit: (direction) => ({
      x: direction > 0 ? '-100%' : '100%',
      opacity: 0,
      transition: { duration: 0.6, ease: 'easeInOut' }
    })
  };

  return (
    <div className="mt-20 px-4 md:px-8 lg:px-16">
      <div className="relative overflow-hidden">
        {/* Slides Container */}
        <div className={`grid ${isMobile ? 'grid-cols-1' : 'grid-cols-3'} gap-6 md:gap-8`}>
          <AnimatePresence custom={direction} initial={false}>
            {getVisibleSlides().map((item, index) => (
              <motion.div
                key={item.id}
                custom={direction}
                initial="hidden"
                animate="visible"
                exit="exit"
                variants={slideVariants}
                className="relative rounded-xl overflow-hidden shadow-lg bg-white"
              >
                <div className="aspect-w-16 aspect-h-9">
                  <img 
                    src={item.image} 
                    alt={item.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl md:text-2xl font-bold text-gray-800 mb-3">
                    {item.title}
                  </h3>
                  <p className="text-gray-600">
                    {item.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {/* Navigation Arrows */}
        {/* <button 
          onClick={prevSlide}
          className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-blue-600 bg-opacity-80 hover:bg-opacity-100 p-2 rounded-full shadow-md ml-2"
          aria-label="Previous slide"
        >
          <FiChevronLeft className="w-6 h-6 text-gray-800" />
        </button>
        <button 
          onClick={nextSlide}
          className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-blue-600 hidden md:hidden-none bg-opacity-80 hover:bg-opacity-100 p-2 rounded-full shadow-md mr-2"
          aria-label="Next slide"
        >
          <FiChevronRight className="w-6 h-6 text-gray-800" />
        </button> */}

        

        {/* Dots Indicator */}
        <div className="flex justify-center mt-6 space-x-2">
          {newsData.map((_, index) => (
            <button
              key={index}
              onClick={() => {
                setDirection(index > currentIndex ? 1 : -1);
                setCurrentIndex(index);
              }}
              className={`w-3 h-3 rounded-full transition-all ${
                currentIndex === index ? 'bg-blue-600 w-6' : 'bg-gray-300'
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default SliderHome;