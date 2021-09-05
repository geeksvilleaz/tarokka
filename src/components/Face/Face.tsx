import React from 'react';
import './Face.scss';

interface IProps {
  card: any;
}

const Face: React.FC<IProps> = ({ card }) => {
  console.log({card})
  const style = {
    backgroundPositionX: card?.x,
    backgroundPositionY: card?.y
  };
  
  return (
    <div className="face" style={style} />
  );
};

export default Face;
