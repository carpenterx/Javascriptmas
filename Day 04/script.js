var items = ["Candles", "Decorations", "Chocolate"]
const checklist = document.getElementById("checklist")
const newItem = document.getElementById("new-item")

// Task:
// - For each item in the items array, create a div with a class of "checklist-item", which contains a checkbox input and corresponding label.
items.forEach(CreateListItem);
 
function CreateListItem(item) {
    var div = document.createElement("div");
    div.classList.add("checklist-item")
    var checkbox = document.createElement("input")
    checkbox.type = "checkbox"
    checkbox.id = item
    var label = document.createElement("label")
    label.classList.add("strikethrough")
    label.setAttribute("for", item)
    label.innerText = item
    div.appendChild(checkbox)
    div.appendChild(label)
    checklist.appendChild(div)
}
// - Make sure that the shopping list can render a checkbox for all the items, even if new items are added to the items array.

// Stretch goals:
// - Add an input which allows the user to add more items.
function AddItem()
{
    let value = newItem.value
    if (!items.includes(value))
    {
        items.push(value)
        CreateListItem(value)
    }
}
// - Add a delete button for the items.
function ClearList()
{
    items = []
    checklist.innerHTML = ""
}
