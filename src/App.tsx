import React, { useEffect, useState } from 'react';
import Card from './components/Card/Card';
import deck from './constants/deck';
import Info from './components/Info/Info';
import './App.scss';

const initialReading: any = {
  1: {
    card: null
  },
  2: {
    card: null
  },
  3: {
    card: null
  },
  4: {
    card: null
  },
  5: {
    card: null
  }
};

function App() {
  const [reading, setReading] = useState(initialReading);
  const [activeCard, setActiveCard] = useState<number>();
  const [lowDeck, setLowDeck] = useState<number[]>([]);
  const [highDeck, setHighDeck] = useState<number[]>([]);

  useEffect(() => {
    const lowIds = [];
    const highIds = [];

    for (let i = 0; i < deck.low.length; i++) {
      lowIds.push(i);
    }

    for (let i = 0; i < deck.high.length; i++) {
      highIds.push(i);
    }

    lowIds.sort(() => Math.random() - 0.5);
    highIds.sort(() => Math.random() - 0.5);

    setLowDeck(lowIds);
    setHighDeck(highIds);
  }, []);

  const handleClick = (card: number, deckType: string, stage: number) => {
    setActiveCard(card);
console.log({stage})
    const section = deck[deckType];
    const chosen = chooseCard(section, deckType);

    // if (stage > 0) {
    //   return;
    // }

    setReading((reading: any) => {
      return {
        ...reading,
        [card]: {
          card: chosen,
          stage
        }
      };
    });
  };

  function chooseCard(deck: any, deckType: string): any {
    const num = deckType === 'low' ? lowDeck.shift() || 0 : highDeck.shift() || 0;
    return deck[num];
  }

  return (
    <div className="app">
      <div className="card-area">
        <div className="row">
          <Card isActive={activeCard === 2} order={2} deck="low" cb={handleClick} card={reading[2].card} />
        </div>
        <div className="row">
          <Card isActive={activeCard === 1} order={1} deck="low" cb={handleClick} card={reading[1].card} />
          <Card isActive={activeCard === 5} order={5} deck="high" cb={handleClick} card={reading[5].card} />
          <Card isActive={activeCard === 3} order={3} deck="low" cb={handleClick} card={reading[3].card} />
        </div>
        <div className="row">
          <Card isActive={activeCard === 4} order={4} deck="low" cb={handleClick} card={reading[4].card} />
        </div>
      </div>
      <div className="info-area">
        {<Info reading={reading} />}
      </div>
    </div>
  );
}

export default App;
