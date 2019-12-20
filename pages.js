// this is the data for holding which page we're on
let pageNumber = 0

//have the content for these pages
const pages = [
  {copy: 'be kind to yourself', background: '#edc7a9', circle: '#3e78ed'},
  {copy: 'don\'t overthink it', background: '#a1fffe', circle: '#e34a47'},
  {copy: 'go for a long walk', background: '#d3c7f3', circle: '#f7fe00'},
  {copy: 'make some tea', background: '#edc7a9', circle: '#3e78ed'},
  {copy: 'hug an animal', background: '#a1fffe', circle: '#e34a47'},
  {copy: 'dress comfortably', background: '#d3c7f3', circle: '#f7fe00'},
  {copy: 'close your eyes', background: '#edc7a9', circle: '#3e78ed'},
  {copy: 'congratulate yourself', background: '#a1fffe', circle: '#e34a47'},
  {copy: 'talk to a friend', background: '#d3c7f3', circle: '#f7fe00'},
  {copy: 'eat some fruit', background: '#edc7a9', circle: '#3e78ed'},
  {copy: 'smile', background: '#a1fffe', circle: '#e34a47'},
]

// pick the relevant tags
const nextTag = document.querySelector('.next')
const prevTag = document.querySelector('.prev')
const randomTag = document.querySelector('.random')
const outputTag = document.querySelector('h2')
const bodyTag = document.querySelector('body')
const circleTag = document.querySelector('section div.circle')
const buttonTag = document.querySelector('.addbutton')
// make the next function to increase the pageNumber
const next = function() {
  pageNumber += 1

  if (pageNumber > pages.length - 1) {
    pageNumber = 0
  }

  updateSection()
}
// make the previous function to increase the pageNumber
const previous = function() {
  pageNumber -= 1

  if (pageNumber < 0) {
    pageNumber = pages.length - 1
  }

  updateSection()
}

// pick a random slide

const random = function() {
  pageNumber = Math.floor(Math.random() * 4)
  updateSection()
}

// this will update the section's content and style
const updateSection = function() {
  outputTag.innerHTML = pages[pageNumber].copy
  circleTag.style.backgroundColor = pages[pageNumber].circle
  bodyTag.style.backgroundColor = pages[pageNumber].background
}
// on click of nextTag, run this
nextTag.addEventListener('click', function() {
  next()
})
// on click of prevTag, run this
prevTag.addEventListener('click', function() {
  previous()
})

randomTag.addEventListener('click', function() {
  random()
})

// keyup events
document.addEventListener('keydown', function(e) {
  if (e.keyCode === 37) {
    previous()
  }
  if (e.keyCode === 39) {
    next()
  }
})


// add and delete button functions

const submitbutton = document.querySelector('.submitbutton');
const removebutton = document.querySelector('.removebutton');

submitbutton.addEventListener('click', function() {
  let inputValue = document.getElementById('inputbox').value;
  pages.push(
    {copy: inputValue, background: '#d3c7f3', circle: '#f7fe00'}
    );
    document.getElementById('inputbox').value = '';
  });

removebutton.addEventListener('click', function() {
  pages.pop();
  previous();
})


