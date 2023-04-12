import React from 'react';
import './FeatJobCard.css'
import { Link } from 'react-router-dom';

const FeatJobCard = ({ company }) => {

    const { company_name, location, time, remote, title, logo, salary,id } = company;



    return (
        <div className='featCard'>
            <img className='cardLogo' src={logo} alt="" />
            <h3>{title}</h3>
            <p>{company_name}</p>
            <div className='timeblock'>
                <p>{time}</p>
                <p>{remote}</p>
            </div>

            <div className='locationBlock'>
                <p> <img src="/src/assets/Frame-4.png" alt="" /> {location}</p>
                <p><img src="/src/assets/Frame.png" alt="" /> {salary}</p>
            </div>

            <Link to="/job"><button className='all-Btn'>View Details</button></Link>
        </div>
    );
};

export default FeatJobCard;