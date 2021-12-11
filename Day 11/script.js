const previous = document.getElementById("previous")
const next = document.getElementById("next")
const img = document.getElementById("img")
const imgs = [{
        src: "imgs/village.jpg",
        alt: "christmas village at night with snow and christmas tree"
    },
    {
        src: "imgs/present.jpg",
        alt: "white and gold wrapped present on white table with snowflake decorations"
    },
    {
        src: "imgs/doggies.jpg",
        alt: "small black dog and small beige dog looking out the window at snow next to Christmas wreath"
    }
]

let imgNum = 0

next.addEventListener("click", ShowNextImage)
previous.addEventListener("click", ShowPrevImage)


// Task:
// - Wire up the buttons to switch through the images in the imgs array. 
function ShowNextImage() {
    GetNextIndex()
    ShowImage()
}

function ShowPrevImage() {
    GetPrevIndex()
    ShowImage()
}

function GetNextIndex() {
    imgNum++
    if (imgNum == imgs.length) {
        imgNum = 0
    }
}

function GetPrevIndex() {
    imgNum--
    if (imgNum < 0) {
        imgNum = imgs.length - 1
    }
}

function ShowImage() {

    img.addEventListener("animationend", UpdateSrc)
    img.style.animationPlayState = "running"

}

function UpdateSrc() {
    img.src = imgs[imgNum].src
    img.alt = imgs[imgNum].alt
    img.title = imgs[imgNum].alt
    img.removeEventListener("animationend", UpdateSrc)
    img.addEventListener("animationend", ClearAnimation)
    ResetAnimation(img, "faded")

    img.style.animationDirection = "reverse"
    img.style.animationPlayState = "running"
}

function ClearAnimation() {
    ResetAnimation(img, "faded")

    img.style.animationPlayState = "paused"
    img.style.animationDirection = "normal"
}

function ResetAnimation(element, animation) {
    element.classList.remove(animation)
    void element.offsetWidth
    element.classList.add(animation)
}
// - Make sure that the gallery works no matter how many images are added.
// - Decide/implement what to do when you reach either end of the array - do nothing and disable buttons, loop back round to the other end, or something else?
// - Remember to also update the alt tags.

// Stretch goals:
// - Add transitions for a smooth effect.
// - Allow the user to zoom in and out of the images.