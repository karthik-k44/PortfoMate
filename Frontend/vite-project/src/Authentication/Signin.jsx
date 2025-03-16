import React, { useState } from 'react'
import axios from 'axios'

export const Signin = () => {
    const [formData, setFormData] = useState({
        username:"",
        email:"",
        password:""
    })
    const HandleChange=(e)=>{
        setFormData({
            ...formData,
            [e.target.name]:e.target.value
        })
        console.log(setFormData)
    }

    const HandleSubmit=async(e)=>{
        e.preventDefault()
        try{
            const response= await axios.post("http://localhost:3000/api/signin",formData)
            console.log(response.data)
        }
        catch(error)
        {
            if(error.response)
            {
                console.log(error.response.data)
            }
            else{
                console.log(error.message)
            }
        }
    }
  return (
    <>
    
        <form onSubmit={HandleSubmit}>
            <label htmlFor="">Username</label>
            <input type="text" name='username' onChange={HandleChange} />
            <br /><br />
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
