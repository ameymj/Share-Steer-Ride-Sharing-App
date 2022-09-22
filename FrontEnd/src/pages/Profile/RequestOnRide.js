import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { ReactSession } from 'react-client-session';

export default function RequestOnRide() {

    const user = ReactSession.get("user");
    const [myride, setMyRide] = useState([])
    const [request, setRequest] = useState([])
    const [selected, setSelected] = useState(false)
    const [check, setChecked] = useState(false)
    const [id, setId] = useState("");

    console.log(request);

    useEffect(() => {
        axios.get("http://localhost:8080/sharesteer/getMyOnlyRide/" + user.user_id)
            .then((response) => {
                setMyRide(response.data);
                setChecked(true)
            })
            .catch((error) => {
                console.log(error);
            })
    }, [])

    function GetRequest() {
        console.log(id);
        axios.get("http://localhost:8080/sharesteer/getRequest/" + id)
            .then((response) => {
                setRequest(response.data);
                setSelected(true)
            })
            .catch((error) => {
                console.log(error);
            })
    }
    function successData(requ) {
        console.log(requ);
        axios.get("http://localhost:8080/sharesteer/confirmTicket/" + requ.booking_id)
        .then((response) => {
            alert(response.data)
        })
        .catch((error) => {
            console.log(error);
        })

    }

    function rejectData(requ) {
        console.log(requ);
        axios.get("http://localhost:8080/sharesteer/cancelTicket/" + requ.booking_id)
        .then((response) => {
            alert(response.data)
        })
        .catch((error) => {
            console.log(error);
        })
    }
    return (
        <div>
            <h1 style={{ 'textAlign': 'center' }}><b><u>Request For My Ride</u></b></h1>
            {
                check &&
                <>
                    <div>
                        <h2>Select Journey</h2>
                        <select className="form-select btn btn-dark btn-lg btn-block" aria-label="Default select example" onChange={(e) => { setId(e.target.value) }}>
                            <option value='0'>Select</option>
                            {myride.map((ride) => (<option key={ride.ride_id} value={ride.ride_id}>{ride.from_city}-{ride.to_city}({ride.available_seats})</option>))}
                        </select>
                    </div>
                    <div className="pt-1 mb-4">
                        <button className="btn btn-dark btn-lg btn-block" type="button" onClick={GetRequest}>Find All Request</button>
                    </div>

                </>
            }
            {selected &&
                request.map((req, index) => (
                    <div id='ride' key={index + "ride"}>
                        <div className="card" key={index}>
                            <div className="card-body" key={index + "cardbody"}>
                                <h5 className="card-title" key={index + "cardtitle"}>Passenger Name : {req.first_name}  {req.last_name}</h5>
                            </div>
                            <ul className="list-group list-group-flush" key={index + "flush"}>
                                <li className="list-group-item" key={index + "lb"}><b>Seats Booked:</b>{req.number_of_seats}</li>
                                <li className="list-group-item" key={index + "lg"}><b>Email-Id:</b>{req.email_id}</li>
                                <li className="list-group-item" key={index + "gi"}><b>Contact :</b>{req.contact}</li>
                                <li className="list-group-item" key={index + "li"}><b>Status : </b>{req.status}</li>
                                <li className="list-group-item" key={index + "la"}>
                                    <button className='btn btn-success' onClick={() => { successData(req) }}>Confirm</button>&nbsp;
                                    <button className='btn btn-danger' onClick={() => { rejectData(req) }}>Reject</button>
                                </li>
                            </ul>
                        </div>
                    </div>
                ))
            }
        </div>
    )
}
