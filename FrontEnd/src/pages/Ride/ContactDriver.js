import React from 'react'
export default function ContactDriver(props) {
    const user = props.user;
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
                    </ul>
                </div>
            </div>
        </div>
    )
}
