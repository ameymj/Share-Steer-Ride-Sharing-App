import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch
} from 'react-router-dom';

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

ReactSession.setStoreType("localStorage");

const App = () => {
  return (
   <Router>
    <Navbar/>
    <main className='container'>
      <Switch>
        <Route path="/" exact><Home/></Route>
        <Route path="/home" exact><Home/></Route>
        <Route path="/about" exact><About/></Route>
        <Route path="/service" exact><Services/></Route>
        <Route path="/testimonial" exact><Testimonial/></Route>
        <Route path="/contact" exact><Contact/></Route>
        <Route path="/login" exact><Login/></Route>
        <Route path="/register" exact><Register/></Route>

        <Redirect to="/" />
      </Switch>
    </main>
   </Router>
  );
}

export default App;
