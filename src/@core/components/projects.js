'use client'
import ProjectCard from "../subComponenet/projectCard"
import HomeOne from '../../assets/images/HomeOne.png'
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
          spaceBetween: 10,
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
    return (
        <div className="d-flex flex-column projects">
            <div className="container d-flex flex-column ">
                <p className="secondarySubHeading p-0 m-0">Three steps. Three minutes</p>
                <p className="component-heading">Everything should be this easy.</p>

            </div>
            
            <div className="w-100">

            <Swiper
                breakpoints={breakpoints}
                spaceBetween={20}
                // navigation
                pagination={{ clickable: true }}
                // scrollbar={{ draggable: true }}
            >
                <SwiperSlide><ProjectCard valueImage={{HomeOne}}></ProjectCard></SwiperSlide>
                <SwiperSlide><ProjectCard valueImage={{HomeOne}}></ProjectCard></SwiperSlide>
                <SwiperSlide><ProjectCard valueImage={{HomeOne}}></ProjectCard></SwiperSlide>
                <SwiperSlide><ProjectCard valueImage={{HomeOne}}></ProjectCard></SwiperSlide>
                <SwiperSlide><ProjectCard valueImage={{HomeOne}}></ProjectCard></SwiperSlide>
                
                {/* Add more slides as needed */}
            </Swiper>
            </div>

        </div>
    )
}