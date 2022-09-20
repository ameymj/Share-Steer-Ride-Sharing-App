import React from 'react'
import './Services.css'
const Services = () => {
  return (
    
    <div className="container">
    <section>
      <div className="row">
        <h1 className="section-heading">Our Services</h1>
      </div>
      <div className="row">
        <div className="column">
          <div className="card">
            <div className="icon-wrapper">
              <i className="fas fa-hammer"></i>
            </div>
            <h3>Trusted Drivers</h3>
            <p>
              We check the reviews and feedback of the drivers.
              We verify The driving liscence of driver.
              We also verify photoId of the travellers.
            </p>
          </div>
        </div>
        <div className="column">
          <div className="card">
            <div className="icon-wrapper">
              <i className="fas fa-brush"></i>
            </div>
            <h3>Emergency Service</h3>
            <p>
            We have collaboration with SOS for highway-Safety.
            contact our toll free number 1800-1256-7895 in case of emergency.
            </p>
          </div>
        </div>
        <div className="column">
          <div className="card">
            <div className="icon-wrapper">
              <i className="fas fa-wrench"></i>
            </div>
            <h3>Maintained Vehicle</h3>
            <p>
            Check the photos of the vehicle with which you are travelling.
            See the condition of vehicle and then decide to travel.
            </p>
          </div>
        </div>
        <div className="column">
          <div className="card">
            <div className="icon-wrapper">
              <i className="fas fa-truck-pickup"></i>
            </div>
            <h3>Live Tracking</h3>
            <p>
            Track the live location of the vehicle as soon as the driver starts the journey.
            and check the route and time to reach live.
            </p>
          </div>
        </div>
        <div className="column">
          <div className="card">
            <div className="icon-wrapper">
              <i className="fas fa-broom"></i>
            </div>
            <h3>Feedback System</h3>
            <p>
            your feedback is important to us and other users.
            Share your overall experience and experience with particular user.
            </p>
          </div>
        </div>
        <div className="column">
          <div className="card">
            <div className="icon-wrapper">
              <i className="fas fa-plug"></i>
            </div>
            <h3>Ontime </h3>
            <p>
            We provide good drivers which drives you to your destination in proper time.
            You can write us if the driver delays or cancels the ride on services@sharesteer.com.
            </p>
          </div>
        </div>
      </div>
    </section>
    </div>
  )
}
export default Services;