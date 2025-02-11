import axios from "axios";
import { format } from "date-fns";
import { LuDatabase } from "react-icons/lu";
import { Link } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import Loader from "../Loader/Loader";



const FeaturedFoods = () => {



    const { data, isLoading } = useQuery({
        queryKey: ['food'],
        queryFn: async () => {
            const { data } = await axios.get(`${import.meta.env.VITE_API_URL}/featured`)
            return data;
        }
    })
    const feaured = data || {}
    // console.log(data);

    if (isLoading) {
        return <Loader></Loader>
    }

    return (

        <div >
            <div className="text-center py-8 w-[50%] mx-auto">
                <h1 className="text-4xl font-bold text-white">Featured Foods</h1>
                <div className="max-w-96 mx-auto h-1 bg-white"></div>
            </div>

            {
                feaured?.length ?

                    <div className="grid xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 gap-4 p-2 container mx-auto py-10">
                        {
                            feaured?.map(feaur => <div key={feaur._id}>

                                <div className="rounded-md shadow-md border bg-cyan-900/50 text-gray-100 transition hover:scale-105 p-2">
                                    <img src={feaur?.foodImage} alt={feaur?.foodImage} className="object-cover rounded-lg object-center w-full rounded-t-md h-72 bg-gray-500 0" />
                                    <div className="flex flex-col justify-between p-6 space-y-8">
                                        <div className="space-y-2">
                                            <div className='flex  items-center justify-between'>
                                                <h2 className="text-xl font-bold tracking-wide">{feaur?.foodName}</h2>
                                                <p className={`
                                                        ${feaur?.foodStatus === "requested" ? "bg-cyan-600/60 px-2 rounded-full" : ""}
                                                        ${feaur?.foodStatus === "available" ? "bg-green-800 px-2 rounded-full" : ""}
                                                        `}>
                                                    {feaur?.foodStatus}</p>
                                            </div>
                                            <p title={feaur?.additionalNotes} className="text-gray-100 ">{feaur?.additionalNotes.slice(0, 60)}...</p>
                                            <p>Food Quantity: {feaur?.foodQuantity}</p>
                                            <p>Expire Date: {format(new Date(feaur?.expiredDateTime), "P")} </p>

                                        </div>
                                        <Link to={`/detals/${feaur?._id}`} type="button" className="flex items-center justify-center w-full p-2 font-semibold tracking-wide rounded-md border-2 hover:shadow-lg hover:shadow-blue-600 ">View Details</Link>
                                    </div>
                                </div>

                            </div>)
                        }
                    </div>

                    :
                    <div className="flex  flex-col justify-center items-center min-h-96">
                        <h1 className="text-4xl font-bold text-white">Data Not Found</h1>
                        <p><LuDatabase size={120} color="white"></LuDatabase> </p>
                    </div>
            }

            <div className="flex justify-center items-center pb-5">
                <Link to={'/available'} className="border-2 border-cyan-200 p-2 rounded-md hover:shadow-lg hover:shadow-blue-600 text-white hover:scale-105">Show All</Link>
            </div>


        </div >

    );
};

export default FeaturedFoods;