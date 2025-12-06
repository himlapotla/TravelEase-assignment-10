import axios from 'axios'
import React, { useContext, useEffect, useState } from 'react'
import ShowAllVehicles from './ShowAllVehicles'
import { motion } from 'framer-motion'
import { AllContext } from '../Provider/AuthProvider'


const AllVehicles = () => {

  const [vehicles, setVehicles] = useState([])
  const [filtered, setFiltered] = useState([])
  const [sortType, setSortType] = useState("")
  const {pageVariants, pageTransition} = useContext(AllContext)

  useEffect(() => {
    axios.get('http://localhost:3000/show-all-vehicles')
      .then(res => {
        setVehicles(res.data)
        setFiltered(res.data)
      })
  }, [])

  useEffect(() => {
    let sorted = [...vehicles]

    if (sortType === "price-low") {
      sorted.sort((a, b) => a.pricePerDay - b.pricePerDay)
    }
    else if (sortType === "price-high") {
      sorted.sort((a, b) => b.pricePerDay - a.pricePerDay)
    }

    setFiltered(sorted)

  }, [sortType, vehicles])

  return (

      <motion.div initial="initial" animate="in" exit="out" variants={pageVariants} transition={pageTransition}>
    <div className='w-11/12 mx-auto pt-10'>

      <div className="flex justify-end gap-4 mb-6">

        <div className="bg-amber-400 p-1 rounded-lg">
          <select
            className=" text-white p-2 rounded-lg"
            onChange={(e) => setSortType(e.target.value)}
          >
            <option value="">Sort by price</option>
            <option value="price-low">Low → High</option>
            <option value="price-high">High → Low</option>
          </select>
        </div>

      </div>

      <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 pb-10'>
        {
          filtered.map(v => <ShowAllVehicles key={v._id} vehicles={v} />)

        }
      </div>

    </div>
    </motion.div>
  )
}

export default AllVehicles
