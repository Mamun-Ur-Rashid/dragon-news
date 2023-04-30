import React,{useContext} from 'react';
import { Button, Container, Form } from 'react-bootstrap';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../Provider/AuthProvider';

const Login = () => {
    const {signInUser} = useContext(AuthContext);
    const navigate = useNavigate();
    const location = useLocation();
    console.log("login page location", location)
    const from = location.state?.from?.pathname || '/category/0';

    const handleLogin = (event) => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password);
       

        signInUser(email, password)
        .then(result =>{
            const signInedUser = result.user;
            console.log(signInedUser);
            form.reset();
            navigate(from, {replace: true});
        })
        .catch(error =>{
            console.log(error.message);
        })
    }
    return (
        <Container className='w-25 mx-auto'>
            <h4>Login Please!</h4>
            <Form onSubmit={handleLogin}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" name='email' placeholder="Enter email" required />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" name='password' placeholder="Password" required />
                </Form.Group>
                <Button variant="primary" type="submit">
                    Login
                </Button>
                <br />
                <Form.Text className="text-success">
                    Don't have an account?  <Link to='/register'>Register</Link>   
                </Form.Text>
                <Form.Text className="text-success">
                
                </Form.Text>
                <Form.Text className="text-danger">
                
                </Form.Text>
            </Form>
        </Container>
    );
};

export default Login;