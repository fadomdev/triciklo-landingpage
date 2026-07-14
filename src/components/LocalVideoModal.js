import React, { useEffect, useRef } from 'react';
import ReactDOM from 'react-dom';

const LocalVideoModal = ({ isOpen, onClose, videoSrc, startTime = 0, muted = false }) => {
  const videoRef = useRef(null);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };

    if (isOpen) {
      window.addEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'hidden';
    }

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = '';
    };
  }, [isOpen, onClose]);

  const handleLoadedMetadata = () => {
    if (videoRef.current && startTime > 0) {
      videoRef.current.currentTime = startTime;
    }
  };

  if (!isOpen) return null;

  const handleOverlayClick = (e) => {
    // Only close if clicking on the backdrop/outer wrapper (modal-video or modal-video-inner)
    if (
      e.target.classList.contains('modal-video') ||
      e.target.classList.contains('modal-video-inner')
    ) {
      onClose();
    }
  };

  // Append media fragment #t=seconds if startTime is provided so the browser native player plays from there
  const formattedSrc = startTime > 0 ? `${videoSrc}#t=${startTime}` : videoSrc;

  return ReactDOM.createPortal(
    <div
      className="modal-video"
      role="dialog"
      aria-label="Video player modal"
      tabIndex="-1"
      onClick={handleOverlayClick}
    >
      <div className="modal-video-body">
        <div className="modal-video-inner">
          <div className="modal-video-movie-wrap">
            <button
              className="modal-video-close-btn"
              aria-label="Close modal"
              onClick={onClose}
            />
            <video
              ref={videoRef}
              src={formattedSrc}
              controls
              autoPlay
              playsInline
              muted={muted}
              onLoadedMetadata={handleLoadedMetadata}
              style={{
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                backgroundColor: '#000',
              }}
            />
          </div>
        </div>
      </div>
    </div>,
    document.body
  );
};

export default LocalVideoModal;
