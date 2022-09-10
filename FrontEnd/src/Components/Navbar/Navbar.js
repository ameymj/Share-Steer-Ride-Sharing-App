import React, { useEffect } from 'react'
import './Navbar.css';
import { NavLink } from 'react-router-dom';
import $ from 'jquery';
import { ReactSession } from 'react-client-session';



const Navbar = (props) => {
  console.log(ReactSession.get("username"));
  function animation() {
    var tabsNewAnim = $('#navbarSupportedContent');
    var activeItemNewAnim = tabsNewAnim.find('.active');
    var activeWidthNewAnimHeight = activeItemNewAnim.innerHeight();
    var activeWidthNewAnimWidth = activeItemNewAnim.innerWidth();
    var itemPosNewAnimTop = activeItemNewAnim.position();
    var itemPosNewAnimLeft = activeItemNewAnim.position();
    $(".hori-selector").css({
      "top": itemPosNewAnimTop.top + "px",
      "left": itemPosNewAnimLeft.left + "px",
      "height": activeWidthNewAnimHeight + "px",
      "width": activeWidthNewAnimWidth + "px"
    });
    $("#navbarSupportedContent").on("click", "li", function (e) {
      $('#navbarSupportedContent ul li').removeClass("active");
      $(this).addClass('active');
      var activeWidthNewAnimHeight = $(this).innerHeight();
      var activeWidthNewAnimWidth = $(this).innerWidth();
      var itemPosNewAnimTop = $(this).position();
      var itemPosNewAnimLeft = $(this).position();
      $(".hori-selector").css({
        "top": itemPosNewAnimTop.top + "px",
        "left": itemPosNewAnimLeft.left + "px",
        "height": activeWidthNewAnimHeight + "px",
        "width": activeWidthNewAnimWidth + "px"
      });
    });
  }

  useEffect(() => {

    animation();
    $(window).on('resize', function () {
      setTimeout(function () { animation(); }, 500);
    });

  }, []);

  function logout()
  {
    ReactSession.set('username',null);
    window. location. reload(false);
  }

  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-mainbg">

        <img src='./logo.jpg' alt='logo' height='60px' width='60px' />
        <NavLink className="navbar-brand navbar-logo" to="/" exact>
          Share Steer
        </NavLink>


        <button
          className="navbar-toggler"
          onClick={function () {
            setTimeout(function () { animation(); });
          }}
          type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <i className="fas fa-bars text-white"></i>
        </button>

        <div
          className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ml-auto">

            <div className="hori-selector">
              <div className="left"></div>
              <div className="right"></div>
            </div>

            <li className="nav-item active">
              <NavLink className="nav-link" to="/home" exact>
                <i
                  className="fas fa-home">
                </i>Home
              </NavLink>
            </li>

            <li className="nav-item">
              <NavLink className="nav-link" to="/about" exact>
                <i
                  className="far fa-address-book">
                </i>About
              </NavLink>
            </li>

            <li className="nav-item">
              <NavLink className="nav-link" to="/service" exact>
                <i
                  className="far fa-clone">
                </i>Services
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/testimonial" exact>
                <i
                  className="far fa-chart-bar">
                </i>Testimonial
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/contact" exact>
                <i
                  className="far fa-copy">
                </i>Contact Us
              </NavLink>
            </li>
            {
              ReactSession.get("username") == null ?
                <li className="nav-item">
                  <NavLink className="nav-link" to="/login" exact>
                    <i
                      className="far fa-user">
                    </i>Login
                  </NavLink>
                </li> :
                <>
                  <li className="nav-item">

                    <NavLink className="nav-link" to="/profile" exact>
                      <i
                        className="far fa-user">
                      </i>{ReactSession.get("username").toUpperCase()}
                    </NavLink> </li>
                  <li className="nav-item">
                    <NavLink className="nav-link" onClick={logout} to='/' exact>
                      <i
                        className="fas fa-power-off">
                      </i>LOGOUT
                    </NavLink> </li>
                </>
            }
          </ul>
        </div>
      </nav>
    </div>
  )
}
export default Navbar;