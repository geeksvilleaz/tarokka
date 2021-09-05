import React from 'react';
import './Info.scss';

interface IProps {
  reading: any;
}

const Info: React.FC<IProps> = ({ reading }) => {
  console.log({reading})
  return (
    <div className="info">
      <h2>Tarokka Reading</h2>
      {reading[1].card && (
        <div>
          <h3>1. This card tells of history. Knowledge of the ancient will help you better understand your enemy.</h3>
          <div>{reading[1].stage > 0 && reading[1].card.message}</div>
          <hr />
        </div>
      )}

      {reading[2].card && (
        <div>
          <h3>2. This card tells of a powerful force for good and protection, a holy symbol of great hope.</h3>
          <div>{reading[2].stage > 0 && reading[2].card.message}</div>
        <hr />
        </div>
      )}

{reading[3].card && (
  <div>
          <h3>3. This is a card of power and strength. It tells of a weapon of vengeance: a sword of sunlight.</h3>
          <div>{reading[3].stage > 0 && reading[3].card.message}</div>
  <hr />
        </div>
      )}

{reading[4].card && (
  <div>
          <h3>4. This card sheds light on one who will help you greatly in the battle against darkness.</h3>
          <div>{reading[4].stage > 0 && reading[4].card.message}</div>
  <hr />
        </div>
      )}

{reading[5].card && (
  <div>
          <h3>5. Your enemy is a creature of darkness, whose powers are beyond mortality. This card will lead you to him!</h3>
          <div>{reading[5].stage > 0 && reading[5].card?.message}</div>
  <hr />
        </div>
      )}
    </div>
  );
};

export default Info;
