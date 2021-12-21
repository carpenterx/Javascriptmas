const speedometer = document.getElementById("speedometer")
const select = document.getElementById("select")
const time = document.getElementById("time")
const calculateBtn = document.getElementById("calculate")
const averageBtn = document.getElementById("average")

calculateBtn.addEventListener("click", calculateSpeed)
averageBtn.addEventListener("click", CalculateAverageSpeed)

let currentLocation = ""
let timeTaken = 0
var speeds = []

let destination = [{
        name: "Munich",
        distanceFromPrevDestination: 2892
    },
    {
        name: "Kiev",
        distanceFromPrevDestination: 1111
    },
    {
        name: "Ulaanbaatar",
        distanceFromPrevDestination: 5324
    },
    {
        name: "Sydney",
        distanceFromPrevDestination: 5458
    },
    {
        name: "Tijuana",
        distanceFromPrevDestination: 6531
    },
    {
        name: "Chicago",
        distanceFromPrevDestination: 1729
    }
]

function calculateSpeed() {
    if (time.value > 0) {
        let speed = 0
        currentLocation = select.value

        // Task:
        // - Retrieve distance from previous destination from array of objects.
        let selectedDestination = destination.find(d => d.name == currentLocation)
        if (selectedDestination != undefined)
        {
            let distance = selectedDestination.distanceFromPrevDestination
            // - Calculate speed and round speed to an integer (whole number).
            speed = Math.round(distance / time.value)
            speeds.push(speed)
            // - Display speed in speedometer paragraph.
            speedometer.innerText = `Your current speed is: ${speed}`
        }
    }
}

// Stretch goals: 
// - Calculate average overall speed.
function CalculateAverageSpeed() {
    let speedsTotal = 0
    for (let i = 0; i < speeds.length; i++) {
        speedsTotal += speeds[i]
    }
    let averageSpeed = Math.round(speedsTotal / speeds.length)
    speedometer.innerText = `Your average speed is: ${averageSpeed}`
}
// - Display location as North Pole on pageload.
window.onload = DisplayNorthPole()

function DisplayNorthPole() {
    var option = document.createElement("option")
    option.value = "North Pole"
    option.text = "North Pole"
    option.selected = true
    option.disabled = true
    option.hidden = true

    select.add(option, select.options[0])
}