import { API_URL } from './data/api-data.js';

const btn = document.querySelector('button');
const content = document.querySelector('.content');
const img = document.querySelector('img');

btn.addEventListener('click', () => {
  callJoke()
    .then((res) => JSON.parse(res))
    .then((data) => {
      displayJoke(data);
      animateChuck();
    });
});

function callJoke() {
  return new Promise((resolve, reject) => {
    const xhr = new XMLHttpRequest();
    xhr.open('GET', API_URL);
    xhr.onreadystatechange = function () {
      // In local files, status is 0 upon success in Mozilla Firefox
      if (xhr.readyState === XMLHttpRequest.DONE) {
        var status = xhr.status;
        if (status === 0 || (status >= 200 && status < 400)) {
          // The request has been completed successfully

          // return resolve data
          resolve(xhr.responseText);
        } else {
          // Oh no! There has been an error with the request!
          reject({ status: xhr.status, text: xhr.statusText });
        }
      }
    };
    xhr.send();
  });
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
