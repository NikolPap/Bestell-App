function init() {
    renderpizza();
    renderSalad();
    renderDessert();

}

function getTemplate(index, i) {
    return `
              <li class="list-group-item"><div class="menu_info">
                  <h5>${menu[index].items[i].name}</h5>
                  <p>${menu[index].items[i].description}</p>
                  <p class="card_menu_preis">${menu[index].items[i].price} &euro;</p>
                </div>
               <div class="plus_menu"><img class="plus_image" src="./assets/icons/plus.png" alt="ein plus image"></div></li>`
}

function renderpizza() {
    let pizzaRef = document.getElementById("pizza")
    for (let i = 0; i < menu[0].items.length; i++) {
     pizzaRef.innerHTML += getTemplate(0,i); 
    }
}


function renderSalad() {
    let saladRef = document.getElementById("salad")
    for (let i = 0; i < menu[1].items.length; i++) {
     saladRef.innerHTML += getTemplate(1,i); 
    }
}

function renderDessert() {
  let dessertRef = document.getElementById("dessert")
    for (let i = 0; i < menu[2].items.length; i++) {
     dessertRef.innerHTML += getTemplate(2,i); 
}
}
