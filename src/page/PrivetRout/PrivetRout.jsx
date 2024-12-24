import { useContext } from "react";
import { AuthContext } from "../../Provaider/AuthProvaider";
import { Navigate, useLocation } from "react-router-dom";
import Loader from "../Loader/Loader";

const PrivetRout = ({ children }) => {

    const location = useLocation()

    const { user, looder } = useContext(AuthContext)
    if (looder) {
        return <Loader></Loader>
    }
    if (!user) {
        return <Navigate state={location?.pathname} to="/login"></Navigate>
    }

    return children;
};

export default PrivetRout;