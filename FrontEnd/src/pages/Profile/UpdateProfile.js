import { useEffect, useState } from 'react';
import Update from './images/update.webp';
import axios from 'axios';
import { ReactSession } from 'react-client-session';


function UpdateProfile() {
    const user = ReactSession.get("user");
    const [firstName, setFirstName] = useState(user.first_name);
    const [lastName, setLastName] = useState(user.lastName);
    const [birthdate, setBirthdate] = useState(user.birth_date);
    const [gender, setGender] = useState(user.gender);
    const [contact, setContact] = useState(user.contact);
    const [password, setPassword] = useState(user.password);
    const [messege, setMessge] = useState("");



    function updateData() {
        const updatedUser = {}
        updatedUser.user_name = user.user_name;
        updatedUser.first_name = firstName;
        updatedUser.last_name = lastName;
        updatedUser.birth_date = birthdate;
        updatedUser.gender = gender;
        updatedUser.contact = contact;
        updatedUser.password = password;
        updatedUser.is_varified = false;
        console.log(updatedUser);
        axios.post("http://localhost:8080/sharesteer/updateprofile", updatedUser)
            .then((response) => {
                console.log(response);
                setMessge(response.data);

            })
            .catch((error) => {
                console.log(error);
                setMessge(error.data);

            })

        axios.get("http://localhost:8080/sharesteer/getdetailsbyid/"+user.user_id)
            .then((response) => {
                ReactSession.set("user", response.data);
            })
            .catch((error) => {
                console.log(error);
            })
    }

    return (
       <section>
              <h1 style={{'textAlign':'center'}}><b><u>Update Profile</u></b></h1>
            <div className="container py-5 h-100">
                <div className="row d-flex justify-content-center align-items-center h-100">
                    <div className="col col-xl-10">
                        <div className="card" style={{ "borderRadius": " 1rem" }}>
                            <div className="row g-0">
                                <div className="col-md-6 col-lg-5 d-none d-md-block">
                                    <img src={Update}
                                        alt="login form" className="img-fluid" style={{ "borderRadius": " 1rem 0 0 1rem" }} /><br /><br /><br />
                                </div>
                                <div className="col-md-6 col-lg-7 d-flex align-items-center">
                                    <div className="card-body p-4 p-lg-5 text-black" style={{ 'backgroundColor': 'rgb(5, 101, 134)' }}>

                                        <form action='/profile'>

                                            <div className="d-flex align-items-center mb-3 pb-1">
                                                <i className="fas fa-key fa-2x me-3" style={{ "color": " #000" }}></i>
                                                <span className="h1 fw-bold mb-0">Update Profile</span>
                                            </div>

                                            <div className="form-outline mb-4">
                                                <input type="text" className="form-control form-control-lg" defaultValue={user.first_name} required minLength={1} maxLength={30} onBlur={(e) => { setFirstName(e.target.value) }} />
                                                <label className="form-label">First Name</label>
                                            </div>

                                            <div className="form-outline mb-4">
                                                <input type="text" className="form-control form-control-lg" defaultValue={user.last_name} required minLength={1} maxLength={30} onBlur={(e) => { setLastName(e.target.value) }} />
                                                <label className="form-label">Last Name</label>
                                            </div>

                                            <div className="form-outline mb-4">
                                                <input type="date" className="form-control form-control-lg" defaultValue={user.birth_date} max={new Date().toJSON().slice(0, 10).replace(/-/g, '-')} required onBlur={(e) => { setBirthdate(e.target.value) }} />
                                                <label className="form-label">Birthdate</label>
                                            </div>

                                            <div>
                                                <select className="form-select btn btn-dark btn-lg btn-block" aria-label="Default select example" onChange={(e) => { setGender(e.target.value); }}>
                                                    <option value="">Select</option>
                                                    <option value="Male">Male</option>
                                                    <option value="Female">Female</option>
                                                    <option value="Other">Other</option>
                                                </select>
                                                <label className="form-label">gender</label>
                                            </div>


                                            <div className="form-outline mb-4">
                                                <input type="mail" className="form-control form-control-lg" value={user.email_id} readOnly />
                                                <label className="form-label">E-mail</label>
                                            </div>

                                            <div className="form-outline mb-4">
                                                <input type="number" className="form-control form-control-lg" defaultValue={user.contact} required minLength={10} maxLength={14} onBlur={(e) => { setContact(e.target.value) }} />
                                                <label className="form-label">Contact</label>
                                            </div>

                                            <div className="form-outline mb-4">
                                                <input type="text" className="form-control form-control-lg" value={user.user_name} readOnly />
                                                <label className="form-label">Username</label>
                                            </div>

                                            <div className="form-outline mb-4">
                                                <input type="password" className="form-control form-control-lg" defaultValue={user.password} required minLength={8} maxLength={16} onBlur={(e) => { setPassword(e.target.value) }} />
                                                <label className="form-label">Password</label>
                                            </div>
                                            <b>{messege}</b>

                                            <div className="pt-1 mb-4">
                                                <button className="btn btn-dark btn-lg btn-block" type='submit' onClick={updateData}>Update Profile</button>
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

export default UpdateProfile;