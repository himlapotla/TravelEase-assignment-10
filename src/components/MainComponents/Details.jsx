import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router'
import ShowDetails from './ShowDetails'

const Details = () => {

    const { id } = useParams()
    const [vehicles, setVehicles] = useState([]) 

    useEffect(() => {
        axios.get(`https://travel-ease-server-hazel.vercel.app/vehicles/${id}`)
            .then(res => {
                setVehicles(res.data)
                console.log(res.data);
            })
            
            
    }, [id])

    return (
        <div className='pb-12'>
            {
                vehicles.map(vehicles => <ShowDetails key={vehicles._id} vehicles={vehicles}> </ShowDetails>)
            }
        </div>
    )
}

export default Details