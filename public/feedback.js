export function feedback(centeringBox) {
    const feedbackBox = document.createElement('feedbackBox');
    feedbackBox.className = "info"
    centeringBox.appendChild(feedbackBox);

    const feedbackHeartRatingBox = document.createElement('feedbackHeartRatingBox');

    const ratingBox = document.createElement('ratingBox');
    ratingBox.id = "ratingBoxID"
    ratingBox.classList = "fade-in";
    feedbackBox.appendChild(ratingBox);

    const feedbackText = document.createElement('feedbackText');
    feedbackText.id = "feedbackTextID";
    feedbackText.innerHTML = "We're sorry, we clearly need the feedback to improve";
    ratingBox.appendChild(feedbackText);
    document.getElementById("feedbackTextID").style.display = "none";

    const feedbackButton = document.createElement('feedbackButton');
    feedbackButton.id = "feedbackButtonID";
    feedbackButton.innerHTML = "GIVE FEEDBACK"
    feedbackButton.className = "bookingFrameCostButton";
    feedbackButton.onclick = function() { mailto() };
    ratingBox.appendChild(feedbackButton);
    document.getElementById("feedbackButtonID").style.display = "none";

    const feedbackTextMaps = document.createElement('feedbackTextMaps');
    feedbackTextMaps.id = "feedbackTextMapsID";
    feedbackTextMaps.innerHTML = "Help us spread the word!";
    ratingBox.appendChild(feedbackTextMaps);
    document.getElementById("feedbackTextMapsID").style.display = "none";

    const feedbackButtonMaps = document.createElement('feedbackButtonMaps');
    feedbackButtonMaps.id = "feedbackButtonMapsID";
    feedbackButtonMaps.innerHTML = "WRITE REVIEW ON GOOGLE MAPS";
    feedbackButtonMaps.className = "bookingFrameCostButton";
    feedbackButtonMaps.onclick = function() { RateOnGooGleMapsLink() };
    ratingBox.appendChild(feedbackButtonMaps);
    document.getElementById("feedbackButtonMapsID").style.display = "none";

    feedbackBox.appendChild(feedbackHeartRatingBox);
    const feedbackHeartBox = document.createElement('feedbackHeartBox');
    feedbackHeartBox.id = "feedbackHeartBoxID";
    feedbackHeartRatingBox.appendChild(feedbackHeartBox);

    const feedbackHeart1 = document.createElement('img');
    feedbackHeart1.id = "feedbackHeart1ID"
    feedbackHeart1.className = "heart"
    feedbackHeart1.onclick = function() { heartClick(1) };
    feedbackHeart1.onmouseover = function() { heartOver(1) };
    feedbackHeart1.src = "images/heart.svg";
    feedbackHeartBox.appendChild(feedbackHeart1);

    const feedbackHeart2 = document.createElement('img');
    feedbackHeart2.id = "feedbackHeart2ID"
    feedbackHeart2.className = "heart"
    feedbackHeart2.onclick = function() { heartClick(2) };
    feedbackHeart2.onmouseover = function() { heartOver(2) };
    feedbackHeart2.src = "images/heart.svg";
    feedbackHeartBox.appendChild(feedbackHeart2);

    const feedbackHeart3 = document.createElement('img');
    feedbackHeart3.id = "feedbackHeart3ID"
    feedbackHeart3.className = "heart"
    feedbackHeart3.onclick = function() { heartClick(3) };
    feedbackHeart3.onmouseover = function() { heartOver(3) };
    feedbackHeart3.src = "images/heart.svg";
    feedbackHeartBox.appendChild(feedbackHeart3);

    const feedbackHeart4 = document.createElement('img');
    feedbackHeart4.id = "feedbackHeart4ID"
    feedbackHeart4.className = "heart"
    feedbackHeart4.onclick = function() { heartClick(4) };
    feedbackHeart4.onmouseover = function() { heartOver(4) };
    feedbackHeart4.src = "images/heart.svg";
    feedbackHeartBox.appendChild(feedbackHeart4);

    const feedbackHeart5 = document.createElement('img');
    feedbackHeart5.id = "feedbackHeart5ID"
    feedbackHeart5.className = "heart"
    feedbackHeart5.onclick = function() { heartClick(5) };
    feedbackHeart5.onmouseover = function() { heartOver(5) };
    feedbackHeart5.src = "images/heart.svg";
    feedbackHeartBox.appendChild(feedbackHeart5);

    function heartOver(heartRating) {
        for (let i = 1; i <= heartRating; i++) {
            document.getElementById("feedbackHeart" + i + "ID").src = "images/filledHeart.svg";
        }
        for (let i = heartRating + 1; i <= 5; i++) {
            document.getElementById("feedbackHeart" + i + "ID").src = "images/heart.svg";
        }
    }

    let setState = 0;

    function heartClick(heartRating) {
        if (setState == 0) {
            setState = 1
                // document.getElementById("ratingBoxID").style.height = "120px";
        }
        if (heartRating > 3) {
            document.getElementById("feedbackButtonID").style.display = "none";
            document.getElementById("feedbackTextID").style.display = "none";
            document.getElementById("feedbackButtonMapsID").style.display = "block";
            document.getElementById("feedbackTextMapsID").style.display = "block";
            document.getElementById("ratingBoxID").style.display = "block";
        }
        if (heartRating <= 3) {
            document.getElementById("feedbackButtonID").style.display = "block";
            document.getElementById("feedbackTextID").style.display = "block";
            document.getElementById("feedbackButtonMapsID").style.display = "none";
            document.getElementById("feedbackTextMapsID").style.display = "none";
            document.getElementById("ratingBoxID").style.display = "block";
        }
    }

    function RateOnGooGleMapsLink() {
        window.open("https://goo.gl/maps/6qXzNQeo4hsSuMpCA");
    }


    function mailto() {
        window.open("mailto: lindegaardenbnb@gmail.com?subject=Feedback&body=We're sorry, we clearly need the feedback to improve. So how can we improve?                            %0D%0D%0D%0D And again. Thank you for your time and feedback");
    }
}