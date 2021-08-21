export function imagesFunction(centeringBox) {
    const pictureFrame = document.createElement('pictureFrame');

    // pictureFrame.onclick = function() { album() };
    pictureFrame.id = "pictureFrameID"
    centeringBox.appendChild(pictureFrame);


    const pictureFrameLarge = document.createElement('pictureFrameLarge');
    pictureFrameLarge.id = "pictureFrameLargeID"
    pictureFrameLarge.onclick = function() { window.open("https://www.facebook.com/Lindegaardenbnb/photos/?ref=page_internal"); };
    pictureFrame.appendChild(pictureFrameLarge);

    const imgLarge = document.createElement("img");
    imgLarge.src = "images/3.jpg";
    imgLarge.style.width = "99%"
    imgLarge.style.height = "99%"
    pictureFrameLarge.appendChild(imgLarge);


    // Small frame
    const pictureFrameSmall = document.createElement('pictureFrameSmall');
    pictureFrameSmall.id = "pictureFrameSmallID"
    pictureFrame.appendChild(pictureFrameSmall);

    const imgSmall1 = document.createElement("img");
    imgSmall1.onclick = function() { window.open("https://www.airbnb.dk/rooms/50240587?translate_ugc=false&federated_search_id=bf966e2b-73a5-45f9-a58c-e2c02d76cc21&source_impression_id=p3_1626532448_dH7cpFG6Qv0cSTMe&guests=1&adults=1"); };
    imgSmall1.src = "images/4.jpg";
    imgSmall1.style.width = "48%"
    imgSmall1.style.height = "48%"
    pictureFrameSmall.appendChild(imgSmall1);


    const imgSmall2 = document.createElement("img");
    imgSmall2.onclick = function() { window.open("https://www.airbnb.dk/rooms/50245477?translate_ugc=false&federated_search_id=bf966e2b-73a5-45f9-a58c-e2c02d76cc21&source_impression_id=p3_1626532449_qutief9GI1VhK5Ii&guests=1&adults=1"); };
    imgSmall2.src = "images/1.jpg";
    imgSmall2.style.width = "48%"
    imgSmall2.style.height = "48%"
    pictureFrameSmall.appendChild(imgSmall2);


    const imgSmall3 = document.createElement("img");
    imgSmall3.onclick = function() { window.open("https://www.facebook.com/Lindegaardenbnb/photos/?ref=page_internal"); };
    imgSmall3.src = "images/2.jpg";
    imgSmall3.style.width = "48%"
    imgSmall3.style.height = "48%"
    pictureFrameSmall.appendChild(imgSmall3);


    const imgSmall4 = document.createElement("img");
    imgSmall4.onclick = function() { window.open("https://www.airbnb.dk/rooms/50003907?translate_ugc=false&federated_search_id=bf966e2b-73a5-45f9-a58c-e2c02d76cc21&source_impression_id=p3_1626532449_F3oSvw5Pw%2BacT%2BOu&guests=1&adults=1"); };
    imgSmall4.src = "images/5.jpg";
    imgSmall4.style.width = "48%"
    imgSmall4.style.height = "48%"
    pictureFrameSmall.appendChild(imgSmall4);

}