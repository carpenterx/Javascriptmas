const ageSelector = document.getElementById("age-selector")
const genreSelector = document.getElementById("genre-selector")

const btn = document.getElementById("btn")
const suggestedMovie = document.getElementById("suggested-movie")

const moviesArr = [{
        name: "Die Hard",
        age: "18+",
        genre: "Action"
    },
    {
        name: "Love Actually",
        age: "18+",
        genre: "Romance"
    },
    {
        name: "The Polar Express",
        age: "PG",
        genre: "Action"
    },
    {
        name: "Shrek",
        age: "PG",
        genre: "Romance"
    },
    {
        name: "Home Alone",
        age: "PG",
        genre: "Comedy"
    },
    {
        name: "Bad Santa",
        age: "18+",
        genre: "Comedy"
    }
]

btn.addEventListener("click", DisplayMovieRecommendation)

DisplayMovieRecommendation()

// Task: 
// - Write a function to select a suitable movie based on the age group and genre provided.
function GetMovieRecommendation() {
    let movie = moviesArr.find(m => m.age == ageSelector.options[ageSelector.selectedIndex].value && m.genre == genreSelector.options[genreSelector.selectedIndex].value)
    return movie.name
}
//  - Display it in the suggested-movie paragraph when the button is clicked.
function DisplayMovieRecommendation() {
    suggestedMovie.innerText = GetMovieRecommendation()
}

// Stretch goals: 
// - Have the function run on each change of the <select> tags.
ageSelector.addEventListener("change", DisplayMovieRecommendation)
genreSelector.addEventListener("change", DisplayMovieRecommendation)
// - Add more movies/complexity - for example black and white vs color, preferred actors, etc.