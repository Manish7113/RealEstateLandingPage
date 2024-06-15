'use client'
import ProjectCard from "../subComponenet/projectCard"
import HomeOne from '../../assets/images/HomeOne.png'
import Ghar1 from '../../assets/images/ghar1.jpg'
import Ghar2 from '../../assets/images/ghar2.jpg'
import Ghar3 from '../../assets/images/ghar3.jpg'
import Ghar4 from '../../assets/images/ghar4.jpg'
import Ghar5 from '../../assets/images/ghar5.jpg'

import Image from "next/image"
import React from 'react';

import SwiperCore, { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css';


export default function Projects() {
    // SwiperCore.use([Navigation, Pagination, Scrollbar, A11y]);
    const breakpoints = {
        // when window width is >= 640px
        300: {
          slidesPerView: 1.3,
          spaceBetween: 5,
        },
        640: {
          slidesPerView: 1.2,
          spaceBetween: 10,
        },
        // when window width is >= 768px
        768: {
          slidesPerView: 2.2,
          spaceBetween: 10,
        },
        // when window width is >= 1024px
        1024: {
          slidesPerView: 3.2,
          spaceBetween: 10,
        },
      };


      const projectsData  = [
        {
        image : '/images/ghar1.jpg',
        heading : 'The House',
        rating : 4.5,
        description : 'Charming 2-bedroom bungalow seeks new owner! Bright living space with hardwood floors, updated kitchen with stainless steel appliances. Relax on the',
        price  : 455,
        available : 'day'
      },
        {
        image : '/images/ghar2.jpg',
        heading : 'Villa of Rajputs',
        rating : 4.9,
        description : 'Relax on the private patio overlooking a peaceful garden. Perfect for first-time buyers or those seeking a cozy retreat. Move-in ready!',
        price  : 7501,
        available : 'Month'
      },
        {
        image : '/images/ghar3.jpg',
        heading : 'The Haveli',
        rating : 4.6,
        description : 'subscribe to our newsletter for regular updates so that you can know more information about us subscribe to our newsletter for regular updates so ',
        price  : 1000,
        available : 'Month'
      },
        {
        image : '/images/ghar4.jpg',
        heading : 'Ancient Designed House',
        rating : 4.1,
        description : 'Charming 2-bedroom bungalow seeks new owner! Bright living space with hardwood floors, updated kitchen with stainless steel appliances. Relax on the',
        price  : 1200,
        available : 'Day'
      },
        {
        image : '/images/ghar5.jpg',
        heading : 'Resourte',
        rating : 5,
        description : 'Charming 2-bedroom bungalow seeks new owner! Bright living space with hardwood floors, updated kitchen with stainless steel appliances. Relax on the',
        price  : 100,
        available : 'Day'
      },
    ]
    return (
        <div className="d-flex flex-column projects">
            <div className="container d-flex flex-column ">
                <p className="secondarySubHeading p-0 m-0">Three steps. Three minutes</p>
                <p className="component-heading">Everything should be this easy.</p>

            </div>
            
            <div className="w-100">
              

            <Swiper
                breakpoints={breakpoints}
                spaceBetween={10}
                // navigation
                pagination={{ clickable: true }}
                // scrollbar={{ draggable: true }}
            >
              {projectsData?.map((item, index)=>(
                <SwiperSlide key={index}><ProjectCard data={item}></ProjectCard></SwiperSlide>
              ))}
                
              
                
                {/* Add more slides as needed */}
            </Swiper>
            </div>

        </div>
    )
}