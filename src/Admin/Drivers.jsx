import React from 'react'
import { useState,useEffect} from "react"
// import Customers from './Customers';

function Drivers() {
  const [drivers, setDrivers]=useState([])
  const [bus, setBus] = useState()
  useEffect(() => {
    fetch("https://bus-booking-web-api.herokuapp.com/drivers")
    .then((res) => res.json())
    .then((drivers)=>{
      setDrivers(drivers)
      setBus(drivers.bus)

    })
},[]);
 console.log(bus)
  
  return (
    <div>
       <div><h1>Total Drivers</h1></div>
       <table className='table table-bordered table-dark table table-hover'>
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
        {drivers.map((driver, index)=> (
					<tr key={index}>
						<td >
							<span className="custom-checkbox">
								<input type="checkbox" id="checkbox1" name="options[]" value="1"/>
								<label for="checkbox1"></label>
							</span>
						</td>
						<td>{driver.name}</td>
						<td>{driver.email}</td>
            <td>{driver.phone_number}</td>
            <td style={{color: "green"}}>Edit</td>
             {/* <td>{bus.plate_number}</td> */}
					</tr>
				))}
				</tbody>
			</table>


       </div>
  )
}

export default Drivers