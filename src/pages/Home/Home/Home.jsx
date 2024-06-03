import BannerSlider from "../BannerSlider/BannerSlider";
import CategorySection from "../CategorySection/CategorySection";

const Home = () => {
  return (
    <div>
      <BannerSlider />
      <div className="container mx-auto space-y-20">
        <CategorySection></CategorySection>
      </div>
    </div>
  );
};

export default Home;
