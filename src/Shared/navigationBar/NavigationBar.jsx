import React, { useContext } from 'react';
import { Button, Container, Nav, Navbar } from 'react-bootstrap';
import { FaUserCircle } from 'react-icons/fa';
import { Link, NavLink } from 'react-router-dom'; 

import { AuthContext } from '../../Provider/AuthProvider';

const NavigationBar = () => {
    const { user, logOut } = useContext(AuthContext);

    const handleLogOut = () => {
        logOut()
            .then()
            .catch(error => console.log(error));
    };

    return (
        <div className='mt-5'>
            <Container>
                <Navbar collapseOnSelect expand="lg" bg="light" variant="light">

                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="mx-auto">
                            <NavLink exact to={'/category/0'} className='nav-link text-decoration-none' activeClassName='active'>Home</NavLink>
                             
                            <NavLink to="/about" className='nav-link text-decoration-none' activeClassName='active'>About</NavLink>
                            <NavLink to="/career" className='nav-link text-decoration-none' activeClassName='active'>Career</NavLink>
                        </Nav>
                        <Nav>
                            {user &&
                                <FaUserCircle style={{ fontSize: '2rem' }} />
                            }

                            {
                                user ? <Button onClick={handleLogOut} type="button" className="btn btn-secondary">logOut</Button> :
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
