import React, { useState, useEffect, useRef, lazy, Suspense } from 'react';
import { motion, AnimatePresence } from "framer-motion";
import { IoIosArrowRoundBack, IoIosArrowRoundForward } from "react-icons/io";
import { FiArrowRight } from "react-icons/fi";

// Image imports
import heroimage from '/src/assets/schoolhero.jpg';
import heroimageone from '/src/assets/heropage students.png';
import heroimagetwo from '/src/assets/schoolheropage.jpg';
import heroimagethree from '/src/assets/schoolhero page.jpg';

// Lazy-loaded components
const HeroCards = lazy(() => import('./HeroCards'));
const Footer = lazy(() => import('../Footer/Footer'));
const HomeCards = lazy(() => import('../HomePage/HomeCards'));
const NewsComponents = lazy(() => import('./NewsComponents'));
const GallerySection = lazy(() => import('../HomePage/GallerySection'));

const heroImages = [
  {
    img: heroimage,
    title: 'Explore BrightOak Academy',
    desc: 'We just don’t give students lectures but real-life experience.',
    button: 'Start Learning'
  },
  {
    img: heroimageone,
    title: 'Empowering Every Child',
    desc: 'BrightOak nurtures confidence, creativity, and character in every learner.',
    button: 'Join Us Today'
  },
  {
    img: heroimagetwo,
    title: 'Learn Beyond the Classroom',
    desc: 'We connect students with real-world knowledge and mentorship.',
    button: 'Discover More'
  },
  {
    img: heroimagethree,
    title: 'Shape Your Future',
    desc: 'With strong values and academic excellence, we prepare leaders of tomorrow.',
    button: 'Get Started'
  }
];

const Hero = () => {
  const [current, setCurrent] = useState(0);
  const [cursorVariant, setCursorVariant] = useState("default");
  const [loadedImages, setLoadedImages] = useState([]);
  const sliderRef = useRef(null);
  const cursorRef = useRef(null);

  // Preload images on mount
  useEffect(() => {
    const loadImages = async () => {
      const loaded = await Promise.all(
        heroImages.map(async (item) => {
          const img = new Image();
          img.src = item.img;
          await img.decode().catch(() => {}); // fail silently if decode not supported
          return img;
        })
      );
      setLoadedImages(loaded);
    };
    loadImages();
  }, []);

  // Custom cursor follow effect
  useEffect(() => {
    if (!cursorRef.current) return;

    let requestId;
    const mouseMove = (e) => {
      cancelAnimationFrame(requestId);
      requestId = requestAnimationFrame(() => {
        cursorRef.current.style.transform = `translate3d(${e.clientX - 16}px, ${e.clientY - 16}px, 0)`;
      });
    };

    window.addEventListener('mousemove', mouseMove);
    return () => {
      cancelAnimationFrame(requestId);
      window.removeEventListener('mousemove', mouseMove);
    };
  }, []);

  // Auto-slide effect
  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 8000);
    return () => clearInterval(interval);
  }, [current]);

  const nextSlide = () => setCurrent(prev => (prev + 1) % heroImages.length);
  const prevSlide = () => setCurrent(prev => (prev - 1 + heroImages.length) % heroImages.length);
  const goToSlide = (index) => setCurrent(index);

  // Cursor handlers
  const textEnter = () => setCursorVariant("text");
  const textLeave = () => setCursorVariant("default");
  const buttonEnter = () => setCursorVariant("button");
  const buttonLeave = () => setCursorVariant("default");

  return (
    <>
      {/* Custom Cursor */}
      <div 
        ref={cursorRef}
        className={`fixed top-0 left-0 h-8 w-8 rounded-full pointer-events-none z-50 transition-transform duration-100 ease-out ${
          cursorVariant === "text" ? "bg-white h-20 w-20 mix-blend-difference" :
          cursorVariant === "button" ? "bg-yellow-500 h-12 w-12" :
          "bg-white bg-opacity-70 mix-blend-difference"
        }`}
      />

      {/* Hero Slider */}
      <div className="relative h-screen w-full overflow-hidden" ref={sliderRef}>
        <AnimatePresence initial={false}>
          {heroImages.map((item, index) => (
            index === current && (
              <motion.div
                key={index}
                className="absolute w-full h-full"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.8 }}
              >
                <div className="relative w-full h-full">
                  <img 
                    src={loadedImages[index] ? item.img : item.img} 
                    alt="school hero slide" 
                    className={`w-full h-full object-cover brightness-75 ${loadedImages[index] ? '' : 'blur-sm'}`}
                    loading="eager"
                  />
                  <div className="absolute inset-0  bg-opacity-90 flex items-center">
                    <div className="container mx-auto px-6 z-10">
                      <motion.div
                        initial={{ y: 20, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ delay: 0.2, duration: 0.5 }}
                        className="max-w-2xl"
                      >
                        <h1 
                          className="text-4xl font-['Nata sans']  sm:text-5xl md:text-6xl font-bold text-white mb-4 leading-tight"
                          onMouseEnter={textEnter}
                          onMouseLeave={textLeave}
                        >
                          {item.title}
                        </h1>
                        <p 
                          className="text-lg md:text-xl font-['Fredoka'] text-white mb-8"
                          onMouseEnter={textEnter}
                          onMouseLeave={textLeave}
                        >
                          {item.desc}
                        </p>
                        <motion.button
                          className="bg-yellow-500 hover:bg-yellow-600 text-white font-semibold py-3 px-8 rounded-full flex items-center cursor-pointer"
                          onMouseEnter={buttonEnter}
                          onMouseLeave={buttonLeave}
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                        >
                          {item.button} <FiArrowRight className="ml-2" />
                        </motion.button>
                      </motion.div>
                    </div>
                  </div>
                </div>
              </motion.div>
            )
          ))}
        </AnimatePresence>

        {/* Navigation Arrows */}
        <button 
          onClick={prevSlide}
          className="absolute left-6 top-1/2 transform -translate-y-1/2 z-30 bg-opacity-30 hover:bg-opacity-50 rounded-full p-2 transition-all duration-300"
          aria-label="Previous slide"
        >
          <IoIosArrowRoundBack className="text-white text-4xl" />
        </button>
        <button 
          onClick={nextSlide}
          className="absolute right-6 top-1/2 transform -translate-y-1/2 z-30  bg-opacity-30 hover:bg-opacity-50 rounded-full p-2 transition-all duration-300"
          aria-label="Next slide"
        >
          <IoIosArrowRoundForward className="text-white text-4xl font-bold" />
        </button>

        {/* Dots Navigation */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-2 z-30">
          {heroImages.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`h-2 w-2 sm:h-3 sm:w-3 rounded-full transition-all duration-300 ${
                current === index ? 'bg-white w-6' : 'bg-white bg-opacity-50'
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>

      {/* Lazy loaded components */}
      <Suspense fallback={<div className="min-h-screen bg-gray-100" />}>
        <div className='mt-10'><HeroCards /></div>
        <div className='mt-10'><HomeCards /></div>
        <div className='mt-10'><GallerySection title="Latest News" /></div>
        <div className='mt-10'><NewsComponents title="Latest News" /></div>
        <div className='mt-10'><Footer /></div>
      </Suspense>
    </>
  );
};

export default Hero;
