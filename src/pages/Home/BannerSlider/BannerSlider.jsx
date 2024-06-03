import Slide1 from "../../../../public/images/slide1.png";
import Slide2 from "../../../../public/images/slide2.png";
import Slide3 from "../../../../public/images/slide3.png";
import Slide4 from "../../../../public/images/slide4.png";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// import required modules
import { Autoplay, Pagination, Navigation, EffectFade } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";

const BannerSlider = () => {
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
        <SwiperSlide>
          <div
            className={`flex  justify-center items-center bg-[linear-gradient(-45deg,#00800059,#008000E6)] min-h-[700px]  `}
          >
            <div className=" flex  flex-col md:flex-row-reverse justify-center items-center">
              <img
                className=" xl:scale-125 lg:scale-110   object-fill "
                src={Slide1}
                alt=""
              />

              <div className="lg:w-1/2 md:w-2/3   text-center md:text-left pb-10 md:pb-0 text-white space-y-6">
                <h2 className="xl:text-6xl  text-5xl font-bold">
                  Lorem ipsum dolor sit amet consectetur.
                </h2>
                <p className="text-lg ">
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quis
                  velit inventore ea reiciendis, molestiae corrupti aliquam
                  temporibus nemo praesentium nesciunt.
                </p>
                <button className="btn btn-lg bg-white text-green-600 rounded-full px-14">
                  Buy Now
                </button>
              </div>
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div
            className={`flex  justify-center items-center bg-[linear-gradient(-45deg,#00800059,#008000E6)] min-h-[700px]  `}
          >
            <div className=" flex  flex-col md:flex-row-reverse justify-center items-center">
              <img
                className=" xl:scale-150 lg:scale-110   object-fill "
                src={Slide2}
                alt=""
              />

              <div className="lg:w-1/2 md:w-2/3   text-center md:text-left pb-10 md:pb-0 text-white space-y-6">
                <h2 className="xl:text-6xl  text-5xl font-bold">
                  Lorem ipsum dolor sit amet consectetur.
                </h2>
                <p className="text-lg ">
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quis
                  velit inventore ea reiciendis, molestiae corrupti aliquam
                  temporibus nemo praesentium nesciunt.
                </p>
                <button className="btn btn-lg bg-white text-green-600 rounded-full px-14">
                  Buy Now
                </button>
              </div>
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div
            className={`flex  justify-center items-center bg-[linear-gradient(-45deg,#00800059,#008000E6)] min-h-[700px]  `}
          >
            <div className=" flex  flex-col md:flex-row-reverse justify-center items-center">
              <img
                className=" xl:scale-125 lg:scale-110   object-fill "
                src={Slide3}
                alt=""
              />

              <div className="lg:w-1/2 md:w-2/3   text-center md:text-left pb-10 md:pb-0 text-white space-y-6">
                <h2 className="xl:text-6xl  text-5xl font-bold">
                  Lorem ipsum dolor sit amet consectetur.
                </h2>
                <p className="text-lg ">
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quis
                  velit inventore ea reiciendis, molestiae corrupti aliquam
                  temporibus nemo praesentium nesciunt.
                </p>
                <button className="btn btn-lg bg-white text-green-600 rounded-full px-14">
                  Buy Now
                </button>
              </div>
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div
            className={`flex  justify-center items-center bg-[linear-gradient(-45deg,#00800059,#008000E6)] min-h-[700px]  `}
          >
            <div className=" flex  flex-col md:flex-row-reverse justify-center items-center">
              <img
                className=" xl:scale-125 lg:scale-110   object-fill "
                src={Slide4}
                alt=""
              />

              <div className="lg:w-1/2 md:w-2/3   text-center md:text-left pb-10 md:pb-0 text-white space-y-6">
                <h2 className="xl:text-6xl  text-5xl font-bold">
                  Lorem ipsum dolor sit amet consectetur.
                </h2>
                <p className="text-lg ">
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quis
                  velit inventore ea reiciendis, molestiae corrupti aliquam
                  temporibus nemo praesentium nesciunt.
                </p>
                <button className="btn btn-lg bg-white text-green-600 rounded-full px-14">
                  Buy Now
                </button>
              </div>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default BannerSlider;
