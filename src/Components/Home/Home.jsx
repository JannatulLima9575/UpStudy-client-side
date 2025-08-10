import React from 'react';
import Banner from '../Outlet/Banner';
import TopContributors from '../topContributors/topContributors';
import PopularTopics from '../PopularTopics/PopularTopics';
import FeaturedArticles from '../Outlet/FeaturedArticles';
import CategoriesList from '../Outlet/CategoriesList';
import EventsSection from '../Outlet/EventsSection';
import Testimonials from '../Outlet/Testimonials';

const Home = () => {
  const articlesPromise = fetch('https://up-study-server-side.vercel.app/api/articles').then(res => res.json())
  
  return (
    <div>
      <Banner/>
      <FeaturedArticles articlesPromise={articlesPromise}/>
      <CategoriesList/>
      <TopContributors/>
      <PopularTopics/>
      <Testimonials/>
      <EventsSection/>
    </div>
  );
};

export default Home;