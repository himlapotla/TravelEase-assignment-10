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

                axios.delete(`https://travel-ease-server-hazel.vercel.app/delete/${id}`)
                    .then(res => {
                        Swal.fire({
                            title: "Deleted!",
                            text: "Your data has been deleted. Please refresh the page.",
                            icon: "success"
                        });
                    })


            }
        });
    }

    return ( //w-full h-60 overflow-hidden rounded-lg mb-4

        <div className="card p-2 bg-white shadow-lg rounded-xl mt-10 border-3 border-amber-400">

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

            < div className='flex gap-1' >
                <Link className='flex-1' to={`/detailVehicles/${vehicles._id}`}> <button className='btn font-semibold bg-amber-400 w-full my-2'> View </button> </Link>

                <Link className='flex-1' to={`/update/${vehicles._id}`}> <button className='btn font-semibold bg-amber-400 w-full my-2'> Update  </button> </Link>

                <button onClick={() => handleDelete(vehicles._id)} className='flex-1 btn font-semibold bg-amber-400 w-full my-2'> Delete </button>
            </div >

        </div>


    )
}


export default ShowMyVehicles


