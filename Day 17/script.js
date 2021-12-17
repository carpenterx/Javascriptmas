const niceList = document.getElementById("nice-list")
const naughtyList = document.getElementById("naughty-list")
const btn = document.getElementById("btn")
const personName = document.getElementById("person-name")
const goodCheckbox = document.getElementById("has-been-good")
const addPerson = document.getElementById("add-person")

btn.addEventListener("click", Sort)
addPerson.addEventListener("click", AddPerson)

var nicePeople = []
var naughtyPeople = []

const sorteesArr = [{
        name: "David",
        hasBeenGood: false
    },
    {
        name: "Del",
        hasBeenGood: true
    },
    {
        name: "Valerie",
        hasBeenGood: false
    },
    {
        name: "Astrid",
        hasBeenGood: true
    }
]

// Task: 
// - Write the JavaScript to sort the people in sorteesArr into the naughty and nice lists, according to whether they have been good or not. Then display the names in the relevant place in the DOM.
function Sort() {
    nicePeople = []
    naughtyPeople = []
    for (let i = 0; i < sorteesArr.length; i++) {
        const person = sorteesArr[i]
        if (person.hasBeenGood) {
            nicePeople.push(person)
        } else {
            naughtyPeople.push(person)
        }
    }

    DisplayPeople(nicePeople, niceList)
    DisplayPeople(naughtyPeople, naughtyList)
}

function DisplayPeople(list, container) {
    container.innerHTML = ""
    for (let i = 0; i < list.length; i++) {
        var li = document.createElement("li")
        li.appendChild(document.createTextNode(list[i].name))
        li.onclick = e => {
            SelectPerson(e, list[i])
        }
        container.appendChild(li)
    }
}

// Stretch goals:
// - Add the option to add new names to the sorteesArr.
function AddPerson() {
    if (personName.value != null && personName.value != "" && !sorteesArr.some(p => p.name == personName.value)) {
        let newPerson = {
            name: personName.value,
            hasBeenGood: goodCheckbox.checked
        }
        sorteesArr.push(newPerson)
        personName.value = ""
    }

}
// - Make it possible to switch people to the other list.
function SelectPerson(e, person) {
    if (person.hasBeenGood) {
        e.target.style.color = "#C7375F"
    } else {
        e.target.style.color = "#344D2F"
    }

    person.hasBeenGood = !person.hasBeenGood
}