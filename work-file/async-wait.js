import { API_URL } from './data/api-data.js';

const btn = document.querySelector('button');
const content = document.querySelector('.content');
const img = document.querySelector('img');

btn.addEventListener('click', callJoke);

async function callJoke() {
  try {
    const response = await fetch(API_URL);
    const { value: joke } = await response.json();
    displayJoke(joke);
  } catch (err) {
    console.error(err);
  }
}

function displayJoke(joke) {
  img.classList.add('shake-img');
  content.innerText = joke;
  setTimeout(() => {
    img.classList.remove('shake-img');
  }, 300);
}
