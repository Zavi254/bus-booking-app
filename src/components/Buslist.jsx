import { Link } from 'react-router-dom';
// import Addbus from "./Addbus";



const BusList = ({ buses }) => {
  return (
    <div className="busparent">
      {buses.map(bus => (
        <div className="bus-preview" key={bus.id} >
          <Link to={`./buses/${bus.id}`}>
            <h2> Plate Number{ bus.plateNumber }</h2>
            <h2>Capacity { bus.no_of_seats }</h2>
            <h2>Fare { bus.cost_per_seat }</h2>
            <h2>PickUp pont { bus.from }</h2>
            <h2>DropOff point { bus.to }</h2>
            <h2>Time { bus.time }</h2>
          </Link>
        </div>
      ))}
    </div>
  );
}
 
export default BusList;