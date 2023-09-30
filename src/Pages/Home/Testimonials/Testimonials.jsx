import React, { useRef, useState, useEffect } from "react";
import SectionTitle from "../../../Components/SectionTitle/SectionTitle";
import control from "../../../assets/home/---What Our Clients Say---.png";
import { Swiper, SwiperSlide } from "swiper/react";
import "./Testimonials.css";
import { FaQuoteLeft, FaStar, FaStarHalf, FaArrowLeft, FaArrowRight } from "react-icons/fa"; // Import Font Awesome icons
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import { Rating } from "@smastrom/react-rating";
import "@smastrom/react-rating/style.css";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import { useQuery } from "@tanstack/react-query";

const Testimonials = () => {
  const [axiosSecure] = useAxiosSecure();
  const { data: reviews = [], refetch } = useQuery(["reviews"], async () => {
    const res = await axiosSecure.get("/reviews");
    console.log(res.data);
    return res.data;
  });

  const [swiperSlidesPerView, setSwiperSlidesPerView] = useState(1);

  // Create a ref for the Swiper instance
  const swiperRef = useRef(null);

  // Function to handle custom previous button click
  const handlePrevClick = () => {
    if (swiperRef.current && swiperRef.current.swiper) {
      swiperRef.current.swiper.slidePrev();
    }
  };

  // Function to handle custom next button click
  const handleNextClick = () => {
    if (swiperRef.current && swiperRef.current.swiper) {
      swiperRef.current.swiper.slideNext();
    }
  };

  useEffect(() => {
    // Update the number of slides per view based on screen size
    const handleResize = () => {
      if (window.innerWidth >= 992) {
        // Large screens
        setSwiperSlidesPerView(2);
      }
      else {
        // Small screens
        setSwiperSlidesPerView(1);
      }
    };

    // Initial call
    handleResize();

    // Add event listener to handle screen size changes
    window.addEventListener("resize", handleResize);

    // Cleanup the event listener on component unmount
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []); // Empty dependency array to run the effect only once

  return (
    <section className="mt-20 md:m-20">
      <SectionTitle subHeading={control} heading={"testimonials"} />
      <div className="flex justify-center items-center"> {/* Center the buttons vertically */}
        <div className="custom-prev -mt-8" onClick={handlePrevClick}>
          <FaArrowLeft className="text-2xl" />
        </div>
        <Swiper
          ref={swiperRef} // Set the ref to the Swiper instance
          slidesPerView={swiperSlidesPerView}
          spaceBetween={30}
          navigation={false} // Disable default navigation
          modules={[Navigation]}
          className="mySwiper"
        >
          {reviews?.map((review) => (
            <SwiperSlide key={review._id} className="swiper-slide-gap mr-5">
              <div className="mt-16 flex flex-row justify-center">
                <div className="py-4 px-8 h-auto lg:h-80 xl:h-72 shadow-xl flex flex-col justify-between rounded-lg">
                  {/* Display rating as stars */}
                  <div className="mb-6 flex justify-between items-center">
                    <div className="flex justify-center items-center">
                      {Array.from({ length: Math.floor(review.rating) }, (_, index) => (
                        <FaStar key={index} className="star-color text-lg"/>
                      ))}
                      {review.rating % 1 === 0.5 && <FaStarHalf className="star-color text-lg"/>}
                    </div>
                    <div>
                      <FaQuoteLeft className="text-2xl mx-auto star-color" />
                    </div>
                  </div>
                
                  {/* Center the icon */}
                  <p className="mb-4 font-semibold text-center text-xl">{review.recipelikemost}</p>
                  <p className="text-lg text-start">{review.sugggestion}</p>
                  <p className="text-[16px] mb-2 text-start">{review.reviewdetail}</p>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
        <div className="custom-next -mt-8" onClick={handleNextClick}>
          <FaArrowRight className="text-2xl" />
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
