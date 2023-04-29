import React from 'react';
import Header from '../Shared/Header';
import Footer from '../Shared/Footer';
import { Col, Container, Row } from 'react-bootstrap';
import LeftNavbar from '../Shared/LeftNavbar';
import RightNavbar from '../Shared/RightNavbar';
import { Outlet } from 'react-router-dom';
import NavigationBar from '../Shared/navigationBar/NavigationBar';

const Main = () => {
    return (
        <div>
            <Header></Header>
            <NavigationBar></NavigationBar>
            <Container>
                <Row>
                    <Col lg={3}>
                        <LeftNavbar></LeftNavbar>
                    </Col>
                    <Col lg={6}>
                       <Outlet></Outlet>
                    </Col>
                    <Col lg={3}>
                        <RightNavbar></RightNavbar>
                        </Col>
                </Row>
            </Container>
            <Footer></Footer>
        </div>
    );
};

export default Main;