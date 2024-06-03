import BannerSlider from "../BannerSlider/BannerSlider";
import CategorySection from "../CategorySection/CategorySection";
import DiscountProducts from "../DiscountProducts/DiscountProducts";

const Home = () => {
  return (
    <div>
      <BannerSlider />
      <div className="container mx-auto space-y-28 my-20">
        <CategorySection />
        <DiscountProducts />
      </div>
    </div>
  );
};

export default Home;
