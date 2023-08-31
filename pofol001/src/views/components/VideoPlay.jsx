import React from 'react';

function VideoPlayer() {
  return (
    <div className="video-container">
      <video width="100%" height="auto" autoPlay muted loop>
        <source src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/video-tv-0819.m4v" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
  );
}

export default VideoPlayer;
