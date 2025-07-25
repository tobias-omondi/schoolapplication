import React from 'react'

// import images
import schoolgraphicimageone from '/src/assets/SCHOOL GRAPHIC.avif'
import  schoolgraphicimagetwo from '/src/assets/JUST DESIGN.avif'
import  schoolgraphicimagethree from '/src/assets/school art.avif'


// import swiper js components
import { SwiperSlide, Swiper } from 'swiper/react'
import { Pagination, Autoplay, EffectFade } from 'swiper/modules';
// import home.css

import './Home.css'

// creating our data 

const newsData = [
  {id: 1, image: schoolgraphicimageone, title: "LEARN ANYWHERE", description: "With access to digital tools and guided support, children can continue learning from home, while traveling, or from any safe space. Our platform ensures that learning never stops—whether inside or outside the classroom."},
  {id: 2, image: schoolgraphicimagetwo, title: "CREATIVE DESIGN", description: "Our visual resources and design tools help children express their creativity while learning. From illustrations to layout-based tasks, design becomes part of the learning journey." },
  {id: 3, image: schoolgraphicimagethree, title: "ARTISTIC GROWTH", description: "We encourage young learners to grow through art. Drawing, painting, and visual storytelling are integrated into the curriculum to nurture imagination and self-expression."},
  // {id: 4, image: "", title: "", description: ""},
]

const SliderHome = () => {
  return (
    <div className='mt-20'>
      <div className='newsdata-swiper-container'>
        <Swiper 
          loop={true}
          spaceBetween={0}

          modules={[Pagination, Autoplay, EffectFade]}
          pagination={{ clickable: true }}
          autoplay={{ delay: 6000 }}
          breakpoints={{
            0: {
              slidesPerView: 1,
            },
            768: {
              slidesPerView: 2,
            },
            1024: {
              slidesPerView: 3,
            },
          }}
        >
          {newsData.map((item) => (
          <SwiperSlide key={item.id}>
            <div className='newsdata-slider-container'>
              <img src={item.image} alt='schoolimages' className='newsdata-slider-container-img' />
              <h1 className='newsdata-slider-title'>{item.title}</h1>
              <p className='newsdata-slider-container-pargh'>{item.description}</p>
            </div>
          </SwiperSlide>
        ))}
        </Swiper>
      </div>
    </div>
  )
}

export default SliderHome
