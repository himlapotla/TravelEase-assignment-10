import axios from 'axios'
import React, { useContext, useEffect, useState } from 'react'
import { AllContext } from '../Provider/AuthProvider'
import ShowMyVehicles from './ShowMyVehicles'
import Loading from '../Loading'

const MyVehicles = () => {

  const [Vehicles, setVehicles] = useState([])
  const { user, loading, setLoading } = useContext(AllContext)
  console.log(user);


  useEffect(() => {

    if (!user) return 

    axios.get(`http://localhost:3000/show-all-my-vehicles?email=${user && user.email}`)
      .then(res => {

        setVehicles(res.data)
        console.log(res.data);

      })
  }, [user])

  if(!user) {
    return <Loading> </Loading>
  }

  return (
    <div className='grid grid-cols-4 w-11/12 mx-auto gap-3 pt-10'>
      {
        Vehicles.map(vehicles => <ShowMyVehicles vehicles={vehicles}> </ShowMyVehicles>)
      }
    </div>
  )
}

export default MyVehicles

