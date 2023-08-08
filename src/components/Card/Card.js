import React from 'react';
import './Card.css';

const Card = (props) => {
  return (
    <div className="card">
      <div className="text">
        <h2>{props.name}</h2>
        <h3>{props.title}</h3>
        <p>{props.bio}</p>
      </div>
    </div>
  );
}

export default Card;
