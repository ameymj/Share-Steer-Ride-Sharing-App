import React, { useState } from 'react';
import axios from 'axios';
import { ReactSession } from 'react-client-session'

export default function MyBookings() {
    const user = ReactSession.get("user");
    const [myBookings, setMyBookings] = useState([])
    const [myride, setMyRide] = useState("")


    axios.get("http://localhost:8080/sharesteer/getAllBookings/" + user.user_id)
        .then((response) => {
            setMyBookings(response.data);
        })
        .catch((error) => {
            console.log(error);
        })

    return (
        <div>{
            myBookings.map((myBook, index) => (
                <div id='ride' key={index + "ride"}>
                    <div className="card" key={index}>
                        {/* <div className="card-body" key={index + "cardbody"}>
                            <h5 className="card-title" key={index + "cardtitle"}>Journey : {myBook.from_city}-{myBook.to_city}</h5>
                            <p className="card-text" key={index + "cardText"}>Description :{myBook.description}</p>
                        </div> */
                            // axios.get("http://localhost:8080/sharesteer/getAllBookings/"+myBook.ride_id)
                            //     .then((response) => {
                            //         setMyRide(response.data);
                            //     })
                                // <div className="card-body" key={index + "cardbody"}>
                                // <h5 className="card-title" key={index + "cardtitle"}>Journey : {myride.from_city}-{myride.to_city}</h5>
                                // <p className="card-text" key={index + "cardText"}>Description :{myride.description}</p>
                                // </div>        
                        }
                        
                        <ul className="list-group list-group-flush" key={index + "flush"}>
                            <li className="list-group-item" key={index + "lg"}>Date :{myBook.booking_date}</li>
                            <li className="list-group-item" key={index + "gi"}>Seats :{myBook.number_of_seats}</li>
                            <li className="list-group-item" key={index + "li"}>Fare : {myBook.amount}</li>
                            <li className="list-group-item" key={index + "li"}>Total Fare : {myBook.amount*myBook.number_of_seats}</li>

                        </ul>
                    </div>
                </div>
            ))
        }
        </div>

    )
}
