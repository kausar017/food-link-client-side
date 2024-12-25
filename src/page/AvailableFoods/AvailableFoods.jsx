import axios from "axios";
import { useEffect, useState } from "react";
import AvailableFoodsCard from "./AvailableFoodsCard";
import { LuDatabase } from "react-icons/lu";
import bg from '../../assets/bg/Sprinkle.svg'
import useAxiosSecure from "../../hooks/useAxiosSecure";

const AvailableFoods = () => {
    const axiosSecure = useAxiosSecure()

    const [foods, setFoods] = useState([])
    const [search, setSearch] = useState('')
    const [sort, setSort] = useState('')

    // console.log(search);

    const [isThreeColumn, setIsThreeColumn] = useState(true);

    useEffect(() => {
        const fatchAllData = async () => {
            const { data } = await axiosSecure.get(`/foodData?search=${search}&sort=${sort}`)
            const filtarData = data.filter(d => d.foodStatus === 'available')
            setFoods(filtarData)
        }
        fatchAllData()
    }, [search, sort])

    const handaleSort = () => {
        setSort()
    }

    const toggleLayout = () => {
        setIsThreeColumn(!isThreeColumn);
        console.log("Layout toggled:", !isThreeColumn);
    };


    return (

        <div className="min-h-screen"
            style={{
                backgroundImage: `url(${bg})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                // height: "100vh",
                width: "100%",

            }}
        >
            <div className="py-[120px] container mx-auto">
                <div className="py-5">
                    <h1 className="text-4xl font-bold text-center text-white">Available Foots </h1>
                    <div className="w-80 mx-auto h-1 bg-white"></div>

                </div>
                <div className="flex lg:flex-row md:flex-col sm:flex-col max-sm:flex-col justify-center lg:justify-around md:justify-around items-center space-y-3">
                    <div>
                        <button onClick={toggleLayout} className="text-white border-2 p-2 rounded-xl lg:block max-sm:hidden sm:hidden"> Change Layout</button>
                    </div>
                    <div>
                        <h1 className="text-2xl text-white">Available Foots: {foods.length}</h1>
                    </div>
                    <div>
                        <fieldset className="w-full space-y-1 text-gray-100 dark:text-gray-800">
                            <label htmlFor="Search" className="hidden">Search</label>
                            <div className="relative">
                                <span className="absolute inset-y-0 left-0 flex items-center pl-2">
                                    <button type="button" title="search" className="p-1 focus:outline-none focus:ring">
                                        <svg fill="currentColor" viewBox="0 0 512 512" className="w-4 h-4 text-gray-800 dark:text-gray-800">
                                            <path d="M479.6,399.716l-81.084-81.084-62.368-25.767A175.014,175.014,0,0,0,368,192c0-97.047-78.953-176-176-176S16,94.953,16,192,94.953,368,192,368a175.034,175.034,0,0,0,101.619-32.377l25.7,62.2L400.4,478.911a56,56,0,1,0,79.2-79.195ZM48,192c0-79.4,64.6-144,144-144s144,64.6,144,144S271.4,336,192,336,48,271.4,48,192ZM456.971,456.284a24.028,24.028,0,0,1-33.942,0l-76.572-76.572-23.894-57.835L380.4,345.771l76.573,76.572A24.028,24.028,0,0,1,456.971,456.284Z"></path>
                                        </svg>
                                    </button>
                                </span>
                                <input onChange={e => setSearch(e.target.value)} type="search" name="Search" placeholder="Search..." className="md:w-96 py-2 pl-10 text-sm rounded-md sm:w-auto focus:outline-none  bg-white dark:bg-gray-100 text-red-500 dark:text-gray-800 focus:bg-gray-00 focus:dark:bg-gray-50 focus:border-rose-400 focus:dark:border-rose-600" />
                            </div>
                        </fieldset>
                    </div>
                    <div>
                        <button onClick={handaleSort} className=" p-2 transition hover:scale-110 rounded-md border-2 border-white text-white">Sort Food</button>
                    </div>
                </div>

                {
                    foods.length ? (
                        <div
                            className={`grid gap-5 items-center m-3 ${isThreeColumn ? "lg:grid-cols-3 md:grid-cols-2" : "lg:grid-cols-2 md:grid-cols-1"
                                }`}
                        >
                            {foods?.map(food => (
                                <AvailableFoodsCard key={food._id} food={food}></AvailableFoodsCard>
                            ))}
                        </div>
                    ) : (
                        <div className="flex flex-col justify-center items-center min-h-96">
                            <h1 className="text-4xl font-bold text-white">Data Not Found</h1>
                            <p>
                                <LuDatabase size={120} color="white"></LuDatabase>
                            </p>
                        </div>
                    )
                }
            </div>
        </div>

    );
};

export default AvailableFoods;