import React from 'react'
import { Link } from 'react-router'

const ShowAllVehicles = ({ vehicles }) => {
    
    return (

        <div >

            <div className="card max-w-3xl mx-auto p-2 bg-white shadow-lg rounded-xl mt-0 border-3 border-amber-400 ">
                <div className="w-full h-60 overflow-hidden rounded-lg mb-4">
                    <img src={vehicles.coverImage} className="w-full h-full object-cover" />
                </div>

                <h2 className="text-xl font-bold mb-2">vehicle name: {vehicles.vehicleName}</h2>
                <p><span className="font-semibold">Owner:</span> {vehicles.ownerName || vehicles.owner}</p>
                <p><span className="font-semibold">Category:</span> {vehicles.category}</p>
                <p><span className="font-semibold">Price Per Day:</span> {vehicles.pricePerDay} BDT</p>
                <p><span className="font-semibold">Location:</span> {vehicles.location}</p>
                <p><span className="font-semibold">Availability:</span> {vehicles.availability}</p>
                <p className="mt-2"><span className="font-semibold">Description:</span> {vehicles.description}</p>

                <Link to={`/detailVehicles/${vehicles._id}`}> <button className='btn font-semibold bg-amber-400 w-full my-2'> View Details </button> </Link>

            </div>
        </div>

    )
}

export default ShowAllVehicles




