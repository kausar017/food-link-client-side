import axios from "axios";
import { useEffect, useState } from "react";
import AvailableFoodsCard from "./AvailableFoodsCard";
import { LuDatabase } from "react-icons/lu";
import Loader from "../Loader/Loader";

const AvailableFoods = () => {
  const [foods, setFoods] = useState([]);
  const [search, setSearch] = useState("");
  const [sort, setSort] = useState("");
  const [loading, setLoading] = useState(false);
  const [isThreeColumn, setIsThreeColumn] = useState(true);

  useEffect(() => {
    const fetchAllData = async () => {
      setLoading(true);
      try {
        const { data } = await axios.get(
          `${
            import.meta.env.VITE_API_URL
          }/foodData?search=${search}&sort=${sort}`
        );
        const filteredData = data.filter((d) => d.foodStatus === "available");
        setFoods(filteredData);
      } catch (error) {
        console.error("Error fetching data", error);
      } finally {
        setLoading(false);
      }
    };
    fetchAllData();
  }, [search, sort]);

  const handaleSort = () => {
    setSort();
  };

  const toggleLayout = () => {
    setIsThreeColumn(!isThreeColumn);
    // console.log("Layout toggled:", !isThreeColumn);
  };

  useEffect(() => {
    document.title = "Available Foods";
  }, []);
  return (
    <div className="min-h-screen">
      <div className="py-[120px] container mx-auto">
        <div className="py-5">
          <h1 className="text-4xl font-bold text-center text-white">
            Available Foods{" "}
          </h1>
          <div className="w-80 mx-auto h-1 bg-white"></div>
        </div>
        <div className="flex lg:flex-row md:flex-col sm:flex-col max-sm:flex-col justify-center lg:justify-around md:justify-around items-center space-y-3">
          <div>
            <button
              onClick={toggleLayout}
              className="text-white border-2 p-2 rounded-md lg:block max-sm:hidden sm:hidden hover:shadow-lg hover:shadow-blue-600 hover:scale-105"
            >
             
              Change Layout
            </button>
          </div>
          <div>
            <h1 className="text-2xl text-white">
              Available Foots:{" "}
              <span className="text-orange-400 font-bold">{foods?.length}</span>
            </h1>
          </div>
          <div>
            <fieldset className="w-full space-y-1 text-gray-100  hover:shadow-lg hover:shadow-blue-600">
              <label htmlFor="Search" className="hidden">
                Search
              </label>
              <div className="relative">
                <span className="absolute inset-y-0 left-0 flex items-center pl-2">
                  <button
                    type="button"
                    title="search"
                    className="p-1 focus:outline-none focus:ring"
                  >
                    <svg
                      fill="currentColor"
                      viewBox="0 0 512 512"
                      className="w-4 h-4 text-gray-800 "
                    >
                      <path d="M479.6,399.716l-81.084-81.084-62.368-25.767A175.014,175.014,0,0,0,368,192c0-97.047-78.953-176-176-176S16,94.953,16,192,94.953,368,192,368a175.034,175.034,0,0,0,101.619-32.377l25.7,62.2L400.4,478.911a56,56,0,1,0,79.2-79.195ZM48,192c0-79.4,64.6-144,144-144s144,64.6,144,144S271.4,336,192,336,48,271.4,48,192ZM456.971,456.284a24.028,24.028,0,0,1-33.942,0l-76.572-76.572-23.894-57.835L380.4,345.771l76.573,76.572A24.028,24.028,0,0,1,456.971,456.284Z"></path>
                    </svg>
                  </button>
                </span>
                <input
                  onChange={(e) => setSearch(e.target.value)}
                  type="search"
                  name="Search"
                  placeholder="Search..."
                  className="md:w-96 py-2 pl-10 text-sm rounded-md sm:w-auto focus:outline-none  bg-white  text-red-500  focus:bg-gray-00 focus: "
                />
              </div>
            </fieldset>
          </div>
          <div>
            <button
              onClick={handaleSort}
              className=" p-2 transition hover:scale-105 rounded-md border-2  text-white hover:shadow-lg hover:shadow-blue-600"
            >
              Sort Food
            </button>
          </div>
        </div>

        {loading ? (
          <Loader />
        ) : foods.length > 0 ? (
          <div
            className={`grid gap-5 items-center m-3 py-5 ${
              isThreeColumn
                ? "xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2"
                : "lg:grid-cols-3 md:grid-cols-1"
            }`}
          >
            {foods.map((food) => (
              <AvailableFoodsCard key={food._id} food={food} />
            ))}
          </div>
        ) : (
          <div className="flex flex-col justify-center items-center min-h-96">
            <h1 className="text-4xl font-bold text-white">Data Not Found</h1>
            <LuDatabase size={120} color="white" />
          </div>
        )}
      </div>
    </div>
  );
};

export default AvailableFoods;
