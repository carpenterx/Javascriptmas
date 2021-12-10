const meter = document.getElementById("meter")
const day = document.getElementById("day")

const christmas = 25
let today = new Date().getDate()

day.value = today
day.addEventListener("change", UpdateMeter)
UpdateMeter()

// Task:
// Write a function to wire up the festivity loader to reflect how many days are remaining until Christmas!
function UpdateMeter() {
    meter.value = day.value
}

// Stretch goals:
// - Animate the loader.
// - Change the colors depending on the meter's value.
