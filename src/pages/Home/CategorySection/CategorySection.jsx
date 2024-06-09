import CategoryCard from "./CategoryCard";
import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "../../../Hooks/useAxiosPublic";

const CategorySection = () => {
  const axiosPublic = useAxiosPublic();

  const { data: categories = [] } = useQuery({
    queryKey: ["categories"],
    queryFn: async () => {
      const { data } = await axiosPublic.get("/categories");
      return data;
    },
  });

  return (
    <div className=" space-y-10">
      <h2 className="text-5xl  font-bold ">All Categories</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
        {categories.map((category) => (
          <CategoryCard key={category.category_name} category={category} />
        ))}
      </div>
    </div>
  );
};

export default CategorySection;
