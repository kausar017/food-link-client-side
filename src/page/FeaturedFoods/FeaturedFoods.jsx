import axios from "axios";
import { format } from "date-fns";
import { useEffect, useState } from "react";
import { LuDatabase } from "react-icons/lu";
import { Link } from "react-router-dom";

const FeaturedFoods = () => {

    const [feaured, setFeaured] = useState([])

    console.log(feaured);


    useEffect(() => {
        const fatchAllData = async e => {
            const { data } = await axios.get(`${import.meta.env.VITE_API_URL}/foodData`)
            setFeaured(data)
        }
        fatchAllData()
    }, [])

    return (

        <>
            <div className="text-center py-8 w-[50%] mx-auto">
                <h1 className="text-4xl font-bold">Featured Foods</h1>
                <div className="max-w-96 mx-auto h-1 bg-amber-800"></div>
            </div>

            {
                feaured.length ?

                    <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-4 p-2 container mx-auto py-10">
                        {
                            feaured?.slice(0, 6).map(feaur => <div key={feaur._id}>

                                < div className="rounded-md shadow-md bg-gray-900 dark:bg-gray-50 text-gray-100 dark:text-gray-800 transition hover:scale-105">
                                    <img src={feaur?.foodImage} alt={feaur?.foodImage} className="object-cover object-center w-full rounded-t-md h-72 bg-gray-500 dark:bg-gray-500" />
                                    <div className="flex flex-col justify-between p-6 space-y-8">
                                        <div className="space-y-2">
                                            <div className='flex  items-center justify-between'>
                                                <h2 className="text-3xl font-semibold tracking-wide">{feaur?.foodName}</h2>
                                                <p className={`
                                                        ${feaur?.foodStatus === "requested" ? "bg-cyan-600/60 px-2 rounded-full" : ""}
                                                        ${feaur?.foodStatus === "available" ? "bg-green-800 px-2 rounded-full" : ""}
                                                        `}>
                                                    {feaur?.foodStatus}</p>
                                            </div>
                                            <p title={feaur?.additionalNotes} className="text-gray-100 dark:text-gray-800">{feaur?.additionalNotes.slice(0, 70)}...</p>
                                            <p>Food Quantity: {feaur?.foodQuantity}</p>
                                            <p>Expire Date: {format(new Date(feaur?.expiredDateTime), "P")} </p>

                                        </div>
                                        <Link to={`/detals/${feaur?._id}`} type="button" className="flex items-center justify-center w-full p-3 font-semibold tracking-wide rounded-md border-2 hover:bg-rose-500/30 dark:text-gray-50">View Details</Link>
                                    </div>
                                </div>

                            </div>)
                        }
                    </div>

                    :
                    <div className="flex  flex-col justify-center items-center min-h-96">
                        <h1 className="text-4xl font-bold ">Data Not Found</h1>
                        <p><LuDatabase size={120}></LuDatabase> </p>
                    </div>
            }



        </>

    );
};

export default FeaturedFoods;