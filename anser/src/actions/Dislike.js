import React from 'react';
import dislike from './img/dislike.png';

const Dislike = ({ userId, modifySuperficialChoices }) => (
  <button
    className="likeOptions"
    type="button"
    onClick={() => modifySuperficialChoices(userId, 'ADD_TO_DISLIKED_USERS')}
  >
    <img src={dislike} alt="Dislike User" />
  </button>
);

export default Dislike;
