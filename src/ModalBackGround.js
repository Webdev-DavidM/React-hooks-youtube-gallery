import React from 'react';

import ModalWindow from './ModalWindow';

export default function ModalBackGround(props) {
  return (
    <div className="modal-background" onClick={props.closeModal}>
      <ModalWindow videoId={props.videoId} onReady={props.onReady} />
    </div>
  );
}
