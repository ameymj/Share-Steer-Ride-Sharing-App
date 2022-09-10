import axios from 'axios'
import React, { useState } from 'react'
import van from './van.jpeg';
import cab from './cab.jpeg'
import share from './share.jpeg';
import { ReactSession } from 'react-client-session';


export default function UpdateRide(props) {

  const id = props.id;
  const cities = ReactSession.get("cites");
  const [date_of_journey, setDate_of_journey] = useState("");
  const [time_of_journey, setTime_of_journey] = useState("");
  const [from_city, setFrom_city] = useState("");
  const [to_city, setTo_city] = useState("");
  const [total_seat, setTotal_seats] = useState("");
  const [available_seat, setAvailable_seat] = useState("");
  const [ride_cost, setRide_cost] = useState("");
  const [description, setDescription] = useState("");

  const [vehicle_model, setVehicle_model] = useState("");
  const [vehicle_reg_number, setVehicle_reg_number] = useState("");
  const [capacity, setCapacity] = useState("");



  function addRide() {
    const ride = {};
    const vehicle = {};

    axios.put("http://localhost:8080/sharesteer/updateride", ride)
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
      })

    axios.get("http://localhost:8080/sharesteer/getride" / +id)
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
      })


    axios.get("http://localhost:8080/sharesteer/getvehicle" / +id)
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
      })

    axios.post("http://localhost:8080/sharesteer/updatevehicle", vehicle)
      .then((response) => {
        console.log(response);
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

                    <form>

                      <div className="d-flex align-items-center mb-3 pb-1">
                        <i className="fas fa-taxi fa-2x me-3" style={{ "color": " #000" }}></i>
                        <span className="h1 fw-bold mb-0"><b>Update Ride</b></span>
                      </div>

                      <div className="form-outline mb-4">
                        <input type="date" id="form2Example17" className="form-control form-control-lg" required min={new Date()} onBlur={(e) => { setDate_of_journey(e.target.value) }} />
                        <label className="form-label"><b>Date-Of-Journey</b></label>
                      </div>

                      <div className="form-outline mb-4">
                        <input type="time" className="form-control form-control-lg" onBlur={(e) => { setTime_of_journey(e.target.value) }} />
                        <label className="form-label"><b>Time-Of-Departure</b></label>
                      </div>

                      <div>
                        <select class="form-select btn btn-dark btn-lg btn-block" aria-label="Default select example" onSelect={(e) => { setFrom_city(e.target.value) }}>
                          {cities.map((city) => (<option key={city.cityName}>{city.cityName}</option>))}
                        </select>
                        <b>SOURCE</b><br /><br />
                      </div>
                      <div>
                        <select className="form-select btn btn-dark btn-lg btn-block" aria-label="Default select example" onSelect={(e) => { setTo_city(e.target.value) }}>
                          {cities.map((city) => (<option key={city.cityName}>{city.cityName}</option>))}
                        </select>
                        <b>DESTINATION</b><br /><br />
                      </div>

                      <div className="form-outline mb-4">
                        <input type="number" className="form-control form-control-lg" required onBlur={(e) => { setTotal_seats(e.target.value) }} />
                        <label className="form-label"><b>Total Seat</b></label>
                      </div>


                      <div className="form-outline mb-4">
                        <input type="number" id="form2Example17" className="form-control form-control-lg" required max={total_seat} onBlur={(e) => { setAvailable_seat(e.target.value) }} />
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
                        <input type="text" id="form2Example17" className="form-control form-control-lg" required onBlur={(e) => { setVehicle_model(e.target.value) }} />
                        <label className="form-label"><b>Vehicle Model</b></label>
                      </div>

                      <div className="form-outline mb-4">
                        <input type="text" className="form-control form-control-lg" required onBlur={(e) => { setVehicle_reg_number(e.target.value) }} />
                        <label className="form-label"><b>Vehicle Registration Number</b></label>
                      </div>

                      <div className="pt-1 mb-4">
                        <button className="btn btn-dark btn-lg btn-block" type="button" onClick={addRide}>Post Ride</button>
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
  )
}
