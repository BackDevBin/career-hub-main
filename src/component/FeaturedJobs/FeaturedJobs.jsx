import React from 'react';
import './FeaturedJobs.css'
import FeatJobCard from '../FeatJobCard/FeatJobCard';

const FeaturedJobs = ({companies}) => {
    return (
        <div>
            <div className='title-container'>
                <h3 className='title'>Featured Jobs</h3>
                <p className='paragraph'>Explore thousands of job opportunities with all the information you need. Its your future</p>
            </div>
            {
                companies.map(company => <FeatJobCard key ={company.id} company ={company}></FeatJobCard>)

            }
            <button className='all-Btn'>See All Jobs</button>
        </div>
    );
};

export default FeaturedJobs;