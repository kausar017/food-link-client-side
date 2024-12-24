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
                            <col />
                            <col className="" />
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