import React from 'react'


// import swiper js components
import Swiper from 'swiper'
import { SwiperSlide, Swiper } from 'swiper/react'
import { Pagination, Autoplay, EffectFade } from 'swiper/modules';

// creating our data 

const newsData = [
  {id: 1, image: "", title: "", description: ""},
  {id: 2, image: "", title: "", description: "" },
  {id: 3, image: "", title: "", description: ""},
  {id: 4, image: "", title: "", description: ""},
]

const SliderHome = () => {
  return (
    <div className='mt-20'>
      <div>
        <Swiper 
          loop={true}
          modules={[Pagination, Autoplay, EffectFade]}
          pagination={{ clickable: true }}
          autoplay={{ delay: 6000 }}
        >
          <SwiperSlide></SwiperSlide>
        </Swiper>
      </div>
    </div>
  )
}

export default SliderHome
