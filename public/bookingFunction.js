export function bookingFunction(centeringBox, language) {

    const bookingFrameBlock = document.createElement('bookingFrameBlock');
    // bookingFrame.id = "bookingFrameID"
    centeringBox.appendChild(bookingFrameBlock);

    
    const bookingFrame = document.createElement('bookingFrame');
    bookingFrame.id = "bookingFrameID"
    bookingFrameBlock.appendChild(bookingFrame);

    const bookingFrameDescription = document.createElement('bookingFrameDescription');
    bookingFrameDescription.id = "bookingFrameDescriptionID"
    bookingFrame.appendChild(bookingFrameDescription);


    const breakfastTitle = document.createElement('breakfastTitle');
    breakfastTitle.id = "breakfastTitleID"
    breakfastTitle.className = "infoTitle"
    bookingFrameDescription.appendChild(breakfastTitle);


    const bookingFrameDescriptionText = document.createElement('bookingFrameDescriptionText');
    bookingFrameDescriptionText.id = "bookingFrameDescriptionTextID"
    bookingFrameDescription.appendChild(bookingFrameDescriptionText);

    const bookingFrameCost = document.createElement('bookingFrameCost');
    bookingFrameCost.id = "bookingFrameCostID"
    bookingFrame.appendChild(bookingFrameCost);



    const bookingDirect = document.createElement('a');
    bookingDirect.id = "bookingDirectID";
    bookingDirect.className = "bookingDirectClass";
    bookingDirect.innerHTML = "BOOK DIRECTLY"



    const bookingBottomButton = document.createElement('a');
    bookingBottomButton.id = "bookingBottomButtonID"
    bookingBottomButton.innerHTML = ""
    bookingBottomButton.className = "bookingDirectClass2"
    bookingBottomButton.href = "mailto: lindegaardenbnb@gmail.com?subject=Booking dates&body=Kære gæst.%0D%0DVelkommen til Lindegaardens booking på mail.%0D%0DSkriv blot hvilke værelse(r) der ønskes:%0D%0DHvor mange personer I er:%0D%0DOm der ønskes lækker økologisk morgenmad:%0D%0DHvilke nætter I ønsker at booke:%0D%0DTelefonnummer til kontakt:%0D%0DSkulle der være nogle spørgsmål er I velkomne til at ringe på 71707802 eller skriv her:%0D%0DVi glæder os til at tage imod jer%0D%0DDe bedste hilsner Lisbeth%0DLindegaardens Saloner%0DHerslev Bygade 1, Lejre%0D4000 Roskilde%0D"
    centeringBox.appendChild(bookingBottomButton);


    fetch('https://api.geoapify.com/v1/ipinfo?apiKey=fb0e13a6fe3b4773ab9d95edbbd12e7e')
        .then(resp => resp.json())
        .then((userLocationData) => {
            if (userLocationData.country.name == "Denmark") {
                bookingDirect.href = "mailto: lindegaardenbnb@gmail.com?subject=Booking dates&body=Kære gæst.%0D%0DVelkommen til Lindegaardens booking på mail.%0D%0DSkriv blot hvilke værelse(r) der ønskes:%0D%0DHvor mange personer I er:%0D%0DOm der ønskes lækker økologisk morgenmad:%0D%0DHvilke nætter I ønsker at booke:%0D%0DTelefonnummer til kontakt:%0D%0DSkulle der være nogle spørgsmål er I velkomne til at ringe på 71707802 eller skriv her:%0D%0DVi glæder os til at tage imod jer%0D%0DDe bedste hilsner Lisbeth%0DLindegaardens Saloner%0DHerslev Bygade 1, Lejre%0D4000 Roskilde%0D"

                sunRoom("650 kr / nat", "<i>Solværelset: </i>stor dobbeltseng<br>Mulig ekstra opredning af madras 200 kr.", "https://www.airbnb.dk/rooms/50245477?translate_ugc=false&federated_search_id=bf966e2b-73a5-45f9-a58c-e2c02d76cc21&source_impression_id=p3_1626532449_qutief9GI1VhK5Ii&guests=1&adults=1")

                skyRoom("575 kr / nat", "<i>Himmelrummet:</i> lille dobbeltseng", "https://www.airbnb.dk/rooms/50240587?translate_ugc=false&federated_search_id=bf966e2b-73a5-45f9-a58c-e2c02d76cc21&source_impression_id=p3_1626532448_dH7cpFG6Qv0cSTMe&guests=1&adults=1")

                studentRoom("575 kr / nat", "<i>Studerekammeret:</i> 2 enkelte senge, kan rykkes sammen", "https://www.airbnb.dk/rooms/50003907?translate_ugc=false&federated_search_id=bf966e2b-73a5-45f9-a58c-e2c02d76cc21&source_impression_id=p3_1626532449_F3oSvw5Pw%2BacT%2BOu&guests=1&adults=1")

            } else {
                bookingDirect.href = "mailto: lindegaardenbnb@gmail.com?subject=Booking dates&body=Dear Guest.%0D%0DWelcome to Lindegaarden's booking by email.%0D%0DJust write which room (s) you want:%0D%0DHow many people are you:%0D%0DIf you want a delicious organic breakfast:%0D%0DWhich nights do you want to book:%0D%0DPhone number for contact:%0D%0DShould there be any questions, you are welcome to call 71707802 or write here:%0D%0DWe look forward to welcoming you%0D%0DBest regards Lisbeth%0DLindegaardens Saloner%0DHerslev Bygade 1, Lejre%0D4000 Roskilde"

                sunRoom("89 euro / night ", "<i> Sun room: </i> large double bed <br> Possible extra bed mattress 28 euro.", "https://www.airbnb.dk/rooms/50245477?translate_ugc=false&federated_search_id=bf966e2b-73a5-45f9-a58c-e2c02d76cc21&source_impression_id=p3_1626532449_qutief9GI1VhK5Ii&guests=1&adults=1")

                skyRoom("79 euro / night ", "<i>The Sky room: </i> small double bed", "https://www.airbnb.dk/rooms/50240587?translate_ugc=false&federated_search_id=bf966e2b-73a5-45f9-a58c-e2c02d76cc21&source_impression_id=p3_1626532448_dH7cpFG6Qv0cSTMe&guests=1&adults=1")

                studentRoom("79 euro / night ", "<i>The Study room: </i> 2 single beds, can be moved together", "https://www.airbnb.dk/rooms/50003907?translate_ugc=false&federated_search_id=bf966e2b-73a5-45f9-a58c-e2c02d76cc21&source_impression_id=p3_1626532449_F3oSvw5Pw%2BacT%2BOu&guests=1&adults=1")
            }

            const bookingBorder = document.createElement('bookingBorder');
            bookingFrameCost.appendChild(bookingBorder);

            bookingFrameCost.appendChild(bookingDirect);

        });





    function sunRoom(cost, text, link) {
        const frameSunRoom = document.createElement('frameSunRoom');
        frameSunRoom.className = "roomFrame"
        bookingFrameCost.appendChild(frameSunRoom);

        const bookingCostSunRoom = document.createElement('bookingCostSunRoom');
        bookingCostSunRoom.id = "bookingCostSunRoomID"
        bookingCostSunRoom.className = "infoTitle"
        bookingCostSunRoom.innerHTML = cost;
        frameSunRoom.appendChild(bookingCostSunRoom);

        const bookingTextSunRoom = document.createElement('bookingTextSunRoom');
        bookingTextSunRoom.id = "bookingTextSunRoomID"
        bookingTextSunRoom.innerHTML = text;
        frameSunRoom.appendChild(bookingTextSunRoom);

        const bookingButton = document.createElement('bookingButton');
        bookingButton.id = "bookingButtonID"
        bookingButton.className = "bookingFrameCostButton"
        bookingButton.onclick = function() { airbnb(link) };
        bookingButton.innerHTML = "BOOK AIRBNB"
        frameSunRoom.appendChild(bookingButton);

        function airbnb(link) {
            window.open(link)
        }
    }

    function skyRoom(cost, text, link) {

        const frameSkyRoom = document.createElement('frameSkyRoom');
        frameSkyRoom.className = "roomFrame"
        bookingFrameCost.appendChild(frameSkyRoom);

        const bookingCostSkyRoom = document.createElement('bookingCostSkyRoom');
        bookingCostSkyRoom.id = "bookingCostSkyRoomID"
        bookingCostSkyRoom.className = "infoTitle"
        bookingCostSkyRoom.innerHTML = cost;
        frameSkyRoom.appendChild(bookingCostSkyRoom);

        const bookingTextSkyRoom = document.createElement('bookingTextSkyRoom');
        bookingTextSkyRoom.id = "bookingTextSkyRoomID"
        bookingTextSkyRoom.innerHTML = text;
        frameSkyRoom.appendChild(bookingTextSkyRoom);

        const bookingButton = document.createElement('bookingButton');
        bookingButton.id = "bookingButtonID"
        bookingButton.className = "bookingFrameCostButton"
        bookingButton.onclick = function() { airbnb(link) };
        bookingButton.innerHTML = "BOOK AIRBNB"
        frameSkyRoom.appendChild(bookingButton);

        function airbnb(link) {
            window.open(link)
        }
    }

    function studentRoom(cost, text, link) {
        const frameStudentRoom = document.createElement('frameStudentRoom');
        frameStudentRoom.className = "roomFrame"
        bookingFrameCost.appendChild(frameStudentRoom);

        const bookingCostStudentRoom = document.createElement('bookingCostStudentRoom');
        bookingCostStudentRoom.id = "bookingCostStudentRoomID"
        bookingCostStudentRoom.className = "infoTitle"
        bookingCostStudentRoom.innerHTML = cost;
        frameStudentRoom.appendChild(bookingCostStudentRoom);

        const bookingTextStudentRoom = document.createElement('bookingTextStudentRoom');
        bookingTextStudentRoom.id = "bookingTextStudentRoomID"
        bookingTextStudentRoom.innerHTML = text;
        frameStudentRoom.appendChild(bookingTextStudentRoom);

        const bookingButton = document.createElement('bookingButton');
        bookingButton.id = "bookingButtonID"
        bookingButton.className = "bookingFrameCostButton"
        bookingButton.onclick = function() { airbnb(link) };
        bookingButton.innerHTML = "BOOK AIRBNB"
        frameStudentRoom.appendChild(bookingButton);

        function airbnb(link) {
            window.open(link)
        }
    }

}