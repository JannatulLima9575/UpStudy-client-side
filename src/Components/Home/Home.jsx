import React from 'react';
import Banner from '../Outlet/Banner';
import TopContributors from '../topContributors/topContributors';
import PopularTopics from '../PopularTopics/PopularTopics';
import FeaturedArticles from '../Outlet/FeaturedArticles';

const Home = () => {

  const articlesPromise = fetch('http://localhost:3000/articles').then(res => res.json())
  
  return (
    <div>
      <Banner/>
      <FeaturedArticles articlesPromise={articlesPromise}/>
      <TopContributors/>
      <PopularTopics/>
    </div>
  );
};

export default Home;