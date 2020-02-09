import store from './scripts/store.js'

'use strict';

const newDeck = [];

let {paulDeck} = store;
let currentDeck = paulDeck;

// pick the relevant tags
const nextTag = document.$('.next');
const prevTag = document.$('.prev');
const randomTag = document.$('.random');
const outputTag = document.$('h2');
const bodyTag = document.$('body');
const circleTag = document.$('section div.circle');
const buttonTag = document.$('.addbutton');

// * NEXT, PREVIOUS, RANDOM FUNCTIONS

// make the next function to increase the pageNumber

let pageNumber = 0;

const next = function() {
  pageNumber += 1;

  if (pageNumber > currentDeck.length - 1) {
    pageNumber = 0;
  }

  updateSection();
};

// make the previous function to increase the pageNumber
const previous = function() {
  pageNumber -= 1;

  if (pageNumber < 0) {
    pageNumber = currentDeck.length - 1;
  }

  updateSection();
};

// pick a random slide
// let randomNum = Math.floor(Math.random * pages.length);
const random = function() {
  let randomNum = Math.floor(Math.random() * currentDeck.length);
  if (pageNumber === randomNum && pageNumber >= currentDeck.length - 1) {
    pageNumber = randomNum - 1;
  } else if (pageNumber === randomNum && randomNum - 1 < 0) {
    pageNumber = randomNum + 1;
  } else if (pageNumber === randomNum) {
    pageNumber = randomNum + 1;
  } else {
    pageNumber = randomNum;
  }
  console.log(randomNum);
  updateSection();
};

// this will update the section's content and style
const updateSection = function() {
  // if (outputTag.innerHTML === '') {
  // 	return;
  // }
  if (currentDeck.length > 0) {
    outputTag.innerHTML = currentDeck[pageNumber].copy;
    circleTag.style.backgroundColor = currentDeck[pageNumber].circle;
    bodyTag.style.backgroundColor = currentDeck[pageNumber].background;
  }
};

// * STYLE FUNCTIONS

// random hexadecimal function

// const randomColor = function() {
//   return (
//     '#' +
// 		(function lol(m, s, c) {
// 		  return s[m.floor(m.random() * s.length)] + (c && lol(m, s, c - 1));
// 		})(Math, '0123456789ABCDEF', 4)
//   );
// };

// function that assigns random color to background and circle

// const assignRandomColor = function() {
//   currentDeck.forEach((card) => (card.background = randomColor()));
//   currentDeck.forEach((card) => (card.circle = randomColor()));
// };

// * EVENT LISTENERS

// on click of nextTag, run this
nextTag.addEventListener('click', function() {
  next();
  // assignRandomColor();
});
// on click of prevTag, run this
prevTag.addEventListener('click', function() {
  previous();
  // assignRandomColor();
});

randomTag.addEventListener('click', function() {
  random();
  // assignRandomColor();
});

// keyup events
document.addEventListener('keydown', function(e) {
  if (e.keyCode === 37) {
    previous();
    e.preventDefault();
  }
  if (e.keyCode === 39) {
    next();
    e.preventDefault();
  }
});

// add and delete button functions

const deleteTag = document.getElementById('deletebutton');
const inputTag = document.getElementById('inputbox');
const submitButton = document.$('.submitbutton');
const removebutton = document.$('.removebutton');
const newdeckcount = document.getElementById('newdeckcount');

// adds new phrase to the pages array ---------------------------------------------------

const addNewPhrase = function() {
  let inputValue = document.getElementById('inputbox').value;
  // if (!inputValue) {
  // 	return;
  // }

  currentDeck.push({ copy: inputValue, background: '#d3c7f3', circle: '#f7fe00' });
  document.getElementById('inputbox').value = '';
  submitButton.style.backgroundColor = 'rgba(255, 255, 255, 0.6)';

  if (currentDeck.length === 1) {
    outputTag.innerHTML = inputValue;
  }

  if (currentDeck === newDeck) {
    newdeckcount.textContent = `- ${currentDeck.length}`;
  }

  setTimeout(function() {
    submitButton.style.backgroundColor = 'transparent';
  }, 700);
};

// ballbounce function -------------------------------------------//

const circleAnimation = function() {
  circleTag.classList.add('animation');
  setTimeout(function() {
    circleTag.classList.remove('animation');
  }, 2000);
};

removebutton.addEventListener('click', function() {
  if (currentDeck.length === 0) {
    return;
  }

  if (currentDeck.length > 0) {
    newdeckcount.innerText = `- ${currentDeck.length - 1}`;
    previous();
    currentDeck.pop();
  } else if (currentDeck.length === 0) {
    newdeckcount.style.display = 'none';
  } else {
    newdeckcount.style.display = 'inline-block';
  }

  if (currentDeck.length === 0) {
    outputTag.innerHTML = '';
  }
});

submitButton.addEventListener('click', () => {
  addNewPhrase();
  circleAnimation();
  // currentDeck[pageNumber].circle = randomColor();
  // currentDeck[pageNumber].background = randomColor();
  updateSection();
});

// key events for add new phrase

document.addEventListener('keydown', function(e) {
  if (e.keyCode === 13) {
    addNewPhrase();
    circleAnimation();
    // currentDeck[pageNumber].circle = randomColor();
    // currentDeck[pageNumber].background = randomColor();
    updateSection();
    e.preventDefault();
  }

  if (e.keyCode === 81) {
    random();
    e.preventDefault();
  }
});

// * DECK BUTTONS

const newDeckButton = $('#newdeck');
const paulDeckButton = $('#pauldeckbutton');
const shuffleButton = $('.shuffle');

//returns to default starter deck
paulDeckButton.addEventListener('click', function() {
  paulDeckButton.classList.add('deck-selected');
  newDeckButton.classList.remove('deck-selected');
  currentDeck = paulDeck;
  document.$('.mainbody h2').innerHTML = 'breathe';
});

//creates blank new deck
newDeckButton.addEventListener('click', function() {
  currentDeck = newDeck;
  newDeckButton.classList.add('deck-selected');
  paulDeckButton.classList.remove('deck-selected');
  if (newDeck.length === 0) {
    document.$('.mainbody h2').innerHTML = '';
  } else {
    outputTag.innerHTML = currentDeck[0].copy;
  }
});

shuffleButton.addEventListener('click', function() {
  nextTag.classList.toggle('hidden');
  prevTag.classList.toggle('hidden');
  submitButton.classList.toggle('hidden');
  inputTag.classList.toggle('hidden');
  deleteTag.classList.toggle('hidden');
  randomTag.classList.toggle('bigger');

  if (nextTag.classList.contains('hidden')) {
    shuffleButton.innerText = 'edit mode';
  } else {
    shuffleButton.innerText = 'shuffle mode';
  }
});

// ! Matching colors

// ? #FAEFDC, #768EAD
// ? #ffe0d5, #d5fcff
// ? #e1fff5, #ffe6e1
// ? #fff3d4, #e7d4ff
// ? #ffd5d3, #d3ffdd