import React from 'react'
import { useState,useEffect} from "react"

function Buses() {
  const [buses, setBuses]=useState([])
  useEffect(() => {
    fetch("https://bus-booking-web-api.herokuapp.com/buses")
    .then((res) => res.json())
    .then((buses)=>setBuses(buses))
},[]);
 console.log(buses)
 
  return (
    <div>
        <h1>Total Buses</h1>
        <table className='table table-bordered table-dark table table-hover'>
<thead>
					<tr>
						<th>
							<span className="custom-checkbox">
								<input type="checkbox" id="selectAll"/>
								<label for="selectAll"></label>
							</span>
						</th>
						<th>Plate Number</th>
            <th>Fare</th>
            <th>Origin</th>
            <th>Destination</th>
            <th>Departure</th>
            <th>Travel Date</th>
            <th>Available</th>
            <th>Capacity</th>
            {/* <th>Edit Details</th> */}
						
						
					</tr>
				</thead>
				<tbody>
        {buses.map((bus, index)=> (
					<tr key={index}>
						<td >
							<span className="custom-checkbox">
								<input type="checkbox" id="checkbox1" name="options[]" value="1"/>
								<label for="checkbox1"></label>
							</span>
						</td>
						<td>{bus.plate_number}</td>
            <td>{bus.cost_per_seat}</td>
            <td>{bus.from}</td>
           	<td>{bus.to}</td>
             <td>{bus.travel_time}</td>
             <td>{bus.travel_date}</td>
             <td>{bus.available?"Yes":"No"}</td>
             <td>{bus.seats.length}</td>
             {/* <td style={{ color: "pink" }}>Edit</td> */}
             
            
             
						
					</tr>
				))}
				</tbody>
			</table>

    </div>
  )
}

export default Buses