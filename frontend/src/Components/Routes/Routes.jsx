import React from 'react'
import { Route,Switch } from "react-router-dom"
import { Navbar } from '../Navbar'
import DisplayPatient from '../DisplayPatient/DisplayPatient'
import PatientDetails from '../PatientDetails/PateintDetails';
import Register from '../Register/Register';
import Login from '../Login/Login'
import Admin from '../Admin/Admin';
import PrivateRoute from './PrivateRoute';

const Routes = () =>{
    return(
        <div>
        <Navbar/>
            <Switch>
                <Route path="/" exact render={(props)=> <DisplayPatient/>} />
                <Route path="/:id" exact render={(props)=> <PatientDetails/>}
                />
                <Route path="/doctor/login" exact render={(props) => <Login/>} />
                <Route path="/doctor/register" exact render={(props) => <Register/>} />
                <PrivateRoute path="/doctor/admin" exact component={Admin}/>
            </Switch>
        </div>
    )

}
export default Routes


