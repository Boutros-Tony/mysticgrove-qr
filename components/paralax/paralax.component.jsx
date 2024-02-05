import React, { useEffect, useState, useRef } from "react";
import { motion, useViewportScroll, useTransform } from "framer-motion";

const HorizontalScroll = () => {
  const [extraHeight, setExtraHeight] = useState(0);
  const [borderWidth, setBorderWidth] = useState(25); // Initial border width
  const imageRef = useRef(null);
  const stickyRef = useRef(null); // Ref for the sticky div
  const { scrollY } = useViewportScroll();
  useEffect(() => {
    const handleResize = () => {
      if (imageRef.current) {
        const viewportWidth = window.innerWidth;
        const renderedImageWidth = imageRef.current.clientWidth;
        const scrollableWidth = renderedImageWidth > viewportWidth ? renderedImageWidth - viewportWidth : 0;
        setExtraHeight(scrollableWidth);
      }
    };
  
    window.addEventListener('load', handleResize); // Ensure this runs after everything has loaded
    window.addEventListener('resize', handleResize); // Adjust for window resize
    handleResize(); // Initial call
  
    return () => {
      window.removeEventListener('load', handleResize);
      window.removeEventListener('resize', handleResize);
    };
  }, []);
  

  useEffect(() => {
    const updateBorderWidth = () => {
      const viewportHeight = window.innerHeight;
      const currentScrollY = window.scrollY;
      const stickyTop = stickyRef.current ? stickyRef.current.offsetTop : 0;
  
      // Calculate the start point for decreasing based on the desired viewport percentage
      const decreaseStartPercentage = 0.5; // Start at 30% of the viewport, change to 0.5 for 50%
      const startDecreasePoint = stickyTop - (viewportHeight * (1 - decreaseStartPercentage));
  
      // Calculate the end point where the border should be fully minimized
      const endDecreasePoint = stickyTop;
  
      // Ensure the decrease starts smoothly from the calculated point
      if (currentScrollY > startDecreasePoint) {
        // Map the scroll range to border width range
        const progress = Math.min((currentScrollY - startDecreasePoint) / (endDecreasePoint - startDecreasePoint), 1);
        // Smooth transition with linear interpolation
        const newBorderWidth = 55 * (1 - progress); // Linearly interpolate border width
  
        setBorderWidth(Math.max(newBorderWidth, 0)); // Ensure border width doesn't go negative
      }
    };
  
    window.addEventListener('scroll', updateBorderWidth);
    updateBorderWidth(); // Initial call
  
    return () => {
      window.removeEventListener('scroll', updateBorderWidth);
    };
  }, []);
  
  

  const stickyStart = stickyRef.current ? stickyRef.current.offsetTop - 5 : 0; // 5px before sticky
  const x = useTransform(scrollY, [stickyStart, stickyStart + extraHeight], ['0px', `-${extraHeight}px`]);

  return (
    <div style={{ height: `calc(100vh + ${extraHeight}px)`}}>
      <div
        ref={stickyRef}
        style={{
          position: 'sticky',
          top: 0,
          height: '100vh',
          overflow: 'hidden',
          width: '100vw',
          borderLeft: `${borderWidth}px solid #F6AB6D`, // Dynamic border width
          borderRight: `${borderWidth}px solid #F6AB6D`, // Dynamic border width
        }}
      >
        <motion.img
          ref={imageRef}
          src="/assets/web-banner1.jpg"
          alt="Large Image"
          style={{
            width: 'auto',
            height: '100%',
            x,
          }}
        />
      </div>
    </div>
  );
};

export default HorizontalScroll;
