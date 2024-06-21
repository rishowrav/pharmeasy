import QueryCard from "./QueryCard";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import axios from "axios";
import { useQuery } from "@tanstack/react-query";

const QuerySection = () => {
  // get all medicines
  const { data: querys = [] } = useQuery({
    queryKey: ["query"],
    queryFn: async () => {
      const { data } = await axios.get("query.json");
      return data;
    },
  });

  console.log(querys);

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
          {querys.map((query) => (
            <SwiperSlide>
              <QueryCard query={query} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default QuerySection;
