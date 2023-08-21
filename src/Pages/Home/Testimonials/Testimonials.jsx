import React, { useEffect, useState } from 'react'
import SectionTitle from '../../../Components/SectionTitle/SectionTitle'
import control from '../../../assets/home/---What Our Clients Say---.png';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import './Testimonials.css'
import { FaQuoteLeft } from "react-icons/fa";

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';

// import required modules
import { Navigation } from 'swiper/modules';
import { Rating } from '@smastrom/react-rating';
import '@smastrom/react-rating/style.css'

const Testimonials = () => {
    
    const [reviews,setReviews]=useState([]);
    useEffect(()=>{
        fetch('http://localhost:5000/reviews')
        .then(res => res.json())
        .then(data => setReviews(data))
    },[])

  return (
    <section className=''>
        <SectionTitle subHeading={control} heading={"testimonials"} />
        <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
        
        {
            reviews?.map(review => <SwiperSlide key={review._id}>
                <div className='mb-24 mt-12 mx-32 flex flex-col items-center'>
                <Rating style={{ maxWidth: 180 }} value={review.rating} className='mb-6'/>
                <FaQuoteLeft className='mb-8 text-5xl'/>
                    <p className='mb-6'>{review.details}</p>
                    <h3 className='text-2xl text-orange-500'>{review.name}</h3>
                </div>
            </SwiperSlide>)
        }
      </Swiper>
    </section>
  )
}

export default Testimonials