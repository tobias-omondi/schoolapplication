import React from 'react'

// import css
import './Home.css'
import SliderHome from './SliderHome';

const homeCards = [
  {id: 1, title: "PRE-PRIMARY", description: "For a pre-primary school like Bright Oak Academy, you'd want to highlight elements that parents are most interested in, such as nurturing environments, early childhood education, and developmental milestones. How are you thinking of framing it?"},

  {id: 2, title: "PRIMARY SCHOOL & JUNIOR SCHOOL", description: "The Junior School is designed to guide learners through early adolescence—a time of rapid growth and self-discovery. At Bright Oak Academy, we provide a safe and supportive space where learners develop academic strength, social awareness, and personal values."}
]

const colors = ['#0077cc', '#253846'];

const HomeCards = () => {
  return (
    <div>
      <div className='home-cards-components'>
        {homeCards.map((cards , index )=>
          <div key={cards.id} className='home-cards-heading'
          style={{ backgroundColor: colors[index % colors.length], padding: '20px', margin: '10px', color: '#fff' }}> 

          <div className='headings-home-cards'>
          <h1>{cards.title}</h1>
          <p>{cards.description}</p>

          </div>
          </div>
        )}
      </div>

      <> <SliderHome /></>
    </div>
  )
}

export default HomeCards;
