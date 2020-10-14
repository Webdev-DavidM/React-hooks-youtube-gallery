import React from 'react';

export default function Video({ onClick, img, title, id }) {
  return (
    <>
      <div className="video" onClick={() => onClick(id)}>
        <img src={img} alt="" />
        <h4>{title}</h4>
      </div>
    </>
  );
}
