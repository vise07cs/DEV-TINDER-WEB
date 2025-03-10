import React, { useEffect } from 'react'
import Navbar from './Navbar'
import { Outlet, useNavigate } from 'react-router'
import Footer from './Footer'
import { BASE_URL } from '../utils/constants'
import { useDispatch, useSelector } from 'react-redux'
import { addUser } from '../utils/userSlice'
import axios from "axios";

import { combineSlices } from '@reduxjs/toolkit'

const Body = () => {

  const dispatch=useDispatch();
  const navigate=useNavigate();

  const userData=useSelector((store)=>{
    store.user
  })

  const fetchUser=async ()=>{
    try {
      const user =await axios.get(BASE_URL + "/profile/view", {
        withCredentials: true
      }) 
      dispatch(addUser(user.data))
      
    } catch (error) { 
      if(error.status==401){
        navigate("/login");

      }
      console.log(error)
    }
   
  }
  useEffect(()=>{
    if(!userData){
      fetchUser();

    }

  },[])

  return (
    <div>
      <Navbar></Navbar>
      <Outlet></Outlet>
      <Footer></Footer>
    </div>
  )
}

export default Body