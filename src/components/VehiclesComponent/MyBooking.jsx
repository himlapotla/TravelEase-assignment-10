import React, { useContext, useEffect, useState } from 'react'
import { AllContext } from '../Provider/AuthProvider'
import axios from 'axios'
import ShowMyBooking from './ShowMyBooking'
import Empty from '../Empty'

const MyBooking = () => {

  const { user } = useContext(AllContext)
  const [vehicles, setVehicles] = useState([])

  useEffect(() => {

    axios.get(`http://localhost:3000/show-all-my-book?email=${user && user.email}`)
      .then(res => {

        setVehicles(res.data)
        console.log(res.data);

      })
  }, [])

  return (

    <div>
      {
        vehicles.length == 0 ? <Empty> </Empty> :
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 w-11/12 mx-auto gap-3 pt-2 pb-12'>
            {
              vehicles.map(vehicles => <ShowMyBooking vehicles={vehicles}> </ShowMyBooking>)
            }
          </div>
      }
    </div>
  )
}

export default MyBooking

