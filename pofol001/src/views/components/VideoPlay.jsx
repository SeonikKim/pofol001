import React from 'react';

function VideoPlayer({ src }) {
  return (
    <div className="video-container">
      <video width="100%" height="auto" autoPlay muted loop>
        <source src={src} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
  );
}

export default VideoPlayer;