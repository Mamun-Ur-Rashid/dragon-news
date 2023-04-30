import React,{useContext, useState} from 'react';
import { Button, Container, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../Provider/AuthProvider';

const Register = () => {
    const {createUser} = useContext(AuthContext);
    const [accepted, setAccepted] = useState(false)

    const handleRegister = (event) => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const photo = form.photo.value;
        const email = form.email.value;
        const password = form.password.value;

        console.log(name, email, password);
        createUser(email, password)
        .then(result => {
            const createdUser = result.user;
            console.log(createdUser);
        })
        .catch(error =>{
            console.log(error.message)
        })

    }
    const handleAccepted = (event) => {
        setAccepted(event.target.checked);
    } 
    return (
        <Container className='w-25 mx-auto'>
            <h4>Please Register!</h4>
            <Form onSubmit={handleRegister}>
                <Form.Group className="mb-3" controlId="name">
                    <Form.Label>Name</Form.Label>
                    <Form.Control type="text" name='name' placeholder="Enter Your Name:" required />
                </Form.Group>
                <Form.Group className="mb-3" controlId="photo">
                    <Form.Label>Photo URL</Form.Label>
                    <Form.Control type="text" name='photo' placeholder="Your Photo url" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" name='email' placeholder="Enter email" required />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" name='password' placeholder="Password" required />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicCheckbox" onClick={handleAccepted}>
                    <Form.Check type="checkbox" name='accept' 
                    label={<>Accept <Link to='/turms'>Terms and conditions</Link></>} />
                </Form.Group>
                <Button variant="primary" disabled={!accepted} type="submit">
                    Register
                </Button>
                <br />
                <Form.Text className="text-success">
                    Allready have an account?  <Link to='/login'>Login</Link>   
                </Form.Text>
                <Form.Text className="text-success">
                
                </Form.Text>
                <Form.Text className="text-danger">
                
                </Form.Text>
            </Form>
        </Container>
    );
};

export default Register;