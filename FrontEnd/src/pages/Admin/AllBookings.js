import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { ReactSession } from 'react-client-session'

export default function AllBookings() {
    const user = ReactSession.get("user");
    const [myBookings, setMyBookings] = useState([])
    useEffect(() => {
        axios.get("http://localhost:8080/sharesteer/getAllBooking")
            .then((response) => {
                setMyBookings(response.data);
            })
            .catch((error) => {
                console.log(error);
            })
    }, [])

    return (
        <div>{
            myBookings.map((myBook, index) => (
                <div id='ride' key={index + "ride"}>
                    <div className="card" key={index}>
                        {
                            <div className="card-body" key={index + "cardbody"}>
                                <h5 className="card-title" key={index + "cardtitle"}>Journey :{myBook.from_city}-{myBook.to_city}</h5>
                                <p className="card-text" key={index + "cardText"}>Description :{myBook.description}</p>
                            </div>
                        }
                        <ul className="list-group list-group-flush" key={index + "flush"}>
                            <li className="list-group-item" key={index + "jd"}>Journey Date :{myBook.journey_date}</li>
                            <li className="list-group-item" key={index + "jt"}>Journey Time :{myBook.journey_time}</li>
                            <li className="list-group-item" key={index + "lg"}>Booking-Date :{myBook.booking_date}</li>
                            <li className="list-group-item" key={index + "gi"}>Seats :{myBook.number_of_seats}</li>
                            <li className="list-group-item" key={index + "li"}>Fare : {myBook.amount}</li>
                            <li className="list-group-item" key={index + "tf"}>Total Fare : {myBook.amount * myBook.number_of_seats}</li>
                        </ul>
                        <hr />
                    </div>
                </div>
            ))
        }
        </div>

    )
}