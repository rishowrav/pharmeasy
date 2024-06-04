import { Link } from "react-router-dom";
import category1 from "../../../../public/images/slide1.png";

const CategoryCard = () => {
  return (
    <Link to="/catagoryDetails">
      <div className="card bg-base-100 border border-green-600">
        <figure className="relative">
          <span className="font-bold text-xl absolute top-0 right-0 rounded-bl-md bg-green-600 px-5 py-3 text-white">
            22
          </span>
          <img
            src={category1}
            alt="Shoes"
            className="rounded-xl hover:scale-110 duration-200"
          />
        </figure>
        <div className="pb-4">
          <h2 className="text-center">Tablet</h2>
        </div>
      </div>
    </Link>
  );
};

export default CategoryCard;
