import React, { useRef, useEffect, useState } from 'react';
import YouTube from 'react-youtube';
import useIntersectionObserver from 'components/intersection/intersection.component';
import styles from './video-component.module.scss';

const VideoComponent = ({ videoId ,width}) => {
  const videoWrapperRef = useRef(null); // Ref for the wrapper element
  const [player, setPlayer] = useState(null); // State to hold the YouTube player instance
  const [isMuted, setIsMuted] = useState(true);
  const isVisible = useIntersectionObserver(videoWrapperRef, {
    rootMargin: '0px',
    threshold: 0.5
  });

  useEffect(() => {
    if (!player) return;

    const handleVisibilityChange = async () => {
      if (isVisible) {
        await player.playVideo();
      } else {
        await player.pauseVideo();
      }
    };

    handleVisibilityChange();
  }, [player, isVisible]);

  useEffect(() => {
    if (!player) return;

    const handleMuteToggle = async () => {
      if (isMuted) {
        await player.mute();
      } else {
        await player.unMute();
      }
    };

    handleMuteToggle();
  }, [player, isMuted]); // Separate effect for mute toggle to avoid video restart

  const toggleMute = () => {
    setIsMuted(!isMuted);
  };

  const opts = {
    height: '100%',
    width: '100%',
    playerVars: {
      autoplay: 1, // Enable auto-play
      controls: 0, // Hide pause/play buttons in player
      loop: 1, // Loop the video
      modestbranding:"1",
   
      playlist: videoId, // In case of loop, the video to play
      // Removed mute from playerVars to manage it separately
    },
  };

  return (
    <div className={styles.videoHolder} ref={videoWrapperRef}>
      <YouTube videoId={videoId} opts={opts}  onReady={e => setPlayer(e.target)} />
      <button onClick={toggleMute}>
        {isMuted ? <img src='/assets/unmute.png'/> : <img src='/assets/mute.png'/>}
      </button>
    </div>
  );
};

export default VideoComponent;
