import { format } from "date-fns";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import Loader from "../Loader/Loader";

const AvailableFoodsCard = ({ food }) => {
  if (!food) {
    return <Loader></Loader>;
  }

  // console.log(food);
  const {
    foodImage,
    foodQuantity,
    foodName,
    expiredDateTime,
    additionalNotes,
    _id,
    foodStatus,
  } = food || {};

  return (
    <div>
      <div className="rounded-md shadow-md p-2 border-2 bg-cyan-900/50  text-gray-100  transition hover:scale-105">
        <img
          src={foodImage}
          alt={foodImage}
          className="object-cover object-center w-full rounded-t-md h-72 bg-gray-500 0"
        />
        <div className="flex flex-col justify-between p-6 space-y-8">
          <div className="space-y-2">
            <div className="flex  items-center justify-between">
              <h2 className="text-xl font-bold tracking-wide">{foodName}</h2>
              <p
                className={`
                                ${
                                  foodStatus === "requested"
                                    ? "bg-cyan-600/60 px-2 rounded-full"
                                    : ""
                                }
                                ${
                                  foodStatus === "available"
                                    ? "bg-green-800 px-2 rounded-full"
                                    : ""
                                }
                                `}
              >
                {foodStatus}
              </p>
            </div>
            <p title={additionalNotes} className="text-gray-100 ">
              {additionalNotes?.slice(0, 50)}...
            </p>
            <p>Food Quantity: {foodQuantity}</p>
            <p>Expire Date: {format(new Date(expiredDateTime), "P")} </p>
          </div>
          <Link
            to={`/detals/${_id}`}
            type="button"
            className="flex items-center justify-center w-full p-2 font-semibold tracking-wide rounded-md border hover:shadow-lg hover:shadow-blue-600 "
          >
            View Details
          </Link>
        </div>
      </div>
    </div>
  );
};

AvailableFoodsCard.propTypes = {
  food: PropTypes.object.isRequired,
};

export default AvailableFoodsCard;
