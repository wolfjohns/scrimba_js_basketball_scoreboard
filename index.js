let homeScoreBtnOne = document.getElementById("home-score-btn-1")
let homeStoreEl =document.getElementById("home-score")
let homeScore = 0

let guestScoreBtnOne = document.getElementById("guest-score-btn-1")
let guestScoreEl = document.getElementById("guest-score")
let guestScore = 0

function homeTeamplus1(){
    homeScore += 1
    homeStoreEl.textContent = homeScore
}

function homeTeamplus2(){
    homeScore += 2
    homeStoreEl.textContent = homeScore
}

function homeTeamplus3(){
    homeScore += 3
    homeStoreEl.textContent = homeScore
}

let guestTeamplus1 = () => {
    guestScore += 1
    guestScoreEl.textContent = guestScore
}

let guestTeamplus2 = () => {
    guestScore += 2
    guestScoreEl.textContent = guestScore
}

let guestTeamplus3 = () => {
    guestScore += 3
    guestScoreEl.textContent = guestScore
}