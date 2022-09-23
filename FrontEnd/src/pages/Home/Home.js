import React from 'react'
import Carousel from 'react-bootstrap/Carousel';
import FirstSlide from './FirstSlide.jpg';
import SecondSlide from './SecondSlide.jpg';
import ThirdSlide from './ThirdSlide.jpg';
import SearchRide from '../Profile/SearchRide';
import Journey from './Images/journey.jpeg';
import Journey2 from './Images/journey2.jpeg';
import Journey3 from './Images/journey3.jpeg';
import icon1 from './Images/icon1.png';
import icon2  from './Images/icon2.png';
import icon3  from './Images/icon3.png';
import Dash1 from './Images/dash1.jpeg';
import Dash2 from './Images/dash2.jpeg';
import Dash3 from './Images/dash3.jpeg';

const Home = (props) => {
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
            <h2>Travel with</h2>
            <b>Trust</b>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100 h-25"
            src={SecondSlide}
            alt="Second slide"
          />

          <Carousel.Caption>
            <h2>Travel with</h2>
            <b>Smile</b>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100 h-25"
            src={ThirdSlide}
            alt="Third slide"
          />

          <Carousel.Caption>
            <h2>Travel with</h2>
            <b>Comfort</b>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
      <SearchRide />
      {/* </div>
    <div> */}
    <center>
      <main role="main">
      <div className="container marketing">
      <hr className="featurette-divider" />
          <div className="row featurette">
            <div className="col-md-7">
              <h2 className="featurette-heading">Secure And Safer Rides</h2>
              <p className="lead">Verified drivers, an emergency alert button, and live ride tracking are some of the features that we have in place to ensure you a safe travel experience</p>
            </div>
            <div className="col-md-5">
              <img className="featurette-image img-fluid mx-auto" src={Dash1} alt="Generic placeholder image" />
            </div>
          </div>

          <hr className="featurette-divider" />

          <div className="row featurette">
            <div className="col-md-7 order-md-2">
              <h2 className="featurette-heading">Entertainment While Ride</h2>
              <p className="lead">Play music, watch videos and a lot more with Ola Play! Also stay connected even if you are travelling through poor network areas with our free wifi facility.</p>
            </div>
            <div className="col-md-5 order-md-1">
              <img className="featurette-image img-fluid mx-auto" src={Dash2} alt="Generic placeholder image" />
            </div>
          </div>

          <hr className="featurette-divider" />

          <div className="row featurette">
            <div className="col-md-7">
              <h2 className="featurette-heading">All Payment Type</h2>
              <p className="lead">To enjoy hassle free payments we provided with all type of payments like Cards,Cash,Net-Banking. Enjoy Ride with zero stress and full saving of fuel and time.</p>
            </div>
            <div className="col-md-5">
              <img className="featurette-image img-fluid mx-auto" src={Dash3} alt="Generic placeholder image" />
            </div>
          </div>

          <hr className="featurette-divider" />
          <div id="myCarousel" className="carousel slide" data-ride="carousel">
          <ol className="carousel-indicators">
            <li data-target="#myCarousel" data-slide-to="0" className="active"></li>
            <li data-target="#myCarousel" data-slide-to="1"></li>
            <li data-target="#myCarousel" data-slide-to="2"></li>
          </ol>
          <div className="carousel-inner">
            <div className="carousel-item active">
              <img className="first-slide" src={Journey} alt="First slide" />
              <div className="container">
                <div className="carousel-caption text-left">
                  <h1>Get Starting With Us....</h1>
                  <p style={{'color':'black'}}><b>It is platform to connects drivers and passengers willing to travel together between cities and shares the cost of the journey.</b></p>
                  <p><a className="btn btn-lg btn-primary" href="/register" role="button">Get Started</a></p>
                </div>
              </div>
            </div>
            <div className="carousel-item">
              <img className="second-slide" src={Journey2} alt="Second slide" />
              <div className="container">
                <div className="carousel-caption">
                  <h1>Rated By Passenger</h1>
                  <p style={{'color':'black'}}><b>To facilitate, perfect ride users are available with feedback and a rating system which will ultimately aim to choose a perfect companion for the journey.</b></p>
                  <p><a className="btn btn-lg btn-primary" href="/about" role="button">About Us</a></p>
                </div>
              </div>
            </div>
            <div className="carousel-item">
              <img className="third-slide" src={Journey3} alt="Third slide" />
              <div className="container">
                <div className="carousel-caption text-right">
                  <h1>Our Testimonials</h1>
                  <p  style={{'color':'black'}}><b>a formal written description of someone's character and qualities given by a previous employer</b></p>
                  <p><a className="btn btn-lg btn-primary" href="/testimonial" role="button">Our Testimonials</a></p>
                </div>
              </div>
            </div>
          </div>
          <a className="carousel-control-prev" href="#myCarousel" role="button" data-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="sr-only">Previous</span>
          </a>
          <a className="carousel-control-next" href="#myCarousel" role="button" data-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="sr-only">Next</span>
          </a>
        </div>
        <div className="row">
            <div className="col-lg-4">
              <img className="rounded-circle" src={icon1} alt="Generic placeholder image" width="140" height="140" />
              <h2>Easy Searching</h2>
            </div>
            <div className="col-lg-4">
              <img className="rounded-circle" src={icon2} alt="Generic placeholder image" width="140" height="140" />
              <h2>Secure Booking</h2>
            </div>
            <div className="col-lg-4">
              <img className="rounded-circle" src={icon3} alt="Generic placeholder image" width="140" height="140" />
              <h2>Verified Drivers</h2>
            </div>
          </div>
        </div>
      </main>
      </center>
    </div>

  )
}
export default Home;