// // import { useState } from "react";


// // const Addbus = () => {
// //   const [plateNumber, setPlateNumber] = useState('');
// //   const [cost, setCost] = useState('');
// //   const [driver_id, setDriver_id] = useState('');
 

// //   const handleSubmit = (e) => {
// //     e.preventDefault();
// //     const Addbus = {plateNumber,cost, driver_id };

// //     // fetch('http://localhost:8000/buses/', {
// //     //   method: 'POST',
// //     //   headers: { "Content-Type": "application/json" },
// //     //   body: JSON.stringify(bus)
// //     // }).then(() => {
// //     //   // history.go(-1);
// //     //   history.push('/');
// //     // })
// //   }

// //   return (
// //     <div className="addbus">
// //       <h2>Fill in details</h2>
// //       <form onSubmit={handleSubmit}>
// //         <label>PlateNumber:</label>
// //         <input 
// //           type="text" 
// //           required 
// //           value={plateNumber}
// //           onChange={(e) => setPlateNumber(e.target.value)}
// //         />
// //         <label>Bus cost:</label>
// //         <textarea
// //           required
// //           value={cost}
// //           onChange={(e) => setCost(e.target.value)}
// //         ></textarea>
// //         <label>Bus driver_id:</label>
// //         <select
// //           value={driver}
// //           onChange={(e) => setDriver_id(e.target.value)}
// //         >
// //           <option value="mario">mario</option>
// //           <option value="yoshi">yoshi</option>
// //         </select>
// //         <button>Add Bus</button>
// //       </form>
// //     </div>
// //   );
// // }
 
// // export default Addbus;

// import { useState } from "react"
// import react from "react"
  
// const AddBus = () => {
//   const [driver_id, setDriver_id] = useState("");
//   const [plateNumber, setPlateNumber] = useState("");
//   const [availablity, setAvailability] = useState("");
//   const [cost, setCost] = useState("");
//   const [capacity, setCapacity] = useState("");
//   const [date, setDate] = useState("");
//   const [time, setTime] = useState("");

//   // const handleChange = (event) => {
//   //   setAvailability(event.target.value);
//   // };

//   // function handleSubmit(e) {
//   //   e.preventDefault();
//   //   fetch("https://bus-booking-web-api.herokuapp.com/drivers`", {
//   //     method: "POST",
//   //     body: JSON.stringify({
        // driver_id: driver_id,
        // plateNumber: plateNumber,
        // availability: availablity,
        // cost: cost,
        // capacity: capacity,
        // date: date,
        // time: time,
//   //     }),
//   //     headers: {
//   //       "Content-type": "application/json; charset=UTF-8",
//   //     },
//   //   });
//   //   alert("Bus Added Successfully");
    // setDriver_id("");
    // setPlateNumber("");
    // setAvailability("");
    // setCost("");
    // setCapacity("");
    // setDate("");
    // setTime("");
//   // }

//   return (
//          <div className="adds">
//            <h2>Fill in details</h2>
//            <form onSubmit={handleSubmit}>
//             <label>PlateNumber:</label>
//           <input 
//                type="text" 
//                required 
//                value={plateNumber}
//                onChange={(e) => setPlateNumber(e.target.value)}
//             />
//             <label>Bus cost:</label>
//             <textarea
//                required
//               value={cost}
//                onChange={(e) => setCost(e.target.value)}
//              ></textarea>
//              <label>Bus driver_id:</label>
//              <select
//                value={driver_id}
//                onChange={(e) => setDriver_id(e.target.value)}
//              >
//               <option value="yes">Available</option>
//               <option value="no">Not Available</option>
//             </select>
//             <button>Add Bus</button>
//           </form>
//         </div>
//       );
//      }
     


// export default AddBus;

// import React, { useState } from 'react'
// import { TextField, Button, makeStyles } from '@material-ui/core'


// const useStyles = makeStyles(theme => ({
//   root: {
//     display: "flex",
//     flexDirection: "column",
//     justifyContent: "Center",
//     alignItems: "center",
//     padding: theme.spacing(2),
    

//     '& .MuiTextField-root': {
//       margin: theme.spacing(1),
//       width: "300px"
//     },

//     '& .MuiButtonBase-root': {
//       margin: theme.spacing(2)
//     }
//   }
// }));

// function NewBusForm ({ handleClose, onAddService, user }) {

//   const classes = useStyles();
//     const [driver_id, setDriver_id] = useState("");
//     const [plateNumber, setPlateNumber] = useState("");
//     const [availablity, setAvailability] = useState("");
//     const [cost,setCost] = useState("");
//     const [capacity, setCapacity] = useState("");
//     const [date, setDate] = useState("");
//     const [time, setTime] = useState("");
//     const [from, setFrom] = useState("");
//     const [to,setTo] = useState("");




//   const handleSubmit = (e) => {
//     e.preventDefault();

//     const newBus = {
//       driver_id: driver_id,
//         plateNumber: plateNumber,
//         availability: availablity,
//         cost: cost,
//         capacity: capacity,
//         date: date,
//         time: time,
//         from: from,
//         to: to,
      
//     }

//     fetch("https://bus-booking-web-api.herokuapp.com/drivers", {
//       method: "POST",
//       headers: {
//         "Content-Type":"application/json"
//       },
//       body: JSON.stringify(newBus)
//     })
//     .then((resp) => resp.json())
//     .then((data) => NewBusForm(data))

//     handleClose();
//   }

//   return (
//       <form className={classes.root} onSubmit={handleSubmit}>
//         <TextField 
//           label="Plate Number" 
//           variant="filled" 
//           required
//           value={plateNumber}
//           onChange = {(e) => setPlateNumber(e.target.value)}
//         />
//         <TextField 
//           label="Bus Capacity" 
//           variant="filled" 
//           type="integer"
//           required
//           value={capacity}
//           onChange = {(e) => setCapacity(e.target.value)}
//         />
//         <TextField 
//           label="Cost" 
//           variant="filled" 
//           type="integer"
//           required
//           value={cost}
//           onChange = {(e) => cost(e.target.value)}
//         />
//         <TextField 
//           label="Point of PickUp" 
//           variant="filled" 
//           type="from"
//           required
//           value={from}
//           onChange = {(e) => setFrom(e.target.value)}
//         />
//         <TextField 
//           label="Destination" 
//           variant="filled" 
//           type="to"
//           required
//           value={to}
//           onChange = {(e) => setTo(e.target.value)}
//         />

//         <TextField 
//           label="Driver" 
//           variant="filled" 
//           required
//           value={driver_id}
//           onChange = {(e) => setDriver_id(e.target.value)}
//         />

        

//         <TextField 
//           label="Availablity" 
//           variant="filled" 
//           type="text" 
//           required
//           value={availablity}
//           onChange = {(e) => setAvailability(e.target.value)}
//         />
        
//        <TextField 
//           label="Date" 
//           variant="filled" 
//           type="text"
//           required
//           value={date}
//           onChange = {(e) => setDate(e.target.value)}
//         />
//          <TextField 
//           label="Time of departure" 
//           variant="filled" 
//           type="time"
//           required
//           value={time}
//           onChange = {(e) => setTime(e.target.value)}
//         />
        
//         <div>
//           <Button variant="contained" onClick={handleClose}>Cancel</Button>
//           <Button type="submit" variant="contained">Add Bus</Button>
//         </div>
//       </form>
//   )
// }

// export default NewBusForm;

import React from 'react'
import { useState } from 'react';
import { useContext } from 'react';
// import { UserContext } from '../App';

function Addbus(){
  const user = useContext(useContext);
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
    <form onSubmit={handleSubmit} className="addbus">
      <input onChange={handleChange} type="text" name="plate_number" placeholder='plate number' /> <br />
      <input onChange={handleChange} type="number" name ="no_of_seats" placeholder='number of seats' /> <br />
      <input onChange={handleChange} type="number" name="cost_per_seat" placeholder='cost per seat' /> <br />
      <input onChange={handleChange} type="text" name="from" placeholder='PickUp point' /> <br />
      <input onChange={handleChange} type="text" name="to" placeholder='DropOff point' /> <br />
      <input onChange={handleChange} type="date" name="travel_date" placeholder='Travel date' /> <br />
      <input onChange={handleChange} type="time" name="travel_time" placeholder='Travel time' /> <br />
      <label>Available<input onChange={handleChange} type="checkbox"  name="available" /> </label> <br />
      <input type="number" onChange={handleChange} name="driver_id" hidden /> <br />
      <input onChange={handleChange} type="submit" value='Add bus' /> <br />
    </form>
  )
}

export default Addbus

