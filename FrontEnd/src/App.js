<<<<<<< HEAD
import React, { Component } from 'react';

=======
import React, { useEffect } from 'react';
>>>>>>> 9554e111d8f20ff4f56879f51d980a76fa51f499
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch
} from 'react-router-dom';
import axios from 'axios';
import About from './pages/About/About';
import Contact from './pages/Contact/Contact';
import Home from './pages/Home/Home';
import Services from './pages/Service/Services';
import Testimonial from './pages/Testimonial/Testimonial';
import Register from './pages/Register/Register';
import Navbar from './Components/Navbar/Navbar';
import { ReactSession } from 'react-client-session';
import Login from './pages/Login/Login';
import './App.css';
import ForgetPassword from './pages/ForgetPassword/ForgetPassword';
import PostRide from './pages/Ride/PostRide';
import Profile from './pages/Profile/Profile';
import RideHistory from './pages/Profile/RideHistory';
import UpdateProfile from './pages/Profile/UpdateProfile';
import TermsAndCondition from './pages/terms/TermsAndCondition';
import BookRide from './pages/Ride/BookRide';
import MyBookings from './pages/Profile/MyBookings';
import Footer from './Components/Navbar/Footer';
import Review from './pages/Review/Review'
import Admin from './pages/Admin/Admin';
import AllUser from './pages/Admin/AllUser';
import AllRides from './pages/Admin/AllRides';
import AllBookings from './pages/Admin/AllBookings';
import UpComingRides from './pages/Profile/UpComingRides';
import RequestOnRide from './pages/Profile/RequestOnRide';
import MyBookingStatus from './pages/Profile/MyBookingStatus';

ReactSession.setStoreType("localStorage");

function App() {
    useEffect(()=>{
    axios.get("http://localhost:8080/sharesteer/getAllUsers")
      .then((response) => {
        ReactSession.set("allUser", response.data);
      })
      .catch((error) => {
        console.log(error);
      })

    axios.get("http://localhost:8080/sharesteer/getAllrides")
      .then((response) => {
        ReactSession.set("rides", response.data);

      })
      .catch((error) => {
        console.log(error);
      })

        axios.get("http://localhost:8080/sharesteer/getAllCities")
      .then((response) => {
        ReactSession.set("cities", response.data);

      })
      .catch((error) => {
        console.log(error);
      })

    })

    return (
      <div>
        <div>
          <Router>
            <Navbar />
            <main className='container'>
              <Switch>
                <Route path="/" exact><Home /></Route>
                <Route path="/home" exact><Home /></Route>
                <Route path="/about" exact><About /></Route>
                <Route path="/service" exact><Services /></Route>
                <Route path="/testimonial" exact><Testimonial /></Route>
                <Route path="/contact" exact><Contact /></Route>
                <Route path="/forgetpassword" exact><ForgetPassword /></Route>
                <Route path="/postride" exact><PostRide /></Route>
                <Route path="/profile" exact><Profile /></Route>
                <Route path="/ridehistory" exact><RideHistory /></Route>
                <Route path="/upcomingrides" exact><UpComingRides /></Route>
                <Route path="/reqonride" exact><RequestOnRide /></Route>
                <Route path="/bookingStatus" exact><MyBookingStatus /></Route>
                <Route path="/updateprofile" exact><UpdateProfile /></Route>
                <Route path="/termsAndCondition" exact><TermsAndCondition /></Route>
                <Route path="/bookride" exact><BookRide /></Route>
                <Route path="/login" exact><Login /></Route>
                <Route path="/register" exact><Register /></Route>
                <Route path="/mybookings" exact><MyBookings /></Route>
                <Route path="/review" exact><Review /></Route>
                <Route path="/admin" exact><Admin /></Route>
                <Route path="/alluser" exact><AllUser /></Route>
                <Route path="/allrides" exact><AllRides /></Route>
                <Route path="/allbookings" exact><AllBookings /></Route>
                <Redirect to="/home" />
                {ReactSession.get('user') != null ? <></> : <><Route path="/login" exact><Login /></Route>
                  <Route path="/register" exact><Register /></Route></>}
              </Switch>
            </main>
          </Router>
        </div>
        <div className='footer'>
          <Footer />
        </div>
      </div>
    );
  }

export default App;
