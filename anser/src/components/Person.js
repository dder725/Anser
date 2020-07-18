import React from 'react';
import Actions from './Actions';
import Header from './Header';

import Card from 'react-bootstrap/Card';

const Person = ({ person, modifySuperficialChoices }) => {
  const { name, desc, age, image } = person;

  return (
    <>
      <Header/>
      <div className="cardContainer">
        <Card>
          <Card.Img variant="top" alt={name} className="userImage"/>
          <Card.Body>
            <Card.Title>{name},{age}</Card.Title>
          </Card.Body>
        </Card>
      </div> 

      <Actions
        person={person}
        modifySuperficialChoices={modifySuperficialChoices}
      />
    </>
  );
};

export default Person;
