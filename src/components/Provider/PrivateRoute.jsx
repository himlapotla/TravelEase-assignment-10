import React, { useContext } from 'react'
import { AllContext } from './AuthProvider'
import { Navigate, useLocation } from 'react-router'
import Loading from '../Loading'

const PrivateRoute = ( {children} ) => {

    const {user, loading} = useContext(AllContext)
    const location = useLocation()
    console.log(location);
    

    if(loading) {
        return <Loading> </Loading>
    }

    else if(user) {
        return children
    }

    else {
        return <Navigate state={location.pathname} to={'/login'}> </Navigate>
    }
}

export default PrivateRoute