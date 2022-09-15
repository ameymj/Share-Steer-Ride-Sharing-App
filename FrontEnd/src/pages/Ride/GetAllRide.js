import React, { useEffect, useState } from 'react'
import axios from 'axios';
import ContactDriver from './ContactDriver';
import ReactSession from 'react-client-session';
import { useHistory } from 'react-router-dom';
import ViewDriverProfile from '../Review/ViewDriverProfile';

function GetAllRide(props) {
  const rides=props.ride;
  console.log(rides);
  const [check,setCheck]=useState(false);
  const [check1,setCheck1]=useState(false);
  const [driver,setDriver]=useState("");
  const [rating,setRating] = useState("");
  const user=ReactSession.get("user");

  for (let index = 0; index < props.city.length; index++) {
    
    if(rides.from_city==props.city[index].cityId)
    {
      rides.from_city=props.city[index].cityName;
    }
    if(rides.to_city==props.city[index].cityId)
    {
      rides.to_city=props.city[index].cityName;
    }
    
  }
  const history=useHistory();
  const book = event => {
    localStorage.setItem("myRide",rides);

    history.push({
      pathname:ReactSession?.get('user')?'/login':'/bookride',
      state:rides
    });

 };



  function getDetails()
  {
    axios.get("http://localhost:8080/sharesteer/getdetailsbyid/"+rides.user_id,)
      .then((response) => {
        setCheck(!check);
        setDriver(response.data);

      })
      .catch((error) => {
        console.log(error);
        setCheck(false);
      })



  }

  function driverprofile()
  {
    axios.get("http://localhost:8080/sharesteer/getdetailsbyid/"+rides.user_id,)
      .then((response) => {
        setCheck1(!check1);
        setDriver(response.data);

      })
      .catch((error) => {
        console.log(error);
        setCheck1(false);
      })

      // you have to write here
      axios.get("http://localhost:8080/sharesteer/getRatings/"+rides.user_id,)
      .then((response) => {
        console.log(rating)
        setRating(response.data);

      })
      .catch((error) => {
        console.log(error);
        
      })

  }

  return (
    <div id='ride'  style={{'textAlign':'center'}}>
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
        </ul>
        <div className="card-body">
          {/* <a href={booker?'/bookride':'/login'} className='btn btn-dark btn-lg btn-block' onClick={book}>Book Ride</a> */}
          <b className='btn btn-dark btn-lg btn-block' onClick={book}>Book Ride</b>
          <b className='btn btn-dark btn-lg btn-block' onClick={getDetails}>Contact Driver</b>
          <b className='btn btn-dark btn-lg btn-block' onClick={driverprofile}>View Driver Profile/rating</b>
          {check && <ContactDriver user={driver}/>}
          {check1 && <ViewDriverProfile user={driver} rating={rating}/>}
          {/* {booker? <BookRide user={user}/>:  <Login/>} */}

        </div>
      </div>

    </div>
  )
}
export default GetAllRide