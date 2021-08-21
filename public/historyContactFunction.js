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
    map.innerHTML = '<iframe width="100%" height="600" style="border:0" loading="lazy" allowfullscreen src="https://www.google.com/maps/embed/v1/place?key=AIzaSyAZArLsmclItqyXw3PhFYDvfzWCq1ZVwj8&q=Herslev Bygade 1 4000 Roskilde"></iframe>'
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




    const feedbackBox = document.createElement('feedbackBox');
    feedbackBox.className = "info"
    centeringBox.appendChild(feedbackBox);

    // const feedbackTitle = document.createElement('feedbackTitle');
    // feedbackTitle.innerHTML = "Feedback"
    // feedbackTitle.className = "infoTitle"
    // feedbackBox.appendChild(feedbackTitle);

    const feedbackHeartBox = document.createElement('feedbackHeartBox');
    centeringBox.appendChild(feedbackHeartBox);

    const feedbackHeart1 = document.createElement('img');
    feedbackHeart1.id = "feedbackHeart1ID"
    feedbackHeart1.className = "heart"
    feedbackHeart1.onmouseover = function() { heartOver(1) };
    feedbackHeart1.onmouseleave = function() { heartLeave() };
    feedbackHeart1.src = "images/heart.svg";
    feedbackHeartBox.appendChild(feedbackHeart1);

    const feedbackHeart2 = document.createElement('img');
    feedbackHeart2.id = "feedbackHeart2ID"
    feedbackHeart2.className = "heart"
    feedbackHeart2.onmouseover = function() { heartOver(2) };
    feedbackHeart2.onmouseleave = function() { heartLeave() };
    feedbackHeart2.src = "images/heart.svg";
    feedbackHeartBox.appendChild(feedbackHeart2);

    const feedbackHeart3 = document.createElement('img');
    feedbackHeart3.id = "feedbackHeart3ID"
    feedbackHeart3.className = "heart"
    feedbackHeart3.onmouseover = function() { heartOver(3) };
    feedbackHeart3.onmouseleave = function() { heartLeave() };
    feedbackHeart3.src = "images/heart.svg";
    feedbackHeartBox.appendChild(feedbackHeart3);

    const feedbackHeart4 = document.createElement('img');
    feedbackHeart4.id = "feedbackHeart4ID"
    feedbackHeart4.className = "heart"
    feedbackHeart4.onmouseover = function() { heartOver(4) };
    feedbackHeart4.onmouseleave = function() { heartLeave() };
    feedbackHeart4.src = "images/heart.svg";
    feedbackHeartBox.appendChild(feedbackHeart4);

    const feedbackHeart5 = document.createElement('img');
    feedbackHeart5.id = "feedbackHeart5ID"
    feedbackHeart5.className = "heart"
    feedbackHeart5.onmouseover = function() { heartOver(5) };
    feedbackHeart5.onmouseleave = function() { heartLeave() };
    feedbackHeart5.src = "images/heart.svg";
    feedbackHeartBox.appendChild(feedbackHeart5);


    function heartOver(count) {
        if (count == 1) {
            document.getElementById("feedbackHeart1ID").src = "images/filledHeart.svg";
        } else if (count == 2) {
            document.getElementById("feedbackHeart1ID").src = "images/filledHeart.svg";
            document.getElementById("feedbackHeart2ID").src = "images/filledHeart.svg";
        } else if (count == 3) {
            document.getElementById("feedbackHeart1ID").src = "images/filledHeart.svg";
            document.getElementById("feedbackHeart2ID").src = "images/filledHeart.svg";
            document.getElementById("feedbackHeart3ID").src = "images/filledHeart.svg";
        } else if (count == 4) {
            document.getElementById("feedbackHeart1ID").src = "images/filledHeart.svg";
            document.getElementById("feedbackHeart2ID").src = "images/filledHeart.svg";
            document.getElementById("feedbackHeart3ID").src = "images/filledHeart.svg";
            document.getElementById("feedbackHeart4ID").src = "images/filledHeart.svg";
        } else if (count == 5) {
            document.getElementById("feedbackHeart1ID").src = "images/filledHeart.svg";
            document.getElementById("feedbackHeart2ID").src = "images/filledHeart.svg";
            document.getElementById("feedbackHeart3ID").src = "images/filledHeart.svg";
            document.getElementById("feedbackHeart4ID").src = "images/filledHeart.svg";
            document.getElementById("feedbackHeart5ID").src = "images/filledHeart.svg";
        }

    }

    function heartLeave() {
        document.getElementById("feedbackHeart1ID").src = "images/heart.svg";
        document.getElementById("feedbackHeart2ID").src = "images/heart.svg";
        document.getElementById("feedbackHeart3ID").src = "images/heart.svg";
        document.getElementById("feedbackHeart4ID").src = "images/heart.svg";
        document.getElementById("feedbackHeart5ID").src = "images/heart.svg";
        // if (count = 1) {
        //     document.getElementById("feedbackHeart1ID").src = "images/heart.svg";

        // } else if (count = 2) {
        //     document.getElementById("feedbackHeart1ID").src = "images/heart.svg";
        //     document.getElementById("feedbackHeart2ID").src = "images/heart.svg";
        // } else if (count = 3) {
        //     document.getElementById("feedbackHeart1ID").src = "images/heart.svg";
        //     document.getElementById("feedbackHeart2ID").src = "images/heart.svg";
        //     document.getElementById("feedbackHeart3ID").src = "images/heart.svg";
        // } else if (count = 4) {
        //     document.getElementById("feedbackHeart1ID").src = "images/heart.svg";
        //     document.getElementById("feedbackHeart2ID").src = "images/heart.svg";
        //     document.getElementById("feedbackHeart3ID").src = "images/heart.svg";
        //     document.getElementById("feedbackHeart4ID").src = "images/heart.svg";
        // } else if (count = 5) {
        //     document.getElementById("feedbackHeart1ID").src = "images/heart.svg";
        //     document.getElementById("feedbackHeart2ID").src = "images/heart.svg";
        //     document.getElementById("feedbackHeart3ID").src = "images/heart.svg";
        //     document.getElementById("feedbackHeart4ID").src = "images/heart.svg";
        //     document.getElementById("feedbackHeart5ID").src = "images/heart.svg";
        // }
    }





































    const languageBox = document.createElement('languageBox');
    centeringBox.appendChild(languageBox);

    const languageButtonDanish = document.createElement('img');
    languageButtonDanish.src = "images/DK.png";
    languageButtonDanish.className = "languageButton"
    languageButtonDanish.innerHTML = "Danish"
    languageButtonDanish.onclick = function() { toDanish(); };
    languageBox.appendChild(languageButtonDanish);

    const languageButtonEnglish = document.createElement('img');
    languageButtonEnglish.src = "images/UK.jpg";
    languageButtonEnglish.className = "languageButton"
    languageButtonEnglish.innerHTML = "English"
    languageButtonEnglish.onclick = function() { toEnglish(); };
    languageBox.appendChild(languageButtonEnglish);

    const paddingboxlol = document.createElement('paddingboxlol');
    centeringBox.appendChild(paddingboxlol);

    const bookingBottomButton = document.createElement('a');
    bookingBottomButton.id = "bookingBottomButtonID"
    bookingBottomButton.innerHTML = ""
    bookingBottomButton.className = "bookingDirectClass2"
    bookingBottomButton.href = "mailto: lindegaardenbnb@gmail.com?subject=Booking dates&body=Kære gæst.                              %0D%0DVelkommen til Lindegaardens booking på mail.%0DSkriv blot hvilke værelse(r) der ønskes:                              %0D%0DHvor mange personer I er:                              %0D%0Dom der ønskes lækker økologisk morgenmad:                              %0D%0DOg selvfølgelig hvilke nætter I ønsker at booke:                              %0D%0DSkulle der være nogle spørgsmål er I velkomne til at ringe på 71707802%0D%0DVi glæder os til at tage imod jer%0DDe bedste hilsner%0DLisbeth"
    centeringBox.appendChild(bookingBottomButton);

}

function toEnglish() {
    document.getElementById("subtitleDescriptionID").innerHTML = "A unique place in a fantastic nature and with its very own personality "
    document.getElementById("breakfastTitleID").innerHTML = "Organic breakfast 13 euro <br> Children half price";
    document.getElementById("bookingFrameDescriptionTextID").innerHTML = "2 kinds of cheeses or sausage, 1 slice of home-baked rye bread, 1 home-baked long-leavened bun, butter, jam, Greek yogurt with berries and homemade muesli, a piece of sweet, juice, tea or coffee. <br> <br> Upon request, the delicious breakfast is served between 7.30-10.30.";
    document.getElementById("checkinID").innerHTML = "You can check in from kl. 14 and must be checked out the next day no later than kl. 12. <br> The price is incl. bed linen and towel. <br> Payment on mobilpay when booking or no later than 5 days before accommodation.";
    document.getElementById("settingID").innerHTML = "In Fjordland's fantastic nature and in the middle of the idyllic village Herslev, Lindegaarden is located on Herslev Bygade 1, next door to Herslev Bryghus and Friis Holm chocolate factory. Combine a beer tasting, a tour or communal dining at Bryghuset, with a cozy overnight stay in Lindegaarden's relaxing surroundings. <br> <a href='https://herslevbryghus.dk'> herslevbryghus.dk </a> <br> <br> It is possible to buy a beer from Herslev brewery, a bottle of wine or juice, chips and chocolate from the chocolate factory. <br> <br> The church and the bus stop are located directly opposite Lindegaarden and the lovely beach by Roskilde fjord, is within walking distance. The possibilities are many in the Fjordland, close to large forests, historical sights and beautiful cycle routes, but also close to the historic city of Roskilde. fair, eventful capital Copenhagen. <br> <br> At Lindegaarden there are 3 double rooms. There is also a large shared bathroom and a cozy dining and living room where you can play games or read in books and newspapers. <br> <br> In addition, there is a beautiful large garden with cozy nooks and space to move, a sandbox, campfire site and the most beautiful views with deer and birds, starry nights and silence. <br> <br> Lindegaarden also offers art exhibitions, concerts, lectures, yoga events etc. in the salon and sales of recycled furniture from Mortem Bizar in our large barn. The salon's calendar is also posted on our <a href='https://www.facebook.com/Lindegaardenbnb'> facebook page </a>. We have 2 cats that you are welcome to pet.";
    document.getElementById("kontaktTitleID").innerHTML = "Info";
    document.getElementById("kontaktID").innerHTML = "Lisbeth Hauptmann <br> <a href='https://goo.gl/maps/cdab5TEhM2XbmaeB9'> Herslev Bygade 1 4000 Roskilde </a> <br> Phone: <a href='tel:+4571707802'> 71707802 </a> <br> Send an email to <a href='mailto: lindegaardenbnb@gmail.com'> lindegaardenbnb@gmail.com </a>";
    document.getElementById("bookingDirectID").innerHTML = "BOOK DIRECTLY";
    document.getElementById("bookingBottomButtonID").innerHTML = "BOOK DIRECTLY";

    document.getElementById("bookingDirectID").href = "mailto: lindegaardenbnb@gmail.com?subject=Booking dates&body=Dear guest.                              %0D%0DWelcome to Lindegaardens booking by mail.%0DPlease write the room(s) you wish for:                              %0D%0DHow many people you are:                              %0D%0DIf you wish for delicious organic breakfast:                              %0D%0DAnd of course what nights you wish to book:                              %0D%0DIf you have any questions, you are more than welcome to call 71707802 or mail right here.%0D%0DWe're excited to greet you%0DBest wishes%0DLisbeth";
    document.getElementById("bookingBottomButtonID").href = "mailto: lindegaardenbnb@gmail.com?subject=Booking dates&body=Dear guest.                              %0D%0DWelcome to Lindegaardens booking by mail.%0DPlease write the room(s) you wish for:                              %0D%0DHow many people you are:                              %0D%0DIf you wish for delicious organic breakfast:                              %0D%0DAnd of course what nights you wish to book:                              %0D%0DIf you have any questions, you are more than welcome to call 71707802 or mail right here.%0D%0DWe're excited to greet you%0DBest wishes%0DLisbeth";

    document.getElementById("bookingCostSunRoomID").innerHTML = "79 euro / night";
    document.getElementById("bookingTextSunRoomID").innerHTML = "<i> Sun room: </i> large double bed <br> Possible extra bed mattress 14 euro.";

    document.getElementById("bookingCostSkyRoomID").innerHTML = "65 euro / night";
    document.getElementById("bookingTextSkyRoomID").innerHTML = "<i>The Sky room: </i> small double bed";

    document.getElementById("bookingCostStudentRoomID").innerHTML = "65 euro / night";
    document.getElementById("bookingTextStudentRoomID").innerHTML = "<i>The Study room: </i> 2 single beds, can be moved together";

}

function toDanish() {
    document.getElementById("subtitleDescriptionID").innerHTML = "Et unikt sted i en fantastisk natur og med sin helt egen personlighed";
    document.getElementById("breakfastTitleID").innerHTML = "Økologisk morgenmad 96 kr<br>Børn halv pris";
    document.getElementById("bookingFrameDescriptionTextID").innerHTML = "2 slags oste eller pølse, 1 skive hjemmebagt rugbrød, 1 hjemmebagt langtidshævet bolle, smør, marmelade, græsk yoghurt med bær og hjemmelavet müsli, et stykke sødt, saft eller juice, the eller kaffe. <br><br>Efter ønske anrettes lækker morgenmad mellem 7.30-10.30.";
    document.getElementById("checkinID").innerHTML = "Der kan tjekkes ind fra kl. 14 og der skal tjekkes ud næste dag senest kl. 12.<br>Prisen er incl. sengelinned og håndklæde. <br>Der betales på mobilpay ved booking eller senest 5 dage før overnatning.";
    document.getElementById("settingID").innerHTML = "I Fjordlandets fantastiske natur og midt i den idylliske landsby Herslev, ligger Lindegaarden på Herslev Bygade 1, som nabo til Herslev Bryghus samt Friis Holm chokoladefabrik. Kombinèr en ølsmagning, en rundvisning eller fællesspisning på Bryghuset, med en hyggelig overnatning i Lindegaardens afslappende omgivelser.<br><a href='https://herslevbryghus.dk'>herslevbryghus.dk</a><br><br>Det er muligt at købe en øl fra Herslev bryghus, en flaske vin eller saft, chips og chokolade fra chokoladefabrikken. <br><br>Kirken og busstoppestedet ligger lige overfor Lindegaarden og den dejlige strand ved Roskilde fjord, er i gåafstand. Her kan I opleve et hyggeligt liv på den lille lystbådehavn samt fra badegæster der spiller beachvolley eller padler ud i kajak. Mulighederne er mange i Fjordlandet, tæt på store skove, historiske seværdigheder og smukke cykelruter, men også tæt på den historiske by Roskilde. Og ved blot en køretur på 45 minutter eller et smut med toget fra Roskilde, er man i vores dejlige, oplevelsesrige hovedstad København.<br><br>På Lindegaarden er der 3 dobbeltværelser. Der er desuden et stort fælles badeværelse og en hyggelig spise- og opholdsstue hvor der kan spilles spil eller læses i bøger og aviser. <br><br>Desuden er der en skøn stor have med hyggelige kroge og plads til at bevæge sig, en sandkasse, bålplads og den smukkeste udsigt med rådyr og fugle, stjerneklare nætter og stilhed. <br><br>Lindegaarden byder yderligere på kunstudstilling, koncerter, foredrag, yogaevents mm i salonen og salg af genbrugsmøbler fra Mortem Bizar i vores store lade. Salonens kalender bliver ligeledes slået op på vores <a href='https://www.facebook.com/Lindegaardenbnb'>facebook side</a>. Vi har 2 katte, som I er velkomne til at kæle med.";
    document.getElementById("kontaktTitleID").innerHTML = "Kontakt";
    document.getElementById("kontaktID").innerHTML = "Lisbeth Hauptmann <br><a href='https://goo.gl/maps/cdab5TEhM2XbmaeB9'>Herslev Bygade 1 4000 Roskilde</a><br>Ring på <a href='tel:+4571707802'>71707802</a><br>Send en mail på  <a href = 'mailto: lindegaardenbnb@gmail.com'>lindegaardenbnb@gmail.com</a>";
    document.getElementById("bookingDirectID").innerHTML = "BOOK DIREKTE";
    document.getElementById("bookingBottomButtonID").innerHTML = "BOOK DIREKTE";

    document.getElementById("bookingDirectID").href = "mailto: lindegaardenbnb@gmail.com?subject=Booking dates&body=Kære gæst.                              %0D%0DVelkommen til Lindegaardens booking på mail.%0DSkriv blot hvilke værelse(r) der ønskes:                              %0D%0DHvor mange personer I er:                              %0D%0Dom der ønskes lækker økologisk morgenmad:                              %0D%0DOg selvfølgelig hvilke nætter I ønsker at booke:                              %0D%0DSkulle der være nogle spørgsmål er I velkomne til at ringe på 71707802 eller skriv her.%0D%0DVi glæder os til at tage imod jer%0DDe bedste hilsner%0DLisbeth";
    document.getElementById("bookingBottomButtonID").href = "mailto: lindegaardenbnb@gmail.com?subject=Booking dates&body=Kære gæst.                              %0D%0DVelkommen til Lindegaardens booking på mail.%0DSkriv blot hvilke værelse(r) der ønskes:                              %0D%0DHvor mange personer I er:                              %0D%0Dom der ønskes lækker økologisk morgenmad:                              %0D%0DOg selvfølgelig hvilke nætter I ønsker at booke:                              %0D%0DSkulle der være nogle spørgsmål er I velkomne til at ringe på 71707802 eller skriv her.%0D%0DVi glæder os til at tage imod jer%0DDe bedste hilsner%0DLisbeth";

    document.getElementById("bookingCostSunRoomID").innerHTML = "575 kr / nat";
    document.getElementById("bookingTextSunRoomID").innerHTML = "<i>Solværelset: </i>stor dobbeltseng<br>Mulig ekstra opredning af madras 100 kr.";

    document.getElementById("bookingCostSkyRoomID").innerHTML = "475 kr / nat";
    document.getElementById("bookingTextSkyRoomID").innerHTML = "<i>Himmelrummet:</i> lille dobbeltseng";

    document.getElementById("bookingCostStudentRoomID").innerHTML = "475 kr / nat";
    document.getElementById("bookingTextStudentRoomID").innerHTML = "<i>Studerekammeret:</i> 2 enkelte senge, kan rykkes sammen";

}