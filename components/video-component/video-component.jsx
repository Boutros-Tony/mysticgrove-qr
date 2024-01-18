import React, { useRef, useEffect, useState } from 'react';
import useIntersectionObserver from 'components/intersection/intersection.component';
import styles from './video-component.module.scss';
const VideoComponent = ({ src }) => {
  const videoRef = useRef(null);
  const [isMuted, setIsMuted] = useState(true); // State to manage mute status
  const isVisible = useIntersectionObserver(videoRef, {
    rootMargin: '0px',
    threshold: 0.5 // Adjust according to when you want the video to play
  });

  useEffect(() => {
    if (isVisible) {
      videoRef.current.play();
    } else {
      videoRef.current.pause();
    }
  }, [isVisible]);

  // Function to toggle mute status
  const toggleMute = () => {
    setIsMuted(!isMuted);
  };

  return (
    <div className={styles.videoHolder}>
      <video playsInline ref={videoRef}  loop muted={isMuted}>
        <source src={src} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <button onClick={toggleMute}>{isMuted ? <img src='/assets/unmute.png'/> : <img src='/assets/mute.png'/>}</button>
    </div>
  );
};

export default VideoComponent;
