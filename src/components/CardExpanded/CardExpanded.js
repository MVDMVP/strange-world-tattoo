import React, { useEffect, useState } from 'react';
import './CardExpanded.css';

const CardExpanded = (props) => {
  const [active, setActive] = useState(false);

  useEffect(() => {
    setActive(true);

    return () => {
      setActive(false);
    };
  }, []);

  const handleClose = () => {
    setActive(false);
    setTimeout(() => {
      props.onClose();
    }, 300);
  };

  return (
    <div className={`cardExpanded ${active ? 'active' : ''}`}>
      <button className="exit" onClick={handleClose}>X</button>
      <div className="text">
        <h2>{props.name}</h2>
        <h3>{props.title}</h3>
        <p>{props.bio}</p>
      </div>
    </div>
  );
}

export default CardExpanded;
