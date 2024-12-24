import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Provaider/AuthProvaider";
import axios from "axios";
import { format } from "date-fns";
import { MdDeleteOutline, MdOutlineSystemUpdateAlt } from "react-icons/md";
import Swal from "sweetalert2";
import MyFoodUpdate from "./MyFoodUpdate";
import { Link } from "react-router-dom";


const ManageMyFoods = () => {


    const { user } = useContext(AuthContext);
    // console.log(user?.email);

    const [requests, setRequests] = useState([])

    // console.log(requests);

    useEffect(() => {
        const fetchRequests = async () => {
            try {
                const { data } = await axios.get(`${import.meta.env.VITE_API_URL}/myRequest?email=${user?.email}`);
                setRequests(data);
            } catch (error) {
                console.error("Error fetching requests:", error);
            }
        };
        fetchRequests();
    }, [user?.email]);

    const handaleDelete = (_id) => {
        // console.log(_id);
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {

                try {
                    axios.delete(`${import.meta.env.VITE_API_URL}/myRequest/${_id}`)
                    Swal.fire({
                        title: "Deleted!",
                        text: "Your file has been deleted.",
                        icon: "success"
                    })

                } catch (error) {
                    Swal.fire(error.massage)
                }
                const updateData = requests.filter(refres => refres._id !== _id);
                setRequests(updateData);
            }
        });
    }

    console.log(requests);


    return (
        <div className="py-[120px]">
            <div className="container p-2 mx-auto sm:p-4 text-gray-100 dark:text-gray-800">

                <div className="overflow-x-auto">
                    <table className="w-full p-6 text-left whitespace-nowrap">
                        <colgroup>
                            <col className="" />
                            <col />
                            <col />
                            <col />
                            <col />

                        </colgroup>
                        <thead>
                            <tr className="bg-gray-700 dark:bg-gray-300">
                                <th className="p-3"></th>
                                <th className="p-3">Donar Name</th>
                                <th className="p-3">Pickup Location</th>
                                <th className="p-3">Expire Date</th>
                                <th className="p-3">Request Date</th>
                                <th className="p-3"></th>

                            </tr>
                        </thead>
                        <tbody className="border-b bg-gray-900 dark:bg-gray-50 border-gray-700 dark:border-gray-300">
                            {requests?.map(request =>
                                <tr key={request._id} className="border-b ">
                                    <td className="px-3 text-2xl font-medium text-gray-400 dark:text-gray-600"></td>
                                    <td className="px-3 py-2">
                                        <p>{request?.donatorName}</p>
                                    </td>
                                    <td className="px-3 py-2">
                                        <span>{request?.pickupLocation}</span>

                                    </td>
                                    <td className="px-3 py-2">
                                        <p>{new Date(request?.expiredDateTime).toLocaleDateString()}</p>
                                    </td>
                                    <td className="px-3 py-2">
                                        {/* <p>{request?.formattedDate}</p> */}
                                        <p>{format(new Date(request?.formattedDate), "P")}</p>
                                    </td>
                                    <td className="flex gap-5 items-center justify-around px-3">
                                        <Link to={`/foodUpdate/${request._id}`} ><MdOutlineSystemUpdateAlt size={20} color="white"></MdOutlineSystemUpdateAlt> </Link>
                                        <button onClick={() => handaleDelete(request._id)}><MdDeleteOutline size={25} color="red"></MdDeleteOutline></button>
                                    </td>

                                </tr>
                            )}
                        </tbody>

                    </table>
                </div>
            </div>

            {/* Modal */}
            {/* {isModalOpen && (
                <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center pt-[120px] px-3">
                    <div
                        onClick={(e) => e.stopPropagation()}
                        className="bg-white p-6 rounded-lg max-w-xl w-full h-[600px] overflow-y-scroll">
                        <h2 className="text-lg font-bold mb-4">Request Food</h2>
                        <div className="space-y-4">
                            <form onSubmit={handaleUpdate} noValidate="" className="container w-full max-w-xl mx-auto space-y-3 rounded-md dark:bg-gray-50">
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
            )} */}
        </div>
    );
};

export default ManageMyFoods;