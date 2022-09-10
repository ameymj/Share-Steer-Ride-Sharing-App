import { useEffect, useState } from 'react';
import Welcome from './welcome.webp';
import Reception from './reception.webp';
import Journey from './journey.jpg';


function Login() {
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
    const [users, setUsers] = useState([]);

    function addData()
    {

    }

    useEffect(() => {
        fetch('http://localhost:8080/sharesteer/addUser', { method: 'Get' })
            .then((response) => response.json())
            .then((data) => setUsers(data));
    }, [])

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
                                    <div className="card-body p-4 p-lg-5 text-black" style={{'backgroundColor':'rgb(5, 101, 134)'}}>

                                        <form>

                                            <div className="d-flex align-items-center mb-3 pb-1">
                                                <i className="fas fa-key fa-2x me-3" style={{ "color": " #000" }}></i>
                                                <span className="h1 fw-bold mb-0">Register</span>
                                            </div>

                                            <div className="form-outline mb-4">
                                                <input type="text"  className="form-control form-control-lg" required minLength={5} maxLength={16} onBlur={(e) => { setFirstName(e.target.value) }} />
                                                <label className="form-label">First Name</label>
                                            </div>

                                            <div className="form-outline mb-4">
                                                <input type="text" className="form-control form-control-lg" required minLength={3} maxLength={16} onBlur={(e) => { setLastName(e.target.value) }} />
                                                <label className="form-label">Last Name</label>
                                            </div>

                                            <div className="form-outline mb-4">
                                                <input type="date"  className="form-control form-control-lg" required minLength={5} maxLength={16} onBlur={(e) => { setBirthdate(e.target.value) }} />
                                                <label className="form-label">Birthdate</label>
                                            </div>

                                            <div className="form-outline mb-4">
                                                <input type="text" className="form-control form-control-lg" required minLength={3} maxLength={16} onBlur={(e) => { setGender(e.target.value) }} />
                                                <label className="form-label">gender</label>
                                            </div>

                                            
                                            <div className="form-outline mb-4">
                                                <input type="mail"  className="form-control form-control-lg" required minLength={5} maxLength={16} onBlur={(e) => { setEmail(e.target.value) }} />
                                                <label className="form-label">E-mail</label>
                                            </div>

                                            <div className="form-outline mb-4">
                                                <input type="number" className="form-control form-control-lg" required minLength={3} maxLength={16} onBlur={(e) => { setContact(e.target.value) }} />
                                                <label className="form-label">Contact</label>
                                            </div>

                                            <div className="form-outline mb-4">
                                                <input type="file" className="form-control form-control-lg" required  onBlur={(e) => { setPhoto(e.target.value) }} />
                                                <label className="form-label">Upload Your-Photo</label>
                                            </div>

                                            <div className="form-outline mb-4">
                                                <input type="file" className="form-control form-control-lg"  onBlur={(e) => { setAadhar(e.target.value) }} />
                                                <label className="form-label">Upload Aadhar-Image</label>
                                            </div>

                                            <div className="form-outline mb-4">
                                                <input type="file"  className="form-control form-control-lg"  onBlur={(e) => { setLicence(e.target.value) }} />
                                                <label className="form-label">Upload Licence</label>
                                            </div>

                                            <div className="form-outline mb-4">
                                                <input type="password" className="form-control form-control-lg" required minLength={3} maxLength={16} onBlur={(e) => { setPassword(e.target.value) }} />
                                                <label className="form-label">Password</label>
                                            </div>

                                            
                                            <div className="form-outline mb-4">
                                                <input type="text"  className="form-control form-control-lg" required minLength={5} maxLength={16} onBlur={(e) => { setusername(e.target.value) }} />
                                                <label className="form-label">Username</label>
                                            </div>

                                            <div className="pt-1 mb-4">
                                                <button className="btn btn-dark btn-lg btn-block" type="button" onClick={addData}>Register</button>
                                            </div>

                                            <a className="small text-muted" href="/forgetpassword">Forgot password?</a>
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
    );
}

export default Login;