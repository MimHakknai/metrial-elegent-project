import React from 'react';

import img1 from '../../Assets/bg1.jpg'
import ModeCommentIcon from '@mui/icons-material/ModeComment';
import  { useRef, useState } from "react";

import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import './testimonial.css'


// import required modules
import { Autoplay,Parallax, Pagination } from "swiper";
import { Icon, Typography } from '@mui/material';
import { Box } from '@mui/system';

const reviews = [
    {
        id:1,
        name:'hakkani',
        pro:'web designer',
        quote:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero, impedit.'
    },

    {
        id:2,
        name:'Munna',
        pro:'React Dedeloper',
        quote:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero, impedit.'
    },

    {
        id:3,
        name:'Najmul',
        pro:'Node Developer',
        quote:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero, impedit.'
    }

]


const Testimonial = () => {
    return (
        <> 
        <Swiper
        style={{
          "--swiper-navigation-color": "#fff",
          "--swiper-pagination-color": "#fff",
        }}
        speed={600}
        parallax={true}

        pagination={{
          clickable: true,
        }}
        autoplay={{
            delay: 5000,
            disableOnInteraction: false,
          }}
       

        modules={[Parallax, Pagination,Autoplay]}
        className="mySwiper"
      >
        <div
          slot="container-start"
          className="parallax-bg"
          style={{
        
            background:`linear-gradient(to bottom, rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.8)),url(${img1})`
          }}
          data-swiper-parallax="-23%"
        ></div>

        {
            reviews.map(review=>
                    
              
                <SwiperSlide   key={review.id}>
                <Box>
                  <ModeCommentIcon  
                   sx={{color :'#ab2f52'}}
                  />
                   
                   <Typography variant="body2" gutterBottom>
                      {review.quote}
                    </Typography>
        
                    <Typography variant="h6" gutterBottom component="div">
                    {review.name}
                    </Typography>
        
                    <Typography variant="body2" gutterBottom component="div" sx={{
                        color:'rgb(253, 208, 30)'
                    }}>
                          {review.pro}
                    </Typography>
                    </Box>
                
                </SwiperSlide>
                )
        }


    



        {/* <SwiperSlide>
          <div className="title" data-swiper-parallax="-300">
            Slide 2
          </div>
          <div className="subtitle" data-swiper-parallax="-200">
            Subtitle
          </div>
         
        </SwiperSlide>
        <SwiperSlide>
          <div className="title" data-swiper-parallax="-300">
            Slide 3
          </div>
          <div className="subtitle" data-swiper-parallax="-200">
            Subtitle
          </div>
         
        </SwiperSlide> */}



      </Swiper>
      </>
    );
};

export default Testimonial;