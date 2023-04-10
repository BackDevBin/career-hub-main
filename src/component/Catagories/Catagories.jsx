import React, { useEffect, useState } from 'react';
import './Catagories.css'
import CatagoryCard from '../CatagoryCard/CatagoryCard';

const Catagories = () => {

    const [jobs ,setJobs] =useState([]);

    useEffect(() =>{
        fetch('JobCatagory.json')
        .then(res =>res.json())
        .then(data =>setJobs(data))
    },[])

    return (
        <div>
            <div className='title-container'>
                <h3 className='title'>Job Category List</h3>
                <p className='paragraph'>Explore thousands of job opportunities with all the information you need. Its your future</p>
            </div>
            <div className='card-container'>
                {
                    jobs.map(job => <CatagoryCard job={job} key={job.id}></CatagoryCard>)
                }

            </div>
        </div>
    );
};

export default Catagories;