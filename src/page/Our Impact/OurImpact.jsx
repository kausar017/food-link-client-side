import { motion } from 'framer-motion'

const OurImpact = () => {

    return (
        <div>
            <section className="our-impact bg-green-100 py-10">
                <div className="container mx-auto px-6">
                    <div

                    >
                        <motion.h2 className="text-3xl font-bold text-center text-blue-700 mb-8">Our Impact </motion.h2>

                        <p className="text-center text-gray-600 mb-6 text-xl">
                            Together, we’ve made a significant impact across various locations. Here’s a glimpse of where your generosity has reached.
                        </p>

                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-8">
                        {/* Location 1 */}
                        <div className="impact-card bg-white shadow-lg rounded-lg p-6 text-center transition hover:scale-105">
                            <img
                                src="https://www.narayanseva.org/wp-content/uploads/2023/10/Blog68.jpg"
                                alt="Dhaka Impact"
                                referrerPolicy="no-referrer"
                                className="w-full h-40 object-cover rounded-md mb-4"
                            />
                            <h3 className="text-2xl font-semibold text-blue-800 mb-4">Dhaka</h3>
                            <p className="text-gray-600">Meals Donated: <strong>1,200+</strong></p>
                            <p className="text-gray-600">People Helped: <strong>800+</strong></p>
                        </div>

                        {/* Location 2 */}
                        <div className="impact-card bg-white shadow-lg rounded-lg p-6 text-center transition hover:scale-105 ">
                            <img
                                src="https://akshayachaitanya.org/public/featured-images/1720606791.jpg"
                                alt="Chittagong Impact"
                                referrerPolicy="no-referrer"
                                className="w-full h-40 object-cover rounded-md mb-4"
                            />
                            <h3 className="text-2xl font-semibold text-blue-800 mb-4">Chittagong</h3>
                            <p className="text-gray-600">Meals Donated: <strong>900+</strong></p>
                            <p className="text-gray-600">People Helped: <strong>600+</strong></p>
                        </div>

                        {/* Location 3 */}
                        <div className="impact-card bg-white shadow-lg rounded-lg p-6 text-center transition hover:scale-105">
                            <img
                                src="https://i0.wp.com/shreeayodhyajidham.com/wp-content/uploads/2022/03/Food-Donation-for-poor-people.jpg?fit=1000%2C1000&ssl=1"
                                alt="Sylhet Impact"
                                referrerPolicy="no-referrer"
                                className="w-full h-40 object-cover rounded-md mb-4"
                            />
                            <h3 className="text-2xl font-semibold text-blue-800 mb-4">Sylhet</h3>
                            <p className="text-gray-600">Meals Donated: <strong>700+</strong></p>
                            <p className="text-gray-600">People Helped: <strong>500+</strong></p>
                        </div>

                        {/* Location 4 */}
                        <div className="impact-card bg-white shadow-lg rounded-lg p-6 text-center transition hover:scale-105">
                            <img
                                src="https://t3.ftcdn.net/jpg/02/92/07/56/360_F_292075696_hGdSBQ9Bvf1jsaVMP2rTpuRr0VMATck0.jpg"
                                alt="Rajshahi Impact"
                                referrerPolicy="no-referrer"
                                className="w-full h-40 object-cover rounded-md mb-4"
                            />
                            <h3 className="text-2xl font-semibold text-blue-800 mb-4">Rajshahi</h3>
                            <p className="text-gray-600">Meals Donated: <strong>600+</strong></p>
                            <p className="text-gray-600">People Helped: <strong>400+</strong></p>
                        </div>

                        {/* Location 5 */}
                        <div className="impact-card bg-white shadow-lg rounded-lg p-6 text-center transition hover:scale-105">
                            <img
                                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSVwZNMTAS5nt07BIZm0l1heZrKFfEveTrPsZpSudI6yntkSNfTCEXrTzQBv3ajlpAGIMg&usqp=CAU"
                                alt="Khulna Impact"
                                referrerPolicy="no-referrer"
                                className="w-full h-40 object-cover rounded-md mb-4"
                            />
                            <h3 className="text-2xl font-semibold text-blue-800 mb-4">Khulna</h3>
                            <p className="text-gray-600">Meals Donated: <strong>800+</strong></p>
                            <p className="text-gray-600">People Helped: <strong>600+</strong></p>
                        </div>

                        {/* Location 6 */}
                        <div className="impact-card bg-white shadow-lg rounded-lg p-6 text-center transition hover:scale-105">
                            <img
                                src="https://media.istockphoto.com/id/1177156986/photo/free-food-for-the-homeless-and-the-hungry-food-donation-concepts.jpg?s=612x612&w=0&k=20&c=J_vrsDpsERIsyej_f0ApIwqOnDEWt1uqfj67LvxloGk="
                                alt="Barishal Impact"
                                referrerPolicy="no-referrer"
                                className="w-full h-40 object-cover rounded-md mb-4"
                            />
                            <h3 className="text-2xl font-semibold text-blue-800 mb-4">Barishal</h3>
                            <p className="text-gray-600">Meals Donated: <strong>500+</strong></p>
                            <p className="text-gray-600">People Helped: <strong>300+</strong></p>
                        </div>

                        {/* Location 7 */}
                        <div className="impact-card bg-white shadow-lg rounded-lg p-6 text-center transition hover:scale-105">
                            <img
                                src="https://t4.ftcdn.net/jpg/04/98/47/53/360_F_498475327_1fHyorA3Pf0PVeOaIBc5XcjKvliiZCrs.jpg"
                                alt="Rangpur Impact"
                                referrerPolicy="no-referrer"
                                className="w-full h-40 object-cover rounded-md mb-4"
                            />
                            <h3 className="text-2xl font-semibold text-blue-800 mb-4">Rangpur</h3>
                            <p className="text-gray-600">Meals Donated: <strong>650+</strong></p>
                            <p className="text-gray-600">People Helped: <strong>450+</strong></p>
                        </div>

                        {/* Location 8 */}
                        <div className="impact-card bg-white shadow-lg rounded-lg p-6 text-center transition hover:scale-105">
                            <img
                                src="https://files.quantummethod.org.bd/resize/700/-/media/image/article/article_image_give_to_those_who_have_less_than_you_then_ask_from_your_lord_20221227b.jpg"
                                alt="Gazipur Impact"
                                referrerPolicy="no-referrer"
                                className="w-full h-40 object-cover rounded-md mb-4"
                            />
                            <h3 className="text-2xl font-semibold text-blue-800 mb-4">Gazipur</h3>
                            <p className="text-gray-600">Meals Donated: <strong>750+</strong></p>
                            <p className="text-gray-600">People Helped: <strong>550+</strong></p>
                        </div>

                        {/* Location 9 */}
                        <div className="impact-card bg-white shadow-lg rounded-lg p-6 text-center transition hover:scale-105">
                            <img
                                src="https://static.vecteezy.com/system/resources/thumbnails/001/875/313/small/social-support-activities-free-vector.jpg"
                                alt="Narayanganj Impact"
                                referrerPolicy="no-referrer"
                                className="w-full h-40 object-cover rounded-md mb-4"
                            />
                            <h3 className="text-2xl font-semibold text-blue-800 mb-4">Narayanganj</h3>
                            <p className="text-gray-600">Meals Donated: <strong>1,000+</strong></p>
                            <p className="text-gray-600">People Helped: <strong>700+</strong></p>
                        </div>

                        {/* Location 10 */}
                        <div className="impact-card bg-white shadow-lg rounded-lg p-6 text-center transition hover:scale-105">
                            <img
                                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSUOCQRHg2oDPTqGYNAuz0hBSkaJLiDLYhmnA&s"
                                alt="Comilla Impact"
                                referrerPolicy="no-referrer"
                                className="w-full h-40 object-cover rounded-md mb-4"
                            />
                            <h3 className="text-2xl font-semibold text-blue-800 mb-4">Comilla</h3>
                            <p className="text-gray-600">Meals Donated: <strong>850+</strong></p>
                            <p className="text-gray-600">People Helped: <strong>600+</strong></p>
                        </div>
                    </div>

                    <div className="text-center mt-8">
                        <button className="bg-blue-600 text-white px-6 py-3 rounded hover:bg-blue-700">
                            View All Locations
                        </button>
                    </div>
                </div>
            </section >

        </div >
    );
};

export default OurImpact;