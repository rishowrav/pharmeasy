import { Link } from "react-router-dom";
import PropTypes from "prop-types";

const CategoryCard = ({ category }) => {
  const { category_name, image_url } = category;

  return (
    <Link to={`/catagoryDetails/${category_name}`}>
      <div className="card bg-base-100 border border-green-600">
        <figure className="relative">
          <span className="font-bold text-xl absolute top-0 right-0 rounded-bl-md bg-green-600 px-5 py-3 text-white">
            22
          </span>
          <img
            src={image_url}
            alt="Shoes"
            className="rounded-xl hover:scale-110 duration-200"
          />
        </figure>
        <div className="pb-4">
          <h2 className="text-center">{category_name}</h2>
        </div>
      </div>
    </Link>
  );
};

export default CategoryCard;

CategoryCard.propTypes = {
  category: PropTypes.object,
};
