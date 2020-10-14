import React from 'react';
import Player from 'react-youtube';

export default function ModalWindow(props) {
  const playVideo = (e) => {
    e.target.playVideo();
  };

  const opts = {
    height: '100%',
    width: '100%',
    playerVars: {
      autoplay: 1,
    },
  };

  return (
    <div className="modal">
      <Player
        videoId={props.videoId}
        opts={opts}
        onReady={(e) => playVideo(e)}
      />
    </div>
  );
}
