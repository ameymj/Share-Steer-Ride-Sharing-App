import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { ReactSession } from 'react-client-session'
import ContactDriver from '../Ride/ContactDriver';

export default function MyBookings() {
    const user = ReactSession.get("user");
    const [myBookings, setMyBookings] = useState([])
    const [myride, setMyRide] = useState([])
    const [driver, setDriver] = useState("")
    const [check, setCheck] = useState(false)

    

useEffect(()=>{
    console.log("useEffect Clled");
    axios.get("http://localhost:8080/sharesteer/getAllrides")
        .then((response) => {
            setMyRide(response.data);
        })
        .catch((error) => {
            console.log(error);
        })

    axios.get("http://localhost:8080/sharesteer/getAllBookings/" + user.user_id)
        .then((response) => {
            setMyBookings(response.data);
        })
        .catch((error) => {
            console.log(error);
        })
    },[])

    return (
        <div>{
            myBookings.map((myBook, index) => (
                <div id='ride' key={index + "ride"}>
                    <div className="card" key={index}>
                        {/* <div className="card-body" key={index + "cardbody"}>
                            <h5 className="card-title" key={index + "cardtitle"}>Journey : {myBook.from_city}-{myBook.to_city}</h5>
                            <p className="card-text" key={index + "cardText"}>Description :{myBook.description}</p>
                        </div> */
                            <div className="card-body" key={index + "cardbody"}>
                                <h5 className="card-title" key={index + "cardtitle"}>Journey :{myride.map((ride)=>{if(ride.ride_id===myBook.ride_id) return ride.from_city})}-{myride.map((ride)=>{if(ride.ride_id===myBook.ride_id) return ride.to_city})}</h5>
                                <p className="card-text" key={index + "cardText"}>Description :{myride.map((ride)=>{if(ride.ride_id===myBook.ride_id) return ride.description})}</p>
                            </div>


                        }

                        <ul className="list-group list-group-flush" key={index + "flush"}>
                           <li className="list-group-item" key={index + "jd"}>Journey Date :{myride.map((ride)=>{if(ride.ride_id===myBook.ride_id) return ride.date_of_journey})}</li>
                           <li className="list-group-item" key={index + "jt"}>Journey Time :{myride.map((ride)=>{if(ride.ride_id===myBook.ride_id) return ride.time_of_journey})}</li>
                            <li className="list-group-item" key={index + "lg"}>Booking-Date :{myBook.booking_date}</li>
                            <li className="list-group-item" key={index + "gi"}>Seats :{myBook.number_of_seats}</li>
                            <li className="list-group-item" key={index + "li"}>Fare : {myBook.amount}</li>
                            <li className="list-group-item" key={index + "tf"}>Total Fare : {myBook.amount * myBook.number_of_seats}</li>
                        </ul>
                    </div>
                </div>
            ))
        }
        </div>

    )
}
