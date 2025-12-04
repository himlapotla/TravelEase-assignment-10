import axios from 'axios'
import React, { useEffect, useState } from 'react'
import ShowSix from './ShowSix'

const Home = () => {

    const [vehicles, setVehicles] = useState([])

    useEffect(() => {
        axios.get('http://localhost:3000/show-all-vehicles-six')
            .then(res => {
                setVehicles(res.data)
            })
    }, [])

    return (
        <div>
            <div className='grid grid-cols-4 gap-3 w-11/12 mx-auto pt-10'>
                {
                    vehicles.map(vehicles => <ShowSix vehicles={vehicles}> </ShowSix>)
                }

            </div>
        </div>
    )
}

export default Home