function init() {
    renderMenu()

}

function renderMenu() {
    let menuRef = document.getElementById("card_menu")
    for (let i=0; i < menu.length; i++) {
    menuRef.innerHTML += getMenuTemplate(i);
    renderItems(i);
    }
}

function renderItems(i) {
  let itemsRef = document.getElementById(`${i}`);
  itemsRef.innerHTML='';
  for (let index = 0; index < menu[i].items.length; index++) {
    itemsRef.innerHTML += getItemTemplate(i, index);
  }
}