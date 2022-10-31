import { Link } from 'react-router-dom';

const BusList = ({ buses }) => {
  return (
    <div className="bus-list">
      {buses.map(bus => (
        <div className="bus-preview" key={bus.id} >
          <Link to={`/buses/${bus.id}`}>
            <h2>{ bus.plateNumber }</h2>
            <p>Driver { bus.driver }</p>
          </Link>
        </div>
      ))}
    </div>
  );
}
 
export default BusList;