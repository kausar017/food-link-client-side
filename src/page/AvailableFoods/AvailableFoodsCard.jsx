
import { format } from 'date-fns';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const AvailableFoodsCard = ({ food }) => {

    // console.log(food);
    const { foodImage, foodQuantity, foodName, expiredDateTime, additionalNotes, _id, foodStatus } = food || {}


    return (
        <div>
            <div className="rounded-md shadow-md bg-gray-900 dark:bg-gray-50 text-gray-100 dark:text-gray-800">
                <img src={foodImage} alt={foodImage} className="object-cover object-center w-full rounded-t-md h-72 bg-gray-500 dark:bg-gray-500" />
                <div className="flex flex-col justify-between p-6 space-y-8">
                    <div className="space-y-2">
                        <div className='flex  items-center justify-between'>
                            <h2 className="text-3xl font-semibold tracking-wide">{foodName}</h2>
                            <p
                                className={`
                                ${foodStatus === "requested" ? "bg-cyan-600/60 px-2 rounded-full" : ""}
                                ${foodStatus === "available" ? "bg-green-800 px-2 rounded-full" : ""}
                                `}>{foodStatus}</p>
                        </div>
                        <p title={additionalNotes} className="text-gray-100 dark:text-gray-800">{additionalNotes.slice(0, 70)}...</p>
                        <p>Food Quantity: {foodQuantity}</p>
                        <p>Expire Date: {format(new Date(expiredDateTime), "P")} </p>

                    </div>
                    <Link to={`/detals/${_id}`} type="button" className="flex items-center justify-center w-full p-3 font-semibold tracking-wide rounded-md border-2 hover:bg-rose-500/30 dark:text-gray-50">View Details</Link>
                </div>
            </div>
        </div>
    );
};

AvailableFoodsCard.propTypes = {
    food: PropTypes.array.isRequired
};

export default AvailableFoodsCard;