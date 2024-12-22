
import { Outlet } from "react-router-dom";
import FeaturedFoods from "../FeaturedFoods/FeaturedFoods";
import Slaider from "../Slaider/Slaider";

const HomePage = () => {
    return (
        <div>
            {/* carasol */}
            <Slaider></Slaider>
            {/* Featured Foods */}
            <Outlet></Outlet>
            <FeaturedFoods></FeaturedFoods>
        </div>
    );
};

export default HomePage;