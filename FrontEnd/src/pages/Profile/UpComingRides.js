import React from 'react'
import { ReactSession } from 'react-client-session';

function UpComingRides(props) {
  const rides1=ReactSession.get('rides');
  const user=ReactSession.get("user");
  console.log(rides1)

  const rides =rides1.filter((r)=>{
    return (r.user_id == user.user_id)&&(r.date_of_journey>=new Date().toJSON().slice(0, 10).replace(/-/g, '-'))
  } );

  return (
    <div>
            <h1 style={{'textAlign':'center'}}><b><u>My Upcoming Rides</u></b></h1>

      {  
    rides.map((myride,index)=>(
    <div id='ride' key={index+"ride"}>
      <div className="card" key={index}>
        <div className="card-body" key={index+"cardbody"}>
          <h5 className="card-title" key={index+"cardtitle"}>Journey : {myride.from_city}-{myride.to_city}</h5>
          <p className="card-text" key={index+"cardText"}>Description :{myride.description}</p>
        </div>
        <ul className="list-group list-group-flush" key={index+"flush"}>
          <li className="list-group-item" key={index+"lg"}>Date-Time:{myride.date_of_journey} {myride.time_of_journey}</li>
          <li className="list-group-item" key={index+"gi"}>Seats :{myride.available_seats}/{myride.total_seats}</li>
          <li className="list-group-item" key={index+"li"}>Fare : {myride.ride_cost}</li>
          <li className="list-group-item" key={index+"ls"}>Status : {myride.status}</li>
        </ul>
      </div>
      </div>
      ))
}
    </div>
    
  )
}

export default UpComingRides