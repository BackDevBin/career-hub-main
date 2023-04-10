import React from 'react';
import './Header.css'

const Header = () => {
    return (
        <nav>
            <div className='nav-container'>

                <h2>Job<span className='stromColor'>Strom</span></h2>

                <div className='link-container'>
                    <a>Home</a>
                    <a>Statistics</a>
                    <a>Applied Jobs</a>
                    <a>Blog</a>
                </div>

                <button className='all-Btn'>Start Appling </button>

            </div>
        </nav>
    );
};

export default Header;