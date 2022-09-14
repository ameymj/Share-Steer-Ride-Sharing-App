import React, { Component } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import './Testimonials.css'
import Tushar from './images/tushar.jpeg';
import Amey from './images/amey.jpeg';
import Mahesh from './images/mahesh.jpeg';
import Naman from './images/naman.jpg';
import Prajakta from './images/prajakta.png';
import Swapnil from './images/swapnil.jpg';


export default class Testimonials extends Component {
  render() {
    return (
      <Carousel
        showArrows={true}
        infiniteLoop={true}
        showThumbs={false}
        showStatus={false}
        autoPlay={true}
        interval={6100}
      >
        <div>
          <img src={Tushar} />
          <div className="myCarousel">
            <h3>Tushar Sthul</h3>
            <h4>Software Developer</h4>
            <p>
              It's freeing to be able to catch up on customized news and not be
              distracted by a social media element on the same site
            </p>
          </div>
        </div>

        <div>
        <img src={Amey} />
          <div className="myCarousel">
            <h3>Amey Joshi</h3>
            <h4>Software Developer</h4>
            <p>
              The simple and intuitive design makes it easy for me use. I highly
              recommend Fetch to my peers.
            </p>
          </div>
        </div>

        <div>
        <img src={Naman} />
          <div className="myCarousel">
            <h3>Naman Saxena</h3>
            <h4>Designer</h4>
            <p>
              I enjoy catching up with Fetch on my laptop, or on my phone when
              I'm on the go!
            </p>
          </div>
        </div>

        <div>
        <img src={Prajakta} />
          <div className="myCarousel">
            <h3>Prajakta Mutyalwar</h3>
            <h4>Software Developer</h4>
            <p>
              It's freeing to be able to catch up on customized news and not be
              distracted by a social media element on the same site
            </p>
          </div>
        </div>

        <div>
        <img src={Mahesh} />
          <div className="myCarousel">
            <h3>Mahesh Shinde</h3>
            <h4>Software Developer</h4>
            <p>
              The simple and intuitive design makes it easy for me use. I highly
              recommend Fetch to my peers.
            </p>
          </div>
        </div>

        <div>
        <img src={Swapnil} />
          <div className="myCarousel">
            <h3>Swapnil Kalange</h3>
            <h4>Designer</h4>
            <p>
              I enjoy catching up with Fetch on my laptop, or on my phone when
              I'm on the go!
            </p>
          </div>
        </div>
      </Carousel>
    );
  }
}