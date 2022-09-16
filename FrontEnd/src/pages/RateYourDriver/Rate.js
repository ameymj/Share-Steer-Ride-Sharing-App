import React from 'react'

export default function Rate() {

    function verify()
    {

    }
    return (
        <div>

            <section>
                <div className="container py-5 h-100">
                    <div className="row d-flex justify-content-center align-items-center h-100">
                        <div className="col col-xl-10">
                            <div className="card" style={{ "borderRadius": " 1rem" }}>
                                <div className="row g-0">
                                    <div className="col-md-6 col-lg-5 d-none d-md-block">
                                        <img src=""
                                            alt="login form" className="img-fluid" style={{ "borderRadius": " 1rem 0 0 1rem" }} /><br /><br /><br />
                                        <img src=""
                                            alt="login form" className="img-fluid" style={{ "borderRadius": " 1rem 0 0 1rem" }} />
                                    </div>
                                    <div className="col-md-6 col-lg-7 d-flex align-items-center">
                                        <div className="card-body p-4 p-lg-5 text-black" style={{ 'backgroundColor': 'rgb(5, 101, 134)' }}>

                                            <form action={'/home'}>
                                                <div className="d-flex align-items-center mb-3 pb-1">
                                                    <i className="fas fa-lock fa-2x me-3"></i>
                                                    <span className="h1 fw-bold mb-0">Rate Your Driver</span>
                                                </div>


                                                <div className="form-outline mb-4">
                                                    <input type="text" id="form2Example17" className="form-control form-control-lg" />
                                                    <label className="form-label">Username</label>
                                                </div>

                                                <div>
                                                    <select className="form-select btn btn-dark btn-lg btn-block" aria-label="Default select example">
                                                        <option value="1"><p>&#11088</p></option>
                                                        <option value="2">Male</option>
                                                        <option value="3">Female</option>
                                                        <option value="4">Other</option>
                                                        <option value="5">Other</option>
                                                    </select>
                                                    <label className="form-label">Rate</label>
                                                </div>

                                                <div className="pt-1 mb-4">
                                                    <button className="btn btn-dark btn-lg btn-block" type="submit" onClick={verify}>submit</button>
                                                </div>
                                                <a href="/forgetpassword" style={{ "color": "black" }}>Forgot password?</a>
                                                <p className="mb-5 pb-lg-2" style={{ "color": " #393f81" }}>Don't have an account? <a href="/register"
                                                    style={{ "color": " #000" }}>Register here</a></p>
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
