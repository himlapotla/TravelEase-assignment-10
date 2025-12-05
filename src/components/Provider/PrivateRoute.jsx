import React, { useContext } from 'react'
import { AllContext } from './AuthProvider'
import { Navigate, useLocation } from 'react-router'
import Loading from '../Loading'

const PrivateRoute = ( {children} ) => {

    const {user} = useContext(AllContext)
    const location = useLocation()
    console.log(location);
    

    if(user) {
        return children
    }

    else if(!user) {
        return <Loading> </Loading>
    }

    else {
        return <Navigate state={location.pathname} to={'/login'}> </Navigate>
    }
}

export default PrivateRoute