const items = ["Candles", "Decorations", "Chocolate"]
const checklist = document.getElementById("checklist")

for (let i=0; i<items.length; i++) {
    checklist.innerHTML += `
         <div class="checklist-item">
                <input type="checkbox" id="${items[i]}" value="${items[i]}">
                <label for="${items[i]}" class="strikethrough">
                    <span class="custom-checkbox">${items[i]}
                </label>
            </div>
    `
}

checklist.innerHTML += `
<div class="checklist-item">
<input type="checkbox" id="Candles2" value="Candles2" class="candles">
<label for="Candles2" class="strikethrough">
    <span class="custom-checkbox">Candles
</span></label>
</div>
    `

    checklist.innerHTML += `
    <div class="checklist-item">
    <input type="checkbox" id="Decorations2" value="Decorations" class="decorations">
    <label for="Decorations2" class="strikethrough">
        <span class="custom-checkbox">Decorations
    </span></label>
</div>
    `

    checklist.innerHTML += `
    <div class="checklist-item">
    <input type="checkbox" id="Chocolate2" value="Chocolate" class="chocolate">
    <label for="Chocolate2" class="strikethrough">
        <span class="custom-checkbox">Chocolate
    </span></label>
</div>`