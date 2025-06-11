import React from 'react';
import Banner from '../Outlet/Banner';
import TopContributors from '../topContributors/topContributors';
import PopularTopics from '../PopularTopics/PopularTopics';

const Home = () => {
  return (
    <div>
      <Banner/>
      <TopContributors/>
      <PopularTopics/>
    </div>
  );
};

export default Home;