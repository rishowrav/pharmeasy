import category1 from "../../../../public/images/slide1.png";
import { FaStar } from "react-icons/fa";

// Import Swiper React components

const DiscountCard = () => {
  return (
    <div className="card bg-base-100 border border-gray-300 ">
      <figure className="relative">
        <button className="btn absolute text-2xl top-4 left-4 btn-error text-white">
          65% OFF
        </button>
        <img
          src={category1}
          alt="Shoes"
          className="rounded-xl hover:scale-110 duration-200"
        />
      </figure>
      <div className="pb-4 text-center space-y-2">
        <p className="text-gray-400">Care, Health</p>
        <h2 className="font-bold text-xl">Humidifying Unit for Home</h2>

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
          <span>
            <del className="text-gray-300">$28.99</del>
          </span>
          <span className="font-bold text-xl text-gray-700">$18.99</span>
        </p>
      </div>
    </div>
  );
};

export default DiscountCard;
