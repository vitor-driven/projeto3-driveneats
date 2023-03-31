function selectFood(x) {
    const pick = document.querySelector(".food .selected");
    if (pick) {
        pick.classList.remove("selected");
    }
    x.classList.add("selected");
}

function selectDrink(y) {
    const pick = document.querySelector(".drink .selected");
    if (pick) {
        pick.classList.remove("selected");
    }
    y.classList.add("selected");
}

function selectDessert(z) {
    const pick = document.querySelector(".dessert .selected");
    if (pick) {
        pick.classList.remove("selected");
    }
    z.classList.add("selected");
}
