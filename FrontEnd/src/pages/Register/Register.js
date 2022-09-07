import { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { ReactSession } from 'react-client-session';


function Login() {
    const [username, setusername] = useState("");
    const [password, setPassword] = useState("");
    const [users, setUsers] = useState([]);


    useEffect(() => {
        fetch('https://reqres.in/api/users?page=2', { method: 'Get' })
            .then((response) => response.json())
            .then((data) => setUsers(data));
    }, [])

    return (
        <center style={{ padding: 75 }}>
            <div style={{ borderStyle: 'double', width: 400 }}>
                <Form action='/login'>
                    <Form.Label style={{ fontSize: 50 }}>Register</Form.Label>
                    <Form.Group className="mb-3" controlId="formBasicusername">
                        <b>Firstname</b>
                        <Form.Control type="text" placeholder="Enter username" onBlur={(e) => { setusername(e.target.value) }} />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                    <b>Last name</b>
                        <Form.Control type="password" placeholder="Password" onBlur={(e) => { setPassword(e.target.value) }} />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                    <b>Username</b>
                        <Form.Control type="password" placeholder="Password" onBlur={(e) => { setPassword(e.target.value) }} />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                    <b>Username</b>
                        <Form.Control type="password" placeholder="Password" onBlur={(e) => { setPassword(e.target.value) }} />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                    <b>Username</b>
                        <Form.Control type="password" placeholder="Password" onBlur={(e) => { setPassword(e.target.value) }} />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                    <b>Image</b>
                        <Form.Control type="file" placeholder="image" onBlur={(e) => { setPassword(e.target.value) }} />
                    </Form.Group>
                    <Button variant="primary" type="submit">
                        Submit
                    </Button><br />
                </Form>

            </div>
        </center>
    );
}

export default Login;