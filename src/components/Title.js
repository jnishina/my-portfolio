import React from 'react';

import animeAvatar from '../assets/anime_avatar_transparent.png';
import cherryBlossom from '../assets/cherry_blossom_frame.png';
import cherryBlossomFalling from '../assets/cherry_blossom_falling.gif';

const Title = () => {
  return (
    <div className="container">
      <div className="title-title">
        <h3 className="title-title__main">Life of a Full-Stack Dev</h3>
        <h4 className="title-title__sub">Vol. 1: Days of Youth</h4>
      </div>
      <img
        data-src={animeAvatar}
        className="avatar-pic"
        alt="Anime avatar of myself, Jordan"
      />
      <img
        src={cherryBlossom}
        className="cherry-blossom-background"
        alt="Cherry blossom trees"
      />
      <img
        src={cherryBlossomFalling}
        className="cherry-blossom-falling-right"
        alt="Falling cherry blossom petals"
      />
      <img
        src={cherryBlossomFalling}
        className="cherry-blossom-falling-left"
        alt="Falling cherry blossom petals"
      />
    </div>
  );
};

export default Title;
