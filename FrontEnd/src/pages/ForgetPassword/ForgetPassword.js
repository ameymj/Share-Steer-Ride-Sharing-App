import React from 'react'
import { useEffect, useState } from 'react';


export default function ForgetPassword() {

    const [username, setusername] = useState("");
    const [password, setPassword] = useState("");
    const [users, setUsers] = useState([]);
    function updateData()
    {

    }
  return (
    <div>
                <section>
            <div className="container py-5 h-100">
                <div className="row d-flex justify-content-center align-items-center h-100">
                    <div className="col col-xl-10">
                        <div className="card" style={{ "border-radius": " 1rem" }}>
                            <div className="row g-0">
                                <div className="col-md-6 col-lg-5 d-none d-md-block">
                                    <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/img1.webp"
                                        alt="login form" className="img-fluid" style={{ "border-radius": " 1rem 0 0 1rem" }} />
                                </div>
                                <div className="col-md-6 col-lg-7 d-flex align-items-center">
                                    <div className="card-body p-4 p-lg-5 text-black">

                                        <form>
                                            <div className="d-flex align-items-center mb-3 pb-1">
                                                <i className="fas fa-key fa-2x me-3" style={{ "color": " #ff6219" }}></i>
                                                <span className="h1 fw-bold mb-0">Logo</span>
                                            </div>

                                            <h5 className="fw-normal mb-3 pb-3" style={{ "letter-spacing": "1px" }}>Forgot Password</h5>

                                            <div className="form-outline mb-4">
                                                <input type="text" id="form2Example17" className="form-control form-control-lg" required minLength={5} maxLength={16} onBlur={(e) => { setusername(e.target.value) }} />
                                                <label className="form-label" for="form2Example17">Username</label>
                                            </div>

                                            
                                            <div className="form-outline mb-4">
                                                <input type="email" id="form2Example17" className="form-control form-control-lg" required minLength={5} maxLength={16} onBlur={(e) => { setusername(e.target.value) }} />
                                                <label className="form-label" for="form2Example17">Registered Email</label>
                                            </div>

                                            <div className="form-outline mb-4">
                                                <input type="password" id="form2Example27" className="form-control form-control-lg" required minLength={3} maxLength={16} onBlur={(e) => { setPassword(e.target.value) }} />
                                                <label className="form-label">New Password</label>
                                            </div>

                                            <div className="form-outline mb-4">
                                                <input type="password" id="form2Example27" className="form-control form-control-lg" required minLength={3} maxLength={16} onBlur={(e) => { setPassword(e.target.value) }} />
                                                <label className="form-label">Confirm Password</label>
                                            </div>

                                            <div className="pt-1 mb-4">
                                                <button className="btn btn-dark btn-lg btn-block" type="button" onClick={updateData}>Update</button>
                                            </div>

                                            <p className="mb-5 pb-lg-2" style={{ "color": " #393f81" }}>Already't have an account? <a href="/login"
                                                style={{ "color": " #393f81" }}>Login here</a></p>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </div>
  )
}