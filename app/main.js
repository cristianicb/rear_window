// ANCHOR GLOBAL VARIABLES

let randomText = document.getElementById("randomText");
let user = document.getElementById("user");
let dataBase = document.getElementById("dataBase");
let menu = document.getElementById("menu");
let menuWindow = document.getElementById("menuWindow");

let userFacePic = document.getElementById("facePic");
let userLastSeen = document.getElementById("lastSeen");

let userLastSeenDate = document.getElementById("lastSeenDate");
let userLastSeenPlace = document.getElementById("lastSeenPlace");

let userName = document.getElementById("name");
let userLastName = document.getElementById("lastName");
let userBday = document.getElementById("bDay");
let userGender = document.getElementById("gender");
let userId = document.getElementById("id");

let userMarried = document.getElementById("married");
let userSpouceFirstName = document.getElementById("spouceFirstName");
let userSpouceLastName = document.getElementById("spouceLastName");
let userSppouceState = document.getElementById("spouceState");

let userPhone = document.getElementById("phone");
let userCity = document.getElementById("city");
let userPosition = document.getElementById("position");
let userEmail = document.getElementById("email");
let userPass = document.getElementById("pass");
let userUrl = document.getElementById("url");



let userJob = document.getElementById("job");
let userMoney = document.getElementById("money");
let userIban = document.getElementById("iban");
let userBic = document.getElementById("bankBic");
let userBankPass = document.getElementById("bankPass");





let userParents = document.getElementById("parents");
let userSons = document.getElementById("sons");
let userSonsNames = document.getElementById("sonsNames");
let userFriends = document.getElementById("friends");
let userEnemies = document.getElementById("enemies");
let userFavCol = document.getElementById("favCol");





let userFears = document.getElementById("fears");
let userHack01 = document.getElementById("hack01");
let userOtherData = document.querySelectorAll(".otherData")

let avatar = document.getElementById("avatar");

let wordString = "";
let wordsNumber = 1000;



// ANCHOR Create random words

for (var o = 0; o < wordsNumber; o++) {

    function makeid(length) {
        wordString += "<a>";
        var characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
        var charactersLength = characters.length;

        for (var i = 0; i < length; i++) {
            wordString += characters.charAt(Math.floor(Math.random() * charactersLength));
        }
        wordString += "</a>";
    }

    let randomWordLength = Math.floor(Math.random() * 10) + 1;
    makeid(randomWordLength);
}

randomText.innerHTML = wordString;

let allWords = document.querySelectorAll("a");


// const gd = (id, n, sn) => {
//     id.innerHTML = faker.n.sn();
// }

let usersToDate = 6032343056;
window.setInterval(
    function() {
        usersToDate += Math.floor(Math.random() * 50) + 1;
        dataBase.innerHTML = "Subjects to date: " + usersToDate;
    }, 1000);

dataBase.innerHTML = "Subjects to date: " + usersToDate;


// ANCHOR Make the word do stuff


menu.onclick = function() {

    if (menuWindow.style.display == "block") {
        menuWindow.style.display = "none";
    } else {
        menuWindow.style.display = "block";
    }
}

for (i = 0; i < allWords.length; i++) {

    allWords[i].onmouseover = function() {
        this.style.color = "red";
    }
    allWords[i].onmouseout = function() {
        this.style.color = "#006600";
    }



    allWords[i].onclick = function() {
        // ANCHOR Random data
        this.style.color = "#006600";

        // 01

        userName.innerHTML = faker.name.firstName();

        let userFirstLastName = faker.name.lastName()
        userLastName.innerHTML = userFirstLastName + " " + faker.name.lastName();

        function randomDate(start, end) {
            return new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime()));
        }
        userBday.innerHTML = randomDate(new Date(1950, 0, 1), new Date(1990, 0, 1));
        userGender.innerHTML = faker.name.gender();

        function makeidNumber(length) {
            var result = '';
            var characters = '0123456789';
            var charactersLength = characters.length;
            for (var i = 0; i < length; i++) {
                result += characters.charAt(Math.floor(Math.random() * charactersLength));
            }
            return result;
        }

        userId.innerHTML = faker.random.arrayElement().toUpperCase() + "-" + makeidNumber(7);

        // 02 -- MARRIED

        var randomMarried = Math.random() < 0.5;
        let userSpouceFirstLastName = faker.name.lastName();

        if (randomMarried == true) {
            userMarried.innerHTML = "True";
            userSpouceFirstName.innerHTML = faker.name.firstName();
            userSpouceLastName.innerHTML = userSpouceFirstLastName + " " + faker.name.lastName();
            userSppouceState.innerHTML = "";
        } else {
            userMarried.innerHTML = "False";
            userSpouceFirstName.innerHTML = "NaN";
            userSpouceLastName.innerHTML = "NaN";


            let spouceState = ["Badly Divorced", "Divorced Well", "Widower", "Murdered Spouse", "Spouce Missing"]
            let randomSpouceState = Math.floor(Math.random() * 4);

            userSppouceState.innerHTML = spouceState[randomSpouceState];
        }



        // 03 

        userPhone.innerHTML = faker.phone.phoneNumber();
        userCity.innerHTML = faker.address.country() + ", " + faker.address.city() + ", " + faker.address.streetAddress() + ", " + faker.address.secondaryAddress();
        userPosition.innerHTML = faker.address.nearbyGPSCoordinate() + " / " + faker.address.nearbyGPSCoordinate() + " / " + faker.address.direction();
        userEmail.innerHTML = userName.innerHTML.toLowerCase().replace(/\s/g, '') + "_" + faker.random.number() + "@" + faker.internet.email().split('@')[1];
        userPass.innerHTML = faker.internet.password();
        userUrl.innerHTML = "https://" + userName.innerHTML.toLowerCase().replace(/\s/g, '') + ".info";

        // 04 -- JOB & MONEY

        userJob.innerHTML = faker.name.jobTitle();
        userMoney.innerHTML = faker.finance.amount() * 1000000 + " " + faker.finance.currencySymbol();
        userIban.innerHTML = faker.finance.iban();
        userBic.innerHTML = makeidNumber(3);
        userBankPass.innerHTML = makeidNumber(4);

        // 05

        function life(length) {
            var result = '';
            var characters = 'DA';
            var charactersLength = characters.length;
            for (var i = 0; i < length; i++) {
                result += characters.charAt(Math.floor(Math.random() * charactersLength));
            }
            return result;
        }


        userParents.innerHTML = faker.name.findName() + " /" + life(1) + "/" + ", " + faker.name.findName() + " /" + life(1) + "/ ";
        sons = Math.floor(Math.random() * 4);
        userSons.innerHTML = sons;

        let sonsNamesString = "";
        for (i = 0; i < sons; i++) {
            sonsNamesString += faker.name.firstName() + " " + userFirstLastName + " " + userSpouceFirstLastName + " /" + life(1) + "/" + ", ";
        }

        userSonsNames.innerHTML = sonsNamesString;
        userFriends.innerHTML = faker.name.findName() + ", " + faker.name.findName() + ", " + faker.name.findName();
        userEnemies.innerHTML = faker.name.findName() + ", " + faker.name.findName() + ", " + faker.name.findName();

        userFavCol.innerHTML = faker.commerce.color();
        userFears.innerHTML = faker.random.word() + ", " + faker.random.word() + ", " + faker.random.word();


        userHack01.innerHTML = faker.system.fileName();


        userOtherData[0].innerHTML = faker.vehicle.vehicle();
        userOtherData[1].innerHTML = faker.vehicle.fuel();



        userLastSeenDate.innerHTML = faker.date.past();

        userLastSeenPlace.innerHTML = faker.address.country() + ", " + faker.address.city() + ", " + faker.address.streetAddress() + ", " + faker.address.secondaryAddress();

        let facePicInd = Math.floor(Math.random() * 10) + 1;

        userFacePic.src = "./assets/img/id/id_0" + facePicInd + ".png";

        let lastSeenInd = Math.floor(Math.random() * 10) + 1;

        userLastSeen.src = "./assets/img/lastSeen/ls_0" + lastSeenInd + ".png"

    }

}









// ANCHOR Mouse Wheel



(function() {
    function scrollHorizontally(e) {
        e = window.event || e;
        var delta = Math.max(-1, Math.min(1, (e.wheelDelta || -e.detail)));
        document.getElementById('keys').scrollLeft -= (delta * 40); // Multiplied by 40
        e.preventDefault();
    }
    if (document.getElementById('keys').addEventListener) {
        // IE9, Chrome, Safari, Opera
        document.getElementById('keys').addEventListener('mousewheel', scrollHorizontally, false);
        // Firefox
        document.getElementById('keys').addEventListener('DOMMouseScroll', scrollHorizontally, false);
    } else {
        // IE 6/7/8
        document.getElementById('keys').attachEvent('onmousewheel', scrollHorizontally);
    }
})();