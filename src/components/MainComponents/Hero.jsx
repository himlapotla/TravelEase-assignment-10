import React, { useEffect, useState } from 'react'
import { Link } from 'react-router'
import { format } from 'date-fns'

const Hero = () => {

    const [currentTime, setCurrentTime] = useState(
        format(new Date(), "EEEE, dd MMM yyyy | hh:mm:ss a")
    )

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentTime(format(new Date(), "EEEE, dd MMM yyyy | hh:mm:ss a"))
        }, 1000)

        return () => clearInterval(interval)
    }, [])

    return (
        <div className=''>
            <div
                className="hero min-h-90"
                style={{
                    backgroundImage:
                        "url(https://i.ibb.co.com/dwqfbyRj/car-rental-agent-handing-keys-to-customer-vehicle-lot-background-clear-communication-car-rental-agen.webp)",
                }}
            >
                <div className="hero-overlay"></div>
                <div className="hero-content text-neutral-content text-center">
                    <div className="max-w-md">
                        <p className="mb-5 text-amber-400 text-4xl font-bold">
                            Drive Your Dream Car Today
                        </p>

                        <p className="mb-5 text-amber-400 font-bold text-xl">
                            Premium cars at unbeatable prices. Instant booking, free cancellation,
                            and 24/7 support – rent with confidence in just a few clicks.
                        </p>

                        <Link to={'/allVehicles'}>
                            <button className="btn bg-amber-400 text-black btn-primary">
                                All Vehicles
                            </button>
                        </Link>

                        <p className="mt-4 text-lg font-semibold text-white">
                            Current Time: <span className="text-amber-300">{currentTime}</span>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Hero
