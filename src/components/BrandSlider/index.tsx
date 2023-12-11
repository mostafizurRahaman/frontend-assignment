import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";

import { Pagination, Autoplay } from "swiper/modules";
import { logos } from "../../constants/logos";
import SliderItem from "./SliderItem";

const BrandSlider = () => {
   return (
      <div>
         <Swiper
            slidesPerView={4}
            spaceBetween={30}
            pagination={{
               clickable: true,
            }}
            breakpoints={{
               1: {
                  slidesPerView: 2,
                  spaceBetween: 20,
               },
               768: {
                  slidesPerView: 3,
                  spaceBetween: 40,
               },
               1024: {
                  slidesPerView: 5,
                  spaceBetween: 50,
               },
            }}
            autoplay
            modules={[Pagination, Autoplay]}
            className="mySwiper"
         >
            {logos.map((logo: string, idx: number) => (
               <SwiperSlide key={idx} className="py-10">
                  <SliderItem logo={logo}></SliderItem>
               </SwiperSlide>
            ))}
         </Swiper>
      </div>
   );
};

export default BrandSlider;
