import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { AuthContext } from "../../Provaider/AuthProvaider";

const Detals = () => {

    const [detals, setDetals] = useState({})

    const { user } = useContext(AuthContext)


    console.log(detals);
    const params = useParams()

    const { foodName, foodImage,foodQuantity,pickupLocation,expiredDateTime  } = detals || {}


    // {
    //     "_id": "67681f9227c2214e4f8a36ff",
    //     "foodName": "Abra Tran",
    //     "foodImage": "https://i.postimg.cc/NfNfPHWT/juicy-cheeseburger-wooden-cutting-board-9975-24326.jpg",
    //     "foodQuantity": "130",
    //     "pickupLocation": "Libero aut sed qui s",
    //     "expiredDateTime": "1998-12-08T10:44",
    //     "additionalNotes": "Holisticly strategize enabled innovation with client-based imperatives. Authoritatively leverage existing.",
    //     "foodStatus": "available",
    //     "donatorImage": "https://lh3.googleusercontent.com/a/ACg8ocJBAjHsJzAHA_n9p6jMCUkEiahSCGKLpp5SztPj_R-WHOuS8uPabA=s96-c",
    //     "donatorName": "MD:Kausar Mia",
    //     "donatorEmail": "mdkousarmia71@gmail.com"
    // }


    useEffect(() => {
        const fatchDetalsData = async () => {
            const { data } = await axios.get(`${import.meta.env.VITE_API_URL}/foodData/${params.id}`)
            setDetals(data)
        }
        fatchDetalsData()
    }, [])

    return (
        // <div className="py-[120px]">
        //     <div className="modal">
        //         <div className="modal-box">
        //             <h3 className="text-lg font-bold">Request Food</h3>
        //             <form className="space-y-4">
        //                 <div className="form-control">
        //                     <label className="label">Food Name</label>
        //                     <input
        //                         type="text"
        //                         value={foodName}
        //                         readOnly
        //                         className="input input-bordered"
        //                     />
        //                 </div>
        //                 <div className="form-control">
        //                     <label className="label">Food Image</label>
        //                     <img
        //                         src={foodImage}
        //                         alt={foodName}
        //                         className="rounded-lg w-full h-40 object-cover"
        //                     />
        //                 </div>
        //                 <div className="form-control">
        //                     <label className="label">Food ID</label>
        //                     <input
        //                         type="text"
        //                         value={foodId}
        //                         readOnly
        //                         className="input input-bordered"
        //                     />
        //                 </div>
        //                 <div className="form-control">
        //                     <label className="label">Donator Email</label>
        //                     <input
        //                         type="text"
        //                         value={donatorEmail}
        //                         readOnly
        //                         className="input input-bordered"
        //                     />
        //                 </div>
        //                 <div className="form-control">
        //                     <label className="label">Donator Name</label>
        //                     <input
        //                         type="text"
        //                         value={donatorName}
        //                         readOnly
        //                         className="input input-bordered"
        //                     />
        //                 </div>
        //                 <div className="form-control">
        //                     <label className="label">User Email</label>
        //                     <input
        //                         type="text"
        //                         value={user?.email}
        //                         readOnly
        //                         className="input input-bordered"
        //                     />
        //                 </div>
        //                 <div className="form-control">
        //                     <label className="label">Request Date</label>
        //                     <input
        //                         type="text"
        //                         value={new Date(currentDate).toLocaleString()}
        //                         readOnly
        //                         className="input input-bordered"
        //                     />
        //                 </div>
        //                 <div className="form-control">
        //                     <label className="label">Pickup Location</label>
        //                     <input
        //                         type="text"
        //                         value={pickupLocation}
        //                         readOnly
        //                         className="input input-bordered"
        //                     />
        //                 </div>
        //                 <div className="form-control">
        //                     <label className="label">Expire Date</label>
        //                     <input
        //                         type="text"
        //                         value={new Date(expiredDateTime).toLocaleString()}
        //                         readOnly
        //                         className="input input-bordered"
        //                     />
        //                 </div>
        //                 <div className="form-control">
        //                     <label className="label">Additional Notes</label>
        //                     <textarea
        //                         name="additionalNotes"
        //                         className="textarea textarea-bordered"
        //                         defaultValue={additionalNotes || ""}
        //                     ></textarea>
        //                 </div>
        //                 <div className="modal-action">
        //                     <button type="submit" className="btn btn-primary">
        //                         Request
        //                     </button>
        //                 </div>
        //             </form>
        //         </div>
        //     </div>
        // </div>
        <div></div>
    );
};

export default Detals;




// import React from "react";

// const Detals = ({ food, user, onRequest }) => {
//     const {
//         foodName,
//         foodImage,
//         _id: foodId,
//         donatorEmail,
//         donatorName,
//         pickupLocation,
//         expiredDateTime,
//         additionalNotes,
//     } = food || {};

//     const currentDate = new Date().toISOString();

//     const handleSubmit = (e) => {
//         e.preventDefault();
//         const requestData = {
//             foodName,
//             foodImage,
//             foodId,
//             donatorEmail,
//             donatorName,
//             userEmail: user?.email,
//             requestDate: currentDate,
//             pickupLocation,
//             expiredDateTime,
//             additionalNotes: e.target.additionalNotes.value,
//         };
//         onRequest(requestData); // Call the request function passed from parent
//     }
