import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../styles/CustomerStories.css';

import cs1 from '../assets/cs1.jpg';
import cs2 from '../assets/cs2.jpg';
import cs3 from '../assets/cs3.jpg';
import cs4 from '../assets/cs4.jpg';
import cs5 from '../assets/cs5.jpg';
import cs6 from '../assets/cs6.jpg';
import cs7 from '../assets/cs7.jpg';
import cs8 from '../assets/cs8.jpg';
import cs9 from '../assets/cs9.jpg';
import cs10 from '../assets/cs10.jpg';
import cs11 from '../assets/cs11.jpg';
import cs12 from '../assets/cs12.jpg';

import image1 from '../assets/image1.jpg';
import image2 from '../assets/image2.jpg';
import image3 from '../assets/image3.jpg';
import image4 from '../assets/image4.jpg';
import image5 from '../assets/image5.jpg';
import image6 from '../assets/image6.jpg';
import image7 from '../assets/image7.jpg';
import image8 from '../assets/image8.jpg';
import image9 from '../assets/image9.jpg';
import image10 from '../assets/image10.jpg';
import image11 from '../assets/image11.jpg';
import image12 from '../assets/image12.jpg';

const CustomerStories = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const stories = [
    {
      name: 'Ravi Sharma',
      role: 'Software Engineer',
      quote: 'I recently bought furniture from Urban Ladder. The quality is outstanding!',
      imgSrc: image1,
      productImgSrc: cs1,
    },
    {
      name: 'Priya Patel',
      role: 'Interior Designer',
      quote: 'Urban Ladder has a great range of furniture. Perfect for every home!',
      imgSrc: image2,
      productImgSrc: cs2,
    },
    {
      name: 'Amit Singh',
      role: 'Business Analyst',
      quote: 'The service at Urban Ladder is top-notch. I\'m impressed with their attention to detail.',
      imgSrc: image3,
      productImgSrc: cs3,
    },
    {
      name: 'Pooja Gupta',
      role: 'Fashion Designer',
      quote: 'I love the modern designs at Urban Ladder. It adds a unique touch to my living room.',
      imgSrc: image4,
      productImgSrc: cs4,
    },
    {
      name: 'Vikram Joshi',
      role: 'Marketing Executive',
      quote: 'Urban Ladder furniture is not only stylish but also very comfortable. Highly recommended!',
      imgSrc: image5,
      productImgSrc: cs5,
    },
    {
      name: 'Ananya Reddy',
      role: 'Architect',
      quote: 'The craftsmanship of Urban Ladder furniture is excellent. It exceeded my expectations.',
      imgSrc: image6,
      productImgSrc: cs6,
    },
    {
      name: 'Rahul Mehra',
      role: 'Product Manager',
      quote: 'I am a repeat customer at Urban Ladder. Their products never disappoint!',
      imgSrc: image7,
      productImgSrc: cs7,
    },
    {
      name: 'Sneha Desai',
      role: 'Graphic Designer',
      quote: 'I furnished my entire home with Urban Ladder. It\'s a one-stop-shop for all my furniture needs.',
      imgSrc: image8,
      productImgSrc: cs8,
    },
    {
      name: 'Nikhil Jain',
      role: 'Software Developer',
      quote: 'Urban Ladder has a great collection of furniture. I love their customer service too!',
      imgSrc: image9,
      productImgSrc: cs9,
    },
    {
      name: 'Shreya Patel',
      role: 'Interior Decorator',
      quote: 'The quality of Urban Ladder furniture is exceptional. I highly recommend it to my clients.',
      imgSrc: image10,
      productImgSrc: cs10,
    },
    {
      name: 'Rohan Shah',
      role: 'Business Owner',
      quote: 'Urban Ladder furniture is not only stylish but also durable. It\'s a great investment for any home.',
      imgSrc: image11,
      productImgSrc: cs11,
    },
    {
      name: 'Isha Gupta',
      role: 'Fashion Blogger',
      quote: 'I love the variety of furniture at Urban Ladder. It\'s a perfect blend of style and comfort.',
      imgSrc: image12,
      productImgSrc: cs12,
    },
  ];

  const storiesPerPage = 3; 

  const handlePrev = () => {
    setCurrentIndex(prevIndex => {
      const newIndex = prevIndex - storiesPerPage;
      return newIndex < 0 ? stories.length - storiesPerPage : newIndex;
    });
  };

  const handleNext = () => {
    setCurrentIndex(prevIndex => (prevIndex + storiesPerPage) % stories.length);
  };

  

  return (
    <div className="customer-stories">
      <h2>Customer Stories</h2>
      <div className="story-container">
        <button className="prev-btn" onClick={handlePrev}>
          &lt;
        </button>
        {stories
          .slice(currentIndex, currentIndex + storiesPerPage)
          .map((story, index) => (
            <div className="story-card" key={index}>
                <img src={story.imgSrc} alt={story.name} className="profile-image"/>
              <div className="profile-details">
                <h3>{story.name}</h3>
                <p>{story.role}</p>
                </div>
                <div className="product-image">
                <img src={story.productImgSrc} alt="Product"  />
                <div className="button-container">
                 <Link to={'/all-products'}> 
                 <button className="view-product-btn" >
                    View Product
                  </button>
                  </Link>
                </div>
                <p className="story-quote">{story.quote}</p>
              </div>
            </div>
          ))}
        <button className="next-btn" onClick={handleNext}>
          &gt;
        </button>
      </div>
    </div>
  );
};

export default CustomerStories;
