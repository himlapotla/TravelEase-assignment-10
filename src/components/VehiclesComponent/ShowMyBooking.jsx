import React from 'react'

const ShowMyBooking = ({ vehicles }) => {

    return (

        <div >
            <div className="card max-w-3xl mx-auto p-2 bg-white shadow-lg rounded-xl mt-10 border-3 border-amber-400">
                <div className="w-full h-80 overflow-hidden rounded-lg mb-4">
                    <img src={vehicles.coverImage} className="w-full h-full object-cover" />
                </div>

                <h2 className="text-2xl font-bold mb-2">Name: {vehicles.vehicleName}</h2>
                <h2 className="font-bold mb-2">Owner: {vehicles.ownerName}</h2>
                <p><span className="font-semibold">Category:</span> {vehicles.category}</p>
                <p><span className="font-semibold">Price Per Day:</span> {vehicles.pricePerDay} BDT</p>
             
            </div>
        </div>
    )
}

export default ShowMyBooking