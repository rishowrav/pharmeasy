import { Helmet } from "react-helmet-async";
import BannerDiscount from "../BannerDiscount/BannerDiscount";
import BannerSlider from "../BannerSlider/BannerSlider";
import CategorySection from "../CategorySection/CategorySection";
import DiscountProducts from "../DiscountProducts/DiscountProducts";
import FAQ from "../FAQ/FAQ";
import QuerySection from "../QuerySection/QuerySection";
import { Fade } from "react-awesome-reveal";

const Home = () => {
  return (
    <div>
      <Helmet>
        <title>PharmEasy | Home</title>
      </Helmet>

      <Fade duration={2000}>
        <BannerSlider />
      </Fade>
      <div className="container mx-auto space-y-28 my-20">
        <Fade duration={2000}>
          <CategorySection />
        </Fade>
        <Fade duration={2000}>
          <DiscountProducts />
        </Fade>
      </div>
      <Fade duration={2000}>
        <BannerDiscount />
      </Fade>
      <div className="container mx-auto space-y-28 my-20">
        <Fade duration={2000}>
          <QuerySection />
        </Fade>
        <Fade duration={2000}>
          {" "}
          <FAQ />
        </Fade>
      </div>
    </div>
  );
};

export default Home;
