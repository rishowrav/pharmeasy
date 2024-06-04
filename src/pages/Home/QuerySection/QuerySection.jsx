import QueryCard from "./QueryCard";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper/modules";

const QuerySection = () => {
  return (
    <div className=" space-y-10">
      <h2 className="text-5xl  font-bold ">Query Section</h2>
      <div>
        <Swiper
          autoplay={{
            delay: 1500,
            disableOnInteraction: false,
          }}
          speed={1000}
          loop={true}
          slidesPerView={1}
          spaceBetween={5}
          pagination={{
            clickable: true,
          }}
          breakpoints={{
            640: {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 2,
              spaceBetween: 30,
            },
            1024: {
              slidesPerView: 3,
            },
          }}
          style={{
            "--swiper-navigation-color": "#008000",
            "--swiper-pagination-color": "#008000",
          }}
          modules={[Pagination, Autoplay, Navigation]}
          className="mySwiper"
        >
          <SwiperSlide>
            <QueryCard />
          </SwiperSlide>
          <SwiperSlide>
            <QueryCard />
          </SwiperSlide>
          <SwiperSlide>
            <QueryCard />
          </SwiperSlide>
          <SwiperSlide>
            <QueryCard />
          </SwiperSlide>
          <SwiperSlide>
            <QueryCard />
          </SwiperSlide>
          <SwiperSlide>
            <QueryCard />
          </SwiperSlide>
          <SwiperSlide>
            <QueryCard />
          </SwiperSlide>
          <SwiperSlide>
            <QueryCard />
          </SwiperSlide>
          <SwiperSlide>
            <QueryCard />
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};

export default QuerySection;
