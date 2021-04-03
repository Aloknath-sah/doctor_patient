import React, {useState, useEffect} from 'react';
import {TextField, Button} from '@material-ui/core'
import { postLoginData } from '../Redux/action';
import {useDispatch} from 'react-redux';
import { useHistory } from 'react-router-dom';

const Login = () => {
    const history = useHistory()
    const [doctor_name, setDoctor] = useState("")
    const [password, setPassword] = useState("")
    const dispatch = useDispatch()

    const handleLogin = ()=> {
        dispatch(postLoginData({doctor_name, password}))
        history.push("/")
    }
    return (
        <div style={{marginTop:"7%"}} >
            <h2>Please Login</h2>
            <form>
                <TextField label="Enter doctor" value={doctor_name} onChange={(e)=> setDoctor(e.target.value)} />
                <br/>
                <TextField label="Enter password" value={password} onChange={(e)=> setPassword(e.target.value)} />
                <br/>
                <br/>
                <Button variant="contained" color="primary" onClick={handleLogin} >
                    Login
                </Button>
            </form>
        </div>
    );
}

export default Login;
