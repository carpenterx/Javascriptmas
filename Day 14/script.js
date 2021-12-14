const elf = document.getElementById("elf")
const btn = document.getElementById("btn")
const hammerBtn = document.getElementById("hammer")
const teaBtn = document.getElementById("tea")
const bowBtn = document.getElementById("bow")

var elves = 1
const maxElves = 100

btn.addEventListener("click", duplicateElf)
hammerBtn.addEventListener("click", GetHammer)
teaBtn.addEventListener("click", GetTea)
bowBtn.addEventListener("click", AndMyBow)

function duplicateElf() {
    // Task:
    // - Write a function to duplicate the elf when the button is clicked.
    // - See index.css for optional styling challenges.
    if (elves < maxElves) {
        elf.innerText += "🧝"
        elves++
    } else {
        alert("No more elves!")
    }
}

// Stretch goals:
// - Write a function to give the elves some tools, or a cup of tea!
function GetHammer() {
    elf.innerText += "🔨"
}

function GetTea() {
    elf.innerText += "🍵"
}

function AndMyBow() {
    elf.innerText += "🏹"
}
// - Limit the total number of elves to 100.