import React from 'react';
import { useSelector } from 'react-redux';
import { Redirect,Route } from 'react-router-dom';

function PrivateRoute({Component,...rest}) {
    const isAuth = useSelector(state => state.isAuth)
    return (
        
        isAuth ? <Route {...rest} render={(props)=><Component {...props} />} />  : <Redirect to = "/doctor/login" />
        
    );
}

export default PrivateRoute;