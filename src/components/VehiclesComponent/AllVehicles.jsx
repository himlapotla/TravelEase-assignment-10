import axios from 'axios'
import React, { useEffect, useState } from 'react'
import ShowAllVehicles from './ShowAllVehicles'

const AllVehicles = () => {

  const [vehicles, setVehicles] = useState([])

  useEffect(() => {
    axios.get('http://localhost:3000/show-all-vehicles')
      .then(res => {

        setVehicles(res.data)
        console.log(res.data);
        
      })
  }, [])

  return (
    <div className='grid grid-cols-4 w-11/12 mx-auto gap-3 pt-10'>
      {
        vehicles.map(vehicles => <ShowAllVehicles vehicles={vehicles}> </ShowAllVehicles> )
      }
    </div>
  )
}

export default AllVehicles