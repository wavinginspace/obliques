// this is the data for holding which page we're on
let pageNumber = 0;
let currentDeck;

const paulDeck = [
	{ copy: 'breathe', background: '', circle: '#f7fe00' },
	{ copy: 'be kind to yourself', background: '', circle: '#3e78ed' },
	{ copy: "don't overthink it", background: '#a1fffe', circle: '#e34a47' },
	{ copy: 'go for a long walk', background: '#d3c7f3', circle: '#f7fe00' },
	{ copy: 'make some tea', background: '#edc7a9', circle: '#3e78ed' },
	{ copy: 'hug an animal', background: '#a1fffe', circle: '#e34a47' },
	{ copy: 'dress comfortably', background: '#d3c7f3', circle: '#f7fe00' },
	{ copy: 'close your eyes', background: '#edc7a9', circle: '#3e78ed' },
	{ copy: 'congratulate yourself', background: '#a1fffe', circle: '#e34a47' },
	{ copy: 'talk to a friend', background: '#d3c7f3', circle: '#f7fe00' },
	{ copy: 'eat some fruit', background: '#edc7a9', circle: '#3e78ed' },
	{ copy: 'smile', background: '#a1fffe', circle: '#e34a47' },
	{ copy: 'light some incense', background: '#d3c7f3', circle: '#f7fe00' },
	{ copy: 'take a nap', background: '#edc7a9', circle: '#3e78ed' },
	{ copy: 'listen to relaxing music', background: '#a1fffe', circle: '#e34a47' },
	{ copy: 'stretch!', background: '#d3c7f3', circle: '#f7fe00' },
	{ copy: 'go for a bike ride', background: '#edc7a9', circle: '#3e78ed' },
	{ copy: 'have a drink', background: '#a1fffe', circle: '#e34a47' },
	{ copy: 'meditate', background: '#d3c7f3', circle: '#f7fe00' },
	{ copy: 'text someone who loves you', background: '#edc7a9', circle: '#3e78ed' },
	{ copy: 'visualize where you want to be', background: '#a1fffe', circle: '#e34a47' },
	{ copy: 'plan a trip', background: '#d3c7f3', circle: '#f7fe00' },
	{ copy: 'play an instrument', background: '#edc7a9', circle: '#3e78ed' },
	{ copy: 'lie down on the floor', background: '#a1fffe', circle: '#e34a47' },
	{ copy: 'count your blessings', background: '#d3c7f3', circle: '#f7fe00' },
	{ copy: 'take a long shower', background: '#edc7a9', circle: '#3e78ed' },
	{ copy: 'have a snack', background: '#a1fffe', circle: '#e34a47' },
	{ copy: 'lose yourself in a book', background: '#d3c7f3', circle: '#f7fe00' },
	{ copy: 'play a record', background: '#edc7a9', circle: '#3e78ed' },
	{ copy: 'go outside', background: '#a1fffe', circle: '#e34a47' },
	{ copy: 'take 10 deep breaths', background: '#d3c7f3', circle: '#f7fe00' },
	{ copy: 'write down your feelings', background: '#edc7a9', circle: '#3e78ed' },
	{ copy: 'draw something', background: '#a1fffe', circle: '#e34a47' },
	{ copy: 'record some music', background: '#d3c7f3', circle: '#f7fe00' },
	{ copy: 'learn something new', background: '#edc7a9', circle: '#3e78ed' },
	{ copy: 'light a candle', background: '#a1fffe', circle: '#e34a47' },
	{ copy: 'smile', background: '#a1fffe', circle: '#e34a47' }
];
const newDeck = [];

window.onload = function() {
	currentDeck = paulDeck;
};

// pick the relevant tags
const nextTag = document.querySelector('.next');
const prevTag = document.querySelector('.prev');
const randomTag = document.querySelector('.random');
const outputTag = document.querySelector('h2');
const bodyTag = document.querySelector('body');
const circleTag = document.querySelector('section div.circle');
const buttonTag = document.querySelector('.addbutton');

// make the next function to increase the pageNumber

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

// random hexadecimal function

const randomColor = function() {
	return (
		'#' +
		(function lol(m, s, c) {
			return s[m.floor(m.random() * s.length)] + (c && lol(m, s, c - 1));
		})(Math, '0123456789ABCDEF', 4)
	);
};

// function that assigns random color to background and circle

const assignRandomColor = function() {
	currentDeck.forEach((card) => (card.background = randomColor()));
	currentDeck.forEach((card) => (card.circle = randomColor()));
};

// on click of nextTag, run this
nextTag.addEventListener('click', function() {
	next();
	assignRandomColor();
});
// on click of prevTag, run this
prevTag.addEventListener('click', function() {
	previous();
	assignRandomColor();
});

randomTag.addEventListener('click', function() {
	random();
	assignRandomColor();
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

const submitButton = document.querySelector('.submitbutton');
const removebutton = document.querySelector('.removebutton');
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
	currentDeck[pageNumber].circle = randomColor();
	currentDeck[pageNumber].background = randomColor();
	updateSection();
});

// key events for add new phrase

document.addEventListener('keydown', function(e) {
	if (e.keyCode === 13) {
		addNewPhrase();
		circleAnimation();
		currentDeck[pageNumber].circle = randomColor();
		currentDeck[pageNumber].background = randomColor();
		updateSection();
		e.preventDefault();
	}

	if (e.keyCode === 81) {
		random();
		e.preventDefault();
	}
});

// deck buttons ----

const newDeckButton = document.getElementById('newdeck');
const paulDeckButton = document.querySelector('#pauldeckbutton');

//returns to default starter deck
paulDeckButton.addEventListener('click', function() {
	console.log('test');
	currentDeck = paulDeck;
	document.querySelector('.mainbody h2').innerHTML = 'breathe';
});

//creates blank new deck
newDeckButton.addEventListener('click', function() {
	currentDeck = newDeck;
	if (newDeck.length === 0) {
		document.querySelector('.mainbody h2').innerHTML = '';
	} else {
		outputTag.innerHTML = currentDeck[0].copy;
	}
});
