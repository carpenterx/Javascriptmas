const textInput = document.getElementById("text-input")
const sign = document.getElementById("sign")
const startRadios = document.getElementsByName("start")
const endRadios = document.getElementsByName("end")
const borderColor = document.getElementById("border-color")
const backgroundColor = document.getElementById("background-color")
const textColor = document.getElementById("text-color")

var startEmoji = document.querySelector("input[name='start']:checked").value
var endEmoji = document.querySelector("input[name='end']:checked").value
UpdateSign()

textInput.addEventListener("input", UpdateSign)

borderColor.addEventListener("input", ChangeBorderColor)
backgroundColor.addEventListener("input", ChangeBackgroundColor)
textColor.addEventListener("input", ChangeTextColor)
// Task:
// - Write a function to update the Santa Stop Here sign with the user's own text.
function UpdateSign() {
    if (textInput.checkValidity() == true)
    {
        sign.innerText = `${startEmoji} ${textInput.value} ${endEmoji}`
    }
    else
    {
        sign.innerText = `${startEmoji} ${endEmoji}`
    }
}


// Stretch goals
// - Add a min and max length to the message.
// - Add interchangeable emojis.
for (let i = 0; i < startRadios.length; i++) {
    startRadios[i].addEventListener("input", UpdateStartEmoji)
}

for (let i = 0; i < endRadios.length; i++) {
    endRadios[i].addEventListener("input", UpdateEndEmoji)
}

function UpdateStartEmoji(e) {
    startEmoji = e.target.value
    UpdateSign()
}

function UpdateEndEmoji(e) {
    endEmoji = e.target.value
    UpdateSign()
}
// - Allow the user to customize the colors and other styling elements, too.
function ChangeBorderColor() {
    sign.style.borderColor = borderColor.value
}

function ChangeBackgroundColor() {
    sign.style.backgroundColor = backgroundColor.value
}

function ChangeTextColor() {
    sign.style.color = textColor.value
}