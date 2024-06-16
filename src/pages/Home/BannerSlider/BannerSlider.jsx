// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// import required modules
import { Autoplay, Pagination, Navigation, EffectFade } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";

import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";

const BannerSlider = () => {
  const axiosSecure = useAxiosSecure();

  const { data: banners = [] } = useQuery({
    queryKey: ["banner"],
    queryFn: async () => {
      const { data } = await axiosSecure.get("/advertise_home_page");
      return data;
    },
  });

  return (
    <div>
      <Swiper
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        speed={1000}
        loop={true}
        pagination={{
          clickable: true,
        }}
        navigation={false}
        modules={[Autoplay, Pagination, Navigation, EffectFade]}
        style={{
          "--swiper-navigation-color": "#008000",
          "--swiper-pagination-color": "#008000",
        }}
        className="mySwiper"
      >
        {banners.map((banner) => (
          <SwiperSlide key={banner._id}>
            <div
              className={`flex  justify-center items-center bg-[linear-gradient(-45deg,#00800059,#008000E6)] min-h-[700px]  `}
            >
              <div className=" flex  flex-col md:flex-row-reverse justify-center items-center">
                <img
                  className=" xl:scale-125 lg:scale-110   object-fill "
                  src={banner.image_url}
                  alt=""
                />

                <div className="lg:w-1/2 md:w-2/3   text-center md:text-left pb-10 md:pb-0 text-white space-y-6">
                  <h2 className="xl:text-6xl  text-5xl font-bold">
                    {banner.medicine_name}
                  </h2>
                  <p className="text-lg ">{banner.descriptionText}</p>
                  <button className="btn btn-lg bg-white text-green-600 rounded-full px-14">
                    Buy Now
                  </button>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default BannerSlider;
