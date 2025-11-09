function getMenuTemplate(i) {
  return ` <div class="card-body" >
              <img
              src="${menu[i].src}"
              class="card-img-top menu-img"
              alt="${menu[i].alt}"
            />
              <h5 class="card-title">${menu[i].title}</h5>
         
            <ul id="${i}" class="list-group list-group-flush">
            </ul>
          </div>`;
}

function getItemTemplate(i, index) {
  return `
              <li class="list-group-item" onclick ="plusAction(${i},${index})">
                <div class="menu_info">
                  <h5>${menu[i].items[index].name}</h5>
                  <p>${menu[i].items[index].description}</p>
                  <p class="card_menu_preis">${menu[i].items[index].price} &euro;</p>
                </div>
               <div class="plus_menu"><img class="plus_image" src="./assets/icons/plus.png" alt="ein plus image"></div></li>`;
}

function getBasketTemlate(i, index, endCostItem) {
  return `<ul>
                  <li>
                    <h5>${menu[i].items[index].name}</h5>
                    <div class="basket_line">
                      <button class="basket_btn" onclick ="minusAction(${i},${index})" ><img class="basket_img" src="./assets/icons/minus.png" alt="minus image"></button>
                      <span >${menu[i].items[index].portion}X</span>
                      <button class="basket_btn" onclick ="plusAction(${i},${index})"><img class="basket_img" src="./assets/icons/plus.png" alt="plus image"></button>
                      <span class="total_cost_product"> ${endCostItem.toFixed(
                        2
                      )} &euro;</span>
                      <button class="basket_btn" onclick ="removeAction(${i},${index})"><img class="basket_img" src="./assets/icons/trash.png" alt="trash mage"></button>
                     </div>
                  </li>
                </ul>

                <div id="total">
               
               </div>
              `;
}

function getBasketSumTemplate() {
  return `  <ul>
      <li>
        <div class="total_line">
          <span>Zwischensumme</span>
          <span>${subtotal.toFixed(2)}&euro;</span>
        </div>
      </li>
      <li>
        <div class="total_line">
          <span>Lieferkosten</span>
          <span>${deliveryCost.toFixed(2)}&euro;</span>
        </div>
      </li>
      <li>
        <div class="total_line">
          <span><strong>Gesamt</strong></span>
          <span><strong>${total.toFixed(2)}&euro;</strong></span>
        </div>
      </li>
    </ul>
    <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal2">
  Bestellen
</button>
    `;
}

function getEmptyBasketTemplate() {
  return `<div class="empty_basket">
              <img
                class="empty_basket_img"
                src="./assets/icons/shopping-bag.png"
                alt="a shopping-bag"
              />
              <p class="empty_basket_text">
                Wähle leckere Gerichte aus der <br />
                Karte und bestelle Dein Menü.
              </p>
            </div>`;
}