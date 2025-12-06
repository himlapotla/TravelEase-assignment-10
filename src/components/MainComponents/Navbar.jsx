import { use, useContext } from 'react'
import { Link, useNavigate } from 'react-router'
import { AllContext } from '../Provider/AuthProvider'
import { FaMoon, FaSun } from 'react-icons/fa'

const Navbar = () => {

    const { user, logOutt, changeColor, color } = useContext(AllContext)
    const navigate = useNavigate()

    const links = <>
        <Link to={'/'}> <p className='font-semibold'>Home</p> </Link>
        <Link to={'/allVehicles'}> <p className='font-semibold'>All Vehicles</p> </Link>
        <Link to={'/addVehicle'}> <p className='font-semibold'>Add Vehicle</p> </Link>
        <Link to={'/myVehicles'}> <p className='font-semibold'>My Vehicles</p> </Link>
        <Link to={'/myBookings'}> <p className='font-semibold'>My Bookings</p> </Link>
    </>

    const handleOut = () => {
        logOutt()
            .then(() => {
                navigate('/')
                toast.success("You are logged out")
            })
    }

    return (
        <div className=' bg-gradient-to-r from-amber-400 to-amber-500'>
            {/* {
                user ? user.email : 'nai'
            } */}

            <div className="navbar w-15/16 mx-auto flex items-center py-4">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                        </div>
                        <ul
                            tabIndex="-1"
                            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                            <div>
                                {links}
                            </div>
                        </ul>
                    </div>
                    <Link to={'/'} className=" text-2xl font-bold text-amber-700"> TravelEase </Link>

                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-3">
                        <div className='flex gap-4'>
                            {links}
                        </div>
                    </ul>
                </div>

                <div className="navbar-end gap-3">
                    <div className='text-3xl px-3' onClick={changeColor}> {color === "light-mode" ? <FaMoon> </FaMoon> : <FaSun></FaSun>} </div>

                    {
                        <img className='w-3/12 md:w-2/12 lg:w-1/12 rounded-4xl cursor-pointer' title={user ? user.displayName : ' '} src={user ? user.photoURL : 'nai'} alt="" />
                    }

                    {
                        user ? <button onClick={handleOut} className="btn font-semibold bg-amber-400"> Log out </button> : <Link to="/login" className="btn font-semibold bg-amber-400"> Login </Link>
                    }
                </div>
            </div>

        </div>
    )
}

export default Navbar

