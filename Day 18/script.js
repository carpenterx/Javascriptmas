const items = ["Candles", "Decorations", "Chocolate", "Socks", "Cookies"]
const checklist = document.getElementById("checklist")
const checks = ["present", "candles", "decorations", "chocolate", "cookies", "socks"]
const randomChecks = ["candles", "decorations", "chocolate", "santa", "mrs-claus", "elf", "deer", "snowflake", "snowman", "cookies", "bell"]

const presentBtn = document.getElementById("preset-btn")
const randomBtn = document.getElementById("random-btn")
const matchingBtn = document.getElementById("matching-btn")

presentBtn.addEventListener("click", AssignPresentChecks)
randomBtn.addEventListener("click", AssignRandomChecks)
matchingBtn.addEventListener("click", AssignMatchingChecks)

function GetRandomIndex(array) {
    return Math.floor(Math.random() * array.length)
}

function GetRandomCheck(array) {
    let index = GetRandomIndex(array)
    let randomCheck = array[index]
    if (index > -1) {
        array.splice(index, 1)
    }
    return randomCheck
}

function AssignRandomChecks() {
    checklist.innerHTML = ""
    let array = [...randomChecks]

    for (let i = 0; i < items.length; i++) {
        let check = GetRandomCheck(array)
        checklist.innerHTML += `
            <div class="checklist-item">
                <input type="checkbox" id="${items[i]}" value="${items[i]}">
                <label for="${items[i]}" class="strikethrough ${check}">
                    <span class="custom-checkbox">${items[i]}
                </label>
            </div>
        `
    }
}

function AssignPresentChecks() {
    checklist.innerHTML = ""
    for (let i = 0; i < items.length; i++) {
        checklist.innerHTML += `
            <div class="checklist-item">
                <input type="checkbox" id="${items[i]}" value="${items[i]}">
                <label for="${items[i]}" class="strikethrough present">
                    <span class="custom-checkbox">${items[i]}
                </label>
            </div>
        `
    }
}

function AssignMatchingChecks() {
    checklist.innerHTML = ""
    for (let i = 0; i < items.length; i++) {
        let itemValue = items[i].toLowerCase()
        let check = GetMatchingCheck(itemValue)
        checklist.innerHTML += `
            <div class="checklist-item">
                <input type="checkbox" id="${itemValue}" value="${items[i]}">
                <label for="${itemValue}" class="strikethrough ${check}">
                    <span class="custom-checkbox">${items[i]}
                </label>
            </div>
        `
    }
}

function GetMatchingCheck(value) {
    if (checks.includes(value)) {
        return value
    } else {
        return "present"
    }
}