import YouTube from 'react-youtube';
import { useState } from 'react';

const VideoPlayer = ({ videoId }) => {
  function onPlayerReady(event) {
    event.target.playVideo();
  }

  const opts = {
    height: '500',
    width: '100%',
    playerVars: {
      // https://developers.google.com/youtube/player_parameters
      autoplay: 0, // Set to 1 for autoplay
    },
  };

  return (
    <div>
      <YouTube videoId={videoId} opts={opts} onReady={onPlayerReady} />
    </div>
  );
};

export default VideoPlayer;
