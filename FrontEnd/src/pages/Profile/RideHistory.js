import React from 'react'
import { ReactSession } from 'react-client-session';

function RideHistory(props) {
  const rides1=props.ride;
  const user=ReactSession.get("user");

  const rides =rides1.filter(funtion (r){
    return r.user_id == user.user_id 
  } );

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
      </div>

    </div>
  )
}

export default RideHistory