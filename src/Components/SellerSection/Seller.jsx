import React from "react";
import right from "../Assets/right.png";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Autoplay } from 'swiper/modules';
import { assets } from "../Assets/images";

function Seller() {
  return (
    <>
      <div className="headings md:flex md:text-left justify-between items-center pb-6 min-[320px]:block min-[320px]:text-center">
        <h3 className="font-robo text-3xl text-blue-950 font-semibold">
          <span className="text-lg text-black">Proud to be part of</span> Pet
          Sellers
        </h3>
        <button
          type="button"
          href="#"
          className="rounded-full text-blue-900 border-2 border-blue-900 py-2 px-6 font-normal flex flex-row items-center gap-2 md:m-0 min-[320px]:m-auto min-[320px]:mt-2"
        >
          View all our sellers <img src={right} alt="play" />
        </button>
      </div>

      <Swiper
        slidesPerView={7}
        spaceBetween={10}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        breakpoints={{
          330: {
            slidesPerView: 2,
            spaceBetween: 10,
          },
          640: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 4,
            spaceBetween: 40,
          },
          1024: {
            slidesPerView: 7,
            spaceBetween: 50,
          },
        }}
        modules={[Autoplay]}
      >
        <SwiperSlide>
          <img src={assets.seller1} alt="seller" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={assets.seller2} alt="seller" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={assets.seller3} alt="seller" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={assets.seller4} alt="seller" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={assets.seller5} alt="seller" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={assets.seller6} alt="seller" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={assets.seller7} alt="seller" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={assets.seller1} alt="seller" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={assets.seller2} alt="seller" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={assets.seller3} alt="seller" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={assets.seller4} alt="seller" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={assets.seller5} alt="seller" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={assets.seller6} alt="seller" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={assets.seller7} alt="seller" />
        </SwiperSlide>
      </Swiper>
    </>
  );
}

export default Seller;
