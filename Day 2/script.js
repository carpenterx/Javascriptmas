const body = document.getElementById("body")
const greeting = document.getElementById("greeting")
const christmasBtn = document.getElementById("christmas")
const snowBtn = document.getElementById("snow")
const switchBtn = document.getElementById("switch")

// Task:
//- Add the functionality to switch the theme between 'Christmas' and 'snow'.
christmasBtn.addEventListener("click", SetChristmasTheme);
snowBtn.addEventListener("click", SetSnowTheme);
switchBtn.addEventListener("click", ToggleTheme);

function ToggleTheme() {
    if (switchBtn.checked) {
        SetChristmasTheme();
    } else {
        SetSnowTheme()
    }
}

function SetChristmasTheme() {
    body.classList.remove("snow");
    body.classList.add("christmas");
    greeting.innerText = "🎅 Merry Christmas!";
    christmasBtn.checked = true;
    snowBtn.checked = false;
    switchBtn.checked = true;
}

function SetSnowTheme() {
    body.classList.remove("christmas");
    body.classList.add("snow");
    greeting.innerText = "☃️ Snowy Christmas!";
    christmasBtn.checked = false;
    snowBtn.checked = true;
    switchBtn.checked = false;
}

// Stretch goals:
// - Add more themes!
// - Allow the user to customise the themes.
// - Turn the radio buttons into a toggle switch.