import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { AuthContext } from "../../Provaider/AuthProvaider";
import { format } from "date-fns";

const MyFoodUpdate = ({ isModalOpen, setIsModalOpen }) => {

    const { user } = useContext(AuthContext)

    const [foodData, setFoodData] = useState([])
    console.log(foodData);

    const params = useParams()
    console.log(params?.id);


    useEffect(() => {
        const fetchRequests = async () => {
            try {
                const { data } = await axios.get(`${import.meta.env.VITE_API_URL}/myRequest?email=${user?.email}`);
                setFoodData(data);
            } catch (error) {
                console.error("Error fetching requests:", error);
            }
        };
        fetchRequests();
    }, [user?.email]);

    const { foodName, foodImage, foodQuantity, pickupLocation, expiredDateTime, additionalNotes, foodStatus, _id: foodId, formattedDate: currentDate, donatorName, donatorEmail, email } = foodData || {}

    const handaleUpdate = async (e) => {
        e.preventDefault()
    }


    return (
        <div>
            {/* Modal */}

            {isModalOpen && (
                <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center pt-[120px] px-3">

                    <div
                        onClick={(e) => e.stopPropagation()}
                        className="bg-white p-6 rounded-lg max-w-xl w-full h-[600px] overflow-y-scroll">
                        <h2 className="text-lg font-bold mb-4">Request Food</h2>
                        {
                            foodData?.map(data =>
                                <div className="space-y-4">
                                    <form onSubmit={handaleUpdate} noValidate="" className="container w-full max-w-xl mx-auto space-y-3 rounded-md dark:bg-gray-50">
                                        <div>
                                            <label className="block mb-1 ml-1">Food Name</label>
                                            <input type="text" readOnly name="foodName" value={data?.foodName} equired="" className="block w-full border-2 text-black p-2 rounded focus:outline-none focus:ring focus:ring-opacity-25 focus:dark:ring-rose-600 dark:bg-gray-100" />
                                        </div>
                                        <div>
                                            <label className="block mb-1 ml-1">Food Image Url</label>
                                            <input type="url" readOnly name="foodName" value={data?.foodImage} equired="" className="block w-full border-2 text-black p-2 rounded focus:outline-none focus:ring focus:ring-opacity-25 focus:dark:ring-rose-600 dark:bg-gray-100" />
                                        </div>
                                        <div>
                                            <label className="block mb-1 ml-1">Food Id</label>
                                            <input value={data?.foodId} name="foodId" readOnly className="block w-full p-2 border-2 rounded focus:outline-none focus:ring focus:ring-opacity-25 focus:dark:ring-rose-600 dark:bg-gray-100 text-black" />
                                        </div>
                                        <div>
                                            <label className="block mb-1 ml-1">Food Donator Email</label>
                                            <input type="email" readOnly name="donatorEmail" value={data?.donatorEmail} className="block w-full p-2 border-2 text-black rounded focus:outline-none focus:ring focus:ring-opacity-25 focus:dark:ring-rose-600 dark:bg-gray-100" />
                                        </div>
                                        <div>
                                            <label className="block mb-1 ml-1">Food Donator Name</label>
                                            <input type="text" readOnly name="donatorName" value={data?.donatorName} className="block w-full p-2 border-2 text-black rounded focus:outline-none focus:ring focus:ring-opacity-25 focus:dark:ring-rose-600 dark:bg-gray-100" />
                                        </div>
                                        <div>
                                            <label className="block mb-1 ml-1">User Email</label>
                                            <input type="text" readOnly name="userEmail" value={data?.email} className="block w-full p-2 border-2 text-black rounded focus:outline-none focus:ring focus:ring-opacity-25 focus:dark:ring-rose-600 dark:bg-gray-100" />
                                        </div>
                                        <div>
                                            <label className="block mb-1 ml-1">Current Date</label>
                                            <input type="date" readOnly name="currentDate" value={data?.currentDate} className="block w-full p-2 border-2 text-black rounded focus:outline-none focus:ring focus:ring-opacity-25 focus:dark:ring-rose-600 dark:bg-gray-100" />
                                        </div>
                                        <div>
                                            <label className="block mb-1 ml-1">Pickup Location</label>
                                            <input type="text" readOnly name="location" value={data?.pickupLocation} className="block w-full p-2 border-2 text-black rounded focus:outline-none focus:ring focus:ring-opacity-25 focus:dark:ring-rose-600 dark:bg-gray-100" />
                                        </div>
                                        <div>
                                            <label className="block mb-1 ml-1">Expire Date</label>
                                            <input type="date" name="expireDate" readOnly Value={data?.expiredDateTime ? format(new Date(data?.expiredDateTime), "yyyy-MM-dd") : ""} className="p-2 border-2 w-full text-black " id="" />
                                        </div>
                                        <div>
                                            <label className="block mb-1 ml-1">Additional Notes</label>
                                            <textarea type="text" onChange={(e) => setNots(e.target.value)} name="notes" Value={data?.additionalNotes} className="block w-full p-3 border-2 text-black rounded autoexpand focus:outline-none focus:ring focus:ring-opacity-25 focus:dark:ring-rose-600 dark:bg-gray-100"></textarea>
                                        </div>
                                        <div className="pt-6 flex justify-end space-x-4">
                                            <button onClick={() => setIsModalOpen(false)} className="px-4 py-2 bg-gray-300 rounded hover:bg-gray-400">Cancel</button>
                                            <button className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">Update</button>
                                        </div>
                                    </form>
                                </div>
                            )
                        }

                    </div>
                </div>
            )}
        </div>
    );
};

export default MyFoodUpdate;