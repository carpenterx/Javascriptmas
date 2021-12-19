const dessertImage1 = document.getElementById("dessert-image1")
const dessertImage2 = document.getElementById("dessert-image2")
const dessertImage3 = document.getElementById("dessert-image3")
const btn = document.getElementById("btn")
const showMultiple = document.getElementById("multiple-btn")
const previousBtn = document.getElementById("previous-btn")

var images = []
var currentImage = undefined

btn.addEventListener("click", findYum)
showMultiple.addEventListener("click", ShowMultipleDesserts)
previousBtn.addEventListener("click", GoToPreviousImage)

/* Task:
Call the Foodish API (https://foodish-api.herokuapp.com/) and display random images of desserts on the click of a button.

Specific URL to get a random dessert image: 
https://foodish-api.herokuapp.com/api/images/dessert */
findYum()

function findYum() {
    dessertImage1.classList.add("hide")
    dessertImage3.classList.add("hide")
    GetImage().then(data => 
        {
            let image = data.image
            DisplayImage(dessertImage2, image)
            if (currentImage != undefined) {
                images.push(currentImage)
            }
            currentImage = image
        })
}

async function GetImage() {
    let response = await fetch("https://foodish-api.herokuapp.com/api/images/dessert")
    let data = await response.json()
    return data
}

function DisplayImage(img, imagePath) {
    img.src = imagePath
}

// Stretch goals:
// - Show multiple desserts.
function ShowMultipleDesserts() {
    dessertImage1.classList.remove("hide")
    dessertImage3.classList.remove("hide")
    GetImage().then(data => DisplayImage(dessertImage1, data.image))
    GetImage().then(data => DisplayImage(dessertImage2, data.image))
    GetImage().then(data => DisplayImage(dessertImage3, data.image))
}
// - Add the functionality to go back to the previous image.
function GoToPreviousImage() {
    let previousImage = images.pop()
    if(previousImage!= undefined)
    {
        DisplayImage(dessertImage2, previousImage)
    }
}
