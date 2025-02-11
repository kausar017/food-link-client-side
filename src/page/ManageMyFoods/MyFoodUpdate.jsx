import { useContext, useEffect, useState } from "react";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import { AuthContext } from "../../Provaider/AuthProvaider";
import { format } from "date-fns";
import Swal from "sweetalert2";
import useAxiosSecure from "../../hooks/useAxiosSecure";

const MyFoodUpdate = () => {
    useEffect(() => {
        document.title = "Food Link | Update";
    }, []);


    const axiosSecure = useAxiosSecure()

    const navigat = useNavigate();
    const location = useLocation();
    const from = location?.state?.pathname || '/managmyfood';

    const { user } = useContext(AuthContext);
    const params = useParams();
    // console.log(params.id);

    const [foodData, setFoodData] = useState([]);
    // console.log(foodData);

    useEffect(() => {
        fetch(`${import.meta.env.VITE_API_URL}/myRequest/${params?.id}`,)
            .then(res => res.json())
            .then(data => setFoodData(data))
            .catch(error => {
                // console.log(error.massage);
                Swal.fire(error.massage)
            })
    }, [])

    const handleUpdate = (e) => {
        e.preventDefault();
        const form = e.target;
        const foodName = form.foodName.value;
        const foodImage = form.foodImage.value;
        const foodId = form.foodId.value;
        const foodQuantity = form.foodQuantity.value;
        const donatorName = form.donatorName.value;
        const formattedDate = form.formattedDate.value;
        const pickupLocation = form.pickupLocation.value;
        const expiredDateTime = form.expiredDateTime.value;
        const notes = form.notes.value;

        const formData = { foodName, foodImage, foodId, foodQuantity, donatorEmail, email, donatorName, formattedDate, pickupLocation, expiredDateTime, notes }
        // console.log(formData);

        // Validation checks
        if (!formData.foodName || !formData.foodImage || !formData.foodQuantity || !formData.pickupLocation || !formData.expiredDateTime) {
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Please fill in all required fields!',
            });
            return;
        }

        if (formData.foodQuantity <= 0) {
            Swal.fire({
                icon: 'error',
                title: 'Invalid Quantity',
                text: 'Food quantity must be greater than 0.',
            });
            return;
        }


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
        notes,
        foodStatus,
        _id: foodId,
        formattedDate,
        donatorName,
        donatorEmail,
        email,
    } = foodData;

    return (
        <div className="py-[150px] px-2">

            <form onSubmit={handleUpdate} noValidate className="container w-full max-w-2xl h-[800px] overflow-y-scroll mx-auto space-y-3 rounded-md  border-2 p-5 text-white backdrop-blur-xl shadow-xl">
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
                        className="block w-full border-2 text-black p-2 rounded focus:outline-none focus:ring  "
                    />
                </div>
                <div>
                    <label className="block mb-1 ml-1">Food Image Url</label>
                    <input
                        type="url"
                        name="foodImage"
                        defaultValue={foodImage}
                        required
                        className="block w-full border-2 text-black p-2 rounded focus:outline-none focus:ring  "
                    />
                </div>
                <div>
                    <label className="block mb-1 ml-1">Food Id</label>
                    <input
                        defaultValue={foodId}
                        name="foodId"
                        className="block w-full p-2 border-2 rounded focus:outline-none focus:ring   text-black"
                    />
                </div>
                <div>
                    <label className="block mb-1 ml-1">Food QuanTity</label>
                    <input
                        defaultValue={foodQuantity}
                        name="foodQuantity"
                        className="block w-full p-2 border-2 rounded focus:outline-none focus:ring   text-black"
                    />
                </div>
                <div>
                    <label className="block mb-1 ml-1">Food Donator Email</label>
                    <input
                        type="email"
                        name="donatorEmail"
                        readOnly
                        defaultValue={donatorEmail}
                        className="block w-full p-2 border-2 text-black rounded focus:outline-none focus:ring  "
                    />
                </div>
                <div>
                    <label className="block mb-1 ml-1">Food Donator Name</label>
                    <input
                        type="text"
                        name="donatorName"
                        defaultValue={donatorName}
                        className="block w-full p-2 border-2 text-black rounded focus:outline-none focus:ring  "
                    />
                </div>
                <div>
                    <label className="block mb-1 ml-1">User Email</label>
                    <input
                        type="text"
                        name="email"
                        readOnly
                        defaultValue={email}
                        className="block w-full p-2 border-2 text-black rounded focus:outline-none focus:ring  "
                    />
                </div>
                <div>
                    <label className="block mb-1 ml-1">Current Date</label>
                    <input
                        type="date"
                        name="formattedDate"
                        defaultValue={formattedDate}
                        className="block w-full p-2 border-2 text-black rounded focus:outline-none focus:ring  "
                    />
                </div>
                <div>
                    <label className="block mb-1 ml-1">Pickup Location</label>
                    <input
                        type="text"
                        name="pickupLocation"
                        defaultValue={pickupLocation}
                        className="block w-full p-2 border-2 text-black rounded focus:outline-none focus:ring  "
                    />
                </div>
                <div>
                    <label className="block mb-1 ml-1">Expire Date</label>
                    <input
                        type="date"
                        name="expiredDateTime"
                        defaultValue={expiredDateTime ? format(new Date(expiredDateTime), "yyyy-MM-dd") : ""}
                        className="p-2 border-2 w-full text-black"
                    />
                </div>
                <div>
                    <label className="block mb-1 ml-1">Additional Notes</label>
                    <textarea
                        type="text"

                        name="notes"
                        defaultValue={notes}
                        className="block w-full p-3 border-2 text-black rounded autoexpand focus:outline-none focus:ring  "
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
