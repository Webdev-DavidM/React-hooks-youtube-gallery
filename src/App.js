import React, { useState, useEffect } from 'react';
import Player from 'react-youtube';
import Videos from './Videos';
import './App.css';
import { apiKey } from './config/apiKey.js';

function App() {
  const [playlistVideos, setPaylistVideos] = useState({});
  const [currentVideo, setCurrentVideo] = useState('S8yn3-WpVV8');
  const [player, setPlayer] = useState({});
  // These are the options for the youtube player
  const opts = {
    height: '90%',
    width: '90%',
    playerVars: {
      // https://developers.google.com/youtube/player_parameters
      autoplay: 1,
    },
  };

  // this function below will give me access to the player wihtin state which I can use to play the video

  const addPlayerToState = (e) => {
    setPlayer(e.target);
  };

  const playVideo = async (index) => {
    let videoId = playlistVideos[index].contentDetails.videoId;
    await setCurrentVideo(videoId);
    player.playVideo();
  };

  // Here I am making the call to my youtube playlist to get the information //
  useEffect(() => {
    const fetchData = async () => {
      try {
        let response = await fetch(
          `https://www.googleapis.com/youtube/v3/playlistItems?part=snippet%2CcontentDetails&maxResults=25&autoplay=1&playlistId=PLjaGDYrvE9VwKidNDZwcaxzLOjKfD9CjC&key=${apiKey}`
        );
        response = await response.json();

        setPaylistVideos(response.items);
      } catch (error) {
        console.log(error.error.errors.message);
      }
    };
    fetchData();
  }, []);

  return (
    <div className="App">
      <div className="flex-container">
        <Player
          className="myMoviePlayer"
          videoId={currentVideo}
          opts={opts}
          onReady={addPlayerToState}
        />

        <Videos videoData={playlistVideos} play={playVideo} />
      </div>
    </div>
  );
}

export default App;
