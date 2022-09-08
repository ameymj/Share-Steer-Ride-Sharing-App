import React from 'react'

function GetAllRide(props) {
  const rides=props.ride;
  // const source=props.source;
  // const destination=props.destination;
  // const date=props.date;
  // console.log(source+" "+destination+" "+date);
  // let rides=rydo[0];
  return (
    <div id='ride'>
      <div className="card">
        <div className="card-body">
          <h5 className="card-title">Journey : {rides.from_city}-{rides.to_city}</h5>
          <p className="card-text">Description :{rides.description}</p>
        </div>
        <ul className="list-group list-group-flush">
          <li className="list-group-item">Date-Time:{rides.date_of_journey} {rides.time_of_journey}</li>
          <li className="list-group-item">Seats :{rides.available_seats}/{rides.total_seats}</li>
          <li className="list-group-item">Fare : {rides.ride_cost}</li>
        </ul>
        <div className="card-body">
          <a href="#" className="card-link">Card link</a>
          <a href="#" className="card-link">Another link</a>
        </div>
      </div>

    </div>
  )
}

export default GetAllRide