const playBtn = document.getElementById("play-btn")
const pauseBtn = document.getElementById("pause-btn")
const stopBtn = document.getElementById("stop-btn")
const audio = new Audio("../Day 7/bells.mp3");
const bell = document.getElementById("bell")
playBtn.addEventListener("click", play)
pauseBtn.addEventListener("click", pause)
stopBtn.addEventListener("click", stop)

function play() {
    audio.play()
    AnimateBell()
    ResumeAnimation()
}

function pause() {
    audio.pause()
    PauseAnimation()
}

function stop() {
    audio.pause()
    audio.currentTime = 0
    ResetAnimation()
}

// Task:
// - Animate the bell so that it looks like it is ringing when the music is playing, and stops when the music is paused or stopped. 
function AnimateBell() {
    bell.classList.add("animate")
}
//NB: You'll need to make changes in the CSS too 😉

// Stretch goal:
// - Make sure the animation doesn't reset when paused.
function PauseAnimation() {
    bell.style.animationPlayState = "paused";
}

function ResumeAnimation() {
    bell.style.animationPlayState = "running";
}

function ResetAnimation() {
    bell.classList.remove("animate");

    void element.offsetWidth;

    bell.classList.add("animate");
}