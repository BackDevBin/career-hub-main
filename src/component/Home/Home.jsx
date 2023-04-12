import React, { useEffect, useState } from 'react';
import Header from '../Header/Header';
import Catagories from '../Catagories/Catagories';
import FeaturedJobs from '../FeaturedJobs/FeaturedJobs';
import { useLoaderData } from 'react-router-dom';

const Home = () => {

    const companies = useLoaderData();

    let fourCompanies = companies.slice(0,4);

    const [company , setCompanies] = useState(fourCompanies);

    const seeAllBtn = () => {
        setCompanies(companies);
    }
    


    return (
        <div className='homeBody'>
            <Header></Header>
            <Catagories></Catagories>
            <FeaturedJobs companies={company}
            seeAllBtn ={seeAllBtn}
            ></FeaturedJobs>
            
        </div>
    );
};

export default Home;