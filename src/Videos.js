import React, { Fragment } from 'react';

export default function Videos({ videoData, play }) {
  let video = videoData;
  if (videoData.length > 1) {
    video = videoData.map((video, index) => {
      return (
        <>
          <div key={index} className="video" onClick={() => play(index)}>
            <img src={video.snippet.thumbnails.standard.url} alt="" />
            <h4>{video.snippet.title}</h4>
          </div>
        </>
      );
    });
  } else {
    video = null;
  }

  return <Fragment>{video}</Fragment>;
}
