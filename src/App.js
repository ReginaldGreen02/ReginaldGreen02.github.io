import React, { useState, useEffect, useRef } from 'react';
import './App.css';
import HomePage from './HomePage';
import ScrollAnimation from './ScrollAnimation';

function App() {
  // Mock arrays for content
  const [array1, setArray1] = useState([]);
  const [array2, setArray2] = useState([]);
  const [showLorem, setShowLorem] = useState(false);

  // Function to populate mock arrays
  const populateArrays = () => {
    const tempArray1 = [];
    const tempArray2 = [];

    for (let i = 1; i <= 10; i++) {
      tempArray1.push(`Item ${i} from Array 1`);
      tempArray2.push(`Item ${i} from Array 2`);
    }

    setArray1(tempArray1);
    setArray2(tempArray2);
  };

  // Function to handle the Intersection Observer callback for Lorem Ipsum
  const handleLoremIntersection = (entries) => {
    const entry = entries[0];
    if (entry.isIntersecting) {
      setShowLorem(true); // Set showLorem to true when the section comes into view
    } else {
      setShowLorem(false);
    }
  };

  const loremRef = useRef(null); // Create a ref for the Lorem Ipsum section

  // Create an Intersection Observer for Lorem Ipsum
  useEffect(() => {
    const observer = new IntersectionObserver(handleLoremIntersection, {
      root: null,
      rootMargin: '0px',
      threshold: 0.5,
    });

    const target = loremRef.current;
    if (target) {
      observer.observe(target);

      // Clean up the observer when the component unmounts
      return () => observer.unobserve(target);
    }
  }, []);

  // Populate mock arrays and attach the Intersection Observer when the component mounts
  useEffect(() => {
    populateArrays();
  }, []);

  return (
    <div className="App">
      <HomePage />

      {/* Add a section with the first array */}
      <section className="filler-section">
        <h2>Section 1</h2>
        <ul>
          {array1.map((item, index) => (
            <li
              key={index}
              className={`slide-in-left ${showLorem ? 'visible' : ''}`}
            >
              {item}
            </li>
          ))}
        </ul>
      </section>

      {/* Add the ScrollAnimation component */}
      <ScrollAnimation />

      {/* Add the section with the Lorem Ipsum text */}
      <section ref={loremRef} className="filler-section">
        <h2>Section 3</h2>
        <p className={`fade-in ${showLorem ? 'visible' : ''}`}>
          {/* Apply the "fade-in" class and "visible" class conditionally */}
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed cursus, felis eget
          sagittis malesuada, neque metus suscipit libero, vitae tristique dui libero non arcu.
          Nulla facilisi. Morbi ut ligula urna. Sed id tincidunt erat. Proin tristique turpis eu
          justo pharetra, vel hendrerit arcu pellentesque. Sed venenatis posuere velit, quis
          venenatis odio ultrices id. Fusce nec ligula ex. Integer aliquam, dolor at euismod efficitur,
          eros tortor dignissim quam, non elementum nunc ipsum id ex. In hac habitasse platea dictumst.
          Integer euismod laoreet libero, in euismod purus dignissim in. Aliquam blandit venenatis turpis,
          id luctus libero tempus a. Vivamus sit amet justo in nisl scelerisque dictum. Quisque et venenatis dolor.
        </p>
      </section>

      {/* Add another section with the second array */}
      <section className="filler-section">
        <h2>Section 2</h2>
        <ul>
          {array2.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </section>

      {/* Add more content as needed */}
    </div>
  );
}

export default App;
