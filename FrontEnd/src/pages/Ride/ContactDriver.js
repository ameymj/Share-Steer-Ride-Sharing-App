import React, { useEffect } from 'react'
import { useState } from 'react';
import axios from 'axios';
export default function ContactDriver(props) {
    const user = props.user;
    const [stars, setStars] = useState("");
    const [actual, setActual] = useState("");

    var arr = <b>Hello</b>

    useEffect(() => {
        axios.get("http://localhost:8080/sharesteer/getMyrating/" + user.user_id)
            .then((response) => {
                setStars(response.data)
            })
            .catch((error) => {
                console.log(error);
            })
    })

    console.log(stars);
    return (
        <div>
            <div id='ride' style={{ 'textAlign': 'center' }}>
                <div>
                    <div className="card-body">
                        <h5 className='btn btn-dark btn-lg btn-block'> {user.first_name} {user.last_name}</h5>
                        <p className="card-text"><b>Birthdate</b> :{user.birth_date}</p>
                    </div>
                    <ul className="list-group list-group-flush">
                        <li className="list-group-item"><b>Contact</b>:{user.contact}</li>
                        <li className="list-group-item"><b>Email</b> :{user.email_id}</li>
                        <li className="list-group-item"><b>Rating</b>:{stars}<i className="fas fa-star fa-sm text-warning"></i></li>
                    </ul>
                </div>
            </div>
        </div>
    )
}
