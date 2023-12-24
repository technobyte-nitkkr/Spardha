import { Swiper, SwiperSlide } from "swiper/react";
import {Autoplay, Pagination, Navigation} from "swiper/modules";
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import "./Glimpses.css";

import img1 from "../../../public/assets/about_carousal/1.jpg";
import img2 from "../../../public/assets/about_carousal/2.jpg";
import img3 from "../../../public/assets/about_carousal/3.jpg";
import img4 from "../../../public/assets/about_carousal/4.jpg";
import img5 from "../../../public/assets/about_carousal/5.jpg";
import Image from "next/image";

const Glimpses = () => {
  return (
    <div>
      <Swiper
        breakpoints={{
          576: {
            width: 576,
            slidesPerView: 1,
          },
          768: {
            width: 768,
            slidesPerView: 2,
            spaceBetween: 100,
          },
        }}
        spaceBetween={100}
        slideClass="swiper-slide"
        centeredSlides={true}
        autoplay={{
          delay: 1000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={{
          nextEl: ".image-swiper-button-next",
          prevEl: ".image-swiper-button-prev",
          disabledClass: "swiper-button-disabled",
        }}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        <div className="carouselCardContainer">
          <SwiperSlide>
            <div className="wrapper">
              <Image
                className="d-block  aboutimg"
                alt=""
                src={img1}
                style={{ width: "100%" }}
              />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="wrapper">
              <Image className="d-block  aboutimg" alt="" src={img2} />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="wrapper">
              <Image className="d-block  aboutimg" alt="" src={img3} />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="wrapper">
              <Image className="d-block  aboutimg" alt="" src={img4} />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="wrapper">
              <Image className="d-block  aboutimg" alt="" src={img5} />
            </div>
          </SwiperSlide>
        </div>
      </Swiper>
    </div>
  );
};

export default Glimpses;