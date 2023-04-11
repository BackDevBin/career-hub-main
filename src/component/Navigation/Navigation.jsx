import React from 'react';
import './Navigation.css'
import { Link } from 'react-router-dom';

const Navigation = () => {
    return (
        <nav>
            <div className='nav-container'>

                <h2>Job<span className='stromColor'>Strom</span></h2>

                <div className='link-container'>
                    <Link to="/">Home</Link>
                    <Link to="/Statistics">Statistics</Link>
                    <Link to="/a">Applied Jobs</Link>
                    <Link to="/blog">Blog</Link>
                </div>

                <button className='all-Btn'>Start Appling </button>

            </div>
        </nav>
    );
};

export default Navigation;