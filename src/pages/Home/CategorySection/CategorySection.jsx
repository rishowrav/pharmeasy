import CategoryCard from "./CategoryCard";

const CategorySection = () => {
  return (
    <div className=" space-y-10">
      <h2 className="text-5xl  font-bold ">All Categories</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
        <CategoryCard />
        <CategoryCard />
        <CategoryCard />
        <CategoryCard />
        <CategoryCard />
        <CategoryCard />
      </div>
    </div>
  );
};

export default CategorySection;
