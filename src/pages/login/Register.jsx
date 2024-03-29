import React,{useContext, useState} from 'react';
import { Button, Container, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../Provider/AuthProvider';
import useTitle from '../../hook/useTitle';

const Register = () => {
    const {createUser} = useContext(AuthContext);
    const [accepted, setAccepted] = useState(false);
    const [email, setEmail] = useState("");
    useTitle('Register')
    const [password, setPassword] = useState("");
    const [name, setName] = useState("");
    const [photo, setPhoto] = useState("");
    const [error, setError] = useState("");
    const [success, setSuccess] = useState("")

    const handleRegister = (event) => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const photo = form.photo.value;
        const email = form.email.value;
        const password = form.password.value;
        setSuccess("");
        setError("");
        // console.log(name, email, password);
        // if (!/^(?=.*\d)(?=.*[A-Z])(?=.*[a-z])(?=.*[a-zA-Z!#$%&? "])[a-zA-Z0-9!#$%&?]{8,}$/.test(password)) {
        //     setError("Your password should contain at least one digit, one lower case, one uppercase, one special character and 8 characters long")
        //     return
        //   }
        if(!/(?=.*?[A-Z])/.test(password)) {
            setError("Your Password should be at least one Upper case!");
            return;
        }
        else if (!/(?=.*?[a-z])/.test(password)){
            setError("Your password should be at least one Lower Case!!");
            return;
        }
        else if(!/(?=.*?[0-9])/.test(password)){
            setError("Your password should be at least one digit!!");
            return;
        }
        else if(!/(?=.*?[#?!@$%^&*-])/.test(password)){
            setError("Your password should be at least one Special character!!");
            return;
        }
        else if(password.length < 8 ){
            setError("Your password should be at least 8 characters long!!");
            return;
        }
        createUser(email, password)
        .then(result => {
            const createdUser = result.user;
            console.log(createdUser);
            setError('');
            form.reset();
            setSuccess("User has been created Successfully!!")
        })
        .catch(error =>{
            console.log(error.message);
            setError(error.message);
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
                <Form.Group className="" controlId="formBasicCheckbox" onClick={handleAccepted}>
                    <Form.Check type="checkbox" name='accept' 
                    label={<>Accept <Link to='/turms'>Terms and conditions</Link></>} />
                </Form.Group>
                <Form.Text className="text-success fs-4">
                {success}
                </Form.Text> <br />
                <Form.Text className="text-danger mb-3">
                {error}
                </Form.Text> <br />
                <Button variant="primary" disabled={!accepted} type="submit">
                    Register
                </Button>
                <br />
                <Form.Text className="text-success">
                    Allready have an account?  <Link to='/login'>Login</Link>   
                </Form.Text>
            </Form>
        </Container>
    );
};

export default Register;