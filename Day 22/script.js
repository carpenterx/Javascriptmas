const btn = document.getElementById("btn")
let timer = document.getElementById("timer")
let affirmation = document.getElementById("affirmation")
const container = document.querySelector(".container")
let timeout = undefined
var timerSeconds

btn.addEventListener("click", StartTimer)
// Task:
// - Write a function to start the countdown timer on the button click and display it in the DOM. Stop the timer when it reaches 0.
function StartTimer() {
    timerSeconds = 60 * 15
    if (timeout != undefined) {
        clearInterval(timeout)
    }
    ShowAffirmation()
    ShowImage()
    timeout = setInterval(TimerTick, 1000)
}

function TimerTick() {
    timerSeconds--

    var minutes = Math.floor(timerSeconds / 60)
    var seconds = timerSeconds % 60
    timer.innerText = `${minutes < 10 ? "0" + minutes : minutes}:${seconds < 10 ? "0" + seconds : seconds}`

    if (timerSeconds <= 0) {
        clearInterval(timeout)
    }
}

// Stretch goals:
// - Show a relaxing image in the background while the timer is running.
function ShowImage() {
    GetImage().then(data => { container.style.backgroundImage = `url("${data.image}")` })
}

async function GetImage() {
    let response = await fetch("https://foodish-api.herokuapp.com/api/images/pizza")
    let data = await response.json()
    return data
}

function ShowAffirmation() {
    affirmation.innerText = "Enjoy a relaxing pizza"
}

// - Play relaxing music.