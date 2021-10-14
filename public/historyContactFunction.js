export function historyContactFunction(centeringBox) {

    const checkinBox = document.createElement('checkinBox');
    checkinBox.className = "info"
    centeringBox.appendChild(checkinBox);

    const checkinTitle = document.createElement('checkinTitle');
    checkinTitle.innerHTML = "Check in"
    checkinTitle.className = "infoTitle"
    checkinBox.appendChild(checkinTitle);

    const checkin = document.createElement('checkin');
    checkin.id = "checkinID"
        // checkin.innerHTML = "You can check in from kl. 14 and must be checked out the next day no later than kl. 12. <br> The price is incl. bed linen and towel. <br> Payment on mobilpay when booking or no later than 5 days before accommodation."
    checkinBox.appendChild(checkin);

    const kontaktBox = document.createElement('kontaktBox');
    kontaktBox.className = "info"
    centeringBox.appendChild(kontaktBox);

    const kontaktTitle = document.createElement('kontaktTitle');
    kontaktTitle.id = "kontaktTitleID"
        // kontaktTitle.innerHTML = "Info"
    kontaktTitle.className = "infoTitle"
    kontaktBox.appendChild(kontaktTitle);

    const kontakt = document.createElement('kontakt');
    kontakt.id = "kontaktID"
        // kontakt.innerHTML = "Lisbeth Hauptmann <br> <a href='https://goo.gl/maps/cdab5TEhM2XbmaeB9'> Herslev Bygade 1 4000 Roskilde </a> <br> Phone: <a href='tel:+4571707802'> 71707802 </a> <br> Send an email to <a href='mailto: lindegaardenbnb@gmail.com'> lindegaardenbnb@gmail.com </a>"
    kontaktBox.appendChild(kontakt);

    const map = document.createElement('map');
    map.id = "mapID";
    map.innerHTML = '<iframe id="iframID" src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d2250.1349683904064!2d11.9816905!3d55.6692531!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x2ea7cadb0da15111!2sLindeg%C3%A5rdens%20saloner%20-%20Bed%20and%20Breakfast!5e0!3m2!1sen!2sdk!4v1629639397078!5m2!1sen!2sdk" width="100%" height="600px" style="border:0;" allowfullscreen="" loading="lazy"></iframe>'
    centeringBox.appendChild(map);

    const settingBox = document.createElement('settingBox');
    settingBox.className = "info"
    centeringBox.appendChild(settingBox);

    const settingTitle = document.createElement('settingTitle');
    settingTitle.innerHTML = "Setting"
    settingTitle.className = "infoTitle"
    settingBox.appendChild(settingTitle);

    const setting = document.createElement('setting');
    setting.id = "settingID"
        // setting.innerHTML = "In Fjordland's fantastic nature and in the middle of the idyllic village Herslev, Lindegaarden is located on Herslev Bygade 1, next door to Herslev Bryghus and Friis Holm chocolate factory. Combine a beer tasting, a tour or communal dining at Bryghuset, with a cozy overnight stay in Lindegaarden's relaxing surroundings. <br> <a href='https://herslevbryghus.dk'> herslevbryghus.dk </a> <br> <br> It is possible to buy a beer from Herslev brewery, a bottle of wine or juice, chips and chocolate from the chocolate factory. <br> <br> The church and the bus stop are located directly opposite Lindegaarden and the lovely beach by Roskilde fjord, is within walking distance. The possibilities are many in the Fjordland, close to large forests, historical sights and beautiful cycle routes, but also close to the historic city of Roskilde. fair, eventful capital Copenhagen. <br> <br> At Lindegaarden there are 3 double rooms. There is also a large shared bathroom and a cozy dining and living room where you can play games or read in books and newspapers. <br> <br> In addition, there is a beautiful large garden with cozy nooks and space to move, a sandbox, campfire site and the most beautiful views with deer and birds, starry nights and silence. <br> <br> Lindegaarden also offers art exhibitions, concerts, lectures, yoga events etc. in the salon and sales of recycled furniture from Mortem Bizar in our large barn. The salon's calendar is also posted on our <a href='https://www.facebook.com/Lindegaardenbnb'> facebook page </a>. We have 2 cats that you are welcome to pet."
    settingBox.appendChild(setting);

}