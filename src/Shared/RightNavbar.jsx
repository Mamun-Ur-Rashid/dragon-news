import React,{useContext} from 'react';
import { ListGroup } from 'react-bootstrap';
import { FaFacebookF, FaGithub, FaGoogle, FaInstagramSquare, FaTwitter } from 'react-icons/fa';
import QZone from './QZone';
import bg from '../assets/bg.png'
import { AuthContext } from '../Provider/AuthProvider';

const RightNavbar = () => {
    const {signInWithGoogle, signInWithGithub} = useContext(AuthContext);

    const handleSignInGoogle = () =>{
        signInWithGoogle()
        .then(result =>{
            const googleUser = result.user;
            console.log(googleUser);
        })
        .catch(error =>{
            console.log(error);
        })
    }

    const handleSignInGithub = () => {
        signInWithGithub()
        .then(result => {
            const singInUser = result.user;
            console.log(singInUser);
        })
        .catch(error => {
            console.log(error.message);
        })
    }

    return (
        <div className='mt-5'>
            <h4>Login With</h4>
            <button onClick={handleSignInGoogle} type="button" className="btn btn-outline-primary mt-2 mb-1"> <FaGoogle /> Login with Google</button>
            <button onClick={handleSignInGithub} type="button" className="btn btn-outline-secondary"><FaGithub /> Login with Github</button>
            <div className='mt-4 mb-3'>
                <h4>Find Us On</h4>
                <ListGroup>
                    <ListGroup.Item><FaFacebookF /> Facebook</ListGroup.Item>
                    <ListGroup.Item><FaTwitter /> Twitter</ListGroup.Item>
                    <ListGroup.Item><FaInstagramSquare /> Instagram</ListGroup.Item>
                </ListGroup>
                <QZone></QZone>
                <div className='text-white' style={{backgroundImage: `url(${bg})`}}>
                    
                   <div>
                   <h3 className='py-5 ps-5 mt-6'>Create an <br />Amazing <br />Newspaper</h3>
                    <div className='py-5 ps-5 '>
                    <small className=''>Discover thousands of <br /> options, easy to <br /> customize layouts, one- <br /> click to import demo <br /> and much more.</small> <br />
                    
                    <button type="button" className="btn btn-danger mt-3">Learn More</button>
                    </div>
                   </div>
                </div>
            </div>
        </div>
    );
};

export default RightNavbar;