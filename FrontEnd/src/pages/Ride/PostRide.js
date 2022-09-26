import axios from 'axios'
import { useEffect, useState } from 'react';
import van from './van.jpeg';
import cab from './cab.jpeg'
import share from './share.jpeg'
import { ReactSession } from 'react-client-session';
import './ride.css';

export default function PostRide() {

  const [cities, setCities] = useState([])
  const [messege, setMessege] = useState();
  const [isLoggedIn, setIsLoggedIn] = useState(true);

  useState(()=>{
    axios.get("http://localhost:8080/sharesteer/getAllCities")
    .then((response) => {
      setCities(response.data);
      setCheck(true);

    })
    .catch((error) => {
      console.log(error);
    })
  })
  let user = null;

  const [check, setCheck] = useState(false)
  const [date_of_journey, setDate_of_journey] = useState(null);
  const [time_of_journey, setTime_of_journey] = useState(null);
  const [from_city, setFrom_city] = useState(null);
  const [to_city, setTo_city] = useState(null);
  const [total_seat, setTotal_seats] = useState(null);
  const [available_seat, setAvailable_seat] = useState(null);
  const [ride_cost, setRide_cost] = useState(null);
  const [description, setDescription] = useState(null);
  const [Type, setType] = useState(0);


  const [vehicle_id, setVehicle_id] = useState(null);
  const [vehicle_model, setVehicle_model] = useState(null);
  const [vehicle_reg_number, setVehicle_reg_number] = useState(null);
  const [checkVehicle, setCheckVehicle] = useState(false);

  function addVehicle() {
    user = ReactSession.get("user");

    if (user == null) {
      setMessege("Login First");
      return;
    }

    if (vehicle_model == null || vehicle_reg_number == null || total_seat == null) {
      setMessege("All Fields Are Mandatory");
      return;
    }

    const vehicle = {};
    vehicle.user_id = user.user_id;
    vehicle.vehicle_model = vehicle_model;
    vehicle.vehicle_reg_number = vehicle_reg_number;
    vehicle.capacity = total_seat;


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
    if (user == null) {
      setMessege("Login First");
      return;
    }

    if (date_of_journey == null || time_of_journey == null || from_city == null || to_city == null || total_seat == null || available_seat == null || ride_cost == null || vehicle_id == null) {
      setMessege("All Fields Are Mandatory");
      return;
    }
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
    ride.only_females = Type;
    ride.status = "Yet-To-Start";
    ride.vehicle_id = vehicle_id;

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
    <div>
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
                  <div className="card-body p-4 p-lg-5 text-black" style={{ 'backgroundColor': 'lightskyblue' }}>

                    <form action='/upcomingrides'>

                      <div className="d-flex align-items-center mb-3 pb-1">
                        <i className="fas fa-taxi fa-2x me-3" style={{ "color": " #000" }}></i>
                        <span className="h1 fw-bold mb-0"><b>Post Ride</b></span>
                      </div>

                      <div className="form-outline mb-4">
                        <input type="date" className="form-control form-control-lg" required min={new Date().toJSON().slice(0, 10).replace(/-/g, '-')} onBlur={(e) => { setDate_of_journey(e.target.value) }} />
                        <label className="form-label"><b>Date-Of-Journey</b></label>
                      </div>

                      <div className="form-outline mb-4">
                        <input type="time" className="form-control form-control-lg" required onBlur={(e) => { setTime_of_journey(e.target.value) }} />
                        <label className="form-label"><b>Time-Of-Departure</b></label>
                      </div>

                      <div>
                        <select className="form-select btn btn-dark btn-lg btn-block" required aria-label="Default select example" onChange={(e) => { setFrom_city(e.target.value) }}>
                          {check && cities.map((city) => (<option key={city.cityName} value={city.cityId}>{city.cityName}</option>))}
                        </select>
                        <b>SOURCE</b><br /><br />
                      </div>
                      <div>
                        <select className="form-select btn btn-dark btn-lg btn-block" required aria-label="Default select example" onChange={(e) => { setTo_city(e.target.value); console.log(e); }}>
                          {check &&  cities.map((city) => (<option key={city.cityName} value={city.cityId}>{city.cityName}</option>))}
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

                      <div>
                        <select className="form-select btn btn-dark btn-lg btn-block" aria-label="Default select example" onChange={(e) => { setType(e.target.value); }}>
                          <option value="false">Select</option>
                          <option value="true">Only-Females</option>
                          <option value="false">None</option>
                        </select>
                        <label className="form-label">Type</label>
                      </div>

                      <div className="form-outline mb-4">
                        <input type="checkbox" className="form-control form-control-lg" required onClick={addVehicle} />
                        <label className="form-label"><b>Confirm Ride</b></label>
                      </div>

                      {checkVehicle && <><div className="pt-1 mb-4">
                        <button className="btn btn-dark btn-lg btn-block" type="submit" onClick={addRide}>Post Ride</button>
                      </div></>}

                      <div className="pt-1 mb-4">
                        <button className="btn btn-dark btn-lg btn-block" type="Reset">Reset</button>
                      </div>

                      {isLoggedIn ? <></> : <><div className="pt-1 mb-4">
                        <a href='/login' className="btn btn-dark btn-lg btn-block">Log In</a>
                      </div></>}

                      <b style={{ 'color': 'red' }}>{messege}</b>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
