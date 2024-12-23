import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Provaider/AuthProvaider";
import axios from "axios";
import { format } from "date-fns";

const MyFoodRequest = () => {

    const { user } = useContext(AuthContext);
    // console.log(user?.email);


    const [requests, setRequests] = useState([])

    console.log(requests);


    useEffect(() => {
        const fetchRequests = async () => {
            try {
                const { data } = await axios.get(`${import.meta.env.VITE_API_URL}/myRequest?email=${user?.email}`);
                setRequests(data);
            } catch (error) {
                console.error("Error fetching requests:", error);
            }
        };
        if (user?.email) {
            fetchRequests();
        }
    }, [user?.email]);



    // {
    //     "_id": "6769269a6bfc9c2e5d77923b",
    //     "foodName": "Scarlet Mueller",
    //     "foodImage": "https://i.postimg.cc/VNqx2ydT/chocolate-brownies-white-plate-1150-20887.jpg",
    //     "foodQuantity": "912",
    //     "pickupLocation": "Numquam nostrud mini",
    //     "expiredDateTime": "2009-08-08T18:15",
    //     "formattedDate": "2024-12-23",
    //     "additionalNotes": "Continually evisculate granular strategic theme areas without interoperable markets. Completely.",
    //     "foodStatus": "available",
    //     "foodId": "6768204427c2214e4f8a3702",
    //     "donatorName": "MD:Kausar Mia",
    //     "donatorEmail": "mdkousarmia71@gmail.com",
    //     "email": "mdkousarmia71@gmail.com"
    // }

    return (
        <div className="py-[120px]">


            <div className="container p-2 mx-auto sm:p-4 text-gray-100 dark:text-gray-800">
                <h2 className="mb-4 text-2xl font-semibold leading-tight">Contacts</h2>
                <div className="overflow-x-auto">
                    <table className="w-full p-6 text-xs text-left whitespace-nowrap">
                        <colgroup>
                            <col className="w-5" />
                            <col />
                            <col />
                            <col />
                            <col />
                            <col />
                            <col className="w-5" />
                        </colgroup>
                        <thead>
                            <tr className="bg-gray-700 dark:bg-gray-300">
                                <th className="p-3"></th>
                                <th className="p-3">Donar Name</th>
                                <th className="p-3">Pickup Location</th>
                                <th className="p-3">Expire Date</th>
                                <th className="p-3">Request Date</th>

                               
                            </tr>
                        </thead>
                        <tbody className="border-b bg-gray-900 dark:bg-gray-50 border-gray-700 dark:border-gray-300">
                            {requests?.map(request =>
                                <tr key={request._id}>
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

                                </tr>

                            )}
                        </tbody>

                    </table>
                </div>
            </div>
        </div>
    );
};

export default MyFoodRequest;