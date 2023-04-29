import React from 'react';
import qzone1 from '../assets/qZone1.png';
import qzone2 from '../assets/qZone2.png';
import qzone3 from '../assets/qZone3.png';

const QZone = () => {
    return (
        <div className='bg-light mt-3 py-4 my-4'>
            <h1 className='mb-3'>Q-Zone</h1>
            <img src={qzone1} alt="" />
            <img src={qzone2} alt="" />
            <img src={qzone3} alt="" />
        </div>
    );
};

export default QZone;