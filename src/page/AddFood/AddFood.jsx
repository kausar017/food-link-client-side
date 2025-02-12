import React, { useContext, useEffect, useState } from 'react';
import Swal from 'sweetalert2';
import { AuthContext } from '../../Provaider/AuthProvaider';

import { useLocation, useNavigate } from 'react-router-dom';
import bg from '../../assets/bg/Sprinkle.svg'
import useAxiosSecure from '../../hooks/useAxiosSecure';
import { useMutation } from '@tanstack/react-query';

const AddFood = () => {

     useEffect(() => {
            document.title = "Food Link | Add Food";
        }, []);

    const axiosSecure = useAxiosSecure()

    const { isPending, mutateAsync } = useMutation({
        mutationFn: async data => {
            await axiosSecure.post(`/food`, data)
        }
    })

    const navigat = useNavigate();
    const location = useLocation();
    const from = location?.state?.pathname || '/available';

    const [formData, setFormData] = useState({
        foodName: '',
        foodImage: '',
        foodQuantity: '',
        pickupLocation: '',
        expiredDateTime: '',
        additionalNotes: '',
    });

    const [foodStatus] = useState('available');

    const { user } = useContext(AuthContext)

    // handle form input change
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        // Validation checks
        if (!formData.foodName || !formData.foodImage || !formData.foodQuantity || !formData.pickupLocation || !formData.expiredDateTime) {
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Please fill in all required fields!',
            });
            return;
        }

        if (formData.foodQuantity <= 0) {
            Swal.fire({
                icon: 'error',
                title: 'Invalid Quantity',
                text: 'Food quantity must be greater than 0.',
            });
            return;
        }


        const foodData = {
            ...formData,
            foodStatus,
            donatorImage: (user?.photoURL),
            donatorName: (user?.displayName),
            donatorEmail: (user?.email),
        };
        // mack a post request useing use mutation hook
        try {
            // const { data } = await axiosSecure.post(`/food`, foodData)
            await mutateAsync(foodData)
            // console.log(data);
            Swal.fire('Food added successfully!');
            navigat(from)
        } catch (error) {
            Swal.fire({
                icon: 'error',
                title: 'Error',
                text: 'There was an error adding the food.',
            });
        }

        // Reset form after submission
        setFormData({
            foodName: '',
            foodImage: '',
            foodQuantity: '',
            pickupLocation: '',
            expiredDateTime: '',
            additionalNotes: '',
        });
    };

    return (

        <div className="flex items-center justify-center py-[120px] min-h-screen px-2"
            style={{
                backgroundImage: `url(${bg})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                // height: "100vh",
                width: "100%",

            }}
        >
            <div className="backdrop-blur-xl border-2 p-8 rounded-lg shadow-md w-full max-w-xl">
                <h1 className="text-2xl font-bold mb-6 text-center text-white">Add Food</h1>
                <form onSubmit={handleSubmit}>
                    {/* Food Name */}
                    <div className="mb-4">
                        <label htmlFor="foodName" className="block text-sm font-medium text-white">Food Name</label>
                        <input
                            type="text"
                            placeholder='Food Name'
                            name="foodName"
                            value={formData.foodName}
                            onChange={handleChange}
                            className="mt-1 block w-full p-2 border rounded-md"
                            required
                        />
                    </div>

                    {/* Food Image */}
                    <div className="mb-4">
                        <label htmlFor="foodImage" className="block text-sm font-medium text-white">Food Image URL</label>
                        <input
                            type="url"
                            placeholder='Food Image URL'
                            name="foodImage"
                            value={formData.foodImage}
                            onChange={handleChange}
                            className="mt-1 block w-full p-2 border rounded-md"
                            required
                        />
                    </div>

                    {/* Food Quantity */}
                    <div className="mb-4">
                        <label htmlFor="foodQuantity" className="block text-sm font-medium text-white">Food Quantity</label>
                        <input
                            type="number"
                            placeholder='Food Quantity'
                            name="foodQuantity"
                            value={formData.foodQuantity}
                            onChange={handleChange}
                            className="mt-1 block w-full p-2 border rounded-md"
                            required
                        />
                    </div>

                    {/* Pickup Location */}
                    <div className="mb-4">
                        <label htmlFor="pickupLocation" className="block text-sm font-medium text-white">Pickup Location</label>
                        <input
                            type="text"
                            placeholder='Pickup Location'
                            name="pickupLocation"
                            value={formData.pickupLocation}
                            onChange={handleChange}
                            className="mt-1 block w-full p-2 border rounded-md"
                            required
                        />
                    </div>

                    {/* Expired Date/Time */}
                    <div className="mb-4">
                        <label htmlFor="expiredDateTime" className="block text-sm font-medium text-white">Expired Date/Time</label>
                        <input
                            type="datetime-local"
                            id="expiredDateTime"
                            name="expiredDateTime"
                            value={formData.expiredDateTime}
                            onChange={handleChange}
                            className="mt-1 block w-full p-2 border rounded-md"
                            required
                        />
                    </div>

                    {/* Additional Notes */}
                    <div className="mb-4">
                        <label htmlFor="additionalNotes" className="block text-sm font-medium text-white">Additional Notes</label>
                        <textarea
                            placeholder='Additional Notes'
                            name="additionalNotes"
                            value={formData.additionalNotes}
                            onChange={handleChange}
                            className="mt-1 block w-full p-2 border rounded-md"
                        ></textarea>
                    </div>

                    {/* Add Button */}
                    <div>
                        <button
                            type="submit"
                            className="w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600"
                        >
                            {isPending ? "Saving....." : "Add Food"}
                        </button>
                    </div>
                </form>
            </div>
        </div>

    );
};

export default AddFood;


