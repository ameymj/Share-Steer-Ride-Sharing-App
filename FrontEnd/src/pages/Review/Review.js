import { useEffect, useState } from 'react';
import Rating from './rating.jpg';
import Reviews from './review.jpg';
import { useNavigate } from 'react-router';
import {useLocation } from 'react-router-dom';
import axios from 'axios';
import { ReactSession } from 'react-client-session';

export default function Review(props)
{
    const user = ReactSession.get('user');

    const [star, setStar] = useState("");
    const [review, setReview] = useState("");
    const [message, setMessage] = useState("");

    const [driver,setDriver]= useState("");
    const ride=props.myd;


     function ThirdPage(){
        console.log(ride);
        useEffect(()=>{
        axios.get("http://localhost:8080/sharesteer/getUser/"+ride)
        .then((response)=>{setDriver(response.data)})
        .catch((error)=>{console.log(error)})
        
    },[])
}

      ThirdPage();
      
    function rate()
    {
        const rating = {}
        rating.driver_id = driver.user_id;
        rating.user_id = user.user_id;
        rating.rating = star;
        rating.comment= review;

    axios.post("http://localhost:8080/sharesteer/giverating/",rating)
    .then((response)=>{setMessage(response.data)})
    .catch((error)=>{console.log(error)})
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

                                        <form action='/profile' >
                                            <div className="d-flex align-items-center mb-3 pb-1">
                                                <i className="fas fa-lock fa-2x me-3"></i>
                                                <span className="h1 fw-bold mb-0">Give Feedback</span>
                                            </div>

                                            <div className="form-outline mb-4">
                                                <input type="text" id="form2Example27" className="form-control form-control-lg" readOnly value={driver.first_name+" "+driver.last_name} />
                                                <label className="form-label">Driver Name</label>
                                            </div>   

                                            <div className="form-outline mb-4">
                                            <select className="form-select btn btn-dark btn-lg btn-block" aria-label="Default select example" onChange={(e) => { setStar(e.target.value) }}>
                                                        <option value="1">&#11088;</option>
                                                        <option value="2">&#11088; &#11088;</option>
                                                        <option value="3">&#11088; &#11088; &#11088;</option>
                                                        <option value="4">&#11088; &#11088; &#11088; &#11088;</option>
                                                        <option value="5">&#11088; &#11088; &#11088; &#11088; &#11088;</option>
                                                    </select>
                                                <label className="form-label">Rate out of 5 </label>
                                            </div>

                                            <div className="form-outline mb-4">
                                                <input type="text" id="form2Example27" className="form-control form-control-lg"  onBlur={(e) => { setReview(e.target.value) }} />
                                                <label className="form-label">Write comment</label>
                                            </div>

                                            <div className="pt-1 mb-4">
                                                <b>{message}</b>
                                                <button className="btn btn-dark btn-lg btn-block" type="submit" onClick={rate}>Submit Review</button>
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