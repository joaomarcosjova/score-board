let homeScore = document.getElementById("homescore")
let guestScore = document.getElementById("guestscore")

let countForHome = 0
let countForGuest = 0

//functions for home

function add1ToHome() {
    if ( countForHome == 20) {
        alert ("HOME IS THE WINNER")
    }
    else {
        countForHome += 1
        homeScore.textContent = countForHome
    }
}

function add2ToHome() {
    if (countForHome >= 20) {
      alert ("HOME IS THE WINNER")
    }
    else {
        countForHome += 2
        homeScore.textContent = countForHome
    }
}

function add3ToHome() {
    if (countForHome >= 20) {
        alert ("HOME IS THE WINNER")
    }
    else {
        countForHome += 3
        homeScore.textContent = countForHome
    }
}

// functions for Guest 

function add1ToGuest() {
    if (countForGuest == 20) {
        alert ("GUEST IS THE WINNER")
    }
    else {
        countForGuest += 1
        guestScore.textContent = countForGuest
    }
}

function add2ToGuest() {
    if (countForGuest >= 20) {
        alert("GUEST IS THE WINNER")
    }
    else {
        countForGuest += 2
        guestScore.textContent = countForGuest
    }
}

function add3ToGuest() {
    if (countForGuest >= 20) {
        alert("GUEST IS THE WINNER")
    }
    else {
        countForGuest += 3
        guestScore.textContent = countForGuest
    }

}

function reset() {
    homeScore.textContent = 0
    countForHome = 0
    guestScore.textContent = 0
    countForGuest = 0
}


    
