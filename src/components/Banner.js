import React from 'react';
import '../styles/Banner.css';

function Banner({ banners }) {
  const [currentBanner, setCurrentBanner] = React.useState(0);

  React.useEffect(() => {
    if (banners && banners.length > 0) {
      const timer = setInterval(() => {
        setCurrentBanner((prev) => (prev + 1) % banners.length);
      }, 3000);
      return () => clearInterval(timer);
    }
  }, [banners]);

  if (!banners || banners.length === 0) {
    return null;
  }

  const handleNext = () => {
    setCurrentBanner((prev) => (prev + 1) % banners.length);
  };

  const handlePrev = () => {
    setCurrentBanner((prev) => (prev - 1 + banners.length) % banners.length);
  };

  return (
    <div className="banner">
      <img src={banners[currentBanner].image} alt={banners[currentBanner].title} />
      <div className="banner-info">
        <h3>{banners[currentBanner].title}</h3>
        <p>{banners[currentBanner].description}</p>
      </div>
      <button className="banner-button prev-button" onClick={handlePrev}>❮</button>
      <button className="banner-button next-button" onClick={handleNext}>❯</button>
    </div>
  );
}

export default Banner;