const playBtn = document.getElementById("play-btn")
const pauseBtn = document.getElementById("pause-btn")
const stopBtn = document.getElementById("stop-btn")
const currentSong = document.getElementById("current-song")
const volumeSlider = document.getElementById("volume-slider")
const song1 = document.getElementById("song-1")
const song2 = document.getElementById("song-2")
const song1Path = "bells.mp3"
const song2Path = "Scott Holmes Music - A Peaceful Winter.mp3"
const song1Name = '<span>Jingle Bells</span>'
const song2Name = '<span>A Peaceful Winter by <a href="https://freemusicarchive.org/music/Scott_Holmes#contact-artist">Scott Holmes Music</a></span>'
var audio

playBtn.addEventListener("click", PlaySound)
pauseBtn.addEventListener("click", PauseSound)
stopBtn.addEventListener("click", StopSound)

song1.onclick = function () {
    ChangeSong(song1Path)
    UpdateCurrentSong(song1Name)
}

song2.onclick = function () {
    ChangeSong(song2Path)
    UpdateCurrentSong(song2Name)
}

volumeSlider.onchange = function (e) {
    audio.volume = e.currentTarget.value / 100;
}

window.onload = function () {
    ChangeSong(song1Path)
    UpdateCurrentSong(song1Name)
}

// Task:
// - Add the functionality to play, pause and stop the jingling bells (bells.mp3).
function PlaySound() {
    audio.play()
}

function StopSound() {
    audio.pause()
    audio.currentTime = 0
}

function PauseSound() {
    audio.pause()
}
// Stretch goals:
// - Add volume controls.
// - Allow the user to select different sounds.
function ChangeSong(songPath) {
    if (audio !== undefined) {
        PauseSound()
    }
    audio = new Audio(songPath)
    audio.volume = volumeSlider.value/100;
}

function UpdateCurrentSong(songName) {
    currentSong.innerHTML = songName
}