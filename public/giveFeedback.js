//MAIN BOX
const flexBox = document.createElement('flexBox');
flexBox.className = "fade-in"
flexBox.id = "flexBoxID";
document.body.appendChild(flexBox);

// CENTER HORIZONTAL
const centeringBox = document.createElement('centeringBox');
centeringBox.id = "CenteringBoxID";
flexBox.appendChild(centeringBox);

const growBoxTop = document.createElement('growBoxTop');
// growBoxTop.id = "growBoxTopID"
centeringBox.appendChild(growBoxTop);

const titleDescription = document.createElement('titleDescription');
titleDescription.innerHTML = "Lindegaarden Bed & Breakfast"
titleDescription.onclick = function() { linkHome() };
centeringBox.appendChild(titleDescription);

const subtitleDescription = document.createElement('subtitleDescription');
subtitleDescription.id = "subtitleDescriptionID"
subtitleDescription.innerHTML = "<br><br>"
centeringBox.appendChild(subtitleDescription);

function linkHome() {
    window.location.href = "https://lindegaardenbnb.dk/";
}

import { imagesFunction } from './imageFunction.js'
// imagesFunction(centeringBox)

import { bookingFunction } from './bookingFunction.js'
// bookingFunction(centeringBox)

import { historyContactFunction } from './historyContactFunction.js'
// historyContactFunction(centeringBox)



import { feedback } from './feedback.js'
feedback(centeringBox)



import { languageFeedback } from './language.js'
languageFeedback(centeringBox)

const growBoxBottom = document.createElement('growBoxBottom');
// growBoxBottom.id = "growBoxBottomID"
centeringBox.appendChild(growBoxBottom);


import { checkScreenAspectForFeedback, adjustScreenWidth } from './aspectRatio.js'
checkScreenAspectForFeedback()
adjustScreenWidth()