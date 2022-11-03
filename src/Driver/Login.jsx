//import React from 'react'
//import { useState } from 'react'
//import "./Driver.css"
//function Login({onLogin}) {
//  const [formdata, setFormData] = useState({
//    email: "",
//    password: "",
//    role: ""
//  })
  
//  const handleChange =(e) =>{
//    setFormData({...formdata, [e.target.name]: e.target.value})
//  }
  
//  const handleSubmit =(e) =>{
//    e.preventDefault()
//    fetch("https://bus-booking-web-api.herokuapp.com/login", {
//      credentials: "include",
//      method: "POST",
//      headers:{
//        "Content-Type" :"application/json"
//      },
//      body: JSON.stringify(formdata)
//    })
//    .then((r) =>{
//      if(r.ok){
//        r.json().then((user) =>{
//          let message = `${user.name} has successfully logged in.`
//          console.log(message);
//          onLogin()
//        })
//      }else{
//        console.log("Login failed");
//      }
      
//    })

//    //.then(res => res.json())
//    //.then(user => {
//    //  const message = `${user.name} has successfully logged in`
//    //  console.log(message);
//    //  onLogin()
//    //})
//  }
  
//  const handleLogout =() =>{
//    fetch("https://bus-booking-web-api.herokuapp.com/logout", {
//      credentials: "include",
//      method: "DELETE"
//    })
//    console.log("logged out")
//  }
//  return (
//    <div className="row">
//    <div  id="formbg" class="column">
    
//    </div>
//    <div class="column">
//      <form onSubmit={handleSubmit} className="form">
//        <div className="mb-4">
//        <input type="text"
//         name="email"
//          onChange={handleChange}
//          placeholder="email"
//        />
//        </div>
       
//        <div className="mb-4">
//        <input type="text"
//         name="password"
//          onChange={handleChange}
//          placeholder="password"
//        />
//        </div>
//        <div className="mb-4">
//        <input type="text"
//         name="role"
//          onChange={handleChange} 
//          placeholder="role"
//        />
//      </div>
//        <div className="mb-4">
//        <input type="submit" value="Login" />
//        </div>
//      </form>
//      <button onClick={handleLogout}>Logout </button>
     
//    </div>
//    </div>
//  );
//  }
  
  

//export default Login