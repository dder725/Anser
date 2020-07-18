import React from 'react';
import Actions from './Actions';
import Header from './Header';
import { AvatarGenerator } from 'random-avatar-generator';

const Person = ({ person, modifySuperficialChoices }) => {
  const nameGen = require('human-names');
  const avatarGen = new AvatarGenerator();

  const avatar = avatarGen.generateRandomAvatar();
  const name = nameGen.maleRandom();
  const age = Math.floor(Math.random() * 16) + 18;

  return (
    <>
      <Header/>
      <div className="cardContainer">
        <img src={avatar} alt={name}></img>
        <h2>{name}</h2>
        <h4>{age}</h4>
      </div> 

      <Actions
        person={person}
        modifySuperficialChoices={modifySuperficialChoices}
      />
    </>
  );
};

export default Person;
