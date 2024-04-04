import React, { useState, useEffect } from 'react';
import { ReactDOM } from 'react-dom';
import './Carousel.css';

import { BiSolidLeftArrow, BiSolidRightArrow } from 'react-icons/bi';

const MAX_VISIBILITY = 3;

const Carousel = ({ children, changeActiveProject }) => {
  const [active, setActive] = useState(0);
  const count = React.Children.count(children);

  useEffect(() => {
    changeActiveProject(0);
  }, []);

  return (
    <div className="carousel">
      {active > 0 && (
        <button
          className="nav left"
          onClick={() => {
            setActive(i => i - 1);
            changeActiveProject(i => i - 1);
          }}
        >
          <BiSolidLeftArrow />
        </button>
      )}
      {React.Children.map(children, (child, i) => (
        <div
          className="card-container"
          style={{
            '--active': i === active ? 1 : 0,
            '--offset': (active - i) / 3,
            '--direction': Math.sign(active - i),
            '--abs-offset': Math.abs(active - i) / 3,
            'pointer-events': active === i ? 'auto' : 'none',
            opacity: Math.abs(active - i) >= MAX_VISIBILITY ? '0' : '1',
            display: Math.abs(active - i) > MAX_VISIBILITY ? 'none' : 'block',
          }}
        >
          {child}
        </div>
      ))}
      {active < count - 1 && (
        <button
          className="nav right"
          onClick={() => {
            setActive(i => i + 1);
            changeActiveProject(i => i + 1);
          }}
        >
          <BiSolidRightArrow />
        </button>
      )}
    </div>
  );
};

export default Carousel;
