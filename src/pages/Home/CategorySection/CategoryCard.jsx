import { Link } from "react-router-dom";
import category1 from "../../../../public/images/slide1.png";

const CategoryCard = () => {
  return (
    <Link>
      <div className="card bg-base-100 shadow-lg shadow-green-200">
        <figure className="">
          <img
            src={category1}
            alt="Shoes"
            className="rounded-xl hover:scale-110 duration-200"
          />
        </figure>
        <div className="pb-4">
          <h2 className="text-center">Children king</h2>
        </div>
      </div>
    </Link>
  );
};

export default CategoryCard;
