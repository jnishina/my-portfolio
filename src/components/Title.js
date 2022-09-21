import React from 'react';

import animeAvatar from '../assets/anime_avatar.png';

const Title = () => {
  return (
    <div className="container">
      <h3 className="title-header">Jordan Nishina</h3>
      <p className="title-title">Full-Stack Engineer</p>
      <img
        data-src={animeAvatar}
        className="avatar-pic"
        alt="Anime avatar of myself, Jordan"
      />
      <p className="title-blurb">Self-description here</p>
    </div>
  );
}

export default Title;
