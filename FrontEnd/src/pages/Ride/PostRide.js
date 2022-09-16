import axios from 'axios'
import { useEffect, useState } from 'react';
import van from './van.jpeg';
import cab from './cab.jpeg'
import share from './share.jpeg'
import { ReactSession } from 'react-client-session';

export default function PostRide(props) {

  const cities = ReactSession.get("cities");
  const [messege, setMessege] = useState();
  const [isLoggedIn, setIsLoggedIn] = useState(true);

  let user = null;

  const [user_id, setUser_id] = useState()
  const [date_of_journey, setDate_of_journey] = useState("");
  const [time_of_journey, setTime_of_journey] = useState("");
  const [from_city, setFrom_city] = useState("");
  const [to_city, setTo_city] = useState("");
  const [total_seat, setTotal_seats] = useState("");
  const [available_seat, setAvailable_seat] = useState("");
  const [ride_cost, setRide_cost] = useState("");
  const [description, setDescription] = useState("");

  const [vehicle_id, setVehicle_id] = useState("");
  const [vehicle_model, setVehicle_model] = useState("");
  const [vehicle_reg_number, setVehicle_reg_number] = useState("");
  const [checkVehicle, setCheckVehicle] = useState(false);


  function loginfirst() {
    setIsLoggedIn(false);
    setMessege("Login First");
  }



  function addVehicle(){
    user = ReactSession.get("user");

    const vehicle = {};
    vehicle.user_id = user.user_id;
    vehicle.vehicle_model = vehicle_model;
    vehicle.vehicle_reg_number = vehicle_reg_number;
    vehicle.capacity = total_seat;

    console.log(vehicle);

    axios.post("http://localhost:8080/sharesteer/addvehicle", vehicle)
      .then((response) => {
        console.log(response);
        setVehicle_id(response.data);
        setCheckVehicle(true);

      })
      .catch((error) => {
        console.log(error);
      })
  }

  function addRide() {
    user = ReactSession.get("user");
    const ride = {};
    ride.user_id = user.user_id;
    ride.date_of_journey = date_of_journey;
    ride.time_of_journey = time_of_journey;
    ride.from_city = from_city;
    ride.to_city = to_city;
    ride.total_seats = total_seat;
    ride.available_seats = available_seat;
    ride.ride_cost = ride_cost;
    ride.description = description;
    ride.only_females = 0;
    ride.status = false;
    ride.vehicle_id = vehicle_id;
    console.log(ride);

    axios.post("http://localhost:8080/sharesteer/addride", ride)
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
      })
    setMessege("Successfully Added");


    axios.get("http://localhost:8080/sharesteer/getAllrides")
      .then((response) => {
        ReactSession.set("rides", response.data);

      })
      .catch((error) => {
        console.log(error);
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
                  <img src={cab}
                    alt="login form" className="img-fluid" style={{ "borderRadius": " 1rem 0 0 1rem" }} /><br /><br /><br />
                  <img src={van}
                    alt="login form" className="img-fluid" style={{ "borderRadius": " 1rem 0 0 1rem" }} /><br /><br /><br />
                  <img src={share}
                    alt="login form" className="img-fluid" style={{ "borderRadius": " 1rem 0 0 1rem" }} />
                </div>
                <div className="col-md-6 col-lg-7 d-flex align-items-center">
                  <div className="card-body p-4 p-lg-5 text-black" style={{ 'backgroundColor': 'rgb(5, 101, 134)' }}>

                    <form action='/ridehistory'>

                      <div className="d-flex align-items-center mb-3 pb-1">
                        <i className="fas fa-taxi fa-2x me-3" style={{ "color": " #000" }}></i>
                        <span className="h1 fw-bold mb-0"><b>Post Ride</b></span>
                      </div>

                      <div className="form-outline mb-4">
                        <input type="date" className="form-control form-control-lg" required min={new Date().toJSON().slice(0, 10).replace(/-/g, '-')} onBlur={(e) => { setDate_of_journey(e.target.value) }} />
                        <label className="form-label"><b>Date-Of-Journey</b></label>
                      </div>

                      <div className="form-outline mb-4">
                        <input type="time" className="form-control form-control-lg" onBlur={(e) => { setTime_of_journey(e.target.value) }} />
                        <label className="form-label"><b>Time-Of-Departure</b></label>
                      </div>

                      <div>
                        <select className="form-select btn btn-dark btn-lg btn-block" aria-label="Default select example" onChange={(e) => { setFrom_city(e.target.value) }}>
                          {cities.map((city) => (<option key={city.cityName} value={city.cityId}>{city.cityName}</option>))}
                        </select>
                        <b>SOURCE</b><br /><br />
                      </div>
                      <div>
                        <select className="form-select btn btn-dark btn-lg btn-block" aria-label="Default select example" onChange={(e) => { setTo_city(e.target.value); console.log(e); }}>
                          {cities.map((city) => (<option key={city.cityName} value={city.cityId}>{city.cityName}</option>))}
                        </select>
                        <b>DESTINATION</b><br /><br />
                      </div>

                      <div className="form-outline mb-4">
                        <input type="number" className="form-control form-control-lg" required min={1} onBlur={(e) => { setTotal_seats(e.target.value) }} />
                        <label className="form-label"><b>Total Seat</b></label>
                      </div>


                      <div className="form-outline mb-4">
                        <input type="number" className="form-control form-control-lg" required max={total_seat} onBlur={(e) => { setAvailable_seat(e.target.value) }} />
                        <label className="form-label"><b>Available Seat</b></label>
                      </div>

                      <div className="form-outline mb-4">
                        <input type="number" className="form-control form-control-lg" required onBlur={(e) => { setRide_cost(e.target.value) }} />
                        <label className="form-label"><b>Ride-Fare</b></label>
                      </div>

                      <div className="form-outline mb-4">
                        <input type="text" className="form-control form-control-lg" required onBlur={(e) => { setDescription(e.target.value) }} />
                        <label className="form-label"><b>Description</b></label>
                      </div>

                      <div className="form-outline mb-4">
                        <input type="text" className="form-control form-control-lg" required onBlur={(e) => { setVehicle_model(e.target.value) }} />
                        <label className="form-label"><b>Vehicle Model</b></label>
                      </div>

                      <div className="form-outline mb-4">
                        <input type="text" className="form-control form-control-lg" required onBlur={(e) => { setVehicle_reg_number(e.target.value) }} />
                        <label className="form-label"><b>Vehicle Registration Number</b></label>
                      </div>

                      <div className="form-outline mb-4">
                        <input type="checkbox" className="form-control form-control-lg" required onClick={addVehicle} />
                        <label className="form-label"><b>Confirm Ride</b></label>
                      </div>

                      {checkVehicle && <><div className="pt-1 mb-4">
                        <button className="btn btn-dark btn-lg btn-block" type="submit" onClick={user != null ? loginfirst : addRide}>Post Ride</button>
                      </div></>}

                      <div className="pt-1 mb-4">
                        <button className="btn btn-dark btn-lg btn-block" type="Reset">Reset</button>
                      </div>

                      {isLoggedIn ? <></> : <><div className="pt-1 mb-4">
                        <a href='/login' className="btn btn-dark btn-lg btn-block" type="Reset">Log In</a>
                      </div></>}

                      <b>{messege}</b>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
