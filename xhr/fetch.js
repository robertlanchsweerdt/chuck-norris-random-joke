import { API_URL } from './data/api-data.js';

const btn = document.querySelector('.btn');
const content = document.querySelector('.content');
const img = document.querySelector('img');

btn.addEventListener('click', callJoke);

function callJoke() {
  fetch(API_URL)
    .then((res) => res.json())
    .then(({ value: joke }) => displayJoke(joke))
    .catch((err) => console.error(err));
}

function displayJoke(joke) {
  img.classList.add('shake-img');
  content.innerText = joke;
  setTimeout(() => {
    img.classList.remove('shake-img');
  }, 300);
}
