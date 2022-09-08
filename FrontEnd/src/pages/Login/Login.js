import { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';

import { ReactSession } from 'react-client-session';


function Login() {
    const [username, setusername] = useState("");
    const [password, setPassword] = useState("");
    const [messege, setMesssge] = useState("");
    const [users, setUsers] = useState([]);

    function verify() {
        for (let i = 0; i < users.length; i++) {
            if (users[i].username === username) {
                if (users[i].password === password) {
                    setMesssge("Successfully Login");
                    ReactSession.set("username", users[i].username);
                    setMesssge("login successs");
                    return true;
                }
                else {
                    setMesssge("Invalid Username Or Password");
                    return false;
                }
            }
        }

    }

    useEffect(() => {
        fetch('http://localhost:8080/sharesteer/getAll', { method: 'Get' })
            .then((response) => response.json())
            .then((data) => setUsers(data));
    }, [])

    return (
        <center style={{ padding: 75 }}>
            <div style={{ borderStyle: 'double', width: 400 }}>
                <Form action='/about'>
                    <Form.Label style={{ fontSize: 50 }}>Login</Form.Label>
                    <Form.Group className="mb-3" controlId="formBasicusername">
                        <Form.Label><b>Username</b></Form.Label>
                        <Form.Control type="text" placeholder="Enter username" required minLength={5} maxLength={16} onBlur={(e) => { setusername(e.target.value) }} />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label><b>Password</b></Form.Label>
                        <Form.Control type="password" placeholder="Password" required minLength={3} maxLength={16} onBlur={(e) => { setPassword(e.target.value) }} />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicCheckbox">
                        <Form.Check type="checkbox" label="Check me out" onClick={verify} />
                    </Form.Group>
                    <Button variant="primary" type="submit">
                        Submit
                    </Button><br />
                    <Form.Text>{messege}</Form.Text>

                </Form>
                <Nav.Link href="/register">Register</Nav.Link>

            </div>
        </center>
    );
}

export default Login;