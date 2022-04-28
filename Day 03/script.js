const greeting = document.getElementById("greeting")
const btn = document.getElementById("btn")
const newYearBtn = document.getElementById("newYearBtn")

btn.addEventListener("click", fix)
newYearBtn.addEventListener("click", NewYearTheme)

function fix() {
    // Task:
    // - Write a function to fix the UI problems with this Christmas message (make it Christmassy!)
    // - Run the function when the Fix button is clicked.
    greeting.innerText = "🎅 Merry Christmas! ☃️";
    greeting.classList.add("christmas")
    greeting.classList.remove("new-year")
    document.body.style.backgroundColor = "var(--wine-red)";
}

//Stretch goals:
// - Add an extra theme, and the option to switch between them.
function NewYearTheme() {
    greeting.innerText = "🎆 Happy New Year! 🎇";
    greeting.classList.remove("christmas")
    greeting.classList.add("new-year")
    document.body.style.backgroundColor = "#0083c9";
}
// - Change the message and theme to a New Year’s one automatically on December 31st.
const today = new Date()
if (today.getMonth() == 11 && today.getDate() == 31) {
    NewYearTheme()
}