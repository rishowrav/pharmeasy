import React from "react";
import plusFamily from "../../../../public/images/PlusFamily.png";

const BannerDiscount = () => {
  return (
    <div className="p-6 py-12 bg-[linear-gradient(-45deg,#008000CC,#008000E6)] text-gray-50">
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row items-center justify-between">
          <div className="space-y-4 lg:w-4/12">
            <h2 className="text-center lg:text-left text-5xl tracking-tighter font-bold">
              Become a
              <br className="sm:hidden" /> + Plus Member
            </h2>
            <p className="text-xl text-center lg:text-left text-gray-300">
              And enjoy extra bachat on every order
            </p>
          </div>
          <div className="space-x-2 lg:w-5/12 text-center lg:text-left space-y-4 text-lg py-2 lg:py-0">
            <span className="leading-7">
              {" "}
              Save 5% on medicines, 50% on 1st lab test & get FREE delivery with
              PLUS membership Know more
            </span>
            <br />
            <button
              href="#"
              rel="noreferrer noopener"
              className="px-5 text-center m-0 py-3 rounded-md border  dark:bg-gray-900 dark:text-gray-50 dark:border-gray-600"
            >
              Explore Now
            </button>
          </div>
          <div className="lg:w-2/12">
            <img className="" src={plusFamily} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default BannerDiscount;
