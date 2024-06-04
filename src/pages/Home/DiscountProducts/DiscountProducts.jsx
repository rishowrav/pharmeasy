// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Autoplay, Pagination } from "swiper/modules";
import DiscountCard from "./DiscountCard";

const DiscountProducts = () => {
  return (
    <div className="">
      <h2 className="text-5xl font-bold mb-10">Discount Product</h2>

      <Swiper
        slidesPerView={1}
        spaceBetween={10}
        pagination={{
          clickable: true,
        }}
        style={{
          "--swiper-navigation-color": "#008000",
          "--swiper-pagination-color": "#008000",
        }}
        breakpoints={{
          640: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 3,
            spaceBetween: 30,
          },
          1024: {
            slidesPerView: 4,
            spaceBetween: 30,
          },
        }}
        autoplay={{
          delay: 1500,
          disableOnInteraction: false,
        }}
        speed={1000}
        loop={true}
        modules={[Pagination, Autoplay]}
        className="mySwiper"
      >
        <SwiperSlide>
          <DiscountCard />
        </SwiperSlide>
        <SwiperSlide>
          <DiscountCard />
        </SwiperSlide>
        <SwiperSlide>
          <DiscountCard />
        </SwiperSlide>
        <SwiperSlide>
          <DiscountCard />
        </SwiperSlide>
        <SwiperSlide>
          <DiscountCard />
        </SwiperSlide>
        <SwiperSlide>
          <DiscountCard />
        </SwiperSlide>
        <SwiperSlide>
          <DiscountCard />
        </SwiperSlide>
        <SwiperSlide>
          <DiscountCard />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default DiscountProducts;
