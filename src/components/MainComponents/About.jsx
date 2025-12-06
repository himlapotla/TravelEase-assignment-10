import React from "react";
import { Link } from "react-router";

const About = () => {
  return (
    <section className="max-w-7xl mx-auto px-6 py-16 grid grid-cols-1 md:grid-cols-2 gap-10 items-center">

      <div>
        <p className="text-4xl font-bold mb-4">Make Your Journey Easier with TravelEase</p>
        <p className="text-gray-600 text-lg leading-relaxed">
          TravelEase is your trusted platform for renting reliable vehicles with ease.
          Enjoy smooth bookings, flexible travel choices, and a comfortable ride experience—
          whether you're planning a weekend trip or simply need a car, bike or truck for the day.
        </p>

        <Link to={'/allVehicles'}> <button className="mt-6 px-6 py-3 btn bg-amber-400 text-white rounded-lg font-semibold shadow  duration-200">
          Explore Vehicles
        </button> </Link>
      </div>

      <div>
        <img
          src="https://images.unsplash.com/photo-1502877338535-766e1452684a"
          alt="TravelEase Car Rental"
          className="rounded-2xl shadow-lg w-full object-cover"
        />
      </div>

    </section>
  );
};

export default About
