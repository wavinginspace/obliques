// this is the data for holding which page we're on
let pageNumber = 0;

//have the content for these pages

let paulDeck = [
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

// random hexadecimal function

const randomColor = function() {
	return (
		'#' +
		(function lol(m, s, c) {
			return s[m.floor(m.random() * s.length)] + (c && lol(m, s, c - 1));
		})(Math, '0123456789ABCDEF', 4)
	);
};

// for each element in array, assign random color to background gradient

// paulDeck.forEach((card) => (card.background = randomColor()));

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

	if (pageNumber > paulDeck.length - 1) {
		pageNumber = 0;
	}

	updateSection();
};
// make the previous function to increase the pageNumber
const previous = function() {
	pageNumber -= 1;

	if (pageNumber < 0) {
		pageNumber = paulDeck.length - 1;
	}

	updateSection();
};

// pick a random slide
// let randomNum = Math.floor(Math.random * pages.length);
const random = function() {
	let randomNum = Math.floor(Math.random() * paulDeck.length);
	if (pageNumber === randomNum && pageNumber >= paulDeck.length - 1) {
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
	if (outputTag.innerHTML === '') {
		return;
	}
	outputTag.innerHTML = paulDeck[pageNumber].copy;
	circleTag.style.backgroundColor = paulDeck[pageNumber].circle;
	bodyTag.style.backgroundColor = paulDeck[pageNumber].background;
};

// on click of nextTag, run this
nextTag.addEventListener('click', function() {
	next();
	paulDeck.forEach((card) => (card.background = randomColor()));
});
// on click of prevTag, run this
prevTag.addEventListener('click', function() {
	previous();
	paulDeck.forEach((card) => (card.background = randomColor()));
});

randomTag.addEventListener('click', function() {
	random();
	paulDeck.forEach((card) => (card.background = randomColor()));
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

const submitbutton = document.querySelector('.submitbutton');
const removebutton = document.querySelector('.removebutton');
const newdeckcount = document.getElementById('newdeckcount');

// adds new phrase to the pages array
const addNewPhrase = function() {
	let inputValue = document.getElementById('inputbox').value;
	if (!inputValue) {
		return;
	}

	paulDeck.push({ copy: inputValue, background: '#d3c7f3', circle: '#f7fe00' });
	document.getElementById('inputbox').value = '';
	submitbutton.style.backgroundColor = 'rgba(255, 255, 255, 0.8)';

	if (paulDeck.length === 1) {
		outputTag.innerHTML = inputValue;
	}

	newdeckcount.innerHTML = `- ${paulDeck.length}`;

	setTimeout(function() {
		submitbutton.style.backgroundColor = 'transparent';
	}, 700);
};

// ballbounce function -------------------------------------------//

const circleAnimation = function() {
	circleTag.classList.add('animation');
	setTimeout(function() {
		circleTag.classList.remove('animation');
	}, 2000);
};

submitbutton.addEventListener('click', () => {
	addNewPhrase();
	circleAnimation();
});

// ---------------------------------------------------------------//

document.addEventListener('keydown', function(e) {
	if (e.keyCode === 13) {
		addNewPhrase();
		circleAnimation();
		e.preventDefault();
	}

	if (e.keyCode === 81) {
		random();
		e.preventDefault();
	}
});

removebutton.addEventListener('click', function() {
	newdeckcount.innerText = `- ${paulDeck.length - 1}`;
	if (paulDeck.length <= 0) {
		newdeckcount.style.display = 'none';
	}
	paulDeck.pop();
	if (paulDeck.length <= 0) {
		outputTag.innerHTML = '';
	}
	next();
});

// deck buttons

const newDeckButton = document.getElementById('newdeck');
const paulDeckButton = document.querySelector('#pauldeckbutton');

//returns to default starter deck
paulDeckButton.addEventListener('click', function() {
	console.log('test');
	paulDeck = [
		{ copy: 'be kind to yourself', background: '#edc7a9', circle: '#3e78ed' },
		{ copy: "don't overthink it", background: '#a1fffe', circle: '#e34a47' },
		{ copy: 'go for a long walk', background: '#d3c7f3', circle: '#f7fe00' },
		{ copy: 'make some tea', background: '#edc7a9', circle: '#3e78ed' },
		{ copy: 'hug an animal', background: '#a1fffe', circle: '#e34a47' },
		{ copy: 'dress comfortably', background: '#d3c7f3', circle: '#f7fe00' },
		{ copy: 'close your eyes', background: '#edc7a9', circle: '#3e78ed' },
		{ copy: 'congratulate yourself', background: '#a1fffe', circle: '#e34a47' },
		{ copy: 'talk to a friend', background: '#d3c7f3', circle: '#f7fe00' },
		{ copy: 'eat some fruit', background: '#edc7a9', circle: '#3e78ed' },
		{ copy: 'smile', background: '#a1fffe', circle: '#e34a47' }
	];
	document.querySelector('.mainbody h2').innerHTML = 'breathe';
});

//creates blank new deck
newDeckButton.addEventListener('click', function() {
	paulDeck = [];
	document.querySelector('.mainbody h2').innerHTML = '';
});
