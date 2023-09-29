// ScrollAnimation.js
import React, { useRef } from 'react';
import './ScrollAnimation.css';

const ScrollAnimation = () => {
  const animationRef = useRef(null);

  // Intersection Observer callback function
  const handleIntersection = (entries) => {
    const entry = entries[0];
    if (entry.isIntersecting) {
      animationRef.current.classList.add('animate-slide-in');
    } else {
      animationRef.current.classList.remove('animate-slide-in');
    }
  };

  // Create an Intersection Observer
  const observer = new IntersectionObserver(handleIntersection, {
    root: null, // Use the viewport as the root
    rootMargin: '0px', // No margin
    threshold: 0.5, // Trigger when 50% of the element is visible
  });

  // Attach the Intersection Observer to the target element
  React.useEffect(() => {
    const target = animationRef.current;
    if (target) {
      observer.observe(target);

      // Clean up the observer when the component unmounts
      return () => observer.unobserve(target);
    }
  }, [observer]);

  return (
    <div className="scrollable-section">
      <div ref={animationRef} className="scroll-animation">
        <h2>Scrolling AAnimation Section</h2>
        <p>Your content here...</p>
      </div>
    </div>
  );
};

export default ScrollAnimation;
