"use client"
import React from 'react';
import { AboutUsCard, MissionCard, TrainerCard, StudentCard } from './AboutCard';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

const AboutPart = () => {
  var settings = {
    dots: false,
    infinite: true, 
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: true, 
    autoplaySpeed: 2000, 
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      }
    ]
  };

  return (
    <div id='about' className='w-full bg-sky-50 py-32'>
      <div className='md:max-w-[1480px] m-auto max-w-[600px] px-4 md:px-0'>
        <div className='py-4'>
          <h1 className='py-3 text-3xl font-bold cursor-pointer'>Biz <span className='text-[#4f68ba]'>Kimiz?</span></h1>
        </div>
        <Slider {...settings}>
          <AboutUsCard />
          <MissionCard />
          <TrainerCard />
          <StudentCard />
        </Slider>
      </div>
    </div>
  );
}

export default AboutPart;
