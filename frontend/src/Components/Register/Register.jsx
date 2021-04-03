import React, {useState, useEffect} from 'react';
import {TextField, Button} from '@material-ui/core'
import { postregisteredData } from '../Redux/action';
import {useDispatch} from 'react-redux';

const Register = () => {
    const dispatch = useDispatch()
    const [state, setState] = useState({
        doctor_name:"",
        password:"",
    });

    const handleChange=(e)=>{
        const { value,name } = e.target

        setState((prevstate)=>({
            ...prevstate,
            [name]:value
        }))
    }

    const handleRegister = ()=> {
        dispatch(postregisteredData(state))
    }
    return (
        <div style={{marginTop:"7%"}} >
            <h2>Please Register the doctor Name</h2>
            <form>
                <TextField label="Enter doctor" name="doctor_name" value={state.doctor_name} onChange={handleChange} />
                <br/>
                <TextField label="password" name="password" value={state.password} onChange={handleChange} />
                <br/>
                <br/>
                <Button variant="contained" color="primary" onClick={handleRegister}>
                    Register
                </Button>
            </form>
        </div>
    );
}

export default Register;
