
import React, { useContext, useState } from 'react';
import Swal from 'sweetalert2';
import { AuthContext } from '../../Provaider/AuthProvaider';
import axios from 'axios';
import { useLocation, useNavigate } from 'react-router-dom';

const AddFood = () => {

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

    // console.log(user);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const foodData = {
            ...formData,
            foodStatus,
            donatorImage: (user?.photoURL),
            donatorName: (user?.displayName),
            donatorEmail: (user?.email),
        };

        try {
            const { data } = await axios.post(`${import.meta.env.VITE_API_URL}/food`, foodData)
            console.log(data);
            Swal.fire('Food added successfully!');
            navigat(from)
        } catch (error) {
            Swal.error(error.massage);
        }



        // Mock saving data to the collection
        console.log('Food Data:', foodData);


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
        <div className="bg-gray-100 flex items-center justify-center pt-[120px]">
            <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-xl">
                <h1 className="text-2xl font-bold mb-6 text-center">Add Food</h1>
                <form onSubmit={handleSubmit}>
                    {/* Food Name */}
                    <div className="mb-4">
                        <label htmlFor="foodName" className="block text-sm font-medium text-gray-700">Food Name</label>
                        <input
                            type="text"
                            id="foodName"
                            name="foodName"
                            value={formData.foodName}
                            onChange={handleChange}
                            className="mt-1 block w-full p-2 border rounded-md"
                            required
                        />
                    </div>

                    {/* Food Image */}
                    <div className="mb-4">
                        <label htmlFor="foodImage" className="block text-sm font-medium text-gray-700">Food Image URL</label>
                        <input
                            type="url"
                            id="foodImage"
                            name="foodImage"
                            value={formData.foodImage}
                            onChange={handleChange}
                            className="mt-1 block w-full p-2 border rounded-md"
                            required
                        />
                    </div>

                    {/* Food Quantity */}
                    <div className="mb-4">
                        <label htmlFor="foodQuantity" className="block text-sm font-medium text-gray-700">Food Quantity</label>
                        <input
                            type="number"
                            id="foodQuantity"
                            name="foodQuantity"
                            value={formData.foodQuantity}
                            onChange={handleChange}
                            className="mt-1 block w-full p-2 border rounded-md"
                            required
                        />
                    </div>

                    {/* Pickup Location */}
                    <div className="mb-4">
                        <label htmlFor="pickupLocation" className="block text-sm font-medium text-gray-700">Pickup Location</label>
                        <input
                            type="text"
                            id="pickupLocation"
                            name="pickupLocation"
                            value={formData.pickupLocation}
                            onChange={handleChange}
                            className="mt-1 block w-full p-2 border rounded-md"
                            required
                        />
                    </div>

                    {/* Expired Date/Time */}
                    <div className="mb-4">
                        <label htmlFor="expiredDateTime" className="block text-sm font-medium text-gray-700">Expired Date/Time</label>
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
                        <label htmlFor="additionalNotes" className="block text-sm font-medium text-gray-700">Additional Notes</label>
                        <textarea
                            id="additionalNotes"
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
                            Add Food
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default AddFood;
