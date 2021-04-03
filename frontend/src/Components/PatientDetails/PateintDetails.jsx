import React from 'react';
import {Typography, CardContent, Card, makeStyles} from '@material-ui/core';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

const useStyles = makeStyles({
    root: {
        minWidth:"50%",
        display: "flex",
        flex: 1
    },
    root1: {
        
        flex: 1
    },
    title: {
        fontSize: 14,
    },
    pos: {
        marginBottom: 12,
    },
});

const PatientDetails = () => {
    const classes =  useStyles();
    const params = useParams()
    const totalData = useSelector(state=> state.totalData)
    const found = totalData.find(total => total._id == params.id)
    return (
        <div style={{marginTop:"10%"}} >
            <Card className={classes.root} variant="outlined">
                <CardContent className={classes.root1}>
                    <img src={found.avatar} width="200px" style={{borderRadius:"100px"}} />
                            
                    <Typography variant="h5" component="h2">
                        name: {found.patient_name}
                    </Typography>
                    <Typography variant="h5" component="h2">
                        gender: {found.gender}
                    </Typography>
                    <Typography variant="h5" component="h2">
                        age: {found.age}
                    </Typography>
                </CardContent>
                <CardContent className={classes.root1}>
                    <Typography variant="h4" style={{color:"green",width:"100%", textAlign:"left"}} component="h2">
                    Total {found.medicines.length} medicines prescribed
                    </Typography>
                    {
                        found.medicines.map((item, i)=> (
                            <Typography style={{color:"grey", width:"75%", textAlign:"left"}} variant="h5" component="h2">
                                {i+1}: Medicine name- {item.medicine_name}{" "}
                                    & quantity- {item.quantity}
                            </Typography>
                        ))
                    }
                </CardContent>
            </Card>
        </div>
    );
}

export default PatientDetails;
