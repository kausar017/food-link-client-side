import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Provaider/AuthProvaider";
import axios from "axios";
import { format } from "date-fns";
import { MdDeleteOutline, MdOutlineSystemUpdateAlt } from "react-icons/md";
import Swal from "sweetalert2";
import { Link } from "react-router-dom";
import { LuDatabase } from "react-icons/lu";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import Loader from "../Loader/Loader";

const ManageMyFoods = () => {
  const [loading, setLoading] = useState(false);
  const [requests, setRequests] = useState([]);

  useEffect(() => {
    document.title = "Food Link | Manage Food";
  }, []);
  const axiosSecure = useAxiosSecure();

  const { user } = useContext(AuthContext);


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
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        try {
          axios.delete(`${import.meta.env.VITE_API_URL}/myRequest/${_id}`);
          Swal.fire({
            title: "Deleted!",
            text: "Your file has been deleted.",
            icon: "success",
          });
        } catch (error) {
          Swal.fire(error.massage);
        }
        const updateData = requests.filter((refres) => refres._id !== _id);
        setRequests(updateData);
      }
    });
  };

  // console.log(requests);

  return (
    <div className="py-[120px] min-h-screen">
      <div className="text-center py-8 w-[50%] mx-auto">
        <h1 className="text-4xl font-bold text-white">My Food</h1>
        <div className="max-w-96 mx-auto h-1 bg-white"></div>
      </div>

      {loading ? (
        <Loader/>
      ) : requests.length ? (
        <div className="container mx-auto p-2 max-sm:overflow-x-scroll">
          <table className="table-auto w-full border-collapse border border-gray-300 ">
            <thead>
              <tr className="bg-white/10 text-white">
                <th className="border border-gray-300 px-4 py-2">Donar Name</th>
                <th className="border border-gray-300 px-4 py-2">Quantity</th>
                <th className="border border-gray-300 px-4 py-2">Location</th>
                <th className="border border-gray-300 px-4 py-2">
                  Expire Date
                </th>
                <th className="border border-gray-300 px-4 py-2">
                  Request Date
                </th>
                <th className="border border-gray-300 px-4 py-2">Image</th>
                <th className="border border-gray-300 px-4 py-2">Actions</th>
              </tr>
            </thead>
            <tbody>
              {requests?.map((food) => (
                <tr key={food._id} className="text-white">
                  <td className="border border-gray-300 px-4 py-2">
                    {food?.donatorName}
                  </td>
                  <td className="border border-gray-300 px-4 py-2">
                    {food?.foodQuantity}
                  </td>
                  <td className="border border-gray-300 px-4 py-2 ">
                    {food?.pickupLocation}
                  </td>
                  <td className="border border-gray-300 px-4 py-2">
                    <p>
                      {new Date(food?.expiredDateTime).toLocaleDateString()}
                    </p>
                  </td>
                  <td className="border border-gray-300 px-4 py-2">
                    <p>{food?.formattedDate}</p>
                  </td>
                  <td className="border border-gray-300 px-4 py-2">
                    <img
                      src={food?.foodImage}
                      className="w-16 h-16 object-cover"
                    />
                  </td>
                  <td className="flex gap-5 items-center justify-around px-3 py-3">
                    <Link to={`/foodUpdate/${food._id}`}>
                      <MdOutlineSystemUpdateAlt
                        size={20}
                        color="white"
                      ></MdOutlineSystemUpdateAlt>{" "}
                    </Link>
                    <button onClick={() => handaleDelete(food._id)}>
                      <MdDeleteOutline size={25} color="red"></MdDeleteOutline>
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      ) : (
        <div className="flex  flex-col justify-center items-center min-h-96">
          <h1 className="text-4xl font-bold text-white">Data Not Found</h1>
          <p>
            <LuDatabase size={120} color="white"></LuDatabase>{" "}
          </p>
        </div>
      )}
    </div>
  );
};

export default ManageMyFoods;
