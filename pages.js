// this is the data for holding which page we're on
let pageNumber = 0;

//have the content for these pages

let paulDeck = [
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

const newDeck = [];

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
	pageNumber = randomNum;
	updateSection();
};

// this will update the section's content and style
const updateSection = function() {
	if ((outputTag.innerHTML = '')) {
		return;
	}
	outputTag.innerHTML = paulDeck[pageNumber].copy;
	circleTag.style.backgroundColor = paulDeck[pageNumber].circle;
	bodyTag.style.backgroundColor = paulDeck[pageNumber].background;
};
// on click of nextTag, run this
nextTag.addEventListener('click', function() {
	next();
});
// on click of prevTag, run this
prevTag.addEventListener('click', function() {
	previous();
});

randomTag.addEventListener('click', function() {
	random();
});

// keyup events
document.addEventListener('keydown', function(e) {
	if (e.keyCode === 37) {
		previous();
	}
	if (e.keyCode === 39) {
		next();
	}
});

// add and delete button functions

const submitbutton = document.querySelector('.submitbutton');
const removebutton = document.querySelector('.removebutton');

// adds new phrase to the pages array
const addNewPhrase = function() {
	let inputValue = document.getElementById('inputbox').value;
	if (!inputValue) {
		return;
	}

	if (outputTag.innerHTML === '') {
		outputTag.innerHTML = inputValue;
	}

	paulDeck.push({ copy: inputValue, background: '#d3c7f3', circle: '#f7fe00' });
	document.getElementById('inputbox').value = '';
	submitbutton.style.backgroundColor = 'rgba(255, 255, 255, 0.8)';

	setTimeout(function() {
		submitbutton.style.backgroundColor = 'transparent';
	}, 700);
};

submitbutton.addEventListener('click', () => addNewPhrase());

document.addEventListener('keydown', function(e) {
	if (e.keyCode === 13) {
		addNewPhrase();
		e.preventDefault();
	}
});

removebutton.addEventListener('click', function() {
	paulDeck.pop();
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
