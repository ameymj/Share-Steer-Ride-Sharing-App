import React from 'react'
import './Services.css'
const Services = () => {
  return (
    <div className="container">
    <section>
      <div class="row">
        <h2 class="section-heading">Our Services</h2>
      </div>
      <div class="row">
        <div class="column">
          <div class="card">
            <div class="icon-wrapper">
              <i class="fas fa-hammer"></i>
            </div>
            <h3>Trusted Drivers</h3>
            <p>
              Verified drivers by our experts!
            </p>
          </div>
        </div>
        <div class="column">
          <div class="card">
            <div class="icon-wrapper">
              <i class="fas fa-brush"></i>
            </div>
            <h3>Emergency Service</h3>
            <p>
            Full customer support in emergency!
            </p>
          </div>
        </div>
        <div class="column">
          <div class="card">
            <div class="icon-wrapper">
              <i class="fas fa-wrench"></i>
            </div>
            <h3>Maintained Vehicle</h3>
            <p>
            Vehicles in good condition and insured safely!
            </p>
          </div>
        </div>
        <div class="column">
          <div class="card">
            <div class="icon-wrapper">
              <i class="fas fa-truck-pickup"></i>
            </div>
            <h3>Live Tracking</h3>
            <p>
            Track your ride on our website!
            </p>
          </div>
        </div>
        <div class="column">
          <div class="card">
            <div class="icon-wrapper">
              <i class="fas fa-broom"></i>
            </div>
            <h3>Feedback System</h3>
            <p>
            Give feedback and improve our service.
            </p>
          </div>
        </div>
        <div class="column">
          <div class="card">
            <div class="icon-wrapper">
              <i class="fas fa-plug"></i>
            </div>
            <h3>Ontime </h3>
            <p>
            Drop and PickUp ontime.
            </p>
          </div>
        </div>
      </div>
    </section>
    </div>
  )
}
export default Services;