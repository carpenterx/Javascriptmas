const greeting = document.getElementById("greeting")
const music = document.getElementById("music")
const christmassifierBtn = document.getElementById("christmassifierBtn")
christmassifierBtn.addEventListener("click", christmassifyName)

var timer = null
var seconds

function christmassifyName() {
    // Task:
    // - Add christmassify class to greeting.
    //greeting.classList.add("christmassified")
    //- Check whether christmassifierBtn has christmassify on it. If so, change text to "De-christmassify", if not, change text to "Christmassify"
    if (christmassifierBtn.innerText == "Christmassify") {
        greeting.classList.add("christmassified")
        AddMusic()
        seconds = 20
        christmassifierBtn.innerText = `De-christmassify (${seconds})`
        timer = setInterval(UpdateTimer, 1000)
    } else {
        greeting.classList.remove("christmassified")
        RemoveMusic()
        clearTimeout(timer)
        christmassifierBtn.innerText = "Christmassify"
    }
}

// Stretch goals:
// - Play Christmas music when Christmas class is added.
function AddMusic() {
    music.innerHTML = '<iframe src="https://open.spotify.com/embed/track/5hslUAKq9I9CG2bAulFkHN?utm_source=generator&theme=0" width="100%" height="80" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"></iframe>'
}

function RemoveMusic() {
    music.innerHTML = ""
}

// - Remove the Christmas class after a given time.
function UpdateTimer() {
    seconds--
    if (seconds > 0) {
        christmassifierBtn.innerText = `De-christmassify (${seconds})`
    } else {
        clearTimeout(timer)
        christmassifyName()
    }
}