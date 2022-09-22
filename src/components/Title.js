import React from 'react';

import animeAvatar from '../assets/anime_avatar_transparent.png';

const Title = () => {
  return (
    <div className="container">
      <div className="title-title">
        <h3 className="title-title__main">The Life of a Full-Stack Dev</h3>
        <h4 className="title-title__sub">Days of Youth</h4>
      </div>
      <img
        data-src={animeAvatar}
        className="avatar-pic"
        alt="Anime avatar of myself, Jordan"
      />
      <p className="title-blurb">Self-description here</p>
    </div>
  );
};

export default Title;
