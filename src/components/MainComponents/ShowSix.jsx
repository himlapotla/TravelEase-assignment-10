import React, { useEffect } from 'react'

const ShowSix = ({ vehicles }) => {

    return (

        <div >

            <div className="max-w-3xl mx-auto p-2 bg-white shadow-lg rounded-xl mt-10 border-3 border-amber-400">
                <div className="w-full h-60 overflow-hidden rounded-lg mb-4">
                    <img src={vehicles.coverImage} className="w-full h-full object-cover" />
                </div>

                <h2 className="text-2xl font-bold mb-2">{vehicles.vehicleName}</h2>
                <p><span className="font-semibold">Owner:</span> {vehicles.ownerName || vehicles.owner}</p>
                <p><span className="font-semibold">Category:</span> {vehicles.category}</p>
                <p><span className="font-semibold">Price Per Day:</span> {vehicles.pricePerDay} BDT</p>
                <p><span className="font-semibold">Location:</span> {vehicles.location}</p>
                <p><span className="font-semibold">Availability:</span> {vehicles.availability}</p>
                <p className="mt-2"><span className="font-semibold">Description:</span> {vehicles.description}</p>

            </div>
        </div>
    )
}

export default ShowSix

