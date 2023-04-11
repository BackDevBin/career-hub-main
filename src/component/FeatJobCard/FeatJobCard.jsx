import React from 'react';
import './FeatJobCard.css'

const FeatJobCard = ({company}) => {

    const {company_name,location,time,remote,title,logo,salary} = company;

    return (
        <div>
            <img src={logo} alt="" />
            <h3>{title}</h3>
            <p>{company_name}</p>
            <p>{time}</p>
            <p>{remote}</p>
        </div>
    );
};

export default FeatJobCard;