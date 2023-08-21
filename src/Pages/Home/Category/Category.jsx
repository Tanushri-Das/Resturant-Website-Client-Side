import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "../Category/Category.css";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import slide1 from "../../../assets/home/slide1.jpg";
import slide2 from "../../../assets/home/slide2.jpg";
import slide3 from "../../../assets/home/slide3.jpg";
import slide4 from "../../../assets/home/slide4.jpg";
import slide5 from "../../../assets/home/slide5.jpg";
import SectionTitle from "../../../Components/SectionTitle/SectionTitle";
import time from "../../../assets/home/---From 11_00am to 10_00pm---.png";

const Category = () => {
  return (
    <section className="my-20">
      <SectionTitle subHeading={time} heading={"order online"} />
      <Swiper
        slidesPerView={4}
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper mt-10"
      >
        <SwiperSlide>
          <div className="flex justify-center flex-col items-center">
          <img src={slide1} alt="" />
          <h1 className="text-3xl uppercase text-center -mt-36 mb-8 text-white">
            Salads
          </h1>
          </div>
          
        </SwiperSlide>
        <SwiperSlide>
          <div className="flex justify-center flex-col items-center">
          <img src={slide2} alt="" />
          <h1 className="text-3xl uppercase text-center -mt-36 mb-8 text-white">
            Pizzas
          </h1>
          </div>
          
        </SwiperSlide>
        <SwiperSlide>
          <div className="flex justify-center flex-col items-center">
          <img src={slide3} alt="" />
          <h1 className="text-3xl uppercase text-center -mt-36 mb-8 text-white">
            Soups
          </h1>
          </div>
          
        </SwiperSlide>
        <SwiperSlide>
          <div className="flex justify-center flex-col items-center">
          <img src={slide4} alt="" />
          <h1 className="text-3xl uppercase text-center -mt-36 mb-8 text-white">
            Desserts
          </h1>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="flex justify-center flex-col items-center">
          <img src={slide5} alt="" />
          <h1 className="text-3xl uppercase text-center -mt-36 mb-8 text-white">
            Salads
          </h1>
          </div>
        </SwiperSlide>
      </Swiper>
    </section>
  );
};

export default Category;
