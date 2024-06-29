import React from 'react';
import '../styles/Home.css'; // Import CSS for styling
import Banner from '../components/Banner';
import FurnitureRange from '../components/FurnitureRange';
import VideoPlayer from '../components/VideoPlayer';
import StoreCards from '../components/StoreCards';
import CustomerStories from '../components/CustomerStories';

// Import banner images
import banner1 from '../assets/banner1.jpg';
import banner2 from '../assets/banner2.jpg';
import banner3 from '../assets/banner3.jpg';
import banner4 from '../assets/banner4.jpg';
import banner5 from '../assets/banner5.jpg';

const Home = () => {

  const banners = [
    { image: banner1 },
    { image: banner2 },
    { image: banner3 },
    { image: banner4 },
    { image: banner5 }
  ];

  const videoUrl = "https://youtu.be/EDnvDZ-0990?si=-yEG9DNikAjhD6MI";

  return (
    <div className="home">
      <Banner banners={banners} />
      <FurnitureRange />
      <VideoPlayer videoUrl={videoUrl} />
      <StoreCards />
      <CustomerStories />
    </div>
  );
};

export default Home;
