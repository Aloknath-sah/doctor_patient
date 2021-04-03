import { PATIENT_REQUEST, PATIENT_SUCCESS, PATIENT_FAILURE,
    PAGINATE_REQUEST, PAGINATE_SUCCESS, PAGINATE_FAILURE,SEARCH_PATIENT_REQUEST, SEARCH_PATIENT_SUCCESS, SEARCH_PATIENT_FAILURE,LOGIN_REQUEST,LOGIN_SUCCESS,LOGIN_FAILURE,
    REGISTER_REQUEST,REGISTER_SUCCESS,REGISTER_FAILURE, LOGOUT_ADMIN} from "./actionTypes"

const initState={
    isLoading: false,
    isError: false,
    patients: [],
    totalData:[],
    searchData:[],
    isAuth: false,
    logged_doctor:"",
    registered_doctor:""
}

export const reducer = (state=initState, {type, payload} ) => {
    console.log(type, payload)
    switch(type){
        case PATIENT_REQUEST:
            return {
                ...state,
                isLoading: true
            }
        case PATIENT_SUCCESS:
            return {
                ...state,
                totalData: payload
            }
        case PATIENT_FAILURE:
            return {
                ...state,
                isError: true
            }
        case PAGINATE_REQUEST:
            return {
                ...state,
                isLoading: true
            }
        case PAGINATE_SUCCESS:
            return {
                ...state,
                patients: payload
            }
        case PAGINATE_FAILURE:
            return {
                ...state,
                isError: true
            }
        case SEARCH_PATIENT_REQUEST:
            return {
                ...state,
                isLoading: true
            }
        case SEARCH_PATIENT_SUCCESS:
            return {
                ...state,
                searchData: payload
            }
        case SEARCH_PATIENT_FAILURE:
            return {
                ...state,
                isError: true
            }
        case REGISTER_REQUEST:
            return {
                ...state,
                isLoading: true
            }
        case REGISTER_SUCCESS:
            return {
                ...state,
                registered_doctor: payload,
                isAuth: true
            }
        case REGISTER_FAILURE:
            return {
                ...state,
                isError: true
            }
        case LOGIN_REQUEST:
            return {
                    ...state,
                    isLoading: true
                }
        case LOGIN_SUCCESS:
            
                return {
                    ...state,
                    isAuth: true,
                    logged_doctor: payload
                }
        case LOGIN_FAILURE:
                return {
                    ...state,
                    isError: true
                }
        case LOGOUT_ADMIN:
            return {
                ...state,
                isAuth: false
            }
        default:
            return state
    }
}