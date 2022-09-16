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
      <div>

<div className="row d-flex justify-content-center">
    <div className="col-md-10 col-xl-8 text-center">
      <h3 className="mb-4">Testimonials</h3>
      <p className="mb-4 pb-2 mb-md-5 pb-md-0">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit, error amet
        numquam iure provident voluptate esse quasi, veritatis totam voluptas nostrum
        quisquam eum porro a pariatur veniam.
      </p>
    </div>
  </div>
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
      <section>
  

  <div className="row text-center">
    <div className="col-md-4 mb-5 mb-md-0">
      <div className="d-flex justify-content-center mb-4">
        <img src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(1).webp"
          className="rounded-circle shadow-1-strong" width={"150"} height={"150"} />
      </div>
      <h5 className="mb-3">Maria Smantha</h5>
      <h6 className="text-primary mb-3">Web Developer</h6>
      <p className="px-xl-3">
        <i className="fas fa-quote-left pe-2"></i>Lorem ipsum dolor sit amet, consectetur
        adipisicing elit. Quod eos id officiis hic tenetur quae quaerat ad velit ab hic
        tenetur.
      </p>
      <ul className="list-unstyled d-flex justify-content-center mb-0">
        <li>
          <i className="fas fa-star fa-sm text-warning"></i>
        </li>
        <li>
          <i className="fas fa-star fa-sm text-warning"></i>
        </li>
        <li>
          <i className="fas fa-star fa-sm text-warning"></i>
        </li>
        <li>
          <i className="fas fa-star fa-sm text-warning"></i>
        </li>
        <li>
          <i className="fas fa-star-half-alt fa-sm text-warning"></i>
        </li>
      </ul>
    </div>
    <div className="col-md-4 mb-5 mb-md-0">
      <div className="d-flex justify-content-center mb-4">
        <img src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(2).webp"
          className="rounded-circle shadow-1-strong" width={"150"} height={"150"}  />
      </div>
      <h5 className="mb-3">Lisa Cudrow</h5>
      <h6 className="text-primary mb-3">Graphic Designer</h6>
      <p className="px-xl-3">
        <i className="fas fa-quote-left pe-2"></i>Ut enim ad minima veniam, quis nostrum
        exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid commodi.
      </p>
      <ul className="list-unstyled d-flex justify-content-center mb-0">
        <li>
          <i className="fas fa-star fa-sm text-warning"></i>
        </li>
        <li>
          <i className="fas fa-star fa-sm text-warning"></i>
        </li>
        <li>
          <i className="fas fa-star fa-sm text-warning"></i>
        </li>
        <li>
          <i className="fas fa-star fa-sm text-warning"></i>
        </li>
        <li>
          <i className="fas fa-star fa-sm text-warning"></i>
        </li>
      </ul>
    </div>
    <div className="col-md-4 mb-0">
      <div className="d-flex justify-content-center mb-4">
        <img src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(9).webp"
          className="rounded-circle shadow-1-strong" width={"150"} height={"150"}  />
      </div>
      <h5 className="mb-3">John Smith</h5>
      <h6 className="text-primary mb-3">Marketing Specialist</h6>
      <p className="px-xl-3">
        <i className="fas fa-quote-left pe-2"></i>At vero eos et accusamus et iusto odio
        dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti.
      </p>
      <ul className="list-unstyled d-flex justify-content-center mb-0">
        <li>
          <i className="fas fa-star fa-sm text-warning"></i>
        </li>
        <li>
          <i className="fas fa-star fa-sm text-warning"></i>
        </li>
        <li>
          <i className="fas fa-star fa-sm text-warning"></i>
        </li>
        <li>
          <i className="fas fa-star fa-sm text-warning"></i>
        </li>
        <li>
          <i className="far fa-star fa-sm text-warning"></i>
        </li>
      </ul>
    </div>
  </div>
</section>


</div>
    );
  }
}