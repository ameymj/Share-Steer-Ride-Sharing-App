import { useEffect, useState } from 'react';
import Welcome from './welcome.jpg';
import Welcom from './welcom.webp';
import { useNavigate } from 'react-router';
import axios from 'axios';

import { ReactSession } from 'react-client-session';


function Login() {
    const [username, setusername] = useState("");
    const [password, setPassword] = useState("");
    const [messege, setMesssge] = useState("");
    const [loggedIn, setLoggedIn] = useState(false);
    function verify() {

        axios.get("http://localhost:8080/sharesteer/getAllUsers")
            .then((response) => {
                ReactSession.set("allUser", response.data);
            })
            .catch((error) => {
                console.log(error);
            })

        const users = ReactSession.get("allUser");

console.log(users);
        for (let i = 0; i < users.length; i++) {
            if (users[i].user_name === username) {
                if (users[i].password === password) {
                    setMesssge("Successfully Login");
                    ReactSession.set("username", users[i].user_name);
                    ReactSession.set("user", users[i]);
                    setLoggedIn(true);
                    setMesssge("login successs");
                    window.location.reload(false);
                    return true;
                }
                else {
                    setMesssge("Invalid Username Or Password");
                    setLoggedIn(false);
                    return false;
                }
            }
        }

    }
    return (
        <section>
            <div className="container py-5 h-100">
                <div className="row d-flex justify-content-center align-items-center h-100">
                    <div className="col col-xl-10">
                        <div className="card" style={{ "borderRadius": " 1rem" }}>
                            <div className="row g-0">
                                <div className="col-md-6 col-lg-5 d-none d-md-block">
                                    <img src={Welcome}
                                        alt="login form" className="img-fluid" style={{ "borderRadius": " 1rem 0 0 1rem" }} /><br /><br /><br />
                                    <img src={Welcom}
                                        alt="login form" className="img-fluid" style={{ "borderRadius": " 1rem 0 0 1rem" }} />
                                </div>
                                <div className="col-md-6 col-lg-7 d-flex align-items-center">
                                    <div className="card-body p-4 p-lg-5 text-black" style={{ 'backgroundColor': 'lightskyblue' }}>

                                        <form action={loggedIn?username==='tusharsthul'?'/admin':'/profile':'/login'}>
                                            <div className="d-flex align-items-center mb-3 pb-1">
                                                <i className="fas fa-lock fa-2x me-3"></i>
                                                <span className="h1 fw-bold mb-0">LOGIN</span>
                                            </div>


                                            <div className="form-outline mb-4">
                                                <input type="text" id="form2Example17" className="form-control form-control-lg" required minLength={8} maxLength={16} onBlur={(e) => { setusername(e.target.value) }} />
                                                <label className="form-label">Username</label>
                                            </div>

                                            <div className="form-outline mb-4">
                                                <input type="password" id="form2Example27" className="form-control form-control-lg" required minLength={8} maxLength={16} onBlur={(e) => { setPassword(e.target.value) }} />
                                                <label className="form-label">Password</label>
                                            </div>

                                            <div className="pt-1 mb-4">
                                                <b>{messege}</b>
                                                <button className="btn btn-dark btn-lg btn-block" type="submit" onClick={verify}>Login</button>
                                            </div>
                                            <a href="/forgetpassword" style={{ "color": "black" }}>Forgot password?</a>
                                            <p className="mb-5 pb-lg-2" style={{ "color": " #393f81" }}>Don't have an account? <a href="/register"
                                                style={{ "color": "#000" }}>Register here</a></p>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Login;