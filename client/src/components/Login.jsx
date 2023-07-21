import React, { useRef, useState } from 'react';
import { Card, Button, Form, Alert } from 'react-bootstrap';

// Create a login function

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const [show, setShow] = useState(false);
    const emailRef = useRef();
    const passwordRef = useRef();

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const handleSubmit = (e) => {
        e.preventDefault();
        if (emailRef.current.value === email && passwordRef.current.value === password) {
            handleShow();
        } else {
            setError('Invalid email or password');
        }

        setEmail('');
        setPassword('');

        emailRef.current.value = '';
        passwordRef.current.value = '';

        handleClose();
        console.log(email);
        console.log(password);
        console.log(error);
    }
    return (
        <>
            <Card>
                <Card.Header className="text-center mb-4">Login</Card.Header>
                <Card.Body>
                    <Form onSubmit={handleSubmit}>
                        <Form.Group controlId="formBasicEmail" className="d-flex flex-column">
                            <Form.Label>Email address</Form.Label>
                            <Form.Control type="email" placeholder="Enter email" ref={emailRef} onChange={(e) => setEmail(e.target.value)} />
                            <Form.Text className="text-muted">
                                We'll never share your email with anyone else.
                            </Form.Text>
                        </Form.Group>
                        <Form.Group controlId="formBasicPassword">
                            <Form.Label>Password</Form.Label>
                            <Form.Control type="password" placeholder="Password" ref={passwordRef} onChange={(e) => setPassword(e.target.value)} />
                        </Form.Group>
                        <div className="d-flex justify-content-center">
                            <Button variant="primary" type="submit" className="m-3">
                                Login
                            </Button>
                            {error && <Alert variant="danger">{error}</Alert>}
                            {/* <Button variant="primary" onClick={handleShow} className="m-3">
                                Register
                            </Button> */}
                        </div>
                    </Form>
                </Card.Body>
            </Card>
        </>
    )
};

export default Login;