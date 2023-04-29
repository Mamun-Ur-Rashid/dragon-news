import React, { useContext } from 'react';
import { Button, Container, Nav, Navbar } from 'react-bootstrap';
import { FaUserCircle } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../Provider/AuthProvider';

const NavigationBar = () => {
    const { user } = useContext(AuthContext);
    return (
        <div className='mt-5'>
            <Container>
                <Navbar collapseOnSelect expand="lg" bg="light" variant="light">

                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="mx-auto">
                            <Link className='text-decoration-none' to={'/category/0'}>Home</Link>
                            <Nav.Link href="#pricing">About</Nav.Link>
                            <Nav.Link href="#pricing">Career</Nav.Link>
                        </Nav>
                        <Nav>
                            {user &&
                                <FaUserCircle style={{ fontSize: '2rem' }}>
                                </FaUserCircle>
                            }

                            {
                                user ? <Button type="button" className="btn btn-secondary">logOut</Button> :
                                    <Link to={'/login'}><Button type="button" className="btn btn-secondary">Login</Button></Link>
                            }

                        </Nav>
                    </Navbar.Collapse>
                </Navbar>
            </Container>
        </div>
    );
};

export default NavigationBar;