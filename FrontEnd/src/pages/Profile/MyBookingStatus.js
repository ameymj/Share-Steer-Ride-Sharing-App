import React, { useEffect, useState } from 'react'
import { ReactSession } from 'react-client-session';
import axios from 'axios';

export default function MyBookingStatus() {
    const user = ReactSession.get("user");
    const [bookings, setBookings] = useState([]);
    const [check, setCheck] = useState(false)

    useEffect(() => {
        axios.get("http://localhost:8080/sharesteer/getmybookings/" + user.user_id)
            .then((response) => {
                setBookings(response.data)
                setCheck(true);
            })
            .catch((error) => { console.log(error); })

    },[])
    return (
        <div>
            <h1 style={{ 'textAlign': 'center' }}><b><u>My Bookings Status</u></b></h1>
            {check &&
                bookings.map((myBook, index) => (
                    <div id='ride' key={index + "ride"}>
                        <div className="card" key={index}>
                            {
                                <div className="card-body" key={index + "cardbody"}>
                                    <h5 className="card-title" key={index + "cardtitle"}>Journey :{myBook.from_city}-{myBook.to_city}</h5>
                                    <p className="card-text" key={index + "cardText"}>Description :{myBook.description}</p>
                                </div>
                            }
                            <ul className="list-group list-group-flush" key={index + "flush"}>
                                <li className="list-group-item" key={index + "jd"}>Journey Date :{myBook.date_of_journey}</li>
                                <li className="list-group-item" key={index + "jt"}>Journey Time :{myBook.time_of_journey}</li>
                                <li className="list-group-item" key={index + "lg"}>Booking-Date :{myBook.booking_date}</li>
                                <li className="list-group-item" key={index + "gi"}>Seats :{myBook.number_of_seats}</li>
                                <li className="list-group-item" key={index + "li"}>Fare : {myBook.amount}</li>
                                <li className="list-group-item" key={index + "tf"}>Total Fare : {myBook.amount * myBook.number_of_seats}</li>
                                <li className="list-group-item" key={index + "lb"}>Status : {myBook.status}</li>
                            </ul>
                        </div>
                    </div>
                ))
            }
        </div>
    )
}
