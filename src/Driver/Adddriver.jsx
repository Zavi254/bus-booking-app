import React from 'react'
import { useState } from 'react'
import './Driver.css'

function Adddriver() {

  const [formData, setFormData] = useState({})

  function handleChange(e){
    setFormData({...formData, [e.target.name]: e.target.value})
  }

  function handleSubmit(e){
    e.preventDefault();
    fetch("https://bus-booking-web-api.herokuapp.com/drivers", {
      credentials: "include",
      method: "POST", 
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(formData)
    })
    .then((r) => r.json())
    .then((data) => console.log(data))
  }


  return (
    <div className="row"id="max">
    <div style={{minheight:"400vh"}} id="formbg" className="column">
    
    </div>
    <div className="column" >
    <form onSubmit={handleSubmit}>
      <div className="mb-4" > 
      <input onChange={handleChange} className="form-control p-3" type="text" name="name" placeholder='name' /> 
      </div>
      <div className="mb-4">
      <input onChange={handleChange} className="form-control p-3" type="text" name="email" placeholder='email'/>
      </div>
      <div className="mb-4">
      <input onChange={handleChange} className="form-control p-3" type="text" name="role" placeholder='role' />
      </div>
      <div className="mb-4">
      <input onChange={handleChange} className="form-control p-3"type="password" name="password" placeholder='password' /> 
      </div>
      <div className="mb-4">
      <input onChange={handleChange} className="btn btn-primary barlowFont signRegisterBtn mb-4 mt-2" type="submit" name="" value="Add driver"/> 
      </div>
    </form>
    <button></button>
    </div>
    </div>
  )
}

export default Adddriver