// import React from "react";
import React, { useEffect, useState } from "react";
import axios from "axios";
const Login = () => {
  const [email,setEmailId]=useState("Babita@gmail.com");
  const [password,setPassword]=useState("Babita@12345");

  const handleLogin=async ()=>{

    try {
      const res=await axios.post("http://localhost:3001/login",
        {
          email,
          password
        },
      {withCredentials:true}
      );

      
    } catch (error) {
      console.log(error)
      
    }
  
  }


  return (
    <div className="flex justify-center items-center">
      <div className="card card-dash bg-green-900 text-white w-96 ">
        <div className="card-body justify-center items-center">
          <h2 className="card-title">DEVinder</h2>
          <div className="card-actions justify-center">
            <div>
              <fieldset className="fieldset">
                <legend className="fieldset-legend">Email Id </legend>
                <input type="text"
                 value={email}
                  className="input"
                   placeholder="Type here"
                   onChange={(e)=>setEmailId(e.target.value)}
                   />

                <legend className="fieldset-legend">Password</legend>
                <input type="text"
                 value={password}
                  className="input"
                   placeholder="Type here"
                   onChange={(e)=>setPassword(e.target.value)}
                   />
               
              </fieldset>
            </div>
            <button className="btn btn-primary w-full my-2 " onClick={handleLogin}>Login</button>
            
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
