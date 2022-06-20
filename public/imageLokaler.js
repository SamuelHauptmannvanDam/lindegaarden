export function imagesFunction(centeringBox) {
  const pictureFrameBlock = document.createElement('pictureFrameBlock');
  // pictureFrame.id = "pictureFrameID"
  centeringBox.appendChild(pictureFrameBlock);

  const pictureFrame = document.createElement('pictureFrame');
  pictureFrame.id = 'pictureFrameID';
  pictureFrameBlock.appendChild(pictureFrame);

  const pictureFrameLarge = document.createElement('pictureFrameLarge');
  pictureFrameLarge.id = 'pictureFrameLargeID';
  pictureFrameLarge.onclick = function () {
    window.open(
      'https://www.facebook.com/Lindegaardenbnb/photos/?ref=page_internal'
    );
  };
  pictureFrame.appendChild(pictureFrameLarge);

  const imgLarge = document.createElement('img');
  imgLarge.src = 'images/hus.jpeg';
  imgLarge.style.width = '99%';
  imgLarge.style.height = '99%';
  pictureFrameLarge.appendChild(imgLarge);

  // Small frame
  const pictureFrameSmall = document.createElement('pictureFrameSmall');
  pictureFrameSmall.id = 'pictureFrameSmallID';
  pictureFrame.appendChild(pictureFrameSmall);

  const imgSmall1 = document.createElement('img');
  imgSmall1.className = 'smallPictureImage';
  imgSmall1.onclick = function () {
    window.open(
      'https://www.facebook.com/Lindegaardenbnb/photos/?ref=page_internal'
    );
  };
  imgSmall1.src = 'images/bord.jpeg';
  // imgSmall1.style.width = "48%"
  // imgSmall1.style.height = "48%"
  pictureFrameSmall.appendChild(imgSmall1);

  const imgSmall2 = document.createElement('img');
  imgSmall2.className = 'smallPictureImage';
  imgSmall2.onclick = function () {
    window.open(
      'https://www.facebook.com/Lindegaardenbnb/photos/?ref=page_internal'
    );
  };
  imgSmall2.src = 'images/køl.jpeg';
  // imgSmall2.style.width = "48%"
  // imgSmall2.style.height = "48%"
  pictureFrameSmall.appendChild(imgSmall2);

  const imgSmall3 = document.createElement('img');
  imgSmall3.className = 'smallPictureImage';
  imgSmall3.onclick = function () {
    window.open(
      'https://www.facebook.com/Lindegaardenbnb/photos/?ref=page_internal'
    );
  };
  imgSmall3.src = 'images/2.jpg';
  // imgSmall3.style.width = "48%"
  // imgSmall3.style.height = "48%"
  pictureFrameSmall.appendChild(imgSmall3);

  const imgSmall4 = document.createElement('img');
  imgSmall4.className = 'smallPictureImage';
  imgSmall4.onclick = function () {
    window.open(
      'https://www.facebook.com/Lindegaardenbnb/photos/?ref=page_internal'
    );
  };
  imgSmall4.src = 'images/udebord.jpeg';
  // imgSmall4.style.width = "48%"
  // imgSmall4.style.height = "48%"
  pictureFrameSmall.appendChild(imgSmall4);
}
