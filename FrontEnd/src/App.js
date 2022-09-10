import React, { Component } from 'react';
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

ReactSession.setStoreType("localStorage");

class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      auth: false,
      rides:null,
      users:null,
      cities:null
    }
  }

  componentDidMount()
  {
    axios.get("http://localhost:8080/sharesteer/getAllrides")
    .then((response)=>{
      ReactSession.set("rides",response.data);

    })
    .catch((error)=>{
      console.log(error);
    })

    axios.get("http://localhost:8080/sharesteer/getAllCities")
    .then((response)=>{
      ReactSession.set("cities",response.data);
      console.log(ReactSession.get("cities"));

    })
    .catch((error)=>{
      console.log(error);
    })


    axios.get("http://localhost:8080/sharesteer/getAllUsers")
    .then((response)=>{
      ReactSession.set("allUser",response.data);
    })
    .catch((error)=>{
      console.log(error);
    })

  }
  render() {
    return (
      <Router>
        <Navbar/>
        <main className='container'>
          <Switch>
            <Route path="/" exact><Home/></Route>
            <Route path="/home" exact><Home/></Route>
            <Route path="/about" exact><About /></Route>
            <Route path="/service" exact><Services /></Route>
            <Route path="/testimonial" exact><Testimonial /></Route>
            <Route path="/contact" exact><Contact/></Route>
            <Route path="/login" exact><Login/></Route>
            <Route path="/register" exact><Register /></Route>
            <Route path="/forgetpassword" exact><ForgetPassword /></Route>
            <Route path="/postride" exact><PostRide/></Route>
            <Route path="/profile" exact><Profile/></Route>
            <Route path="/ridehistory" exact><RideHistory/></Route>
          </Switch>
        </main>
      </Router>
    );
  }
}

export default App;
