let foodname, foodcost, drinkname, drinkcost, dessertname, dessertcost;

function selectFood(x) {
    const foodpick = document.querySelector(".food .selected");
    if (foodpick) {
        foodpick.classList.remove("selected");
    }
    x.classList.add("selected");
    foodname = x.querySelector(".dish-name").innerHTML;
    foodcost = x.querySelector(".dish-price").innerHTML;
    orderReady();
}

function selectDrink(y) {
    const drinkpick = document.querySelector(".drink .selected");
    if (drinkpick) {
        drinkpick.classList.remove("selected");
    }
    y.classList.add("selected");
    drinkname = y.querySelector(".dish-name").innerHTML;
    drinkcost = y.querySelector(".dish-price").innerHTML;
    orderReady();
}

function selectDessert(z) {
    const dessertpick = document.querySelector(".dessert .selected");
    if (dessertpick) {
        dessertpick.classList.remove("selected");
    }
    z.classList.add("selected");
    dessertname = z.querySelector(".dish-name").innerHTML;
    dessertcost = z.querySelector(".dish-price").innerHTML;
    orderReady();
}

function stringToNumber(pricestring) {
    let price = pricestring;
    price = price.replace("R$ ", "");
    price = price.replace(",", ".");
    price = Number(price);
    return price;
}

function numberToString(pricenumber) {
    pricenumber = pricenumber.toFixed(2);
    let pricetext = pricenumber.toString();
    pricetext = pricetext.replace(".", ",");
    pricetext = "R$ " + pricetext;
    return pricetext;
}

function orderReady() {
    if (foodname && drinkname && dessertname) {
        foodcost = stringToNumber(foodcost);
        drinkcost = stringToNumber(drinkcost);
        dessertcost = stringToNumber(dessertcost);
        const readyToOrder = document.querySelector(".order-button");
        readyToOrder.classList.add("ready");
        readyToOrder.innerHTML = "Fechar pedido";
    }
}

function sendOrder() {
    if (foodname && drinkname && dessertname) {
        let totalcost = foodcost + drinkcost + dessertcost;
        totalcost = numberToString(totalcost);
        let message = `Olá, gostaria de fazer o pedido:\n- Prato: ${foodname}\n- Bebida: ${drinkname}\n- Sobremesa: ${dessertname}\nTotal: ${totalcost}`;
        message = encodeURIComponent(message);
        window.open("https://wa.me/5562993387811?text=" + message);
    }
}
