import React, { useEffect, useState } from 'react';
import './AppliedJob.css'
import { getShoppingCart } from '../../utilities/fakedb';
import { useLoaderData } from 'react-router-dom';

const AppliedJob = () => {

    const [jobs, setJobs] = useState([]);


    // const allJobs = useLoaderData(); 

    useEffect(() => {
        fetch('FeaturedData.json')
            .then(res => res.json())
            .then(data => setJobs(data))
    }, []);

    // console.log(jobs)

    

    useEffect( () =>{
        const storeId = getShoppingCart();

        for(const id in storeId){
            

            const saveJob = jobs.find(job => job.id === id);
            console.log(saveJob)
            
        }
       
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



        </div>
    );
};

export default AppliedJob;