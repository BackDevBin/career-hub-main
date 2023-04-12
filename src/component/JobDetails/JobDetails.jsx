import React, { useContext } from 'react';
import './JobDetails.css'
import { useLoaderData } from 'react-router-dom';
import { IdText } from '../../App';

const JobDetails = () => {

    const companyData = useLoaderData();

    const companyId = useContext(IdText);



    const jobs = companyData.find(job => job.id === companyId)

    const { description, responsibility, requirements, Experiences,salary,title,location,email,contact} = jobs;

    return (
        <div>

            <div className='matchingNav'>
                <h3 className='title'>Job Details</h3>
            </div>

            <div className='jobDetailsContainer'>

                <div>
                    <p><span className='DesTitle'>Job Description:</span> {description}</p>
                    <p><span className='DesTitle'>Job Responsibility:</span> {responsibility}</p>
                    <h4 className='DesTitle'>Educational Requirements:</h4>
                    <p>{requirements}</p>
                    <h4 className='DesTitle'>Experiences:</h4>
                    <p>{Experiences}</p>

                </div>

                <div>
                    <div className='contactContainer'>
                    <h3 className='conTitle'>Job Details</h3>
                    <div className='commonFlex'>
                        <img className='logoSize' src="/src/assets/dollar.png" alt="" />
                        <p><span className='DesTitle'>Salary:</span> {salary} (Per Month)</p>
                    </div>
                    <div className='commonFlex'>
                        <img className='logoSize' src="/src/assets/job.png" alt="" />
                    <p><span className='DesTitle'>Job Title:</span> {title}</p>
                    </div>
                    <h3 className='conTitle'>Contact Information</h3>
                    <div className='commonFlex'>
                        <img className='logoSize' src="/src/assets/phn.png" alt="" />
                    <p><span className='DesTitle'>Phone:</span> {contact}</p>
                    </div>
                    <div className='commonFlex'>
                        <img className='logoSize' src="/src/assets/email.png" alt="" />
                    <p><span className='DesTitle'>Email:</span> {email}</p>
                    </div>
                    
                    <div className='commonFlex'>
                        <img className='logoSize' src="/src/assets/loc.png" alt="" />
                    <p><span className='DesTitle'>Address:</span> {location}</p>
                    </div>

                    </div>

                    <div className='secondCol'>
                    <button className='all-Btn'>Apply Now</button>
                    </div>
                    
                </div>



            </div>

        </div>
    );
};

export default JobDetails;