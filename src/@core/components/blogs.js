'use client'
import ProjectCard from "../subComponenet/projectCard"
import HomeOne from '../../assets/images/HomeOne.png'
import Image from "next/image"
import BlogCard from "../subComponenet/blogCard"
import React from 'react';
import SwiperCore, { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css';


export default function Blogs() {
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


    const BlogsData  = [
        {
        image : '/images/ghar11.jpg',
        heading : 'About the House',
        date:'Nov 21, 2023',
        mainHeading : 'How well did property experts forecasets singapores',
        timing : `4:30`,
        by : 'J.k Thomas',
        readMore : true
      },
        {
        image : '/images/ghar10.jpg',
        heading : 'Recently selled Mahal',
        date:'Apr 21, 2023',
        mainHeading : 'Should to know that how the mahal sold by denied',
        timing : `5:26`,
        by : 'RM Singh',
        readMore : true
      },
        {
        image : '/images/ghar9.jpg',
        heading : 'Have a beach Banglow ',
        date:'Aug 20, 2024',
        mainHeading : 'Having a banglow with beach is status symbol',
        timing : `5:26`,
        by : 'Ts Chodhary',
        readMore : true
      },
        {
        image : '/images/ghar8.jpg',
        heading : 'Many names banglow ...',
        date:'jun 12, 2024',
        mainHeading : 'Banglow , mention , kothi and Mahal ...',
        timing : `11:00`,
        by : 'Ts Sharma',
        readMore : true
      },
        {
        image : '/images/ghar6.jpg',
        heading : 'Many names banglow ...',
        date:'jun 12, 2024',
        mainHeading : 'Banglow , mention , kothi and Mahal ...',
        timing : `11:00`,
        by : 'Ts Sharma',
        readMore : true
      },

    ]
    return (
        <div className="d-flex flex-column projects">
            <div className="container d-flex flex-column ">
                <p className="secondarySubHeading p-0 m-0">Ore trending blogs</p>
                <p className="component-heading">Read our latest blogs.</p>

            </div>
            <div className="w-100">

                <Swiper
                    breakpoints={breakpoints}
                    spaceBetween={20}
                    // navigation
                    pagination={{ clickable: true }}
                // scrollbar={{ draggable: true }}
                >
                    {
                        BlogsData?.map((item, index) =>(
                            <SwiperSlide key={index}><BlogCard data={item}></BlogCard></SwiperSlide>

                        ))
                    }
                    
                   

                    {/* Add more slides as needed */}
                </Swiper>
            </div>
          

        </div>
    )
}