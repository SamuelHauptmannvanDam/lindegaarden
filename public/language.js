export function language(centeringBox) {
  const languageBoxBlock = document.createElement('languageBoxBlock');
  centeringBox.appendChild(languageBoxBlock);

  const languageBox = document.createElement('languageBox');
  languageBoxBlock.appendChild(languageBox);

  const languageButtonDanish = document.createElement('img');
  languageButtonDanish.src = 'images/DK.png';
  languageButtonDanish.className = 'languageButton';
  languageButtonDanish.innerHTML = 'Danish';
  languageButtonDanish.onclick = function () {
    toDanish();
  };
  languageBox.appendChild(languageButtonDanish);

  const languageButtonEnglish = document.createElement('img');
  languageButtonEnglish.src = 'images/UK.jpg';
  languageButtonEnglish.className = 'languageButton';
  languageButtonEnglish.innerHTML = 'English';
  languageButtonEnglish.onclick = function () {
    toEnglish();
  };
  languageBox.appendChild(languageButtonEnglish);

  function toEnglish() {
    document.getElementById('feedbackTextMapsID').innerHTML =
      'Help us spread the word!';
    document.getElementById('feedbackButtonID').innerHTML = 'GIVE FEEDBACK';
    document.getElementById('feedbackButtonMapsID').innerHTML =
      'WRITE REVIEW ON GOOGLE MAPS';
    document.getElementById('feedbackTextID').innerHTML =
      "We're sorry, we clearly need the feedback to improve";
    // I DO THIS FIRST BECAUSE IT STOPS READING AFTER IT FAILS ON ONE OF THEM AND I CAN*T BE BOTHERED

    document.getElementById('subtitleDescriptionID').innerHTML =
      'A unique place in a fantastic nature and with its very own personality ';
    if (document.getElementById('breakfastTitleID') != null) {
      document.getElementById('breakfastTitleID').innerHTML =
        'Organic breakfast 19 euro <br> Children half price';
    }

    document.getElementById('bookingFrameDescriptionTextID').innerHTML =
      '2 kinds of cheeses or sausage, 1 slice of home-baked rye bread, 1 home-baked long-leavened bun, butter, homemade jam, greek yogurt with berries and homemade muesli, a piece of sweet, juice, tea or coffee. <br> <br> Upon request, the delicious breakfast is served between 7.30-10.30.';
    if (document.getElementById('checkinID') != null) {
      document.getElementById('checkinID').innerHTML =
        'You can check in from 13 and must be checked out the next day no later than 11. <br> The price is incl. bed linen and towel. <br> Payment on mobilpay when booking or no later than 10 days before accommodation.';
    }

    document.getElementById('settingID').innerHTML =
      "In Fjordland's fantastic nature and in the middle of the idyllic village Herslev, Lindegaarden is located on Herslev Bygade 1, next door to Herslev Bryghus and Friis Holm chocolate factory. Combine a beer tasting, a tour or communal dining at Bryghuset, with a cozy overnight stay in Lindegaarden's relaxing surroundings. <br> <a href='https://herslevbryghus.dk'> herslevbryghus.dk </a> <br> <br> It is possible to buy a beer from Herslev brewery, a bottle of wine or juice, chips and chocolate from the chocolate factory at Lindegaarden. <br> <br> The church and the bus stop are located directly opposite Lindegaarden and the lovely beach by Roskilde fjord, is within walking distance. The possibilities are many in the Fjordland, close to large forests, historical sights and beautiful cycle routes, but also close to the historic city of Roskilde. fair, eventful capital Copenhagen. <br> <br> At Lindegaarden there are 3 double rooms. There is also a large shared bathroom and a cozy dining and living room where you can play games or read in books and newspapers. <br> <br> In addition, there is a beautiful large garden with cozy nooks and space to move, a sandbox, campfire site and the most beautiful views with deer and birds, starry nights and silence. <br> <br> Lindegaarden also offers art exhibitions, concerts, lectures, yoga events etc. in the salon and sales of recycled furniture from Bizar vintage in our large barn. The salon's calendar is also posted on our <a href='https://www.facebook.com/Lindegaardenbnb'> facebook page </a>. We have 2 cats that you are welcome to pet.";
    document.getElementById('rentBoxID').style.display = 'none';
    document.getElementById('kontaktTitleID').innerHTML = 'Info';
    document.getElementById('kontaktID').innerHTML =
      "Lisbeth Hauptmann <br> <a href='https://goo.gl/maps/cdab5TEhM2XbmaeB9'> Herslev Bygade 1 4000 Roskilde </a> <br> Phone: <a href='tel:+4571707802'> 71707802 </a> <br> Send an email to <a href='mailto: lindegaardenbnb@gmail.com'> lindegaardenbnb@gmail.com </a>";
    document.getElementById('bookingDirectID').innerHTML = 'BOOK DIRECTLY';
    document.getElementById('bookingBottomButtonID').innerHTML =
      'BOOK DIRECTLY';
    document.getElementById('bookingDirectID').href =
      "mailto: lindegaardenbnb@gmail.com?subject=Booking dates&body=Dear Guest.%0D%0DWelcome to Lindegaarden's booking by email.%0D%0DJust write which room (s) you want:%0D%0DHow many people are you:%0D%0DIf you want a delicious organic breakfast:%0D%0DWhich nights do you want to book:%0D%0DPhone number for contact:%0D%0DShould there be any questions, you are welcome to call 71707802 or write here:%0D%0DWe look forward to welcoming you%0D%0DBest regards Lisbeth%0DLindegaardens Saloner%0DHerslev Bygade 1, Lejre%0D4000 Roskilde";
    document.getElementById('bookingBottomButtonID').href =
      "mailto: lindegaardenbnb@gmail.com?subject=Booking dates&body=Dear Guest.%0D%0DWelcome to Lindegaarden's booking by email.%0D%0DJust write which room (s) you want:%0D%0DHow many people are you:%0D%0DIf you want a delicious organic breakfast:%0D%0DWhich nights do you want to book:%0D%0DPhone number for contact:%0D%0DShould there be any questions, you are welcome to call 71707802 or write here:%0D%0DWe look forward to welcoming you%0D%0DBest regards Lisbeth%0DLindegaardens Saloner%0DHerslev Bygade 1, Lejre%0D4000 Roskilde";
    document.getElementById('bookingCostSunRoomID').innerHTML =
      '89 euro / night';
    document.getElementById('bookingTextSunRoomID').innerHTML =
      '<i> Sun room: </i> large double bed <br> Possible extra bed mattress 28 euro.';
    document.getElementById('bookingCostSkyRoomID').innerHTML =
      '79 euro / night';
    document.getElementById('bookingTextSkyRoomID').innerHTML =
      '<i>The Sky room: </i> small double bed';
    document.getElementById('bookingCostStudentRoomID').innerHTML =
      '79 euro / night';
    document.getElementById('bookingTextStudentRoomID').innerHTML =
      '<i>The Study room: </i> 2 single beds, can be moved together';
  }

  function toDanish() {
    document.getElementById('feedbackTextMapsID').innerHTML =
      'Hjælp os dele budskabet!';
    document.getElementById('feedbackButtonID').innerHTML = 'GIV FEEDBACK';
    document.getElementById('feedbackButtonMapsID').innerHTML =
      'SKRIV ANMELDELSE PÅ GOOGLE MAPS';
    document.getElementById('feedbackTextID').innerHTML =
      'Vi undskylder, vi har tydeligvis brug for feedback for at forbedre';
    // I DO THIS FIRST BECAUSE IT STOPS READING AFTER IT FAILS ON ONE OF THEM AND I CAN*T BE BOTHERED

    document.getElementById('subtitleDescriptionID').innerHTML =
      'Et unikt sted i en fantastisk natur og med sin helt egen personlighed';

    if (document.getElementById('breakfastTitleID') != null) {
      document.getElementById('breakfastTitleID').innerHTML =
        'Økologisk morgenmad 130 kr<br>Børn halv pris';
    }
    document.getElementById('bookingFrameDescriptionTextID').innerHTML =
      'Ost eller pølse, 1 skive hjemmebagt rugbrød, 1 hjemmebagt langtidshævet bolle, smør, hjemmelavet marmelade, græsk yoghurt med bær og hjemmelavet müsli, et stykke sødt, saft eller juice, the eller kaffe. <br><br>Efter ønske anrettes lækker morgenmad mellem 7.30-10.30.';
    if (document.getElementById('checkinID') != null) {
      document.getElementById('checkinID').innerHTML =
        'Der kan tjekkes ind fra kl. 13 og der skal tjekkes ud næste dag senest kl. 11.<br>Prisen er incl. sengelinned og håndklæde. <br>Der betales på mobilpay ved booking eller senest 10 dage før overnatning.';
    }
    document.getElementById('settingID').innerHTML =
      "I Fjordlandets fantastiske natur og midt i den idylliske landsby Herslev, ligger Lindegaarden på Herslev Bygade 1, som nabo til Herslev Bryghus samt Friis Holm chokoladefabrik. Kombinèr en ølsmagning, en rundvisning eller fællesspisning på Bryghuset, med en hyggelig overnatning i Lindegaardens afslappende omgivelser.<br><a href='https://herslevbryghus.dk'>herslevbryghus.dk</a><br><br>Det er muligt at købe en øl fra Herslev bryghus, en flaske vin eller saft og forskellige chips på Lindegaarden. <br><br>Kirken og busstoppestedet ligger lige overfor Lindegaarden og den dejlige strand ved Roskilde fjord, er i gåafstand. Her kan I opleve et hyggeligt liv på den lille lystbådehavn samt fra badegæster der spiller beachvolley eller padler ud i kajak. Mulighederne er mange i Fjordlandet, tæt på store skove, historiske seværdigheder og smukke cykelruter, men også tæt på den historiske by Roskilde. Og ved blot en køretur på 45 minutter eller et smut med toget fra Roskilde, er man i vores dejlige, oplevelsesrige hovedstad København.<br><br>På Lindegaarden er der 3 dobbeltværelser og en havehytte. Der er desuden et stort fælles badeværelse og en hyggelig spise- og opholdsstue hvor der kan spilles spil eller læses i bøger og aviser. <br><br>Desuden er der en skøn stor have med hyggelige kroge og plads til at bevæge sig, bålsteder og den smukkeste udsigt med rådyr og fugle, stjerneklare nætter og stilhed. <br><br>Lindegaarden byder yderligere på bl. a. kunstudstillinger og intimkoncerter, diverse begivenheder bliver opslået på vores <a href='https://www.facebook.com/Lindegaardenbnb'>facebook side</a>. Vi har 2 katte som I er velkomne til at kæle med.";

    document.getElementById('rentBoxID').style.display = 'block';
    if (document.getElementById('rentDescriptionID') != null) {
      document.getElementById('rentDescriptionID').innerHTML =
        'Vil du holde en familiefrokost eller andet hyggeligt arrangement, kan du leje Lindegaardens stemningsfulde Saloner.<br>Det koster 1.800 kr i tidsrummet fra kl. 11.00 – 22.00.<br>Lejer man både Salonerne og de 3 værelser til en overnatning, koster det i alt 4.000 kr. <br><br>Udover den store spisestue med udgang til den fine, gamle have med terrasse og bålplads, hvor I er velkomne til at sætte jer ud – er der adgang til toilet samt en tilstødende hyggelig opholdsstue med køleskab, fryser, mikrobølgeovn, elkedel og kaffemaskine med filtre.<br><br>Der er 2 langborde med stole og service til 30 personer, samt et anretterbord.  Uanset om I bestiller mad udefra eller selv medbringer, tager vi os af opvasken. I skal blot selv samle servicen og stille på det anviste sted, fjerne madrester og tømme skraldespande. Husk vi sorterer.<br><br>Vi har store tallerkener, dybe – samt desserttallerkener, kopper, underkopper og kage-asietter, vin-, dessertvin-, champagne-, øl- og vandglas. Desuden vandkarafler, bestik, Bodum kaffekander, thekander, skåle, fade, lysestager og vaser. Der er en kulgrill, brænde, pinde til snobrød og pander til pandekager.<br><br>Medbring selv duge, servietter, stearinlys og kul hvis I skal grille samt alt hvad der skal indtages af mad og drikke. I skal selv dække bordene.<br><br>Vælger jeres gæster at indkvartere sig for natten i vores hyggelige værelser, er det naturligvis muligt at bestille morgenmad dagen efter.<br><br>Efterlad stedet så opryddeligt, som I finder det. Vi tager os af rengøringen.';
    }

    document.getElementById('kontaktTitleID').innerHTML = 'Kontakt';
    document.getElementById('kontaktID').innerHTML =
      "Lisbeth Hauptmann <br><a href='https://goo.gl/maps/cdab5TEhM2XbmaeB9'>Herslev Bygade 1 4000 Roskilde</a><br>Ring på <a href='tel:+4571707802'>71707802</a><br>Send en mail på  <a href = 'mailto: lindegaardenbnb@gmail.com'>lindegaardenbnb@gmail.com</a>";
    document.getElementById('bookingDirectID').innerHTML = 'BOOK DIREKTE';
    document.getElementById('bookingBottomButtonID').innerHTML = 'BOOK DIREKTE';
    document.getElementById('bookingDirectID').href =
      'mailto: lindegaardenbnb@gmail.com?subject=Booking dates&body=Kære gæst.%0D%0DVelkommen til Lindegaardens booking på mail.%0D%0DSkriv blot hvilke værelse(r) der ønskes:%0D%0DHvor mange personer I er:%0D%0DOm der ønskes lækker økologisk morgenmad:%0D%0DHvilke nætter I ønsker at booke:%0D%0DTelefonnummer til kontakt:%0D%0DSkulle der være nogle spørgsmål er I velkomne til at ringe på 71707802 eller skriv her:%0D%0DVi glæder os til at tage imod jer%0D%0DDe bedste hilsner Lisbeth%0DLindegaardens Saloner%0DHerslev Bygade 1, Lejre%0D4000 Roskilde%0D';
    document.getElementById('bookingBottomButtonID').href =
      'mailto: lindegaardenbnb@gmail.com?subject=Booking dates&body=Kære gæst.%0D%0DVelkommen til Lindegaardens booking på mail.%0D%0DSkriv blot hvilke værelse(r) der ønskes:%0D%0DHvor mange personer I er:%0D%0DOm der ønskes lækker økologisk morgenmad:%0D%0DHvilke nætter I ønsker at booke:%0D%0DTelefonnummer til kontakt:%0D%0DSkulle der være nogle spørgsmål er I velkomne til at ringe på 71707802 eller skriv her:%0D%0DVi glæder os til at tage imod jer%0D%0DDe bedste hilsner Lisbeth%0DLindegaardens Saloner%0DHerslev Bygade 1, Lejre%0D4000 Roskilde%0D';
    document.getElementById('bookingCostSunRoomID').innerHTML = '650 kr / nat';
    document.getElementById('bookingTextSunRoomID').innerHTML =
      '<i>Solværelset: </i>stor dobbeltseng<br>Mulig ekstra opredning af gæsteseng 200 kr.';
    document.getElementById('bookingCostSkyRoomID').innerHTML = '575 kr / nat';
    document.getElementById('bookingTextSkyRoomID').innerHTML =
      '<i>Himmelrummet:</i> lille dobbeltseng';
  }
}

export function languageFeedback(centeringBox) {
  const languageBox = document.createElement('languageBox');
  centeringBox.appendChild(languageBox);

  const languageButtonDanish = document.createElement('img');
  languageButtonDanish.src = 'images/DK.png';
  languageButtonDanish.className = 'languageButton';
  languageButtonDanish.innerHTML = 'Danish';
  languageButtonDanish.onclick = function () {
    toDanish();
  };
  languageBox.appendChild(languageButtonDanish);

  const languageButtonEnglish = document.createElement('img');
  languageButtonEnglish.src = 'images/UK.jpg';
  languageButtonEnglish.className = 'languageButton';
  languageButtonEnglish.innerHTML = 'English';
  languageButtonEnglish.onclick = function () {
    toEnglish();
  };
  languageBox.appendChild(languageButtonEnglish);

  function toEnglish() {
    document.getElementById('feedbackTextMapsID').innerHTML =
      'Help us spread the word!';
    document.getElementById('feedbackButtonID').innerHTML = 'GIVE FEEDBACK';
    document.getElementById('feedbackButtonMapsID').innerHTML =
      'WRITE REVIEW ON GOOGLE MAPS';
    document.getElementById('feedbackTextID').innerHTML =
      "We're sorry, we clearly need the feedback to improve";
    // I DO THIS FIRST BECAUSE IT STOPS READING AFTER IT FAILS ON ONE OF THEM AND I CAN*T BE BOTHERED

    document.getElementById('subtitleDescriptionID').innerHTML =
      'A unique place in a fantastic nature and with its very own personality ';
  }

  function toDanish() {
    document.getElementById('feedbackTextMapsID').innerHTML =
      'Hjælp os dele budskabet!';
    document.getElementById('feedbackButtonID').innerHTML = 'GIV FEEDBACK';
    document.getElementById('feedbackButtonMapsID').innerHTML =
      'SKRIV ANMELDELSE PÅ GOOGLE MAPS';
    document.getElementById('feedbackTextID').innerHTML =
      'Vi undskylder, vi har tydeligvis brug for feedback for at forbedre';
    // I DO THIS FIRST BECAUSE IT STOPS READING AFTER IT FAILS ON ONE OF THEM AND I CAN*T BE BOTHERED

    document.getElementById('subtitleDescriptionID').innerHTML =
      'Et unikt sted i en fantastisk natur og med sin helt egen personlighed';
  }

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
}

export function toEnglish() {
  document.getElementById('feedbackTextMapsID').innerHTML =
    'Help us spread the word!';
  document.getElementById('feedbackButtonID').innerHTML = 'GIVE FEEDBACK';
  document.getElementById('feedbackButtonMapsID').innerHTML =
    'WRITE REVIEW ON GOOGLE MAPS';
  document.getElementById('feedbackTextID').innerHTML =
    "We're sorry, we clearly need the feedback to improve";
  // I DO THIS FIRST BECAUSE IT STOPS READING AFTER IT FAILS ON ONE OF THEM AND I CAN*T BE BOTHERED

  document.getElementById('subtitleDescriptionID').innerHTML =
    'A unique place in a fantastic nature and with its very own personality ';
  if (document.getElementById('breakfastTitleID') != null) {
    document.getElementById('breakfastTitleID').innerHTML =
      'Organic breakfast 19 euro <br> Children half price';
  }
  document.getElementById('bookingFrameDescriptionTextID').innerHTML =
    '2 kinds of cheeses or sausage, 1 slice of home-baked rye bread, 1 home-baked long-leavened bun, butter, jam, Greek yogurt with berries and homemade muesli, a piece of sweet, juice, tea or coffee. <br> <br> Upon request, the delicious breakfast is served between 7.30-10.30.';
  if (document.getElementById('checkinID') != null) {
    document.getElementById('checkinID').innerHTML =
      'You can check in from 13 and must be checked out the next day no later than 11. <br> The price is incl. bed linen and towel. <br> Payment on mobilpay when booking or no later than 10 days before accommodation.';
  }

  document.getElementById('settingID').innerHTML =
    "In Fjordland's fantastic nature and in the middle of the idyllic village Herslev, Lindegaarden is located on Herslev Bygade 1, next door to Herslev Bryghus and Friis Holm chocolate factory. Combine a beer tasting, a tour or communal dining at Bryghuset, with a cozy overnight stay in Lindegaarden's relaxing surroundings. <br> <a href='https://herslevbryghus.dk'> herslevbryghus.dk </a> <br> <br> It is possible to buy a beer from Herslev brewery, a bottle of wine or juice, chips and chocolate from the chocolate factory at Lindegaarden. <br> <br> The church and the bus stop are located directly opposite Lindegaarden and the lovely beach by Roskilde fjord, is within walking distance. The possibilities are many in the Fjordland, close to large forests, historical sights and beautiful cycle routes, but also close to the historic city of Roskilde. fair, eventful capital Copenhagen. <br> <br> At Lindegaarden there are 3 double rooms. There is also a large shared bathroom and a cozy dining and living room where you can play games or read in books and newspapers. <br> <br> In addition, there is a beautiful large garden with cozy nooks and space to move, a sandbox, campfire site and the most beautiful views with deer and birds, starry nights and silence. <br> <br> Lindegaarden also offers art exhibitions, concerts, lectures, yoga events etc. in the salon and sales of recycled furniture from Bizar vintage in our large barn. The salon's calendar is also posted on our <a href='https://www.facebook.com/Lindegaardenbnb'> facebook page </a>. We have 2 cats that you are welcome to pet.";

  document.getElementById('rentBoxID').style.display = 'none';

  document.getElementById('kontaktTitleID').innerHTML = 'Info';
  document.getElementById('kontaktID').innerHTML =
    "Lisbeth Hauptmann <br> <a href='https://goo.gl/maps/cdab5TEhM2XbmaeB9'> Herslev Bygade 1 4000 Roskilde </a> <br> Phone: <a href='tel:+4571707802'> 71707802 </a> <br> Send an email to <a href='mailto: lindegaardenbnb@gmail.com'> lindegaardenbnb@gmail.com </a>";
  document.getElementById('bookingDirectID').innerHTML = 'BOOK DIRECTLY';
  document.getElementById('bookingBottomButtonID').innerHTML = 'BOOK DIRECTLY';
  document.getElementById('bookingDirectID').href =
    "mailto: lindegaardenbnb@gmail.com?subject=Booking dates&body=Dear Guest.%0D%0DWelcome to Lindegaarden's booking by email.%0D%0DJust write which room (s) you want:%0D%0DHow many people are you:%0D%0DIf you want a delicious organic breakfast:%0D%0DWhich nights do you want to book:%0D%0DPhone number for contact:%0D%0DShould there be any questions, you are welcome to call 71707802 or write here:%0D%0DWe look forward to welcoming you%0D%0DBest regards Lisbeth%0DLindegaardens Saloner%0DHerslev Bygade 1, Lejre%0D4000 Roskilde";
  document.getElementById('bookingBottomButtonID').href =
    "mailto: lindegaardenbnb@gmail.com?subject=Booking dates&body=Dear Guest.%0D%0DWelcome to Lindegaarden's booking by email.%0D%0DJust write which room (s) you want:%0D%0DHow many people are you:%0D%0DIf you want a delicious organic breakfast:%0D%0DWhich nights do you want to book:%0D%0DPhone number for contact:%0D%0DShould there be any questions, you are welcome to call 71707802 or write here:%0D%0DWe look forward to welcoming you%0D%0DBest regards Lisbeth%0DLindegaardens Saloner%0DHerslev Bygade 1, Lejre%0D4000 Roskilde";
  document.getElementById('bookingCostSunRoomID').innerHTML = '89 euro / night';
  document.getElementById('bookingTextSunRoomID').innerHTML =
    '<i> Sun room: </i> large double bed <br> Possible extra bed mattress 28 euro.';
  document.getElementById('bookingCostSkyRoomID').innerHTML = '79 euro / night';
  document.getElementById('bookingTextSkyRoomID').innerHTML =
    '<i>The Sky room: </i> small double bed';
  document.getElementById('bookingCostStudentRoomID').innerHTML =
    '79 euro / night';
  document.getElementById('bookingTextStudentRoomID').innerHTML =
    '<i>The Study room: </i> 2 single beds, can be moved together';
}

export function toDanish() {
  document.getElementById('feedbackTextMapsID').innerHTML =
    'Hjælp os dele budskabet!';
  document.getElementById('feedbackButtonID').innerHTML = 'GIV FEEDBACK';
  document.getElementById('feedbackButtonMapsID').innerHTML =
    'SKRIV ANMELDELSE PÅ GOOGLE MAPS';
  document.getElementById('feedbackTextID').innerHTML =
    'Vi undskylder, vi har tydeligvis brug for feedback for at forbedre';
  // I DO THIS FIRST BECAUSE IT STOPS READING AFTER IT FAILS ON ONE OF THEM AND I CAN*T BE BOTHERED

  document.getElementById('subtitleDescriptionID').innerHTML =
    'Et unikt sted i en fantastisk natur og med sin helt egen personlighed';
  if (document.getElementById('breakfastTitleID') != null) {
    document.getElementById('breakfastTitleID').innerHTML =
      'Økologisk morgenmad 130 kr<br>Børn halv pris';
  }
  document.getElementById('bookingFrameDescriptionTextID').innerHTML =
    'Ost eller pølse, 1 skive hjemmebagt rugbrød, 1 hjemmebagt langtidshævet bolle, smør, hjemmelavet marmelade, græsk yoghurt med bær og hjemmelavet müsli, et stykke sødt, saft eller juice, the eller kaffe. <br><br>Efter ønske anrettes lækker morgenmad mellem 7.30-10.30.';

  if (document.getElementById('checkinID') != null) {
    document.getElementById('checkinID').innerHTML =
      'Der kan tjekkes ind fra kl. 13 og der skal tjekkes ud næste dag senest kl. 11.<br>Prisen er incl. sengelinned og håndklæde. <br>Der betales på mobilpay ved booking eller senest 10 dage før overnatning.';
  }

  document.getElementById('settingID').innerHTML =
    "I Fjordlandets fantastiske natur og midt i den idylliske landsby Herslev, ligger Lindegaarden på Herslev Bygade 1, som nabo til Herslev Bryghus samt Friis Holm chokoladefabrik. Kombinèr en ølsmagning, en rundvisning eller fællesspisning på Bryghuset, med en hyggelig overnatning i Lindegaardens afslappende omgivelser.<br><a href='https://herslevbryghus.dk'>herslevbryghus.dk</a><br><br>Det er muligt at købe en øl fra Herslev bryghus, en flaske vin eller saft og forskellige chips på Lindegaarden. <br><br>Kirken og busstoppestedet ligger lige overfor Lindegaarden og den dejlige strand ved Roskilde fjord, er i gåafstand. Her kan I opleve et hyggeligt liv på den lille lystbådehavn samt fra badegæster der spiller beachvolley eller padler ud i kajak. Mulighederne er mange i Fjordlandet, tæt på store skove, historiske seværdigheder og smukke cykelruter, men også tæt på den historiske by Roskilde. Og ved blot en køretur på 45 minutter eller et smut med toget fra Roskilde, er man i vores dejlige, oplevelsesrige hovedstad København.<br><br>På Lindegaarden er der 3 dobbeltværelser og en havehytte. Der er desuden et stort fælles badeværelse og en hyggelig spise- og opholdsstue hvor der kan spilles spil eller læses i bøger og aviser. <br><br>Desuden er der en skøn stor have med hyggelige kroge og plads til at bevæge sig, bålsteder og den smukkeste udsigt med rådyr og fugle, stjerneklare nætter og stilhed. <br><br>Lindegaarden byder yderligere på bl. a. kunstudstillinger og intimkoncerter, diverse begivenheder bliver opslået på vores <a href='https://www.facebook.com/Lindegaardenbnb'>facebook side</a>. Vi har 2 katte som I er velkomne til at kæle med.";

  document.getElementById('rentBoxID').style.display = 'block';
  if (document.getElementById('rentDescriptionID') != null) {
    document.getElementById('rentDescriptionID').innerHTML =
      'Vil du holde en familiefrokost eller andet hyggeligt arrangement, kan du leje Lindegaardens stemningsfulde Saloner.<br>Det koster 1.800 kr i tidsrummet fra kl. 11.00 – 22.00.<br>Lejer man både Salonerne og de 3 værelser til en overnatning, koster det i alt 3.300 kr. <br><br>Udover den store spisestue med udgang til den fine, gamle have med terrasse og bålplads, hvor I er velkomne til at sætte jer ud – er der adgang til toilet samt en tilstødende hyggelig opholdsstue med køleskab, fryser, mikrobølgeovn, elkedel og kaffemaskine med filtre.<br><br>Der er 2 langborde med stole og service til 30 personer, samt et anretterbord.  Uanset om I bestiller mad udefra eller selv medbringer, tager vi os af opvasken. I skal blot selv samle servicen og stille på det anviste sted, fjerne madrester og tømme skraldespande. Husk vi sorterer.<br><br>Vi har store tallerkener, dybe – samt desserttallerkener, kopper, underkopper og kage-asietter, vin-, dessertvin-, champagne-, øl- og vandglas. Desuden vandkarafler, bestik, Bodum kaffekander, thekander, skåle, fade, lysestager og vaser. Der er en kulgrill, brænde, pinde til snobrød og pander til pandekager.<br><br>Medbring selv duge, servietter, stearinlys og kul hvis I skal grille samt alt hvad der skal indtages af mad og drikke. I skal selv dække bordene.<br><br>Vælger jeres gæster at indkvartere sig for natten i vores hyggelige værelser, er det naturligvis muligt at bestille morgenmad dagen efter.<br><br>Efterlad stedet så opryddeligt, som I finder det. Vi tager os af rengøringen.';
  }

  document.getElementById('kontaktTitleID').innerHTML = 'Kontakt';
  document.getElementById('kontaktID').innerHTML =
    "Lisbeth Hauptmann <br><a href='https://goo.gl/maps/cdab5TEhM2XbmaeB9'>Herslev Bygade 1 4000 Roskilde</a><br>Ring på <a href='tel:+4571707802'>71707802</a><br>Send en mail på  <a href = 'mailto: lindegaardenbnb@gmail.com'>lindegaardenbnb@gmail.com</a>";
  document.getElementById('bookingDirectID').innerHTML = 'BOOK DIREKTE';
  document.getElementById('bookingBottomButtonID').innerHTML = 'BOOK DIREKTE';
  document.getElementById('bookingDirectID').href =
    'mailto: lindegaardenbnb@gmail.com?subject=Booking dates&body=Kære gæst.%0D%0DVelkommen til Lindegaardens booking på mail.%0D%0DSkriv blot hvilke værelse(r) der ønskes:%0D%0DHvor mange personer I er:%0D%0DOm der ønskes lækker økologisk morgenmad:%0D%0DHvilke nætter I ønsker at booke:%0D%0DTelefonnummer til kontakt:%0D%0DSkulle der være nogle spørgsmål er I velkomne til at ringe på 71707802 eller skriv her:%0D%0DVi glæder os til at tage imod jer%0D%0DDe bedste hilsner Lisbeth%0DLindegaardens Saloner%0DHerslev Bygade 1, Lejre%0D4000 Roskilde%0D';
  document.getElementById('bookingBottomButtonID').href =
    'mailto: lindegaardenbnb@gmail.com?subject=Booking dates&body=Kære gæst.%0D%0DVelkommen til Lindegaardens booking på mail.%0D%0DSkriv blot hvilke værelse(r) der ønskes:%0D%0DHvor mange personer I er:%0D%0DOm der ønskes lækker økologisk morgenmad:%0D%0DHvilke nætter I ønsker at booke:%0D%0DTelefonnummer til kontakt:%0D%0DSkulle der være nogle spørgsmål er I velkomne til at ringe på 71707802 eller skriv her:%0D%0DVi glæder os til at tage imod jer%0D%0DDe bedste hilsner Lisbeth%0DLindegaardens Saloner%0DHerslev Bygade 1, Lejre%0D4000 Roskilde%0D';
  document.getElementById('bookingCostSunRoomID').innerHTML = '650 kr / nat';
  document.getElementById('bookingTextSunRoomID').innerHTML =
    '<i>Solværelset: </i>stor dobbeltseng<br>Mulig ekstra opredning af gæsteseng 200 kr.';
  document.getElementById('bookingCostSkyRoomID').innerHTML = '575 kr / nat';
  document.getElementById('bookingTextSkyRoomID').innerHTML =
    '<i>Himmelrummet:</i> lille dobbeltseng';
}
