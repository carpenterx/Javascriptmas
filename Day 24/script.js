const crew = document.getElementById("crew")
const btn = document.getElementById("btn")
const countdown = document.getElementById("countdown")
let timeout = undefined
var timerSeconds

// Task:
// - Write a function to launch the sleigh! 
// - See CSS for more tasks.
btn.addEventListener("click", StartCountdown)

function LaunchSleigh() {
    crew.addEventListener("animationend", function() {ResetAnimation(crew, "bounce-out-top")} )
    crew.style.animationPlayState = "running"
}

function ResetAnimation(element, animationClass) {
    element.style.removeProperty("animation-play-state")
    element.classList.remove(animationClass)

    void element.offsetWidth

    element.classList.add(animationClass)
}

// Stretch goals:
// - Add a cheering sound when the sleigh takes off.
// - Add a countdown to the launch time.
function StartCountdown() {
    timerSeconds = 5
    if (timeout != undefined) {
        clearInterval(timeout)
    }
    timeout = setInterval(TimerTick, 1000)
}

function TimerTick() {
    timerSeconds--
    countdown.innerText = timerSeconds
    ResetAnimation(countdown, "slide-out-top")
    countdown.style.animationPlayState = "running"

    if (timerSeconds <= 0) {
        clearInterval(timeout)
        countdown.innerText = ""
        LaunchSleigh()
    }
}