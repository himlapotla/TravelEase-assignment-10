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
import PrivateRoute from "../components/Provider/PrivateRoute";
import Custome from "../../Custome";

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
                element: <PrivateRoute> <AddVehicles> </AddVehicles> </PrivateRoute>
            },
            {
                path: '/allVehicles',
                element: <AllVehicles> </AllVehicles>
            },
            {
                path: '/myBookings',
                element: <PrivateRoute> <MyBooking> </MyBooking>  </PrivateRoute>
            },
            {
                path: '/myVehicles',
                element: <PrivateRoute> <MyVehicles> </MyVehicles> </PrivateRoute>
            },
            {
                path: '/detailVehicles/:id',
                element: <PrivateRoute> <Details> </Details> </PrivateRoute>
            },
            {
                path: '/update/:id',
                loader: ({params}) => fetch(`https://travel-ease-server-hazel.vercel.app/vehicles/${params.id}`),
                element: <Update> </Update>
            },
            {
                path: '*',
                element: <Custome> </Custome>
            }
        ]
    },


])
