import { API_URL } from './data/api-data.js';

const xhr = new XMLHttpRequest();
const btn = document.querySelector('button');

btn.addEventListener('click', callJoke);

function callJoke() {
  xhr.open('GET', API_URL);
  xhr.onreadystatechange = function () {
    // In local files, status is 0 upon success in Mozilla Firefox
    if (xhr.readyState === XMLHttpRequest.DONE) {
      var status = xhr.status;
      if (status === 0 || (status >= 200 && status < 400)) {
        // The request has been completed successfully

        // parse xhr.responseText to object
        const data = JSON.parse(xhr.responseText);

        // call functions
        animateChuck();
        displayJoke(data);
      } else {
        // Oh no! There has been an error with the request!
      }
    }
  };
  xhr.send();
}

function animateChuck() {
  const img = document.querySelector('img');
  img.classList.add('shake-img');

  // remove shake-img class after set time
  setTimeout(() => {
    img.classList.remove('shake-img');
  }, 300);
}

function displayJoke(data) {
  const content = document.querySelector('.content');
  content.innerText = data.value;
}
