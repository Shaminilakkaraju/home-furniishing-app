import React from 'react';
import ReactPlayer from 'react-player';
import '../styles/VideoPlayer.css'; 

const VideoPlayer = ({ videoUrl }) => {
  if (!videoUrl) {
    return null; 
  }

  return (
    <div className="video-player-container">
      <ReactPlayer
        className="react-player"
        url={videoUrl}
        controls={true}
        width="100%"
        height="100%" 
        onError={(e) => console.log('Error loading video:', e)}
      />
    </div>
  );
};

export default VideoPlayer;
