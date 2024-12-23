import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import { AuthContext } from "../../Provaider/AuthProvaider";
import { format } from "date-fns";
import Swal from "sweetalert2";

const Detals = () => {

    const navigat = useNavigate();
    const location = useLocation();
    const from = location?.state?.pathname || '/foodrequest';



    const [detals, setDetals] = useState({});
    const params = useParams()
    const { user } = useContext(AuthContext);

    const { email, displayName, photoURL } = user || {};

    const { foodName, foodImage, foodQuantity, pickupLocation, expiredDateTime, additionalNotes, foodStatus, _id: foodId, donatorName, donatorEmail, } = detals || {}

    // current date
    const date = new Date();
    const currentDate = format(date, 'yyyy-MM-dd');
    // console.log('Current Date:', formattedDate);

    // detals data fatching
    useEffect(() => {
        const fatchDetalsData = async () => {
            const { data } = await axios.get(`${import.meta.env.VITE_API_URL}/foodData/${params.id}`)
            setDetals(data)
        }
        fatchDetalsData()
    }, [])

    // show modal usestate
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [notes, setNots] = useState('');



    // my request data insarting
    const handaleSubmit = async (e) => {
        e.preventDefault()

        const myFoodRequest = { foodName, foodImage, foodQuantity, pickupLocation, expiredDateTime, formattedDate: currentDate, additionalNotes, foodStatus, foodId, donatorName, donatorEmail, email }

        try {
            const { data } = await axios.post(`${import.meta.env.VITE_API_URL}/myFood`, myFoodRequest)
            console.log(data);
            Swal.fire('My requested Food added successfully!');
            navigat(from)

            const updateData = {
                additionalNotes: notes,
                foodStatus: "requested",
            };

            const res = await axios.patch(`${import.meta.env.VITE_API_URL}/foodData/${params.id}`, updateData)
            if (res.data.modifiedCount) {
                // Swal.fire('additionalNotes and foodStatus update successfully!');
            }
        } catch (error) {
            Swal.fire('Food Not Added please Try Agein');
        }

    }


    return (
        <div className="py-[120px] container mx-auto">
            <div className="rounded-md max-w-[800px] mx-auto bg-white shadow-xl p-6 w-full">
                <img src={foodImage} alt="" className="object-cover object-center w-full rounded-t-md h-72 bg-gray-500 dark:bg-gray-500" />
                <div className="flex flex-col justify-between p-6 space-y-8">
                    <div className="space-y-2">
                        <h2 className="text-3xl font-semibold tracking-wide">Food Name: {foodName}</h2>
                        <p className="">Food Id: {foodId}</p>
                        <p className="">Donator Email: {donatorEmail}</p>
                        <p className="">Donator Name: {donatorName}</p>
                        <p className="">User Email: {email}</p>
                        <p className="">Request Date: {currentDate}</p>
                        <p className="">Pickup Location: {pickupLocation}</p>
                        <p className="">Food Quantity: {foodQuantity}</p>
                        <p className="">Expired Date: {expiredDateTime ? format(new Date(expiredDateTime), "yyyy-MM-dd") : ""}</p>
                        <p className="">Additional Notes: {additionalNotes}</p>
                    </div>
                    <button
                        onClick={() => setIsModalOpen(true)}
                        className="flex items-center justify-center w-full p-3 font-semibold tracking-wide rounded-md bg-rose-400 dark:bg-rose-600 text-gray-900 dark:text-gray-50"
                    >
                        Request
                    </button>
                </div>
            </div>

            {/* Modal */}
            {isModalOpen && (
                <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center pt-[120px] px-3">
                    <div
                        onClick={(e) => e.stopPropagation()}
                        className="bg-white p-6 rounded-lg max-w-xl w-full h-[600px] overflow-y-scroll">
                        <h2 className="text-lg font-bold mb-4">Request Food</h2>
                        <div className="space-y-4">
                            <form onSubmit={handaleSubmit} noValidate="" className="container w-full max-w-xl mx-auto space-y-3 rounded-md dark:bg-gray-50">
                                <div>
                                    <label className="block mb-1 ml-1">Food Name</label>
                                    <input type="text" readOnly name="foodName" value={foodName} equired="" className="block w-full border-2 text-black p-2 rounded focus:outline-none focus:ring focus:ring-opacity-25 focus:dark:ring-rose-600 dark:bg-gray-100" />
                                </div>
                                <div>
                                    <label className="block mb-1 ml-1">Food Image Url</label>
                                    <input type="url" readOnly name="foodName" value={foodImage} equired="" className="block w-full border-2 text-black p-2 rounded focus:outline-none focus:ring focus:ring-opacity-25 focus:dark:ring-rose-600 dark:bg-gray-100" />
                                </div>
                                <div>
                                    <label className="block mb-1 ml-1">Food Id</label>
                                    <input value={foodId} name="foodId" readOnly className="block w-full p-2 border-2 rounded focus:outline-none focus:ring focus:ring-opacity-25 focus:dark:ring-rose-600 dark:bg-gray-100 text-black" />
                                </div>
                                <div>
                                    <label className="block mb-1 ml-1">Food Donator Email</label>
                                    <input type="email" readOnly name="donatorEmail" value={donatorEmail} className="block w-full p-2 border-2 text-black rounded focus:outline-none focus:ring focus:ring-opacity-25 focus:dark:ring-rose-600 dark:bg-gray-100" />
                                </div>
                                <div>
                                    <label className="block mb-1 ml-1">Food Donator Name</label>
                                    <input type="text" readOnly name="donatorName" value={donatorName} className="block w-full p-2 border-2 text-black rounded focus:outline-none focus:ring focus:ring-opacity-25 focus:dark:ring-rose-600 dark:bg-gray-100" />
                                </div>
                                <div>
                                    <label className="block mb-1 ml-1">User Email</label>
                                    <input type="text" readOnly name="userEmail" value={email} className="block w-full p-2 border-2 text-black rounded focus:outline-none focus:ring focus:ring-opacity-25 focus:dark:ring-rose-600 dark:bg-gray-100" />
                                </div>
                                <div>
                                    <label className="block mb-1 ml-1">Current Date</label>
                                    <input type="date" readOnly name="currentDate" value={currentDate} className="block w-full p-2 border-2 text-black rounded focus:outline-none focus:ring focus:ring-opacity-25 focus:dark:ring-rose-600 dark:bg-gray-100" />
                                </div>
                                <div>
                                    <label className="block mb-1 ml-1">Pickup Location</label>
                                    <input type="text" readOnly name="location" value={pickupLocation} className="block w-full p-2 border-2 text-black rounded focus:outline-none focus:ring focus:ring-opacity-25 focus:dark:ring-rose-600 dark:bg-gray-100" />
                                </div>
                                <div>
                                    <label className="block mb-1 ml-1">Expire Date</label>
                                    <input type="date" name="expireDate" readOnly defaultValue={expiredDateTime ? format(new Date(expiredDateTime), "yyyy-MM-dd") : ""} className="p-2 border-2 w-full text-black " id="" />
                                </div>
                                <div>
                                    <label className="block mb-1 ml-1">Additional Notes</label>
                                    <textarea type="text" onChange={(e) => setNots(e.target.value)} name="notes" defaultValue={additionalNotes} className="block w-full p-3 border-2 text-black rounded autoexpand focus:outline-none focus:ring focus:ring-opacity-25 focus:dark:ring-rose-600 dark:bg-gray-100"></textarea>
                                </div>
                                <div className="pt-6 flex justify-end space-x-4">
                                    <button onClick={() => setIsModalOpen(false)} className="px-4 py-2 bg-gray-300 rounded hover:bg-gray-400">Cancel</button>
                                    <button className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">Request</button>
                                </div>
                            </form>
                        </div>

                    </div>
                </div>
            )
            }
        </div >
    );

};

export default Detals;