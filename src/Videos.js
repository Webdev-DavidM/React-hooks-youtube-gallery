import React, { Fragment } from 'react';
import Video from './Video';

export default function Videos({ videoData, play }) {
  let video = videoData;
  if (videoData.length > 1) {
    video = videoData.map((video, index) => {
      return (
        <Video
          key={index}
          id={index}
          onClick={() => play(index)}
          title={video.snippet.title}
          img={video.snippet.thumbnails.standard.url}
        />
      );
    });
  } else {
    video = null;
  }

  return <Fragment>{video}</Fragment>;
}
