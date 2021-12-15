const languageSelector = document.getElementById("language-selector")
const greetingSelector = document.getElementById("greeting-selector")
const greetingDisplay = document.getElementById("greeting-text")
languageSelector.addEventListener("change", translate)
greetingSelector.addEventListener("change", translate)

const greetingsArr = [{
        language: "English",
        greeting: "Merry Christmas!",
        greeting2: "And a Happy New Year!"
    },
    {
        language: "Spanish",
        greeting: "¡Feliz Navidad!",
        greeting2: "¡Y un feliz año Nuevo!"
    },
    {
        language: "Ukrainian",
        greeting: "щасливого Різдва!",
        greeting2: "І з Новим роком!"
    },
    {
        language: "Welsh",
        greeting: "Nadolig Llawen!",
        greeting2: "A Blwyddyn Newydd Dda!"
    }
]

function translate() {
    // Task: 
    // - Write a function to display the correct greeting when a language is selected.
    DisplayGreeting(greetingsArr[languageSelector.selectedIndex][greetingSelector.options[greetingSelector.selectedIndex].value])
}

function DisplayGreeting(greeting) {
    let iterationCount = 0
    greetingDisplay.addEventListener("animationiteration", () => {
        iterationCount++
        if (iterationCount == 1) {
            greetingDisplay.innerText = greeting
        }
    })
    greetingDisplay.addEventListener("animationend", ResetAnimation)
    greetingDisplay.style.animationPlayState = "running"
}

// Stretch goals:
// - Animate the message switch.
function ResetAnimation() {
    greetingDisplay.style.removeProperty("animation-play-state")

    greetingDisplay.classList.remove("fade-out");
    void greetingDisplay.offsetWidth;
    greetingDisplay.classList.add("fade-out");
}
// - Add the option to switch the greeting, for example also have "And a Happy New Year!".