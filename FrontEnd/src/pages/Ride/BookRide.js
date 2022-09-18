import { useEffect, useState } from 'react';
import Welcome from '../Login/welcome.jpg';
import Welcom from '../Login/welcom.webp';
import axios from 'axios';
import { ReactSession } from 'react-client-session';
import { useLocation } from 'react-router-dom';


function BookRide(props) {
    const user = ReactSession.get('user');

    const [messege,setMessege] =useState("");
    const [myRide,setMyRide] =useState("");
    const [bookedSeat, setBookedSeat] = useState(0);


    function SecondPage(){
        const location = useLocation();
      
        useEffect(() => {
           setMyRide(location.state); 
        }, [location]);
      
      };
      SecondPage(); 


    function Book() {
        const bookride = {}
        bookride.user_id = user.user_id;
        bookride.ride_id = myRide.ride_id;
        bookride.number_of_seats = bookedSeat;
        bookride.booking_date = new Date().toJSON().slice(0, 10).replace(/-/g, '-');
        bookride.amount = myRide.ride_cost;
        console.log(bookride);

        if(bookedSeat>myRide.available_seats)
        {
            setMessege("There is No Enough Seats");
            return;
        }

        axios.post("http://localhost:8080/sharesteer/bookride",bookride)
            .then((response) => {
                setMessege(response.data);
            })
            .catch((error) => {
                setMessege(error.data);
            })

    }

    return (
        <section>
            <div className="container py-5 h-100">
                <div className="row d-flex justify-content-center align-items-center h-100">
                    <div className="col col-xl-10">
                        <div className="card" style={{ "borderRadius": " 1rem" }}>
                            <div className="row g-0">
                                <div className="col-md-6 col-lg-5 d-none d-md-block">
                                    <img src={Welcome}
                                        alt="login form" className="img-fluid" style={{ "borderRadius": " 1rem 0 0 1rem" }} /><br /><br /><br />
                                    <img src={Welcom}
                                        alt="login form" className="img-fluid" style={{ "borderRadius": " 1rem 0 0 1rem" }} />
                                </div>
                                <div className="col-md-6 col-lg-7 d-flex align-items-center">
                                    <div className="card-body p-4 p-lg-5 text-black" style={{ 'backgroundColor': 'lightskyblue' }}>

                                        <form action='/mybookings'>

                                            <div className="d-flex align-items-center mb-3 pb-1">
                                                <i className="fas fa-lock fa-2x me-3"></i>
                                                <span className="h1 fw-bold mb-0">Book Ride</span>
                                            </div>

                                            <div className="form-outline mb-4">
                                                <input type="number" className="form-control form-control-lg" max={myRide.available_seats} required onBlur={(e) => { setBookedSeat(e.target.value) }} />
                                                <label className="form-label">Number Of Seat</label>
                                            </div>

                                            <div className="form-outline mb-4">
                                                <input type="number" className="form-control form-control-lg" value={myRide.available_seats} readOnly/>
                                                <label className="form-label">Available  Seat</label>
                                            </div>


                                            <div className="form-outline mb-4">
                                                <input type="number" className="form-control form-control-lg" value={myRide.ride_cost} readOnly />
                                                <label className="form-label">Fare per head</label>
                                            </div>

                                            <div className="form-outline mb-4">
                                                <input type="number" className="form-control form-control-lg" value={myRide.ride_cost * bookedSeat} readOnly />
                                                <label className="form-label">Total Amount</label>
                                            </div>

                                            <div className="form-outline mb-4">
                                                <input type="date" className="form-control form-control-lg" value={new Date().toJSON().slice(0, 10).replace(/-/g, '-')} readOnly />
                                                <label className="form-label">Date</label>
                                            </div>

                                            <b>{messege}</b>

                                            <div className="pt-1 mb-4">
                                                <b className="btn btn-dark btn-lg btn-block" type="button" onClick={Book}>BookRide</b>
                                            </div>
                                        </form>

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default BookRide;