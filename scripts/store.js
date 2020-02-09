const colors = {
  bg1: '#FAEFDC',
  fg1: '#8AFFE4',
  bg2: '#ffe0d5',
  fg5: '#d5fcff',
  bg3: '#e1fff5',
  fg3: '#ffe6e1',
  bg4: '#fff3d4',
  fg4: '#e7d4ff',
  bg5: '#ffe0d5',
  fg5: '#d3ffdd'
}

const {bg1, bg2, bg3, bg4, bg5, fg1, fg2, fg3, fg4, fg5} = colors;

const paulDeck = [
  { copy: 'breathe', background: bg1, circle: fg1 },
  { copy: 'be kind to yourself', background: bg2, circle: fg2 },
  { copy: 'don\'t overthink it', background: bg3, circle: fg3 },
  { copy: 'go for a long walk', background: bg4, circle: fg4 },
  { copy: 'make some tea', background: bg5, circle: fg5 },
  { copy: 'hug an animal', background: bg1, circle: fg1 },
  { copy: 'dress comfortably', background: bg2, circle: fg2 },
  { copy: 'close your eyes', background: bg3, circle: fg3 },
  { copy: 'congratulate yourself', background: bg4, circle: fg4 },
  { copy: 'talk to a friend', background: bg5, circle: fg5 },
  { copy: 'eat some fruit', background: bg1, circle: fg1 },
  { copy: 'smile', background: bg2, circle: fg2 },
  { copy: 'light some incense', background: bg3, circle: fg3 },
  { copy: 'take a nap', background: bg4, circle: fg4 },
  { copy: 'listen to relaxing music', background: bg5, circle: fg5 },
  { copy: 'stretch!', background: bg1, circle: fg1 },
  { copy: 'go for a bike ride', background: bg2, circle: fg2 },
  { copy: 'have a drink', background: bg3, circle: fg3 },
  { copy: 'meditate', background: bg4, circle: bg4 },
  { copy: 'text someone who loves you', background: bg5, circle: fg5 },
  { copy: 'visualize where you want to be', background: bg1, circle: fg1 },
  { copy: 'plan a trip', background: bg2, circle: fg2 },
  { copy: 'play an instrument', background: bg3, circle: fg3 },
  { copy: 'lie down on the floor', background: bg4, circle: fg4 },
  { copy: 'count your blessings', background: bg5, circle: fg5 },
  { copy: 'take a long shower', background: bg1, circle: fg1 },
  { copy: 'have a snack', background: bg2, circle: fg2 },
  { copy: 'lose yourself in a book', background: bg3, circle: fg3 },
  { copy: 'play a record', background: bg4, circle: fg4 },
  { copy: 'go outside', background: bg5, circle: fg5 },
  { copy: 'take 10 deep breaths', background: bg1, circle: fg1 },
  { copy: 'write down your feelings', background: bg2, circle: fg2 },
  { copy: 'draw something', background: bg3, circle: fg3 },
  { copy: 'record some music', background: bg4, circle: fg4 },
  { copy: 'learn something new', background: bg5, circle: fg5 },
  { copy: 'light a candle', background: bg1, circle: fg1 },
  { copy: 'smile', background: bg2, circle: fg2 }
];

export default {
  paulDeck,
  colors
};