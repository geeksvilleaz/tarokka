import React, { useState } from 'react';
import Face from '../Face/Face';
import './Card.scss';

interface IProps {
  order: number;
  deck: 'high' | 'low';
  cb: any;
  card?: any;
  isActive: boolean;
}

const Card: React.FC<IProps> = ({ order, deck, cb, card, isActive }) => {
  const [stage, setStage] = useState(0);

  const handleClick = () => {
    cb(order, deck, stage);
    setStage((stage: number) => stage < 2 ? stage + 1 : 2);
  };

  return (
    <div className={`card ${isActive && 'active'}`} onClick={handleClick}>
      {stage === 0 && (
        <div>{order}</div>
      )}
      
      {stage === 1 && (
        <div className="back" />
      )}

      {stage === 2 && (
        <Face card={card}  />
      )}
    </div>
  );
};

export default Card;
