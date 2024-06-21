import BannerDiscount from "../BannerDiscount/BannerDiscount";
import BannerSlider from "../BannerSlider/BannerSlider";
import CategorySection from "../CategorySection/CategorySection";
import DiscountProducts from "../DiscountProducts/DiscountProducts";
import FAQ from "../FAQ/FAQ";
import QuerySection from "../QuerySection/QuerySection";

const Home = () => {
  return (
    <div>
      <BannerSlider />
      <div className="container mx-auto space-y-28 my-20">
        <CategorySection />
        <DiscountProducts />
      </div>
      <BannerDiscount />
      <div className="container mx-auto space-y-28 my-20">
        <QuerySection />
        <FAQ />
      </div>
    </div>
  );
};

export default Home;
