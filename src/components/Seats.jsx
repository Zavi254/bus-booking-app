import { confirmAlert } from "react-confirm-alert";
import "react-confirm-alert/src/react-confirm-alert.css";

const Seats = ({ seats }) => {
  const handleClick = (e) => {
    e.preventDefault();
    const id = e.target.id;
    fetch(`https://bus-booking-web-api.herokuapp.com/seats/${id},`, {
      credentials: "include",
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ is_booked: true }),
    });
  };

  function handleAlreadyBooked() {
    alert(
      "Green seats are already booked.Red seats are available. Check if there are any."
    );
  }

  function handleBook(e) {
    confirmAlert({
      title: "Confirm booking",
      message: "Do you wish to book seat?",
      buttons: [
        {
          label: "Book",
          onClick: () => handleClick(e),
        },
        {
          label: "Exit",
          onClick: () => null,
        },
      ],
    });
  }

  return (
    <div className="d-flex justify-content-between">
      <div className="d-flex">
        <div>
          {seats.slice(0, 12).map((seat) => (
            <div
              onClick={seat.is_booked ? handleAlreadyBooked : handleBook}
              style={{
                width: "50px",
                height: "50px",
                borderRadius: "7px",
                fontWeight: "bold",
                backgroundColor: seat.is_booked ? "green" : "red",
                color: "white",
                marginRight: "50px",
              }}
              className="card text-center mb-2"
              key={seat.id}
            >
              {seat.seat_no}
            </div>
          ))}
        </div>
        <div>
          {seats.slice(12, 24).map((seat) => (
            <div
              onClick={seat.is_booked ? handleAlreadyBooked : handleBook}
              style={{
                width: "50px",
                height: "50px",
                borderRadius: "7px",
                fontWeight: "bold",
                backgroundColor: seat.is_booked ? "green" : "red",
                color: "white",
              }}
              className="card text-center mb-2"
              key={seat.id}
            >
              {seat.seat_no}
            </div>
          ))}
        </div>
      </div>
      <div className="d-flex">
        <div>
          {seats.slice(24, 40).map((seat) => (
            <div
              onClick={seat.is_booked ? handleAlreadyBooked : handleBook}
              style={{
                width: "50px",
                height: "50px",
                borderRadius: "7px",
                fontWeight: "bold",
                backgroundColor: seat.is_booked ? "green" : "red",
                color: "white",
                marginRight: "50px",
              }}
              className="card text-center mb-2"
              key={seat.id}
            >
              {seat.seat_no}
            </div>
          ))}
        </div>
        <div>
          {seats.slice(40, seats.length).map((seat) => (
            <div
              onClick={seat.is_booked ? handleAlreadyBooked : handleBook}
              style={{
                width: "50px",
                height: "50px",
                borderRadius: "7px",
                fontWeight: "bold",
                backgroundColor: seat.is_booked ? "green" : "red",
                color: "white",
              }}
              className="card text-center mb-2"
              key={seat.id}
            >
              {seat.seat_no}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Seats;
