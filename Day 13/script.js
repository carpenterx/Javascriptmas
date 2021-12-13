const btn = document.getElementById("btn")
const vegetarianCheck = document.getElementById("vegetarian-input")
const allergyCheck = document.getElementById("allergy-input")
const guestsNum = document.getElementById("num-input")
let food = document.getElementById("food")
const turkeyRecipe = document.getElementById("roast-turkey")
const gooseRecipe = document.getElementById("roast-goose")
const veggiesRecipe = document.getElementById("roasted-vegetables")
const peppersRecipe = document.getElementById("stuffed-peppers")

btn.addEventListener("click", SuggestDinner)

// Tasks:
// - Write the JS to decide the perfect Christmas dinner and render it in the result element. Don't forget to check whether the meal should be vegetarian!

// Dinner suggestions (or choose your own!):
// Vegetarian: roasted vegetables (instead of nut roast)
// Vegetarian + Nut Allergy: stuffed peppers
// Nut Allergy or less than 4 people: turkey
// 5+ people: goose 
function SuggestDinner() {
    if (vegetarianCheck.checked) {
        if (allergyCheck.checked) {
            // stuffed peppers
            //food.innerText = "stuffed peppers"
            ShowResult("stuffed peppers")
            ShowRecipe(peppersRecipe)
        } else {
            //food.innerText = "nut roast"
            //food.innerText = "roasted vegetables"
            ShowResult("roasted vegetables")
            ShowRecipe(veggiesRecipe)
        }
    } else {
        if (allergyCheck.checked || guestsNum.value <= 4) {
            //food.innerText = "turkey"
            ShowResult("turkey")
            ShowRecipe(turkeyRecipe)
        } else {
            //food.innerText = "goose"
            ShowResult("goose")
            ShowRecipe(gooseRecipe)
        }
    }
}

function ShowResult(result)
{
    food.innerText = result
}

// Stretch goals:
// - Add more dietary options.
// - Show recipes when the meal has been selected.
function ShowRecipe(recipe) {
    HideRecipes()
    recipe.classList.remove("hide")
}

function HideRecipes() {
    turkeyRecipe.classList.add("hide")
    gooseRecipe.classList.add("hide")
    veggiesRecipe.classList.add("hide")
    peppersRecipe.classList.add("hide")
}