import React from 'react'

// importing images
import newsimageone from '/src/assets/success.jpeg';
import newsimagetwo from '/src/assets/Tree-planting-exercise-.webp';
import newsimagethree from '/src/assets/schoolbackground.jpg';

import './News.css'
import { FaLongArrowAltRight } from 'react-icons/fa';

const newsData = [
{id: 1, newsimage: newsimageone, title: "BrightOak Academy Success", description: "Students at BrightOak Academy achieved great results in academics and co-curricular activities."},
{id: 2, newsimage: newsimagetwo, title: "Tree Planting Day", description: "BrightOak students joined together to plant trees and promote a greener environment."},
{id: 3, newsimage: newsimagethree, title: "Latest School Updates", description: "Stay updated with BrightOak Academy's recent news, events, and important announcements."},
]

const NewsComponents = ({title}) => {
  return (
    <div className='news-container'>

      <div className='news-title'>
        <h1>{title}</h1>
      </div>

      <div className='newsdata-container'>
        {newsData.map((news) =>
        <div>
          <img src={news.newsimage} />
          <h1>{news.title}</h1>
          <p>{news.description}</p>
        </div>
        )}
      </div>

      <div className='news-btn'>
        <button type='submit'>VIEW ALL <FaLongArrowAltRight /></button>
      </div>
    </div>
  )
}

export default NewsComponents
