import { useEffect, useState } from 'react';
import Welcome from './welcome.webp';
import Reception from './reception.webp';
import Journey from './journey.jpg';
import axios from 'axios';


function Register() {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [birthdate, setBirthdate] = useState("");
    const [gender, setGender] = useState("");
    const [email, setEmail] = useState("");
    const [contact, setContact] = useState("");
    const [username, setusername] = useState("");
    const [password, setPassword] = useState("");
    const [aadhar, setAadhar] = useState("");
    const [photo, setPhoto] = useState("");
    const [licence, setLicence] = useState("");
    const [messege, setMessege] = useState("");


    function addData() {
        const user = {}
        user.first_name = firstName;
        user.last_name = lastName;
        user.birth_date = birthdate;
        user.gender = gender;
        user.email_id = email;
        user.contact = contact;
        user.user_name = username;
        user.password = password;
        user.aadhar_image = aadhar;
        user.user_image = photo;
        user.driving_licence = licence;
        user.is_varified = false;
        user.user_image=photo;
        console.log(user);
        axios.post("http://localhost:8080/sharesteer/signup", user)
            .then((response) => {
                setMessege("Sign Up Successfull");
                console.log(response);
            })
            .catch((error) => {
                console.log(error);
                setMessege("enter Valid Data")
            })

    }

    return (
        <section>
            <div className="container py-5 h-100">
                <div className="row d-flex justify-content-center align-items-center h-100">
                    <div className="col col-xl-10">
                        <div className="card" style={{ "borderRadius": " 1rem" }}>
                            <div className="row g-0">
                                <div className="col-md-6 col-lg-5 d-none d-md-block">
                                    <img src={Reception}
                                        alt="login form" className="img-fluid" style={{ "borderRadius": " 1rem 0 0 1rem" }} /><br /><br /><br />
                                    <img src={Welcome}
                                        alt="login form" className="img-fluid" style={{ "borderRadius": " 1rem 0 0 1rem" }} /><br /><br /><br />
                                    <img src={Journey}
                                        alt="login form" className="img-fluid" style={{ "borderRadius": " 1rem 0 0 1rem" }} />
                                </div>
                                <div className="col-md-6 col-lg-7 d-flex align-items-center">
                                    <div className="card-body p-4 p-lg-5 text-black" style={{ 'backgroundColor': 'rgb(5, 101, 134)' }}>

                                        <form>

                                            <div className="d-flex align-items-center mb-3 pb-1">
                                                <i className="fas fa-key fa-2x me-3" style={{ "color": " #000" }}></i>
                                                <span className="h1 fw-bold mb-0">Register</span>
                                            </div>

                                            <div className="form-outline mb-4">
                                                <input type="text" className="form-control form-control-lg" required minLength={1} maxLength={16} onBlur={(e) => { setFirstName(e.target.value) }} />
                                                <label className="form-label">First Name</label>
                                            </div>

                                            <div className="form-outline mb-4">
                                                <input type="text" className="form-control form-control-lg" required minLength={1} maxLength={16} onBlur={(e) => { setLastName(e.target.value) }} />
                                                <label className="form-label">Last Name</label>
                                            </div>

                                            <div className="form-outline mb-4">
                                                <input type="date" className="form-control form-control-lg" required max={new Date().toJSON().slice(0, 10).replace(/-/g, '-')} onBlur={(e) => { setBirthdate(e.target.value) }} />
                                                <label className="form-label">Birthdate</label>
                                            </div>

                                            <div>
                                                <select className="form-select btn btn-dark btn-lg btn-block" aria-label="Default select example" onChange={(e) => { setGender(e.target.value); }}>
                                                    <option value="Male">Select</option>
                                                    <option value="Male">Male</option>
                                                    <option value="Female">Female</option>
                                                    <option value="Other">Other</option>
                                                </select>
                                                <label className="form-label">gender</label>
                                            </div>


                                            <div className="form-outline mb-4">
                                                <input type="mail" className="form-control form-control-lg" required minLength={5} maxLength={70} onBlur={(e) => { setEmail(e.target.value) }} />
                                                <label className="form-label">E-mail</label>
                                            </div>

                                            <div className="form-outline mb-4">
                                                <input type="number" className="form-control form-control-lg" required minLength={3} maxLength={16} onBlur={(e) => { setContact(e.target.value) }} />
                                                <label className="form-label">Contact</label>
                                            </div>

                                            <div className="form-outline mb-4">
                                                <input type="file" className="form-control form-control-lg" onBlur={(e) => { setPhoto(e.target.value);console.log(e.target); }} />
                                                <label className="form-label">Upload Your-Photo</label>
                                            </div>

                                            <div className="form-outline mb-4">
                                                <input type="file" className="form-control form-control-lg" onBlur={(e) => { setAadhar(e.target.value) }} />
                                                <label className="form-label">Upload Aadhar-Image</label>
                                            </div>

                                            <div className="form-outline mb-4">
                                                <input type="file" className="form-control form-control-lg" onBlur={(e) => { setLicence(e.target.value) }} />
                                                <label className="form-label">Upload Licence</label>
                                            </div>

                                            <div className="form-outline mb-4">
                                                <input type="password" className="form-control form-control-lg" required minLength={8} maxLength={16} onBlur={(e) => { setPassword(e.target.value) }} />
                                                <label className="form-label">Password</label>
                                            </div>


                                            <div className="form-outline mb-4">
                                                <input type="text" className="form-control form-control-lg"  required minLength={8} maxLength={16} onBlur={(e) => { setusername(e.target.value) }} />
                                                <label className="form-label">Username</label>
                                            </div>
                                            <b>{messege}</b>

                                            <div className="pt-1 mb-4">
                                                <button className="btn btn-dark btn-lg btn-block" type="submit" onClick={addData}>Register</button>
                                            </div>

                                            <div className="pt-1 mb-4">
                                                <button className="btn btn-dark btn-lg btn-block" type="Reset">Reset</button>
                                            </div>

                                            <a className="small text-muted" href="/forgetpassword">Forgot password?</a>
                                            <p className="mb-5 pb-lg-2" style={{ "color": " #393f81" }}>Already't have an account? <a href="/login"
                                                style={{ "color": " #393f81" }}>Login here</a></p>

                                            <a href="/termsAndCondition" className="small text-muted">Terms and Conditions.</a>

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

export default Register;