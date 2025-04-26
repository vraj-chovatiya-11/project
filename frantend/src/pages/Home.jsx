import React from 'react';
import Hero from '../components/Hero';

import LatestCollaction from '../components/LatestCollaction';
import Bestseller from '../components/Bestseller';
import OverPolicy from '../components/OverPolicy';
import Newsletterbox from '../components/Newsletterbox';








const Home = () => {
  return (
    <div>

   <Hero/> 

   <LatestCollaction />
   <Bestseller/>
   <OverPolicy/>
   <Newsletterbox/>




    </div>
  )
}

export default Home
