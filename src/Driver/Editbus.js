import { useState } from 'react';
import { useContext } from 'react';
import {useNavigate} from 'react-router-dom';
import { UserContext } from '../App';
import './Driver.css'
import { NavLink } from 'react-router-dom';
function Editbus ({bus}) {

  const user = useContext(UserContext);
  const [formData, setFormData] = useState({})
  const [showCard, setShowCard] = useState(true)
  function handleChange(e){
    setFormData({...formData, driver_id: user.id, [e.target.name]: e.target.value})
  }

  const navigate = useNavigate()
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
    .then((r) => {
      if(r.ok){
        navigate(-1)
      }
      else{
        r.json().then((err) => console.log(err.errors))
      }
    })
    
  }
  
  return (
    <>
    {showCard? 
    <div className="col">
                        <div className="card h-100" style={{backgroundColor:"#18BD28"}}>
                            {/* <img src="..." className="card-img-top" alt="..." /> */}
                            <div className="card-body">
                                <h5 className="card-title"></h5>
                                <NavLink className="card-text" to="/addbus">Edit Bus</NavLink>
                            </div>
                            <a href="buses" className="small-box-footer" style={{textDecoration: 'none', color:'white'}}><i className="bi bi-arrow-right-circle-fill" /></a>
                        </div>
                    </div>
                    :

                    <div className="row">
                    <div  id="formbg" className="column">
                    
                    </div>
                    <div class="column">
                    <form  onSubmit={handleSubmit}className="form" >
                    
                    <div className="mb-4">
                      <input
                        
                        type="text"
                        name="plate_number"
                        defaultValue={bus.plate_number}
                        className="form-control p-3"
                        placeholder="Enter Plate Number"
                        onChange={handleChange}    />
                    </div>
                    <div className="mb-4">
                      <input
                        
                        type="number"
                        name="no_of_seats"
                        className="form-control p-3"
                        placeholder="Enter Capacity"
                        onChange={handleChange}
                      />
                    </div>
                    <div className="mb-4">
                      <input
                        
                        type="number"
                        name="cost_per_seat"
                        className="form-control p-3"
                        placeholder="Enter Bus Fare"
                        onChange={handleChange}      />
                    </div>
                    <div className="mb-3">
                      <input
                       
                        type="name"
                        name="from"
                        className="form-control p-3"
                        placeholder=" Enter Origin"
                        onChange={handleChange}
                      />
                    </div>
                    <div className="mb-3">
                      <input
                       
                        type="name"
                        name="to"
                        className="form-control p-3"
                        placeholder="Enter Destination"
                        onChange={handleChange}
                      />
                    </div>
                    <div className="mb-3">
                      <input
                       
                        type="time"
                        name="travel_time"
                        className="form-control p-3"
                        placeholder="Enter Departure Time"
                        onChange={handleChange}
                      />
                    </div>
                    <div className="mb-3">
                      <input
                       
                        type="date"
                        name="travel_date"
                        className="form-control p-3"
                        placeholder="Enter Date of Travel"
                        onChange={handleChange}
                      />
                    </div>
                    <div>
                   <div>
                        <label>Available 
                          <input type="checkbox" name="available" onChange={handleChange}/>
                        </label>
                    </div>
                    </div>
                
                    < input className="btn btn-primary barlowFont signRegisterBtn mb-4 mt-2"
                      text="Add bus"
                      type="submit" 
                    />
                    
                  </form>
                  </div>
                    </div>
    
  }
    </>
                    
    
   
  )
}

export default Editbus