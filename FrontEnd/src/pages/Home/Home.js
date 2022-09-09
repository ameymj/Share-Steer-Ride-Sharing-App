import React from 'react'
import Carousel from 'react-bootstrap/Carousel';
import FirstSlide from './FirstSlide.jpg';
import SecondSlide from './SecondSlide.jpg';
import ThirdSlide from './ThirdSlide.jpg';
import { useEffect, useState } from 'react';
import './Home.css'
import GetAllRide from '../Ride/GetAllRide';
const Home = (props) => {

  const cities = props.city;
  const rides = props.ride;
  const [source, setSource] = useState("");
  const [destination, setDestination] = useState("");
  const [date, setDate] = useState("");
  const [check, setCheck] = useState(false);
  const [ReqRide, setReqRide] = useState([]);

  function validate() {
    setCheck(true);
    let arr = rides.filter(checkRoute);
    setReqRide(arr);
    console.log(arr);
  }
  function checkRoute(ride) {
    console.log(ride);
    console.log(source);
    console.log(destination);
    return (ride.from_city == source && ride.to_city == destination);
  }

  return (
    <div className="container">
      <Carousel>
        <Carousel.Item>
          <img
            className="d-block w-100 h-25"
            src={FirstSlide}
            alt="First slide"
          />
          <Carousel.Caption>
            <h3>Travel with</h3>
            <p>Trust</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100 h-25"
            src={SecondSlide}
            alt="Second slide"
          />

          <Carousel.Caption>
            <h3>Travel with</h3>
            <p>Smile</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100 h-25"
            src={ThirdSlide}
            alt="Third slide"
          />

          <Carousel.Caption>
            <h3>Travel with</h3>
            <p>Comfort</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
      <section>
        <div className="container py-5 h-100">
          <div className="row d-flex justify-content-center align-items-center h-100">
            <div className="col col-xl-10">
              <div className="card" style={{ "border-radius": " 1rem" }}>
                <div className="row g-0">
                  <div className="col-md-6 col-lg-5 d-none d-md-block">
                    <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/img1.webp"
                      alt="login form" className="img-fluid" style={{ "border-radius": " 1rem 0 0 1rem" }} />
                  </div>
                  <div className="col-md-6 col-lg-7 d-flex align-items-center">
                    <div className="card-body p-4 p-lg-5 text-black">

                      <form onSubmit={validate}>
                        <div className="d-flex align-items-center mb-3 pb-1">
                        <i class="fas fa-route fa-2x me-3"></i>
                          <span className="h1 fw-bold mb-0">SEARCH RIDE</span>
                        </div>
                        <div>
                        <b>SOURCE</b>
                        <select class="form-select btn btn-dark btn-lg btn-block" aria-label="Default select example" onSelect={(e) => { setSource(e.target.value) }}>
                          {cities.map((city) => (<option key={city.cityName}>{city.cityName}</option>))}
                          </select>
                        </div>
                        <div>
                        <b>DESTINATION</b>
                        <select className="form-select btn btn-dark btn-lg btn-block" aria-label="Default select example" onSelect={(e) => { setDestination(e.target.value) }}>
                          {cities.map((city) => (<option key={city.cityName}>{city.cityName}</option>))}
                          </select>
                        </div>
                        <div>
                          <b>DATE</b><input type='date' className='btn btn-dark btn-lg btn-block' />
                          <br/>
                        </div>
                        
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
      {check && ReqRide.map((ri, index) => <GetAllRide key={index} ride={ri} />)}
    </div>
  )
}
export default Home;