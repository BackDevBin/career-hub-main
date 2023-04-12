import React from 'react';
import './FeaturedJobs.css'
import FeatJobCard from '../FeatJobCard/FeatJobCard';

const FeaturedJobs = ({companies, seeAllBtn}) => {
    return (
        <div className='featureBody'>
            <div className='title-container'>
                <h3 className='title'>Featured Jobs</h3>
                <p className='paragraph'>Explore thousands of job opportunities with all the information you need. Its your future</p>
            </div>
            
            <div className='featContainer'>
            {
                companies.map(company => <FeatJobCard key ={company.id} company ={company}></FeatJobCard>)
            }
            </div>

            <div className='btn-holder'>
            <button onClick={seeAllBtn} className='all-Btn'>See All Jobs</button>
            </div>
        </div>
    );
};

export default FeaturedJobs;