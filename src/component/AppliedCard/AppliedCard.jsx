import React from 'react';
import './AppliedCard.css'

const AppliedCard = ({ newJob }) => {

    const { logo, title, company_name, location, salary ,remote,time} = newJob;

    // console.log(newJobs);


    return (
        <div className='newjob'>


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
                        <img className='logoSize' src="/assets/loc.png" alt="" />
                        <p> {location}</p>
                    </div>

                    <div className='commonFlex'>
                        <img className='logoSize' src="/assets/dollar.png" alt="" />
                        <p> {salary}</p>
                    </div>
                </div>
                <button className='all-Btn'>View Details</button>
            </div>



        </div>
    );
};

export default AppliedCard;