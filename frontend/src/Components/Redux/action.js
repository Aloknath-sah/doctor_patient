import { PATIENT_REQUEST, PATIENT_SUCCESS, PATIENT_FAILURE,
    PAGINATE_REQUEST, PAGINATE_SUCCESS, PAGINATE_FAILURE,
    SEARCH_PATIENT_REQUEST, SEARCH_PATIENT_SUCCESS, SEARCH_PATIENT_FAILURE,LOGIN_REQUEST,LOGIN_SUCCESS,LOGIN_FAILURE,
    REGISTER_REQUEST,REGISTER_SUCCESS,REGISTER_FAILURE, LOGOUT_ADMIN,
    DELETE_REQUEST,DELETE_SUCCESS,DELETE_FAILURE} from "./actionTypes"
import axios from 'axios'

//getting the data of total patients 
export const patientRequest =()=> ({
    type: PATIENT_REQUEST
})

export const patientSuccess =(payload)=> ({
    type: PATIENT_SUCCESS,
    payload
})

export const patientFailure =()=> ({
    type: PATIENT_FAILURE
})

export const getPatientData = ()=> dispatch => {
    dispatch(patientRequest())
    return axios({
        method:"get",
        url:"http://localhost:5000/api/patient",
    })
    .then(res => dispatch(patientSuccess(res.data.current.patient)))
    .catch(err=> dispatch(patientFailure(err)))
}

//getting paginated data
export const paginateRequest =()=> ({
    type: PAGINATE_REQUEST
})

export const paginateSuccess =(payload)=> ({
    type: PAGINATE_SUCCESS,
    payload
})

export const paginateFailure =()=> ({
    type: PAGINATE_FAILURE
})

export const getpaginatedData = (payload)=> dispatch => {
    dispatch(paginateRequest())
    return axios({
        method:"get",
        url:`http://localhost:5000/api/patient?page=${payload}&limit=5`,
    })
    .then(res => dispatch(paginateSuccess(res.data.current.patient)))
    .catch(err=> dispatch(paginateFailure(err)))
}

//getting the data by searching with patient name
export const searchPatientRequest =()=> ({
    type: SEARCH_PATIENT_REQUEST
})

export const searchPatientSuccess =(payload)=> ({
    type: SEARCH_PATIENT_SUCCESS,
    payload
})

export const searchPatientFailure =()=> ({
    type: SEARCH_PATIENT_FAILURE
})

export const searchPatient = (payload) => dispatch =>{
    dispatch(searchPatientRequest())
    axios({
        method:"get",
        url:`http://localhost:5000/api/patientsearch/${payload}`
    })
    .then((res) => dispatch(searchPatientSuccess(res.data)))
    .catch((err) => dispatch(searchPatientFailure()))
}

//registering the new doctor
export const registerRequest =()=> ({
    type: REGISTER_REQUEST
})

export const registerSuccess =(payload)=> ({
    type: REGISTER_SUCCESS,
    payload
})

export const registerFailure =()=> ({
    type: REGISTER_FAILURE
})

export const postregisteredData = (payload)=> dispatch => {
    console.log(payload)
    dispatch(registerRequest())
    axios({
        method:"post",
        url:`http://localhost:5000/api/register`,
        data: payload
    })
    .then((res) => dispatch(registerSuccess(payload.doctor_name)))
    .catch((err) => dispatch(registerFailure(err)))
}

//login registered doctor with password
export const loginRequest =()=> ({
    type: LOGIN_REQUEST
})

export const loginSuccess =(payload)=> ({
    type: LOGIN_SUCCESS,
    payload
})

export const loginFailure =()=> ({
    type: LOGIN_FAILURE
})

export const postLoginData = (payload)=> dispatch => {
    console.log(payload)
    dispatch(loginRequest())
    axios({
        method:"POST",
        url:"http://localhost:5000/api/login",
        data:payload
    })
    .then(res => dispatch(loginSuccess(payload.doctor_name)))
    .catch(err=> dispatch(loginFailure(err)))
}

//logout functionality for admin
export const logoutAdmin = () => ({
    type:LOGOUT_ADMIN
})

//delete particular patient data
export const patientDeleteRequest =()=> ({
    type: DELETE_REQUEST
})

export const patientDeleteSuccess =(payload)=> ({
    type: DELETE_SUCCESS,
    payload
})

export const patientDeleteFailure =()=> ({
    type: DELETE_FAILURE
})

export const deletePatient = (payload)=> dispatch => {
    dispatch(patientDeleteRequest())
    return axios({
        method:"delete",
        url:`http://localhost:5000/api/${payload}`,
    })
    .then(res => dispatch(getPatientData()))
    .catch(err=> dispatch(patientDeleteFailure(err)))
}
