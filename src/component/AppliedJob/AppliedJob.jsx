import React, { useEffect, useState } from 'react';
import './AppliedJob.css'
import { getShoppingCart } from '../../utilities/fakedb';
import { useLoaderData } from 'react-router-dom';
import AppliedCard from '../AppliedCard/AppliedCard';

const AppliedJob = () => {

    const [jobs, setJobs] = useState([]);


    // const allJobs = useLoaderData(); 

    useEffect(() => {
        fetch('FeaturedData.json')
            .then(res => res.json())
            .then(data => setJobs(data))
    }, []);

    const [newJobs, setNewJobs] = useState([]);

    useEffect( () =>{

        const storeId = getShoppingCart();

        const savedCart = [];

        for(const id in storeId){

           const saveJob = jobs.find(job => job.id == id);
           if (saveJob) {

            savedCart.push(saveJob);
        }
        }
        
        setNewJobs(savedCart);
    },[jobs])

    

    


    return (
        <div>
            <div className='matchingNav'>
            <h3 className='title'>Applied Jobs</h3>
           </div>

           <div>
            <button className='filterBtn'>Remote</button>
            <button className='filterBtn'>Onsite</button>

           </div>

           <div>
            
           {
            newJobs.map(newJob => <AppliedCard newJob={newJob}></AppliedCard>)
           }
        
           </div>



        </div>
    );
};

export default AppliedJob;