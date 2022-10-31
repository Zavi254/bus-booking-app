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
//   //   fetch("https://localhost3000/buses`", {
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

import React, { useState } from 'react'
import { TextField, Button, makeStyles } from '@material-ui/core'


const useStyles = makeStyles(theme => ({
  root: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "Center",
    alignItems: "center",
    padding: theme.spacing(2),
    

    '& .MuiTextField-root': {
      margin: theme.spacing(1),
      width: "300px"
    },

    '& .MuiButtonBase-root': {
      margin: theme.spacing(2)
    }
  }
}));

function NewBusForm ({ handleClose, onAddService, user }) {

  const classes = useStyles();
    const [driver_id, setDriver_id] = useState("");
    const [plateNumber, setPlateNumber] = useState("");
    const [availablity, setAvailability] = useState("");
    const [cost, setCost] = useState("");
    const [capacity, setCapacity] = useState("");
    const [date, setDate] = useState("");
    const [time, setTime] = useState("");



  const handleSubmit = (e) => {
    e.preventDefault();

    const newService = {
      driver_id: driver_id,
        plateNumber: plateNumber,
        availability: availablity,
        cost: cost,
        capacity: capacity,
        date: date,
        time: time,
      
    }

    fetch("/buses", {
      method: "POST",
      headers: {
        "Content-Type":"application/json"
      },
      body: JSON.stringify(newBus)
    })
    .then((resp) => resp.json())
    .then((data) => onAddService(data))

    handleClose();
  }

  return (
      <form className={classes.root} onSubmit={handleSubmit}>
        <TextField 
          label="Type of service" 
          variant="filled" 
          required
          value={service}
          onChange = {(e) => setService(e.target.value)}
        />

        <TextField 
          label="Apartment" 
          variant="filled" 
          required
          value={location}
          onChange = {(e) => setLocation(e.target.value)}
        />

        <TextField 
          label="Location" 
          variant="filled" 
          type="text" 
          required
          value={address}
          onChange = {(e) => setAddress(e.target.value)}
        />

        <TextField 
          label="Phone number" 
          variant="filled" 
          type="text"
          required
          value={contact}
          onChange = {(e) => setContact(e.target.value)}
        />

        <TextField 
          label="Email address" 
          variant="filled" 
          type="email"
          value={user.email}
        />

       <TextField 
          label="Description of service" 
          variant="filled" 
          type="text"
          required
          value={description}
          onChange = {(e) => setDescription(e.target.value)}
        />

        <div>
          <Button variant="contained" onClick={handleClose}>Cancel</Button>
          <Button type="submit" variant="contained">Submit</Button>
        </div>
      </form>
  )
}

export default NewBusForm;

