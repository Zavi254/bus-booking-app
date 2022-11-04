
import { useState,useEffect} from "react"


function Bookings() {
    const [bookings,setBookings]=useState([])
	const [id, setId]=useState(null)
    useEffect(() => {
        fetch("https://bus-booking-web-api.herokuapp.com/bookings")
        .then((res) => res.json())
        .then((bookings)=>setBookings(bookings))
    },[]);
     console.log(bookings)
	 function handleClick (e){
		alert(e.target.id)
		setId(id)

	 }
  return (
    <div>
      welcome To Bookings
      <div>
        <table className="table table-bordered table-dark table table-hover">
          <thead>
            <tr>
              <th>
                <span className="custom-checkbox">
                  <input type="checkbox" id="selectAll" />
                  <label for="selectAll"></label>
                </span>
              </th>
              <th>Name</th>
              <th>Phone Number</th>
              <th>Email</th>
              {/* <th>Bus</th> */}
              {/* <th>Edit Details</th> */}
            </tr>
          </thead>
          <tbody>
            {bookings.map((booking, index) => (
              <tr key={index}>
                <td>
                  <span className="custom-checkbox">
                    <input
                      type="checkbox"
                      id="checkbox1"
                      name="options[]"
                      value="1"
                    />
                    <label for="checkbox1"></label>
                  </span>
                </td>
                <td>{booking.customer.name}</td>
                <td>{booking.customer.phone_number}</td>
                <td>{booking.customer.email}</td>
                {/* <td>{booking.customer.bus}</td> */}
                {/* <td  onClick={handleClick}style={{ color: "pink" }}>Edit</td> */}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );}
export default Bookings