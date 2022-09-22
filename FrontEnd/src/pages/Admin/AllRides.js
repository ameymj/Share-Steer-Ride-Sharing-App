import React, { useEffect, useState } from 'react'
import axios from 'axios';
import "../Ride/ride.css";

function AllRides() {
  const [ride,setRide]=useState([])
  const [add,setAdd]=useState(false)

  useEffect(()=>{

    axios.get("http://localhost:8080/sharesteer/getAllrides")
      .then((response) => {
        setRide(response.data);
        setAdd(true)

      })
      .catch((error) => {
        console.log(error);
      })

  },[])

  return (
    <div>
          <h1 style={{ 'textAlign': 'center' }}><b><u>Admin Page</u></b></h1>
    {add && ride.map((rides)=>(<div id='ride'  style={{'textAlign':'center'}}>
      <div className="card">
        <div className="card-body">
          <h5 className='btn btn-dark btn-lg btn-block'><b>Journey</b> : {rides.from_city}-{rides.to_city}</h5>
          <p className="card-text"><b>Description</b> :{rides.description}</p>
        </div>
        <ul className="list-group list-group-flush">
          <li className="list-group-item"><b>Date</b>:{rides.date_of_journey}</li>
          <li className="list-group-item"><b>Time</b>:{rides.time_of_journey}</li>
          <li className="list-group-item"><b>Seats</b> :{rides.available_seats}/{rides.total_seats}</li>
          <li className="list-group-item"><b>Fare</b> : {rides.ride_cost}</li>
          <li className="list-group-item"><b>Completed</b> : {rides.status?"Completed":"Incomplete"}</li>
        </ul>
      </div>
    </div>))}
    </div>
  )
}
export default AllRides