

export default function Review()
{
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
                                    <div className="card-body p-4 p-lg-5 text-black" style={{ 'backgroundColor': 'rgb(5, 101, 134)' }}>

                                        <form >
                                            <div className="d-flex align-items-center mb-3 pb-1">
                                                <i className="fas fa-lock fa-2x me-3"></i>
                                                <span className="h1 fw-bold mb-0">Give Feedback</span>
                                            </div>


                                            <div className="form-outline mb-4">
                                                <input type="number" id="form2Example17" className="form-control form-control-lg" required minLength={8} maxLength={16} onBlur={(e) => { setusername(e.target.value) }} />
                                                <label className="form-label">Rate out of 5</label>
                                            </div>

                                            <div className="form-outline mb-4">
                                                <input type="text" id="form2Example27" className="form-control form-control-lg" required minLength={8} maxLength={16} onBlur={(e) => { setPassword(e.target.value) }} />
                                                <label className="form-label">Write comment</label>
                                            </div>

                                            <div className="pt-1 mb-4">
                                                <b>{messege}</b>
                                                <button className="btn btn-dark btn-lg btn-block" type="submit" onClick={verify}>Submit Review</button>
                                            </div>
    
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
}