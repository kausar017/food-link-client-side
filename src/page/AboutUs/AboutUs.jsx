
const AboutUs = () => {
    return (
        <div>
            <section className="about-us bg-green-100 py-10 border-t-4 border-black">
                <div className="container mx-auto px-6">
                    <h2 className="text-3xl font-bold text-center text-green-800 mb-8">About Us</h2>
                    <div className="flex flex-col md:flex-row items-center gap-8">
                        {/* Image */}
                        <div className="md:w-1/2">
                            <img
                                src="https://nss-new-add-media.s3.ap-south-1.amazonaws.com/NSS_USA_site/2023/10/16104028/blogfooddonationdrice.jpg"
                                alt="Food Donation"
                                className="w-full rounded-lg shadow-lg"
                            />
                        </div>

                        {/* Text Content */}
                        <div className="md:w-1/2 text-gray-700">
                            <h3 className="text-2xl font-semibold text-green-700 mb-4">
                                Join Us in Fighting Hunger
                            </h3>
                            <p className="mb-4">
                                At <strong>Food For All</strong>, our mission is to bridge the gap between food waste and hunger. Every day, countless people go hungry while edible food goes to waste. We aim to change this by creating a platform where food donors and recipients can connect.
                            </p>
                            <p className="mb-4">
                                Whether you're an individual, restaurant, or organization, you can contribute by donating excess food to those in need. Together, we can create a community where no one has to sleep hungry.
                            </p>
                            <div className="flex justify-around text-center my-8">
                                <div>
                                    <h3 className="text-3xl font-bold text-green-700">8,950+</h3>
                                    <p>Meals Donated</p>
                                </div>
                                <div>
                                    <h3 className="text-3xl font-bold text-green-700">4,250+</h3>
                                    <p>Donors</p>
                                </div>
                                <div>
                                    <h3 className="text-3xl font-bold text-green-700">6,700+</h3>
                                    <p>People Helped</p>
                                </div>
                            </div>
                            <button className="bg-green-600 text-white px-6 py-2 rounded hover:bg-green-700">
                                Learn More
                            </button>
                        </div>
                    </div>
                </div>
            </section>

        </div>
    );
};

export default AboutUs;