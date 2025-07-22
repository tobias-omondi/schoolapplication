import React from 'react';
import './Hero.css';
import AboutPart from './AboutHeroPage/AboutPart';

// import aboutpart image
 import aboutpartimage from '/src/assets/unnamed.jpg'

const heroCards = [
  { id: 1, number: "I", title: "Active Learning", description: 'We promote hands-on education and real-world experience.' },
  { id: 2, number: "II", title: "Happy Environment", description: 'Our students thrive in a safe and joyful school culture.' },
  { id: 3, number: "III", title: "Enrichment Programs", description: 'We offer music, sports, coding, and more for full development.' }
];

const HeroCards = () => {
  return (
    <>
    <div className="herocards-container">
      <div className="hero-card-container">
        <ul>
          {heroCards.map(card => (
            <li key={card.id} className="hero-card">
              <span className="card-number">{card.number}  <span className='card-title'>{card.title}</span></span>
              <p className="card-description">{card.description}</p>
            </li>
          ))}
        </ul>
      </div>

      <div className='text-center text-gray-700'>
        <h2>Learn anywhere anytime</h2>
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
