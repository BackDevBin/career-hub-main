import React from 'react';
import './CatagoryCard.css'

const CatagoryCard = ({job}) => {
    return (
        <div className='card-info'>
            <img src={job.category_logo} alt="" />
            <h4>{job.category_name}</h4>
            <p className='paragraph'>{job.jobs_available}+ Jobs Available</p>
        </div>
    );
};

export default CatagoryCard;