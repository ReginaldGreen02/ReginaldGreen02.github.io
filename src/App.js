import './App.css';
import HomePage from './HomePage';
import ScrollAnimation from './ScrollAnimation';
import { Element } from 'react-scroll';
import { useSpring, animated } from 'react-spring';

function App() {
  const fadeIn = useSpring({ opacity: 1, from: { opacity: 0 } });

  return (
    <div className="App">
      <HomePage />
      <ScrollAnimation />
      <Element name="animated-section" className="scrollable-section">
        <animated.div style={fadeIn}>
          <h2>Scrolling Animation Section</h2>
          <p>Your content here...</p>
        </animated.div>
      </Element>
    </div>
  );
}

export default App;
