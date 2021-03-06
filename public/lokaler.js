//MAIN BOX
const flexBox = document.createElement('flexBox');
flexBox.className = 'fade-in';
flexBox.id = 'flexBoxID';
document.body.appendChild(flexBox);

// CENTER HORIZONTAL
const centeringBox = document.createElement('centeringBox');
centeringBox.id = 'CenteringBoxID';
flexBox.appendChild(centeringBox);

const titleDescription = document.createElement('titleDescription');
titleDescription.innerHTML = 'Lindegaarden Lokaler';
titleDescription.onclick = function () {
  linkHome();
};
centeringBox.appendChild(titleDescription);

const subtitleDescription = document.createElement('subtitleDescription');
subtitleDescription.id = 'subtitleDescriptionID';
subtitleDescription.innerHTML = '<br><br>';
centeringBox.appendChild(subtitleDescription);

function linkHome() {
  window.location.href = 'https://lindegaardenbnb.dk/';
}

import { imagesFunction } from './imageLokaler.js';
imagesFunction(centeringBox);

import { bookingFunction } from './bookingLokaler.js';
bookingFunction(centeringBox);

// import { language } from './language.js';
// language(centeringBox);

import { historyContactFunction } from './historyContactLokaler.js';
historyContactFunction(centeringBox);

import { feedback } from './feedback.js';
feedback(centeringBox);

import { checkScreenAspect, adjustScreenWidth } from './aspectRatio.js';
checkScreenAspect();
adjustScreenWidth();

const paddingboxBottom = document.createElement('paddingboxBottom');
centeringBox.appendChild(paddingboxBottom);

import { toDanish, toEnglish } from './languageLokaler.js';
fetch(
  'https://api.geoapify.com/v1/ipinfo?apiKey=fb0e13a6fe3b4773ab9d95edbbd12e7e'
)
  .then((resp) => resp.json())
  .then((userLocationData) => {
    if (userLocationData.country.name == 'Denmark') {
      toDanish();
    } else {
      toEnglish();
    }
  });
