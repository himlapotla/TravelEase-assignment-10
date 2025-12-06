import axios from 'axios'
import React, { useContext } from 'react'
import { AllContext } from '../Provider/AuthProvider'
import { toast } from 'react-toastify'

const ShowDetails = ({ vehicles }) => {

    const {user} = useContext(AllContext)

    const handleBook = () => {

        const bookData = {
            vehicleName: vehicles.vehicleName,
            category: vehicles.category,
            pricePerDay: Number(vehicles.pricePerDay),
            coverImage: vehicles.coverImage,
            userEmail: user.email,
        }

        axios
            .post("https://travel-ease-server-hazel.vercel.app/post-book", bookData)
            .then((res) => {
                toast.success("This vehicle is booked.")
            })
    }

    return (
        <div >
            <div className="card max-w-3xl mx-auto p-2 bg-white shadow-lg rounded-xl mt-10 border-3 border-amber-400">
                <div className="w-full h-80 overflow-hidden rounded-lg mb-4">
                    <img src={vehicles.coverImage} className="w-full h-full object-cover" />
                </div>

                <h2 className="text-2xl font-bold mb-2">{vehicles.vehicleName}</h2>
                <p><span className="font-semibold">Owner:</span> {vehicles.ownerName || vehicles.owner}</p>
                <p><span className="font-semibold">Category:</span> {vehicles.category}</p>
                <p><span className="font-semibold">Price Per Day:</span> {vehicles.pricePerDay} BDT</p>
                <p><span className="font-semibold">Location:</span> {vehicles.location}</p>
                <p><span className="font-semibold">Availability:</span> {vehicles.availability}</p>
                <p className="mt-2"><span className="font-semibold">Description:</span> {vehicles.description}</p>

                {
                    vehicles.availability === "available" ?
                        (<button onClick={handleBook} className='btn font-semibold bg-amber-400 my-2'> Book Now </button>) :
                        (<button disabled className='btn font-semibold bg-amber-400 my-2'> Not for Book </button>)
                }
            </div>
        </div>
    )
}

export default ShowDetails

{/*  */ }