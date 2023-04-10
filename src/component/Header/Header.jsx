import React from 'react';
import './Header.css'

const Header = () => {
    return (
        <div className='headerContainer'>
            <div >

                <h1>Find your next flexible <span className='stromColor'>Dream Job</span></h1>
                <p className='paragraph'>Explore thousands of job opportunities with all the information you need. Its your future. Come find it. Manage all your job application from start to finish.</p>
                <button className='all-Btn'>Get Started</button>

            </div>

            <img src="/src/assets/image2.jpg" alt="" />

        </div>
    );
};

export default Header;