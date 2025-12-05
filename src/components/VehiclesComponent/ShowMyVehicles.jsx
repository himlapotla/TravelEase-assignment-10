import axios from 'axios'
import React, { useContext, useEffect, useState } from 'react'
import { Link } from 'react-router'
import { AllContext } from '../Provider/AuthProvider'
import Swal from 'sweetalert2'
import Empty from '../Empty'

const ShowMyVehicles = ({ vehicles }) => {

    const handleDelete = (id) => {

        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {

            if (result.isConfirmed) {

                axios.delete(`http://localhost:3000/delete/${id}`)
                    .then(res => {
                        Swal.fire({
                            title: "Deleted!",
                            text: "Your file has been deleted. Please refresh the page.",
                            icon: "success"
                        });
                    })


            }
        });
    }

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

            <div className='flex '>
                <Link className='flex-1' to={`/detailVehicles/${vehicles._id}`}> <button className='btn font-semibold bg-amber-400 w-full my-2'> View </button> </Link>

                <Link className='flex-1' to={`/update/${vehicles._id}`}> <button className='btn font-semibold bg-amber-400 w-full my-2'> Update  </button> </Link>

                <button onClick={() => handleDelete(vehicles._id)} className='flex-1 btn font-semibold bg-amber-400 w-full my-2'> Delete </button>
            </div>

        </div>


    )
}


export default ShowMyVehicles