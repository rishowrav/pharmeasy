import CategoryCard from "./CategoryCard";

const CategorySection = () => {
  return (
    <div className="my-10 space-y-10">
      <h2 className="text-5xl font-bold ">All Categories</h2>
      <div className="flex gap-4">
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
