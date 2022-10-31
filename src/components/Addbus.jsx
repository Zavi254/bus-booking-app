import { useState } from "react";


const Buses = () => {
  const [plateNumber, setPlateNumber] = useState('');
  const [body, setCost] = useState('');
  const [driver, setDriver] = useState('mario');
 

  const handleSubmit = (e) => {
    e.preventDefault();
    const Addbus = {plateNumber,cost, driver };

    // fetch('http://localhost:8000/buses/', {
    //   method: 'POST',
    //   headers: { "Content-Type": "application/json" },
    //   body: JSON.stringify(bus)
    // }).then(() => {
    //   // history.go(-1);
    //   history.push('/');
    // })
  }

  return (
    <div className="addbus">
      <h2>Fill in details</h2>
      <form onSubmit={handleSubmit}>
        <label>PlateNumber:</label>
        <input 
          type="text" 
          required 
          value={plateNumber}
          onChange={(e) => setPlateNumber(e.target.value)}
        />
        <label>Bus cost:</label>
        <textarea
          required
          value={body}
          onChange={(e) => setCost(e.target.value)}
        ></textarea>
        <label>Bus driver:</label>
        <select
          value={driver}
          onChange={(e) => setDriver(e.target.value)}
        >
          <option value="mario">mario</option>
          <option value="yoshi">yoshi</option>
        </select>
        <button>Add Bus</button>
      </form>
    </div>
  );
}
 
export default Addbus;