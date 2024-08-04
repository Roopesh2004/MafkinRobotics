import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import "./Testimonial.css";
import { Autoplay,Pagination } from 'swiper/modules';


const Testimonials = () => {
  return (
    <>  <div className='Section'>
        <div className='headline'><h5 style={{marginBottom:0}}>Testimonials</h5>
        <div className="ot-line">
          <div></div>
          <div></div>
          <div></div>
        </div>
        </div>
        
      <Swiper
         breakpoints={{
            320: { slidesPerView: 1, spaceBetween: 10 },
            480: { slidesPerView: 1, spaceBetween: 10 },
            768: { slidesPerView: 2, spaceBetween: 15 },
            1024: { slidesPerView: 2, spaceBetween: 15 },
            1440: { slidesPerView: 3, spaceBetween: 30 }
          }}
        autoplay={{
            delay:2500,
            disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        modules={[Autoplay,Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
            <div className='swiper-slide'>
                <div className='swiper-client-msg'>
                    <p>
                    Slide 1 Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum, vitae possimus quas 
                    </p>
                </div>
                <div className='swiper-client-data grig grid-two-column'>
                    <figure>
                        <img src="/hero/h-b2.jpg" alt="img" />
                    </figure>
                    <div className='client-data-details'>
                        <p>Anonymous</p>
                        <p className='client-data-details-desg'>Entrepreneur</p>
                    </div>
                </div>
            </div>
        </SwiperSlide>
        <SwiperSlide>
            <div className='swiper-slide'>
                <div className='swiper-client-msg'>
                    <p>
                    Slide 1 Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum, vitae possimus quas
                    </p>
                </div>
                <div className='swiper-client-data grig grid-two-column'>
                    <figure>
                        <img src="/hero/h-b2.jpg" alt="img" />
                    </figure>
                    <div className='client-data-details'>
                        <p className='client-data-details-name'>Anonymous</p>
                        <p className='client-data-details-desg'>Entrepreneur</p>
                    </div>
                </div>
            </div>
        </SwiperSlide>
        <SwiperSlide>
            <div className='swiper-slide'>
                <div className='swiper-client-msg'>
                    <p>
                    Slide 1 Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum, vitae possimus quas
                    </p>
                </div>
                <div className='swiper-client-data grig grid-two-column'>
                    <figure>
                        <img src="/hero/h-b2.jpg" alt="img" />
                    </figure>
                    <div className='client-data-details'>
                        <p className='client-data-details-name'>Anonymous</p>
                        <p className='client-data-details-desg'>Entrepreneur</p>
                    </div>
                </div>
            </div>
        </SwiperSlide><SwiperSlide>
            <div className='swiper-slide'>
                <div className='swiper-client-msg'>
                    <p>
                    Slide 1 Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum, vitae possimus quas 
                    </p>
                </div>
                <div className='swiper-client-data grig grid-two-column'>
                    <figure>
                        <img src="/hero/h-b2.jpg" alt="img" />
                    </figure>
                    <div className='client-data-details'>
                        <p className='client-data-details-name'>Anonymous</p>
                        <p className='client-data-details-desg'>Entrepreneur</p>
                    </div>
                </div>
            </div>
        </SwiperSlide><SwiperSlide>
            <div className='swiper-slide'>
                <div className='swiper-client-msg'>
                    <p>
                    Slide 1 Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum, vitae possimus quas 
                    </p>
                </div>
                <div className='swiper-client-data grig grid-two-column'>
                    <figure>
                        <img src="/hero/h-b2.jpg" alt="img" />
                    </figure>
                    <div className='client-data-details'>
                        <p className='client-data-details-name'>Anonymous</p>
                        <p className='client-data-details-desg'>Entrepreneur</p>
                    </div>
                </div>
            </div>
        </SwiperSlide><SwiperSlide>
            <div className='swiper-slide'>
                <div className='swiper-client-msg'>
                    <p>
                    Slide 1 Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum, vitae possimus quas 
                    </p>
                </div>
                <div className='swiper-client-data grig grid-two-column'>
                    <figure>
                        <img src="/hero/h-b2.jpg" alt="img" />
                    </figure>
                    <div className='client-data-details'>
                        <p className='client-data-details-name'>Anonymous</p>
                        <p className='client-data-details-desg'>Entrepreneur</p>
                    </div>
                </div>
            </div>
        </SwiperSlide><SwiperSlide>
            <div className='swiper-slide'>
                <div className='swiper-client-msg'>
                    <p>
                    Slide 1 Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum, vitae possimus quas 
                    </p>
                </div>
                <div className='swiper-client-data grig grid-two-column'>
                    <figure>
                        <img src="/hero/h-b2.jpg" alt="img" />
                    </figure>
                    <div className='client-data-details'>
                        <p className='client-data-details-name'>Anonymous</p>
                        <p className='client-data-details-desg'>Entrepreneur</p>
                    </div>
                </div>
            </div>
        </SwiperSlide><SwiperSlide>
            <div className='swiper-slide'>
                <div className='swiper-client-msg'>
                    <p>
                    Slide 1 Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum, vitae possimus quas 
                    </p>
                </div>
                <div className='swiper-client-data grig grid-two-column'>
                    <figure>
                        <img src="/hero/h-b2.jpg" alt="img" />
                    </figure>
                    <div className='client-data-details'>
                        <p className='client-data-details-name'>Anonymous</p>
                        <p className='client-data-details-desg'>Entrepreneur</p>
                    </div>
                </div>
            </div>
        </SwiperSlide><SwiperSlide>
            <div className='swiper-slide'>
                <div className='swiper-client-msg'>
                    <p>
                    Slide 1 Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum, vitae possimus quas 
                    </p>
                </div>
                <div className='swiper-client-data grig grid-two-column'>
                    <figure>
                        <img src="/hero/h-b2.jpg" alt="img" />
                    </figure>
                    <div className='client-data-details'>
                        <p className='client-data-details-name'>Anonymous</p>
                        <p className='client-data-details-desg'>Entrepreneur</p>
                    </div>
                </div>
            </div>
        </SwiperSlide>
        </Swiper>
        </div>
    </>
  )
}

export default Testimonials
