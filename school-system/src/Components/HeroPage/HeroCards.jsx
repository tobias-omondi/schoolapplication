'use client';
import React from 'react';
import './Hero.css';
import AboutPart from './AboutHeroPage/AboutPart';

// import aboutpart image
 import aboutpartimage from '/src/assets/unnamed.jpg'

import { easeIn, motion} from "framer-motion"
import { FaBookReader, FaCheck } from 'react-icons/fa';
import { FaBasketball } from 'react-icons/fa6';
import { transition } from 'three/examples/jsm/tsl/display/TransitionNode.js';

const heroCards = [
  { id: 1, number: "I", title: "Active Learning", description: 'We promote hands-on education and real-world experience.', icon : <FaBookReader /> },
  { id: 2, number: "II", title: "Happy Environment", description: 'Our students thrive in a safe and joyful school culture.', icon: <FaCheck /> },
  { id: 3, number: "III", title: "Enrichment Programs", description: 'We offer music, sports, coding, and more for full development.' , icon: <FaBasketball /> }
];

const HeroCards = () => {
  return (
    <>
    <div className="herocards-container">
      <motion.div
      initial = {{opacity: 0.7}}
      whileInView={{ opacity: 1, y: 0, }}
      transition={{duration: 1, ease: 'easeInOut'}}
      className="hero-card-container">
        <ul>
          {heroCards.map(card => (
            <li key={card.id} className="hero-card">
              <span className="card-number">{card.number}  <span className='card-title'>{card.title}</span></span>
              <motion.p 
              initial = {{opacity: 0, scale: 0.5}}
              whileInView = {{opacity: 1, scale: 1.2 }}
              duration = {{easeIn, transition: 2}} 
              className="card-description">{card.description} </motion.p>
              <motion.h4
                initial = {{opacity: 0, scale: 0.5}}
                whileInView = {{opacity: 1, scale: 1.0 }}
                duration = {{easeIn, transition: 2}} >
                  <span className='text-3xl text-blue-500'>{card.icon}</span></motion.h4>
            </li>
          ))}
        </ul>
      </motion.div>

      <div className='herolast-fonts'>
      <div className='text-center text-gray-700'>
        <h2>Learn anywhere anytime</h2>
      </div>
      </div>
    </div>

    <AboutPart  title='Welcome to BrightOak Academy' 
                description='At BrightOak Academy, we believe every child has the potential to achieve great things.
                             We help learners enjoy education by making school a fun, safe, and welcoming place. We encourage creativity, curiosity, and self-confidence, while helping students grow in their studies and in how they relate with others.

                             Our goal is to support students in becoming responsible, kind, and confident individuals — ready for success in school, at home, and in life. At BrightOak, we don’t just teach for exams; we prepare children for the future.'
                image={aboutpartimage}/>
    </>
  );
};

export default HeroCards;
