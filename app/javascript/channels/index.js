// Load all the channels within this directory and all subdirectories.
// Channel files must be named *_channel.js.

const channels = require.context('.', true, /_channel\.js$/)
channels.keys().forEach(channels)


const details = document.getElementsByClassName('details-box');
const openButton = document.getElementsByClassName('task-title');
const closeButton = document.getElementsByClassName('details-box');
console.log(openButton);

function openDetails() {
  details.classList.add('open');
  details.classList.remove('close');
};

openButton.addEventListener('click', openDetails);


// const displayDetails = title.addEventListener("click", displayDetails);
// console.log(displayDetails);

// function displayDetails() {

//   console.log('hello from the function');
// }

// const showDetails = details.style.display = "block"
