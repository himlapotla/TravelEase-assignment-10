import React from 'react'
import { Link } from 'react-router'

const ShowMyVehicles = ({ vehicles }) => {
    return (



        <div className="max-w-sm w-full bg-white rounded-2xl shadow-lg p-3 mx-auto border-3 border-amber-400 h-full">

            <div className="w-full h-56 overflow-hidden rounded-xl mb-4">
                <img
                    src={vehicles.image}
                    alt={vehicles.name}
                    className="w-full h-full object-cover"
                />
            </div>

            <h2 className="text-xl font-semibold text-gray-800">vehicleName: {vehicles.vehicleName}</h2>
            <p className="text-sm text-emerald-600 font-medium">
                {vehicles.specialization}
            </p>

            <p className="text-gray-700 mt-2">
                <span className="font-semibold">Experience:</span> {vehicles.experience} years
            </p>

            <p className="text-gray-700">
                <span className="font-semibold">Education:</span> {vehicles.education}
            </p>

            <p className="text-gray-900 mt-3 font-semibold">
                Number: {vehicles.phone}
            </p>

            <Link to={`/update/${vehicles._id}`}> <button className='btn font-semibold bg-amber-400 w-full my-2'> Update Vehicle </button> </Link>

        </div>


    )
}

export default ShowMyVehicles