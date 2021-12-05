const greetingDisplay = document.getElementById("greeting-display")
const toDisplay = document.getElementById("to-display")
const fromDisplay = document.getElementById("from-display")
const to = document.getElementById("to")
const from = document.getElementById("from")
const greetingInput = document.getElementById("greeting-input")
const btn = document.getElementById("btn")
const bauble = document.getElementById("bauble")
//btn.addEventListener("click", writeGreeting)
//btn.addEventListener("click", writeGeetingToFrom)
btn.addEventListener("click", writeGeetingCustom)

var defaultGreetings = [
    "Santa Claus is coming to town!",
    "We wish you a Merry Christmas!",
    "Happy holidays!",
    "Ho, ho, ho! Merry Christmas!",
    "Jingle all the way!",
]
var greetings = defaultGreetings

// Task:
// Write a function to display a random greeting in the card.
function writeGreeting()
{
    greetingDisplay.innerText = greetings[Math.floor(Math.random() * greetings.length)]
}
// Stretch goals:
// - Allow the user to input to and from names.
function writeGeetingToFrom()
{
    greetingDisplay.innerText = greetings[Math.floor(Math.random() * greetings.length)]
    if (to.value != "")
    {
        toDisplay.innerText = `To: ${to.value}`
    }
    else
    {
        toDisplay.innerText = ""
    }
    if (from.value != "")
    {
        fromDisplay.innerText = `From: ${from.value}`
    }
    else
    {
        fromDisplay.innerText = ""
    }
    
}
// - Add an input for custom messages.
function writeGeetingCustom()
{
    if (greetingInput.value != "")
    {
        greetingDisplay.innerText = greetingInput.value
    }
    else
    {
        greetingDisplay.innerText = greetings[Math.floor(Math.random() * greetings.length)]
    }
    if (to.value != "")
    {
        toDisplay.innerText = `To: ${to.value}`
    }
    else
    {
        toDisplay.innerText = ""
    }
    if (from.value != "")
    {
        fromDisplay.innerText = `From: ${from.value}`
    }
    else
    {
        fromDisplay.innerText = ""
    }
}