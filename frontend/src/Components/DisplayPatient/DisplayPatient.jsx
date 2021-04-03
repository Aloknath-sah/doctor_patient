import React,{useState, useEffect} from 'react';
import {Typography, Grid, CardContent, Card, makeStyles, Select, MenuItem, InputLabel} from '@material-ui/core';
import Pagination from '@material-ui/lab/Pagination';
import {Link} from 'react-router-dom'
import {useDispatch, useSelector} from 'react-redux';
import { getPatientData, getpaginatedData} from '../Redux/action';
import styles from './DisplayPatient.module.css'

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

const DisplayPatient =()=> {
    const [page, setPage] = useState(1)
    const [filterval, setFilter] = useState("male")
    const [sort, setSort] = useState("asc")
    const classes =  useStyles();
    const dispatch = useDispatch()

    useEffect(()=> {
        dispatch(getPatientData())
        dispatch(getpaginatedData(page))
    }, [page]);
    const totalData = useSelector(state => state.totalData)
    const totalcount = Math.ceil(totalData.length/5)
    const handlePage = (event, value) => {
        setPage(value);
    };

    const patients = useSelector(state=> state.patients)
        return (
        <div style={{marginTop:"7%"}}>
            <h3 style={{display:"flex", marginLeft:"75%"}} >
            <div style={{padding:"5%"}} >
            <InputLabel id="demo-simple-select-label">Filter by Gender</InputLabel>
                <Select value={filterval} onChange={(e)=> setFilter(e.target.value)} >
                    <MenuItem value="" >--filter by gender--</MenuItem>
                    <MenuItem value="male" >male</MenuItem>
                    <MenuItem value="female">female</MenuItem>
                </Select>
            </div>
            <div style={{padding:"5%"}}>
            <InputLabel id="demo-simple-select-label">Sort by Age</InputLabel>
                <Select value={sort} onChange={(e)=> setSort(e.target.value)} >
                    <MenuItem>--sort by age--</MenuItem>
                    <MenuItem value="asc">low to high</MenuItem>
                    <MenuItem value="dsc">high to low</MenuItem>
                </Select>
            </div>
            </h3>
            <Grid item container style={{justifyContent:"center"}} >
            {
                patients.filter((item)=> item.gender == filterval).sort((a,b)=> sort == "asc"? a.age - b.age : b.age - a.age).map((patient)=> (
                    <Grid xs={10} md={4} lg={3} style={{margin: 20}}>
                        <Link style={{textDecoration:"none"}} to={`/${patient._id}`}>
                        <Card className={classes.root} className={styles.cardhover} variant="outlined">
                        <CardContent>
                            <img src={patient.avatar} width="200px" style={{borderRadius:"100px"}} />
                            
                            <Typography variant="h5" component="h2">
                            patient name: {patient.patient_name}
                            </Typography>
                            <Typography variant="h5" component="h2">
                            gender: {patient.gender}
                            </Typography>
                            <Typography variant="h5" component="h2">
                            age: {patient.age}
                            </Typography>
                            <Typography variant="h5" component="h2">
                            number of medicines prescribed: {patient.medicines.length}
                            </Typography>
                        </CardContent>
                        </Card>
                        </Link>
                    </Grid>
                ))
            }
            </Grid>
            <div style={{width:"25%", margin:"auto", padding:'7%'}}>
            <Pagination count={totalcount} page={page} onChange={handlePage} color="secondary" />
            </div>
        </div>
    );
}

export default DisplayPatient
