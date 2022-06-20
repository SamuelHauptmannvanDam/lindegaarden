export function historyContactFunction(centeringBox) {
  const checkinBox = document.createElement('checkinBox');
  checkinBox.className = 'info';
  centeringBox.appendChild(checkinBox);

  const checkinTitle = document.createElement('checkinTitle');
  checkinTitle.innerHTML = 'Check in';
  checkinTitle.className = 'infoTitle';
  checkinBox.appendChild(checkinTitle);

  const checkin = document.createElement('checkin');
  checkin.id = 'checkinID';
  checkinBox.appendChild(checkin);

  const kontaktBox = document.createElement('kontaktBox');
  kontaktBox.className = 'info';
  centeringBox.appendChild(kontaktBox);

  const kontaktTitle = document.createElement('kontaktTitle');
  kontaktTitle.id = 'kontaktTitleID';
  // kontaktTitle.innerHTML = "Info"
  kontaktTitle.className = 'infoTitle';
  kontaktBox.appendChild(kontaktTitle);

  const kontakt = document.createElement('kontakt');
  kontakt.id = 'kontaktID';

  kontaktBox.appendChild(kontakt);

  const map = document.createElement('map');
  map.id = 'mapID';
  map.innerHTML =
    '<iframe id="iframID" src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d2250.1349683904064!2d11.9816905!3d55.6692531!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x2ea7cadb0da15111!2sLindeg%C3%A5rdens%20saloner%20-%20Bed%20and%20Breakfast!5e0!3m2!1sen!2sdk!4v1629639397078!5m2!1sen!2sdk" width="100%" height="600px" style="border:0;" allowfullscreen="" loading="lazy"></iframe>';
  centeringBox.appendChild(map);

  const settingBox = document.createElement('settingBox');
  settingBox.className = 'info';
  centeringBox.appendChild(settingBox);

  const settingTitle = document.createElement('settingTitle');
  settingTitle.innerHTML = 'Setting';
  settingTitle.className = 'infoTitle';
  settingBox.appendChild(settingTitle);

  const setting = document.createElement('setting');
  setting.id = 'settingID';
  settingBox.appendChild(setting);

  const rentBox = document.createElement('rentBox');
  rentBox.id = 'rentBoxID';
  rentBox.className = 'info';
  centeringBox.appendChild(rentBox);

  // const rentTitle = document.createElement('rentTitle');
  // rentTitle.innerHTML = "Leje af Lindegaardens Saloner"
  // rentTitle.className = "infoTitle"
  // rentBox.appendChild(rentTitle);

  // const rentDescription = document.createElement('rentDescription');
  // rentDescription.id = "rentDescriptionID"
  // rentBox.appendChild(rentDescription);
}
