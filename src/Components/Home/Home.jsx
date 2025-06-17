import React from 'react';
import Banner from '../Outlet/Banner';
import TopContributors from '../topContributors/topContributors';
import PopularTopics from '../PopularTopics/PopularTopics';
import FeaturedArticles from '../Outlet/FeaturedArticles';
import CategoriesList from '../Outlet/CategoriesList';
import CategoryArticles from '../Outlet/CategoryArticles';

const Home = () => {

  const articlesPromise = fetch('https://up-study-server-side.vercel.app/articles').then(res => res.json())
  
  return (
    <div>
      <Banner/>
      <FeaturedArticles articlesPromise={articlesPromise}/>
      <CategoriesList/>
      <TopContributors/>
      <PopularTopics/>
    </div>
  );
};

export default Home;