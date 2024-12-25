import axios from "axios"
import { useContext, useEffect } from "react";
import { AuthContext } from "../Provaider/AuthProvaider";
import { useNavigate } from "react-router-dom";

const axiosSecure = axios.create({
    baseURL: import.meta.env.VITE_API_URL,
    withCredentials: true
});

const useAxiosSecure = () => {
    const navigat = useNavigate()
    const { handalLogout } = useContext(AuthContext)

    useEffect(() => {

        axiosSecure.interceptors.response.use(
            res => {
                return res
            },
            async error => {
                console.log('error caught from our very own axios interceptor--> ', error.response);

                if (error.response.status === 401 || error.response.status === 403) {
                    // logout
                    handalLogout()
                    // navigat to login
                    navigat('/login')
                }
            }
        )
    }, [handalLogout, navigat])
    return axiosSecure;

}
export default useAxiosSecure;