const items = ["Candles", "Decorations", "Chocolate"]
const checklist = document.getElementById("checklist")

// Task:
// - For each item in the items array, create a div with a class of "checklist-item", which contains a checkbox input and corresponding label.
items.forEach(CreateListItem);
 
function CreateListItem(item, index) {
    var div = document.createElement("div");
    div.classList.add("checklist-item")
    var checkbox = document.createElement("input")
    checkbox.type = checkbox
    div.appendChild(checkbox)
    checklist.appendChild(div)
}
// - Make sure that the shopping list can render a checkbox for all the items, even if new items are added to the items array.

// Stretch goals:
// - Add an input which allows the user to add more items.
// - Add a delete button for the items.

