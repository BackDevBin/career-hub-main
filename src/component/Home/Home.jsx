import React from 'react';
import Header from '../Header/Header';
import Catagories from '../Catagories/Catagories';
import FeaturedJobs from '../FeaturedJobs/FeaturedJobs';
import { useLoaderData } from 'react-router-dom';

const Home = () => {

    const companies = useLoaderData();


    return (
        <div>
            <Header></Header>
            <Catagories></Catagories>
            <FeaturedJobs companies={companies}></FeaturedJobs>
            
        </div>
    );
};

export default Home;