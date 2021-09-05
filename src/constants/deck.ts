export interface Deck {
  [key: string]: any;
  low: any;
  high: any;
};

const deck: Deck = {
  low: [
    {
      name: "The Paladin",
      message:
        "I see a sleeping prince, a servant of light and the brother of darkness. The treasure lies with him.",
      location: "K85",
      x: 0,
      y: 0,
    },
    {
      name: "The Mercenary",
      message:
        "The thing you seek lies with the dead, under mountains of gold coins.",
      location: "K84 - Crypt 31",
      x: -143,
      y: 0,
    },
    {
      name: "The Dictator",
      message: "I see a throne fit for a king.",
      location: "K25",
      x: -286,
      y: 0,
    },
    {
      name: "The Warrior",
      message:
        "That which you seek lies in the womb of darkness, the devil’s lair: the one place to which he must return.",
      location: "K86",
      x: 0,
      y: -200,
    },
    {
      name: "The Transmuter",
      message:
        "Go to a place of dizzying heights, where the stone itself is alive!",
      location: "K60",
      x: -143,
      y: -200,
    },
    {
      name: "The Necromancer",
      message:
        "A woman hangs above a roaring fire. Find her, and you will find the treasure.",
      location: "K37",
      x: -286,
      y: -200,
    },
    {
      name: "The Merchant",
      message:
        "Seek a cask that once contained the finest wine, of which not a drop remains.",
      location: "K63",
      x: 0,
      y: -400,
    },
    {
      name: "The Miser",
      message:
        "Look for a fortress inside a fortress, in a place hidden behind fire.",
      location: "K41",
      x: -143,
      y: -400,
    },
    {
      name: "The Shepherd",
      message: "Find the mother—she who gave birth to evil.",
      location: "K88",
      x: -286,
      y: -400,
    },
    {
      name: "The Anarchist",
      message:
        "I see walls of bones, a chandelier of bones, and a table of bones—all that remains of enemies long forgotten.",
      location: "K67",
      x: 0,
      y: -600,
    },
    {
      name: "The Priest",
      message:
        "You will find what you seek in the castle, amid the ruins of a place of supplication.",
      location: "K15",
      x: -143,
      y: -600,
    },
  ],
  high: [
    { 
      name: "The Marionette", 
      message: "Look to great heights. Find the beating heart of the castle. He waits nearby.", 
      location: "K60",
      x: -286,
      y: -600,
    },
  ],
};

export default deck;
