let scoreHome = document.getElementById("score-home");
let scoreGuest = document.getElementById("score-guest");
let homeTotal = 0;
let guestTotal = 0;

function homePlusOne() {
    homeTotal += 1;
    scoreHome.textContent = homeTotal;
}

function homePlusTwo() {
    homeTotal += 2;
    scoreHome.textContent = homeTotal;
}

function homePlusThree() {
    homeTotal += 3;
    scoreHome.textContent = homeTotal;
}

function guestPlusOne() {
    guestTotal += 1;
    scoreGuest.textContent = guestTotal;
}

function guestPlusTwo() {
    guestTotal += 2;
    scoreGuest.textContent = guestTotal;
}

function guestPlusThree() {
    guestTotal += 3;
    scoreGuest.textContent = guestTotal;
}

function resetScore() {
    homeTotal = 0;
    guestTotal = 0;
    scoreHome.textContent = 0;
    scoreGuest.textContent = 0;
}

