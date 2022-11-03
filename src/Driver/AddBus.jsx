import React from 'react'
import { useState } from 'react';
import { useContext } from 'react';
import { UserContext } from './DriverHome';
import './Driver.css'



function AddBus () {

  const [bus,setBus]= useState({})
  const user = useContext(UserContext);
  const [formData, setFormData] = useState({})
  function handleChange(e){
    setFormData({...formData, driver_id: user.id, [e.target.name]: e.target.value})
  }
  function handleSubmit(e){
    e.preventDefault();
    fetch("https://bus-booking-web-api.herokuapp.com/buses",{
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
console.log(formData);
  
  return (
    <div className="row">
      <div  id="formbg" class="column">
      
      </div>
      <div class="column">
      <form  onSubmit={handleSubmit}className="form" >
      
      <div className="mb-4">
        <input
          
          type="text"
          name="plateNumber"
          className="form-control p-3"
          defaultValue={setBus}
          placeholder="Enter Plate Number"
          onChange={handleChange }    />
      </div>
      <div className="mb-4">
        <input
          
          type="text"
          name="capacity"
          className="form-control p-3"
          defaultValue={setBus}
          placeholder="Enter Capacity"
          onChange={handleChange}
        />
      </div>
      <div className="mb-4">
        <input
          
          type="text"
          name="Fare"
          className="form-control p-3"
          defaultValue={setBus}
          placeholder="Enter Bus Fare"
          onChange={handleChange}      />
      </div>
      <div className="mb-3">
        <input
         
          type="name"
          name="origin"
          className="form-control p-3"
          defaultValue={setBus}
          placeholder=" Enter Origin"
          onChange={handleChange}
        />
      </div>
      <div className="mb-3">
        <input
         
          type="name"
          name="Destination"
          className="form-control p-3"
          defaultValue={setBus}
          placeholder="Enter Destination"
          onChange={handleChange}
        />
      </div>
      <div className="mb-3">
        <input
         
          type="name"
          name="Departure"
          className="form-control p-3"
          defaultValue={setBus}
          placeholder="Enter Departure Time"
          onChange={handleChange}
        />
      </div>
      <div className="mb-3">
        <input
         
          type="text"
          name="Travel Date"
          className="form-control p-3"
          defaultValue={setBus}
          placeholder="Enter Date of Travel"
          onChange={handleChange}
        />
      </div>
      <div>
     <select  defaultValue={setBus}
     className="form-select p-3"
     onChange={handleChange}
     >
          <option>Enter Availability</option>
          <option value="customers">Yes</option>
          <option value="drivers">No</option>
      </select>
      </div>
  
      < input className="btn btn-primary barlowFont signRegisterBtn mb-4 mt-2"
        text="Update"
        type="submit" onChange={handleChange}
      />
      
    </form>
    </div>
      </div>
  )
}

export default AddBus