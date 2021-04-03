import React, {useEffect, useState} from "react";
import {  NavLink, Link, useHistory } from "react-router-dom";
import styled from 'styled-components';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import {useDispatch, useSelector} from 'react-redux';
import { getpaginatedData, getPatientData, logoutAdmin, searchPatient } from "../Redux/action";

const NavBarWrapper = styled.div`
    display: flex;
    justify-content: space-between;
    overflow:hidden;
    position: fixed;
    background-color: black;
    width:100%;
    top:0;
    height: 60px;
    padding-left: 20px;
    a {
        text-decoration: none;
        color: black;
    }

`
const NavLeft = styled.div`
    padding: 20px;
`

const RightLink = styled.div`
    display: flex;
    padding: 10px;
    margin-right: 20px;
    &.rightlink > *{
        padding: 15px;
        
    }
    &.rightlink > div{
        margin-left: -22px;
    }
`
const SuggestionBox = styled.div`
    margin-left: 20px;
    margin-top: 70px;
`

const links = [
    {
        to: "/",
        title: "Home"
    },
    {
        to: "/doctor/admin",
        title: "admin"
    }
]

const Navbar = () => {
    const dispatch = useDispatch()
    const [search, setSearch] = useState("")
    useEffect(()=> {
        dispatch(getPatientData())
        dispatch(searchPatient(search))
    }, [search]);
    const searchData = useSelector(state => state.searchData)
    console.log(search, searchData)
    const isAuth = useSelector(state => state.isAuth)
    const logged_doctor = useSelector(state => state.logged_doctor)
    const history = useHistory()
    console.log(isAuth)

    const handleSearch = (id) => {
        history.push(`/${id}`)
    }

    const handleLogout = () => {
        dispatch(logoutAdmin())
    }

    return (
        <div>
        <NavBarWrapper className="navbar" >
            <NavLeft>
                {links.map((link) => (
                    <NavLink
                        exact
                        style={{ padding: 10, color:"white"}}
                        activeStyle={{ fontWeight: "bold"}}
                        key={link.to}
                        to={link.to}
                        >
                        {link.title}
                    </NavLink>
                ))}
                <input type="text" placeholder="search something" value={search} onChange={(e) => setSearch(e.target.value)} />
            </NavLeft>
                
            <RightLink className="rightlink" >
                {
                    isAuth?<div></div>:<Link style={{color:"white"}} to="/doctor/register" >Register</Link>
                }
                {
                    isAuth?<div style={{color:"white"}}> {logged_doctor} </div>:<div><Link style={{color:"white"}} to="/doctor/login" >Login</Link></div>
                }
                {
                    isAuth?<button onClick={handleLogout}>logout</button>:<div></div>
                }
            </RightLink>
        </NavBarWrapper>
        <SuggestionBox>
        {
            searchData.map((item) => (
                <div key={item._id} style={{padding:"10px", marginLeft:"-90%"}} onClick={() => handleSearch(item._id)} >
                    {item.patient_name}
                </div>
            ))
        }
    </SuggestionBox>
    </div>
    );
}

export { Navbar };
