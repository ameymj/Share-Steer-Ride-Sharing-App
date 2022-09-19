import React from 'react'
import axios from 'axios';
import User from '../Profile/images/user.jpg'
import { ReactSession } from 'react-client-session';
function Admin() {
  const user=ReactSession.get("user");
  console.log(user);
    axios.get("http://localhost:8080/sharesteer/getImage/"+user.user_id)
        .then(function (response) {
        });
  return (
    <center>
    <div id='ride'>
      <div className="card">
        <div className="card-body">
        <img src={User} style={{'borderRadius':'50%','height':'400px','width':'350px'}} />
          <h1 className="card-title">{user.first_name} {user.last_name}</h1>
        </div>
        <ul className="list-group list-group-flush">
          <li className="list-group-item"><b>Gender </b>:{user.gender}</li>
          <li className="list-group-item"><b>Email </b>: {user.email_id}</li>
          <li className="list-group-item"><b>Contact No </b>: {user.contact}</li>
        </ul>
        <div className="card-body">
          <a href="/allUser" className="btn btn-dark btn-lg btn-block"><b>All User</b></a>
          <a href="/UpdateProfile" className="btn btn-dark btn-lg btn-block"><b>Update User</b></a>
          <a href="/ridehistory" className="btn btn-dark btn-lg btn-block"><b>All Rides</b></a>
          <a href="/mybookings" className="btn btn-dark btn-lg btn-block"><b>All Bookings</b></a>
        </div>
      </div>

    </div>
    </center>
  )
}

export default Admin