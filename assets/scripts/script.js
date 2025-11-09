let subtotal = 0;
let deliveryCost = 0;
let total = 0;

function init() {
  renderMenu();
  renderEmtyBasket();
  renderEmtyBasket();
}

function renderMenu() {
  let menuRef = document.getElementById("card_menu");
  for (let i = 0; i < menu.length; i++) {
    menuRef.innerHTML += getMenuTemplate(i);
    renderItems(i);
  }
}

function renderItems(i) {
  let itemsRef = document.getElementById(`${i}`);
  itemsRef.innerHTML = "";
  for (let index = 0; index < menu[i].items.length; index++) {
    itemsRef.innerHTML += getItemTemplate(i, index);
  }
}

function renderBasket() {
  let basketRef = document.getElementById("products_basket");
  basketRef.innerHTML = '';

  subtotal = 0;
  let endCostItem = 0;

  for (let i = 0; i < menu.length; i++) {
    for (let index = 0; index < menu[i].items.length; index++) {
      const item = menu[i].items[index];
      if (item.portion > 0) {
        endCostItem = item.portion * item.price;
        basketRef.innerHTML += getBasketTemlate(i, index, endCostItem);
        subtotal += endCostItem;
      }

    }
  }

  deliveryCost = subtotal > 0 ? 5.65 : 0;
  total = subtotal + deliveryCost;

  renderBasketSum();
}

function renderBasketSum() {
  let totalRef = document.getElementById("total_cost");
  let totalModalRef = document.getElementById("total_cost_modal");
  totalRef.innerHTML = "";
  totalModalRef.innerHTML = "";

  if (subtotal > 0) {
    totalRef.innerHTML = getBasketSumTemplate();
    totalModalRef.innerHTML = getBasketSumTemplate();

  }else {
    renderEmtyBasket()
  }
}

function renderBasketModal() {
  let basketRef = document.getElementById("products_basket");
  let basketModalRef = document.getElementById("products_basket_modal");
  basketModalRef.innerHTML = basketRef.innerHTML;
}

function renderEmtyBasket() {
  let basketRef = document.getElementById("products_basket");
  basketRef.innerHTML = getEmptyBasketTemplate();
}