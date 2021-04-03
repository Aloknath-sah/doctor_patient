import React, {useEffect} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {Grid, Typography, Card, CardContent, makeStyles, Button} from '@material-ui/core'
import {deletePatient, getPatientData} from '../Redux/action'

const useStyles = makeStyles({
    root: {
        minWidth:"50%",
    },
    title: {
        fontSize: 14,
    },
    pos: {
        marginBottom: 12,
    }
});

const Admin = () => {
    const classes =  useStyles();

    useEffect(() => {
        dispatch(getPatientData())
    }, []);
    
    const logged_doctor = useSelector(state => state.logged_doctor)
    const totalData = useSelector(state => state.totalData)
    const dispatch = useDispatch()

    //dispatching deletePatient in handleDelete function to delete the particular patient
    const handleDelete=(id)=> {
        dispatch(deletePatient(id))
    }
    
    return (
        <div style={{display:"flex"}}>
        {
            totalData.filter((item) => item.doctor_name == logged_doctor)
            .map((items) => (
                <Grid xs={10} md={4} lg={3}>
                    <Card className={classes.root} variant="outlined">
                        <CardContent>
                            <img src={items.avatar} width="200px" style={{borderRadius:"100px"}} />
                            
                            <Typography style={{color:"green"}} variant="h5" component="h2">
                            patient name: {items.patient_name}
                            </Typography>
                            <Typography variant="h5" component="h2">
                            gender: {items.gender}
                            </Typography>
                            <Typography variant="h5" component="h2">
                            age: {items.age}
                            </Typography>
                            <Typography variant="h5" component="h2">
                            <div style={{fontWeight:"bold", textDecoration:"underline"}} >medicines</div>
                            {
                                items.medicines.map((medicine) => (
                                <div>
                                    <div> {medicine.medicine_name} </div>
                                </div>
                                ))
                            }
                            </Typography>
                            <Button variant="contained" color="secondary" onClick={()=>handleDelete(items._id)}>delete</Button>
                        </CardContent>
                    </Card>
                </Grid>
            ))
        }
        </div>
    );
}

export default Admin;
