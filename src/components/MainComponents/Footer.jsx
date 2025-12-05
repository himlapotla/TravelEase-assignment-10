import React from 'react'
import { FaFacebook, FaInstagram, FaWhatsapp, FaYoutube } from 'react-icons/fa';

const Footer = () => {

    const submit = (e) => {
        e.preventDefault();
        e.target.reset();
    };

    return (
        <div className="w-full bg-gradient-to-r from-amber-400 to-amber-500 mt-16 pt-11 pb-4">

            <div className="text-center mb-6">
                <h2 className="text-3xl font-bold text-gray-800">Get In Touch</h2>
                <p className="text-gray-600 mt-1 text-xl">
                    To have our <span className="text-amber-700">latest</span> pet care services
                </p>
            </div>

            <form onSubmit={submit} className="flex justify-center">
                <div className="bg-white w-[60%] max-w-xl flex items-center p-3 rounded-xl shadow-xl">
                    <input
                        type="email"
                        placeholder="Type your Email Address"
                        className="flex-1 text-gray-700 outline-none"
                    />
                    <button
                        type="submit"
                        className="px-5 py-2 rounded-lg text-white font-semibold bg-amber-400 hover:bg-amber-500 transition"
                    >
                        Send Now
                    </button>
                </div>
            </form>

            <div className="mt-14 px-10 md:px-20">
                <div className="grid grid-cols-1 md:grid-cols-5 gap-10 text-gray-700">

                    <div>
                        <h3 className="font-bold text-2xl text-amber-700">TravelEase</h3>
                        <p className="text-gray-500 mt-2">
                            Rent the vehicles in your afordable price.
                        </p>


                    </div>

                    <div>
                        <h4 className="font-bold mb-3 text-lg"> Social Links </h4>
                        <ul className="space-y-2 text-gray-600">
                            <li className="hover:text-amber-500 cursor-pointer flex items-center gap-1"> <FaFacebook /> Facebook</li>
                            <li className="hover:text-amber-500 cursor-pointer flex items-center gap-1"> <FaYoutube /> Youtube</li>
                            <li className="hover:text-amber-500 cursor-pointer flex items-center gap-1"> <FaInstagram />
                                Instagram</li>
                            <li className="hover:text-amber-500 cursor-pointer flex items-center gap-1"> <FaWhatsapp /> Whatsapp</li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="font-bold mb-3 text-lg">Services</h4>
                        <ul className="space-y-2 text-gray-600">
                            <li className="hover:text-amber-500 cursor-pointer">Home</li>
                            <li className="hover:text-amber-500 cursor-pointer">Products</li>
                            <li className="hover:text-amber-500 cursor-pointer">Category</li>
                            <li className="hover:text-amber-500 cursor-pointer">About</li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="font-bold mb-3 text-lg">Contact Info</h4>
                        <ul className="space-y-2 text-gray-600">
                            <li>Email: support@TravelEase.com</li>
                            <li>Phone: +880 1234-567890</li>
                            <li>Address: Dhaka, Bangladesh</li>
                            <li>Working Hours: 9 AM – 8 PM</li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="font-bold mb-3 text-lg">Legal</h4>
                        <ul className="space-y-2 text-gray-600">
                            <li className="hover:text-amber-500 cursor-pointer">Privacy Policy</li>
                            <li className="hover:text-amber-500 cursor-pointer">Terms & Conditions</li>
                            <li className="hover:text-amber-500 cursor-pointer">Refund Policy</li>
                            <li className="hover:text-amber-500 cursor-pointer">Support</li>
                        </ul>
                    </div>

                </div>
            </div>

            <div className="text-center mt-10 text-gray-600 text-sm">
                © 2025 TravelEase. All rights reserved.
            </div>

        </div>
    );
};

export default Footer