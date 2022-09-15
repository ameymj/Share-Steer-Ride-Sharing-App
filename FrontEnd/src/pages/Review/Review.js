import { useEffect, useState } from 'react';
import Rating from './rating.jpg';
import Reviews from './review.jpg';
import { useNavigate } from 'react-router';
import axios from 'axios';

import { ReactSession } from 'react-client-session';

export default function Review()
{

    const [rating, setRating] = useState("");
    const [review, setReview] = useState("");
    const [messege, setMesssge] = useState("");

    function verify() {

    }

    return(
    <section>
            <div className="container py-5 h-100">
                <div className="row d-flex justify-content-center align-items-center h-100">
                    <div className="col col-xl-10">
                        <div className="card" style={{ "borderRadius": " 1rem" }}>
                            <div className="row g-0">
                                <div className="col-md-6 col-lg-5 d-none d-md-block">
                                    <img src={Reviews}
                                        alt="reviewimg" className="img-fluid" style={{ "borderRadius": " 1rem 0 0 1rem" }} /><br /><br /><br />
                                    <img src={Rating}
                                        alt="ratingimg" className="img-fluid" style={{ "borderRadius": " 1rem 0 0 1rem" }} />
                                </div>
                                <div className="col-md-6 col-lg-7 d-flex align-items-center">
                                    <div className="card-body p-4 p-lg-5 text-black" style={{ 'backgroundColor': 'rgb(5, 101, 134)' }}>

                                        <form >
                                            <div className="d-flex align-items-center mb-3 pb-1">
                                                <i className="fas fa-lock fa-2x me-3"></i>
                                                <span className="h1 fw-bold mb-0">Give Feedback</span>
                                            </div>


                                            <div className="form-outline mb-4">
                                            <select className="form-select btn btn-dark btn-lg btn-block" aria-label="Default select example" onBlur={(e) => { setRating(e.target.value) }}>
                                                        <option value="1">*</option>
                                                        <option value="2">* *</option>
                                                        <option value="3">* * *</option>
                                                        <option value="4">* * * *</option>
                                                        <option value="5">* * * * *</option>
                                                    </select>
                                                <label className="form-label">Rate out of 5 </label>
                                            </div>

                                            <div className="form-outline mb-4">
                                                <input type="text" id="form2Example27" className="form-control form-control-lg"  onBlur={(e) => { setReview(e.target.value) }} />
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
        );
}