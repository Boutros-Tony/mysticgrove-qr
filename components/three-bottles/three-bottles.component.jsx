import React, { useEffect, useRef } from 'react';


const ThreeBottles = () => {
  const stickyRef = useRef(null);
  const stickyParentRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      const sticky = stickyRef.current;
      const scrollWidth = sticky.scrollWidth - window.innerWidth;
      const stickyParent = stickyParentRef.current;
      const verticalScrollHeight = stickyParent.offsetHeight - window.innerHeight;

      let stickyPosition = sticky.getBoundingClientRect().top;
      if (stickyPosition <= 0) {
        let scrolled = window.pageYOffset - stickyParent.offsetTop;
        let horizontalScroll = (scrolled / verticalScrollHeight) * scrollWidth;
        sticky.scrollLeft = horizontalScroll;
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div>
      <div style={{ height: '100vh', width: '100vw' }}>
        <p> Scroll </p>
      </div>

      <div className="sticky-parent" ref={stickyParentRef}>
        <div className="sticky" ref={stickyRef}>
          <img src="/path/to/your/image.jpg" alt="Large Image" />
        </div>
      </div>

      <div style={{ height: '100vh', width: '100vw' }}></div>
    </div>
  );
};

export default ThreeBottles;
