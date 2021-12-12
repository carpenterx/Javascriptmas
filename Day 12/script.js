const input = document.getElementById("input")
const addGuestBtn = document.getElementById("add-guest")
const removeGuestBtn = document.getElementById("remove-guest")
const removeEvilBtn = document.getElementById("remove-evil")
let guestList = document.getElementById("guest-list")
let family = ["Me", "Cat"]
let guests = ["Partner", "Nice Relative 1", "Nice Relative 2", "Evil Relative", "Lonely Neighbour"]
let addedGuests = []

// Tasks:

// - Write the JS to render the Christmas day guest list in the guest-list element.
guests.forEach(item => AddToGuestsList(item))

function AppendGuest(guestName) {
    let guestLi = document.createElement("li")
    guestLi.innerText = guestName
    guestList.appendChild(guestLi)
}

function AddToGuestsList(guestName) {
    AppendGuest(guestName)
    addedGuests.push(guestName)
}

// - Add the functionality to add new guests.
addGuestBtn.addEventListener("click", AddNewGuest)

function AddNewGuest() {
    if (input.value != "") {
        AddToGuestsList(input.value)
    }
}

// Stretch goals: 

// - Add a button to remove the most recently added guests.
removeGuestBtn.addEventListener("click", RemoveGuest)

function RemoveGuest() {
    guestList.innerHTML = ""
    family.forEach(item => AppendGuest(item))
    addedGuests.pop()
    addedGuests.forEach(item => AppendGuest(item))
}
// - What about if you want to remove the evil relative?
removeEvilBtn.addEventListener("click", RemoveEvilRelative)

function RemoveEvilRelative() {
    guestList.innerHTML = ""
    family.forEach(item => AppendGuest(item))
    addedGuests = addedGuests.filter(function (value, index, arr) {
        return !value.includes("Evil");
    });
    addedGuests.forEach(item => AppendGuest(item))
}