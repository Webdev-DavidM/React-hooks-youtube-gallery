import React, { useState, useEffect } from 'react';
import Player from 'react-youtube';
import Videos from './Videos';
import './App.css';
import { apiKey } from './config/apiKey.js';
import ModalBackGround from './ModalBackGround';

function App() {
  const [playlistVideos, setPaylistVideos] = useState({});
  const [currentVideo, setCurrentVideo] = useState('');
  const [player, setPlayer] = useState({});
  const [showModal, setModal] = useState(false);

  const closeModal = () => {
    setModal(false);
  };

  // this function below will give me access to the player wihtin state which I can use to play the video

  const playVideo = (index) => {
    let videoId = playlistVideos[index].contentDetails.videoId;
    setCurrentVideo(videoId);
    setModal(true);
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
    <div>
      {showModal && (
        <ModalBackGround videoId={currentVideo} closeModal={closeModal} />
      )}
      <div className="App">
        <div className="flex-container">
          <Videos videoData={playlistVideos} play={playVideo} />
        </div>
      </div>
    </div>
  );
}

export default App;
