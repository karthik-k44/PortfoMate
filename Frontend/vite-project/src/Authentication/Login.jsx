import React, { useState } from 'react'
import axios from 'axios'
export const Login = () => {

    const [userdata, setUserData]= useState({
        email:"",
        password:""
    })

    const HandleChange=(e)=>{
        setUserData({
            ...userdata,
            [e.target.name]:e.target.value
        })
    }

    
    const HandleSubmit=async(e)=>{
        e.preventDefault()
        try{
            const {data}= await axios.post("http://localhost:3000/api/login", userdata)
            console.log(data.message)
            localStorage.setItem("token", data.token)
        }     
        catch(error)
        {
                console.log(error.response.data)
        }
    }
  return (
   <>
        <form action="" onSubmit={HandleSubmit}>
            <label htmlFor="">Email</label>
            <input type="email" name='email' onChange={HandleChange} />
            <br /><br />
            <label htmlFor="">Password</label>
            <input type="text" name='password' onChange={HandleChange} />
            <br /><br />
            <button type='submit'>Submit</button>
        </form>
   </>
  )
}
