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
const Home = () => {

    const [source, setSource] = useState("");
    const [destination, setDestination] = useState("");
    const [date, setDate] = useState("");
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
    <Form action='/searchRide'>
        <Form.Label style={{ fontSize: 50 }}>Search Ride</Form.Label>
        <Form.Group className="mb-3" controlId="source">
            <Form.Label><b>SOURCE</b></Form.Label>
            <Form.Control type="text" placeholder="Source" onBlur={(e) => { setSource(e.target.value) }} />
        </Form.Group>

        <Form.Group className="mb-3" controlId="destination">
            <Form.Label><b>DESTINATION</b></Form.Label>
            <Form.Control type="text" placeholder="destination" onBlur={(e) => { setDestination(e.target.value) }} />
        </Form.Group>

        <Form.Group className="mb-3" controlId="date">
            <Form.Label><b>DATE OF JOURNEY</b></Form.Label>
            <Form.Control type="date" placeholder="date of journey" onBlur={(e) => { setDate(e.target.value) }} />
        </Form.Group>
        <Button variant="primary" type="submit">
            Submit
        </Button><br />
    </Form>
</div>
</center>
</div>
  )
}
export default Home;