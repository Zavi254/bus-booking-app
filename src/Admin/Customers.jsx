import React from 'react'
import {useState, useEffect} from 'react'


function Customers() {
  const [customers, setCustomers]= useState([])
  const [showForm, setshowForm]= useState(false)
  const [customer, setCustomer]= useState({})
  const [id, setId]= useState(null)
  const [formData, setFormData]= useState(customer)
  useEffect(() => {
  fetch("https://bus-booking-web-api.herokuapp.com/customers")
    .then((res)=> res.json())
    .then((customers)=> setCustomers(customers))
    console.log(formData)
    

  })
    function handleChange(e){
      
      setFormData({...customer,[e.target.name]:e.target.value})

    }
    function handleClick(e){
      let id=e.target.id
      setId(id)
      fetch(`https://bus-booking-web-api.herokuapp.com/customers/${id}`)
      .then((res)=>res.json())
      .then((cust)=>setCustomer(cust))
      setshowForm(()=>!showForm)
    }
    function handleSubmit (e){
      e.preventDefault()
      fetch(`https://bus-booking-web-api.herokuapp.com/customers/${id}`,{
        credentials:"include",
        method:"PATCH",
        headers:{
          "Content-Type":"application/json"
        },
        body:JSON.stringify(formData)
      })
      setshowForm(()=>!showForm)

    }
    console.log(formData)
  return (
    <div>
      {!showForm?
      <>
      <h1><span className="badge text-bg-primary">Total Customers</span></h1> 
      <table className="table table-bordered table-dark table table-hover">
        <thead>
        <tr>
						<th>
							<span className="custom-checkbox">
								<input type="checkbox" id="selectAll"/>
								<label for="selectAll"></label>
							</span>
						</th>
						<th>Name</th>
            <th>Email</th>
            <th>Phone Number</th>
            <th>Edit Details</th>
						</tr>
        </thead>
        <tbody>
        {customers.map((customer, index)=> (
					<tr key={index}>
						<td >
							<span className="custom-checkbox">
								<input type="checkbox" id="checkbox1" name="options[]" value="1"/>
								<label for="checkbox1"></label>
							</span>
						</td>
						<td>{customer.name}</td>
						<td>{customer.email}</td>
            <td>{customer.phone_number}</td>
              <td onClick={handleClick} className='td' style={{ color: "green" }}id={customer.id}>Edit</td>
            
					</tr>
				))}
				</tbody>
      </table>
      </>
      :
      <form id={id} onSubmit={handleSubmit}className="form" >
      
      <div className="mb-4">
        <input
          
          type="text"
          name="name"
          className="form-control p-3"
          defaultValue={customer.name}
          onChange={handleChange }    />
      </div>
      <div className="mb-4">
        <input
          
          type="number"
          name="phone_number"
          className="form-control p-3"
          defaultValue={customer.phone_number}
          onChange={handleChange}
        />
      </div>
      <div className="mb-4">
        <input
          
          type="email"
          name="email"
          className="form-control p-3"
          defaultValue={customer.email}
          onChange={handleChange}      />
      </div>
      <div className="mb-3">
        <input
         
          type="password"
          name="password"
          className="form-control p-3"
          defaultValue={customer.password}
          placeholder="Enter new password"
          onChange={handleChange}
        />
      </div>
  
      < input className="btn btn-primary barlowFont signRegisterBtn mb-4 mt-2"
        text="Update"
        type="submit" 
      />
      
    </form>
        }
    </div>
  )
}

export default Customers


