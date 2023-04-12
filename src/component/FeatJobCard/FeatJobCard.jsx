import React, { useContext } from 'react';
import './FeatJobCard.css'
import { Link } from 'react-router-dom';
import { ViewDetails } from '../../App';




const FeatJobCard = ({ company }) => {

    const { company_name, location, time, remote, title, logo, salary, id } = company;

    const viewDetailsBtn = useContext(ViewDetails);



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

                <div className='commonFlex'>
                    <img className='logoSize' src="/src/assets/loc.png" alt="" />
                    <p> {location}</p>
                </div>

                <div className='commonFlex'>
                    <img className='logoSize' src="/src/assets/dollar.png" alt="" />
                    <p> {salary}</p>
                </div>
            </div>

            <Link to={`/job/${id}`}><button onClick={() => viewDetailsBtn(id)} className='all-Btn'>View Details</button></Link>
        </div>
    );
};

export default FeatJobCard;