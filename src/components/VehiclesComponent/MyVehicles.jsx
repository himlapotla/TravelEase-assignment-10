import axios from 'axios'
import React, { useContext, useEffect, useState } from 'react'
import { AllContext } from '../Provider/AuthProvider'
import ShowMyVehicles from './ShowMyVehicles'
import Loading from '../Loading'
import Empty from '../Empty'

const MyVehicles = () => {

  const [Vehicles, setVehicles] = useState([])
  const { user, loading, setLoading } = useContext(AllContext)


  useEffect(() => {

    if (!user) return 

    axios.get(`https://travel-ease-server-hazel.vercel.app/show-all-my-vehicles?email=${user && user.email}`)
      .then(res => {

        setVehicles(res.data)

      })
  }, [user])

  if(!user) {
    return <Loading> </Loading>
  }

  return (
    <div >

      {
        Vehicles.length == 0 ? <Empty> </Empty> : 
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 w-11/12 mx-auto gap-3 pt-3 pb-13'>
          {
            Vehicles.map(vehicles => <ShowMyVehicles vehicles={vehicles}> </ShowMyVehicles>)
          } 
        </div>
      }

    </div>
  )
}

export default MyVehicles

