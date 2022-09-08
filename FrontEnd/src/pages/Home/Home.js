import React from 'react'
import Carousel from 'react-bootstrap/Carousel';
import FirstSlide from './FirstSlide.jpg';
import SecondSlide from './SecondSlide.jpg';
import ThirdSlide from './ThirdSlide.jpg';
import { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
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


      <center style={{ padding: 75 }}>
        <div style={{ borderStyle: 'double', width: 400 }}>
          <Form onSubmit={validate}>
            <Form.Label style={{ fontSize: 50 }}>Search Ride</Form.Label><br/>
            <Form.Group className="mb-3" controlId="date">
            <Form.Label><b>Source</b></Form.Label>
            <Form.Select onSelect={(e) => { setSource(e.target.value)} }>
                {cities.map((city) => (<option key={city.cityName}>{city.cityName}</option>))}
              </Form.Select>
            </Form.Group>
            <Form.Group className="mb-3" controlId="date">
            <Form.Label><b>Destination</b></Form.Label>
              <Form.Select className='citya' onSelect={(e)=>{setDestination(e.target.value)}}>
                {cities.map((city) => (<option key={city.cityName}>{city.cityName}</option>))}
              </Form.Select>
            </Form.Group>
            <Form.Group className="mb-3" controlId="date">
              <Form.Label><b>DATE OF JOURNEY</b></Form.Label>
              <Form.Control type="date" placeholder="date of journey" required onBlur={(e) => { setDate(e.target.value); console.log(e);}} />
            </Form.Group>
            <Button variant="primary" onClick={validate}>
              Submit
            </Button><br />
          </Form>
        </div>
        {check && ReqRide.map((ri, index) => <GetAllRide key={index} ride={ri} />)}
      </center>
    </div>
  )
}
export default Home;