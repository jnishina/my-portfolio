import React from 'react';

const About = () => {
  return (
    <div className="container container--about">
      <div className="left-panel__border">
        <div className="about__left-panel" />
      </div>
      <div className="text-bubble--type-one left-panel__bubble-one">
        <p className="type-one--text">
          Hey! I'm Jordan, a full-stack developer who's passionate about
          creating unique, high-quality web experiences.
        </p>
      </div>
      <div className="right-panel__border">
        <div className="about__right-panel" />
      </div>
    </div>
  );
}

export default About;
