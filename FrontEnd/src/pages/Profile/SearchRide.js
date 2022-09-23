import { useEffect, useState } from 'react';
import GetAllRide from '../Ride/GetAllRide';
import Waiting from '../Home/waiting.jpg';
import { ReactSession } from 'react-client-session';
import axios from 'axios';
import SearchRideImage from '../Home/searchride.jpg';


export default function SearchRide() {
  const cities = ReactSession.get("cities");
  const [source, setSource] = useState("Pune");
  const [destination, setDestination] = useState("Pune");
  const [date, setDate] = useState("");
  const [check, setCheck] = useState(false);
  const [ReqRide, setReqRide] = useState([]);
  const [messge, setMessege] = useState("");

  function validate() {
    const ride = {}
    ride.from_city = source;
    ride.to_city = destination;
    ride.date_of_journey = date;

    if (source == destination) {
      setMessege("Source And Destination Cannot Be Same!");
      return;
    }

    axios.post("http://localhost:8080/sharesteer/getrides", ride)
      .then((response) => {
        setCheck(true);
        setReqRide(response.data);

        if(response.data.length==0)
          setMessege("No Record Found");

      })
      .catch((error) => {
        console.log(error);
        setCheck(false);
      })
  }
  return (
    <div>  
         <section>
    <div className="container py-5 h-100">
      <div className="row d-flex justify-content-center align-items-center h-100">
        <div className="col col-xl-10">
          <div className="card" style={{ "borderRadius": " 1rem" }}>
            <div className="row g-0">
              <div className="col-md-6 col-lg-5 d-none d-md-block">
                <img src={SearchRideImage}
                  alt="login form" className="img-fluid" style={{ "borderRadius": " 1rem 0 0 1rem" }} /><br /><br /><br />
                <img src={Waiting}
                  alt="login form" className="img-fluid" style={{ "borderRadius": " 1rem 0 0 1rem" }} />
              </div>
              <div className="col-md-6 col-lg-7 d-flex align-items-center">
                <div className="card-body p-4 p-lg-5 text-black" style={{ 'backgroundColor': 'lightskyblue' }}>

                  <form onSubmit={validate}>
                    <div className="d-flex align-items-center mb-3 pb-1">
                      <i className="fas fa-route fa-2x me-3"></i>
                      <span className="h1 fw-bold mb-0">SEARCH RIDE</span>
                    </div>
                    <div>
                      <b>SOURCE</b>
                      <select className="form-select btn btn-dark btn-lg btn-block" aria-label="Default select example" onChange={(e) => { setSource(e.target.value) }}>
                        {cities.map((city) => (<option key={city.cityName} value={city.cityId}>{city.cityName}</option>))}
                      </select>
                    </div>
                    <div>
                      <b>DESTINATION</b>
                      <select className="form-select btn btn-dark btn-lg btn-block" aria-label="Default select example" onChange={(e) => { setDestination(e.target.value) }}>
                        {cities.map((city) => (<option key={city.cityName} value={city.cityId}>{city.cityName}</option>))}
                      </select>
                    </div>
                    <div>
                      <b>DATE</b><input type='date' className='btn btn-dark btn-lg btn-block' required min={new Date().toJSON().slice(0, 10).replace(/-/g, '-')} onChange={(e) => { setDate(e.target.value) }} />
                      <br />
                    </div>
                    <b>{messge}</b>

                    <div className="pt-1 mb-4">
                      <button className="btn btn-dark btn-lg btn-block" type="button" onClick={validate}>Search</button>
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
  {check && ReqRide.map((r, index) => <GetAllRide key={index} ride={r} city={cities} />)}
  </div>
  )
}
