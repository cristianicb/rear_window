// ANCHOR GLOBAL VARIABLES

let randomText = document.getElementById("randomText");
let user = document.getElementById("user");

let userName = document.getElementById("name");
let userCity = document.getElementById("city");
let userMoney = document.getElementById("money");
let userPosition = document.getElementById("position");
let userIban = document.getElementById("iban");
let userFriends = document.getElementById("friends");
let userEnemies = document.getElementById("enemies");
let userFavCol = document.getElementById("favCol");

let userEmail = document.getElementById("email");
let userPass = document.getElementById("pass");
let userUrl = document.getElementById("url");
let userFears = document.getElementById("fears");

let avatar = document.getElementById("avatar");

let wordString = "";
let wordsNumber = 1000;



// ANCHOR Create random words

for (var o = 0; o < wordsNumber; o++) {

    function makeid(length) {
        wordString += "<a href=''>";
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


// ANCHOR Make the word do stuff

for (i = 0; i < allWords.length; i++) {
    allWords[i].onmouseenter = function() {
        this.style.color = "red";
        // ANCHOR Random data





        userName.innerHTML = faker.name.findName();

        userCity.innerHTML = faker.address.city();
        userIban.innerHTML = faker.finance.iban();
        userMoney.innerHTML = faker.finance.amount() * 1000000 + " " + faker.finance.currencySymbol();

        userPosition.innerHTML = faker.address.nearbyGPSCoordinate() + " / " + faker.address.nearbyGPSCoordinate() + " / " + faker.address.direction();

        userEmail.innerHTML = userName.innerHTML.toLowerCase().replace(/\s/g, '') + "_" + faker.random.number() + "@" + faker.internet.email().split('@')[1];
        userPass.innerHTML = faker.internet.password();
        userUrl.innerHTML = "https://" + userName.innerHTML.toLowerCase().replace(/\s/g, '') + ".info";
        userFears.innerHTML = faker.random.word() + ", " + faker.random.word() + ", " + faker.random.word();

        userFriends.innerHTML = faker.name.findName() + ", " + faker.name.findName() + ", " + faker.name.findName();
        userEnemies.innerHTML = faker.name.findName() + ", " + faker.name.findName() + ", " + faker.name.findName();
        userFavCol.innerHTML = faker.commerce.color();
        // gd(userCity, address, city);

        // TODO Add random image
        // avatar.src = faker.image.people();
    }
    allWords[i].onmouseleave = function() {
        this.style.color = "#006600";

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