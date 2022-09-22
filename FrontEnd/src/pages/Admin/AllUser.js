import React, { useEffect, useState } from 'react';
import Table from 'react-bootstrap/Table';
import axios from 'axios';
import '../Ride/ride.css';
export default function AllUser() {
  const [users, setUsers] = useState([])
  const [check, setCheck] = useState(false)



  useEffect(()=>{
    axios.get("http://localhost:8080/sharesteer/getAllUsers")
      .then((response) => {
        setUsers(response.data);
        setCheck(true)
      })
      .catch((error) => {
        console.log(error);
      })
    },[])



  const [user, setUser] = useState("");
  const [firstName, setFirstName] = useState(user.first_name);
  const [lastName, setLastName] = useState(user.lastName);
  const [birthdate, setBirthdate] = useState(user.birth_date);
  const [gender, setGender] = useState(user.gender);
  const [contact, setContact] = useState(user.contact);
  const [password, setPassword] = useState(user.password);
  const [email, setEmailId] = useState(user.email_id);
  const [verify, setVerify] = useState(user.is_verified);

  console.log(users);
  function updateData(user) {
    console.log(user);
    const updatedUser = {}
    updatedUser.user_id = user.user_id;
    updatedUser.user_name = user.user_name;
    updatedUser.first_name = firstName==undefined?user.first_name:firstName;
    updatedUser.last_name = lastName==undefined?user.last_name:lastName;
    updatedUser.birth_date = birthdate==undefined?user.birth_date:birthdate;
    updatedUser.gender = gender==undefined?user.gender:gender;
    updatedUser.contact = contact==undefined?user.contact:contact;
    updatedUser.email_id = email==undefined?user.email_id:email;
    updatedUser.password = password==undefined?user.password:password;
    updatedUser.is_varified = verify==undefined?user.verify:verify;
    console.log(updatedUser);
    axios.post("http://localhost:8080/sharesteer/updateprofilebyAdmin", updatedUser)
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
      })

  }
  return (

    <div>
          <h1 style={{ 'textAlign': 'center' }}><b><u>Admin Page</u></b></h1>
      <Table striped bordered hover className="table-responsive">
        <thead>
          <tr>
            <th>ID</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Gender</th>
            <th>BirthDate</th>
            <th>Username</th>
            <th>Password</th>
            <th>Email</th>
            <th>Contact</th>
            <th>Verified</th>
          </tr>
        </thead>
        <tbody>
          {check && users.map((user,index) => (
            <tr key={index}>
              <td>{user.user_id}</td>
              <td><input type='text' defaultValue={user.first_name} required minLength={1} maxLength={30} onBlur={(e) => { setFirstName(e.target.value); setUser(user) }} /></td>
              <td><input type='text' defaultValue={user.last_name} required minLength={1} maxLength={30} onBlur={(e) => { setLastName(e.target.value) }} /></td>
              <td><input type='text' defaultValue={user.gender} required minLength={1} maxLength={30} onBlur={(e) => { setGender(e.target.value) }} /></td>
              <td><input type='date' defaultValue={user.birth_date} max={new Date().toJSON().slice(0, 10).replace(/-/g, '-')} required onBlur={(e) => { setBirthdate(e.target.value) }} /></td>
              <td><input type='text' defaultValue={user.user_name} minLength={8} maxLength={16} readOnly /></td>
              <td><input type='text' defaultValue={user.password} minLength={8} maxLength={16} onBlur={(e) => { setPassword(e.target.value) }} /></td>
              <td><input type='email' defaultValue={user.email_id} minLength={8} maxLength={100} onBlur={(e) => { setEmailId(e.target.value) }} /></td>
              <td><input type='number' defaultValue={user.contact} minLength={10} maxLength={14} onBlur={(e) => { setContact(e.target.value) }} /></td>
              <td><input type='text' defaultValue={user.is_varified} onBlur={(e) => { setVerify(e.target.value) }} /></td>
              <td><button className='btn btn-dark' onClick={() => { updateData(user) }}>Update</button></td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  )
}
