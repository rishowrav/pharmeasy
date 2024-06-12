import PropTypes from "prop-types";

const NotAvaliable = ({ heading, subHeading }) => {
  return (
    <div className="text-center text-center mt-20">
      {" "}
      <div>
        <h1 className="text-4xl font-bold ">
          {heading || "Medicines Not Available"}
        </h1>
        <p className="text-gray-400 text-lg">{subHeading || "Not Available"}</p>
      </div>
    </div>
  );
};

NotAvaliable.propTypes = {
  heading: PropTypes.string,
  subHeading: PropTypes.string,
};

export default NotAvaliable;
