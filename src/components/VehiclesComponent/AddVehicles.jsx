import React, { useContext } from 'react'
import AllVehicles from './AllVehicles';
import { AllContext } from '../Provider/AuthProvider';
import axios from 'axios';
import { toast } from 'react-toastify';

const AddVehicles = () => {

  const { user } = useContext(AllContext)

  const handleAdd = (e) => {

    e.preventDefault();
    const form = e.target;
    const vehicleData = {
      vehicleName: form.vehicleName.value,
      ownerName: form.ownerName.value,
      category: form.category.value,
      pricePerDay: Number(form.pricePerDay.value),
      location: form.location.value,
      availability: form.availability.value,
      description: form.description.value,
      coverImage: form.coverImage.value,
      userEmail: form.userEmail.value,
    }

    axios
      .post("https://travel-ease-server-hazel.vercel.app/post-vehicles", vehicleData)
      .then((res) => {
        form.reset();
        toast.success("Vehicle is added successfully.")
      })

  }

  return (
    <div>
      <form onSubmit={handleAdd} className="max-w-2xl mx-auto p-6 bg-white shadow-xl rounded-xl space-y-3 mt-10">
        <p className='text-3xl font-bold'>Add your Vehicles</p>
        {/* Vehicle Name */}
        <div>
          <label className="block font-semibold mb-1">Vehicle Name</label>
          <input
            type="text"
            name="vehicleName"
            placeholder="Enter vehicle name"
            className="w-full p-3 border rounded-lg"
          />
        </div>

        {/* Owner Name */}
        <div>
          <label className="block font-semibold mb-1">Owner Name</label>
          <input
            type="text"
            name="ownerName"
            placeholder="Enter owner name"
            className="w-full p-3 border rounded-lg"
          />
        </div>

        {/* Category */}
        <div>
          <label className="block font-semibold mb-1">Category</label>
          <select
            name="category"
            className="w-full p-3 border rounded-lg"
            defaultValue=""
          >
            <option value="" disabled>Select Category</option>
            <option value="Car">Car</option>
            <option value="Bike">Bike</option>
            <option value="Truck">Truck</option>
            <option value="SUV">SUV</option>
            <option value="Electric">Electric</option>
            <option value="Van">Van</option>
          </select>
        </div>


        {/* Price Per Day */}
        <div>
          <label className="block font-semibold mb-1">Price Per Day</label>
          <input
            type="number"
            name="pricePerDay"
            placeholder="Enter rental price per day"
            className="w-full p-3 border rounded-lg"
          />
        </div>

        {/* Location */}
        <div>
          <label className="block font-semibold mb-1">Location</label>
          <input
            type="text"
            name="location"
            placeholder="City or Area"
            className="w-full p-3 border rounded-lg"
          />
        </div>

        {/* Availability */}
        <div>
          <label className="block font-semibold mb-1">Availability</label>
          <select
            name="availability"
            className="w-full p-3 border rounded-lg"
          >
            <option value="">Select availability</option>
            <option value="available">Available</option>
            <option value="not_available">Not Available</option>
          </select>
        </div>

        {/* Description */}
        <div>
          <label className="block font-semibold mb-1">Description</label>
          <textarea
            name="description"
            placeholder="Write vehicle details..."
            className="w-full p-3 border rounded-lg h-28"
          ></textarea>
        </div>

        {/* Cover Image */}
        <div>
          <label className="block font-semibold mb-1">Cover Image (URL)</label>
          <input
            type="text"
            name="coverImage"
            placeholder="Enter image URL"
            className="w-full p-3 border rounded-lg"
          />
        </div>

        {/* User Email */}
        <div>
          <label className="block font-semibold mb-1">User Email</label>
          <input
            type="email"
            name="userEmail"
            defaultValue={user && user.email}
            className="w-full p-3 border rounded-lg"
          />
        </div>

        {/* Submit */}
        <button
          type="submit"
          className="w-full py-3 bg-amber-400 text-white font-semibold rounded-lg"
        >
          Submit Vehicle
        </button>
      </form>
    </div>
  )
}

export default AddVehicles