import React from 'react'
import './testimonials.css'
import AVTR1 from '../../assets/avatar1.jpg'
import AVTR2 from '../../assets/avatar2.jpg'
import AVTR3 from '../../assets/avatar3.jpg'
import AVTR4 from '../../assets/avatar4.jpg'


// import Swiper core and required modules
import { Pagination} from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

const data = [
  {
    avatar: AVTR1,
    name: "Tina Snow",
    review: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Non praesentium rationequibusdam error ipsa modi atque ducimus excepturi dolores. Quaerat, aspernaturtempore sit eveniet iusto fuga minus deleniti. Est, repellat.'
  },
  {
    avatar: AVTR2,
    name: "Sam Watson",
    review: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Non praesentium rationequibusdam error ipsa modi atque ducimus excepturi dolores. Quaerat, aspernaturtempore sit eveniet iusto fuga minus deleniti. Est, repellat.'
  },
  {
    avatar: AVTR3,
    name: "Peter Parker",
    review: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Non praesentium rationequibusdam error ipsa modi atque ducimus excepturi dolores. Quaerat, aspernaturtempore sit eveniet iusto fuga minus deleniti. Est, repellat.'
  },
  {
    avatar: AVTR4,
    name: "Emma McBrown",
    review: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Non praesentium rationequibusdam error ipsa modi atque ducimus excepturi dolores. Quaerat, aspernaturtempore sit eveniet iusto fuga minus deleniti. Est, repellat.'
  }
]

const Testimonials = () => {
  return (
    <section id='testimonials'>
      <h5>Review from clients</h5>
      <h2>Testimonials</h2>

      <Swiper className="container testimonialContainer" 
      // install Swiper modules
      modules={[ Pagination]}
      spaceBetween={40}
      slidesPerView={1}
      pagination={{ clickable: true }}
      >
        {
          data.map(({avatar, name, review}, index) => {
            return (
              <SwiperSlide key={index} className="testimonial">
                <div className="clientAvatar">
                  <img src={avatar} alt="Avatar One" />
                </div>
                <h5 className="clientName">{name}</h5>
                <small className="clientReview">{review}</small>
              </SwiperSlide>
            )
          })
        }
      </Swiper>
    </section>
  )
}

export default Testimonials