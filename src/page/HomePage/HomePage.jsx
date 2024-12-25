
import { Outlet } from "react-router-dom";
import FeaturedFoods from "../FeaturedFoods/FeaturedFoods";
import Slaider from "../Slaider/Slaider";
import AboutUs from "../AboutUs/AboutUs";
import OurImpact from "../Our Impact/OurImpact";

const HomePage = () => {
    return (
        <div>
            {/* carasol */}
            <Slaider></Slaider>
            {/* Featured Foods */}
            <Outlet></Outlet>
            {/* featured Food */}
            <FeaturedFoods></FeaturedFoods>
            {/* Our Impact */}
            <OurImpact></OurImpact>
            {/* About Us */}
            <AboutUs></AboutUs>
        </div>
    );
};

export default HomePage;