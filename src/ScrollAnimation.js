import { Link, Element } from 'react-scroll';

const ScrollAnimation = () => {
  return (
    <div className="scroll-animation">
      <h2>Scroll Down</h2>
      <Link to="animated-section" spy={true} smooth={true} duration={500}>
        <span>&#8595;</span>
      </Link>
    </div>
  );
};

export default ScrollAnimation;