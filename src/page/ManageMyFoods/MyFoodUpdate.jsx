import { useContext, useEffect, useState } from "react";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import { AuthContext } from "../../Provaider/AuthProvaider";
import { format } from "date-fns";
import Swal from "sweetalert2";
import bg from '../../assets/bg/Sprinkle.svg'
import useAxiosSecure from "../../hooks/useAxiosSecure";

const MyFoodUpdate = () => {
    const axiosSecure = useAxiosSecure()

    const navigat = useNavigate();
    const location = useLocation();
    const from = location?.state?.pathname || '/managmyfood';

    const { user } = useContext(AuthContext);
    const params = useParams();
    console.log(params.id);

    const [foodData, setFoodData] = useState([]);
    console.log(foodData);

    useEffect(() => {
        fetch(`${import.meta.env.VITE_API_URL}/myRequest/${params?.id}`)
            .then(res => res.json())
            .then(data => setFoodData(data))
            .catch(errr => {
                console.log(errr.massage);
            })
    }, [])

    const handleUpdate = (e) => {
        e.preventDefault();
        const form = e.target;
        const foodName = form.foodName.value;
        const foodImage = form.foodImage.value;
        const foodId = form.foodId.value;
        const donatorName = form.donatorName.value;
        const currentDate = form.currentDate.value;
        const pickupLocation = form.pickupLocation.value;
        const expireDate = form.expireDate.value;
        const additionalNotes = form.additionalNotes.value;

        const formData = { foodName, foodImage, foodId, donatorEmail, email, donatorName, currentDate, pickupLocation, expireDate, additionalNotes }
        console.log(formData);

        try {
            axiosSecure.put(`/myRequest/${params?.id}`, formData)

            Swal.fire('success', 'Food Data Succesfully Updated')
            navigat(from)
        } catch (error) {
            Swal.fire('Data NOt Updatet')
        }

    };

    const {
        foodName,
        foodImage,
        foodQuantity,
        pickupLocation,
        expiredDateTime,
        additionalNotes,
        foodStatus,
        _id: foodId,
        formattedDate: currentDate,
        donatorName,
        donatorEmail,
        email,
    } = foodData;

    return (
        <div className="py-[150px]"
            style={{
                backgroundImage: `url(${bg})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                // height: "100vh",
                width: "100%",

            }}

        >

            <form onSubmit={handleUpdate} noValidate className="container w-full max-w-2xl h-[800px] overflow-y-scroll mx-auto space-y-3 rounded-md dark:bg-gray-50 border-2 p-5 bg-white shadow-xl">
                <div className="text-2xl font-bold text-center">
                    <h1>Update Food</h1>
                </div>
                <div>
                    <label className="block mb-1 ml-1">Food Name</label>
                    <input
                        type="text"
                        name="foodName"
                        defaultValue={foodName}
                        required
                        className="block w-full border-2 text-black p-2 rounded focus:outline-none focus:ring focus:ring-opacity-25 focus:dark:ring-rose-600 dark:bg-gray-100"
                    />
                </div>
                <div>
                    <label className="block mb-1 ml-1">Food Image Url</label>
                    <input
                        type="url"
                        name="foodImage"
                        defaultValue={foodImage}
                        required
                        className="block w-full border-2 text-black p-2 rounded focus:outline-none focus:ring focus:ring-opacity-25 focus:dark:ring-rose-600 dark:bg-gray-100"
                    />
                </div>
                <div>
                    <label className="block mb-1 ml-1">Food Id</label>
                    <input
                        defaultValue={foodId}
                        name="foodId"
                        className="block w-full p-2 border-2 rounded focus:outline-none focus:ring focus:ring-opacity-25 focus:dark:ring-rose-600 dark:bg-gray-100 text-black"
                    />
                </div>
                <div>
                    <label className="block mb-1 ml-1">Food Donator Email</label>
                    <input
                        type="email"
                        name="donatorEmail"
                        readOnly
                        defaultValue={donatorEmail}
                        className="block w-full p-2 border-2 text-black rounded focus:outline-none focus:ring focus:ring-opacity-25 focus:dark:ring-rose-600 dark:bg-gray-100"
                    />
                </div>
                <div>
                    <label className="block mb-1 ml-1">Food Donator Name</label>
                    <input
                        type="text"
                        name="donatorName"
                        defaultValue={donatorName}
                        className="block w-full p-2 border-2 text-black rounded focus:outline-none focus:ring focus:ring-opacity-25 focus:dark:ring-rose-600 dark:bg-gray-100"
                    />
                </div>
                <div>
                    <label className="block mb-1 ml-1">User Email</label>
                    <input
                        type="text"
                        name="email"
                        readOnly
                        defaultValue={email}
                        className="block w-full p-2 border-2 text-black rounded focus:outline-none focus:ring focus:ring-opacity-25 focus:dark:ring-rose-600 dark:bg-gray-100"
                    />
                </div>
                <div>
                    <label className="block mb-1 ml-1">Current Date</label>
                    <input
                        type="date"
                        name="currentDate"
                        defaultValue={currentDate}
                        className="block w-full p-2 border-2 text-black rounded focus:outline-none focus:ring focus:ring-opacity-25 focus:dark:ring-rose-600 dark:bg-gray-100"
                    />
                </div>
                <div>
                    <label className="block mb-1 ml-1">Pickup Location</label>
                    <input
                        type="text"
                        name="pickupLocation"
                        defaultValue={pickupLocation}
                        className="block w-full p-2 border-2 text-black rounded focus:outline-none focus:ring focus:ring-opacity-25 focus:dark:ring-rose-600 dark:bg-gray-100"
                    />
                </div>
                <div>
                    <label className="block mb-1 ml-1">Expire Date</label>
                    <input
                        type="date"
                        name="expireDate"
                        defaultValue={expiredDateTime ? format(new Date(expiredDateTime), "yyyy-MM-dd") : ""}
                        className="p-2 border-2 w-full text-black"
                    />
                </div>
                <div>
                    <label className="block mb-1 ml-1">Additional Notes</label>
                    <textarea
                        type="text"

                        name="additionalNotes"
                        defaultValue={additionalNotes}
                        className="block w-full p-3 border-2 text-black rounded autoexpand focus:outline-none focus:ring focus:ring-opacity-25 focus:dark:ring-rose-600 dark:bg-gray-100"
                    />
                </div>
                <div className="pt-6 flex justify-end space-x-4">
                    <button className="px-4 py-2 w-full bg-blue-500 text-white rounded hover:bg-blue-600">Update</button>
                </div>
            </form>
        </div>
    );
};

export default MyFoodUpdate;
