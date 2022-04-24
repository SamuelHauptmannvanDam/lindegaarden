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
import { bookingFunction } from './bookingFunction.js'
import { historyContactFunction } from './historyContactFunction.js'

import { feedback } from './feedback.js'
feedback(centeringBox)

import { languageFeedback } from './language.js'
languageFeedback(centeringBox)

const growBoxBottom = document.createElement('growBoxBottom');
centeringBox.appendChild(growBoxBottom);

import { checkScreenAspectForFeedback, adjustScreenWidth } from './aspectRatio.js'
checkScreenAspectForFeedback()
adjustScreenWidth()