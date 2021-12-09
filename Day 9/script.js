const house = document.getElementById("house")
const decorator = document.getElementById("decorator")
const leftDecorations = document.getElementById("left-decorations")
const rightDecorations = document.getElementById("right-decorations")
const leftSelections = document.getElementById("left-selections")
const rightSelections = document.getElementById("right-selections")
decorator.addEventListener("click", deckTheHalls)

var leftButtons = document.querySelectorAll(".left-btn");
for (let i = 0; i < leftButtons.length; i++) {
    leftButtons[i].onclick = e => {
        AddLeftDecoration(e.target.innerText)
    }
}

var rightButtons = document.querySelectorAll(".right-btn");
for (let i = 0; i < rightButtons.length; i++) {
    rightButtons[i].onclick = e => {
        AddRightDecoration(e.target.innerText)
    }
}

function deckTheHalls() {
    // Task:
    // Write a function to add decorations (e.g. ☃️, 🎄, etc) next to the house when the switch is toggled. 
    if (decorator.checked) {
        leftDecorations.innerText = leftSelections.value
        rightDecorations.innerText = rightSelections.value
    } else {
        leftDecorations.innerText = ""
        rightDecorations.innerText = ""
    }
}

// Stretch goals:
// - Make sure that the house & decorations all stay on one line, even if there are a lot of decorations.
// - Allow the user to select different decorations.
function AddLeftDecoration(decoration) {
    AddDecoration(leftSelections, decoration)
}

function AddRightDecoration(decoration) {
    AddDecoration(rightSelections, decoration)
}

function AddDecoration(input, decoration) {
    input.value += decoration
}