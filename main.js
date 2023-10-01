// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

// Your JavaScript code goes here!

// Create a hidden modal element
const modal = document.createElement('div');
modal.classList.add('hidden');
document.body.appendChild(modal);

// Function to open the modal
function openModal() {
  modal.classList.remove('hidden');
}

// Function to close the modal
function closeModal() {
  modal.classList.add('hidden');
}

// Add a click listener to the "Open Modal" button
const openModalButton = document.querySelector('#open-modal-button');
openModalButton.addEventListener('click', openModal);

// Add a click listener to the "Close Modal" button
const closeModalButton = document.querySelector('#close-modal-button');
closeModalButton.addEventListener('click', closeModal);

//------------------------------------------------------------------------------
// Don't change the code below: this function mocks the server response
//------------------------------------------------------------------------------

function mimicServerCall(url="http://mimicServer.example.com", config={}) {
 return new Promise(function(resolve, reject) {
  setTimeout(function() {
   let isRandomFailure = Math.random() < .2
   if (isRandomFailure) {
    reject("Random server error. Try again.");
   } else {
    resolve("Pretend remote server notified of action!");
   }
  }, 300);
 });
}
