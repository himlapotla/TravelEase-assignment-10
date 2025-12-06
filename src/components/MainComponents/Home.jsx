import axios from 'axios'
import React, { useContext, useEffect, useState } from 'react'
import ShowSix from './ShowSix'
import Hero from './Hero'
import TopVehicles from './TopVehicles'
import About from './About'
import { motion } from 'framer-motion'
import { AllContext } from '../Provider/AuthProvider'

const Home = () => {

    const [vehicles, setVehicles] = useState([])
    const {pageVariants, pageTransition} = useContext(AllContext)

    useEffect(() => {
        axios.get('http://localhost:3000/show-all-vehicles-six')
            .then(res => {
                setVehicles(res.data)
            })
    }, [])

    return (
        <motion.div initial="initial" animate="in" exit="out" variants={pageVariants} transition={pageTransition}>

            

            <Hero> </Hero>

            <About> </About>

            <p className='text-amber-400 text-4xl font-bold text-center '> Explore oue leatest vehicles </p>

            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3 w-11/12 mx-auto pt-10'>
                {
                    vehicles.map(vehicles => <ShowSix vehicles={vehicles}> </ShowSix>)
                }

            </div>

            <p className='text-amber-400 text-4xl font-bold text-center pt-21 pb-15'> Check out our most demandable vehicles </p>

            <TopVehicles> </TopVehicles>

            
        </motion.div>
    )
}

export default Home