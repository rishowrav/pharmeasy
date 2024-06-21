import category1 from "../../../../public/images/slide1.png";
import { FaStar } from "react-icons/fa";

// Import Swiper React components

const DiscountCard = ({ medicine }) => {
  return (
    <div className="card bg-base-100 border border-gray-300 ">
      <figure className="relative">
        <button className="btn absolute text-2xl top-4 left-4 btn-error text-white">
          {medicine?.discount}% OFF
        </button>
        <img
          src={medicine?.image_url}
          alt="Shoes"
          className="rounded-xl h-[200px] object-cover hover:scale-110 duration-200"
        />
      </figure>
      <div className="pb-4 text-center space-y-2">
        <p className="text-gray-400">{medicine?.category}</p>
        <h2 className="font-bold text-xl">
          {medicine?.medicineName.slice(0, 40)}...
        </h2>

        <ul className="flex text-xl text-orange-500 justify-center">
          <li>
            <FaStar />
          </li>
          <li>
            <FaStar />
          </li>
          <li>
            <FaStar />
          </li>
          <li>
            <FaStar />
          </li>
          <li>
            <FaStar />
          </li>
        </ul>

        <p>
          <span className="font-bold text-xl text-gray-700">
            ${medicine?.price}.00
          </span>
        </p>
      </div>
    </div>
  );
};

export default DiscountCard;
