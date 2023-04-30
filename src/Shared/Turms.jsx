import React from 'react';
import { Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Turms = () => {
    return (
        <div>
            <Container className='w-50 mt-5 shadow p-3'>
                <h4 className='text-center'>Our Turms and Conditions</h4>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam dicta ullam dolorem cupiditate veritatis quasi. Excepturi in praesentium a fugit iste delectus ex explicabo id quasi ipsam. Consectetur laborum eos quis minus, ut corrupti itaque nesciunt aut quaerat odit voluptate, incidunt ullam, repellat velit dignissimos consequuntur officiis tempore quod voluptates?</p>
                <p>go back to <Link to='/register'>Register</Link></p>
            </Container>
        </div>
    );
};

export default Turms;