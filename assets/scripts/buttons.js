
function plusAction(i, index) {
  menu[i].items[index].portion = menu[i].items[index].portion + 1;
  renderBasket();
  renderBasketSum();
  renderBasketModal();
}

function minusAction(i, index) {
  menu[i].items[index].portion = menu[i].items[index].portion - 1;
  renderBasket();
  renderBasketSum();
  renderBasketModal();
}

function removeAction(i, index) {
  menu[i].items[index].portion = 0;
  renderBasket();
  renderBasketSum();
  renderBasketModal();
}

function refreshBasket() {
    for(let i = 0; i < menu.length; i++) {
        for(let index = 0; index < menu[i].items.length; index++) {
            menu[i].items[index].portion = 0;
            renderBasket();
            renderBasketModal();

        }
    }
}