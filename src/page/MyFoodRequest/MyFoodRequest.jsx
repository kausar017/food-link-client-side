import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Provaider/AuthProvaider";
import { format } from "date-fns";
import { LuDatabase } from "react-icons/lu";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import Loader from "../Loader/Loader";

const MyFoodRequest = () => {
  const axiosSecure = useAxiosSecure();
  const { user } = useContext(AuthContext);
  const [loading, setLoading] = useState(false);
  // console.log(user?.email);

  useEffect(() => {
    document.title = "Food Link | Food Request";
  }, []);

  const [requests, setRequests] = useState([]);

  // console.log(requests);

  //   useEffect(() => {
  //     const fetchRequests = async () => {
  //       setLoading(true);
  //       try {
  //         const { data } = await axiosSecure.get(
  //           `/myRequest?email=${user?.email}`
  //         );
  //         setRequests(data);
  //       } catch (error) {
  //         console.error("Error fetching requests:", error);
  //       } finally {
  //         setLoading(false);
  //       }
  //     };
  //     if (user?.email) {
  //       fetchRequests();
  //     }
  //   }, [user?.email]);

  useEffect(() => {
    const fetchRequests = async () => {
      setLoading(true);
      try {
        const { data } = await axiosSecure.get(
          `/myRequest?email=${user?.email}`
        );
        setRequests(data);
      } catch (error) {
        console.error("Error fetching requests:", error);
      } finally {
        setLoading(false);
      }
    };

    if (user?.email) {
      fetchRequests();
    }
  }, [user?.email]);

  return (
    <div className="py-[120px] min-h-screen">
      <div className="text-center py-8 w-[50%] mx-auto">
        <h1 className="text-4xl font-bold text-white">Food Request</h1>
        <div className="max-w-96 mx-auto h-1 bg-white"></div>
      </div>

      {loading ? (
        <div className="flex justify-center items-center min-h-96">
          <Loader />
        </div>
      ) : requests.length ? (
        <div className="container p-2 mx-auto sm:p-4 text-gray-100">
          <div className="overflow-x-auto shadow-xl">
            <table className="w-full p-6 text-left whitespace-nowrap">
              <thead>
                <tr className="bg-gray-700/60">
                  <th className="p-3"></th>
                  <th className="p-3">Donar Name</th>
                  <th className="p-3">Pickup Location</th>
                  <th className="p-3">Expire Date</th>
                  <th className="p-3">Request Date</th>
                </tr>
              </thead>
              <tbody className="border-b bg-gray-900/40 border-gray-700">
                {requests.map((request) => (
                  <tr key={request._id} className="border-b">
                    <td className="px-3 text-2xl font-medium text-gray-400"></td>
                    <td className="px-3 py-2">
                      <p>{request?.donatorName}</p>
                    </td>
                    <td className="px-3 py-2">
                      <span>{request?.pickupLocation}</span>
                    </td>
                    <td className="px-3 py-2">
                      <p>
                        {new Date(
                          request?.expiredDateTime
                        ).toLocaleDateString()}
                      </p>
                    </td>
                    <td className="px-3 py-2">
                      <p>{format(new Date(request?.formattedDate), "P")}</p>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      ) : (
        <div className="flex flex-col justify-center items-center min-h-96">
          <h1 className="text-4xl font-bold text-white">Data Not Found</h1>
          <p>
            <LuDatabase size={120} color="white" />
          </p>
        </div>
      )}
    </div>
  );
};

export default MyFoodRequest;

