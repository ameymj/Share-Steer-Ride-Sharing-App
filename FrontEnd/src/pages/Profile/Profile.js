import React from 'react'


function Profile(props) {
  const user=props.user;
  
  return (
    <div id='ride'>
      <div className="card">
        <div className="card-body">
         <img src={user.photo} />  
          <h5 className="card-title">Name : {user.firstName}</h5>
        </div>
        <ul className="list-group list-group-flush">
          <li className="list-group-item">Last-Name:{user.lastName} </li>
          <li className="list-group-item">Gender :{user.gender}</li>
          <li className="list-group-item">Email : {user.email}</li>
          <li className="list-group-item">Contact No : {user.contact}</li>
        </ul>
        <div className="card-body">
          <a href="/UpdateProfile" className="card-link">update Profile</a>
          <a href="/MyRides" className="card-link">Show all Rides Published by me</a>
          <a href="/MyBookings" className="card-link">Show all Bookings done by me</a>
        </div>
      </div>

    </div>
  )
}

export default Profile