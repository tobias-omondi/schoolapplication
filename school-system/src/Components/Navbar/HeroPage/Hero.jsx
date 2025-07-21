import React, {useEffect} from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination, Autoplay, EffectFade } from 'swiper/modules';

import heroimage from '/src/assets/schoolhero.jpg';
import heroimageone from '/src/assets/heropage students.png';
import heroimagetwo from '/src/assets/schoolheropage.jpg';
import heroimagethree from '/src/assets/schoolhero page.jpg';

import { CiSearch } from "react-icons/ci";
import './Hero.css';
import HeroCards from './HeroCards';



const slideData = [
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

  
  return (
    <>

    <div className='flex flex-row justify-evenly'>

      {/* Image Swiper section */}
      <div className='hero-container'>
        <Swiper
          direction="vertical"
          className="h-[600px]" 
          loop={true}
          modules={[Pagination, Autoplay, EffectFade]}
          pagination={{ clickable: true }}
          autoplay={{ delay: 6000 }}
        >
          {slideData.map((slide, index) => (
            <SwiperSlide key={index}>
              <div className='relative'>
                <img src={slide.img} alt={`slide-${index}`} className='swiper-image' />

                <div className='hero-headings'>
                  <h1 data-aos="fade-up">{slide.title}</h1>
                  <p data-aos="fade-up"
                  >{slide.desc}</p>
                  <div className='hero-heading-button'>
                    <button type='button'>{slide.button}</button>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {/* Search + Hero Cards */}
      <div className='flex flex-col'>
        {/* Search input */}
        <div className='relative mt-14 p-10' style={{ marginTop: '1.3rem' }}>
          <input
            type='search'
            id='search'
            placeholder='Search'
            className='input-search'
          />
          <CiSearch className='absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-800 text-xl' />
        </div>

        {/* School card */}
        <div className='hero-cards'>
          <h1 className='text-center'>OUR SCHOOL</h1>
          <p className='text-center w-1/2'>
            BrightOak Academy is a forward-thinking school committed to academic excellence and holistic development.
            We foster a supportive environment that nurtures critical thinking, creativity, and character. Our goal is
            to empower students with the skills and values needed to succeed in a dynamic world.
          </p>
        </div>

        {/* Vision card */}
        <div className='hero-cards-part2'>
          <h1 className='text-center'> Our Vision</h1>
          <p className='text-center w-1/2'>
            We envision a nurturing learning environment where every child discovers their full potential and grows into
            a responsible, confident, and compassionate leader.
          </p>
        </div>
      </div>
    </div>

    <HeroCards />
    
    </>
  );
};

export default Hero;
