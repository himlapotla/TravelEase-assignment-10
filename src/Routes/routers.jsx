import { createBrowserRouter } from "react-router";
import Home from "../components/MainComponents/Home";
import HomeLayout from "../components/Layout/HomeLayout";
import Login from "../components/AuthComponents/Login";
import Register from "../components/AuthComponents/Register";
import AddVehicles from "../components/VehiclesComponent/AddVehicles";
import AllVehicles from "../components/VehiclesComponent/AllVehicles";
import MyBooking from "../components/VehiclesComponent/MyBooking";
import MyVehicles from "../components/VehiclesComponent/MyVehicles";
import Details from "../components/MainComponents/Details";
import Update from "../components/VehiclesComponent/Update";

export const allRoutes = createBrowserRouter([

    {
        path: '/',
        element: <HomeLayout> </HomeLayout>,
        children: [
            {
                index: true,
                element: <Home> </Home>
            },
            {
                path: '/login',
                element: <Login> </Login>
            },
            {
                path: '/register',
                element: <Register> </Register>
            },
            {
                path: '/addVehicle',
                element: <AddVehicles> </AddVehicles>
            },
            {
                path: '/allVehicles',
                element: <AllVehicles> </AllVehicles>
            },
            {
                path: '/myBookings',
                element: <MyBooking> </MyBooking>
            },
            {
                path: '/myVehicles',
                element: <MyVehicles> </MyVehicles>
            },
            {
                path: '/detailVehicles/:id',
                element: <Details> </Details>
            },
            {
                path: '/update/:id',
                loader: ({params}) => fetch(`http://localhost:3000/vehicles/${params.id}`),
                element: <Update> </Update>
            }
        ]
    },


])
