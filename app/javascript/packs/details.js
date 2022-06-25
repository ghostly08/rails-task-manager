
const details = document.getElementsByClassName('details-box');
const openButton = document.getElementsByClassName("task-title")[0];
const closeButton = document.getElementsByClassName('details-box');
console.log(openButton);


function openDetails() {
  details.classList.add('open');
  details.classList.remove('close');
};

for (var i = 0 ; i < openButton.length; i++) {
  openButton[i].addEventListener('click', openDetails);
}





export { openDetails }
